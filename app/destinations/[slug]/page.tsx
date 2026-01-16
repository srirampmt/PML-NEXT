import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { cache } from "react";

import Banner from "@/components/Banner";
import DestinationDealCarousel from "@/components/destinationdetail/DestinationdealCarousel";
import Experience from "@/components/destinationdetail/Experience";
import Explore from "@/components/destinationdetail/explore";
import GoodFor from "@/components/destinationdetail/goodfor";
import Map from "@/components/destinationdetail/map";
import Weather from "@/components/destinationdetail/Weather";
import FAQs from "@/components/faqs";
import Features from "@/components/Features";
import Perfectholiday from "@/components/Perfectholiday";
import Signup from "@/components/Signup";
import Tailortripcard from "@/components/Tailortripcard";
import TrendingCarousel from "@/components/TrendingCarousel";
import Trustsection from "@/components/Trustsection";

import type { DestinationResponse, DestinationSummary } from "@/types/destination";
import { getSiteUrl } from "@/lib/site-url";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

function asArray<T>(value: T[] | "" | null | undefined): T[] {
  return Array.isArray(value) ? value : [];
}

const getDestinationResponse = cache(async (slug: string): Promise<DestinationResponse | null> => {
  const backendUrl = process.env.BACKEND_URL;
  const secret = process.env.NEXT_SERVER_API_SECRET;
  if (!backendUrl || !secret) return null;

  const encodedSlug = encodeURIComponent(slug);
  const url = joinUrl(backendUrl, `/client/api/destination/${encodedSlug}/`);

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      "X-NEXT-SERVER-KEY": secret,
    },
  });

  if (!res.ok) {
    let bodyText = "";
    try {
      bodyText = await res.text();
    } catch {
      // ignore
    }
    console.log("Destination fetch failed", {
      url,
      status: res.status,
      statusText: res.statusText,
      body: bodyText?.slice(0, 500),
    });
    return null;
  }

  try {
    const json = (await res.json()) as DestinationResponse;
    if (!json || (json as any).success !== true) return null;
    return json;
  } catch {
    return null;
  }
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getDestinationResponse(slug);
  const page = data?.page;

  const siteUrl = getSiteUrl();

  const canonicalUrl = page?.Canonical_URL
    ? toAbsoluteUrl(page.Canonical_URL, siteUrl)
    : toAbsoluteUrl(`/destinations/${slug}`, siteUrl);

  const title = page?.Meta_Title || page?.banner_title || "Plan My Luxe";
  const description = page?.Meta_Description || "";

  const ogImage = page?.OG_Image ? toAbsoluteUrl(page.OG_Image, siteUrl) : "";
  const twitterImage = page?.Twitter_Image
    ? toAbsoluteUrl(page.Twitter_Image, siteUrl)
    : ogImage;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: "website",
    },
    twitter: {
      title,
      description,
      images: twitterImage ? [twitterImage] : undefined,
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getDestinationResponse(slug);
  const page = data?.page;
  if (!page) notFound();

  const similarDestinations = asArray(page.similar_destinations).map((d) => {
    const input: DestinationSummary =
      typeof d === "string"
        ? { id: d, slug: d, name: d }
        : (d as DestinationSummary);
    return {
      ...input,
      card_image: input.card_image || input.banner_image,
    };
  });

  return (
    <>
      {page.Head_Scripts ? (
        <Script id="destination-head-scripts" strategy="afterInteractive">
          {page.Head_Scripts}
        </Script>
      ) : null}

      <div className="min-h-screen bg-white">
        <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
          <Banner title={page.banner_title} description={page.banner_subtitle} image={page.banner_image} />
          <Features />

          <Experience
            best_experience_title={page.best_experience_title}
            best_experience_line_1={page.best_experience_line_1}
            best_experience_line_2={page.best_experience_line_2}
            best_experience_line_3={page.best_experience_line_3}
            best_experience_image_1={page.best_experience_image_1}
          />

          <GoodFor title_1={page?.title_1} title_2={page?.title_2}
            title_3={page?.title_3} title_4={page?.title_4}
            description_1={page?.description_1} description_2={page?.description_2}
            description_3={page?.description_3} description_4={page?.description_4}
            destinationName={slug}
          />

          <TrendingCarousel title={page.destination_deals_title_1} deal_collection={asArray(page.destination_deals_1)} />

          <Explore
            explore_title_1={page.explore_title_1}
            explore_subtitle_1={page.explore_subtitle_1}
            explore_description_1={page.explore_description_1}
            explore_image_1={page.explore_image_1}
            explore_title_2={page.explore_title_2}
            explore_subtitle_2={page.explore_subtitle_2}
            explore_description_2={page.explore_description_2}
            explore_image_2={page.explore_image_2}
            explore_title_3={page.explore_title_3}
            explore_subtitle_3={page.explore_subtitle_3}
            explore_description_3={page.explore_description_3}
            explore_image_3={page.explore_image_3}
            explore_title_4={page.explore_title_4}
            explore_subtitle_4={page.explore_subtitle_4}
            explore_description_4={page.explore_description_4}
            explore_image_4={page.explore_image_4}
          />

          <FAQs
            faqItems={asArray(page.faqs)
              .map((f) => ({ question: f.question ?? "", answer: f.answer ?? "" }))
              .filter((f) => Boolean(f.question) && Boolean(f.answer))}
          />

          <Map iframeSrc={page.map_iframe || ""} />

          <Weather Weather_title={page?.Weather_title}
          Weather_subtitle={page?.Weather_subtitle}
          season_card_image_1={page?.season_card_image_1}
          season_card_title_1={page?.season_card_title_1}
          season_card_description_1={
            page?.season_card_description_1
          }
          season_card_image_2={page?.season_card_image_2}
          season_card_title_2={page?.season_card_title_2}
          season_card_description_2={
            page?.season_card_description_2
          }
          season_card_image_3={page?.season_card_image_3}
          season_card_title_3={page?.season_card_title_3}
          season_card_description_3={
            page?.season_card_description_3
          }
          season_card_image_4={page?.season_card_image_4}
          season_card_title_4={page?.season_card_title_4}
          season_card_description_4={
            page?.season_card_description_4
          }/>

          <DestinationDealCarousel 
            trending_deals_title_1={page?.handpicked_deals_title}
            trending_deals_subtitle_1={page?.handpicked_deals_subtitle}
            trending_deals_1={asArray(page?.handpicked_deals)} 
          />

          <Perfectholiday
            perfect_holiday_title={page.similar_destinations_title}
            perfect_holiday_types={similarDestinations}
          />

          <Tailortripcard />
          <Signup />
          <Trustsection />
        </main>
      </div>
    </>
  );
}