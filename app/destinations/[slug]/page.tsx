"use client";

import Banner from "@/components/Banner";
import DestinationDealCarousel from "@/components/destinationdetail/DestinationdealCarousel";
import Experience from "@/components/destinationdetail/Experience";
import Explore from "@/components/destinationdetail/explore";
import GoodFor from "@/components/destinationdetail/goodfor";
import Map from "@/components/destinationdetail/map";
import Weather from "@/components/destinationdetail/Weather";
import Faqs from "@/components/faqs";
import Features from "@/components/Features";
import Perfectholiday from "@/components/Perfectholiday";
import Signup from "@/components/Signup";
import Tailortripcard from "@/components/Tailortripcard";
import TrendingCarousel from "@/components/TrendingCarousel";
import Trustsection from "@/components/Trustsection";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

// Mock destination data - replace with actual data from your API/database


export default function DestinationPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Get destination data based on slug
//   const destination = destinationsData[slug as keyof typeof destinationsData];

  // If destination not found, show 404
//   if (!destination) {
//     notFound();
//   }

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner />
        <Features />
        <Experience />
        <GoodFor />
        <TrendingCarousel />
        <Explore />
        <Faqs />
        <Map />
        <Weather />
        <DestinationDealCarousel />
        <Perfectholiday />
        <Tailortripcard />
        <Signup />
        <Trustsection />

      </main>
    </div>
  );
}