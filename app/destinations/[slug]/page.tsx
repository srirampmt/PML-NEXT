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

export default function DestinationPage() {
  const params = useParams();
  const slug = params.slug as string;
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner title="Discover the magic of Mallorca" description="Sun soaked shores and Mediterranean magic" />
        <Features />
        <Experience />
        <GoodFor />
        <TrendingCarousel title="Unmissable Mallorca holiday deals" />
        <Explore />
        <Faqs />
        <Map iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393421.54495261016!2d2.582007853010404!3d39.613561217286986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b8766606c129%3A0xb7eb9bff02d2ecc0!2sMajorca!5e0!3m2!1sen!2sin!4v1765204028351!5m2!1sen!2sin" />
        <Weather />
        <DestinationDealCarousel title="Exclusive handpicked deals to explore" description="Discover a curated selection of exceptional holiday offers chosen for their style value and comfort. Our travel experts work closely with trusted partners to secure upgrades savings and added touches designed to elevate your stay. Enjoy our latest handpicked deals and find a getaway that suits you perfectly." />
        <Perfectholiday title="Discover similar destinations" />
        <Tailortripcard />
        <Signup />
        <Trustsection />

      </main>
    </div>
  );
}