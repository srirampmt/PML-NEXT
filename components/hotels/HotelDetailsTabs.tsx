"use client";

import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";

import styles from "./hotelRichText.module.css";

type LocationData = {
  description: string;
  distances: string[];
  mapEmbedUrl: string;
};

type LocationInput = LocationData | [string, string];

type ReviewsData = {
  rating: number | string;
  total: number | string;
  updatedAt: string;
};

interface HotelDetailsTabsProps {
  overview: string;
  location: LocationInput;
  facilities?: string;
  reviews: ReviewsData;
  finePrint?: string;
}

const TABS = [
  { id: "details", label: "Hotel Details" },
  { id: "location", label: "Location" },
  { id: "facilities", label: "Facilities" },
  { id: "reviews", label: "Reviews" },
  { id: "fineprint", label: "Fine Print" },
];

export default function HotelDetailsTabs(props: HotelDetailsTabsProps) {
  const {
    overview,
    location,
    facilities = "",
    reviews,
    finePrint = "",
  } = props;

  const [activeTab, setActiveTab] = useState("details");

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const tabsBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      const navHeightRaw = getComputedStyle(document.documentElement)
        .getPropertyValue("--main-nav-height")
        .trim();
      const navHeight = Number.parseFloat(navHeightRaw) || 0;
      const tabsHeight = tabsBarRef.current?.offsetHeight ?? 0;
      const offset = 12;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight - tabsHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const looksLikeUrl = (value: string) => /^(https?:\/\/|\/\/)/i.test(value.trim());

  const normalizeMapSrc = (value: string) => {
    const raw = (value || "").trim();
    if (!raw) return "";

    if (raw.includes("<iframe")) {
      const match = raw.match(/src\s*=\s*["']([^"']+)["']/i);
      return match?.[1] || "";
    }

    if (looksLikeUrl(raw)) {
      return raw.startsWith("//") ? `https:${raw}` : raw;
    }

    // Treat anything else as a location query (coords or address)
    return `https://www.google.com/maps?q=${encodeURIComponent(raw)}&output=embed`;
  };

  const normalizeLocationHtml = (html: string) => {
    let out = html || "";

    // If backend inserts a break between Address label and value, keep them on one line.
    out = out.replace(
      /(<strong>\s*Address\s*:?(?:\s*<\/strong>))\s*<br\s*\/?>\s*:?\s*/gi,
      "<strong>Address:</strong> "
    );

    // If backend splits Address label and value into two paragraphs, merge into one paragraph.
    out = out.replace(
      /<p>\s*<strong>\s*Address\s*:?(?:\s*<\/strong>)\s*<\/p>\s*<p>\s*:?[\s\u00A0]*/gi,
      "<p><strong>Address:</strong> "
    );

    return out;
  };

  const renderRichText = (html: string) => {
    const safe = DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
    });

    return (
      <div
        className={`${styles.hotelRichText} text-sm md:text-base`}
        dangerouslySetInnerHTML={{ __html: safe }}
      />
    );
  };

  const getFacilityItems = (html: string) => {
    const trimmed = (html || "").trim();
    if (!trimmed) return [] as string[];

    // If the backend provides a list, prefer extracting items so we can enforce
    // a fixed "17 items per column" layout.
    if (!trimmed.toLowerCase().includes("<li")) return [] as string[];

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(trimmed, "text/html");
      const items = Array.from(doc.querySelectorAll("li"))
        .map((li) => (li.textContent || "").trim())
        .filter(Boolean);
      return items;
    } catch {
      return [] as string[];
    }
  };

  const chunk = <T,>(items: T[], size: number) => {
    const out: T[][] = [];
    for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
    return out;
  };

  const renderFacilities = (html: string) => {
    const items = getFacilityItems(html);
    if (!items.length) return html.trim() ? renderRichText(html) : null;

    const columns = chunk(items, 17);

    return (
      <div className="flex flex-wrap items-start gap-[10px]">
        {columns.map((col, idx) => (
          <div
            key={idx}
            className="w-[282px] flex flex-col items-start gap-[10px] font-['Montserrat'] text-[16px] leading-[140%] font-normal text-[#595858]"
          >
            <ul className="list-disc pl-5 space-y-[10px]">
              {col.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const { mapSrc, locationDescription } = (() => {
    if (Array.isArray(location)) {
      const [mapValue, descriptionValue] = location;
      return {
        mapSrc: normalizeMapSrc(mapValue || ""),
        locationDescription: descriptionValue || "",
      };
    }

    return {
      mapSrc: normalizeMapSrc(location.mapEmbedUrl || ""),
      locationDescription: location.description || "",
    };
  })();

  return (
    <div className="max-w-[1280px] mx-auto font-['Montserrat']">
      {/* ================= TABS ================= */}
      <div
        ref={tabsBarRef}
        className="sticky bg-white z-30 border-b"
        style={{ top: "var(--main-nav-height, 0px)" }}
      >
        <div className="flex overflow-x-auto gap-6 text-sm font-medium">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`pt-4 pb-3  shrink-0 border-b-2 transition ${
                activeTab === tab.id
                  ? "border-[#CB2187] text-[#CB2187]"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================= HOTEL DETAILS ================= */}
      <section
        id="details"
        ref={(el) => (sectionRefs.current.details = el)}
        className="pt-8 text-[#595858]"
      >
        <h2 className="text-xl font-semibold mb-2">About The Hotel</h2>

        {overview ? renderRichText(overview) : null}
      </section>

      {/* ================= LOCATION ================= */}
      <section
        id="location"
        ref={(el) => (sectionRefs.current.location = el)}
        className="pt-10 text-[#595858]"
      >
        <h2 className="text-xl font-semibold mb-3 ">Location</h2>

        {locationDescription ? (
          <div className="mb-3">
            {renderRichText(normalizeLocationHtml(locationDescription))}
          </div>
        ) : null}
        {mapSrc && (
          <iframe
            src={mapSrc}
            className="w-full h-[220px] rounded-md mb-3"
            loading="lazy"
          />
        )}
      </section>

      {/* ================= FACILITIES ================= */}
      <section
        id="facilities"
        ref={(el) => (sectionRefs.current.facilities = el)}
        className="pt-10 text-[#595858]"
      >
        <h2 className="text-xl font-semibold mb-3 ">Facilities</h2>
        {facilities.trim() ? <div className="mb-3">{renderFacilities(facilities)}</div> : null}
      </section>

      {/* ================= REVIEWS ================= */}
      <section id="reviews" ref={(el) => (sectionRefs.current.reviews = el)} className="pt-10 text-[#595858]" >
        <h2 className="text-xl font-semibold mb-2 ">Reviews</h2>
        <p className="text-[16px] text-[#595858] leading-[140%] font-medium mt-1 mb-[12px]">
          TripAdvisor Reviews
        </p>
        <div className="flex items-center gap-3 mb-[12px]">
          <div className="flex gap-1">
            {Array.from({
              length: Math.max(0, Math.min(5, Math.round(Number(reviews.rating) || 0))),
            }).map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#00AF87"/>
              </svg>
            ))}
          </div>
          <span className="text-[14px] text-[#595858] leading-[140%] font-medium">
            {(Number(reviews.total) || 0).toLocaleString()} reviews
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Last updated: {reviews.updatedAt}
        </p>
      </section>

      <section
        id="fineprint"
        ref={(el) => (sectionRefs.current.fineprint = el)}
        className="pt-10 pb-10 text-[#595858]"
      >
        <h2 className="text-xl font-semibold mb-2">Fine Print</h2>
        {finePrint.trim() ? <div className="mb-3">{renderRichText(finePrint)}</div> : null}
      </section>
    </div>
  );
}
