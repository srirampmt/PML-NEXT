"use client";

import React, { useState, useMemo, useCallback } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Plane, PlaneTakeoff } from "lucide-react";

/* ===================== TYPES ===================== */

interface PriceData {
  date: string; // YYYY-MM-DD
  price: number;
}

interface HolidayCalendarProps {
  availableAirports: string[];
  availableBoardBases: string[];
  availableDurations: string[];
  initialPrices: PriceData[]; // Full list of available prices
  initialDepartureDate: string; // YYYY-MM-DD (e.g., "2025-10-08")
  nights: number; // Initial number of nights (e.g., 7)
}

interface DayData {
  dayOfMonth: number | null;
  dateKey: string | null;
  price: number | null;
  isPast: boolean;
  isSelectable: boolean;
}

/* ===================== HELPERS ===================== */

const DEFAULT_PRICE = 1999; // Price for dates not explicitly listed, but available/selectable

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
    const isPast = dayDate < today;

    // Check if price is explicitly defined (Best Price) or default
    const price = priceMap[dateKey] ?? DEFAULT_PRICE;

    // Set price to null if it's not available and not a future date
    const finalPrice = !isPast ? price : null;

    days.push({
      dayOfMonth: day,
      dateKey,
      price: finalPrice,
      isPast,
      isSelectable: !isPast && finalPrice !== null,
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
  initialPrices,
  initialDepartureDate,
  nights,
}: HolidayCalendarProps) {
  // --- STATE ---
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const initialDate = new Date(initialDepartureDate);

  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [selectedDateKey, setSelectedDateKey] = useState(initialDepartureDate);

  // Filter states
  const [selectedAirport, setSelectedAirport] = useState(availableAirports[0]);
  const [selectedBoardBasis, setSelectedBoardBasis] = useState(
    availableBoardBases[0]
  );
  const [selectedDuration, setSelectedDuration] = useState(
    availableDurations[2]
  ); // Default to 5 nights as per image

  // Mock the best price date shown in the image for styling purposes
  const bestPriceDate = "2025-12-20";

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

      {/* FILTERS (RESPONSIVE GRID) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 text-[#595858]">
        {/* Departing From */}
        <div className="relative w-full">
          <label className="text-[12px] text-[#595858] mb-1 leading-[18px] block">
            Departing from
          </label>
          <select
            className="w-full p-2.5 border rounded-[5px] border-[#9F9F9F] text-[14px] outline-none appearance-none bg-white font-normal"
            value={selectedAirport}
            onChange={(e) => setSelectedAirport(e.target.value)}
          >
            {availableAirports.map((a) => (
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
            onChange={(e) => setSelectedBoardBasis(e.target.value)}
          >
            {availableBoardBases.map((b) => (
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
            onChange={(e) => setSelectedDuration(e.target.value)}
          >
            {availableDurations.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 top-6 right-5 flex items-center">
            <ChevronDown size={18} strokeWidth={1.4} color="#595858" />
          </span>
        </div>
      </div>

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
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {days.map((day, i) => {
          const isSelected = day.dateKey === selectedDateKey;
          const isBest = day.dateKey === bestPriceDate;
          const disabled = !day.isSelectable;
          const hasContent = day.dayOfMonth !== null;
          const displayPrice = day.price !== null ? `£${day.price}` : "-";

          let cls =
            "h-[50px]  sm:h-[70px] w-full rounded-[8px] flex flex-col justify-center items-center border transition duration-150 ease-in-out cursor-pointer";

          if (!hasContent) {
            cls += " border-none bg-white cursor-default";
          } else if (disabled) {
            // Disabled style (Past dates or dates with no price)
            cls +=
              " bg-gray-50 text-gray-400 cursor-not-allowed border-gray-100";
          } else if (isSelected) {
            // Selected style (Pink background, matching image)
            cls +=
              " bg-[#CB2187] text-white  border-[#CB2187] shadow-lg ring-2 ring-[#CB2187]";
          } else if (isBest) {
            // Best Price style (Light Green background, matching image)
            cls +=
              " bg-[#A6EDA6] text-[#008000] border-[#008000] hover:bg-[#b0e8c1]";
          } else {
            // Available price style (Default price/background)
            cls += " bg-white text-gray-800 border-gray-200 hover:bg-gray-100";
          }

          return (
            <div key={i} className="w-full">
              <button
                disabled={disabled}
                onClick={() => day.dateKey && setSelectedDateKey(day.dateKey)}
                className={cls}
              >
                {day.dayOfMonth && (
                  <>
                    {/* Day number */}
                    <span className="text-[12px] md:text-[14px] font-normal leading-[140%]">
                      {day.dayOfMonth}
                    </span>
                    {/* Price */}
                    <span
                      className={`text-[10px] md:text-[14px] font-semibold md:font-medium leading-[140%] ${
                        isSelected
                          ? "text-white"
                          : disabled
                          ? "text-[#595858]"
                          : isBest
                          ? "text-[#008000]"
                          : "text-gray-500 "
                      }`}
                    >
                      {displayPrice}
                    </span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* LEGEND (FOOTER) */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2 text-[12px] leading-[140%]">
        <span className="text-[#008000] text-center bg-[#A6EDA6] border border-[#008000] p-[10px] rounded-[8px] font-medium">
          Best Price
        </span>
        <span className="text-[#4C4C4C] bg-[#EDEDED] border border-[#9F9F9F] p-[10px] rounded-[4px] font-regular">
          Per person price based on lowest priced flights and rooms
        </span>
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
        </div>
        <div className="flex items-center mt-2 sm:mt-0 sm:ml-2">
          <span className="text-[14px] md:text-[18px] text-[#393939] leading-[24px] font-medium whitespace-nowrap">
            {formatDate(selectedDate)} – {formatDate(returnDate)}
          </span>
          <span className="text-[12px] md:text-[18px] text-[#393939] leading-[24px] ml-2 font-normal">
            ({nights} nights)
          </span>
        </div>
      </div>
    </div>
  );
}
