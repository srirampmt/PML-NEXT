"use client";

export default function HotelCalendar() {
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-[20px] md:py-[30px]">
        <div className="w-full max-w-[1280px] mx-auto">
          <h2 className="font-['Montserrat'] text-[#4c4c4c] text-[20px] md:text-[28px] font-semibold mb-3">Availability</h2>
          <div className="border rounded-lg p-4 text-[#4c4c4c]">Calendar widget goes here</div>
        </div>
      </div>
    </section>
  );
}
