"use client";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import Trending20banner from "@/components/offers/trending20banner";
import Coupons from "@/components/offers/coupons";
import Offerdeals from "@/components/offers/Offerdeals";
import FAQs from "@/components/faqs";
import AgentsProfile from "@/components/offers/agentsprofile";

export default function TopTrending20() {
  return (
    <div className="min-h-screen bg-white">
        <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
            <Banner title="This weeks hottest holiday deals" description="Unbeatable savings free extras and limited time luxury escapes"/>
            <Features />
            {/* <Largecard /> */}
            <Offerdeals />
            <Trending20banner />
            <Offerdeals />
            <Coupons />
            <Offerdeals />
            <FAQs />
            <AgentsProfile />
            <Signup />
            <Trustsection />
        </main>
    </div>
  );
}
