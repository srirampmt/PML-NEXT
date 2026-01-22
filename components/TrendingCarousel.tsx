"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CircleChevronRight } from "lucide-react";

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
type TrendingCarouselDeal = {
  id?: number | string;
  image?: string;
  badge?: string;
  location?: string;
  title?: string;
  extras?: string;
  price?: string | null;
  slug?: string;
  api_url?: string | null;
  property_rating?: string | number;
  offer_tag_type?: string;
};

export default function DealCollections({
  title,
  deal_collection,
}: {
  title?: string;
  deal_collection?: any[];
}) {
  const hotels = deal_collection ?? [];

  const deals: TrendingCarouselDeal[] = hotels.map((d: any) => ({
    id: d?.id ?? d?.slug,
    image:
      d?.card_image ||
      d?.image ,
    badge: d?.offer_on_card ?? d?.badge ?? "",
    location: d?.location ?? "",
    title: d?.name ?? d?.title ?? "",
    extras: d?.info_paragraph ?? d?.extras ?? "",
    price: d?.price ?? null,
    slug: d?.slug ?? "",
    api_url: d?.api_url ?? null,
    property_rating: d?.property_rating ?? "",
    offer_tag_type: d?.offer_tag_type ?? "",
  }));

  const [priceByUrl, setPriceByUrl] = useState<Record<string, string | null>>({});
  const [durationByUrl, setDurationByUrl] = useState<Record<string, number | null>>({});
  const [loadingByUrl, setLoadingByUrl] = useState<Record<string, boolean>>({});
  const priceByUrlRef = useRef(priceByUrl);
  const durationByUrlRef = useRef(durationByUrl);
  const loadingByUrlRef = useRef(loadingByUrl);

  useEffect(() => {
    priceByUrlRef.current = priceByUrl;
  }, [priceByUrl]);

  useEffect(() => {
    durationByUrlRef.current = durationByUrl;
  }, [durationByUrl]);

  useEffect(() => {
    loadingByUrlRef.current = loadingByUrl;
  }, [loadingByUrl]);

  const fetchCardTotalPrice = (url?: string | null) => {
    const key = normalizeApiUrl(url ?? "");
    if (!key) return "—";
    if (loadingByUrl[key]) return "…";
    const v = priceByUrl[key];
    return v ?? "—";
  };

  const fetchCardDurationMax = (url?: string | null) => {
    const key = normalizeApiUrl(url ?? "");
    if (!key) return 7;
    const v = durationByUrl[key];
    return typeof v === "number" && v > 0 ? v : 7;
  };

  useEffect(() => {
    const controller = new AbortController();

    const urls = new Set<string>();
    for (const deal of hotels) {
      const maybeUrl = (deal as unknown as { api_url?: string | null })?.api_url;
      if (maybeUrl) urls.add(normalizeApiUrl(maybeUrl));
    }

    const urlList = Array.from(urls).filter(Boolean);
    for (const u of urlList) {
      if (!u) continue;
      if (priceByUrlRef.current[u] !== undefined) continue;
      if (loadingByUrlRef.current[u]) continue;

      setLoadingByUrl((prev) => ({ ...prev, [u]: true }));
      requestCardMeta(u, controller.signal)
        .then(({ price, durationMax }) => {
          const formatted = price != null ? formatGBP(price) : null;
          setPriceByUrl((prev) => ({ ...prev, [u]: formatted }));
          setDurationByUrl((prev) => ({ ...prev, [u]: durationMax }));
        })
        .catch(() => {
          setPriceByUrl((prev) => ({ ...prev, [u]: null }));
          setDurationByUrl((prev) => ({ ...prev, [u]: null }));
        })
        .finally(() => {
          setLoadingByUrl((prev) => ({ ...prev, [u]: false }));
        });
    }

    return () => controller.abort();
  }, [hotels]);

  
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] font-['Montserrat']" >
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] py-[20px] md:py-[50px] lg:py-[50px]">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-3 md:mb-5">
            <h2 className="text-[24px] md:text-[48px] font-semibold text-[#4c4c4c] leading-[30px] md:leading-[60px] tracking-[-0.005em] max-w-[626px]">
              {title}
            </h2>

            <a
              href="/destinations"
              className="text-gray-500 text-xs underline hover:text-[#CB2187] self-start md:self-end mt-2 md:mt-0"
            >
              view all PlanMyLuxe exclusives
            </a>
          </div>
          {/* SHADCN CAROUSEL REPLACING EMBLA MANUAL SETUP */}
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {deals.map((deal, idx) => (
                <CarouselItem key={idx} className="basis-auto">
                  <div className="flex-[0_0_auto] w-[270px] sm:w-[300px] md:w-[360px] h-[436px] font-['Montserrat']">
                    <div className="bg-white rounded-[8px] overflow-hidden flex flex-col h-full border border-[#e0e0e0] group">
                      {/* Image Container */}
                      <div className="relative w-full overflow-hidden bg-[#f5f5f5] h-[225px]">
                        <img
                          src={
                            deal.image ||
                            "https://planmylux.s3.eu-west-2.amazonaws.com/placeholder.webp"
                          }
                          alt={deal.title || "Hotel"}
                          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 group-hover:scale-105 will-change-transform"
                        />

                        {/* Location Badge */}
                        {Boolean((deal.badge || "").trim()) && (
                          <span className="absolute top-0 left-0 bg-white text-[#CB2187] pr-[32px] pl-[12px] pt-[4px] pb-[4px] text-[11px] md:text-[13px] font-semibold uppercase max-w-[70%] leading-[18px] tracking-[0.015em] rounded-br-[167px] pointer-events-none">
                            {deal.badge}
                          </span>
                        )}

                        {/* Exclusive Tag SVG */}
                        <div className="absolute top-0 right-[-25px] pointer-events-none">
                          
                          <img
                            className="absolute top-5 right-2 pointer-events-none -rotate-[30deg]"
                            src={deal.offer_tag_type}
                            alt="tag"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-[6px] pr-[8px] pb-[14px] pl-[8px] flex-grow flex flex-col justify-start items-start text-left bg-white">
                        <div className="text-[14px] font-semibold text-[#4c4c4c] leading-[1.4] p-[4px] w-full line-clamp-1 min-h-[28px]">
                          {deal.location || ""}
                        </div>

                        <div className="flex items-center justify-start p-[4px] min-h-[28px]">
                          <span className="text-pml-primary text-[14px]">
                            {Array.from({ length: 5 }).map((_, i) => {
                              const rating = Number(deal?.property_rating || 0);
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

                        <h5 className="text-[14px] md:text-[16px] font-semibold text-pml-primary flex items-center justify-start leading-[24px] mb-[10px] p-[4px] w-full line-clamp-1 min-h-[32px]">
                          {deal.title || ""}
                        </h5>

                        <div
                          className={`rounded-[8px] text-[12px] text-[#4c4c4c] font-medium mb-[9px] w-full min-h-[48px] flex items-center justify-center text-center ${
                            Boolean((deal.extras || "").trim())
                              ? "bg-[#EDEDED] border border-[#DFDEDE] px-[6px] md:px-[12px] py-[6px]"
                              : ""
                          }`}
                        >
                          {Boolean((deal.extras || "").trim()) ? (
                            <span className="line-clamp-2 leading-[18px] tracking-[0.02em]">
                              {deal.extras}
                            </span>
                          ) : null}
                        </div>
                        <a
                          href={deal.slug ? `/hotels/${deal.slug}` : "#"}
                          className="text-[#4c4c4c] border-none rounded-md text-[12px] md:text-[14px] font-normal text-right cursor-pointer transition-all duration-300 ease-in-out no-underline block w-full mx-auto pt-[5px] hover:text-[#a01a6e] leading-[22px] tracking-[0.01em] font-regular"
                        >
                          {(() => {
                            const maybeUrl = deal?.api_url;
                            const nights = maybeUrl ? fetchCardDurationMax(maybeUrl) : "-";
                            return `${nights} nights from`;
                          })()}
                          <span className="text-base font-bold text-[#CB2187] px-[4px]">
                            {(() => {
                              const maybeUrl = deal?.api_url;
                              if (maybeUrl) return fetchCardTotalPrice(maybeUrl);
                              return deal.price || "-";
                            })()}
                          </span>
                          per person
                          <CircleChevronRight
                            className="inline ml-1 text-pml-primary"
                            size={20}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}


