"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Image, Images, ImagesIcon, LayoutGrid, X } from "lucide-react";

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
  price = "£199",
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
                  <button className="bg-[#CB2187] text-white text-[13px] md:text-[16px] font-semibold px-5 py-2 md:px-6 md:py-3 rounded-[10px]">
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
                  <div className="scale-75 top-0 -left-5 md:scale-100 absolute md:top-3 md:left-3 z-10 bg-[#4c4c4c] text-white text-[14px] px-[12px] py-[6px] rounded-md shadow-md border border-white leading-[140%] font-normal">
                    <div className="flex gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_3128)">
                          <path d="M12.3887 8.38574H14.2635V12.875H12.3887V8.38574Z" fill="white"/>
                          <path d="M8.83789 8.38574H10.7129V12.875H8.83789V8.38574Z" fill="white"/>
                          <path d="M5.28711 8.38574H7.16211V12.875H5.28711V8.38574Z" fill="white"/>
                          <path d="M1.7373 8.38574H3.61218V12.875H1.7373V8.38574Z" fill="white"/>
                          <path d="M14.8888 6.97949V6.51074H1.1123V6.97949C1.1123 7.2384 1.32214 7.44824 1.58105 7.44824H14.42C14.6788 7.44824 14.8888 7.2384 14.8888 6.97949Z" fill="white"/>
                          <path d="M15.5315 13.8125H0.469726C0.210815 13.8125 0.000976562 14.0223 0.000976562 14.2812V15.5312C0.000976562 15.7902 0.210815 16 0.469726 16H15.5315C15.7904 16 16.0002 15.7902 16.0002 15.5312V14.2812C16.0002 14.0223 15.7904 13.8125 15.5315 13.8125Z" fill="white"/>
                          <path d="M0.468708 5.57324H15.5312C15.7409 5.57324 15.9251 5.43396 15.9822 5.23217C16.0393 5.03039 15.9555 4.81518 15.7769 4.70532L8.24568 0.06958C8.09505 -0.0231933 7.90498 -0.0231933 7.75423 0.06958L0.22298 4.70532C0.0443917 4.8153 -0.0393484 5.03039 0.0177804 5.23217C0.0749093 5.43396 0.259113 5.57324 0.468708 5.57324ZM7.68135 2.75708H8.31868C8.57759 2.75708 8.78743 2.96692 8.78743 3.22583C8.78743 3.48474 8.57759 3.69458 8.31868 3.69458H7.68135C7.42244 3.69458 7.2126 3.48474 7.2126 3.22583C7.2126 2.96692 7.42244 2.75708 7.68135 2.75708Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3128">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      {badgeText}
                    </div>
                  </div>
                )}

                {largeImage && (
                  <img src={largeImage}
                    className="w-full h-[200px] sm:h-[300px] md:h-[360px] lg:h-[450px] object-cover rounded-[8px]"
                  />
                )}
              </div>

              {/* Two images - side by side on mobile, stacked on md+ */}
              <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 gap-2 md:gap-4">
                {/* Top/Left image */}
                {rightTopImage && (
                  <img
                    src={rightTopImage}
                    className="w-full h-[120px] sm:h-[150px] md:h-[175px] lg:h-[216px] object-cover rounded-[8px]"
                  />
                )}

                {/* Bottom/Right image WITH MORE ICON */}
                {rightBottomImage && (
                  <div className="relative">
                    <img
                      src={rightBottomImage}
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
