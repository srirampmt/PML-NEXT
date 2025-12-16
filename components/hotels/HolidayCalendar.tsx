"use client";

import React, { useState, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight, Plane } from "lucide-react";

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
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-4 sm:p-6">
      {/* TITLE */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Holiday Dates & Prices
      </h2>

      {/* FILTERS (RESPONSIVE GRID) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {/* Departing From */}
        <div>
          <label className="text-sm text-gray-500 mb-1 block">
            Departing from
          </label>
          <select
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white focus:border-gray-500"
            value={selectedAirport}
            onChange={(e) => setSelectedAirport(e.target.value)}
          >
            {availableAirports.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>

        {/* Board basis */}
        <div>
          <label className="text-sm text-gray-500 mb-1 block">
            Board basis
          </label>
          <select
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white focus:border-gray-500"
            value={selectedBoardBasis}
            onChange={(e) => setSelectedBoardBasis(e.target.value)}
          >
            {availableBoardBases.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Duration</label>
          <select
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white focus:border-gray-500"
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
          >
            {availableDurations.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>


      {/* MONTH NAV & YEAR SELECT */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => handleMonthChange("prev")}
          disabled={isPrevDisabled}
          className={`p-2 rounded-full transition-colors ${
            isPrevDisabled
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Month/Year Dropdown */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md font-semibold text-gray-800 appearance-none bg-white focus:border-gray-500 text-center"
          value={`${currentYear}-${currentMonth}`}
          onChange={handleMonthYearSelect}
          // Ensure width is sufficient for long month names
          style={{ width: "180px" }}
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

        <button
          onClick={() => handleMonthChange("next")}
          className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* WEEKDAYS */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 mb-1">
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
            "h-[70px] w-full rounded-xl flex flex-col justify-center items-center border transition duration-150 ease-in-out cursor-pointer";

          if (!hasContent) {
            cls += " border-none bg-white cursor-default";
          } else if (disabled) {
            // Disabled style (Past dates or dates with no price)
            cls +=
              " bg-gray-50 text-gray-400 cursor-not-allowed border-gray-100";
          } else if (isSelected) {
            // Selected style (Pink background, matching image)
            cls +=
              " bg-[#CB2187] text-white font-bold border-[#CB2187] shadow-lg ring-2 ring-[#CB2187]";
          } else if (isBest) {
            // Best Price style (Light Green background, matching image)
            cls +=
              " bg-[#C7F4D3] text-gray-900 border-green-400 font-semibold hover:bg-[#b0e8c1]";
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
                    <span className="text-base sm:text-[15px] font-semibold">
                      {day.dayOfMonth}
                    </span>
                    {/* Price */}
                    <span
                      className={`text-sm sm:text-[13px] ${
                        isSelected
                          ? "text-white"
                          : disabled
                          ? "text-gray-400"
                          : "text-gray-500"
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
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-6 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 rounded-md mr-1" />
          <span className="font-semibold text-gray-700">Best Price</span>
        </div>
        <span className="hidden sm:inline text-gray-400">|</span>
        <span className="text-gray-600 text-center sm:text-left">
          Per person price based on lowest priced flights and rooms
        </span>
      </div>

      {/* TRIP SUMMARY (EXACT STYLING MATCH) */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col justify-center items-center text-lg font-semibold">
        <div className="flex items-center text-base sm:text-lg">
          <Plane className="w-5 h-5 mr-2 text-gray-600" />
          <span className="text-gray-900 whitespace-nowrap">Your trip:</span>
          <span className="ml-2 whitespace-nowrap text-gray-800">
            {formatDate(selectedDate)} – {formatDate(returnDate)}
          </span>
        </div>
        <span className="text-sm font-normal text-gray-600 sm:mt-1">
          ({nights} nights)
        </span>
      </div>
    </div>
  );
}
