import type { Metadata } from "next";
import Script from "next/script";
import { cache } from "react";
import HomePageSkeleton from "@/components/HomePageSkeleton";
import type { DestinationsHomepageResponse } from "@/types/destinationsHomepage";
import { Perfectholiday } from "@/components/Perfectholiday";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import DestinationCarousel from "@/components/DestinationCarousel";
import Broucher from "@/components/Broucher";
import WhybookwithPml from "@/components/WhybookwithPml";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import Largecard from "@/components/Largecard";
import Worldofplanmyluxe from "@/components/Worldofplanmyluxe";
import Tailortripcard from "@/components/Tailortripcard";
import DealCollections from "@/components/DealCollection";
import ChatSection from "@/components/ChatSection";
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

const getDestinationHomeResponse = cache(
  async (): Promise<DestinationsHomepageResponse | null> => {
  const backendUrl = process.env.BACKEND_URL;
  const secret = process.env.NEXT_SERVER_API_SECRET;

  if (!backendUrl || !secret) {
    return null;
  }

  try {
    const res = await fetch(joinUrl(backendUrl, "/client/api/destination-home/"), {
      headers: {
        "X-NEXT-SERVER-KEY": secret,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;
    const data = (await res.json()) as DestinationsHomepageResponse;
    if (!data || (data as any).success !== true) return null;
    return data;
  } catch {
    return null;
  }
}
);

export async function generateMetadata(): Promise<Metadata> {
  const data = await getDestinationHomeResponse();
  const page = data?.page;

  const siteUrl = getSiteUrl();

  const title = page?.Meta_Title || "Plan My Luxury";
  const description = page?.Meta_Description || "Luxury Travel & Accommodations";
  const canonicalUrl = page?.Canonical_URL
    ? toAbsoluteUrl(page.Canonical_URL, siteUrl)
    : toAbsoluteUrl("/destinations", siteUrl);

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

export default async function Destinations() {
  const data = await getDestinationHomeResponse();
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
          {!page ? 
          <HomePageSkeleton /> : 
            <>
              <Banner
                title={page?.banner_title}
                description={page?.banner_subtitle}
                image={page?.banner_image}
              />
              <Features />
              <ChatSection chat_title={page?.chat_title} chat_subtitle={page?.chat_subtitle} />
              
              <Largecard
                title={page?.Weekly_deals_title}
                deal={page?.Weekly_hot_deal}
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
                Destination_collection_title={
                  page?.Desination_collection_title
                }
                description={
                  page?.Destination_collection_description
                } // optional
                Destination_collection_tag_1={
                  page?.Destination_collection_tag_1
                }
                tag_1_destination={page?.tag_1_destination}
                Destination_collection_tag_2={
                  page?.Destination_collection_tag_2
                }
                tag_2_destination={page?.tag_2_destination}
                Destination_collection_tag_3={
                  page?.Destination_collection_tag_3
                }
                tag_3_destination={page?.tag_3_destination}
                Destination_collection_tag_4={
                  page?.Destination_collection_tag_4
                }
                tag_4_destination={page?.tag_4_destination}
                Destination_collection_tag_5={
                  page?.Destination_collection_tag_5
                }
                tag_5_destination={page?.tag_5_destination}
                Destination_collection_tag_6={
                  page?.Destination_collection_tag_6
                }
                tag_6_destination={page?.tag_6_destination}
              />
              <Worldofplanmyluxe />
              <Tailortripcard />
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
          }
        </main>
      </div>
    </>
  );
}


