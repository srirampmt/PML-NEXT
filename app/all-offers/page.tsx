import type { Metadata } from "next";
import Script from "next/script";
import { cache } from "react";

import Banner from "@/components/Banner";
import Broucher from "@/components/Broucher";
import Features from "@/components/Features";
import ForFlight from "@/components/offers/ForFlight";
import HomePageSkeleton from "@/components/HomePageSkeleton";
import Signup from "@/components/Signup";
import TrendingCarousel from "@/components/TrendingCarousel";
import Trustsection from "@/components/Trustsection";
import WeekEscapes from "@/components/WeekEscapes";
import WhybookwithPml from "@/components/WhybookwithPml";
import FAQs from "@/components/faqs";
import Coupons from "@/components/offers/coupons";
import type { AllOffersResponse } from "@/types/allOffers";
import { getSiteUrl } from "@/lib/site-url";

function joinUrl(base: string, path: string) {
  const normalizedBase = base.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

function toAbsoluteUrl(input: string, siteUrl: string) {
  try {
    return new URL(input, siteUrl).toString();
  } catch {
    return input;
  }
}

const getAllOffersResponse = cache(async (): Promise<AllOffersResponse | null> => {
  const backendUrl = process.env.BACKEND_URL;
  const secret = process.env.NEXT_SERVER_API_SECRET;

  if (!backendUrl || !secret) {
    return null;
  }

  try {
    const res = await fetch(joinUrl(backendUrl, "/client/api/all-offers/"), {
      headers: {
        "X-NEXT-SERVER-KEY": secret,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;
    const data = (await res.json()) as AllOffersResponse;
    return data;
  } catch {
    return null;
  }
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAllOffersResponse();
  const page = data?.page;

  const siteUrl = getSiteUrl();
  const canonical = page?.Canonical_URL
    ? toAbsoluteUrl(page.Canonical_URL, siteUrl)
    : joinUrl(siteUrl, "/all-offers");

  const title = page?.Meta_Title || "All Offers";
  const description = page?.Meta_Description || "";

  const ogImage = page?.OG_Image ? toAbsoluteUrl(page.OG_Image, siteUrl) : "";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: page?.Twitter_Image
        ? [toAbsoluteUrl(page.Twitter_Image, siteUrl)]
        : ogImage
          ? [ogImage]
          : undefined,
    },
  };
}

export default async function AllOffers() {
  const data = await getAllOffersResponse();
  const page = data?.page;

  return (
    <>
      {page?.Head_Scripts && (
        <Script id="all-offers-head-scripts" strategy="afterInteractive">
          {page.Head_Scripts}
        </Script>
      )}

      <div className="min-h-screen bg-white">
        <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
          {!page ? (
            <HomePageSkeleton />
          ) : (
            <>
              <Banner
                title={page?.banner_title}
                image={page?.banner_image}
                description={page?.banner_subtitle}
              />
              <Features />
              <WeekEscapes
                Weekly_deals_title={page?.Weekly_deals_title}
                Weekly_deals_subtitle={page?.Weekly_deals_subtitle}
                Weekly_hot_deal={page?.Weekly_hot_deal}
                Weekly_deals_hotels={page?.Weekly_deals_hotels}
                card_image={page?.card_image}
                add_title={page?.add_title}
                add_subtitle={page?.add_subtitle}
                add_link={page?.add_link}
              />
              <TrendingCarousel
                title={page?.deal_collection_title_1}
                deal_collection={page?.deal_collection_hotels_1}
              />
              <TrendingCarousel
                title={page?.deal_collection_title_2}
                deal_collection={page?.deal_collection_hotels_2}
              />
              <TrendingCarousel
                title={page?.deal_collection_title_3}
                deal_collection={page?.deal_collection_hotels_3}
              />
              <Coupons />
              <FAQs faqItems={page?.faqs}/>
              <ForFlight />
              <Broucher />
              <WhybookwithPml />
              <Signup />
              <Trustsection />
            </>
          )}
        </main>
      </div>
    </>
  );
}
