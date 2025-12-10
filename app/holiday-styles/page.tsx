"use client";
import { Perfectholiday } from "@/components/Perfectholiday";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Broucher from "@/components/Broucher";
import WhybookwithPml from "@/components/WhybookwithPml";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import Tailortripcard from "@/components/Tailortripcard";
import Experience from "@/components/destinationdetail/Experience";
import Trendingbanner from "@/components/holidaystyleshome/trendingbanner";
import HolidayTypes from "@/components/holidaystyleshome/HolidayTypes";

export default function HolidayStyles() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner title="Find your perfect holiday style" description="Curated escapes that fit your personal travel style"/>
        <Features />
        <Experience />
        <HolidayTypes />
        <Trendingbanner />  
        <Perfectholiday title="Destinations designed for your escape"/>
        <Tailortripcard />
        {/* <Broucher /> */}
        <WhybookwithPml />
        <Signup />
        <Trustsection />
      </main>
    </div>
  );
}
