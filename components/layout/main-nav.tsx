"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
// import { useAuth } from "@/lib/auth";
// import { UserAccountNav } from "@/components/layout/user-account-nav";
// import { useLoginModal } from "@/app/store/bookingStore";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
        bg-white
        ${isOpen ? 'flex' : 'hidden'}
        w-full py-3 flex-col
        xl:fixed xl:top-[76px] xl:left-0 xl:right-0 xl:w-full
        xl:min-h-[280px] xl:max-h-[600px]
        xl:overflow-y-auto xl:py-6
      `}
    >
      <div className="w-full max-w-[1320px] mx-auto px-6">
        {children}
      </div>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Handle click outside to close menu on mobile/tablet
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        // Only close on mobile/tablet (below xl breakpoint)
        if (window.innerWidth < 1280) {
          closeMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside as EventListener);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, []);

  // Handle mouse enter for desktop only
  const handleMouseEnter = (dropdown: string) => {
    if (window.innerWidth >= 1280) {
      setOpenDropdown(dropdown);
    }
  };

  // Handle mouse leave for desktop only
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1280) {
      setOpenDropdown(null);
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-[1000] bg-white shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="py-4 xl:py-6">
            <nav ref={navRef} className="flex justify-between items-center w-full gap-8">
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
                type="button"
                className="xl:hidden p-2 border-0 bg-transparent cursor-pointer z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7 text-pml-primary" />
                ) : (
                  <Menu className="w-7 h-7 text-pml-primary" />
                )}
              </button>
              <div className={`
                absolute top-full left-0 right-0 p-4 bg-white max-h-[80vh] overflow-y-auto
                xl:static xl:mt-0 xl:p-0 xl:rounded-none xl:max-h-none xl:overflow-visible
                xl:flex xl:items-center xl:gap-6
                ${mobileMenuOpen ? 'block' : 'hidden xl:flex'}
              `}>
                <ul className="flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-2 items-center">
                  <li className="relative group w-full xl:w-auto" onMouseEnter={() => handleMouseEnter('deals')} onMouseLeave={handleMouseLeave}>
                    <button onClick={() => toggleDropdown('deals')} className="flex items-center justify-center xl:justify-start py-2 px-3 gap-1 w-full xl:w-auto cursor-pointer bg-transparent border-none hover:text-pml-primary transition-colors">
                      <span className="font-['Montserrat'] font-medium text-base text-[#4C4C4C]">Deals & Offers</span>
                      <svg className={`w-4 h-4 text-[#595858] transition-transform duration-300 ${openDropdown === 'deals' ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3.0624 5.93937L7.43052 11.0369C7.50093 11.119 7.58827 11.1849 7.68655 11.2301C7.78483 11.2753 7.89173 11.2987 7.9999 11.2987C8.10807 11.2987 8.21497 11.2753 8.31325 11.2301C8.41153 11.1849 8.49887 11.119 8.56927 11.0369L12.9374 5.93937C13.3543 5.45281 13.0086 4.70125 12.368 4.70125H3.63053C2.9899 4.70125 2.64428 5.45281 3.0624 5.93937Z" fill="#595858" />
                      </svg>
                    </button>
                  
                    <MegaMenu isOpen={openDropdown === 'deals'}>
                      <div className="flex flex-col items-center xl:items-stretch xl:flex-row xl:justify-between w-full gap-4 xl:gap-0">
                        {/* Latest Offers */}
                        <div className="xl:flex-[0_0_32%] xl:border-r xl:border-pml-border xl:pr-6 text-center xl:text-left">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858]">Latest Offers & Exclusive Deals</p>
                          <div className="flex flex-col gap-1 items-center xl:items-start">
                            <Link href="/offers/latest-special-offers" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Trending Top Deals</Link>
                            <Link href="/offers/christmas-markets" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Christmas Markets Specials</Link>
                            <Link href="/offers/last-minute" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Last‑Minute Bargains</Link>
                            <Link href="/offers/christmas-new-year" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Christmas & New Year Offers</Link>
                            <Link href="/offers/early-booking" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Summer 2026 – Early Deals</Link>
                            <Link href="/top-trending-20" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Our Luxury Top 20</Link>
                            <Link href="/all-offers" className="py-1 text-pml-primary text-sm font-semibold hover:text-pml-primary/80">Discover more →</Link>
                          </div>
                        </div>

                        {/* Holiday Styles - Desktop only */}
                        <div className="hidden xl:block xl:flex-[0_0_30%] xl:pl-6">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858]">Our Holiday Styles</p>
                          <div className="flex flex-col gap-1">
                            <Link href="/holiday-styles/all-inclusive" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">All Inclusive Holidays</Link>
                            <Link href="/holiday-styles/adults" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Adults‑Only Holidays</Link>
                            <Link href="/holiday-styles/city-breaks" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">City Breaks</Link>
                            <Link href="/holiday-styles/beach" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Beach Holidays</Link>
                            <Link href="/holiday-styles/family" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Family Holidays</Link>
                            <Link href="/holiday-styles/multi-centre" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Multi‑Centre Holidays</Link>
                            <Link href="/holiday-styles" className="py-1 text-pml-primary text-sm font-semibold hover:text-pml-primary/80">Discover more →</Link>
                          </div>
                        </div>

                        {/* Image Card - Desktop only */}
                        <div className="hidden xl:flex xl:flex-[0_0_38%] items-center justify-end">
                          <ImageCard
                            href="/categories"
                            imageSrc="/assets/images/menu-image-1.jpg"
                            text="Exclusive Including Free Added Extras"
                            alt="Exclusive offers destination"
                          />
                        </div>
                      </div>
                    </MegaMenu>
                  </li>

                  <li className="relative group w-full xl:w-auto" onMouseEnter={() => handleMouseEnter('holiday')} onMouseLeave={handleMouseLeave}>
                    <button onClick={() => toggleDropdown('holiday')} className="flex items-center justify-center xl:justify-start py-2 px-3 gap-1 w-full xl:w-auto cursor-pointer bg-transparent border-none hover:text-pml-primary transition-colors">
                      <span className="font-['Montserrat'] font-medium text-base text-[#4C4C4C]">Holiday Styles</span>
                      <svg className={`w-4 h-4 text-[#595858] transition-transform duration-300 ${openDropdown === 'holiday' ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3.0624 5.93937L7.43052 11.0369C7.50093 11.119 7.58827 11.1849 7.68655 11.2301C7.78483 11.2753 7.89173 11.2987 7.9999 11.2987C8.10807 11.2987 8.21497 11.2753 8.31325 11.2301C8.41153 11.1849 8.49887 11.119 8.56927 11.0369L12.9374 5.93937C13.3543 5.45281 13.0086 4.70125 12.368 4.70125H3.63053C2.9899 4.70125 2.64428 5.45281 3.0624 5.93937Z" fill="#595858" />
                      </svg>
                    </button>
                    
                    <MegaMenu isOpen={openDropdown === 'holiday'}>
                      <div className="flex flex-col items-center xl:items-stretch xl:flex-row xl:justify-between w-full gap-4 xl:gap-0">
                        {/* Holiday Styles */}
                        <div className="xl:flex-[0_0_32%] xl:border-r xl:border-pml-border xl:pr-6 text-center xl:text-left">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858]">Our Holiday Styles</p>
                          <div className="flex flex-col gap-1 items-center xl:items-start">
                            <Link href="/holiday-styles/all-inclusive" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">All Inclusive Holidays</Link>
                            <Link href="/holiday-styles/adults" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Adults‑Only Holidays</Link>
                            <Link href="/holiday-styles/city-breaks" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">City Breaks</Link>
                            <Link href="/holiday-styles/beach" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Beach Holidays</Link>
                            <Link href="/holiday-styles/family" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Family Holidays</Link>
                            <Link href="/holiday-styles/multi-centre" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Multi‑Centre Holidays</Link>
                            <Link href="/holiday-styles" className="py-1 text-pml-primary text-sm font-semibold hover:text-pml-primary/80">Discover more →</Link>
                          </div>
                        </div>

                        {/* Latest Offers - Desktop only */}
                        <div className="hidden xl:block xl:flex-[0_0_30%] xl:pl-6">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858]">Latest Offers & Exclusive Deals</p>
                          <div className="flex flex-col gap-1">
                            <Link href="/offers/latest-special-offers" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Trending Top Deals</Link>
                            <Link href="/offers/christmas-markets" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Christmas Markets Specials</Link>
                            <Link href="/offers/last-minute" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Last‑Minute Bargains</Link>
                            <Link href="/offers/christmas-new-year" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Christmas & New Year Offers</Link>
                            <Link href="/offers/early-booking" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Summer 2026 – Early Deals</Link>
                            <Link href="/top-trending-20" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Our Luxury Top 20</Link>
                            <Link href="/all-offers" className="py-1 text-pml-primary text-sm font-semibold hover:text-pml-primary/80">Discover more →</Link>
                          </div>
                        </div>

                        {/* Image Card - Desktop only */}
                        <div className="hidden xl:flex xl:flex-[0_0_38%] items-center justify-end">
                          <ImageCard
                            href="/categories"
                            imageSrc="/assets/images/menu-image-2.jpg"
                            text="Exclusive Including Free Added Extras"
                            alt="Exclusive offers destination"
                          />
                        </div>
                      </div>
                    </MegaMenu>
                  </li>

                  <li className="relative group w-full xl:w-auto" onMouseEnter={() => handleMouseEnter('destinations')} onMouseLeave={handleMouseLeave}>
                    <button onClick={() => toggleDropdown('destinations')} className="flex items-center justify-center xl:justify-start py-2 px-3 gap-1 w-full xl:w-auto cursor-pointer bg-transparent border-none hover:text-pml-primary transition-colors">
                      <span className="font-['Montserrat'] font-medium text-base text-[#4C4C4C]">Destinations</span>
                      <svg className={`w-4 h-4 text-[#595858] transition-transform duration-300 ${openDropdown === 'destinations' ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3.0624 5.93937L7.43052 11.0369C7.50093 11.119 7.58827 11.1849 7.68655 11.2301C7.78483 11.2753 7.89173 11.2987 7.9999 11.2987C8.10807 11.2987 8.21497 11.2753 8.31325 11.2301C8.41153 11.1849 8.49887 11.119 8.56927 11.0369L12.9374 5.93937C13.3543 5.45281 13.0086 4.70125 12.368 4.70125H3.63053C2.9899 4.70125 2.64428 5.45281 3.0624 5.93937Z" fill="#595858" />
                      </svg>
                    </button>
                    
                    <MegaMenu isOpen={openDropdown === 'destinations'}>
                      <div className="w-full">
                        <p className="text-[0.95rem] font-bold mb-3 text-[#595858] text-center xl:text-left">Our Destinations</p>
                        <div className="flex gap-4 overflow-x-auto pb-2 justify-center xl:justify-start xl:grid xl:grid-cols-4 xl:gap-8 xl:overflow-visible xl:pb-0">
                          {/* Column 1 */}
                          <div className="flex flex-col gap-1 flex-shrink-0 min-w-[140px] xl:min-w-0 xl:border-r xl:border-pml-border xl:pr-4 ">
                            <Link href="/destinations/european-cities" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">European Cities</Link>
                            <Link href="/destinations/mediterranean-beach" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Mediterranean Beach</Link>
                            <Link href="/destinations/tenerife" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Tenerife</Link>
                            <Link href="/destinations/gran-canaria" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Gran Canaria</Link>
                            <Link href="/destinations/lanzarote" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Lanzarote</Link>
                            <Link href="/destinations/fuerteventura" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Fuerteventura</Link>
                            <Link href="/destinations/mainland-spain" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Mainland Spain</Link>
                            <Link href="/destinations/costa-blanca" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Costa Blanca</Link>
                            <Link href="/destinations/costa-del-sol" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Costa del Sol</Link>
                            <Link href="/destinations/mallorca" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Mallorca</Link>
                            <Link href="/destinations/ibiza" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Ibiza</Link>
                          </div>

                          {/* Column 2 */}
                          <div className="flex flex-col gap-1 flex-shrink-0 min-w-[140px] xl:min-w-0 xl:border-r xl:border-pml-border xl:pr-4">
                            <Link href="/destinations/greece" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Greece</Link>
                            <Link href="/destinations/halkidiki" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Halkidiki</Link>
                            <Link href="/destinations/crete" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Crete</Link>
                            <Link href="/destinations/corfu" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Corfu</Link>
                            <Link href="/destinations/rhodes" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Rhodes</Link>
                            <Link href="/destinations/kos" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Kos</Link>
                            <Link href="/destinations/kefalonia" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Kefalonia</Link>
                            <Link href="/destinations/mykonos" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Mykonos</Link>
                            <Link href="/destinations/zante" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Zante</Link>
                            <Link href="/destinations/santorini" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Santorini</Link>
                          </div>

                          {/* Column 3 */}
                          <div className="flex flex-col gap-1 flex-shrink-0 min-w-[140px] xl:min-w-0 xl:border-r xl:border-pml-border xl:pr-4">
                            <Link href="/destinations/cyprus" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Cyprus</Link>
                            <Link href="/destinations/turkey" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Turkey</Link>
                            <Link href="/destinations/croatia" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Croatia</Link>
                            <Link href="/destinations/montenegro" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Montenegro</Link>
                            <Link href="/destinations/bulgaria" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Bulgaria</Link>
                            <Link href="/destinations/malta" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Malta</Link>
                            <Link href="/destinations/italy" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Italy</Link>
                            <Link href="/destinations" className="py-1 text-pml-primary text-sm font-semibold hover:text-pml-primary/80">Discover more →</Link>
                          </div>

                          {/* Column 4 */}
                          <div className="flex flex-col gap-1 flex-shrink-0 min-w-[140px] xl:min-w-0">
                            <Link href="/destinations/egypt-red-sea" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Egypt & Red Sea</Link>
                            <Link href="/destinations/tunisia" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Tunisia</Link>
                            <Link href="/destinations/morocco" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Morocco</Link>
                            <Link href="/destinations/cape-verde" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Cape Verde</Link>
                            <Link href="/destinations/mexico" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Mexico</Link>
                            <Link href="/destinations/florida" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Florida</Link>
                            <Link href="/destinations/new-york" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">New York</Link>
                            <Link href="/destinations/maldives" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Maldives</Link>
                            <Link href="/destinations/phuket" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Phuket</Link>
                            <Link href="/destinations" className="py-1 text-pml-primary text-sm font-semibold hover:text-pml-primary/80">All our destinations</Link>
                          </div>
                        </div>
                      </div>
                    </MegaMenu>
                  </li>

                  <li className="relative group w-full xl:w-auto" onMouseEnter={() => handleMouseEnter('support')} onMouseLeave={handleMouseLeave}>
                    <button onClick={() => toggleDropdown('support')} className="flex items-center justify-center xl:justify-start py-2 px-3 gap-1 w-full xl:w-auto cursor-pointer bg-transparent border-none hover:text-pml-primary transition-colors">
                      <span className="font-['Montserrat'] font-medium text-base text-[#4C4C4C]">Support</span>
                      <svg className={`w-4 h-4 text-[#595858] transition-transform duration-300 ${openDropdown === 'support' ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3.0624 5.93937L7.43052 11.0369C7.50093 11.119 7.58827 11.1849 7.68655 11.2301C7.78483 11.2753 7.89173 11.2987 7.9999 11.2987C8.10807 11.2987 8.21497 11.2753 8.31325 11.2301C8.41153 11.1849 8.49887 11.119 8.56927 11.0369L12.9374 5.93937C13.3543 5.45281 13.0086 4.70125 12.368 4.70125H3.63053C2.9899 4.70125 2.64428 5.45281 3.0624 5.93937Z" fill="#595858" />
                      </svg>
                    </button>
                    
                    <MegaMenu isOpen={openDropdown === 'support'}>
                      <div className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:justify-between w-full xl:gap-0">
                        {/* Help & Support */}
                        <div className="xl:flex-[0_0_32%] xl:border-r xl:border-pml-border xl:pr-6">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858]">Help & Support</p>
                          <div className="flex flex-col gap-1">
                            <Link href="/support/travel-advice" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Latest Travel Advice</Link>
                            <Link href="/support/contact-us" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Contact Us</Link>
                            <Link href="/support/faqs" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Frequently Asked Questions</Link>
                            <Link href="/support/group-bookings" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Group Bookings</Link>
                            <Link href="/support/changes" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Changes to Bookings</Link>
                            <Link href="/support/payments" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Payment Options</Link>
                          </div>
                        </div>

                        {/* Useful Links */}
                        <div className="xl:flex-[0_0_32%] xl:pl-6">
                          <p className="text-[0.95rem] font-bold mb-3 text-[#595858]">Useful Links</p>
                          <div className="flex flex-col gap-1">
                            <Link href="/support/about-us" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">About Us</Link>
                            <Link href="/brochure" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Download our Brochure</Link>
                            <Link href="/support/reviews" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Feedback & Reviews</Link>
                            <Link href="/suppliers" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Become a PlanMyLuxe Supplier</Link>
                            <Link href="/careers" className="py-1 text-pml-primary text-sm hover:text-pml-primary/80">Interesting in Work for Us</Link>
                          </div>
                        </div>

                        {/* Image Card - Desktop only */}
                        <div className="hidden xl:flex xl:flex-[0_0_36%] items-center justify-end">
                          <ImageCard
                            href="/brochure"
                            imageSrc="/assets/images/menu-image-3.png"
                            text="Download our latest brochure"
                            alt="Download our latest brochure"
                          />
                        </div>
                      </div>
                    </MegaMenu>
                  </li>
                </ul>
                <div className="mt-4 xl:mt-0 border-t xl:border-t-0 pt-4 xl:pt-0">
                  <a href="tel:02037400744" className="flex items-center justify-center xl:justify-start gap-2 py-2 hover:opacity-80 transition-opacity">
                    <Phone className="w-5 h-5 text-pml-primary" />
                    <span className="font-['Montserrat'] font-semibold text-lg text-pml-primary">020 3740 0744</span>
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
