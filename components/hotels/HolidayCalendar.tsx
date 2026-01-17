"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronDown, ChevronLeft, ChevronRight, Plane, PlaneTakeoff, Phone } from "lucide-react";

/* ===================== TYPES ===================== */

interface PriceData {
  date: string; // YYYY-MM-DD
  price: number;
}

interface HolidayCalendarProps {
  availableAirports: string[];
  availableBoardBases: string[];
  availableDurations: string[];
  selectedAirport?: string;
  selectedBoardBasis?: string;
  selectedDuration?: string;
  initialPrices: PriceData[]; // Full list of available prices
  initialDepartureDate: string; // YYYY-MM-DD (e.g., "2025-10-08")
  defaultDate?: string; // Default deal date (shown in green)
  nights: number; // Initial number of nights (e.g., 7)
  onDateSelect?: (date: string) => void; // Callback when date is selected
  onFilterChange?: (filterType: "departure" | "boardBasis" | "duration", value: string) => void; // Callback for filter changes
  onEnquire?: () => void; // Callback for enquiry button (no deals state)
  isSearching?: boolean; // Loading state for search
  hideFilters?: boolean; // Hide filter dropdowns when custom pricing is active
  noDealsMessage?: string; // Show empty state when no deals found
}

interface DayData {
  dayOfMonth: number | null;
  dateKey: string | null;
  price: number | null;
  isPast: boolean;
  isSelectable: boolean;
}

/* ===================== HELPERS ===================== */

// Function to generate the price map for quick lookup
const getPriceMap = (prices: PriceData[]) => {
  return prices.reduce((map, item) => {
    map[item.date] = item.price;
    return map;
  }, {} as Record<string, number>);
};

const getDaysInMonth = (
  year: number,
  month: number,
  priceMap: Record<string, number>,
  today: Date
): DayData[] => {
  const date = new Date(year, month, 1);
  const firstDayIndex = date.getDay(); // 0 (Sun) to 6 (Sat)
  const days: DayData[] = [];

  // Add leading blank days (Mon-Sun start: Sunday=6, Monday=0)
  const numPreviousDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
  for (let i = 0; i < numPreviousDays; i++) {
    days.push({
      dayOfMonth: null,
      dateKey: null,
      price: null,
      isPast: false,
      isSelectable: false,
    });
  }

  // Add actual days
  while (date.getMonth() === month) {
    const day = date.getDate();
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    const dayDate = new Date(year, month, day);
    dayDate.setHours(0, 0, 0, 0); // Ensure comparison accuracy
    const isPast = dayDate <= today; // Today and earlier dates are past

    // Only use price if explicitly defined in priceMap
    const price = priceMap[dateKey] ?? null;

    // Set price to null for past dates
    const finalPrice = !isPast ? price : null;

    days.push({
      dayOfMonth: day,
      dateKey,
      price: finalPrice,
      isPast,
      isSelectable: !isPast, // All future dates are selectable (even without price)
    });

    date.setDate(date.getDate() + 1);
  }

  // Add trailing blank days to fill the grid (42 cells total for 6 weeks)
  while (days.length < 42) {
    days.push({
      dayOfMonth: null,
      dateKey: null,
      price: null,
      isPast: false,
      isSelectable: false,
    });
  }

  return days;
};

/* ===================== COMPONENT ===================== */

export default function HolidayCalendar({
  availableAirports,
  availableBoardBases,
  availableDurations,
  selectedAirport: selectedAirportProp,
  selectedBoardBasis: selectedBoardBasisProp,
  selectedDuration: selectedDurationProp,
  initialPrices,
  initialDepartureDate,
  defaultDate,
  nights,
  onDateSelect,
  onFilterChange,
  onEnquire,
  isSearching = false,
  hideFilters = false,
  noDealsMessage,
}: HolidayCalendarProps) {
  const router = useRouter();
  const { slug } = useParams<{ slug: string | string[] }>();
  const safeSlug = Array.isArray(slug) ? slug[0] : slug;

  // Ensure option lists are unique to avoid duplicate React keys (e.g. "East Midlands").
  const airportOptions = useMemo(
    () => Array.from(new Set((availableAirports || []).filter(Boolean))),
    [availableAirports]
  );

  const boardBasisOptions = useMemo(
    () => Array.from(new Set((availableBoardBases || []).filter(Boolean))),
    [availableBoardBases]
  );

  const durationOptions = useMemo(
    () => Array.from(new Set((availableDurations || []).filter(Boolean))),
    [availableDurations]
  );

  // --- STATE ---
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const initialDate = useMemo(() => {
    if (!initialDepartureDate) return today;
    const d = new Date(initialDepartureDate);
    return Number.isNaN(d.getTime()) ? today : d;
  }, [initialDepartureDate, today]);

  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [selectedDateKey, setSelectedDateKey] = useState(initialDepartureDate);

  // Filter states
  const [selectedAirport, setSelectedAirport] = useState(
    selectedAirportProp || airportOptions[0] || ""
  );
  const [selectedBoardBasis, setSelectedBoardBasis] = useState(
    selectedBoardBasisProp || boardBasisOptions[0] || ""
  );
  const [selectedDuration, setSelectedDuration] = useState(
    selectedDurationProp || durationOptions[0] || ""
  );

  // Keep internal selected date/month in sync when parent changes selected date
  useEffect(() => {
    if (!initialDepartureDate) return;
    const d = new Date(initialDepartureDate);
    if (Number.isNaN(d.getTime())) return;
    setSelectedDateKey(initialDepartureDate);
    setCurrentMonth(d.getMonth());
    setCurrentYear(d.getFullYear());
  }, [initialDepartureDate]);

  // Keep dropdown selections synced with the selected deal's filter values
  useEffect(() => {
    if (selectedAirportProp && airportOptions.includes(selectedAirportProp)) {
      setSelectedAirport(selectedAirportProp);
      return;
    }
    if (!airportOptions.includes(selectedAirport)) {
      setSelectedAirport(airportOptions[0] || "");
    }
  }, [selectedAirportProp, airportOptions, selectedAirport]);

  useEffect(() => {
    if (selectedBoardBasisProp && boardBasisOptions.includes(selectedBoardBasisProp)) {
      setSelectedBoardBasis(selectedBoardBasisProp);
      return;
    }
    if (!boardBasisOptions.includes(selectedBoardBasis)) {
      setSelectedBoardBasis(boardBasisOptions[0] || "");
    }
  }, [selectedBoardBasisProp, boardBasisOptions, selectedBoardBasis]);

  useEffect(() => {
    if (selectedDurationProp && durationOptions.includes(selectedDurationProp)) {
      setSelectedDuration(selectedDurationProp);
      return;
    }
    if (!durationOptions.includes(selectedDuration)) {
      setSelectedDuration(durationOptions[0] || "");
    }
  }, [selectedDurationProp, durationOptions, selectedDuration]);

  // --- MEMOIZED DATA ---
  const priceMap = useMemo(() => getPriceMap(initialPrices), [initialPrices]);

  const days = useMemo(() => {
    return getDaysInMonth(currentYear, currentMonth, priceMap, today);
  }, [currentYear, currentMonth, priceMap, today]);

  // --- HANDLERS & DERIVED STATE ---

  const handleMonthChange = (direction: "prev" | "next") => {
    let newMonth = currentMonth;
    let newYear = currentYear;

    if (direction === "prev") {
      const isPastMonth =
        currentYear < today.getFullYear() ||
        (currentYear === today.getFullYear() &&
          currentMonth <= today.getMonth());
      if (isPastMonth) return;

      newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    } else {
      newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleMonthYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [yearStr, monthStr] = e.target.value.split("-");
    const newYear = parseInt(yearStr, 10);
    const newMonth = parseInt(monthStr, 10); // 0-indexed month

    const firstDayOfSelectedMonth = new Date(newYear, newMonth, 1);
    const firstDayOfCurrentMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    // Only allow selection of current month or future months
    if (firstDayOfSelectedMonth >= firstDayOfCurrentMonth) {
      setCurrentYear(newYear);
      setCurrentMonth(newMonth);
    }
  };

  const isPrevDisabled = useMemo(() => {
    return (
      currentYear < today.getFullYear() ||
      (currentYear === today.getFullYear() && currentMonth <= today.getMonth())
    );
  }, [currentYear, currentMonth, today]);

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "en-US",
    { month: "long" }
  );

  const selectedDate = new Date(selectedDateKey);
  const returnDate = new Date(selectedDate);
  returnDate.setDate(selectedDate.getDate() + nights);

  const formatDate = (d: Date) =>
    `${d.getDate()} ${d.toLocaleString("en-US", {
      month: "short",
    })} ${d.getFullYear()}`;

  // Generate next 5 years for the dropdown
  const currentYearInt = today.getFullYear();
  const yearOptions = Array.from({ length: 5 }, (_, i) => currentYearInt + i);

  // --- JSX RENDERING ---
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg py-4 md:py-6 font-['Montserrat']">
      {/* TITLE */}
      <h2 className="text-[24px] leading-[32px] font-semibold mb-6 text-[#4C4C4C]">
        Holiday Dates & Prices
      </h2>

      {/* FILTERS (RESPONSIVE GRID) - Hidden when custom pricing is active */}
      {!hideFilters && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 text-[#595858]">
        {/* Departing From */}
        <div className="relative w-full">
          <label className="text-[12px] text-[#595858] mb-1 leading-[18px] block">
            Departing from
          </label>
          <select
            className="w-full p-2.5 border rounded-[5px] border-[#9F9F9F] text-[14px] outline-none appearance-none bg-white font-normal"
            value={selectedAirport}
            onChange={(e) => {
              setSelectedAirport(e.target.value);
              onFilterChange?.("departure", e.target.value);
            }}
          >
            {airportOptions.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 top-6 right-5 flex items-center">
            <ChevronDown size={18} strokeWidth={1.4} color="#595858" />
          </span>
        </div>

        {/* Board basis */}
        <div className="relative w-full">
          <label className="text-[12px] text-[#595858] mb-1 leading-[18px] block">
            Board basis
          </label>
          <select
            className="w-full p-2.5 border rounded-[5px] border-[#9F9F9F] text-[14px] outline-none appearance-none bg-white font-normal"
            value={selectedBoardBasis}
            onChange={(e) => {
              setSelectedBoardBasis(e.target.value);
              onFilterChange?.("boardBasis", e.target.value);
            }}
          >
            {boardBasisOptions.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>

          <span className="pointer-events-none absolute inset-y-0 top-6 right-5 flex items-center">
            <ChevronDown size={18} strokeWidth={1.4} color="#595858" />
          </span>
        </div>

        {/* Duration */}
        <div className="relative w-full">
          <label className="text-[12px] text-[#595858] mb-1 leading-[18px] block">Duration</label>
          <select
            className="w-full p-2.5 border rounded-[5px] border-[#9F9F9F] text-[14px] outline-none appearance-none bg-white font-normal"
            value={selectedDuration}
            onChange={(e) => {
              setSelectedDuration(e.target.value);
              onFilterChange?.("duration", e.target.value);
            }}
            disabled={isSearching}
          >
            {durationOptions.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 top-6 right-5 flex items-center">
            <ChevronDown size={18} strokeWidth={1.4} color="#595858" />
          </span>
        </div>
      </div>
      )}

      {/* MONTH NAV & YEAR SELECT */}
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={() => handleMonthChange("prev")}
          disabled={isPrevDisabled}
          className={`mr-5 text-[#595858]${
            isPrevDisabled
              ? "text-[#595858] cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 12.5C9.37212 12.5 9.24412 12.4511 9.1465 12.3535L5.1465 8.3535C4.95113 8.15812 4.95113 7.84175 5.1465 7.6465L9.1465 3.6465C9.34188 3.45113 9.65825 3.45113 9.8535 3.6465C10.0487 3.84188 10.0489 4.15825 9.8535 4.3535L6.207 8L9.8535 11.6465C10.0489 11.8419 10.0489 12.1583 9.8535 12.3535C9.75588 12.4511 9.62788 12.5 9.5 12.5ZM16 8C16 3.58887 12.4111 0 8 0C3.58887 0 0 3.58887 0 8C0 12.4111 3.58887 16 8 16C12.4111 16 16 12.4111 16 8ZM15 8C15 11.8599 11.8599 15 8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8Z" fill="#595858"/>
          </svg>
        </button>

        {/* Month/Year Dropdown */}
        <select
          className="px-[24px] py-[10px] border border-[1px] border-[#9F9F9F] rounded-[4px] text-[#595858] appearance-none bg-white focus:border-gray-500 text-center text-[14px]"
          value={`${currentYear}-${currentMonth}`}
          onChange={handleMonthYearSelect}
          // Ensure width is sufficient for long month names
          style={{ width: "160px" }}
        >
          {yearOptions.flatMap((year) =>
            Array.from({ length: 12 }, (_, monthIndex) => {
              const monthDate = new Date(year, monthIndex, 1);
              const monthDisplay = monthDate.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              });
              const value = `${year}-${monthIndex}`;

              const isPast =
                year < today.getFullYear() ||
                (year === today.getFullYear() && monthIndex < today.getMonth());

              if (isPast) return null;

              return (
                <option key={value} value={value}>
                  {monthDisplay}
                </option>
              );
            }).filter(Boolean)
          )}
        </select>

        <button onClick={() => handleMonthChange("next")} className="ml-5 text-[#595858]" >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 12.5C6.62788 12.5 6.75588 12.4511 6.8535 12.3535L10.8535 8.3535C11.0489 8.15812 11.0489 7.84175 10.8535 7.6465L6.8535 3.6465C6.65812 3.45113 6.34175 3.45113 6.1465 3.6465C5.95125 3.84188 5.95112 4.15825 6.1465 4.3535L9.793 8L6.1465 11.6465C5.95112 11.8419 5.95112 12.1583 6.1465 12.3535C6.24412 12.4511 6.37212 12.5 6.5 12.5ZM0 8C0 3.58887 3.58887 0 8 0C12.4111 0 16 3.58887 16 8C16 12.4111 12.4111 16 8 16C3.58887 16 0 12.4111 0 8ZM1 8C1 11.8599 4.14013 15 8 15C11.8599 15 15 11.8599 15 8C15 4.14013 11.8599 1 8 1C4.14013 1 1 4.14013 1 8Z" fill="#595858"/>
          </svg>
        </button>
      </div>

      {/* WEEKDAYS */}
      <div className="grid grid-cols-7 text-center text-[14px] font-normal text-[#595858] leading-[140%] mb-1">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} className="text-center py-2">
            {d}
          </div>
        ))}
      </div>

      {/* CALENDAR GRID (RESPONSIVE) */}
      {noDealsMessage ? (
        <div className="grid grid-cols-7 gap-1 sm:gap-2 min-h-[460px]">
          <div className="col-span-7 flex items-center justify-center rounded-[8px] border border-[#EDEDED] bg-white text-[#4C4C4C]">
            <div className="text-center">
              <div className="text-[16px] font-semibold">No deal found</div>
              <div className="text-[14px] mt-1">We couldn’t find any offers that match your
                current search, but don’t worry — our team is ready to help! Please call us or send an enquiry, and we’ll
                create the perfect travel plan tailored just for you.</div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onEnquire}
                  className="bg-pml-primary hover:bg-pink-800 text-white font-semibold py-3 px-6 rounded-[8px] transition-all duration-200 text-[16px]"
                >
                  Enquire Now
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!safeSlug) return;
                    router.push(`/hotels/${safeSlug}`);
                  }}
                  className="bg-[#595858] hover:bg-[#4C4C4C] text-white font-semibold py-3 px-6 rounded-[8px] transition-all duration-200 text-[16px]"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {days.map((day, i) => {
            const isSelected = day.dateKey === selectedDateKey;
            const isDefault = defaultDate && day.dateKey === defaultDate;
            const disabled = !day.isSelectable;
            const hasContent = day.dayOfMonth !== null;
            const hasPrice = day.price !== null;
            const isPast = day.isPast;
            const showPhoneIcon = !hasPrice && !isPast && hasContent;
            const displayPrice = hasPrice ? `£${Math.round(day.price as number)}` : "";

            let cls =
              "h-[72px] w-full rounded-[8px] flex flex-col justify-center items-center py-4 border transition duration-150 ease-in-out cursor-pointer";

            if (!hasContent) {
              cls += " border-none bg-white cursor-default";
            } else if (isPast) {
              // Past dates - disabled and grayed out
              cls +=
                " bg-gray-50 text-gray-400 cursor-not-allowed border-[#EDEDED]";
            } else if (isSelected) {
              // Selected style (Pink background)
              cls +=
                " bg-[#CB2187] text-white border-[#CB2187] shadow-lg ring-2 ring-[#CB2187]";
            } else if (isDefault) {
              // Default deal style (Light Green background)
              cls +=
                " bg-[#A6EDA6] text-[#008000] border-[#008000] hover:bg-[#b0e8c1]";
            } else if (showPhoneIcon) {
              // Dates with no price - show phone icon, clickable
              cls += " bg-white text-[#595858] border-[#EDEDED] hover:bg-gray-50";
            } else {
              // Available price style (Default price/background)
              cls += " bg-white text-[#595858] border-[#EDEDED] hover:bg-gray-50";
            }

            return (
              <div key={i} className="w-full">
                <button
                  disabled={disabled}
                  onClick={() => {
                    if (!day.dateKey) return;

                    setSelectedDateKey(day.dateKey);
                    onDateSelect?.(day.dateKey);

                    if (showPhoneIcon) {
                      onEnquire?.();
                    }
                  }}
                  className={cls}
                >
                  {day.dayOfMonth && (
                    <>
                      {/* Day number */}
                      <span className="text-[14px] font-normal leading-[140%] text-center">
                        {day.dayOfMonth}
                      </span>
                      {/* Price or Phone Icon */}
                      {showPhoneIcon ? (
                        <Phone className="w-4 h-4 text-[#595858] mt-1" />
                      ) : (
                        <span
                          className={`text-[13px] md:text-[14px] font-medium leading-[140%] text-center ${
                            isSelected
                              ? "text-white"
                              : isPast
                              ? "text-[#595858]"
                              : isDefault
                              ? "text-[#008000]"
                              : "text-[#595858]"
                          }`}
                        >
                          {displayPrice || "-"}
                        </span>
                      )}
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* LEGEND (FOOTER) */}
      <div className="flex flex-col items-center justify-center gap-2 text-[12px] leading-[140%] sm:flex-row md:ml-auto md:h-[60px] md:w-full md:max-w-[843px] md:flex-col md:items-end md:justify-center md:gap-[10px] md:p-[10px]">
        <div className="flex flex-row items-center justify-center gap-2 sm:justify-end md:h-[40px] md:w-full md:max-w-[823px] md:items-center md:justify-end md:gap-[18px]">
          <div className="hidden md:block flex flex-col items-start gap-[10px] rounded-[8px] border border-[#008000] bg-[#A6EDA6] p-[10px] md:h-[40px] md:w-[92px]">
            <div className="flex flex-row items-center gap-1 md:h-[20px] md:w-[72px]">
              <span className="flex items-center text-[#008000] text-[12px] font-medium leading-[140%] md:text-[14px]">
                Best Price
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[10px] rounded-[4px] border border-[#9F9F9F] bg-[#EDEDED] p-[10px] md:h-[40px] md:w-[427px]">
            <div className="flex flex-row items-center gap-1 md:h-[20px] md:w-[407px]">
              <span className="flex items-center text-[#4C4C4C] text-[12px] font-normal leading-[140%] md:text-[14px]">
                Per person price based on lowest priced flights and rooms
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TRIP SUMMARY (EXACT STYLING MATCH) */}
      <div className="mt-6 flex flex-col items-center sm:flex-row sm:justify-center sm:text-nowrap">
        <div className="flex items-center">
          <span className="w-8 h-8 mr-2 flex justify-center items-center rounded-full bg-[#393939]">
            <PlaneTakeoff className="w-5 h-5 text-white" />
          </span>
          <span className="text-[12px] md:text-[16px] text-[#393939] leading-[24px] font-normal whitespace-nowrap">
            Your trip
          </span>
          <span className="text-[14px] md:text-[18px] text-[#393939] leading-[24px] font-medium whitespace-nowrap">
            {formatDate(selectedDate)} – {formatDate(returnDate)}
          </span>
        </div>
        <div className="flex items-center mt-2 sm:mt-0 sm:ml-2">
          <span className="text-[12px] md:text-[18px] text-[#393939] leading-[24px] ml-2 font-normal">
            ({nights} nights)
          </span>
        </div>
      </div>
    </div>
  );
}
