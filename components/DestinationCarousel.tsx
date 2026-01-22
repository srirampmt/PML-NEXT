"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";

const FilterTab = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`capitalize shrink-0 border border-[#9F9F9F] rounded-[25px] text-xs md:text-sm px-4 py-[10px] md:px-[14px] md:py-2.5 transition-colors ${
      active ? "bg-[#FBE3F1] text-[#595858] shadow-lg" : "bg-white"
    }`}
  >
    {label}
  </button>
);

export default function DestinationCarousel(props: any) {
  const { Destination_collection_title, description, ...rest } = props;

  // Default description (shown if none passed)
  const fallbackDescription =
    "Discover hand-picked destinations crafted for unforgettable journeys — from serene escapes to vibrant city adventures.";

  // Build dynamic tag + destination mapping
  const tabs: { label: string; destinations: any[] }[] = [];

  Object.entries(rest).forEach(([key, value]) => {
    if (key.startsWith("Destination_collection_tag_")) {
      const num = key.replace("Destination_collection_tag_", "");
      const destKey = `tag_${num}_destination`;

      if (rest[destKey] && Array.isArray(rest[destKey])) {
        tabs.push({
          label: value as string,
          destinations: rest[destKey] as any[],
        });
      }
    }
  });

  const [activeFilter, setActiveFilter] = useState(tabs?.[0]?.label || "");

  const activeDestinations =
    tabs.find((t) => t.label === activeFilter)?.destinations || [];

  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#FFF7FC] font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-br from-[#1a9b9e] via-[#2ab5b8] to-[#5bc9cc] w-full py-[36px] md:py-[70px] md:pt-20 md:pb-24 lg:pt-24 lg:pb-[80px] relative z-0">
            {/* BACKGROUND */}
            <div
              className="absolute top-0 bottom-0 bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{
                backgroundImage:
                  "url('https://planmylux.s3.eu-west-2.amazonaws.com/uploads/media-library/homepage/destination-carousel-bg.png')",
                width: "100vw",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* HEADER */}
              <div className="text-left md:mb-10">
                <h2 className="text-[24px] md:text-[48px] font-semibold text-white leading-[30px] md:leading-[60px] tracking-[-0.005em] max-w-[626px] mb-4 md:md-8">
                  {Destination_collection_title || ""}
                </h2>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                  {/* DESCRIPTION (default if missing) */}
                  <p className="text-white max-w-[624px] text-[14px] md:text-[16px] leading-[24px] line-clamp-2 md:line-clamp-none lg:line-clamp-none">
                    {description || fallbackDescription}
                  </p>

                  <a
                    href="/destinations"
                    className="font-['Montserrat'] text-[12px] md:text-[14px] text-right text-white  underline hover:text-[#CB2187] whitespace-nowrap ml-0 md:ml-4 mt-2 md:mt-0"
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
                  {tabs.map((tab) => (
                    <FilterTab
                      key={tab.label}
                      label={tab.label}
                      active={activeFilter === tab.label}
                      onClick={() => setActiveFilter(tab.label)}
                    />
                  ))}
                </div>
              </div>

              {/* DESTINATION CARDS */}
              <div className="relative mt-5 md:mt-10">
                <Carousel opts={{ align: "start" }} className="w-full relative">
                  <CarouselContent className="flex snap-x snap-mandatory">
                    {activeDestinations.map((destination: any) => (
                      <CarouselItem key={destination.id} className="basis-auto">
                        <div className="w-[210px] snap-start">
                          <a
                            href="#"
                            className="block rounded-[8px] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-[2px] group"
                          >
                            <div className="w-full h-80 overflow-hidden relative">
                              <img
                                src={
                                  destination.banner_image ||
                                  "https://placehold.co/600x400?text=Image"
                                }
                                alt={destination.name}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 group-hover:scale-105 will-change-transform"
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src =
                                    "https://placehold.co/600x400/cccccc/666666?text=Image+Unavailable";
                                }}
                              />

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

                            <div className="bg-white px-4 pt-1 pb-4">
                              <div className="text-[11px] tracking-widest text-gray-500">
                                {activeFilter.toUpperCase()}
                              </div>

                              <div className="truncate mt-1 text-[15px] font-semibold text-[#CB2187] leading-tight">
                                {destination.name.toUpperCase()}
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
