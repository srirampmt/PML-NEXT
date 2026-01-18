"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CircleChevronRight } from "lucide-react";

function InlineSpinner({ className }: { className?: string }) {
  return (
    <span
      className={
        className ??
        "inline-block h-4 w-4 animate-spin rounded-full border-2 border-pml-primary border-t-transparent align-middle"
      }
      aria-label="Loading"
    />
  );
}

// Filter Tab
const FilterTab = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`capitalize shrink-0 px-[14px] py-[10px] text-[10px] md:text-[12px] border leading-[140%] tracking-[0px] rounded-[25px] transition ${
      active
        ? "bg-[#FBE3F1] text-[#595858] border-[#9F9F9F]"
        : "text-[#7c7c7c] border-[#d0d0d0] hover:bg-[#FFF0F9] hover:text-[#CB2187] hover:border-[#CB2187]"
    }`}
  >
    {label}
  </button>
);
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
// Main Component
export default function DealCollections(props: any) {
  const { deal_collection_title, ...rest } = props;

  // Build dynamic tag + deal pairs
  const tabs: { label: string; deals: any[] }[] = [];

  Object.entries(rest).forEach(([key, value]) => {
    if (key.startsWith("deal_collection_tag_")) {
      const num = key.replace("deal_collection_tag_", "");
      const dealsKey = `tag_${num}_deals`;

      if (rest[dealsKey] && Array.isArray(rest[dealsKey])) {
        tabs.push({
          label: value as string,
          deals: rest[dealsKey] as any[],
        });
      }
    }
  });

  const [activeFilter, setActiveFilter] = React.useState(
    tabs?.[0]?.label || ""
  );

  const activeDeals = tabs.find((t) => t.label === activeFilter)?.deals || [];
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

    const getCardMeta = (url?: string | null) => {
      const key = normalizeApiUrl(url ?? "");
      if (!key) {
        return { key: "", loading: false, price: null as string | null, duration: 7 };
      }
      const loading = Boolean(loadingByUrl[key]);
      const price = priceByUrl[key] ?? null;
      const durationRaw = durationByUrl[key];
      const duration = typeof durationRaw === "number" && durationRaw > 0 ? durationRaw : 7;
      return { key, loading, price, duration };
    };
  
    useEffect(() => {
      const controller = new AbortController();
  
      const urls = new Set<string>();
      for (const deal of activeDeals) {
        const maybeUrl = (deal as unknown as { api_url?: string | null })?.api_url;
        if (maybeUrl) urls.add(normalizeApiUrl(maybeUrl));
      }
  
      const urlList = Array.from(urls).filter(Boolean);
      const pending = urlList.filter((u) => {
        if (!u) return false;
        if (priceByUrlRef.current[u] !== undefined) return false;
        if (loadingByUrlRef.current[u]) return false;
        return true;
      });

      const MAX_CONCURRENCY = 8;
      let cursor = 0;

      const runWorker = async () => {
        while (!controller.signal.aborted) {
          const u = pending[cursor++];
          if (!u) return;

          setLoadingByUrl((prev) => ({ ...prev, [u]: true }));
          try {
            const { price, durationMax } = await requestCardMeta(u, controller.signal);
            const formatted = price != null ? formatGBP(price) : null;
            setPriceByUrl((prev) => ({ ...prev, [u]: formatted }));
            setDurationByUrl((prev) => ({ ...prev, [u]: durationMax }));
          } catch {
            setPriceByUrl((prev) => ({ ...prev, [u]: null }));
            setDurationByUrl((prev) => ({ ...prev, [u]: null }));
          } finally {
            setLoadingByUrl((prev) => ({ ...prev, [u]: false }));
          }
        }
      };

      const workerCount = Math.min(MAX_CONCURRENCY, pending.length);
      const workers = Array.from({ length: workerCount }, () => runWorker());
      void Promise.allSettled(workers);
  
      return () => controller.abort();
    }, [activeDeals]);

  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] py-[20px] md:py-[50px] lg:py-[50px]">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-3 md:mb-5">
            <h2 className="text-[24px] md:text-[48px] font-semibold text-[#4c4c4c] leading-[30px] md:leading-[60px] tracking-[-0.005em] max-w-[626px]">
              {deal_collection_title}
            </h2>

            <a
              href="#"
              className="text-gray-500 text-xs underline hover:text-[#CB2187] self-start md:self-end mt-2 md:mt-0"
            >
              view all PlanMyLuxe exclusives
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-5">
            {tabs.map((tab, index) => (
              <FilterTab
                key={index}
                label={tab.label}
                active={activeFilter === tab.label}
                onClick={() => setActiveFilter(tab.label)}
              />
            ))}
          </div>

          {/* Carousel */}
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {activeDeals.map((deal: any, idx: number) => (
                <CarouselItem key={idx} className="basis-auto">
                  <div className="flex-[0_0_auto] w-[270px] sm:w-[300px] md:w-[360px] h-[436px] font-['Montserrat']">
                    <div className="bg-white rounded-[8px] overflow-hidden flex flex-col h-full border border-[#e0e0e0] group">
                      {/* Image Container */}
                      <div className="relative w-full overflow-hidden bg-[#f5f5f5] h-[225px]">
                        <img
                          src={
                            deal.card_image ||
                            "https://planmylux.s3.eu-west-2.amazonaws.com/placeholder.webp"
                          }
                          alt={deal.name}
                          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 group-hover:scale-105 will-change-transform"
                        />

                        {/* Location Badge */}
                        {deal.offer_on_card && (
                          <span className="absolute top-0 left-0 bg-white text-[#CB2187] pr-[32px] pl-[12px] pt-[4px] pb-[4px] text-[11px] md:text-[13px] font-semibold uppercase max-w-[70%] leading-[18px] tracking-[0.015em] rounded-br-[167px] pointer-events-none">
                            {deal.offer_on_card}
                          </span>
                        )}

                        {deal?.offer_tag_type && (
                          <img
                            className="absolute top-5 right-2 pointer-events-none -rotate-[30deg]"
                            src={deal.offer_tag_type}
                            alt="tag"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pt-[6px] pr-[8px] pb-[14px] pl-[8px] flex-grow flex flex-col justify-start items-start text-left bg-white">
                        <div className="text-[14px] font-semibold text-[#4c4c4c] leading-[1.4] p-[4px]">
                          {deal.location}
                        </div>

                        {/* ⭐ Rating Stars */}
                        <div className="flex items-center justify-start p-[4px]">
                          {Array.from({ length: 5 }).map((_, i) => {
                            const rating = Number(deal.property_rating) || 0;
                            const filled = i < Math.round(rating);

                            return (
                              <svg
                                key={i}
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block mr-[1px]"
                              >
                                <path
                                  d="M14.0001 5.4091L8.91313 5.07466L6.99734 0.261719L5.08156 5.07466L0.0001297 5.4091L3.89754 8.7184L2.61862 13.7384L6.99734 10.9707L11.3761 13.7384L10.0972 8.7184L14.0001 5.4091Z"
                                  fill={filled ? "#CB2187" : "#E0E0E0"}
                                />
                              </svg>
                            );
                          })}
                        </div>

                        <h3 className="text-[14px] md:text-[16px] font-semibold text-pml-primary flex items-center justify-start leading-[24px] mb-[10px] p-[4px]">
                          {deal.name}
                        </h3>

                        <div className="bg-[#EDEDED] border border-[#DFDEDE] px-[6px] md:px-[12px] py-[6px] rounded-[8px] text-[12px] text-[#4c4c4c] font-medium mb-[9px] block truncate leading-[18px] tracking-[0.02em] w-full text-center">
                          {deal.info_paragraph ||
                            "Explore this amazing destination!"}
                        </div>

                        <a
                          href={deal.slug ? `hotels/${deal.slug}` : "#"}
                          className="text-[#4c4c4c] border-none rounded-md text-[12px] md:text-[14px] font-normal text-right cursor-pointer transition-all duration-300 ease-in-out no-underline block w-full mx-auto pt-[5px] hover:text-[#a01a6e] leading-[22px] tracking-[0.01em] font-regular"
                        >
                          {(() => {
                            const maybeUrl = (deal as unknown as { api_url?: string | null })?.api_url;
                            const meta = maybeUrl ? getCardMeta(maybeUrl) : null;

                            const inlinePrice = !maybeUrl ? (deal.price || null) : meta?.price;
                            const isLoading = Boolean(maybeUrl && meta?.loading);

                            if (!isLoading && !inlinePrice) {
                              return (
                                <>
                                  Find more deals
                                  <CircleChevronRight className="inline ml-1 text-pml-primary" size={20} />
                                </>
                              );
                            }

                            const nights = maybeUrl ? meta?.duration ?? 7 : "-";

                            return (
                              <>
                                {`${nights} nights from`}
                                <span className="text-base font-bold text-[#CB2187] px-[4px]">
                                  {isLoading ? <InlineSpinner /> : inlinePrice}
                                </span>
                                per person
                                <CircleChevronRight className="inline ml-1 text-pml-primary" size={20} />
                              </>
                            );
                          })()}
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
