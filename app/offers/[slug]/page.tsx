"use client";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import WeekEscapes from "@/components/WeekEscapes";
import WhybookwithPml from "@/components/WhybookwithPml";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import TrendingCarousel from "@/components/TrendingCarousel";
import FAQs from "@/components/faqs";
import Coupons from "@/components/offers/coupons";
import Explore from "@/components/destinationdetail/explore";

export default function OfferType() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner title="Summer 2026 early specials" description="Secure next summers luxury for less with early access deals" />
        <Features />
        <WeekEscapes />
        <Explore />
        <TrendingCarousel title="Popular Hotels Summer 2026 Offers" />
        <FAQs />
        <Coupons />
        <WhybookwithPml />
        <Signup />
        <Trustsection />
        </main>
    </div>
    );
}

