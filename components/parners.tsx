"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Partner brand logos data
interface Partner {
  id: number;
  name: string;
  logo: React.ReactNode;
}

// GRECOTEL Logo - Golden brown serif font
const GrecotelLogo = () => (
  <svg width="180" height="55" viewBox="0 0 180 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="32" fontFamily="Georgia, serif" fontSize="30" fontWeight="400" fill="#9a7b4f" letterSpacing="3">GRECOTEL</text>
    <text x="0" y="48" fontFamily="Arial, sans-serif" fontSize="9" fill="#c9a27e" letterSpacing="2">HOTELS & RESORTS</text>
  </svg>
);

// IKOS Logo - Italic serif
const IkosLogo = () => (
  <svg width="90" height="55" viewBox="0 0 90 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="35" fontFamily="Georgia, serif" fontSize="32" fontStyle="italic" fill="#9a7b4f">ikos</text>
    <text x="5" y="50" fontFamily="Arial, sans-serif" fontSize="9" fill="#c9a27e" letterSpacing="2">RESORTS</text>
  </svg>
);

// JUMEIRAH Logo - Light gray elegant serif
const JumeirahLogo = () => (
  <svg width="200" height="55" viewBox="0 0 200 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="38" fontFamily="Times New Roman, serif" fontSize="34" fontWeight="300" fill="#5a5a5a" letterSpacing="5">JUMEIRAH</text>
  </svg>
);

// MITSIS Logo - Bordered with diamond pattern
const MitsisLogo = () => (
  <svg width="90" height="65" viewBox="0 0 90 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="3" width="80" height="58" rx="3" stroke="#c9a27e" strokeWidth="1.5" fill="none"/>
    {/* Diamond pattern */}
    <path d="M45 10L49 14L45 18L41 14L45 10Z" fill="#c9a27e"/>
    <path d="M37 14L41 18L37 22L33 18L37 14Z" fill="#c9a27e"/>
    <path d="M53 14L57 18L53 22L49 18L53 14Z" fill="#c9a27e"/>
    <path d="M45 18L49 22L45 26L41 22L45 18Z" fill="#c9a27e"/>
    <path d="M37 22L41 26L37 30L33 26L37 22Z" fill="#c9a27e"/>
    <path d="M53 22L57 26L53 30L49 26L53 22Z" fill="#c9a27e"/>
    <text x="45" y="50" fontFamily="Arial, sans-serif" fontSize="13" fill="#c9a27e" textAnchor="middle" letterSpacing="3">MITSIS</text>
  </svg>
);

// Four Seasons Logo - Tree with text
const FourSeasonsLogo = () => (
  <svg width="150" height="55" viewBox="0 0 150 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized tree */}
    <path d="M25 45V15" stroke="#5a5a5a" strokeWidth="1.5"/>
    <path d="M25 15L18 22M25 15L32 22" stroke="#5a5a5a" strokeWidth="1"/>
    <path d="M25 20L15 30M25 20L35 30" stroke="#5a5a5a" strokeWidth="1"/>
    <path d="M25 28L12 40M25 28L38 40" stroke="#5a5a5a" strokeWidth="1"/>
    <text x="50" y="32" fontFamily="Georgia, serif" fontSize="13" fill="#5a5a5a" letterSpacing="1">FOUR SEASONS</text>
  </svg>
);

// JA Resorts Logo - Stylized JA
const JAResortsLogo = () => (
  <svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized JA letters */}
    <text x="35" y="32" fontFamily="Georgia, serif" fontSize="30" fontWeight="400" fill="#5a5a5a" textAnchor="middle">JA</text>
    <text x="35" y="45" fontFamily="Arial, sans-serif" fontSize="7" fill="#5a5a5a" textAnchor="middle" letterSpacing="1">RESORTS</text>
    <text x="35" y="54" fontFamily="Arial, sans-serif" fontSize="7" fill="#5a5a5a" textAnchor="middle" letterSpacing="1">&amp;HOTELS</text>
  </svg>
);

const partners: Partner[] = [
  { id: 1, name: "Grecotel", logo: <GrecotelLogo /> },
  { id: 2, name: "Ikos", logo: <IkosLogo /> },
  { id: 3, name: "Jumeirah", logo: <JumeirahLogo /> },
  { id: 4, name: "Mitsis", logo: <MitsisLogo /> },
  { id: 5, name: "Four Seasons", logo: <FourSeasonsLogo /> },
  { id: 6, name: "JA Resorts", logo: <JAResortsLogo /> },
];

export function Partners() {
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#fdf4f2] font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-[50px] sm:py-[60px] md:py-[70px] lg:py-[90px]">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-[20px] sm:gap-[24px] md:gap-[32px] lg:gap-[100px] mb-[50px] sm:mb-[60px] md:mb-[70px] lg:mb-[90px]">
            {/* Left side - Title */}
            <div className="flex-shrink-0">
              <h2 className="font-['Playfair_Display',_Georgia,_serif] text-[#4c4c4c] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[52px] font-medium italic leading-[1.2] tracking-[-0.01em]">
                Partnering the Worlds<br />
                Best Brands
              </h2>
            </div>

            {/* Right side - Description */}
            <div className="max-w-[480px] lg:pt-[12px]">
              <p className="font-['Montserrat'] text-[#888888] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-normal leading-[1.7] sm:leading-[1.75] md:leading-[1.8]">
                From iconic cities to hidden gems, the world is waiting for you. Browse our destinations and find the perfect setting for your next getaway.
              </p>
            </div>
          </div>

          {/* Partner Logos Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-[30px] sm:-ml-[40px] md:-ml-[50px] lg:-ml-[60px]">
              {partners.map((partner) => (
                <CarouselItem 
                  key={partner.id} 
                  className="pl-[30px] sm:pl-[40px] md:pl-[50px] lg:pl-[60px] basis-auto"
                >
                  <div className="flex items-center justify-center h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px]">
                    {partner.logo}
                  </div>
                </CarouselItem>
              ))}
              {/* Duplicate logos for seamless scrolling */}
              {partners.map((partner) => (
                <CarouselItem 
                  key={`dup-${partner.id}`} 
                  className="pl-[30px] sm:pl-[40px] md:pl-[50px] lg:pl-[60px] basis-auto"
                >
                  <div className="flex items-center justify-center h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px]">
                    {partner.logo}
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

export default Partners;
