"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { LayoutGrid, X } from "lucide-react";


interface HotelBannerProps {
  location: string;
  title: string;
  subtitle: string;
  priceLabel?: string;
  price?: string;
  ctaText?: string;
  images: string[];
  badgeText?: string;
}

export default function HotelBanner({
  location,
  title,
  subtitle,
  priceLabel = "Price starting from",
  price = "199",
  ctaText = "View Options",
  images,
  badgeText = "Prices include FREE Attraction Entry",
}: HotelBannerProps) {
  const [open, setOpen] = useState(false);

  const largeImage = images?.[0];
  const rightTopImage = images?.[1];
  const rightBottomImage = images?.[2];

  return (
    <>
      {/* --- MAIN BANNER SECTION --- */}
      <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white font-['Montserrat']">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-[10px] md:py-[20px]">
          <div className="w-full max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
              <div className="flex-1 max-w-[843px]">
                <div className="text-[#4c4c4c] text-[12px] md:text-[13px] font-semibold uppercase mb-2">
                  {location}
                </div>

                <h1 className="text-[#CB2187] text-[22px] md:text-[24px] font-bold leading-[1.25] mb-2">
                  {title}
                </h1>

                <p className="text-[#4c4c4c] text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6]">
                  {subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="flex-shrink-0 lg:pt-2">
                <div className="flex items-center gap-4">
                  <div className="text-[#4c4c4c] text-[12px] md:text-[13px]">
                    <div className="mb-1">{priceLabel}</div>
                    <div className="text-[#CB2187] text-[24px] md:text-[28px] font-bold">
                      <span className="text-[#4c4c4c] text-[12px] font-semibold">£</span>
                      {price}{" "}
                      <span className="text-[#4c4c4c] text-[12px] font-semibold">pp</span>
                    </div>
                  </div>

                  <button className="bg-[#CB2187] text-white text-[13px] md:text-[16px] font-semibold px-5 py-2 md:px-6 md:py-3 rounded-[10px]">
                    {ctaText}
                  </button>
                </div>
              </div>
            </div>

            {/* IMAGES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 items-start">
              {/* Left big image */}
              <div className="relative">
                {badgeText && (
                  <div className="absolute top-3 left-3 z-10 bg-[#4c4c4c] text-white text-[12px] px-3 py-2 rounded-md shadow-md border border-white">
                    {badgeText}
                  </div>
                )}

                {largeImage && (
                  <img
                    src={largeImage}
                    className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[450px] object-cover rounded-xl"
                  />
                )}
              </div>

              {/* Right-side stacked images */}
              <div className="grid grid-rows-2 gap-4">
                {/* Top image */}
                {rightTopImage && (
                  <img
                    src={rightTopImage}
                    className="w-full h-[180px] sm:h-[200px] md:h-[175px] lg:h-[216px] object-cover rounded-xl"
                  />
                )}

                {/* Bottom image WITH MORE ICON */}
                {rightBottomImage && (
                  <div className="relative">
                    <img
                      src={rightBottomImage}
                      className="w-full h-[180px] sm:h-[200px] md:h-[175px] lg:h-[216px] object-cover rounded-xl"
                    />

                    {/* --- MORE PHOTOS BUTTON --- */}
                    <button
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#CB2187] p-2 rounded-full shadow-md"
                      onClick={() => setOpen(true)}
                    >
                      <LayoutGrid size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/*           SHEET — SIDE PANEL WITH ALL PHOTOS             */}
      {/* ========================================================= */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-screen h-screen bg-white overflow-y-auto p-0">
          <div className="sticky top-0 z-50 bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Photo Gallery</h2>
              <SheetClose className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md transition-all hover:scale-105">
                <X className="w-6 h-6" />
              </SheetClose>
            </div>
          </div>
          <div className="pt-6 pb-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow">
                <img alt={`Photo ${i + 1}`} src={img} className="object-cover w-full h-auto" />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg">
                  <span className="text-white text-sm font-medium">{i + 1} / {images.length}</span>
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
