"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface WeatherMonth {
  period: string;
  title: string;
  subtitle: string;
  temperature: string;
  image: string;
}

const weatherMonths: WeatherMonth[] = [
  {
    period: "January - March",
    title: "January - March",
    subtitle: "BEST TIME FOR NO CROWDS",
    temperature: "23°C – 31°C",
    image: "/assets/images/weather-jan-mar.png"
  },
  {
    period: "April - June",
    title: "April - June",
    subtitle: "BEST TIME FOR NO CROWDS",
    temperature: "23°C – 31°C",
    image: "/assets/images/weather-apr-jun.jpg"
  },
  {
    period: "July - August",
    title: "July - August",
    subtitle: "BEST TIME FOR BIG CROWDS",
    temperature: "23°C – 31°C",
    image: "/assets/images/weather-jul-aug.jpg"
  },
  {
    period: "Sept - December",
    title: "Sept - December",
    subtitle: "BEST TIME FOR NO CROWDS",
    temperature: "23°C – 31°C",
    image: "/assets/images/weather-sep-dec.jpg"
  },
  {
    period: "January - March",
    title: "January - March",
    subtitle: "BEST TIME FOR NO CROWDS",
    temperature: "23°C – 31°C",
    image: "/assets/images/weather-jan-mar.png"
  },
  {
    period: "April - June",
    title: "April - June",
    subtitle: "BEST TIME FOR NO CROWDS",
    temperature: "23°C – 31°C",
    image: "/assets/images/weather-apr-jun.jpg"
  },
  {
    period: "July - August",
    title: "July - August",
    subtitle: "BEST TIME FOR BIG CROWDS",
    temperature: "23°C – 31°C",
    image: "/assets/images/weather-jul-aug.jpg"
  },
  {
    period: "Sept - December",
    title: "Sept - December",
    subtitle: "BEST TIME FOR NO CROWDS",
    temperature: "23°C – 31°C",
    image: "/assets/images/weather-sep-dec.jpg"
  },
];

export default function Weather() {
  return (
    <section className="w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] relative bg-white font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 pb-10">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Title Section */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-[#808080] text-[28px] md:text-[48px] lg:text-[48px] font-semibold leading-tight mb-4">
              What to expect from Mallorcas weather
            </h2>
            <p className="text-[#808080] text-[12px] md:text-[14px] lg:text-[18px] leading-relaxed max-w-4xl">
              Mallorca enjoys warm sunshine long summers and mild pleasant winters creating ideal conditions for beach days coastal walks and relaxed outdoor living. Temperatures rise through the spring and stay consistently high through late summer with clear skies gentle breezes and bright Mediterranean light. Autumn brings softer warmth and quieter days while winter remains comfortable with cool evenings and plenty of blue sky moments.
            </p>
          </div>

          {/* Weather Cards Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {weatherMonths.map((month, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="relative group overflow-hidden rounded-[10px]">
                    {/* Background Image */}
                    <div className="relative w-full h-[340px]">
                      <img
                        src={month.image}
                        alt={month.title}
                        className="w-full h-[340px] object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-[24px] md:text-[28px] font-semibold mb-2">
                          {month.title}
                        </h3>
                        <p className="text-[11px] md:text-[12px] font-semibold tracking-wider mb-2">
                          {month.subtitle}
                        </p>
                        <p className="text-[14px] md:text-[15px] font-normal">
                          {month.temperature}
                        </p>
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