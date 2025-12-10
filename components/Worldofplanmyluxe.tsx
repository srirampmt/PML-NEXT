"use client";

export default function Worldofplanmylux() {
  const destinations = [
    { col1: "Bali, Indonesia", col2: "New York", col3: "Boston", col4: "Houston" },
    { col1: "Santorini, Greece", col2: "Los Angeles", col3: "Denver", col4: "Atlanta" },
    { col1: "Tokyo, Japan", col2: "Chicago", col3: "Orlando", col4: "San Diego" },
    { col1: "Machu Picchu, Peru", col2: "Miami", col3: "Philadelphia", col4: "Las Vegas" },
    { col1: "Cape Town, South Africa", col2: "San Francisco", col3: "Phoenix", col4: "Washington D.C." },
    { col1: "Reykjavik, Iceland", col2: "Seattle", col3: "Portland", col4: "Nashville" },
    { col1: "Queenstown, New Zealand", col2: "Austin", col3: "Dallas", col4: "Salt Lake City" },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-10 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#C8105B] mb-4">
            Discover the World of PlanMyLuxe
          </h2>
          <p className="text-[#4c4c4c] text-[16px] md:text-[18px] font-normal max-w-3xl mx-auto">
            We have an ever growing range of destinations for the discerning traveller
          </p>
        </div>

        {/* Destinations Grid - Desktop: 4 columns, Mobile/Tablet: Horizontal scroll */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4 lg:text-center">
          {/* Desktop Version - 4 Column Grid */}
          <div className="hidden lg:contents">
            {destinations.map((row, idx) => (
              <>
                <a
                  key={`${idx}-1`}
                  href="#"
                  className="text-[#C8105B] text-[16px] md:text-[18px] font-medium hover:underline transition-all"
                >
                  {row.col1}
                </a>
                <a
                  key={`${idx}-2`}
                  href="#"
                  className="text-[#C8105B] text-[16px] md:text-[18px] font-medium hover:underline transition-all"
                >
                  {row.col2}
                </a>
                <a
                  key={`${idx}-3`}
                  href="#"
                  className="text-[#C8105B] text-[16px] md:text-[18px] font-medium hover:underline transition-all"
                >
                  {row.col3}
                </a>
                <a
                  key={`${idx}-4`}
                  href="#"
                  className="text-[#C8105B] text-[16px] md:text-[18px] font-medium hover:underline transition-all"
                >
                  {row.col4}
                </a>
              </>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Version - Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto -mx-4 px-4">
          <div className="flex gap-6 pb-4">
            <div className="flex flex-col gap-4 min-w-max">
              {destinations.map((row, idx) => (
                <a
                  key={`${idx}-1`}
                  href="#"
                  className="text-[#C8105B] text-[16px] font-medium hover:underline transition-all whitespace-nowrap"
                >
                  {row.col1}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 min-w-max">
              {destinations.map((row, idx) => (
                <a
                  key={`${idx}-2`}
                  href="#"
                  className="text-[#C8105B] text-[16px] font-medium hover:underline transition-all whitespace-nowrap"
                >
                  {row.col2}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 min-w-max">
              {destinations.map((row, idx) => (
                <a
                  key={`${idx}-3`}
                  href="#"
                  className="text-[#C8105B] text-[16px] font-medium hover:underline transition-all whitespace-nowrap"
                >
                  {row.col3}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 min-w-max">
              {destinations.map((row, idx) => (
                <a
                  key={`${idx}-4`}
                  href="#"
                  className="text-[#C8105B] text-[16px] font-medium hover:underline transition-all whitespace-nowrap"
                >
                  {row.col4}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}