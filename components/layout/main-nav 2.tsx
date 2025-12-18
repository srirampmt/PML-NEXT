"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Phone } from "lucide-react";
// import { useAuth } from "@/lib/auth";
// import { UserAccountNav } from "@/components/layout/user-account-nav";
// import { useLoginModal } from "@/app/store/bookingStore";
import Image from "next/image";
import { useState } from "react";
// import { FAQWidgetMobile } from "../faq-widget-mobile";

// Mega Menu Dropdown Component
interface MegaMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const MegaMenu = ({ children, isOpen }: MegaMenuProps) => {
  return (
    <div
      className={`
        border-none rounded-b-xl py-6 mt-0
        shadow-[0_0px_40px_rgba(0,0,0,0)] bg-white
        w-[1320px] min-h-[280px] max-h-[600px] overflow-y-auto
        ${isOpen ? 'flex opacity-100 visible' : 'hidden opacity-0 invisible'}
        lg:fixed lg:top-[76px] lg:left-1/2 lg:-translate-x-1/2
        lg:max-w-[1280px] xl:w-[1280px]
        md:max-w-[1280px] md:w-[1280px]
        max-lg:!w-[90vw] max-lg:static max-lg:transform-none
        max-lg:shadow-none max-lg:rounded-none max-lg:py-3 max-lg:px-0
        max-lg:max-h-none max-lg:flex-col
      `}
    >
      {children}
    </div>
  );
};

// Image Card Component
interface ImageCardProps {
  href: string;
  imageSrc: string;
  text: string;
  alt: string;
}

const ImageCard = ({ href, imageSrc, text, alt }: ImageCardProps) => {
  return (
    <Link href={href} className="block max-w-[420px] w-full no-underline">
      <div className="rounded-[14px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0)] relative">
        <div className="relative overflow-hidden">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full max-h-[180px] sm:max-h-[220px] md:max-h-[260px] object-cover scale-100 transition-transform duration-[350ms] hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-br from-black/55 to-black/35"></span>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-5 py-[18px] flex items-center justify-between text-white font-semibold">
          <p className="m-0 max-w-[75%] text-[0.95rem]">{text}</p>
          <span className="w-9 h-9 rounded-full border-2 border-white inline-flex items-center justify-center text-[0.95rem]">
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export function MainNav() {
  const pathname = usePathname();
  // const { user } = useAuth();
  // const { onOpen } = useLoginModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-[1000] bg-white">
      <div className="flex flex-col items-center px-[14px] md:px-[40px] w-full max-w-[1440px] sm:l-[25px] md:l-[50px] lg:h-[100px] mx-auto bg-white">
        <div className="flex flex-col items-start w-full max-w-[1280px] sm:l-[25px] md:l-[50px] lg:h-[100px] bg-white">
          <div className="flex flex-col justify-center items-start py-[16px] md:py-[18px] lg:py-[24px] w-full sm:l-[25px] md:l-[50px] lg:h-[100px] bg-white">
            <nav className="flex flex-row justify-between items-center w-full h-[52px] gap-[40px] bg-white">
              <Link href="/" className="flex flex-row items-start flex-none">
                <Image
                  width={320}
                  height={52}
                  src="https://planmylux.s3.eu-west-2.amazonaws.com/logo.svg"
                  className="w-[220px] md:w-[280px] lg:w-[320px] h-auto"
                  alt="Logo"
                  sizes="(max-width:640px) 140px, (max-width:1024px) 220px, 320px"
                  priority
                />
              </Link>
              <button
                className="lg:hidden border-0 p-0 focus:shadow-none w-8 h-8"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
              >
                <Menu className="w-8 h-8 text-pml-primary transition-transform duration-[250ms]" />
              </button>
              <div className={`
                max-lg:absolute max-lg:top-full max-lg:left-3 max-lg:right-3
                max-lg:mt-3 max-lg:p-4 max-lg:pb-5 max-lg:bg-white
                max-lg:rounded-[10px] max-lg:shadow-[0_6px_18px_rgba(0,0,0,0)]
                max-lg:max-h-[80vh] max-lg:overflow-y-auto
                ${mobileMenuOpen ? 'max-lg:block' : 'max-lg:hidden'}
                lg:flex lg:flex-row lg:justify-between lg:items-end lg:w-[836px] lg:h-[43px] lg:gap-[19px]
              `}>
                <ul className="flex flex-col lg:flex-row items-start lg:w-[598px] lg:h-[40px] gap-2 lg:gap-[8px]">
                  <li className="relative group w-full lg:w-[158px] lg:h-[40px]" onMouseEnter={() => setOpenDropdown('deals')} onMouseLeave={() => setOpenDropdown(null)} >
                    <button onClick={() => toggleDropdown('deals')} className="flex flex-row items-center py-2 px-3 lg:p-[8px_12px] gap-1 lg:gap-[4px] w-full lg:w-[158px] lg:h-[40px] cursor-pointer bg-transparent border-none hover:text-pml-primary focus:text-pml-primary transition-colors" >
                      <div className="flex flex-row items-center justify-center p-0 gap-1 lg:gap-[4px] w-full lg:w-[134px] lg:h-6">
                        <div className="flex flex-row items-center p-0 gap-[10px] lg:w-[114px] lg:h-6">
                          <span className="lg:w-[114px] lg:h-6 font-['Montserrat'] font-medium font-weight-600 text-base leading-6 text-[#4C4C4C] flex-none">Deals & Offers</span>
                        </div>
                        <span className={`w-4 h-4 relative flex-none origin-center transform-gpu transition-transform duration-300 ease-in-out ${openDropdown === 'deals' ? 'rotate-180' : ''}`} aria-hidden="true">
                          <span className="absolute left-[18%] right-[18%] top-[29.38%] bottom-[29.38%] bg-[#595858] [clipPath:polygon(50%_100%,0_0,100%_0)]"></span>
                        </span>
                      </div>
                    </button>
                  
                    <MegaMenu isOpen={openDropdown === 'deals'}>
                      <div className="flex max-lg:flex-col justify-between max-w-[1280px] w-full opacity-100 visible">
                        {/* Latest Offers */}
                        <div className="flex-[0_0_32%] max-lg:flex-auto border-r border-pml-border max-lg:border-r-0 max-lg:py-1 max-lg:px-0 max-lg:text-center">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858] max-lg:pt-1">Latest Offers & Exclusive Deals</p>
                          <div className="flex flex-col gap-[0.15rem]">
                            <Link href="/categories/latest-special-offers" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Trending Top Deals</Link>
                            <Link href="/categories/christmas-markets" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Christmas Markets Specials</Link>
                            <Link href="/categories/last-minute" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Last‑Minute Bargains</Link>
                            <Link href="/categories/christmas-new-year" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Christmas & New Year Offers</Link>
                            <Link href="/categories/early-booking" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Summer 2026 – Early Deals</Link>
                            <Link href="/categories/luxury-top-20" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Our Luxury Top 20</Link>
                            <Link href="/categories" className="py-[0.2rem] text-pml-primary text-[0.92rem] font-semibold whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Discover more →</Link>
                          </div>
                        </div>

                        {/* Holiday Styles */}
                        <div className="flex-[0_0_30%] max-lg:flex-auto max-lg:py-1 max-lg:px-0 max-lg:text-center hidden lg:flex lg:flex-col lg:pl-6">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858] max-lg:pt-1">Our Holiday Styles</p>
                          <div className="flex flex-col gap-[0.15rem]">
                            <Link href="/categories/all-inclusive" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">All Inclusive Holidays</Link>
                            <Link href="/categories/adults" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Adults‑Only Holidays</Link>
                            <Link href="/categories/city-breaks" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">City Breaks</Link>
                            <Link href="/categories/beach" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Beach Holidays</Link>
                            <Link href="/categories/family" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Family Holidays</Link>
                            <Link href="/categories/multi-centre" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Multi‑Centre Holidays</Link>
                            <Link href="/categories" className="py-[0.2rem] text-pml-primary text-[0.92rem] font-semibold whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Discover more →</Link>
                          </div>
                        </div>

                        {/* Image Card */}
                        <div className="flex-[0_0_38%] max-lg:flex-auto max-lg:mt-3 hidden lg:flex items-center justify-end">
                          <ImageCard
                            href="/categories"
                            imageSrc="https://images.unsplash.com/photo-1714836404653-db13d5781e8e?q=80&w=1600&auto=format&fit=crop"
                            text="Exclusive Including Free Added Extras"
                            alt="Exclusive offers destination"
                          />
                        </div>
                      </div>
                    </MegaMenu>
                  </li>

                  <li 
                    className="relative group w-full lg:w-[158px] lg:h-[40px]"
                    onMouseEnter={() => setOpenDropdown('holiday')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {/* menu-item_closed: padding: 8px 12px, gap: 4px */}
                    <button
                      onClick={() => toggleDropdown('holiday')}
                      className="flex flex-row items-center py-2 px-3 lg:p-[8px_12px] gap-1 lg:gap-[4px] w-full lg:w-[158px] lg:h-[40px] cursor-pointer bg-transparent border-none hover:text-pml-primary focus:text-pml-primary transition-colors"
                    >
                      {/* menu-link_wrapper: width: 134px, height: 24px, gap: 4px */}
                      <div className="flex flex-row items-center justify-center p-0 gap-1 lg:gap-[4px] w-full lg:w-[134px] lg:h-6">
                        {/* menu_link: width: 114px, height: 24px */}
                        <div className="flex flex-row items-center p-0 gap-[10px] lg:w-[114px] lg:h-6">
                          <span className="lg:w-[114px] lg:h-6 font-['Montserrat'] font-medium text-base leading-6 text-[#4C4C4C] flex-none">Holiday Styles</span>
                        </div>
                        {/* icon / down-arrow: 16px x 16px (custom vector) */}
                        <span
                          className={`w-4 h-4 relative flex-none origin-center transform-gpu transition-transform duration-300 ease-in-out ${openDropdown === 'holiday' ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        >
                          <span className="absolute left-[18%] right-[18%] top-[29.38%] bottom-[29.38%] bg-[#595858] [clipPath:polygon(50%_100%,0_0,100%_0)]"></span>
                        </span>
                      </div>
                    </button>
                    
                    <MegaMenu isOpen={openDropdown === 'holiday'}>
                      <div className="flex max-lg:flex-col justify-between max-w-[1280px] w-full opacity-100 visible">
                        {/* Holiday Styles */}
                        <div className="flex-[0_0_32%] max-lg:flex-auto border-r border-pml-border max-lg:border-r-0 max-lg:py-1 max-lg:px-0 max-lg:text-center">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858] max-lg:pt-1">Our Holiday Styles</p>
                          <div className="flex flex-col gap-[0.15rem]">
                            <Link href="/categories/all-inclusive" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">All Inclusive Holidays</Link>
                            <Link href="/categories/adults" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Adults‑Only Holidays</Link>
                            <Link href="/categories/city-breaks" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">City Breaks</Link>
                            <Link href="/categories/beach" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Beach Holidays</Link>
                            <Link href="/categories/family" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Family Holidays</Link>
                            <Link href="/categories/multi-centre" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Multi‑Centre Holidays</Link>
                            <Link href="/categories" className="py-[0.2rem] text-pml-primary text-[0.92rem] font-semibold whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Discover more →</Link>
                          </div>
                        </div>

                        {/* Latest Offers */}
                        <div className="flex-[0_0_30%] max-lg:flex-auto max-lg:py-1 max-lg:px-0 max-lg:text-center hidden lg:flex lg:flex-col lg:pl-6">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858] max-lg:pt-1">Latest Offers & Exclusive Deals</p>
                          <div className="flex flex-col gap-[0.15rem]">
                            <Link href="/categories/latest-special-offers" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Trending Top Deals</Link>
                            <Link href="/categories/christmas-markets" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Christmas Markets Specials</Link>
                            <Link href="/categories/last-minute" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Last‑Minute Bargains</Link>
                            <Link href="/categories/christmas-new-year" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Christmas & New Year Offers</Link>
                            <Link href="/categories/early-booking" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Summer 2026 – Early Deals</Link>
                            <Link href="/categories/luxury-top-20" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Our Luxury Top 20</Link>
                            <Link href="/categories" className="py-[0.2rem] text-pml-primary text-[0.92rem] font-semibold whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Discover more →</Link>
                          </div>
                        </div>

                        {/* Image Card */}
                        <div className="flex-[0_0_38%] max-lg:flex-auto max-lg:mt-3 hidden lg:flex items-center justify-end">
                          <ImageCard
                            href="/categories"
                            imageSrc="https://images.unsplash.com/photo-1714836404653-db13d5781e8e?q=80&w=1600&auto=format&fit=crop"
                            text="Exclusive Including Free Added Extras"
                            alt="Exclusive offers destination"
                          />
                        </div>
                      </div>
                    </MegaMenu>
                  </li>

                  <li 
                    className="relative group w-full lg:w-[147px] lg:h-[40px]"
                    onMouseEnter={() => setOpenDropdown('destinations')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => toggleDropdown('destinations')}
                      className="flex flex-row items-center py-2 px-3 lg:p-[8px_12px] gap-1 lg:gap-[4px] w-full lg:w-[147px] lg:h-[40px] cursor-pointer bg-transparent border-none hover:text-pml-primary focus:text-pml-primary transition-colors"
                    >
                      <div className="flex flex-row items-center justify-center p-0 gap-1 lg:gap-[4px] w-full lg:w-[123px] lg:h-6">
                        <div className="flex flex-row items-center p-0 gap-[10px] lg:w-[103px] lg:h-6">
                          <span className="lg:w-[103px] lg:h-6 font-['Montserrat'] font-medium text-base leading-6 text-[#4C4C4C] flex-none">Destinations</span>
                        </div>
                        <span
                          className={`w-4 h-4 relative flex-none origin-center transform-gpu transition-transform duration-300 ease-in-out ${openDropdown === 'destinations' ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        >
                          <span className="absolute left-[18%] right-[18%] top-[29.38%] bottom-[29.38%] bg-[#595858] [clipPath:polygon(50%_100%,0_0,100%_0)]"></span>
                        </span>
                      </div>
                    </button>
                    
                    <MegaMenu isOpen={openDropdown === 'destinations'}>
                      <div className="flex max-lg:flex-col justify-between max-w-[1280px] w-full opacity-100 visible">
                        <div className="flex-auto max-lg:py-1 max-lg:px-0 max-lg:text-left">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858] max-lg:pt-1">Our Destinations</p>
                          <div
                            className="flex flex-row gap-x-2 overflow-x-auto px-2 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-1 md:overflow-visible md:px-0 max-md:flex-row max-md:gap-x-2 max-md:px-2 max-md:snap-x max-md:snap-mandatory"
                            style={{ WebkitOverflowScrolling: 'touch' }}
                          >
                            {/* Column 1 */}
                            <div className="flex flex-col gap-[0.15rem] border-r border-pml-border max-md:border-r-0 flex-shrink-0 max-md:min-w-[66%] md:min-w-0 snap-start">
                              <Link href="/destination/european-cities" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">European Cities</Link>
                              <Link href="/destination/mediterranean-beach" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Mediterranean Beach</Link>
                              <Link href="/destination/tenerife" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Tenerife</Link>
                              <Link href="/destination/gran-canaria" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Gran Canaria</Link>
                              <Link href="/destination/lanzarote" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Lanzarote</Link>
                              <Link href="/destination/fuerteventura" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Fuerteventura</Link>
                              <Link href="/destination/mainland-spain" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Mainland Spain</Link>
                              <Link href="/destination/costa-blanca" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Costa Blanca</Link>
                              <Link href="/destination/costa-del-sol" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Costa del Sol</Link>
                              <Link href="/destination/mallorca" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Mallorca</Link>
                              <Link href="/destination/ibiza" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Ibiza</Link>
                            </div>

                            {/* Column 2 */}
                            <div className="flex flex-col gap-[0.15rem] border-r border-pml-border max-md:border-r-0 flex-shrink-0 max-md:min-w-[66%] md:min-w-0 snap-start">
                              <Link href="/destination/greece" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Greece</Link>
                              <Link href="/destination/halkidiki" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Halkidiki</Link>
                              <Link href="/destination/crete" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Crete</Link>
                              <Link href="/destination/corfu" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Corfu</Link>
                              <Link href="/destination/rhodes" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Rhodes</Link>
                              <Link href="/destination/kos" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Kos</Link>
                              <Link href="/destination/kefalonia" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Kefalonia</Link>
                              <Link href="/destination/mykonos" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Mykonos</Link>
                              <Link href="/destination/zante" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Zante</Link>
                              <Link href="/destination/santorini" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Santorini</Link>
                            </div>

                            {/* Column 3 */}
                            <div className="flex flex-col gap-[0.15rem] border-r border-pml-border max-md:border-r-0 flex-shrink-0 max-md:min-w-[66%] md:min-w-0 snap-start">
                              <Link href="/destination/cyprus" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Cyprus</Link>
                              <Link href="/destination/turkey" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Turkey</Link>
                              <Link href="/destination/croatia" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Croatia</Link>
                              <Link href="/destination/montenegro" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Montenegro</Link>
                              <Link href="/destination/bulgaria" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Bulgaria</Link>
                              <Link href="/destination/malta" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Malta</Link>
                              <Link href="/destination/italy" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Italy</Link>
                              <Link href="/destination" className="py-[0.2rem] text-pml-primary text-[0.92rem] font-semibold whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Discover more →</Link>
                            </div>

                            {/* Column 4 */}
                            <div className="flex flex-col gap-[0.15rem] flex-shrink-0 max-md:min-w-[66%] md:min-w-0 snap-start">
                              <Link href="/destination/egypt-red-sea" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Egypt & Red Sea</Link>
                              <Link href="/destination/tunisia" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Tunisia</Link>
                              <Link href="/destination/morocco" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Morocco</Link>
                              <Link href="/destination/cape-verde" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Cape Verde</Link>
                              <Link href="/destination/mexico" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Mexico</Link>
                              <Link href="/destination/florida" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Florida</Link>
                              <Link href="/destination/new-york" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">New York</Link>
                              <Link href="/destination/maldives" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Maldives</Link>
                              <Link href="/destination/phuket" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Phuket</Link>
                              <Link href="/destination" className="py-[0.2rem] text-pml-primary text-[0.92rem] font-semibold whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">All our destinations</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MegaMenu>
                  </li>

                  <li 
                    className="relative group w-full lg:w-[111px] lg:h-[40px]"
                    onMouseEnter={() => setOpenDropdown('support')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {/* menu-item_closed: padding: 8px 12px, gap: 4px */}
                    <button
                      onClick={() => toggleDropdown('support')}
                      className="flex flex-row items-center py-2 px-3 lg:p-[8px_12px] gap-1 lg:gap-[4px] w-full lg:w-[111px] lg:h-[40px] cursor-pointer bg-transparent border-none hover:text-pml-primary focus:text-pml-primary transition-colors"
                    >
                      {/* menu-link_wrapper: width: 87px, height: 24px, gap: 4px */}
                      <div className="flex flex-row items-center justify-center p-0 gap-1 lg:gap-[4px] w-full lg:w-[87px] lg:h-6">
                        {/* menu_link: width: 67px, height: 24px */}
                        <div className="flex flex-row items-center p-0 gap-[10px] lg:w-[67px] lg:h-6">
                          <span className="lg:w-[67px] lg:h-6 font-['Montserrat'] font-medium text-base leading-6 text-[#4C4C4C] flex-none">Support</span>
                        </div>
                        {/* icon / down-arrow: 16px x 16px (custom vector) */}
                        <span
                          className={`w-4 h-4 relative flex-none origin-center transform-gpu transition-transform duration-300 ease-in-out ${openDropdown === 'support' ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        >
                          <span className="absolute left-[18%] right-[18%] top-[29.38%] bottom-[29.38%] bg-[#595858] [clipPath:polygon(50%_100%,0_0,100%_0)]"></span>
                        </span>
                      </div>
                    </button>
                    
                    <MegaMenu isOpen={openDropdown === 'support'}>
                      <div className="flex justify-between lg:gap-x-6 lg:gap-y-1 max-w-[1280px] w-full opacity-100 visible max-lg:flex-row max-lg:overflow-x-auto max-lg:gap-x-2 max-lg:px-2 max-lg:snap-x max-lg:snap-mandatory max-xl:flex-row max-xl:overflow-x-auto max-xl:gap-x-2 max-xl:px-2 max-xl:snap-x max-xl:snap-mandatory" style={{ WebkitOverflowScrolling: 'touch' }}>
                        {/* Help & Support */}
                        <div className="flex-[0_0_32%] border-r border-pml-border max-lg:border-r-0 max-lg:py-1 max-lg:px-2 max-lg:text-left max-lg:flex-shrink-0 max-lg:min-w-[50%] max-lg:snap-start max-xl:flex-shrink-0 max-xl:min-w-[50%] max-xl:snap-start">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858] max-lg:pt-1">Help & Support</p>
                          <div className="flex flex-col gap-[0.15rem]">
                            <Link href="/support/travel-advice" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Latest Travel Advice</Link>
                            <Link href="/support/contact-us" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Contact Us</Link>
                            <Link href="/support/faqs" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Frequently Asked Questions</Link>
                            <Link href="/support/group-bookings" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Group Bookings</Link>
                            <Link href="/support/changes" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Changes to Bookings</Link>
                            <Link href="/support/payments" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Payment Options</Link>
                          </div>
                        </div>

                        {/* Useful Links */}
                        <div className="flex-[0_0_32%] max-lg:py-1 max-lg:px-2 max-lg:text-left lg:pl-6 max-lg:flex-shrink-0 max-lg:min-w-[50%] max-lg:snap-start max-xl:flex-shrink-0 max-xl:min-w-[50%] max-xl:snap-start">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858] max-lg:pt-1">Useful Links</p>
                          <div className="flex flex-col gap-[0.15rem]">
                            <Link href="/support/about-us" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">About Us</Link>
                            <Link href="/support/brochure" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Download our Brochure</Link>
                            <Link href="/support/reviews" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Feedback & Reviews</Link>
                            <Link href="/suppliers" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Become a PlanMyLuxe Supplier</Link>
                            <Link href="/careers" className="py-[0.2rem] text-pml-primary text-[0.92rem] whitespace-normal no-underline hover:text-pml-primary/80 hover:bg-transparent">Interesting in Work for Us</Link>
                          </div>
                        </div>

                        {/* Image Card */}
                        <div className="flex-[0_0_36%] max-lg:flex-auto max-lg:mt-3 hidden lg:flex items-center justify-end">
                          <ImageCard
                            href="/support/brochure"
                            imageSrc="https://images.unsplash.com/photo-1714836404653-db13d5781e8e?q=80&w=1600&auto=format&fit=crop"
                            text="Download our latest brochure"
                            alt="Download our latest brochure"
                          />
                        </div>
                      </div>
                    </MegaMenu>
                  </li>
                </ul>
                <div className="mt-3 lg:mt-0 flex flex-col items-end max-lg:w-full lg:w-[167px] lg:h-[43px]">
                  <a href="tel:02037400744" className="flex flex-row items-center py-2 lg:p-[8px_0px] gap-[6px] w-full lg:w-[167px] lg:h-[43px] no-underline hover:underline max-lg:justify-center" >
                    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22.0505 10.5542L22.0354 10.5573V8.89424C22.0354 4.27154 18.1138 0.509766 13.2936 0.509766H10.7878C5.96758 0.509766 2.04749 4.27004 2.04749 8.89424V10.5648C2.0098 10.5648 1.97211 10.5527 1.93291 10.5527C0.866943 10.5527 0 11.4423 0 12.5384V16.5897C0 17.6873 0.866943 18.5708 1.93291 18.5708C2.02639 18.5708 2.12137 18.5542 2.21184 18.5422C3.08481 21.1521 6.25405 23.1649 10.1862 23.5388C10.6054 24.0921 10.7863 24.4902 12.0694 24.4902C13.7158 24.4902 14.9536 23.8418 14.9536 23.0412C14.9536 22.2421 13.7158 21.5923 12.0694 21.5923C10.7968 21.5923 10.6204 21.9843 10.1937 22.5301C6.64305 22.1758 3.80701 20.4042 3.12853 18.1366C3.80249 18.1366 4.35884 17.2199 4.35884 16.5882V16.4042H4.36789V8.80679C4.36789 4.96661 6.65661 3.35183 10.7878 3.35183H13.2936C17.4142 3.35183 19.5401 4.91384 19.5401 8.82337V16.4223H19.5613V16.5882C19.5613 17.6858 20.6951 18.4291 21.7716 18.4291C22.8481 18.4291 24 17.6858 24 16.5882V12.5369C23.9985 11.4438 23.127 10.5542 22.0505 10.5542Z" fill="#CB2187" />
                    </svg>
                    <span className=" h-[27px] font-['montserrat'] font-semibold text-[20px] leading-[27px] text-[#CB2187] flex-none">020 3740 0744</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
