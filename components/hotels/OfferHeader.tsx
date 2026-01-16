import React from "react";

interface OfferHeaderProps {
  location?: string;
  hotelName?: string;
  rating?: number;
  description?: string;
  badges?: string[];
}

const StarRating = ({ rating = 5 }: { rating: number }) => {
  const stars = Array(5)
    .fill(null)
    .map((_, i) => (
      <span
        key={i}
        className={`text-xl ${i < rating ? "text-[#595858]" : "text-gray-500"}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_3173)">
            <path
              d="M16 6.18179L10.1863 5.79957L7.99681 0.299072L5.80734 5.79957L0 6.18179L4.45419 9.96385L2.99256 15.701L7.99681 12.5379L13.0011 15.701L11.5395 9.96385L16 6.18179Z"
              fill="#595858"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_3173">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    ));
  return <div className="flex space-x-0.5">{stars}</div>;
};

export default function OfferHeader({
  location,
  hotelName,
  rating,
  description,
  badges,
}: OfferHeaderProps) {
  if (!location && !hotelName && typeof rating !== "number" && !description && !badges?.length) return null;

  return (
    <div className="max-w-3xl text-[#595858] font-['Montserrat']">
      {!!badges?.length && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, index) => (
            <div
              key={`${badge}-${index}`}
              className={`text-[12px] leading-[140%] p-[8px] flex items-center gap-1 font-semibold ${
                index === 0 ? "bg-[#CB2187] text-white" : "bg-[#E8E5E5] text-[#595858]"
              }`}
            >
              {badge}
            </div>
          ))}
        </div>
      )}

      {!!location && (
        <div className="flex items-center gap-1 text-[14px] text-[#4C4C4C] leading-[22px] tracking-[0.01em] font-normal mb-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66668 0C2.09352 0 0 2.09352 0 4.66668C0 5.43914 0.193129 6.20504 0.560273 6.88436L4.41148 13.8496C4.46275 13.9425 4.56045 14 4.66668 14C4.77291 14 4.87061 13.9425 4.92188 13.8496L8.7745 6.88207C9.14022 6.20504 9.33335 5.43911 9.33335 4.66665C9.33335 2.09352 7.23983 0 4.66668 0ZM4.66668 7C3.3801 7 2.33335 5.95325 2.33335 4.66668C2.33335 3.3801 3.3801 2.33335 4.66668 2.33335C5.95325 2.33335 7 3.3801 7 4.66668C7 5.95325 5.95325 7 4.66668 7Z"
              fill="#595858"
            />
          </svg>
          {location}
        </div>
      )}

      {!!hotelName && (
        <h1 className="text-[16px] md:text-[24px] font-semibold leading-[32px] mb-1">
          {hotelName}
        </h1>
      )}

      {typeof rating === "number" && <StarRating rating={rating} />}

      {!!description && (
        <p className="text-[14px] md:text-[16px] font-medium leading-[24px] mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
