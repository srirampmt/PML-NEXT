import {
  MapPin,
  Utensils,
  Clock,
  Check,
  Phone,
  MessageSquare,
  Send,
  Dot,
} from "lucide-react";

// --- INTERFACES ---

interface ContactInfo {
  phoneNumber: string;
  isAvailable24_7: boolean;
  limitedAvailabilityMessage: string;
}

interface HolidayDealCardProps {
  badges: string[];
  location: string;
  hotelName: string;
  rating: number; // Max 5
  description: string;
  aboutDeal: string;
  inclusions: string[];
  whyWeLoveIt: string[];
  contact: ContactInfo;
  ctaText?: string;
}

// --- HELPER COMPONENT ---

const StarRating = ({ rating = 5 }: { rating: number }) => {
  const stars = Array(5)
    .fill(null)
    .map((_, i) => (
      <span
        key={i}
        className={`text-xl ${i < rating ? "text-[#CB2187]" : "text-gray-500"}`}
      >
        ★
      </span>
    ));
  return <div className="flex space-x-0.5">{stars}</div>;
};

// --- MAIN COMPONENT ---

export default function HolidayDealCard({
  badges,
  location,
  hotelName,
  rating,
  description,
  aboutDeal,
  inclusions,
  whyWeLoveIt,
  contact,
  ctaText = "Read more",
}: HolidayDealCardProps) {
  return (
    <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto rounded-none text-[#595858]">
      {/* --- Top Badges & Header --- */}
      <div className="flex flex-wrap gap-2 mb-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={` text-xs px-3 py-2  flex items-center gap-1 ${
              index === 0 ? "bg-[#CB2187] text-white" : "bg-gray-300"
            }`}
          >
            {badge}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-400 mb-1">
          <MapPin className="w-4 h-4 mr-1 text-[#CB2187]" />
          {location}
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold mb-1">{hotelName}</h1>
        <StarRating rating={rating} />

        <p className="  text-sm mt-3 leading-relaxed">{description}</p>
      </div>

      {/* --- About The Deal Section --- */}
      <div className="mb-8 ">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#CB2187] mb-3">
          About The Deal
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">{aboutDeal}</p>
      </div>

      {/* --- What\'s Included Section --- */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">What&apos;s Included</h3>
        <ul className="space-y-2 text-sm  ">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-center">
              <Dot size={15} />
              {item}
            </li>
          ))}
        </ul>
        <button className="text-sm text-[#CB2187] font-semibold mt-3 hover:underline">
          {ctaText}
        </button>
      </div>

      {/* --- Why we love this hotel Section --- */}
      <div className="mb-10">
        <h3 className="text-lg text-[#CB2187] font-semibold mb-3">
          Why we love this hotel
        </h3>
        <ul className="grid grid-cols-1 gap-y-2 gap-x-6 text-sm  ">
          {whyWeLoveIt.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5553 14.4298C5.50166 14.4298 5.44896 14.4158 5.40241 14.3891C5.35587 14.3625 5.3171 14.3241 5.28995 14.2779C4.13982 12.3185 1.07505 8.14831 1.04422 8.10641C1.00043 8.04689 0.979527 7.97359 0.985324 7.89993C0.99112 7.82626 1.02323 7.75715 1.07579 7.70521L2.01789 6.77428C2.06907 6.72371 2.13636 6.69267 2.20805 6.68656C2.27975 6.68046 2.35132 6.69967 2.41032 6.74087L5.49115 8.89213C7.53939 6.26087 9.44284 4.44496 10.6939 3.37499C12.0962 2.17551 12.9878 1.63653 13.0251 1.61407C13.0729 1.58536 13.1276 1.57019 13.1834 1.57019H14.7075C14.7698 1.57018 14.8307 1.58913 14.8821 1.62453C14.9335 1.65993 14.9729 1.7101 14.9951 1.7684C15.0173 1.8267 15.0212 1.89037 15.0064 1.95096C14.9916 2.01156 14.9587 2.06622 14.9121 2.1077C12.6527 4.12001 10.3036 7.31733 8.73093 9.64511C7.0213 12.1754 5.83447 14.2537 5.82268 14.2744C5.79597 14.3213 5.75739 14.3603 5.71081 14.3876C5.66423 14.4149 5.6113 14.4294 5.55733 14.4298L5.5553 14.4298Z"
                  fill="#595858"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* --- Contact / CTA Footer --- */}
      <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Contact Info (Left Side) */}
        <div className="w-[80px] h-[80px] overflow-hidden rounded-md">
          <img
            src="/assets/images/contact.png"
            alt="Contact Icon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-sm ">
          {contact.isAvailable24_7 && (
            <p className=" font-bold mb-2">
              Our team are available 24 hours, 7 days
            </p>
          )}

          {contact.limitedAvailabilityMessage && (
            <p className="text-[#595858]  mb-3">
              {contact.limitedAvailabilityMessage}
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm ">
            {/* Phone CTA */}
            <a
              href={`tel:${contact.phoneNumber.replace(/\s/g, "")}`}
              className="flex items-center font-bold hover:text-[#CB2187] transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              {contact.phoneNumber}
            </a>
            {/* Chat CTA */}
            <button className="flex items-center font-bold hover:text-[#CB2187]  transition-colors">
              <MessageSquare className="w-4 h-4 mr-1" />
              chat online
            </button>
            {/* Whatsapp CTA */}
            <button className="flex items-center font-bold hover:text-[#CB2187]  transition-colors">
              <Send className="w-4 h-4 mr-1" />
              send a whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
