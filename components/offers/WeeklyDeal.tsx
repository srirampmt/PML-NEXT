"use client";
import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CircleChevronRight } from "lucide-react";
import type { Deal, HotDeal } from "@/types/homepage";

/* MAIN COMPONENT (ALL IN ONE FILE) */

async function requestCardMeta(
  apiUrl: string,
  signal?: AbortSignal
): Promise<{ price: number | null; durationMax: number | null }> {
  const url = apiUrl?.trim();
  if (!url) return { price: null, durationMax: null };

  const res = await fetch(`/api/cardprice?${url}`, {
    method: "GET",
    cache: "no-store",
    signal,
  });

  const json = await res.json().catch(() => null);
  const rawPrice = json?.price;
  const p = typeof rawPrice === "number" ? rawPrice : rawPrice != null ? Number(rawPrice) : NaN;

  const rawDuration = json?.durationMax;
  const d = typeof rawDuration === "number" ? rawDuration : rawDuration != null ? Number(rawDuration) : NaN;

  return {
    price: Number.isFinite(p) && p > 0 ? p : null,
    durationMax: Number.isFinite(d) && d > 0 ? d : null,
  };
}

function formatGBP(amount: number): string {
  return `£${new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(amount)}`;
}

function normalizeApiUrl(raw: string): string {
  const input = (raw ?? "").trim();
  // If backend gives a full dpSearch URL, keep only the querystring.
  const qs = input.includes("?") ? input.split("?").slice(1).join("?") : input;
  return qs.replace(/^\?/, "").replace(/cheapestPerDay=\d+/, "cheapestPerDuration=0");
}

export default function WeeklyDeal({
  Weekly_deals_title,
  Weekly_deals_subtitle,
  Weekly_hot_deal,
  Weekly_deals_hotels,

  card_image,
  add_title,
  add_subtitle,
  add_link,
}: {
  Weekly_deals_title?: string;
  Weekly_deals_subtitle?: string;
  Weekly_hot_deal?: HotDeal | null;
  Weekly_deals_hotels?: Deal[];
  card_image?: string | null;
  add_title?: string;
  add_subtitle?: string;
  add_link?: string;
}) {
  const featuredDeal = Weekly_hot_deal ?? null;
  const hotels = Weekly_deals_hotels ?? [];

  // Only fetch price/duration for the featured deal CTA (as requested).
  const [featuredPriceText, setFeaturedPriceText] = useState<string | null>(null);
  const [featuredDurationMax, setFeaturedDurationMax] = useState<number | null>(null);
  const [featuredMetaLoading, setFeaturedMetaLoading] = useState(false);

  useEffect(() => {
    if (!featuredDeal?.api_url) return;

    const controller = new AbortController();
    const key = normalizeApiUrl(featuredDeal.api_url);
    if (!key) return;

    setFeaturedMetaLoading(true);
    requestCardMeta(key, controller.signal)
      .then(({ price, durationMax }) => {
        setFeaturedPriceText(price != null ? formatGBP(price) : null);
        setFeaturedDurationMax(durationMax);
      })
      .catch(() => {
        setFeaturedPriceText(null);
        setFeaturedDurationMax(null);
      })
      .finally(() => {
        setFeaturedMetaLoading(false);
      });

    return () => controller.abort();
  }, [featuredDeal?.api_url]);

  const featuredPriceDisplay = featuredMetaLoading ? "…" : featuredPriceText ?? "—";
  const featuredNightsDisplay = typeof featuredDurationMax === "number" && featuredDurationMax > 0 ? featuredDurationMax : 7;
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#FFF7FC] font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] py-[20px] md:py-[50px] lg:py-[50px]">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* <HeaderSection /> */}
          <h2 className="font-['Montserrat'] text-[24px] md:text-[48px] lg:text-[48px] font-semibold text-[#4c4c4c] leading-tight max-w-[626px]">
            {Weekly_deals_title || ""}
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <p className="text-[#4c4c4c] font-['Montserrat'] mt-2 max-w-xl text-[14px] md:text-[16px] lg:text-[16px] font-normal line-clamp-2 md:line-clamp-none lg:line-clamp-none ">
              {Weekly_deals_subtitle || ""}
            </p>

            <a
              href="/all-offers"
              className="font-['Montserrat'] text-xs text-right text-[#4c4c4c] underline hover:text-[#CB2187] whitespace-nowrap ml-0 md:ml-4 mt-2 md:mt-0"
            >
              view all PlanMyLuxe exclusives
            </a>
          </div>
          {/* <FeaturedCard /> */}
          {featuredDeal && (
            <div className="bg-white rounded-[8px] overflow-hidden border border-[#ececec] group my-5 md:my-6">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT: IMAGE */}
                <div className="relative h-[260px] md:h-[320px] overflow-hidden">
                  <img
                    src={
                      featuredDeal.card_image ||
                      "https://planmylux.s3.eu-west-2.amazonaws.com/placeholder.webp"
                    }
                    alt="Featured Escape"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 group-hover:scale-105 will-change-transform"
                  />

                  <span className="absolute top-0 left-0 bg-white text-[#CB2187] pr-[32px] pl-[12px] pt-[4px] pb-[4px] text-[11px] md:text-[13px] font-semibold max-w-[70%] leading-[18px] tracking-[0.015em] rounded-br-[167px] pointer-events-none">
                    {featuredDeal.offer_on_card}
                  </span>

                  {/* Exclusive Tag SVG */}
                  {featuredDeal?.offer_tag_type ? (
                    <img
                      src={featuredDeal.offer_tag_type}
                      alt="Offer Tag"
                      className="absolute top-5 right-2 -rotate-[30deg] pointer-events-none"
                    />
                  ) : null}
                </div>

                {/* RIGHT: DETAILS */}
                <div className="p-[8px] md:p-[16px] flex flex-col">
                  <div className="font-semibold text-[#4c4c4c] text-[14px] p-[4px]">
                    {featuredDeal.location}
                  </div>

                  <div className="text-pml-primary p-[4px]">
                    <span className="text-pml-primary text-[14px]">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const rating = Number(featuredDeal?.property_rating || 0);
                        return (
                          <svg
                            key={i}
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block mr-[1px]"
                          >
                            <path
                              d="M14.0001 5.4091L8.91313 5.07466L6.99734 0.261719L5.08156 5.07466L0.0001297 5.4091L3.89754 8.7184L2.61862 13.7384L6.99734 10.9707L11.3761 13.7384L10.0972 8.7184L14.0001 5.4091Z"
                              fill={rating >= i + 1 ? "#CB2187" : "#E0E0E0"}
                            />
                          </svg>
                        );
                      })}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-semibold text-[#4c4c4c] leading-[24px] p-[4px] line-clamp-2 md:line-clamp-none lg:line-clamp-none ">
                    {featuredDeal.offer_header}
                  </h3>

                  <p className="text-pml-primary text-[14px] font-semibold p-[4px] leading-[140%]">
                    {featuredDeal.name}
                  </p>

                  <p className="text-[#7C7C7C] text-[14px] md:text-[12px] font-normal p-[4px] leading-[18px] tracking-[0.02em] line-clamp-2 md:line-clamp-none lg:line-clamp-none mb-[10px]">
                    {featuredDeal.info_paragraph}
                  </p>

                  {/* Price Button */}
                  <a
                    href={`/hotels/${featuredDeal.slug || ''}`}
                    className="mt-auto self-end bg-pml-primary text-white text-[12px] font-normal px-[16px] md:px-[32px] py-[4px] md:py-[8px] rounded-[8px] flex items-center hover:bg-[#a01a6e] transition leading-[18px] tracking-[0.02em]"
                  >
                    {featuredNightsDisplay} nights from{" "}
                    <strong className="text-[14px] ">
                      &nbsp;
                      {featuredPriceDisplay}
                      &nbsp;
                    </strong>{" "}
                    per person
                    <CircleChevronRight className="ml-[4px] w-[18px] md:w-[24px]" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* <Top20Banner /> */}
          <div className="rounded-[8px] overflow-hidden relative">
            <img
              src={
                card_image ??
                ""
              }
              alt="Top 20 banner"
              className="sm:block hidden w-full h-[208px] object-cover"
            />

            <div className="w-full h-[160px] object-cover bg-[#92D8CC] sm:hidden"></div>

            <div className="absolute inset-0 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 sm:gap-5 px-6 md:px-12">
              <div className="flex flex-row items-center gap-5">
                <svg
                  className="w-[64px] h-[75px] sm:w-[99px] sm:h-[116px]"
                  viewBox="0 0 99 116"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.693 2.34378C47.4033 6.02854 41.3801 12.5738 38.3928 21.9578C37.2468 25.5578 37.0331 29.2444 37.1708 32.9797C37.3182 36.9769 36.7833 40.8466 35.0855 44.5193C33.3652 48.2405 30.0888 51.3475 26.182 52.6962C28.212 49.3316 29.2783 45.8217 28.7413 42.1532C28.2425 38.7454 27.2664 35.3925 26.2958 32.0753C25.842 30.5241 24.5834 30.1039 23.2546 30.9443C9.04619 39.9307 -0.52195 52.0183 0.0220642 69.5821C0.535667 86.1638 7.70859 99.5097 22.1357 108.414C26.3618 111.023 30.9934 112.707 35.8541 113.728C36.3306 113.828 36.9373 113.878 37.3408 113.671C43.3211 110.613 48.9977 107.122 53.2399 101.754C59.4655 93.8776 60.3273 85.1124 57.4365 75.7513C55.8506 70.6158 52.6755 64.271 50.2509 61.4661C45.011 66.1205 41.9188 71.8943 40.9881 78.8328C40.0866 85.5532 41.1643 92.0204 43.4817 98.3304C43.6402 98.7618 43.9544 99.3063 43.8164 99.642C43.4984 100.415 43.1048 101.389 42.4517 101.737C41.5084 102.239 40.4238 101.782 40.0372 100.692C35.7529 88.6178 34.6761 76.6002 41.7691 65.1738C43.6868 62.0845 46.6369 59.6175 49.2206 56.9696C50.2157 55.9497 51.5138 56.0414 52.3986 57.2404C59.2132 66.4756 64.0426 76.4858 62.9708 88.3147C62.1872 96.9636 58.0744 104.081 51.3622 109.602C49.0994 111.463 46.6254 113.067 43.803 115.111C46.3484 115.111 48.4617 115.177 50.5697 115.099C60.3419 114.738 69.6561 112.651 78.1174 107.53C88.5042 101.243 94.6861 91.9386 97.1161 80.1872C100.373 64.4372 96.5711 50.3813 86.2618 38.092C81.3234 32.2051 76.0331 26.6849 69.774 22.1212C65.6216 19.0936 64.2375 14.0334 66.0018 9.19611C66.7099 7.2546 67.9111 5.49808 68.745 3.59479C69.0873 2.81352 69.4482 1.60023 69.087 1.06455C68.6552 0.424109 67.3814 -0.120538 66.608 0.0232485C63.3182 0.634838 60.0786 1.51645 56.693 2.34378Z"
                    fill="white"
                  />
                </svg>

                <div className="flex flex-col justify-center items-start">
                  <div className="text-white text-[12px] md:text-[14px] font-medium tracking-widest">
                    {add_subtitle}
                  </div>
                  <div className="text-white text-lg md:text-2xl font-bold mt-1">
                    {add_title}
                  </div>

                  <a
                    href={add_link}
                    className="mt-4 bg-[#CB2187] text-white hover:text-pml-primary px-2 md:px-6 py-2 rounded-[8px] text-[11px] sm:text-sm font-medium hover:bg-[#f3f3f3] w-full sm:w-auto text-center border-[2px] border-transparent hover:border-pml-primary"
                  >
                    Find Your Perfect Deal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
