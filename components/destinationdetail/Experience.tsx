"use client";

import { useState } from "react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] relative bg-white py-8 md:py-16 lg:py-20 font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Right Column - Brochure Card (shown first on mobile/tablet) */}
          <div className="lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full lg:w-[325px]">
              {/* Card Container */}
              <div className="relative rounded-[8px] overflow-hidden shadow-xl">
                {/* Background Image */}
                <img
                  src="/assets/images/brochure.png"
                  alt="Summer Collection"
                  className="w-full lg:w-[325px] h-auto lg:h-[459px] object-cover"
                />
              </div>
              
              {/* Bottom Content - Outside Image */}
              <div className="text-start mt-2 md:mt-3">
                <h4 className="text-pml-primary text-[18px] md:text-[22px] lg:text-[24px] font-bold mb-2">
                  Summer 2026 Collection
                </h4>
                <a
                  href="#"
                  className="text-[#4c4c4c] text-[16px] font-normal underline hover:text-[#C8105B] transition-colors tracking-[0.01em]"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>

          {/* Left Column - Text Content (2 parts, shown second on mobile/tablet) */}
          <div className="lg:col-span-2 lg:order-1 space-y-6 ">
            {/* Title */}
            <h2 className="text-[#4c4c4c] text-[28px] md:text-[48px] lg:text-[48px] font-semibold leading-[30px] md:leading-[60px] max-w-[626px]">
              Experience the best of Mallorca
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[#4C4C4C] text-[16px] md:text-[18px] lg:text-[18px] leading-[28px]">
              Mallorca is an island that blends everything you want from a Mediterranean escape, from golden beaches and clear blue waters to charming coastal towns and stylish resorts offering exceptional value. The island has a natural warmth and beauty that makes every day feel relaxed and inviting, with sun soaked moments and scenic views wherever you wander.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#4C4C4C] text-[16px] md:text-[18px] lg:text-[18px] leading-[28px] hidden md:block">
              From peaceful coves on the east coast to the livelier stretches of the south, Mallorca offers a holiday style for every traveller. Explore historic Palma, enjoy gentle coastal walks, or unwind on soft sands as the Balearic sunshine brightens your day.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[#4C4C4C] text-[16px] md:text-[18px] lg:text-[18px] leading-[28px] hidden md:block">
              Our handpicked Mallorca hotels combine comfort, style, and brilliant value, with added extras and exclusive offers prepared each week by our travel experts. With so much to explore and enjoy, Mallorca remains one of the most accessible and rewarding destinations in the Mediterranean.
            </p>

            {/* Read More Section (Mobile Only) */}
            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="md:hidden text-pml-primary text-[14px] font-semibold underline hover:text-[#a01a6e] transition-colors"
              >
                Read More
              </button>
            )}

            {/* Expanded Content (Mobile) */}
            {isExpanded && (
              <div className="md:hidden space-y-6">
                <p className="text-[#4C4C4C] text-[16px] md:text-[18px] lg:text-[18px] leading-[28px]">
                  From peaceful coves on the east coast to the livelier stretches of the south, Mallorca offers a holiday style for every traveller. Explore historic Palma, enjoy gentle coastal walks, or unwind on soft sands as the Balearic sunshine brightens your day.
                </p>

                <p className="text-[#4C4C4C] text-[16px] md:text-[18px] lg:text-[18px] leading-[28px]">
                  Our handpicked Mallorca hotels combine comfort, style, and brilliant value, with added extras and exclusive offers prepared each week by our travel experts. With so much to explore and enjoy, Mallorca remains one of the most accessible and rewarding destinations in the Mediterranean.
                </p>

                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-pml-primary text-[14px] font-semibold underline hover:text-[#a01a6e] transition-colors"
                >
                  Read Less
                </button>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}