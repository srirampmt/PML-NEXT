"use client";

import { useEffect, useRef, useState } from "react";

type LocationData = {
  description: string;
  distances: string[];
  mapEmbedUrl: string;
};

type ReviewsData = {
  rating: number;
  total: number;
  updatedAt: string;
};

interface HotelDetailsTabsProps {
  overview: string;
  amenities: string;
  foodAndDrink: string;
  allInclusive: string[];
  rooms: string;
  location: LocationData;
  facilities: string[];
  reviews: ReviewsData;
  finePrint: string[];
}

const TABS = [
  { id: "details", label: "Hotel Details" },
  { id: "location", label: "Location" },
  { id: "facilities", label: "Facilities" },
  { id: "reviews", label: "Reviews" },
  { id: "fineprint", label: "Fine Print" },
];

export default function HotelDetailsTabs(props: HotelDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState("details");
  const [showMore, setShowMore] = useState(false);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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
      const stickyHeaderHeight = 70; // Your sticky tab bar height (adjust as needed)
      const offset = 25; // Additional pixels to show before the section
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - stickyHeaderHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto font-['Montserrat']">
      {/* ================= TABS ================= */}
      <div className="sticky top-[70px] lg:top-[95px] bg-white z-30 border-b">
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

        <h3 className="font-semibold mt-4 mb-1">Overview</h3>
        <p className="text-sm md:text-base text-[#595858] leading-relaxed">
          {props.overview}
        </p>

        <h3 className="font-semibold mt-4 mb-1">
          Amenities, Sports & Entertainment
        </h3>
        <p className="text-sm md:text-base text-[#595858] leading-relaxed">
          {props.amenities}
        </p>

        <h3 className="font-semibold mt-4 mb-1">Food & Drink</h3>
        <p className="text-sm md:text-base text-[#595858] leading-relaxed">
          {props.foodAndDrink}
        </p>

        {showMore && (
          <>
            <h3 className="font-semibold mt-4 mb-1 ">All Inclusive Option</h3>
            <ul className="list-disc pl-5 text-sm md:text-base text-[#595858] space-y-1">
              {props.allInclusive.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-4 mb-1 ">Rooms</h3>
            <p className="text-sm md:text-base text-[#595858] leading-relaxed">
              {props.rooms}
            </p>
          </>
        )}

        <button onClick={() => setShowMore(!showMore)} className="mt-4 text-[#595858] font-semibold text-sm hover:underline flex items-center gap-1" >
          {showMore ? "Show Less" : "Read More"}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 10.5C13.5 10.6278 13.4511 10.7558 13.3535 10.8535C13.1581 11.0488 12.8417 11.0488 12.6465 10.8535L7.99998 6.20697L3.35348 10.8535C3.15811 11.0488 2.84173 11.0488 2.64648 10.8535C2.45123 10.6581 2.45111 10.3417 2.64648 10.1465L7.64648 5.14647C7.84186 4.95109 8.15823 4.95109 8.35348 5.14647L13.3535 10.1465C13.4511 10.2441 13.5 10.3721 13.5 10.5Z" fill="#595858"/>
          </svg>
        </button>
      </section>

      {/* ================= LOCATION ================= */}
      <section
        id="location"
        ref={(el) => (sectionRefs.current.location = el)}
        className="pt-10 text-[#595858]"
      >
        <h2 className="text-xl font-semibold mb-3 ">Location</h2>

        <iframe
          src={props.location.mapEmbedUrl}
          className="w-full h-[220px] rounded-md mb-3"
          loading="lazy"
        />

        <p className="text-sm text-[#595858] mb-3">
          {props.location.description}
        </p>

        <h4 className="font-semibold mb-1 ">Distances</h4>
        <ul className="list-disc pl-5 text-sm md:text-base text-[#595858] space-y-1">
          {props.location.distances.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </section>

      {/* ================= FACILITIES ================= */}
      <section
        id="facilities"
        ref={(el) => (sectionRefs.current.facilities = el)}
        className="pt-10 text-[#595858]"
      >
        <h2 className="text-xl font-semibold mb-3 ">Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-sm md:text-base text-[#595858]">
          {props.facilities.map((f, i) => (
            <div key={i}>• {f}</div>
          ))}
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section id="reviews" ref={(el) => (sectionRefs.current.reviews = el)} className="pt-10 text-[#595858]" >
        <h2 className="text-xl font-semibold mb-2 ">Reviews</h2>
        <p className="text-[16px] text-[#595858] leading-[140%] font-medium mt-1 mb-[12px]">
          TripAdvisor Reviews
        </p>
        <div className="flex items-center gap-3 mb-[12px]">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#00AF87"/>
              </svg>
            ))}
          </div>
          <span className="text-[14px] text-[#595858] leading-[140%] font-medium">
            {props.reviews.total.toLocaleString()} reviews
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Last updated: {props.reviews.updatedAt}
        </p>
      </section>

      <section
        id="fineprint"
        ref={(el) => (sectionRefs.current.fineprint = el)}
        className="pt-10 pb-10 text-[#595858]"
      >
        <h2 className="text-xl font-semibold mb-2">Fine Print</h2>
        <ul className="list-disc pl-5 text-sm md:text-base text text-[#595858] space-y-1">
          {props.finePrint.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
