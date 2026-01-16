import type { Metadata } from "next";
import Script from "next/script";
import { cache } from "react";

import Banner from "@/components/Banner";
import Features from "@/components/Features";
import HomePageSkeleton from "@/components/HomePageSkeleton";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import WeekEscapes from "@/components/WeekEscapes";
import FAQs from "@/components/faqs";
import AgentsProfile from "@/components/offers/agentsprofile";
import Coupons from "@/components/offers/coupons";
import Offerdeals from "@/components/offers/Offerdeals";
import Trending20banner from "@/components/offers/trending20banner";
import type { TopTrending20Response } from "@/types/topTrending20";
import WeeklyDeal from "@/components/offers/WeeklyDeal";
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

const getTopTrending20Response = cache(async (): Promise<TopTrending20Response | null> => {
  const backendUrl = process.env.BACKEND_URL;
  const secret = process.env.NEXT_SERVER_API_SECRET;

  if (!backendUrl || !secret) {
    return null;
  }

  try {
    const res = await fetch(joinUrl(backendUrl, "/client/api/toptrendingdeals/"), {
      headers: {
        "X-NEXT-SERVER-KEY": secret,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;
    const data = (await res.json()) as TopTrending20Response;
    return data;
  } catch {
    return null;
  }
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTopTrending20Response();
  const page = data?.page;

  const siteUrl = getSiteUrl();
  const canonical = page?.Canonical_URL
    ? toAbsoluteUrl(page.Canonical_URL, siteUrl)
    : joinUrl(siteUrl, "/top-trending-20");

  const title = page?.Meta_Title || "Top Trending 20";
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

export default async function TopTrending20() {
  const data = await getTopTrending20Response();
  const page = data?.page;

  return (
    <>
      {page?.Head_Scripts && (
        <Script id="top-trending-20-head-scripts" strategy="beforeInteractive">
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
              <WeeklyDeal
                Weekly_deals_title={page?.Weekly_deals_title}
                Weekly_deals_subtitle={page?.Weekly_deals_subtitle}
                Weekly_hot_deal={page?.Weekly_hot_deal}
                card_image={page?.card_image}
                add_title={page?.add_title}
                add_subtitle={page?.add_subtitle}
                add_link={page?.add_link}
              />
              <Offerdeals 
                title={page?.trending_deals_title ?? page?.trending_deals_title_1} 
                subtitle={page?.trending_deals_subtitle ?? page?.trending_deals_subtitle_1} 
                hotels={page?.trending_deals_hotels ?? page?.trending_deals_hotels_1} 
              />
              <Coupons offercards={page?.offer_cards} />
              <Offerdeals 
                title={page?.trending_deals_title ?? page?.trending_deals_title_2} 
                subtitle={page?.trending_deals_subtitle ?? page?.trending_deals_subtitle_2} 
                hotels={page?.trending_deals_hotels ?? page?.trending_deals_hotels_2} 
              />
              <FAQs faqItems={page?.faqs} />
              <AgentsProfile />
              <Signup />
              <Trustsection />
            </>
          )}
        </main>
      </div>
    </>
  );
}
