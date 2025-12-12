"use client";
import { Perfectholiday } from "@/components/Perfectholiday";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import TrendingCarousel from "@/components/TrendingCarousel";
import Tailortripcard from "@/components/Tailortripcard";
import Experience from "@/components/destinationdetail/Experience";
import Trendingbanner from "@/components/holidaystyledetail/trendingbanner";
import DestinationDealCarousel from "@/components/destinationdetail/DestinationdealCarousel";
import Explore from "@/components/destinationdetail/explore";
import FAQs from "@/components/faqs";

export default function HolidayStyleDetail() {
  return (
    <div className="min-h-screen bg-white">
        <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
            <Banner title="All inclusive holidays made easy" description="Unlimited comfort with exceptional holiday value"/>
            <Features />
            <Experience />
            <DestinationDealCarousel title="Trending all inclusive offers to explore" description=""/>
            <Explore />
            <Trendingbanner />
            <FAQs />
            <TrendingCarousel title="More handpicked all-inclusive offers" />
            <Tailortripcard />
            <Perfectholiday title="Find your perfect holiday style"/>
            <Signup />
            <Trustsection />
        </main>
    </div>
  );
}