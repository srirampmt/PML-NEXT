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
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-8 md:py-20">
        <div className="w-full max-w-[1280px] mx-auto">
        {/* Header Section */}
        <h2 className="font-['Montserrat'] text-[24px] md:text-[48px] lg:text-[48px] font-semibold text-[#4c4c4c] leading-tight">
          Unmissable stylish <br /> escapes this week
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <p className="text-[#4c4c4c] font-['Montserrat'] mt-2 max-w-xl text-[14px] md:text-[16px] lg:text-[16px] font-normal line-clamp-2 md:line-clamp-none lg:line-clamp-none ">
            Step into this weeks collection of stylish escapes where beach bliss
            meets a sensible service and added luxuries come together to elevate
            your getaway to new heights.
          </p>

          <a
            href="#"
            className="font-['Montserrat'] text-[12px] text-right text-[#4c4c4c] underline hover:text-[#CB2187] whitespace-nowrap ml-0 md:ml-4 mt-2 md:mt-0"
          >
            view all PlanMyLuxe exclusives
          </a>
        </div>

        {/* Cards Carousel */}
        <Carousel opts={{ align: "start", loop: false, }} className="w-full mt-[20px] md:mt-[40px]" >
          <CarouselContent className="-ml-4">
            {holidayStyles.map((card) => (
              <CarouselItem 
                key={card.id} 
                className="pl-4 basis-[240px]"
              >
                <Link
                  href={card.href}
                  className="block group transform hover:-translate-y-[2px] transition-transform duration-300"
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-110 group-hover:scale-110 rounded-t-[8px]"
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
