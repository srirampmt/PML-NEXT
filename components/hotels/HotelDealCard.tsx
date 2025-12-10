"use client";

interface HotelDealCardProps {
  price: string;
  nights?: number;
}

export default function HotelDealCard({ price, nights = 7 }: HotelDealCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#f0f0f0] p-4">
      <p className="text-[#4c4c4c] text-sm">{nights} nights from <span className="text-base font-bold text-[#CB2187]">{price}</span> per person</p>
    </div>
  );
}
