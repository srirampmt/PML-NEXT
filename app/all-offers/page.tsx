"use client";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import WeekEscapes from "@/components/WeekEscapes";
import Broucher from "@/components/Broucher";
import WhybookwithPml from "@/components/WhybookwithPml";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import TrendingCarousel from "@/components/TrendingCarousel";
import FAQs from "@/components/faqs";
import Coupons from "@/components/offers/coupons";
import ForFlight from "@/components/offers/ForFlight";

export default function AllOffers() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner title="LUXURY FOR LESS" description="Designer holidays at affordable prices" />
        <Features />
        <WeekEscapes />
        <TrendingCarousel title="Top city break deals to explore" />
        <TrendingCarousel title="This weeks top all inclusive offers" />
        <TrendingCarousel title="Handpicked premium luxury escapes" />
        <Coupons />
        <FAQs />
        <ForFlight />
        <Broucher />
        <WhybookwithPml />
        <Signup />
        <Trustsection />
        </main>
    </div>
    );
}