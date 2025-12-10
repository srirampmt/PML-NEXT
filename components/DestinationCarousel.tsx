"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";

// ------------------ DATA ------------------ //

const destinations = [
  {
    id: 1,
    location: "Paris, France",
    image:
      "/assets/images/pic-1.png",
    description: "The city of lights and timeless romance.",
  },
  {
    id: 2,
    location: "Kyoto, Japan",
    image:
      "/assets/images/pic-2.png",
    description: "Ancient temples and serene bamboo forests.",
  },
  {
    id: 3,
    location: "Patagonia",
    image:
      "/assets/images/pic-3.png",
    description: "Rugged mountains and breathtaking natural wonders.",
  },
  {
    id: 4,
    location: "Serengeti, Tanzania",
    image:
      "/assets/images/pic-4.png",
    description: "Experience the magnificent Great Migration.",
  },
  {
    id: 5,
    location: "New York, USA",
    image:
      "/assets/images/pic-5.png",
    description: "The vibrant heart of culture and commerce.",
  },
  {
    id: 6,
    location: "Santorini, Greece",
    image:
      "/assets/images/pic-2.png",
    description: "Iconic white villas overlooking the Aegean Sea.",
  },
  {
    id: 7,
    location: "Santorini, Greece",
    image:
      "/assets/images/pic-3.png",
    description: "Iconic white villas overlooking the Aegean Sea.",
  },
];

const filterTabs = [
  "Popular",
  "Asia",
  "Europe",
  "USA",
  "All Destinations",
  "Ocean",
  "Mountain",
];

// ------------------ COMPONENTS ------------------ //

const DestinationCard = ({ destination }: { destination: any }) => {
  return (
    <div className="w-[210px] snap-start">
      <a
        href="#"
        className="block rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        {/* IMAGE */}
        <div className="w-full h-80 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.location}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/600x400/cccccc/666666?text=Image+Unavailable";
            }}
          />
        </div>

        {/* WHITE INFO PANEL */}
        <div className="bg-white px-4 pt-1 pb-4">
          <div className="text-[11px] tracking-widest text-gray-500">
            INDIAN OCEAN
          </div>

          <div className="mt-1 text-[15px] font-semibold text-[#CB2187] leading-tight">
            {destination.location.toUpperCase()}
          </div>
        </div>
      </a>
    </div>
  );
};

const FilterTab = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`shrink-0 border rounded-[25px] text-xs md:text-sm px-4 py-1.5 md:px-6 md:py-2.5 transition bg-white ${
      active
        ? "text-[#CB2187] border-white shadow-lg font-semibold"
        : "border-white hover:bg-white/50"
    }`}
  >
    {label}
  </button>
);

// ------------------ MAIN ------------------ //

export default function DestinationCarousel({title, description}: {title?: string; description?: string }) {
  const [activeFilter, setActiveFilter] = useState("Popular");

  return (
    <section className="relative bg-white w-screen ml-[calc(-50vw+50%)] font-['Montserrat']">
      {/* BACKGROUND LAYER */}
      <div className="bg-gradient-to-br from-[#1a9b9e] via-[#2ab5b8] to-[#5bc9cc] w-full pt-[70px] pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-[80px] relative z-0">
        <div className="absolute inset-0 opacity-70 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('https://planmylux.s3.eu-west-2.amazonaws.com/static/images/escapedestinations.png')", }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-2 relative z-10">
          {/* HEADER */}
          <div className="text-left md:mb-10">
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-semibold text-white mb-6 leading-tight max-w-2xl">
              {title}
            </h2>

            <p className="text-white max-w-2xl">
              {description}
            </p>

            {/* FILTER TABS */}
            <div
              className="flex flex-nowrap gap-3 mt-8 overflow-x-auto pb-2 scrollbar-hide"
              style={{
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {filterTabs.map((tab) => (
                <FilterTab
                  key={tab}
                  label={tab}
                  active={activeFilter === tab}
                  onClick={() => setActiveFilter(tab)}
                />
              ))}
            </div>
          </div>

          {/* ------------------ SHADCN CAROUSEL ------------------ */}
          <div className="relative mt-5 md:mt-10">
            <Carousel opts={{ align: "start" }} className="w-full relative">
              <CarouselContent className="flex snap-x snap-mandatory">
                {destinations.map((destination) => (
                  <CarouselItem key={destination.id} className="basis-auto">
                    <DestinationCard destination={destination} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
