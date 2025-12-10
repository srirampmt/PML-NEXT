"use client";

interface HotelBannerProps {
  location: string;
  title: string;
  subtitle: string;
  priceLabel?: string; // e.g., "Price starting from"
  price?: string; // e.g., "£199"
  ctaText?: string; // e.g., "View Options"
  images: string[]; // [large, right-top, right-bottom]
  badgeText?: string; // e.g., "Prices include FREE Attraction Entry"
}

export default function HotelBanner({
  location,
  title,
  subtitle,
  priceLabel = "Price starting from",
  price = "£199",
  ctaText = "View Options",
  images,
  badgeText = "Prices include FREE Attraction Entry",
}: HotelBannerProps) {
  const largeImage = images?.[0];
  const rightTopImage = images?.[1];
  const rightBottomImage = images?.[2];

  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-[20px] md:py-[30px]">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            {/* Left: Location + Title + Subtitle */}
            <div className="flex-1">
              <div className="text-[#4c4c4c] text-[12px] md:text-[13px] font-semibold tracking-[1px] uppercase mb-2">
                {location}
              </div>
              <h1 className="text-[#CB2187] text-[22px] md:text-[28px] lg:text-[34px] xl:text-[38px] font-bold leading-[1.25] mb-2">
                {title}
              </h1>
              <p className="text-[#4c4c4c] text-[13px] md:text-[14px] lg:text-[15px] font-normal leading-[1.6]">
                {subtitle}
              </p>
            </div>

            {/* Right: Price + CTA */}
            <div className="flex-shrink-0 lg:pt-2">
              <div className="flex items-center gap-4">
                <div className="text-[#4c4c4c] text-[12px] md:text-[13px]">
                  <div className="mb-1">{priceLabel}</div>
                  <div className="text-[#CB2187] text-[24px] md:text-[28px] font-bold leading-none">
                    {price} <span className="text-[#4c4c4c] text-[12px] font-normal">pp</span>
                  </div>
                </div>
                <button className="bg-[#CB2187] text-white text-[13px] md:text-[14px] font-semibold px-5 py-2 rounded-[10px]">
                  {ctaText}
                </button>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 items-start">
            {/* Large image with badge */}
            <div className="relative">
              {badgeText && (
                <div className="absolute top-3 left-3 z-10 bg-[#4c4c4c] text-white text-[12px] md:text-[13px] font-regular px-3 py-2 rounded-md flex items-center gap-2 shadow-md border border-white">
                  <span className="inline-block">
                    {/* simple icon */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2014_232005)">
<path d="M12.3887 8.38574H14.2635V12.875H12.3887V8.38574Z" fill="white"/>
<path d="M8.83789 8.38574H10.7129V12.875H8.83789V8.38574Z" fill="white"/>
<path d="M5.28711 8.38574H7.16211V12.875H5.28711V8.38574Z" fill="white"/>
<path d="M1.7373 8.38574H3.61218V12.875H1.7373V8.38574Z" fill="white"/>
<path d="M14.8888 6.97949V6.51074H1.1123V6.97949C1.1123 7.2384 1.32214 7.44824 1.58105 7.44824H14.42C14.6788 7.44824 14.8888 7.2384 14.8888 6.97949Z" fill="white"/>
<path d="M15.5315 13.8125H0.469726C0.210815 13.8125 0.000976562 14.0223 0.000976562 14.2812V15.5312C0.000976562 15.7902 0.210815 16 0.469726 16H15.5315C15.7904 16 16.0002 15.7902 16.0002 15.5312V14.2812C16.0002 14.0223 15.7904 13.8125 15.5315 13.8125Z" fill="white"/>
<path d="M0.468708 5.57324H15.5312C15.7409 5.57324 15.9251 5.43396 15.9822 5.23217C16.0393 5.03039 15.9555 4.81518 15.7769 4.70532L8.24568 0.06958C8.09505 -0.0231933 7.90498 -0.0231933 7.75423 0.06958L0.22298 4.70532C0.0443917 4.8153 -0.0393484 5.03039 0.0177804 5.23217C0.0749093 5.43396 0.259113 5.57324 0.468708 5.57324ZM7.68135 2.75708H8.31868C8.57759 2.75708 8.78743 2.96692 8.78743 3.22583C8.78743 3.48474 8.57759 3.69458 8.31868 3.69458H7.68135C7.42244 3.69458 7.2126 3.48474 7.2126 3.22583C7.2126 2.96692 7.42244 2.75708 7.68135 2.75708Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2014_232005">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

                  </span>
                  {badgeText}
                </div>
              )}
              {largeImage && (
                <img
                  src={largeImage}
                  alt="Hotel main"
                  className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover rounded-xl"
                />
              )}
            </div>

            {/* Right column: two stacked images */}
            <div className="grid grid-rows-2 gap-4">
              {rightTopImage && (
                <img
                  src={rightTopImage}
                  alt="Hotel image"
                  className="w-full h-[180px] sm:h-[200px] md:h-[175px] lg:h-[200px] object-cover rounded-xl"
                />
              )}
              {rightBottomImage && (
                <img
                  src={rightBottomImage}
                  alt="Hotel image"
                  className="w-full h-[180px] sm:h-[200px] md:h-[175px] lg:h-[200px] object-cover rounded-xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
