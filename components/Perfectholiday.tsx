"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HolidayCard {
  id: number;
  image: string;
  category: string;
  title: string;
  href: string;
}

const holidayStyles: HolidayCard[] = [
  {
    id: 1,
    image: "/assets/images/all-inclusive.png",
    category: "LUXURY",
    title: "ALL INCLUSIVE",
    href: "/categories/all-inclusive",
  },
  {
    id: 2,
    image: "/assets/images/adultsonly.png",
    category: "LUXURY",
    title: "ADULTS-ONLY",
    href: "/categories/adults",
  },
  {
    id: 3,
    image: "/assets/images/citybreaks.png",
    category: "LUXURY",
    title: "CITY BREAKS",
    href: "/categories/city-breaks",
  },
  {
    id: 4,
    image: "/assets/images/beachholidays.png",
    category: "LUXURY",
    title: "BEACH HOLIDAYS",
    href: "/categories/beach",
  },
  {
    id: 5,
    image: "/assets/images/familyholidays.png",
    category: "LUXURY",
    title: "FAMILY HOLIDAYS",
    href: "/categories/family",
  },
  {
    id: 6,
    image: "/assets/images/multicenter.png",
    category: "LUXURY",
    title: "MULTI-CENTRE",
    href: "/categories/multi-centre",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
    category: "LUXURY",
    title: "FAMILY HOLIDAYS",
    href: "/categories/family",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop",
    category: "LUXURY",
    title: "MULTI-CENTRE",
    href: "/categories/multi-centre",
  },
];

export function Perfectholiday({ title }: { title: string }) {
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-8">
        <div className="w-full max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-8 md:mb-10">
          <div className="max-w-[600px]">
            <h2 className="font-['Montserrat'] text-[24px] md:text-[36px] xl:text-[46px] font-semibold text-[#4c4c4c] leading-tight mb-4">
              {title}
            </h2>
            <p className="font-['Montserrat'] text-[#4C4C4C] text-base text-sm md:text-lg leading-relaxed">
              Whether you dream of serene beaches lively resorts or romantic retreats our holiday styles bring you curated escapes that elevate every moment.
            </p>
          </div>
          <Link 
            href="/categories" 
            className="font-['Montserrat'] text-[#7c7c7c] text-[12px] font-normal underline hover:text-pml-primary/80 transition-colors whitespace-nowrap self-start md:self-end"
          >
            view all PlanMyLuxe exclusives
          </Link>
        </div>

        {/* Cards Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {holidayStyles.map((card) => (
              <CarouselItem 
                key={card.id} 
                className="pl-4 basis-[240px]"
              >
                <Link
                  href={card.href}
                  className="block group"
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-[12px] sm:rounded-t-[14px] md:rounded-t-[16px]"
                    />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] text-[#666666] text-[14px] mb-1 tracking-[1px]">
                      {card.category}
                    </p>
                    <h3 className="font-['Montserrat'] text-pml-primary text-[20px] font-semibold">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Perfectholiday;
