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

const FilterTab = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
  onClick={onClick}
  className={`shrink-0 border border-[#9F9F9F] rounded-[25px] text-xs md:text-sm px-4 py-[10px] md:px-[14px] md:py-2.5 transition-colors ${
    active ? "bg-[#FBE3F1] text-[#595858] shadow-lg" : "bg-white"
  }`}
>
  {label}
</button>

);

export default function DestinationCarousel({title, description}: {title?: string; description?: string }) {
  const [activeFilter, setActiveFilter] = useState("Popular");

  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#FFF7FC] font-['Montserrat']" >
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* BACKGROUND LAYER */}
          <div className="bg-gradient-to-br from-[#1a9b9e] via-[#2ab5b8] to-[#5bc9cc] w-full py-[36px] md:py-[70px] md:pt-20 md:pb-24 lg:pt-24 lg:pb-[80px] relative z-0">
            <div
              className="absolute top-0 bottom-0  bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{
                backgroundImage: "url('https://planmylux.s3.eu-west-2.amazonaws.com/static/images/escapedestinations.png')",
                width: '100vw',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            <div className="max-w-7xl mx-auto  relative z-10">
              {/* HEADER */}
              <div className="text-left md:mb-10">
                <h2 className="text-[24px] md:text-[48px] font-semibold text-white leading-[30px] md:leading-[60px] tracking-[-0.005em] max-w-[626px] mb-4 md:md-8">
                  {title}
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                  <p className="text-white max-w-[624px] text-[14px] md:text-[16px] leading-[24px] line-clamp-2 md:line-clamp-none lg:line-clamp-none">
                    {description}
                  </p>
                  <a
                    href="#"
                    className="font-['Montserrat'] text-[12px] text-right text-[#4c4c4c] underline hover:text-[#CB2187] whitespace-nowrap ml-0 md:ml-4 mt-2 md:mt-0"
                  >
                    view all PlanMyLuxe exclusives
                  </a>
                </div>
                {/* FILTER TABS */}
                <div
                  className="flex flex-nowrap gap-3 mt-4 md:mt-8 overflow-x-auto pb-2 scrollbar-hide"
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

              <div className="relative mt-5 md:mt-10">
                <Carousel opts={{ align: "start" }} className="w-full relative">
                  <CarouselContent className="flex snap-x snap-mandatory">
                    {destinations.map((destination) => (
                      <CarouselItem key={destination.id} className="basis-auto">
                        <div className="w-[210px] snap-start">
                          <a
                            href="#"
                            className="block rounded-[8px] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-[2px] group"
                          >
                            {/* IMAGE */}
                            <div className="w-full h-80 overflow-hidden relative">
                              <img
                                src={destination.image}
                                alt={destination.location}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 group-hover:scale-105 will-change-transform"
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src =
                                    "https://placehold.co/600x400/cccccc/666666?text=Image+Unavailable";
                                }}
                              />
                              {/* Overlay layer */}
                              <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                  background:
                                    "linear-gradient(var(--bg-brand-tint, #FFF7FC), var(--bg-brand-tint, #FFF7FC)), #0000001A",
                                  mixBlendMode: "normal",
                                  opacity: 0.1,
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
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
