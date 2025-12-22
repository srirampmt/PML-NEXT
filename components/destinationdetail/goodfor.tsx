"use client";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#4C4C4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface GoodForItem {
  title: string;
  description: string;
}

const goodForItems: GoodForItem[] = [
  {
    title: "Golden beaches",
    description: "Soft sands clear waters and beautiful coastal settings"
  },
  {
    title: "Stylish resorts",
    description: "Within its staunch fortifications, Handpicked four and five star stays with brilliant value"
  },
  {
    title: "Island charm",
    description: "Vibrant towns scenic views and warm Mediterranean energy"
  },
  {
    title: "Great value",
    description: "Exclusive offers upgrades and added touches every week"
  }
];

export default function GoodFor() {
  return (
    <section className="w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] relative bg-white font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] ">
        <div className="w-full max-w-[1280px] mx-auto bg-[#FBE3F1] rounded-[8px] p-6 ">
          {/* Title */}
          <h2 className="text-[#1a1a1a] text-[16px] md:text-[24px] lg:text-[24px] font-bold md:font-semibold mb-2 md:mb-4 leading-[32px]">
            [Destination] - Perfect for
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {goodForItems.map((item, index) => (
                <div key={index} className="space-y-3">
                    {/* Title with check icon */}
                    <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                            <CheckIcon />
                        </div>
                        <h3 className="text-[#1a1a1a] text-[16px] md:text-[18px] font-semibold leading-tight">
                            {item.title}
                        </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#4c4c4c] text-[14px] md:text-[15px] leading-relaxed">
                        {item.description}
                    </p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}