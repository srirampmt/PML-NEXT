"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Card data
interface EscapeCard {
  id: number;
  label: string;
  title: string;
  discount: string;
  bgColor: string;
  iconBgColor: string;
  textColor: string;
  icon: React.ReactNode;
}

// Christmas ornament/planet icon
const XmasIcon = () => (
  <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 opacity-40">
    {/* Planet/ornament */}
    <ellipse cx="90" cy="110" rx="80" ry="25" stroke="#d63384" strokeWidth="2" fill="none" />
    <ellipse cx="90" cy="110" rx="50" ry="15" stroke="#d63384" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
    {/* Stars */}
    <path d="M30 30L32 38L40 40L32 42L30 50L28 42L20 40L28 38L30 30Z" fill="#d63384" />
    <path d="M60 15L61.5 21L68 22.5L61.5 24L60 30L58.5 24L52 22.5L58.5 21L60 15Z" fill="#d63384" />
    <path d="M140 25L141.5 31L148 32.5L141.5 34L140 40L138.5 34L132 32.5L138.5 31L140 25Z" fill="#d63384" />
    {/* Sparkles */}
    <circle cx="45" cy="60" r="2" fill="#d63384" />
    <circle cx="130" cy="55" r="2" fill="#d63384" />
    <circle cx="155" cy="80" r="1.5" fill="#d63384" />
  </svg>
);

// Flame/fire icon
const FlameIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[10px] right-[-20px] opacity-50">
    <path d="M80 10C80 10 100 40 100 70C100 85 95 95 85 105C95 95 100 110 95 125C90 140 70 150 50 140C30 130 25 100 40 80C45 73 55 65 55 55C55 45 50 35 50 35C50 35 65 45 70 60C75 75 65 85 65 85C65 85 80 75 85 60C90 45 80 10 80 10Z" fill="#c2185b" />
    <path d="M75 30C75 30 90 50 90 75C90 90 80 100 70 105C80 100 85 115 80 125C75 135 60 140 45 132C30 124 28 100 40 85C45 78 52 72 52 62C52 52 48 45 48 45C48 45 60 52 65 65C70 78 62 88 62 88C62 88 75 80 78 68C81 56 75 30 75 30Z" fill="#ad1457" />
  </svg>
);

// Shopping bag icon
const BagIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[20px] right-[20px] opacity-30">
    {/* Bag body */}
    <path d="M30 55H130L120 145H40L30 55Z" stroke="#d63384" strokeWidth="3" fill="none" />
    {/* Bag handles */}
    <path d="M55 55V35C55 20 70 10 80 10C90 10 105 20 105 35V55" stroke="#d63384" strokeWidth="3" fill="none" />
    {/* Question mark */}
    <text x="80" y="110" textAnchor="middle" fontSize="50" fontWeight="bold" fill="#d63384" opacity="0.5">?</text>
  </svg>
);

const escapeCards: EscapeCard[] = [
  {
    id: 1,
    label: "DISCOVER EXCLUSIVES",
    title: "XMAS & NEW YEAR SALE",
    discount: "Save upto 60%",
    bgColor: "bg-[#fce4ec]",
    iconBgColor: "#fce4ec",
    textColor: "text-[#d63384]",
    icon: <XmasIcon />,
  },
  {
    id: 2,
    label: "DISCOVER EXCLUSIVES",
    title: "TRENDING TOP 20",
    discount: "Save upto 60%",
    bgColor: "bg-[#c2185b]",
    iconBgColor: "#c2185b",
    textColor: "text-[#fce4ec]",
    icon: <FlameIcon />,
  },
  {
    id: 3,
    label: "DISCOVER EXCLUSIVES",
    title: "SUMMER 26 DEALS",
    discount: "Save upto 60%",
    bgColor: "bg-[#fce4ec]",
    iconBgColor: "#fce4ec",
    textColor: "text-[#d63384]",
    icon: <BagIcon />,
  },
];

export function Handpickedescapes() {
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-[20px] md:py-[50px] lg:py-[50px]">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-[10px] md:mb-[20px] lg:mb-[25px]">
            {/* Left side - Title and description */}
            <div className="max-w-[700px] mb-[12px] lg:mb-0">
              <h2 className="font-['Montserrat'] text-[#4c4c4c] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] sm:leading-[1.25] md:leading-[1.3] lg:leading-[60px] tracking-[-0.005em] mb-[12px] sm:mb-[16px] md:mb-[20px] lg:mb-[24px]">
                Explore handpicked luxury escapes for less
              </h2>
              <p className="font-['Montserrat'] text-[#4c4c4c] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] sm:leading-[1.7] md:leading-[1.75] lg:leading-[28px] tracking-[0] max-w-[580px]">
                Each week our travel experts handpick the best value four and five star escapes securing unbeatable offers upgrades and added extras. Discover our latest exclusives and enjoy luxury holidays designed to give you more for less.
              </p>
            </div>

            {/* Right side - Link */}
            <div className="lg:pb-[8px]">
              <Link 
                href="/exclusives" 
                className="font-['Montserrat'] text-[#666666] text-[12px] sm:text-[13px] md:text-[14px] font-normal underline hover:text-[#4c4c4c] transition-colors underline-offset-[3px]"
              >
                view all PlanMyLuxe exclusives
              </Link>
            </div>
          </div>

          {/* Cards Carousel - All screen sizes */}
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {escapeCards.map((card) => (
                <CarouselItem 
                  key={card.id} 
                  className="pl-4 basis-[280px] sm:basis-[320px] md:basis-[360px] lg:basis-[430px]"
                >
                  <Link 
                    href={`/exclusives/${card.id}`}
                    className={`${card.bgColor} relative overflow-hidden rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-[24px] sm:p-[28px] md:p-[32px] lg:p-[36px] h-[144px] sm:h-[164px] md:h-[185px] lg:h-[208px] flex flex-col justify-center items-center text-center transition-transform hover:scale-[1.02] cursor-pointer`}
                  >
                    {/* Background Icon */}
                    {card.icon}

                    {/* Card Content */}
                    <div className="relative z-10">
                      <span className={`${card.textColor} text-[10px] sm:text-[11px] md:text-[12px] font-semibold tracking-[1.5px] uppercase mb-[8px] sm:mb-[10px] md:mb-[12px] block`}>
                        {card.label}
                      </span>
                      <h3 className={`${card.textColor} text-[18px] sm:text-[22px] md:text-[24px] lg:text-[24px] font-bold leading-[1.2] mb-[12px] sm:mb-[14px] md:mb-[18px] lg:mb-[20px]`}>
                        {card.title}
                      </h3>
                      <span className="inline-block bg-[#f5d742] text-[#1a1a1a] text-[8px] sm:text-[10px] md:text-[14px] font-bold px-[14px] sm:px-[16px] md:px-[18px] lg:px-[20px] py-[6px] sm:py-[6px] md:py-[6px] lg:py-[6px] rounded-full">
                        {card.discount}
                      </span>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Bottom Border/Separator */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="border-b border-[#e0e0e0]"></div>
        </div>
      </div>
    </section>
  );
}

export default Handpickedescapes;
