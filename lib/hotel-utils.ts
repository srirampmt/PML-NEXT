import { HotelDeal, DealsByDate, ProcessedDeal } from "@/types/hotel";
import { getAirportName, getAirportNameWithCode } from "@/lib/mappings/airports";
import { getAirlineName, getAirlineNameWithCode } from "@/lib/mappings/airlines";
import { getBoardBasisName, getBoardBasisWithDescription } from "@/lib/mappings/board-basis";
import { formatDuration, formatDurationWithDays } from "@/lib/mappings/duration";

/**
 * Process API deals and group by check-in date
 * Shows only the cheapest deal per date
 */
export function processDealsByDate(
  defaultDeal: HotelDeal | null | undefined,
  apiDeals: HotelDeal[] | null | undefined
): DealsByDate {
  const result: DealsByDate = {};

  if (!defaultDeal?.hotel?.checkInDate) {
    return result;
  }

  // Add default deal
  const defaultDate = defaultDeal.hotel.checkInDate;
  const defaultPrice = getEffectivePrice(defaultDeal);
  
  result[defaultDate] = {
    price: defaultPrice,
    deal: defaultDeal,
    isDefault: true,
    hasCustomPrice: Boolean(defaultDeal.customPricing?.hasCustomPrice),
  };

  // Process all API deals - keep only cheapest per date
  const deals = Array.isArray(apiDeals) ? apiDeals : [];

  deals.forEach((deal) => {
    if (!deal?.hotel?.checkInDate) return;

    const date = deal.hotel.checkInDate;
    const effectivePrice = getEffectivePrice(deal);

    if (!result[date] || effectivePrice < result[date].price) {
      result[date] = {
        price: effectivePrice,
        deal: deal,
        isDefault: false,
        hasCustomPrice: Boolean(deal.customPricing?.hasCustomPrice),
      };
    }
  });

  return result;
}

/**
 * Get the effective price to display
 * Priority: custom price > total price
 */
export function getEffectivePrice(deal: HotelDeal): number {
  if (
    deal.customPricing?.hasCustomPrice &&
    deal.customPricing.customPrice !== null
  ) {
    return deal.customPricing.customPrice;
  }
  return deal.totalPrice;
}

/**
 * Format date to display format
 * @param dateString ISO date string "2026-01-16"
 * @returns "16 Jan 2026"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options).replace(/,/g, "");
}

/**
 * Format date and time from ISO DateTime
 * @param dateTimeString ISO DateTime "2026-01-16T18:15:00"
 * @returns { date: "Thu, 16 Jan", time: "18:15" }
 */
export function formatDateTime(dateTimeString: string): {
  date: string;
  time: string;
} {
  const dt = new Date(dateTimeString);
  
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const date = dt.toLocaleDateString("en-GB", dateOptions).replace(/,/g, "");
  
  const time = dt.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  
  return { date, time };
}

/**
 * Calculate trip duration text
 * @param startDate ISO date string
 * @param nights Number of nights
 * @returns "16 Jan - 23 Jan (7 nights)"
 */
export function getTripSummary(startDate: string, nights: number): string {
  const start = new Date(startDate + "T00:00:00");
  const end = new Date(start);
  end.setDate(start.getDate() + nights);

  const startText = formatDate(startDate);
  const endText = formatDate(end.toISOString().split("T")[0]);

  return `${startText} - ${endText} (${nights} nights)`;
}

/**
 * Format price for display
 * @param price Number
 * @returns "£299" or "£1,299"
 */
export function formatPrice(price: number): string {
  return `£${Math.round(price).toLocaleString("en-GB")}`;
}

/**
 * Calculate price per person
 * @param totalPrice Total price for 2 people
 * @returns Formatted price per person
 */
export function getPricePerPerson(totalPrice: number): string {
  const perPerson = totalPrice;
  return formatPrice(perPerson);
}

/**
 * Check if a date is in the past (including today)
 * @param dateString ISO date string "2026-01-16"
 * @returns boolean
 */
export function isPastDate(dateString: string): boolean {
  const date = new Date(dateString + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date <= today;
}

/**
 * Get board basis full text
 * @param code "AI", "HB", "FB", "BB", "SC", "RO"
 * @returns Full text (uses centralized mapping)
 */
export function getBoardBasisText(code: string): string {
  return getBoardBasisName(code);
}

/**
 * Format airport display
 * @param code Airport code (IATA or numeric)
 * @returns Full airport name
 */
export function formatAirport(code: string | number): string {
  return getAirportName(code);
}

/**
 * Format airline display
 * @param code Airline IATA code
 * @returns Full airline name
 */
export function formatAirline(code: string): string {
  return getAirlineName(code);
}

/**
 * Format duration display
 * @param nights Number of nights
 * @returns "7 Nights" or "1 Night"
 */
export function formatNights(nights: number | string): string {
  return formatDuration(nights);
}

/**
 * Navigate calendar to a specific date's month
 * @param date ISO date string
 * @returns { year: number, month: number }
 */
export function getMonthFromDate(date: string): { year: number; month: number } {
  const d = new Date(date + "T00:00:00");
  return {
    year: d.getFullYear(),
    month: d.getMonth(), // 0-indexed
  };
}

/**
 * Get lowest price from deals by date
 * @param dealsByDate Processed deals object
 * @returns { price: number, date: string }
 */
export function getLowestPrice(dealsByDate: DealsByDate): {
  price: number;
  date: string;
} | null {
  const entries = Object.entries(dealsByDate);
  if (entries.length === 0) return null;

  let lowest = { price: Infinity, date: "" };
  
  entries.forEach(([date, processed]) => {
    if (processed.price < lowest.price) {
      lowest = { price: processed.price, date };
    }
  });

  return lowest.price === Infinity ? null : lowest;
}

/**
 * Serialize deal data for enquiry form
 * @param deal HotelDeal object
 * @returns JSON string
 */
export function serializeDealData(deal: HotelDeal): string {
  return JSON.stringify({
    quoteReference: deal.quoteReference,
    hotelName: deal.hotel.hotelName,
    checkInDate: deal.hotel.checkInDate,
    duration: deal.hotel.duration,
    boardBasis: deal.hotel.boardBasis,
    totalPrice: deal.totalPrice,
    departureAirport: deal.flight.departureAirportCode,
    outboundFlight: deal.flight.outboundFlightNumber,
    inboundFlight: deal.flight.inboundFlightNumber,
  });
}

/**
 * Extract filter options from custom search data
 * @param deal HotelDeal with custom_search_data
 * @returns Filter options object
 */
export function extractFilterOptions(deal: HotelDeal) {
  const customData = deal.customPricing?.custom_search_data;
  
  return {
    departureAirports: customData?.departure_airports || [],
    boardBasis: customData?.board_basis_multiple || [],
    durations: customData?.duration || [],
  };
}

/**
 * Convert API filter options to display-friendly arrays with proper names
 * @param deal HotelDeal with custom_search_data
 * @returns Arrays ready for dropdown display
 */
export function prepareFilterOptionsForDisplay(deal: HotelDeal) {
  const customData = deal.customPricing?.custom_search_data;
  
  // Convert airports: [{id, name}] -> display names array
  const airports = (customData?.departure_airports || []).map((airport: any) => {
    return formatAirport(airport.id);
  });
  
  // Convert board basis: [{id, name}] -> display names array  
  const boardBases = (customData?.board_basis_multiple || []).map((basis: any) => {
    return getBoardBasisName(basis.code);
  });
  
  // Convert durations: ["2", "3", "7"] -> "2 Nights", "3 Nights", "7 Nights"
  const durations = (customData?.duration || []).map((d: string) => {
    return formatDuration(d);
  });
  
  return {
    airports,
    boardBases,
    durations,
  };
}

/**
 * Prepare filter options with both IDs and display names for dropdown mapping
 * @param deal HotelDeal with custom_search_data
 * @returns Object with arrays of {id, label} pairs
 */
export function prepareFilterOptionsWithIds(deal: HotelDeal) {
  const customData = deal.customPricing?.custom_search_data;
  
  // Airports with IDs and display names
  const airports = (customData?.departure_airports || []).map((airport: any) => ({
    id: airport.id,
    label: formatAirport(airport.id),
  }));
  
  // Board basis with IDs and display names
  const boardBases = (customData?.board_basis_multiple || []).map((basis: any) => ({
    id: basis.id,
    label: getBoardBasisName(basis.code),
  }));
  
  // Durations with IDs and display names
  const durations = (customData?.duration || []).map((d: string) => ({
    id: d,
    label: formatDuration(d),
  }));
  
  return {
    airports,
    boardBases,
    durations,
  };
}
