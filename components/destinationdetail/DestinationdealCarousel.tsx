"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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

export default function DestinationDealCarousel({
  trending_deals_title_1,
  trending_deals_subtitle_1,
  trending_deals_1,
}: {
  trending_deals_title_1?: string;
  trending_deals_subtitle_1?: string;
  trending_deals_1: any[];
}) {
  const [activeFilter] = useState("Popular");

  const title = trending_deals_title_1 || "Trending Deals";
  const subtitle = trending_deals_subtitle_1 || "";
  const deals = trending_deals_1 || [];

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

  const urlList = useMemo(() => {
    const urls = new Set<string>();
    for (const deal of deals) {
      const maybeUrl = (deal as unknown as { api_url?: string | null })?.api_url;
      if (typeof maybeUrl === "string" && maybeUrl.trim()) {
        urls.add(normalizeApiUrl(maybeUrl));
      }
    }
    return Array.from(urls).filter(Boolean);
  }, [deals]);

  const fetchCardTotalPrice = (url?: string | null) => {
    const key = normalizeApiUrl(url ?? "");
    if (!key) return "—";
    if (loadingByUrl[key]) return "…";
    const v = priceByUrl[key];
    return v ?? "—";
  };

  const fetchCardDurationMax = (url?: string | null) => {
    const key = normalizeApiUrl(url ?? "");
    if (!key) return null;
    if (loadingByUrl[key]) return null;
    const v = durationByUrl[key];
    return typeof v === "number" && v > 0 ? v : null;
  };

  useEffect(() => {
    const controller = new AbortController();

    for (const u of urlList) {
      if (!u) continue;
      if (priceByUrlRef.current[u] !== undefined || durationByUrlRef.current[u] !== undefined) continue;
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
  }, [urlList]);
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-br from-[#1a9b9e] via-[#2ab5b8] to-[#5bc9cc] w-full py-[36px] md:py-[70px] md:pt-20 md:pb-24 lg:pt-24 lg:pb-[80px] relative z-0">
            <div
              className="absolute top-0 bottom-0 bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{
                backgroundImage:
                  "url('https://planmylux.s3.eu-west-2.amazonaws.com/uploads/media-library/homepage/destination-carousel-bg.png')",
                width: "100vw",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-left md:mb-10">
                <h2 className="text-[24px] md:text-[48px] font-semibold text-white leading-[30px] md:leading-[60px] tracking-[-0.005em] max-w-[626px] mb-4 md:md-8">
                  {title}
                </h2>

                <p className="text-white max-w-[624px] text-[14px] md:text-[16px] leading-[24px] line-clamp-2 md:line-clamp-none lg:line-clamp-none">
                  {subtitle}
                </p>
              </div>

              <div className="relative mt-5 md:mt-10">
                <Carousel opts={{ align: "start" }} className="w-full relative">
                  <CarouselContent>
                    {deals.map((deal, idx) => (
                      <CarouselItem key={idx} className="basis-auto">
                        <div className="flex-[0_0_auto] w-[270px] sm:w-[300px] md:w-[360px] h-[436px] font-['Montserrat']">
                          <div className="bg-white rounded-[8px] overflow-hidden flex flex-col h-full border border-[#e0e0e0] group">
                            {/* IMAGE */}
                            <div className="relative w-full overflow-hidden bg-[#f5f5f5] h-[225px]">
                              <img
                                src={deal?.card_image}
                                alt={deal?.name}
                                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 group-hover:scale-105 will-change-transform"
                              />

                              {/* BADGE */}
                              {deal?.offer_on_card && (
                                <span className="absolute top-0 left-0 bg-white text-[#CB2187] pr-[32px] pl-[12px] pt-[4px] pb-[4px] text-[11px] md:text-[13px] font-semibold uppercase max-w-[70%] leading-[18px] tracking-[0.015em] rounded-br-[167px] pointer-events-none">
                                  {deal.offer_on_card}
                                </span>
                              )}

                              {/* SVG TAG FROM API */}
                              {deal?.offer_tag_type && (
                                <div
                                  className="absolute top-0 right-[0px] pointer-events-none"
                                  dangerouslySetInnerHTML={{
                                    __html: deal.offer_tag_type,
                                  }}
                                />
                              )}
                            </div>

                            {/* CONTENT */}
                            <div className="pt-[6px] pr-[8px] pb-[14px] pl-[8px] flex-grow flex flex-col justify-start items-start text-left bg-white">
                              {/* LOCATION */}
                              <div className="text-[14px] font-semibold text-[#4c4c4c] leading-[1.4] p-[4px]">
                                {deal?.location}
                              </div>

                              {/* ⭐️ RATING */}
                              <div className="flex items-center justify-start p-[4px]">
                                <span className="text-pml-primary text-[14px]">
                                  {Array.from({
                                    length: Math.round(
                                      Number(deal?.property_rating) || 0
                                    ),
                                  }).map((_, i) => (
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
                                        fill="#CB2187"
                                      />
                                    </svg>
                                  ))}
                                </span>
                              </div>

                              {/* TITLE */}
                              <h5 className="text-[14px] md:text-[16px] font-semibold text-pml-primary flex items-center justify-start leading-[24px] mb-[10px] p-[4px]">
                                {deal?.name}
                              </h5>

                              {/* OFFER BOX */}
                              {deal?.info_paragraph && (
                                <div className="bg-[#EDEDED] border border-[#DFDEDE] px-[6px] md:px-[12px] py-[6px] rounded-[8px] text-[12px] text-[#4c4c4c] font-medium mb-[9px] block truncate leading-[18px] tracking-[0.02em] w-full text-center">
                                  {deal.info_paragraph }
                                </div>
                              )}

                              {/* PRICE CTA */}
                              <a
                                href={deal.slug ? `/hotels/${deal.slug}` : "#"}
                                className="text-[#4c4c4c] border-none rounded-md text-[12px] md:text-[14px] font-normal text-right cursor-pointer transition-all duration-300 ease-in-out no-underline block w-full mx-auto pt-[5px] hover:text-[#a01a6e] leading-[22px] tracking-[0.01em] font-regular"
                              >
                                {(() => {
                                  const maybeUrl = (deal as unknown as { api_url?: string | null })?.api_url;
                                  const nights = maybeUrl ? fetchCardDurationMax(maybeUrl) : null;
                                  return `${nights ?? "-"} nights from`;
                                })()}
                                <span className="text-base font-bold text-[#CB2187] px-[4px]">
                                  {(() => {
                                    const maybeUrl = (deal as unknown as { api_url?: string | null })?.api_url;
                                    if (maybeUrl) return fetchCardTotalPrice(maybeUrl);
                                    const raw = (deal as any)?.price;
                                    if (typeof raw === "number") return formatGBP(raw);
                                    if (typeof raw === "string" && raw.trim()) return raw;
                                    return "—";
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
          </div>
        </div>
      </div>
    </section>
  );
}