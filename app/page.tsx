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

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner />
        <Features />
        <Handpickedescapes />
        <WeekEscapes />
        <DealCollections />
        <DestinationCarousel />
        <Partners />
        
        <Perfectholiday />
      </main>
    </div>
  );
}
