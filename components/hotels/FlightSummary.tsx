import { Plane, Utensils, Briefcase, Bus } from "lucide-react";

interface FlightDetails {
  flightNumber: string;
  departureCode: string;
  arrivalCode: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
}

interface HolidaySummaryProps {
  nights: number;
  outboundFlight: FlightDetails;
  inboundFlight: FlightDetails;
  isAllInclusive?: boolean;
  includes?: string[];
  transfers?: boolean;
  pricePerPerson: string;
  quoteRef: string;
  ctaText?: string;
  atolProtected?: boolean;
  onBookNow?: () => void;
}

// Renamed the export to match the primary function/file purpose for better React convention
export default function HolidaySummary({
  nights,
  outboundFlight,
  inboundFlight,
  isAllInclusive = true,
  includes = ["Hand luggage for each passenger"],
  transfers = false,
  pricePerPerson,
  quoteRef,
  ctaText = "Book Now",
  atolProtected = true,
  onBookNow,
}: HolidaySummaryProps) {
  return (
    // 1. RESPONSIVENESS CHANGE:
    // Remove fixed max-width for small screens (w-full).
    // Apply max-w-[405px] only on medium screens (md) and up,
    // simulating its use as a sidebar or fixed-width element on desktop/tablet.
    <div className="w-full md:max-w-[405px] h-fit bg-[#FFF7FC] rounded-none md:rounded-[5px] shadow-lg overflow-hidden sm:sticky">
      {/* Header - Changed gradient to pink theme for better visual consistency */}
      <div className="bg-[#595858] text-white px-5 py-4">
        {/* 2. FONT SIZE ADJUSTMENT: Ensure responsive font size on header */}
        <h2 className="text-xl sm:text-2xl font-semibold">Holiday Summary</h2>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Duration */}
        <div className="mb-6">
          <div className="text-gray-600 text-sm mb-1">
            Total Holiday Duration
          </div>
          {/* 2. FONT SIZE ADJUSTMENT: Smaller on mobile, larger on larger screens */}
          <div className="text-2xl sm:text-3xl font-bold text-gray-800">
            {nights} nights
          </div>
        </div>

        <div className="border-t border-gray-200 mb-6"></div>

        {/* Outbound Flight */}
        <div className="mb-5">
          <div className="flex items-start gap-3 mb-3">
            <Plane className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-2">
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Outbound flight:
                </span>
                <span className="text-sm text-gray-600">
                  {outboundFlight.flightNumber}
                </span>
              </div>
              {/* FLIGHT DETAILS LAYOUT: Use smaller font for time/date on mobile */}
              <div className="flex justify-between items-start text-sm sm:text-base">
                <div>
                  <div className="font-bold text-gray-800">
                    {outboundFlight.departureCode}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {outboundFlight.departureDate},{" "}
                    {outboundFlight.departureTime}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">
                    {outboundFlight.arrivalCode}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {outboundFlight.arrivalDate}, {outboundFlight.arrivalTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inbound Flight */}
        <div className="mb-5">
          <div className="flex items-start gap-3 mb-3">
            {/* Added flex-shrink-0 to keep the icon from squishing */}
            <Plane className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5 transform rotate-180" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-2">
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Inbound flight:
                </span>
                <span className="text-sm text-gray-600">
                  {inboundFlight.flightNumber}
                </span>
              </div>
              {/* FLIGHT DETAILS LAYOUT: Use smaller font for time/date on mobile */}
              <div className="flex justify-between items-start text-sm sm:text-base">
                <div>
                  <div className="font-bold text-gray-800">
                    {inboundFlight.departureCode}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {inboundFlight.departureDate}, {inboundFlight.departureTime}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">
                    {inboundFlight.arrivalCode}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {inboundFlight.arrivalDate}, {inboundFlight.arrivalTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Inclusive Badge */}
        {isAllInclusive && (
          <div className="flex items-center gap-2 mb-4">
            <Utensils className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 text-sm sm:text-base">
              All Inclusive
            </span>
          </div>
        )}

        <div className="border-t border-gray-200 mb-5"></div>

        {/* Includes/Transfers */}
        <div className="space-y-3 mb-6">
          {includes.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
          <div className="flex items-start gap-3">
            <Bus className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">
              Transfers {transfers ? "included" : "not included"}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 mb-5"></div>

        {/* Price */}
        {/* PRICE LAYOUT: Ensure price is legible on small screens. Reduced price text size slightly. */}
        <div className="text-sm text-gray-600 mb-5 flex justify-between items-center">
          <span>
            Price Per Person From
            <br />
            <span className="text-xs sm:text-sm">(incl. Flights)</span>
          </span>
          <div className="text-3xl sm:text-4xl font-bold text-gray-800">
            {pricePerPerson}
          </div>
        </div>

        {/* Quote Reference */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-600">Quote Ref:</span>
          <span className="text-sm font-bold text-gray-800">{quoteRef}</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={onBookNow}
          className="w-full bg-[#CB2187] hover:bg-pink-800 text-white font-semibold py-3 sm:py-2.5 rounded-xl transition-all duration-200 text-base sm:text-lg shadow-md"
        >
          {ctaText}
        </button>

        {/* ATOL Protection */}
        {atolProtected && (
          <div className="flex justify-center p-3 items-center gap-3 mt-3 bg-white rounded-lg border border-gray-100">
            {/* ATOL icon SVG remains the same size for branding consistency */}
            <svg
              width="35"
              height="35"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9637 20.4457C24.9637 20.4457 20.8552 20.394 18.8156 16.3305C15.9963 10.7167 21.8587 7.69946 21.8587 7.69946L27.063 8.62534L24.9637 20.4457Z"
                fill="#393939"
              />
              <path
                d="M15.0952 34.4543C6.01537 32.8534 -0.0686341 24.165 1.53112 15.0885C3.13312 6.01317 11.8226 -0.0697038 20.9036 1.53117C29.9824 3.13205 36.0664 11.8182 34.4666 20.8958C32.8657 29.9712 24.1751 36.0552 15.0952 34.4543ZM0.395991 14.8905C-1.31401 24.5925 5.18962 33.8783 14.8961 35.5905C24.6037 37.3005 33.8929 31.1884 35.6051 21.4853C35.7874 20.4413 35.8785 19.0114 35.8785 17.9843C35.8785 9.48042 29.7664 1.9238 21.105 0.397171C11.3985 -1.31508 2.10824 5.18742 0.395991 14.8905Z"
                fill="#393939"
              />
              <path
                d="M4.60056 21.5595C4.63769 21.6765 4.67594 21.7969 4.73444 21.9015C4.92569 22.2233 5.26544 22.2694 5.59169 22.1805C6.02144 22.0624 6.24419 21.7665 6.16769 21.4887L6.07769 21.1557L4.60056 21.5595ZM2.69594 22.0804C2.67006 21.942 2.64981 21.8059 2.61269 21.6709C2.57669 21.537 2.52381 21.4077 2.47656 21.2772L6.14744 20.2748L6.50631 21.591C6.70994 22.3347 6.51981 22.8173 5.91456 22.9838C4.96169 23.2437 4.56794 22.6035 4.30581 21.6394L2.69594 22.0793V22.0804Z"
                fill="#393939"
              />
              <path
                d="M5.92983 24.858C6.17845 25.389 6.5632 25.497 7.05483 25.2078C7.12345 25.1685 7.19095 25.1212 7.28095 25.0413C7.63308 24.7331 7.38445 24.3967 7.21233 24.1031L5.92983 24.8568V24.858ZM7.05033 23.2357L7.64883 24.255C7.78158 24.4811 7.9942 24.8231 8.0077 25.0863C8.02345 25.4418 7.89295 25.713 7.5667 25.9031C7.0987 26.1798 6.62508 26.0527 6.26845 25.6623C5.96358 26.1967 5.69808 26.7502 5.4202 27.2992L5.23233 27.6581C5.15808 27.5096 5.08833 27.3588 5.00283 27.2103C4.91845 27.0663 4.81945 26.9313 4.72608 26.7918L5.39658 25.6331C5.4832 25.4857 5.62495 25.2236 5.74533 25.0098L5.72508 24.9783L4.18945 25.8806C4.1287 25.7546 4.07245 25.6275 4.0027 25.5071C3.93183 25.3878 3.84633 25.2776 3.76758 25.1628L7.0492 23.2368L7.05033 23.2357Z"
                fill="#393939"
              />
              <path
                d="M7.9344 28.1137C7.45965 28.656 7.20203 29.4468 7.82865 29.9958C8.47103 30.5595 9.32153 30.168 9.92903 29.4761C10.3993 28.9372 10.6895 28.1013 10.064 27.5512C9.48353 27.0438 8.7534 27.1777 7.9344 28.1137ZM7.58678 30.2276C6.6654 29.4198 6.51803 28.3342 7.34828 27.3858C8.07503 26.5556 9.26865 26.4127 10.3082 27.324C11.4984 28.3646 11.1148 29.511 10.5523 30.1623C9.84353 30.9791 8.61053 31.1253 7.58678 30.2276Z"
                fill="#393939"
              />
              <path
                d="M12.2374 33.0177C12.1147 32.9524 11.9944 32.8816 11.8672 32.8276C11.739 32.7702 11.6062 32.7308 11.4746 32.6869L12.8291 29.5561C12.468 29.3997 12.1316 29.2973 11.8515 29.2186C11.892 29.1499 11.9381 29.0858 11.9707 29.0104C12.0022 28.9373 12.018 28.8619 12.0394 28.7843L14.6606 29.9183C14.619 29.9858 14.574 30.0511 14.5425 30.1231C14.5087 30.1984 14.4941 30.2783 14.4739 30.3514C14.1892 30.1861 13.9035 30.0218 13.5941 29.8868L12.2385 33.0188L12.2374 33.0177Z"
                fill="#393939"
              />
              <path
                d="M17.3062 30.3783C17.2814 30.4515 17.2522 30.5313 17.2387 30.609C17.2252 30.6866 17.2274 30.771 17.2252 30.8475C16.8978 30.7473 16.5333 30.6405 15.9742 30.5572L15.7751 31.7328L16.3432 31.8296C16.5896 31.8712 16.8168 31.8881 17.0238 31.8937C17.0002 31.9691 16.9698 32.049 16.9563 32.1232C16.9428 32.2008 16.9462 32.2863 16.9428 32.364C16.7459 32.3021 16.5254 32.2425 16.2791 32.2008L15.7109 32.1041L15.4758 33.4923C16.0338 33.5801 16.4107 33.6172 16.7504 33.6296C16.7268 33.705 16.6964 33.7848 16.6829 33.8613C16.6694 33.9367 16.6728 34.0211 16.6694 34.101L14.5859 33.7466L15.2193 30.0228L17.3028 30.3761L17.3062 30.3783Z"
                fill="#393939"
              />
              <path
                d="M21.2792 33.2943L21.2038 33.7803C20.8899 33.984 20.504 34.0897 20.1339 34.1246C18.9504 34.2382 17.9874 33.5958 17.8772 32.4663C17.7377 31.023 18.668 30.2715 19.8695 30.1533C20.2352 30.1196 20.6863 30.1691 21.0227 30.3153C20.9923 30.5066 20.9765 30.699 20.9529 30.897L20.8742 30.9037C20.6402 30.6258 20.2667 30.4492 19.9089 30.4852C18.992 30.5741 18.7063 31.4876 18.785 32.301C18.8762 33.2448 19.4049 33.8613 20.2543 33.7781C20.5985 33.7466 20.9777 33.5295 21.2027 33.2685L21.2792 33.2943Z"
                fill="#393939"
              />
              <path
                d="M24.1571 32.5462C24.0255 32.5856 23.8916 32.6205 23.7645 32.6711C23.6373 32.7217 23.5158 32.7881 23.391 32.8477L22.1602 29.7067C21.7968 29.8485 21.4886 30.0116 21.2377 30.1511C21.2197 30.0757 21.2051 29.997 21.1758 29.9205C21.1488 29.8496 21.1061 29.7843 21.0645 29.7157L23.6958 28.6841C23.7127 28.7595 23.7273 28.836 23.7543 28.908C23.7836 28.9856 23.8286 29.0508 23.8668 29.1161C23.5507 29.1993 23.2357 29.2803 22.9252 29.403L24.156 32.5451L24.1571 32.5462Z"
                fill="#393939"
              />
              <path
                d="M25.8741 27.1631C25.9101 27.2317 25.9461 27.3094 25.9877 27.3701C26.0316 27.4331 26.0946 27.4916 26.1452 27.5479C25.8471 27.7042 25.5174 27.8842 25.0674 28.215L25.7458 29.1791L26.2116 28.8506C26.4118 28.7077 26.5839 28.5604 26.7347 28.4209C26.7696 28.4895 26.8044 28.566 26.8483 28.629C26.8922 28.692 26.9529 28.7482 27.0069 28.8056C26.8247 28.9001 26.6267 29.0115 26.4276 29.1544L25.9607 29.484L26.7639 30.6225C27.2184 30.2951 27.5053 30.0577 27.7551 29.8271C27.7911 29.898 27.8237 29.9745 27.8687 30.0352C27.9137 30.0994 27.9744 30.1567 28.0262 30.2141L26.3184 31.4179L24.1641 28.3669L25.8718 27.162L25.8741 27.1631Z"
                fill="#393939"
              />
              <path
                d="M29.6127 28.2274L29.9007 27.8607C30.3698 27.2667 30.4305 26.5815 29.4225 25.7839C28.6125 25.1438 27.9927 25.2743 27.5123 25.8818L27.1782 26.3037L29.6115 28.2263L29.6127 28.2274ZM27.582 25.281C28.3459 24.3867 29.2853 24.5149 29.9929 25.074C30.9649 25.8435 31.0009 26.9832 30.3034 27.864L29.3517 29.07L26.4199 26.7514L27.582 25.281Z"
                fill="#393939"
              />
              <path
                d="M11.9131 21.978L12.8018 22.1366L12.4891 21.3649L11.9131 21.978Z"
                fill="#393939"
              />
              <path
                d="M16.692 18.2993C13.2641 14.7195 13.2371 10.4659 15.3881 6.57451L12.5328 6.06714L9.3457 24.1571L23.8492 26.7098L24.8088 21.3053C24.8088 21.3041 20.121 21.879 16.6908 18.3004L16.692 18.2993ZM13.1111 22.878L12.9513 22.4775L11.6587 22.2469L11.3583 22.5664L10.5933 22.4314L12.1537 20.889L12.9795 21.0341L13.9042 23.0186L13.1111 22.878ZM17.1431 22.0973L16.0968 21.9128L15.8392 23.3629L15.1046 23.2324L15.3622 21.7811L14.3115 21.5933L14.3677 21.2816L17.1982 21.7845L17.1431 22.0973ZM20.6835 23.3168C20.6272 23.6329 20.409 23.8444 20.0253 23.9501C19.7373 24.0413 19.3447 24.0413 18.8441 23.9535C18.3446 23.8646 17.9756 23.7296 17.736 23.544C17.4131 23.3145 17.2781 23.04 17.3332 22.7216C17.3906 22.3999 17.6122 22.1873 17.9947 22.0894C18.2838 21.9983 18.6776 21.9983 19.176 22.086C19.6743 22.1738 20.0467 22.3121 20.2852 22.4955C20.6081 22.7194 20.7397 22.9939 20.6835 23.3168ZM23.4015 24.705L20.94 24.2663L21.255 22.5034L21.984 22.6328L21.7263 24.0806L23.4566 24.3878L23.4015 24.7061V24.705Z"
                fill="#393939"
              />
              <path
                d="M19.1199 22.3987C18.8319 22.347 18.59 22.3605 18.3988 22.437C18.2075 22.5135 18.0928 22.6518 18.059 22.8498C18.023 23.0501 18.0826 23.2177 18.2356 23.3561C18.3886 23.4945 18.6091 23.589 18.8994 23.6418C19.1874 23.6925 19.4281 23.679 19.6171 23.6013C19.8073 23.5226 19.9186 23.3853 19.9535 23.1873C19.9884 22.9893 19.931 22.8206 19.7803 22.6822C19.6295 22.5438 19.4101 22.4482 19.1199 22.3987Z"
                fill="#393939"
              />
            </svg>
            <p className="text-sm sm:text-base text-gray-700">
              All holidays are ATOL protected!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
