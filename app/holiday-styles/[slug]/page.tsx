import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { cache } from "react";

import { Perfectholiday } from "@/components/Perfectholiday";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Signup from "@/components/Signup";
import Trustsection from "@/components/Trustsection";
import TrendingCarousel from "@/components/TrendingCarousel";
import Tailortripcard from "@/components/Tailortripcard";
import Experience from "@/components/destinationdetail/Experience";
import Trendingbanner from "@/components/holidaystyledetail/trendingbanner";
import DestinationDealCarousel from "@/components/destinationdetail/DestinationdealCarousel";
import Explore from "@/components/destinationdetail/explore";
import FAQs from "@/components/faqs";
import type { HolidayStyleResponse } from "@/types/holidayStyle";
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

const getHolidayStyleResponse = cache(async (slug: string): Promise<HolidayStyleResponse | null> => {
  const backendUrl = process.env.BACKEND_URL;
  const secret = process.env.NEXT_SERVER_API_SECRET;
  if (!backendUrl || !secret) return null;

  const encodedSlug = encodeURIComponent(slug);
  const url = joinUrl(backendUrl, `/client/api/holiday-style/${encodedSlug}/`);

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      "X-NEXT-SERVER-KEY": secret,
    },
  });

  if (!res.ok) return null;
  try {
    const json = (await res.json()) as HolidayStyleResponse;
    if (!json || (json as any).success !== true) return null;
    return json;
  } catch {
    return null;
  }
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getHolidayStyleResponse(slug);
  const page = data?.page;

  const siteUrl = getSiteUrl();
  const canonicalUrl = page?.Canonical_URL
    ? toAbsoluteUrl(page.Canonical_URL, siteUrl)
    : toAbsoluteUrl(`/holiday-styles/${slug}`, siteUrl);

  const title = page?.Meta_Title || page?.banner_title || "Plan My Luxe";
  const description = page?.Meta_Description || page?.banner_subtitle || "";

  const ogImage = page?.OG_Image ? toAbsoluteUrl(page.OG_Image, siteUrl) : "";
  const twitterImage = page?.Twitter_Image ? toAbsoluteUrl(page.Twitter_Image, siteUrl) : ogImage;

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

export default async function HolidayStyleDetail({ params }: PageProps) {
  const { slug } = await params;
  const data = await getHolidayStyleResponse(slug);
  const page = data?.page;
  if (!page) notFound();

  return (
    <>
      {page.Head_Scripts ? (
        <Script id="holiday-style-head-scripts" strategy="afterInteractive">
          {page.Head_Scripts}
        </Script>
      ) : null}

      <div className="min-h-screen bg-white">
        <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <Banner
          title={page.banner_title}
          description={page.banner_subtitle}
          image={page.banner_image}
        />
        <Features />
        <Experience
          best_experience_title={page.best_experience_title}
          best_experience_line_1={page.best_experience_line_1}
          best_experience_line_2={page.best_experience_line_2}
          best_experience_line_3={page.best_experience_line_3}
          best_experience_image_1={page.best_experience_image_1}
        />

        <DestinationDealCarousel
          trending_deals_title_1={page.trending_deals_title_1}
          trending_deals_subtitle_1={page.trending_deals_subtitle_1}
          trending_deals_1={asArray(page.trending_deals_1)}
        />

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
        <Trendingbanner
          add_card_image={page.add_card_image}
          add_title={page.add_title}
          add_subtitle={page.add_subtitle}
          add_link={page.add_link}
        />

        <FAQs
          faqItems={asArray(page.faqs)
            .map((f) => ({ question: f.question ?? "", answer: f.answer ?? "" }))
            .filter((f) => Boolean(f.question) && Boolean(f.answer))}
        />
        <TrendingCarousel
          title={page.handpicked_deals_title}
          deal_collection={asArray(page.handpicked_deals)}
        />

        <Tailortripcard />
        <Perfectholiday
          perfect_holiday_title={page.perfect_holiday_title}
          perfect_holiday_subtitle={page.perfect_holiday_subtitle}
          perfect_holiday_types={asArray(page.perfect_holiday_types).filter(
            (t): t is Exclude<typeof t, string> => typeof t !== "string"
          )}
        />
        <Signup />
        <Trustsection />
        </main>
      </div>
    </>
  );
}