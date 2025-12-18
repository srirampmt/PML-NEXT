"use client";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner title="LUXURY FOR LESS" description="Unforgettable designer holidays crafted for every budget"/>
        <Features/>
        <Handpickedescapes/>
        <WeekEscapes/>
        <DealCollections title="Explore our deal collections"/>
        <DestinationCarousel title="Destinations designed for your escape" description="We focus on stunning destinations that deliver exceptional style at prices you will love. Explore our curated collection and enjoy luxury escapes designed to fit every budget."/>
        <Partners/>
        <Perfectholiday title="Find your perfect holiday style"/>
        <Broucher/>
        <WhybookwithPml/>
        <Signup/>
        <Trustsection/>
      </main>
    </div>
  );
}
