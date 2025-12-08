"use client";
import { MainNav } from "@/components/layout/main-nav";

import { useState } from "react";

import { Perfectholiday } from "@/components/Perfectholiday";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Handpickedescapes from "@/components/Handpickedescapes";
import WeekEscapes from "@/components/WeekEscapes";
import DealCollections from "@/components/DealCollection";
import DestinationCarousel from "@/components/DestinationCarousel";
import Partners from "@/components/parners";
import Broucher from "@/components/Broucher";
import WhybookwithPml from "@/components/WhybookwithPml";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import Largecard from "@/components/Largecard";
import TrendingCarousel from "@/components/TrendingCarousel";
import Worldofplanmyluxe from "@/components/Worldofplanmyluxe";
import Tailortripcard from "@/components/Tailortripcard";

export default function destinations() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner />
        <Features />
        <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white font-['Montserrat']">
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-[20px] md:py-[50px] lg:py-[50px]">
            <div className="w-full max-w-[1280px] mx-auto">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-[10px] md:mb-[20px] lg:mb-[25px]">
                {/* Left side - Title and description */}
                <div className="max-w-[700px] mb-[12px] lg:mb-0">
                  <h2 className="font-['Montserrat'] text-[#4c4c4c] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] sm:leading-[1.25] md:leading-[1.3] lg:leading-[60px] tracking-[-0.005em] mb-[12px] sm:mb-[16px] md:mb-[20px] lg:mb-[24px]">
                   Explore the most beautiful places for less
                  </h2>
                  <p className="font-['Montserrat'] text-[#4c4c4c] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] sm:leading-[1.7] md:leading-[1.75] lg:leading-[28px] tracking-[0] max-w-[580px]">
                    From sun drenched islands to iconic coastlines our destinations bring together unforgettable scenery stylish resorts and luxury that feels effortlessly affordable.
                  </p>
                  <button className="inline-flex items-center justify-center px-[28px] md:px-[36px] py-[12px] md:py-[14px] bg-pml-primary rounded-[8px] hover:bg-[#a30d4a] transition-all duration-300 mt-4">
                    <span className="font-['Montserrat'] text-white text-[14px] md:text-[16px] font-semibold">
                      Let&apos;s Chat
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Largecard />
        <TrendingCarousel />
        <DestinationCarousel />
        <Worldofplanmyluxe />
        <Tailortripcard />
        <Perfectholiday />
        <Broucher />
        <WhybookwithPml />
        <Signup />
        <Trustsection />
      </main>
    </div>
  );
}
