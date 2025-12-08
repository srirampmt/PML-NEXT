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
import Experience from "@/components/destinationdetail/Experience";
import Trendingbanner from "@/components/holidaystyleshome/trendingbanner";
import HolidayTypes from "@/components/holidaystyleshome/HolidayTypes";

export default function destinations() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner />
        <Features />
        <Experience />
        <HolidayTypes />
        <Trendingbanner />  
        <Perfectholiday />
        <Tailortripcard />
        <Broucher />
        <WhybookwithPml />
        <Signup />
        <Trustsection />
      </main>
    </div>
  );
}
