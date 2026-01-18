"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ImagesIcon, X } from "lucide-react";

interface HotelBannerProps {
  location: string;
  title: string;
  subtitle: string;
  priceLabel?: string;
  price?: string;
  ctaText?: string;
  images: string[];
  badgeText?: string;
  thumbnail_1?: string;
  thumbnail_2?: string;
  thumbnail_3?: string;
}

export default function HotelBanner({
  location,
  title,
  subtitle,
  priceLabel = "Price starting from",
  price = "£199",
  ctaText = "View Options",
  images,
  thumbnail_1,
  thumbnail_2,
  thumbnail_3,
  badgeText = "Prices include FREE Attraction Entry",
}: HotelBannerProps) {
  const [open, setOpen] = useState(false);

  const handleCtaClick = () => {
    const calendarEl = document.getElementById("holiday-calendar");
    if (!calendarEl) return;
    calendarEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* --- MAIN BANNER SECTION --- */}
      <section className=" relative bg-white font-['Montserrat']">
        <div className="w-full max-w-[1440px] mx-auto py-[20px] md:py-[24px]">
          <div className="w-full max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <div className="flex-1 max-w-[843px]">
                <div className="text-[#4c4c4c] text-[14px] md:text-[16px] font-semibold uppercase mb-2 leading-[24px]">
                  {location}
                </div>

                <h1 className="text-pml-primary text-[22px] md:text-[24px] font-semibold leading-[32px] mb-2">
                  {title}
                </h1>

                <p className="text-[#000000] text-[14px] md:text-[16px] lg:text-[16px] leading-[140%]">
                  {subtitle}
                </p>
              </div>

              {/* Price */}
              <div className=" flex-shrink-0 lg:pt-2">
                <div className="hidden md:flex px-5 w-full bg-white justify-between z-50 md:relative md:inset-auto md:px-0 md:w-auto md:bg-transparent md:z-auto  items-center gap-6" >
                  <div className="flex flex-col items-center text-[#4c4c4c] text-[14px] leading-[22px] tracking-[0.01em] font-normal">
                    <div className="mb-1">{priceLabel}</div>
                    <div className="text-[#CB2187] text-[24px] md:text-[28px] font-bold">
                      <span className="text-[#4c4c4c] text-[12px]">£</span>
                      {" "}{price}{" "}
                      <span className="text-[#4c4c4c] text-[12px]">pp</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCtaClick}
                    className="bg-[#CB2187] text-white text-[13px] md:text-[16px] font-semibold px-5 py-2 md:px-6 md:py-3 rounded-[10px]"
                  >
                    {ctaText}
                  </button>
                </div>
              </div>
            </div>

            {/* IMAGES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 md:gap-4 items-start">
              {/* Large image - full width on mobile, left side on md+ */}
              <div className="relative">
                {badgeText && (
                  <img
                    className="absolute top-3 left-3 z-10"
                    src={badgeText}   // must be a valid image URL string
                    width={300}
                    height={20}
                    alt="badge"
                  />
                )}

                {thumbnail_1 && (
                  <img src={thumbnail_1}
                    className="w-full h-[200px] sm:h-[300px] md:h-[360px] lg:h-[450px] object-cover rounded-[8px]"
                  />
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 gap-2 md:gap-4">
                {/* Top/Left image */}
                {thumbnail_2 && (
                  <img
                    src={thumbnail_2}
                    className="w-full h-[120px] sm:h-[150px] md:h-[175px] lg:h-[216px] object-cover rounded-[8px]"
                  />
                )}

                {/* Bottom/Right image WITH MORE ICON */}
                {thumbnail_3 && (
                  <div className="relative">
                    <img
                      src={thumbnail_3}
                      className="w-full h-[120px] sm:h-[150px] md:h-[175px] lg:h-[216px] object-cover rounded-[8px]"
                    />

                    {/* --- MORE PHOTOS BUTTON --- */}
                    <button
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#CB2187] p-2 rounded-full shadow-md"
                      onClick={() => setOpen(true)}
                    >
                      <span className="flex items-center gap-[4px] px-[2px] md:px-[8px] py-[2px]">
                        <ImagesIcon size={18} /> 
                        <span className="text-[14px] font-medium leading-[24px] hidden md:block ">More Images</span>
                      </span>
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
        <SheetContent
          side="bottom"
          className="w-full h-screen md:h-auto md:max-h-[100vh] overflow-y-auto bg-white z-[1001]"
        >
          <SheetHeader className="sticky -top-6 bg-white z-10 py-5 px-[20px] md:px-[128px] border-b">
            <SheetTitle className="flex items-center justify-between text-lg md:text-xl font-semibold">
              More Photos
              <SheetClose>
                <X size={20} className="cursor-pointer" />
              </SheetClose>
            </SheetTitle>
          </SheetHeader>

          {/* PHOTO GRID */}
          <div className="mt-4 md:mt-8 grid grid-cols-1 px-[20px] md:px-[300px] gap-3 md:gap-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-40 sm:h-48 md:h-[500px]  object-cover rounded-[8px] shadow-sm hover:shadow-md transition-shadow"
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>     
    </>
  );
}
