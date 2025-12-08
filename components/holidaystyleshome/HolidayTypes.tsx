"use client";

import Link from "next/link";

interface HolidayType {
  label: string;
  title: string;
  image: string;
  slug: string;
}

const holidayTypes: HolidayType[] = [
  {
    label: "LUXURY",
    title: "ALL INCLUSIVE",
    image: "/assets/images/holiday-type-1.png",
    slug: "all-inclusive",
  },
  {
    label: "LUXURY",
    title: "ALL INCLUSIVE",
    image: "/assets/images/holiday-type-2.png",
    slug: "all-inclusive",
  },
  {
    label: "LUXURY",
    title: "ALL INCLUSIVE",
    image: "/assets/images/holiday-type-3.png",
    slug: "all-inclusive",
  },
  {
    label: "LUXURY",
    title: "ALL INCLUSIVE",
    image: "/assets/images/holiday-type-4.png",
    slug: "all-inclusive",
  },
  {
    label: "LUXURY",
    title: "ALL INCLUSIVE",
    image: "/assets/images/holiday-type-5.png",
    slug: "all-inclusive",
  },
  {
    label: "LUXURY",
    title: "ALL INCLUSIVE",
    image: "/assets/images/holiday-type-6.png",
    slug: "all-inclusive",
  },
];

export default function HolidayTypes() {
  return (
    <section className="w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] relative bg-white font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {holidayTypes.map((holiday, index) => (
              <Link
                key={index}
                href={`/holidays/${holiday.slug}`}
                className="group block"
              >
                <div className="space-y-4">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-[16px] w-full aspect-[405/340]">
                    {/* Image */}
                    <img
                      src={holiday.image}
                      alt={holiday.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Text Content - Below Image */}
                  <div>
                    <p className="text-[#666666] text-[11px] md:text-[12px] font-semibold tracking-wider mb-1 uppercase">
                      {holiday.label}
                    </p>
                    <h3 className="text-[#C8105B] text-[16px] md:text-[22px] lg:text-[22px] font-bold uppercase">
                      {holiday.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
