"use client";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import FlightSummary from "@/components/hotels/FlightSummary";
import HolidayCalendar from "@/components/hotels/HolidayCalendar";
import HolidayDealCard from "@/components/hotels/HolidayDealCard";
import EnquiryModal from "@/components/hotels/EnquiryModal";
import HotelBanner from "@/components/hotels/HotelBanner";
import HotelDetailsTabs from "@/components/hotels/HotelDetailsTabs";
import OfferHeader from "@/components/hotels/OfferHeader";
import ShareOffer from "@/components/hotels/ShareOffer";
import ContactAndTrending from "@/components/hotels/ContactAndTrending";
import Trustsection from "@/components/Trustsection";
import { HotelPageResponse, HotelDeal, DealsByDate } from "@/types/hotel";
import {
  processDealsByDate,
  formatDateTime,
  getTripSummary,
  getPricePerPerson,
  extractFilterOptions,
  prepareFilterOptionsForDisplay,
  prepareFilterOptionsWithIds,
  getBoardBasisText,
  formatPrice,
  getEffectivePrice,
  formatAirport,
  formatAirline,
  formatNights,
} from "@/lib/hotel-utils";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const asHtmlList = (items: unknown) => {
  if (!Array.isArray(items)) return "";
  const listItems = items
    .map((item) => `<li>${escapeHtml(String(item ?? ""))}</li>`)
    .join("");
  return `<ul>${listItems}</ul>`;
};

type SearchFilters = {
  departure: string;
  boardBasis: string;
  duration: string;
};

type PageSnapshot = {
  hotelData: HotelPageResponse;
  dealsByDate: DealsByDate;
  selectedDate: string;
  selectedDeal: HotelDeal | null;
  noDealsMessage: string;
};

const buildFilterKey = (filters: SearchFilters) =>
  `dep=${filters.departure || ""}|bb=${filters.boardBasis || ""}|dur=${filters.duration || ""}`;

export default function Home() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const gridRef = useRef<HTMLDivElement>(null);
  
  // State management
  const [hotelData, setHotelData] = useState<HotelPageResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [dealsByDate, setDealsByDate] = useState<DealsByDate>({});
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedDeal, setSelectedDeal] = useState<HotelDeal | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [noDealsMessage, setNoDealsMessage] = useState<string>("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({
    departure: "",
    boardBasis: "",
    duration: "",
  });
  const [currentFiltersDisplay, setCurrentFiltersDisplay] = useState({
    departure: "",
    boardBasis: "",
    duration: "",
  });
  // console.log(selectedDeal)
  // Always keep the latest filter IDs available to callbacks (avoids stale closure values)
  const currentFiltersRef = useRef(currentFilters);
  useEffect(() => {
    currentFiltersRef.current = currentFilters;
  }, [currentFilters]);

  // Also track the latest visible dropdown selections
  const currentFiltersDisplayRef = useRef(currentFiltersDisplay);
  useEffect(() => {
    currentFiltersDisplayRef.current = currentFiltersDisplay;
  }, [currentFiltersDisplay]);

  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inFlightAbortRef = useRef<AbortController | null>(null);
  const lastRequestIdRef = useRef(0);
  const initialSnapshotRef = useRef<PageSnapshot | null>(null);
  const searchCacheRef = useRef<Map<string, PageSnapshot>>(new Map());
  const lastAppliedFilterKeyRef = useRef<string>("");

  const handleBookNow = () => {
    alert("Booking holiday!");
  };

  const handleEnquireNow = () => {
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  // Fetch initial hotel data
  useEffect(() => {
    if (!slug) return;

    // Reset per-slug state refs (important when navigating between slugs)
    initialSnapshotRef.current = null;
    searchCacheRef.current.clear();
    lastAppliedFilterKeyRef.current = "";
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    if (inFlightAbortRef.current) inFlightAbortRef.current.abort();

    const fetchHotelData = async () => {
      try {
        // console.log("Fetching hotel data for:", slug);
        const response = await fetch(`/api/hotels/${slug}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: HotelPageResponse = await response.json();
        // console.log("Hotel data received:", data);

        const defaultDeal = (data as any)?.api_data?.default_deal as HotelDeal | null | undefined;
        const results = (data as any)?.api_data?.api_deals?.Results as HotelDeal[] | null | undefined;

        if (!defaultDeal?.hotel?.checkInDate) {
          // If we ended up here due to stale/invalid URL state (e.g. repeated "update" flows
          // then browser Back), reset to the clean base route with no query params.
          if (typeof window !== "undefined" && window.location.search) {
            window.location.replace(`/hotels/${slug}`);
            return;
          }

          setHotelData(data);
          setDealsByDate({});
          setSelectedDate("");
          setSelectedDeal(null);
          setNoDealsMessage(
            "We couldn’t find any offers that match your current search, but don’t worry — our team is ready to help! Please call us or send an enquiry, and we’ll create the perfect travel plan tailored just for you."
          );
          setLoading(false);
          return;
        }
        
        // Process deals by date
        const processed = processDealsByDate(
          defaultDeal,
          results
        );

        // Set initial selected date and deal
        const initialDate = defaultDeal.hotel.checkInDate;

        setHotelData(data);
        setDealsByDate(processed);
        setSelectedDate(initialDate);
        setSelectedDeal(defaultDeal);
        setNoDealsMessage("");

        // Set initial filters
        const customData = defaultDeal.customPricing?.custom_search_data;
        if (customData) {
          setCurrentFilters({
            departure: customData.departure_airports[0]?.id || "",
            boardBasis: customData.board_basis_multiple[0]?.id || "",
            duration: customData.duration[0] || "",
          });
        }

        // Capture the initial (base URL, no query) state snapshot once.
        // This is used when user presses Back and query params are cleared.
        if (!initialSnapshotRef.current) {
          initialSnapshotRef.current = {
            hotelData: data,
            dealsByDate: processed,
            selectedDate: initialDate,
            selectedDeal: defaultDeal,
            noDealsMessage: "",
          };
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [slug]);

  const restoreSnapshot = useCallback((snapshot: PageSnapshot) => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    if (inFlightAbortRef.current) inFlightAbortRef.current.abort();
    setIsSearching(false);
    setHotelData(snapshot.hotelData);
    setDealsByDate(snapshot.dealsByDate);
    setSelectedDate(snapshot.selectedDate);
    setSelectedDeal(snapshot.selectedDeal);
    setNoDealsMessage(snapshot.noDealsMessage);
  }, []);

  const performDynamicSearch = useCallback(
    async (filters: SearchFilters, filterKey: string) => {
      const requestId = ++lastRequestIdRef.current;

      // Cancel any previous in-flight request (prevents stale overwrites)
      if (inFlightAbortRef.current) inFlightAbortRef.current.abort();
      const controller = new AbortController();
      inFlightAbortRef.current = controller;

      setIsSearching(true);
      setNoDealsMessage("");

      try {
        const response = await fetch(`/api/hotels/${slug}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
          body: JSON.stringify({
            hotelKey: hotelData?.page.hotelKey,
            departure: filters.departure,
            boardBasis: filters.boardBasis,
            duration: filters.duration,
            adults: 2,
            children: 0,
          }),
        });

        const responseText = await response.text();
        const contentType = response.headers.get("content-type") || "";
        let result: any = null;
        if (responseText) {
          try {
            result = JSON.parse(responseText);
          } catch {
            console.error("Dynamic search returned non-JSON body", {
              status: response.status,
              contentType,
              bodyPreview: responseText.slice(0, 300),
            });
            return;
          }
        }

        if (!response.ok) {
          console.error("Dynamic search request failed", {
            status: response.status,
            contentType,
            body: result ?? responseText,
          });
          const snapshot: PageSnapshot | null = hotelData
            ? {
                hotelData,
                dealsByDate: {},
                selectedDate: "",
                selectedDeal: null,
                noDealsMessage: "Search failed. Please try again.",
              }
            : null;
          if (snapshot) {
            searchCacheRef.current.set(filterKey, snapshot);
            restoreSnapshot(snapshot);
          } else {
            setNoDealsMessage("Search failed. Please try again.");
          }
          return;
        }

        // Ignore stale responses
        if (requestId !== lastRequestIdRef.current) return;

        // Backend can return 200 with { success: false, error: "No deals found..." }
        const backendSuccess = result?.data?.success;
        if (backendSuccess === false) {
          const message = result?.data?.error || "We couldn’t find any offers that match your current search, but don’t worry — our team is ready to help! Please call us or send an enquiry, and we’ll create the perfect travel plan tailored just for you.";

          const snapshot: PageSnapshot | null = hotelData
            ? {
                hotelData,
                dealsByDate: {},
                selectedDate: "",
                selectedDeal: null,
                noDealsMessage: message,
              }
            : null;

          if (snapshot) {
            searchCacheRef.current.set(filterKey, snapshot);
            restoreSnapshot(snapshot);
          } else {
            setNoDealsMessage(message);
            setDealsByDate({});
            setSelectedDeal(null);
            setSelectedDate("");
          }
          return;
        }

        const apiData =
          result?.data?.api_data ?? result?.data?.data?.api_data ?? result?.api_data;

        const results =
          apiData?.api_deals?.Results ??
          result?.data?.api_deals?.Results ??
          result?.data?.data?.api_deals?.Results ??
          result?.api_deals?.Results;

        const defaultDeal =
          apiData?.default_deal ??
          result?.data?.default_deal ??
          result?.data?.data?.default_deal ??
          result?.default_deal;

        const successFlag =
          typeof result?.success === "boolean"
            ? result.success
            : typeof result?.data?.success === "boolean"
            ? result.data.success
            : true;

        if (!successFlag || !apiData || !Array.isArray(results) || !defaultDeal) {
          console.error("Dynamic search response missing expected data", {
            status: response.status,
            contentType,
            body: result,
          });
          setNoDealsMessage("We couldn’t find any offers that match your current search, but don’t worry — our team is ready to help! Please call us or send an enquiry, and we’ll create the perfect travel plan tailored just for you.");
          return;
        }

        const newDeals = processDealsByDate(defaultDeal, results);
        const firstDate = Object.keys(newDeals)[0] || "";
        const nextSelectedDeal = firstDate ? newDeals[firstDate]?.deal ?? null : null;

        let updatedHotelData: HotelPageResponse | null = null;
        setHotelData((prev) => {
          updatedHotelData = prev ? { ...prev, api_data: apiData } : prev;
          return updatedHotelData;
        });
        setDealsByDate(newDeals);
        setSelectedDate(firstDate);
        setSelectedDeal(nextSelectedDeal);
        setNoDealsMessage("");

        if (updatedHotelData) {
          const snapshot: PageSnapshot = {
            hotelData: updatedHotelData,
            dealsByDate: newDeals,
            selectedDate: firstDate,
            selectedDeal: nextSelectedDeal,
            noDealsMessage: "",
          };
          searchCacheRef.current.set(filterKey, snapshot);
        }
      } catch (error) {
        if ((error as any)?.name !== "AbortError") {
          console.error("Error during dynamic search:", error);
          setNoDealsMessage("Search failed. Please try again.");
        }
      } finally {
        if (requestId === lastRequestIdRef.current) {
          setIsSearching(false);
        }
      }
    },
    [hotelData, restoreSnapshot, slug]
  );

  // URL-driven search:
  // - Backend search ONLY happens in response to URL query param changes
  // - When query params are cleared, restore initial snapshot without backend
  useEffect(() => {
    if (!slug) return;
    if (loading) return;
    if (!hotelData) return;

    const filtersFromUrl: SearchFilters = {
      departure: searchParams.get("departure") || "",
      boardBasis: searchParams.get("boardBasis") || "",
      duration: searchParams.get("duration") || "",
    };

    const hasAnyFilter =
      Boolean(filtersFromUrl.departure) ||
      Boolean(filtersFromUrl.boardBasis) ||
      Boolean(filtersFromUrl.duration);

    if (!hasAnyFilter) {
      if (lastAppliedFilterKeyRef.current !== "") {
        lastAppliedFilterKeyRef.current = "";
      }
      if (initialSnapshotRef.current) {
        restoreSnapshot(initialSnapshotRef.current);
      }
      return;
    }

    const filterKey = buildFilterKey(filtersFromUrl);
    if (filterKey === lastAppliedFilterKeyRef.current) return;
    lastAppliedFilterKeyRef.current = filterKey;

    // Keep internal filter IDs aligned with the URL (display labels are handled by selectedDeal sync)
    setCurrentFilters(filtersFromUrl);

    const cached = searchCacheRef.current.get(filterKey);
    if (cached) {
      restoreSnapshot(cached);
      return;
    }

    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => {
      void performDynamicSearch(filtersFromUrl, filterKey);
    }, 600);
  }, [slug, searchParams, hotelData, loading, performDynamicSearch, restoreSnapshot]);

  // Prepare filter options with IDs (memoized to use in callbacks)
  const filterOptionsWithIds = useMemo(() => {
    return selectedDeal ? prepareFilterOptionsWithIds(selectedDeal) : {
      airports: [],
      boardBases: [],
      durations: [],
    };
  }, [selectedDeal]);

  const dealDisplayFilters = useMemo(() => {
    if (!selectedDeal) return { departure: "", boardBasis: "", duration: "" };

    const departureLabel = selectedDeal.flight?.departureAirportCode
      ? formatAirport(selectedDeal.flight.departureAirportCode)
      : "";

    const boardBasisLabel = selectedDeal.hotel?.boardBasis
      ? getBoardBasisText(selectedDeal.hotel.boardBasis)
      : "";

    const durationLabel = selectedDeal.hotel?.duration
      ? formatNights(selectedDeal.hotel.duration)
      : "";

    return {
      departure: departureLabel,
      boardBasis: boardBasisLabel,
      duration: durationLabel,
    };
  }, [selectedDeal]);
  
  // Handle date selection from calendar
  const handleDateSelection = useCallback((date: string) => {
    const deal = dealsByDate[date];
    if (deal) {
      setSelectedDate(date);
      setSelectedDeal(deal.deal);
      setNoDealsMessage("");
    }
  }, [dealsByDate]);

  // Keep dropdown filters in sync with the currently selected deal
  useEffect(() => {
    if (!selectedDeal) return;
    const customData = selectedDeal.customPricing?.custom_search_data;
    if (!customData) {
      setCurrentFiltersDisplay({
        departure: dealDisplayFilters.departure,
        boardBasis: dealDisplayFilters.boardBasis,
        duration: dealDisplayFilters.duration,
      });
      return;
    }

    // Prefer IDs that correspond to the currently selected deal (matches what the user sees)
    const dealDepartureLabel = dealDisplayFilters.departure;
    const matchedDeparture = customData.departure_airports?.find(
      (airport: any) =>
        String(airport.id) === String(selectedDeal.flight?.departureAirportCode) ||
        formatAirport(airport.id) === dealDepartureLabel
    );
    const departureId = matchedDeparture?.id || customData.departure_airports?.[0]?.id || "";

    const dealBoardCode = selectedDeal.hotel?.boardBasis;
    const matchedBoardBasis = customData.board_basis_multiple?.find(
      (basis: any) => basis.code === dealBoardCode
    );
    const boardBasisId = matchedBoardBasis?.id || customData.board_basis_multiple?.[0]?.id || "";

    const dealDuration = selectedDeal.hotel?.duration;
    const matchedDuration = customData.duration?.find(
      (d: string) => String(d) === String(dealDuration)
    );
    const durationId = matchedDuration || customData.duration?.[0] || "";

    setCurrentFilters({
      departure: departureId,
      boardBasis: boardBasisId,
      duration: durationId,
    });

    // Provide fallbacks for display labels in case deal fields are missing
    const fallbackDepartureId = customData.departure_airports?.[0]?.id;
    const fallbackBoardCode = customData.board_basis_multiple?.[0]?.code;
    const fallbackDuration = customData.duration?.[0];

    setCurrentFiltersDisplay({
      departure:
        dealDisplayFilters.departure ||
        (fallbackDepartureId ? formatAirport(fallbackDepartureId) : ""),
      boardBasis:
        dealDisplayFilters.boardBasis ||
        (fallbackBoardCode ? getBoardBasisText(fallbackBoardCode) : ""),
      duration:
        dealDisplayFilters.duration || (fallbackDuration ? formatNights(fallbackDuration) : ""),
    });
  }, [selectedDeal, dealDisplayFilters]);
  
  // Handle filter changes with debouncing
  const handleFilterChange = useCallback(
    async (filterType: "departure" | "boardBasis" | "duration", displayValue: string) => {
      // Don't allow search if custom pricing is active
      if (selectedDeal?.customPricing?.hasCustomPrice) {
        return;
      }

      // Update visible dropdowns immediately (prevents reverting while debounced search runs)
      setCurrentFiltersDisplay((prev) => ({
        ...prev,
        [filterType]: displayValue,
      }));

      const nextDisplay = {
        ...currentFiltersDisplayRef.current,
        [filterType]: displayValue,
      };
      currentFiltersDisplayRef.current = nextDisplay;

      const mapDisplayToId = (
        kind: "departure" | "boardBasis" | "duration",
        label: string
      ) => {
        if (!label) return "";
        if (kind === "departure") {
          return filterOptionsWithIds.airports.find((a) => a.label === label)?.id || label;
        }
        if (kind === "boardBasis") {
          return filterOptionsWithIds.boardBases.find((b) => b.label === label)?.id || label;
        }
        return filterOptionsWithIds.durations.find((d) => d.label === label)?.id || label;
      };

      const newFilters = {
        departure: mapDisplayToId("departure", nextDisplay.departure),
        boardBasis: mapDisplayToId("boardBasis", nextDisplay.boardBasis),
        duration: mapDisplayToId("duration", nextDisplay.duration),
      };
      currentFiltersRef.current = newFilters;
      setCurrentFilters(newFilters);

      // Manual dropdown changes update URL (creates browser history entries).
      // The backend search runs ONLY from the URL watcher effect above.
      const nextParams = new URLSearchParams(searchParams.toString());
      if (newFilters.departure) nextParams.set("departure", newFilters.departure);
      else nextParams.delete("departure");
      if (newFilters.boardBasis) nextParams.set("boardBasis", newFilters.boardBasis);
      else nextParams.delete("boardBasis");
      if (newFilters.duration) nextParams.set("duration", newFilters.duration);
      else nextParams.delete("duration");

      const query = nextParams.toString();
      router.push(query ? `/hotels/${slug}?${query}` : `/hotels/${slug}`, { scroll: false });
    },
    [slug, selectedDeal, filterOptionsWithIds, router, searchParams]
  );

  // Cleanup pending debounce + in-flight request on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
      if (inFlightAbortRef.current) inFlightAbortRef.current.abort();
    };
  }, []);
  
  // Loading state
  if (loading || !hotelData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pml-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading hotel details...</p>
        </div>
      </div>
    );
  }
  
  // Extract data for components
  const page = hotelData.page;
  const filterOptions = selectedDeal ? extractFilterOptions(selectedDeal) : null;
  
  // Prepare filter dropdown options with proper display names
  const displayFilters = selectedDeal ? prepareFilterOptionsForDisplay(selectedDeal) : {
    airports: [],
    boardBases: [],
    durations: [],
  };

  
  // Prepare price data for calendar
  const priceData = Object.entries(dealsByDate).map(([date, processed]) => ({
    date,
    price: processed.price,
  }));
  
  // Prepare flight details for FlightSummary
  let outboundFlightDetails = null;
  let inboundFlightDetails = null;
  if (selectedDeal) {
    const outbound = formatDateTime(selectedDeal.flight.outboundDepartureDate);
    const outboundArrival = formatDateTime(selectedDeal.flight.outboundArrivalDate);
    const inbound = formatDateTime(selectedDeal.flight.inboundDepartureDate);
    const inboundArrival = formatDateTime(selectedDeal.flight.inboundArrivalDate);
    
    outboundFlightDetails = {
      flightNumber: `${formatAirline(selectedDeal.flight.outboundFlightSupplier)} - ${selectedDeal.flight.outboundFlightNumber}`,
      departureCode: `${formatAirport(selectedDeal.flight.departureAirportCode)} (${selectedDeal.flight.departureAirportCode})`,
      arrivalCode: `${formatAirport(selectedDeal.flight.arrivalAirportCode)} (${selectedDeal.flight.arrivalAirportCode})`,
      departureDate: outbound.date,
      departureTime: outbound.time,
      arrivalDate: outboundArrival.date,
      arrivalTime: outboundArrival.time,
    };
    
    inboundFlightDetails = {
      flightNumber: `${formatAirline(selectedDeal.flight.inboundFlightSupplier)} - ${selectedDeal.flight.inboundFlightNumber}`,
      departureCode: `${formatAirport(selectedDeal.flight.arrivalAirportCode)} (${selectedDeal.flight.arrivalAirportCode})`,
      arrivalCode: `${formatAirport(selectedDeal.flight.departureAirportCode)} (${selectedDeal.flight.departureAirportCode})`,
      departureDate: inbound.date,
      departureTime: inbound.time,
      arrivalDate: inboundArrival.date,
      arrivalTime: inboundArrival.time,
    };
  }

  

  const reviewsData = {
    // Backend fields:
    // - trip_advisor_rating: rating value (e.g. "4.5")
    // - trip_advisor_reviews: number of reviews (e.g. "1,234")
    // - trip_advisor_reviews_rating: sometimes also present depending on feed
    rating: page.trip_advisor_rating || page.trip_advisor_reviews_rating,
    total: page.trip_advisor_reviews,
    updatedAt: page.trip_advisor_reviews_last_updated_date,
  };

  const handleCtaClick = () => {
    const calendarEl = document.getElementById("holiday-calendar");
    if (!calendarEl) return;
    calendarEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white relative">
      <EnquiryModal
        open={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialValues={{
          destination: hotelData.page.location,
          resort: selectedDeal?.hotel?.hotelName || hotelData.page.hotel_name,
          quoteRef: selectedDeal?.quoteReference,
          dealdata: selectedDeal,
          source: `Deal Page - ${hotelData.page.hotel_name}`,
        }}
      />
      <main className="mx-auto bg-white px-4 md:px-10">
        <HotelBanner
          location={page.location}
          title={page.offer_header}
          subtitle={page.info_paragraph || "Exclusive offer to Plan My Luxe - Hurry Limited Seats and Availability - Selling Fast!!!"}
          priceLabel="Price starting from"
          price={selectedDeal ? Math.round(getEffectivePrice(selectedDeal)).toString() : page.starting_price}
          ctaText="View Options"
          thumbnail_1={page.thumbnail_1}
          thumbnail_2={page.thumbnail_2}
          thumbnail_3={page.thumbnail_3}
          images={page.pictures}
          badgeText={page.offer_on_card || page.tag_list[0]}
        />

        {/* Badges + Header + Share (single row below banner) */}
        <div className="mx-auto max-w-[1280px] pt-[16px] pb-[8px]">
          <ShareOffer
            copyText="https://planmyluxe.com/offers/paphos-holiday"
            variant="headerRow"
          />
        </div>

        <div className="mx-auto max-w-[1280px] py-[16px] ">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6">
            {/* Left column */}
            <div className="w-full space-y-6">
              <OfferHeader
                badges={page.tag_list}
                location={page.location}
                hotelName={page.hotel_name}
                rating={Number(page.property_rating) || 0}
                description={page.headline_review}
              />
              <HolidayDealCard
                aboutTheDeal={page.about_the_deal}
                whyWeLoveThisHotel={page.why_we_love_this_hotel}
                aboutTheHotel={page.about_the_hotel}
              />
              <div id="holiday-calendar" className="flex gap-2 lg:block justify-between scroll-mt-24">
                <HolidayCalendar
                  availableAirports={displayFilters.airports}
                  availableBoardBases={displayFilters.boardBases}
                  availableDurations={displayFilters.durations}
                  selectedAirport={
                    currentFiltersDisplay.departure || displayFilters.airports[0] || ""
                  }
                  selectedBoardBasis={
                    currentFiltersDisplay.boardBasis || displayFilters.boardBases[0] || ""
                  }
                  selectedDuration={
                    currentFiltersDisplay.duration || displayFilters.durations[0] || ""
                  }
                  initialPrices={priceData}
                  initialDepartureDate={selectedDate}
                  defaultDate={hotelData.api_data.default_deal.hotel.checkInDate}
                  nights={selectedDeal?.hotel.duration || 7}
                  onDateSelect={handleDateSelection}
                  onFilterChange={handleFilterChange}
                  onEnquire={handleEnquireNow}
                  isSearching={isSearching}
                  hideFilters={selectedDeal?.customPricing?.hasCustomPrice || false}
                  noDealsMessage={noDealsMessage || undefined}
                />
              </div>
            </div>

            {/* Right column */}
              <aside className="w-full">
              <div
                className="space-y-4 sticky self-start"
                style={{ top: "calc(var(--main-nav-height, 0px) + 16px)" }}
              >
                  <div className="hidden md:block">
                    <ContactAndTrending />
                  </div>
                {noDealsMessage ? (
                  <FlightSummary
                    emptyStateMessage={noDealsMessage}
                    onBookNow={handleEnquireNow}
                  />
                ) : (
                  selectedDeal && (
                  <FlightSummary selectedDeal={selectedDeal} onBookNow={handleEnquireNow} />
                  )
                )}
                  <div className="md:hidden">
                    <ContactAndTrending />
                  </div>
              </div>
            </aside>
          </div>
        </div>

        <HotelDetailsTabs
          overview={page.about_the_hotel}
          location={[page.hotel_cordinates,page.location_detail]}
          facilities={
            Array.isArray(page.facilities)
              ? asHtmlList(page.facilities)
              : String(page.facilities ?? "")
          }
          reviews={reviewsData}
          finePrint={page.fine_print}
        />

        <div className="fixed inset-x-0 bottom-0 px-5 py-2 w-full bg-white justify-between z-50 md:hidden flex items-center gap-4">
          {noDealsMessage ? (
            <div className="text-[#4c4c4c] text-[12px] md:text-[13px]">
              <div className="mb-1 font-semibold">No deals found</div>
              {/* <div className="text-[12px] text-[#4c4c4c]">{noDealsMessage}</div> */}
            </div>
          ) : (
            <div className="text-[#4c4c4c] text-[12px] md:text-[13px]">
              <div className="mb-1">Price Starting From</div>
              <div className="text-[#CB2187] text-[24px] md:text-[28px] font-bold">
                <span className="text-[#4c4c4c] text-[12px]">£</span>{" "}
                {selectedDeal ? Math.round(getEffectivePrice(selectedDeal) / 2) : page.starting_price}{" "}
                <span className="text-[#4c4c4c] text-[12px]">pp</span>
              </div>
            </div>
          )}

          {noDealsMessage ? (
            <button
              type="button"
              onClick={() => {
                if (!slug) return;
                router.push(`/hotels/${slug}`);
              }}
              className="shrink-0 whitespace-nowrap bg-[#595858] hover:bg-[#4C4C4C] text-white font-semibold py-3 px-6 rounded-[8px] transition-all duration-200 text-[16px]"
            >
              Back
            </button>
          ) : (
            <button
              type="button"
              onClick={handleCtaClick}
              className="bg-[#CB2187] text-white text-[13px] md:text-[16px] font-semibold px-5 py-2 md:px-6 md:py-3 rounded-[10px]"
            >
              View Options
            </button>
          )}
        </div>
        <div className="bg-gradient-to-br from-[#1a9b9e] via-[#2ab5b8] to-[#5bc9cc] w-full py-[36px] md:py-[70px] md:pb-24 lg:pb-[80px] relative z-0">
          <div
            className="absolute top-0 bottom-0  bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: "url('https://planmylux.s3.eu-west-2.amazonaws.com/uploads/media-library/homepage/destination-carousel-bg.png')",
              width: '100vw',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>
          <div className="mx-auto max-w-[1280px]">
            <div className="rounded-[8px] overflow-hidden relative">
              <img src="https://planmylux.s3.eu-west-2.amazonaws.com/uploads/media-library/homepage/home-ad.jpg" className="sm:block hidden w-full h-[208px] object-cover" />
              <div className="w-full h-[160px] object-cover bg-[#92D8CC] sm:hidden"></div>
              <div className="absolute inset-0 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 sm:gap-5 px-6 md:px-12">
                <div className="flex flex-row items-center gap-5">
                  <svg className="w-[64px] h-[75px] sm:w-[99px] sm:h-[116px]" viewBox="0 0 99 116" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M56.693 2.34378C47.4033 6.02854 41.3801 12.5738 38.3928 21.9578C37.2468 25.5578 37.0331 29.2444 37.1708 32.9797C37.3182 36.9769 36.7833 40.8466 35.0855 44.5193C33.3652 48.2405 30.0888 51.3475 26.182 52.6962C28.212 49.3316 29.2783 45.8217 28.7413 42.1532C28.2425 38.7454 27.2664 35.3925 26.2958 32.0753C25.842 30.5241 24.5834 30.1039 23.2546 30.9443C9.04619 39.9307 -0.52195 52.0183 0.0220642 69.5821C0.535667 86.1638 7.70859 99.5097 22.1357 108.414C26.3618 111.023 30.9934 112.707 35.8541 113.728C36.3306 113.828 36.9373 113.878 37.3408 113.671C43.3211 110.613 48.9977 107.122 53.2399 101.754C59.4655 93.8776 60.3273 85.1124 57.4365 75.7513C55.8506 70.6158 52.6755 64.271 50.2509 61.4661C45.011 66.1205 41.9188 71.8943 40.9881 78.8328C40.0866 85.5532 41.1643 92.0204 43.4817 98.3304C43.6402 98.7618 43.9544 99.3063 43.8164 99.642C43.4984 100.415 43.1048 101.389 42.4517 101.737C41.5084 102.239 40.4238 101.782 40.0372 100.692C35.7529 88.6178 34.6761 76.6002 41.7691 65.1738C43.6868 62.0845 46.6369 59.6175 49.2206 56.9696C50.2157 55.9497 51.5138 56.0414 52.3986 57.2404C59.2132 66.4756 64.0426 76.4858 62.9708 88.3147C62.1872 96.9636 58.0744 104.081 51.3622 109.602C49.0994 111.463 46.6254 113.067 43.803 115.111C46.3484 115.111 48.4617 115.177 50.5697 115.099C60.3419 114.738 69.6561 112.651 78.1174 107.53C88.5042 101.243 94.6861 91.9386 97.1161 80.1872C100.373 64.4372 96.5711 50.3813 86.2618 38.092C81.3234 32.2051 76.0331 26.6849 69.774 22.1212C65.6216 19.0936 64.2375 14.0334 66.0018 9.19611C66.7099 7.2546 67.9111 5.49808 68.745 3.59479C69.0873 2.81352 69.4482 1.60023 69.087 1.06455C68.6552 0.424109 67.3814 -0.120538 66.608 0.0232485C63.3182 0.634838 60.0786 1.51645 56.693 2.34378Z" fill="white" />
                  </svg>
                  <div className="flex flex-col justify-center items-start">
                    <div className="text-white text-[12px] md:text-[14px] font-medium tracking-widest">
                      DISCOVER EXCLUSIVES
                    </div>
                    <div className="text-white text-lg md:text-2xl font-bold mt-1">
                      TRENDING TOP 20
                    </div>
                    <a href="#" className="mt-4 bg-[#CB2187] text-white hover:text-pml-primary border-2 border-[#CB2187] hover:border-2 hover:border-[#CB2187] px-2 md:px-6 py-2 rounded-[8px] text-[11px] sm:text-sm font-medium hover:bg-[#f3f3f3] w-full sm:w-auto text-center">
                      Find Your Perfect Deal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Trustsection/>
      </main>
    </div>
  );
}