import type { Metadata } from "next";
import Script from "next/script";
import { cache } from "react";
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
import HomePageSkeleton from "@/components/HomePageSkeleton";
import type { HomePageResponse } from "@/types/homepage";
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

const getHomePageResponse = cache(async (): Promise<HomePageResponse | null> => {
  const backendUrl = process.env.BACKEND_URL;
  const secret = process.env.NEXT_SERVER_API_SECRET;

  if (!backendUrl || !secret) {
    return null;
  }

  try {
    const res = await fetch(joinUrl(backendUrl, "/client/api/home/"), {
      headers: {
        "X-NEXT-SERVER-KEY": secret,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;
    const data = (await res.json()) as HomePageResponse;
    if (!data || (data as any).success !== true) return null;
    return data;
  } catch {
    return null;
  }
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageResponse();
  const page = data?.page;

  const siteUrl = getSiteUrl();

  const title = page?.Meta_Title || "Plan My Luxury";
  const description =
    page?.Meta_Description || "Luxury Travel & Accommodations";
  const canonicalUrl = page?.Canonical_URL
    ? toAbsoluteUrl(page.Canonical_URL, siteUrl)
    : toAbsoluteUrl("/", siteUrl);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: page?.Meta_Title,
      description: page?.Meta_Description,
      url: canonicalUrl,
      images: page?.OG_Image
        ? [{ url: toAbsoluteUrl(page.OG_Image, siteUrl) }]
        : undefined,
    },
    twitter: {
      title: page?.Meta_Title,
      description: page?.Meta_Description,
      images: page?.Twitter_Image
        ? [toAbsoluteUrl(page.Twitter_Image, siteUrl)]
        : undefined,
    },
  };
}

export default async function Home() {
  const data = await getHomePageResponse();
  const page = data?.page;

  return (
    <>
      {page?.Head_Scripts && (
        <Script id="homepage-head-scripts" strategy="afterInteractive">
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
                description={page?.banner_subtitle}
                image={page?.banner_image}
              />
              <Features />
              <Handpickedescapes
                offers_title={page?.offers_title}
                offers_subtitle={page?.offers_subtitle}
                offer_1_title={page?.offer_1_title}
                offer_1_subtitle={page?.offer_1_subtitle}
                offer_1_image={page?.offer_1_image}
                offer_1_url={page?.offer_1_url}
                offer_2_title={page?.offer_2_title}
                offer_2_subtitle={page?.offer_2_subtitle}
                offer_2_image={page?.offer_2_image}
                offer_2_url={page?.offer_2_url}
                offer_3_title={page?.offer_3_title}
                offer_3_subtitle={page?.offer_3_subtitle}
                offer_3_image={page?.offer_3_image}
                offer_3_url={page?.offer_3_url}
                offer_4_title={page?.offer_4_title}
                offer_4_subtitle={page?.offer_4_subtitle}
                offer_4_image={page?.offer_4_image}
                offer_4_url={page?.offer_4_url}
              />

              <WeekEscapes
                Weekly_deals_title={page?.Weekly_deals_title ?? ""}
                Weekly_deals_subtitle={page?.Weekly_deals_subtitle ?? ""}
                Weekly_hot_deal={page?.Weekly_hot_deal ?? null}
                Weekly_deals_hotels={page?.Weekly_deals_hotels ?? []}
                card_image={page?.card_image ?? null}
                add_title={page?.add_title ?? ""}
                add_subtitle={page?.add_subtitle ?? ""}
                add_link={page?.add_link ?? ""}
              />

              <DealCollections
                deal_collection_title={page?.deal_collection_title}
                deal_collection_tag_1={page?.deal_collection_tag_1}
                tag_1_deals={page?.tag_1_deals}
                deal_collection_tag_2={page?.deal_collection_tag_2}
                tag_2_deals={page?.tag_2_deals}
                deal_collection_tag_3={page?.deal_collection_tag_3}
                tag_3_deals={page?.tag_3_deals}
                deal_collection_tag_4={page?.deal_collection_tag_4}
                tag_4_deals={page?.tag_4_deals}
                deal_collection_tag_5={page?.deal_collection_tag_5}
                tag_5_deals={page?.tag_5_deals}
                deal_collection_tag_6={page?.deal_collection_tag_6}
                tag_6_deals={page?.tag_6_deals}
              />

              <DestinationCarousel
                Destination_collection_title={page?.Desination_collection_title}
                description={page?.Destination_collection_description}
                Destination_collection_tag_1={page?.Destination_collection_tag_1}
                tag_1_destination={page?.tag_1_destination}
                Destination_collection_tag_2={page?.Destination_collection_tag_2}
                tag_2_destination={page?.tag_2_destination}
                Destination_collection_tag_3={page?.Destination_collection_tag_3}
                tag_3_destination={page?.tag_3_destination}
                Destination_collection_tag_4={page?.Destination_collection_tag_4}
                tag_4_destination={page?.tag_4_destination}
                Destination_collection_tag_5={page?.Destination_collection_tag_5}
                tag_5_destination={page?.tag_5_destination}
                Destination_collection_tag_6={page?.Destination_collection_tag_6}
                tag_6_destination={page?.tag_6_destination}
              />

              <Partners />
              <Perfectholiday
                perfect_holiday_title={page?.perfect_holiday_title}
                perfect_holiday_subtitle={page?.perfect_holiday_subtitle}
                perfect_holiday_types={page?.perfect_holiday_types}
              />

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