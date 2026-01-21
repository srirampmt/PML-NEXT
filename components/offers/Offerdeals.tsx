"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { CircleChevronRight } from "lucide-react";

type OfferDealHotel = {
  id?: number;
  slug?: string;
  name?: string;
  location?: string;
  property_rating?: string;
  offer_header?: string;
  info_paragraph?: string;
  card_image?: string;
  api_url?: string | null;
  offer_tag_type?: string; // Added property
};

type OfferdealsProps = {
  title?: string;
  subtitle?: string;
  // Backend sometimes sends "" instead of an array.
  hotels?: OfferDealHotel[] | "" | null;
};

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

/* MAIN COMPONENT (ALL IN ONE FILE) */
export default function Offerdeals({ title, subtitle, hotels }: OfferdealsProps) {
  const hotelsList: OfferDealHotel[] = useMemo(
    () => (Array.isArray(hotels) ? hotels : []),
    [hotels]
  );

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
    for (const deal of hotelsList) {
      const maybeUrl = deal.api_url;
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
  }, [hotelsList]);

  // Render directly from backend hotels shape.
  // Note: `api_url` is needed for price/duration fetch. If backend doesn't send it, price will show "—".


  return (
      <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white font-['Montserrat']">
        <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] py-8 md:py-20">
          <div className="w-full max-w-[1280px] mx-auto">
            {/* Header Section */}
            <h2 className="font-['Montserrat'] text-[24px] md:text-[48px] lg:text-[48px] font-semibold text-[#4c4c4c] leading-tight max-w-[626px]">
              {title || (
                <>
                  Unmissable stylish <br /> escapes this week
                </>
              )}
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
              <p className="text-[#4c4c4c] font-['Montserrat'] mt-2 max-w-xl text-[14px] md:text-[16px] lg:text-[16px] font-normal line-clamp-2 md:line-clamp-none lg:line-clamp-none ">
                {subtitle ||
                  "Step into this weeks collection of stylish escapes where beach bliss meets a sensible service and added luxuries come together to elevate your getaway to new heights."}
              </p>

              <a
                href="#"
                className="font-['Montserrat'] text-[12px] text-right text-[#4c4c4c] underline hover:text-[#CB2187] whitespace-nowrap ml-0 md:ml-4 mt-2 md:mt-0"
              >
                view all PlanMyLuxe exclusives
              </a>
            </div>
            {hotelsList.map((hotel, idx) => {
              const rating = Math.max(
                0,
                Math.min(5, Math.round(Number.parseFloat(hotel.property_rating || "0")))
              );
              const country = (hotel.location || "").toUpperCase() || "";
              const href = hotel.slug ? `/hotels/${hotel.slug}` : "#";
              const image =
                hotel.card_image ||
                "https://planmylux.s3.eu-west-2.amazonaws.com/placeholder.webp";

              return (
              <div key={hotel.id ?? hotel.slug ?? idx} className="bg-white rounded-[8px] overflow-hidden border border-[#ececec] my-5 md:my-6">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* LEFT: IMAGE */}
                  <div className="relative h-[260px] md:h-[320px] overflow-hidden">
                    <img
                      src={image}
                      alt="Featured Escape"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 group-hover:scale-105 will-change-transform"
                    />

                    <span className="absolute top-0 left-0 bg-white text-[#CB2187] pr-[32px] pl-[12px] pt-[4px] pb-[4px] text-[11px] md:text-[13px] font-semibold max-w-[70%] leading-[18px] tracking-[0.015em] rounded-br-[167px] pointer-events-none">
                      Top Deal of the Day
                    </span>

                    {/* Exclusive Tag SVG */}
                    <div className="absolute top-5 right-2 -rotate-[30deg] pointer-events-none">
                      {hotel.offer_tag_type ? (
                        <img
                          src={hotel.offer_tag_type}
                          alt="Offer Tag"
                          className="absolute top-5 right-2 -rotate-[30deg] pointer-events-none"
                        />
                      ) : null}
                    </div>
                  </div>

                  {/* RIGHT: DETAILS */}
                  <div className="p-[8px] md:p-[16px] flex flex-col">
                    <div className="font-semibold text-[#4c4c4c] text-[14px] p-[4px]">
                      {country}
                    </div>

                    <div className="text-pml-primary p-[4px]">
                      <span className="text-pml-primary text-[14px]">
                        {Array.from({ length: rating || 5 }).map((_, i) => (
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

                    <h3 className="text-[16px] font-semibold text-[#4c4c4c] leading-[24px] p-[4px] line-clamp-2 md:line-clamp-none lg:line-clamp-none ">
                      {hotel.offer_header || ""}
                    </h3>

                    <p className="text-pml-primary text-[14px] font-semibold p-[4px] leading-[140%]">
                      {hotel.name || ""}
                    </p>

                    <p className="text-[#7C7C7C] text-[14px] md:text-[12px] font-normal p-[4px] leading-[18px] tracking-[0.02em] line-clamp-2 md:line-clamp-none lg:line-clamp-none mb-[10px]">
                      {hotel.info_paragraph || ""}
                    </p>

                    {/* Price Button */}
                    <a
                      href={href}
                      className="mt-auto self-end bg-pml-primary text-white text-[12px] font-normal px-[16px] md:px-[32px] py-[4px] md:py-[8px] rounded-[8px] flex items-center hover:bg-[#a01a6e] transition leading-[18px] tracking-[0.02em]"
                    >
                      {fetchCardDurationMax(hotel.api_url)} nights from{" "}
                      <strong className="text-[14px] ">
                        &nbsp;
                        {fetchCardTotalPrice(hotel.api_url)}
                        &nbsp;
                      </strong>{" "}
                      per person
                      <CircleChevronRight className="ml-[4px] w-[18px] md:w-[24px]" />
                    </a>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
