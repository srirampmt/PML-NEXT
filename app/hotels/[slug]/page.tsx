"use client";
import FlightSummary from "@/components/hotels/FlightSummary";
import HolidayCalendar from "@/components/hotels/HolidayCalendar";
import HolidayDealCard from "@/components/hotels/HolidayDealCard";
import HotelBanner from "@/components/hotels/HotelBanner";
import HotelDetailsTabs from "@/components/hotels/HotelDetailsTabs";
import ShareOffer from "@/components/hotels/ShareOffer";
import Trustsection from "@/components/Trustsection";

export default function Home() {
  const handleBookNow = () => {
    alert("Booking holiday!");
  };
  const palmDealData = {
    badges: [
      "LIMITED TIME OFFER: ENDS 14/03/24",
      "ULTRA ALL INCLUSIVE",
      "FLEXIBLE DURATIONS",
    ],
    location: "Dubai, UAE",
    hotelName: "Dukes The Palm, a Royal Hideaway Hotel",
    rating: 5,
    description:
      '"Dukes The Palm, a Royal Hideaway Hotel on Palm Jumeirah combines a world of British charm with cosmopolitan grandeur. Guests can relax in the lazy river or participate in a variety of water sports on the beach."',
    aboutDeal:
      "With this deal you can spend a week relaxing on a tropical island surrounded by a vibrant coral reef, complete with a secluded beach villa to retreat to. We couldn't find the hotel alone for less than £900 per person when we researched the offer—so this half-price deal with return flights, speedboat transfers, and meals is packed with value at £1199 per person",
    inclusions: [
      "Return flights, with 20kg checked baggage",
      "Return speedboat transfers",
      "Seven nights at Eriyadu Island Resort Maldives, in a Deluxe Beachfront Villa with Private Walkout Patio",
      "All-Inclusive board, covering all meals, drinks, and snacks",
      "A 30-minute jet lag massage per person, per stay",
      "One sunset cruise per person, per stay",
      "25% off spa treatments",
    ],
    whyWeLoveIt: [
      "Unlimited waterpark entry",
      "TripAdvisor Travellers Choice Award",
      "Luxury resort hotel",
      "First-class facilities",
      "Beachfront location",
      "Free WiFi throughout",
    ],
    contact: {
      phoneNumber: "020 8123 1234",
      isAvailable24_7: true,
      limitedAvailabilityMessage:
        "Hurry this deal has limited availability - call our helpful team now",
    },
    ctaText: "Read more",
  };

  const mockPriceData = [
    // December 2025
    { date: "2025-12-01", price: 1999 },
    { date: "2025-12-02", price: 1999 },
    { date: "2025-12-03", price: 1999 },
    { date: "2025-12-04", price: 1999 },
    { date: "2025-12-05", price: 1999 },
    { date: "2025-12-06", price: 1999 },
    { date: "2025-12-07", price: 1999 },
    { date: "2025-12-08", price: 1999 },
    { date: "2025-12-09", price: 1999 },
    { date: "2025-12-10", price: 1999 },
    { date: "2025-12-11", price: 1999 }, // Selected in image
    { date: "2025-12-12", price: 1999 },
    { date: "2025-12-13", price: 1999 },
    { date: "2025-12-14", price: 1999 },
    { date: "2025-12-15", price: 1999 },
    { date: "2025-12-16", price: 1999 },
    { date: "2025-12-17", price: 1999 },
    { date: "2025-12-18", price: 1999 },
    { date: "2025-12-19", price: 1999 },
    { date: "2025-12-20", price: 1999 }, // Highlighted in image
    { date: "2025-12-21", price: 1999 },
    { date: "2025-12-22", price: 1999 },
    { date: "2025-12-23", price: 1999 },
    { date: "2025-12-24", price: 1999 },
    // ... and so on for other months
  ];
  const airports = ["Any airport", "London (LHR)", "Manchester (MAN)"];
  const boardBases = ["All Inclusive", "Half Board", "Full Board"];
  const durations = ["5 nights", "7 nights", "10 nights", "14 nights"];
  const initialDate = "2025-12-11";
  
  const overviewText = `
The King Evelthon Beach Hotel & Resort is a wonderful beachfront hotel in sunny
Paphos that offers a memorable stay to its guests, nestled closely on the
Chlorakas Bay within lush landscaped grounds. Boasting its very own water park,
kids’ club, spa, and a la carte restaurants, this resort provides world-class
amenities and friendly, unobtrusive hospitality throughout your stay.
`;

  const amenitiesText = `
Guests can enjoy both indoor and outdoor swimming pools, a relaxing spa offering
massages and therapies, fitness facilities, tennis courts, and mini football
fields. Families will love the water park and kids’ club, while adults can unwind
in peaceful lounge areas or by the poolside.
`;

  const foodText = `
The hotel features two main restaurants, including indoor and outdoor seating,
serving a variety of international and regional cuisines prepared with fresh
ingredients. There are also three bars including a terrace bar, pool snack bar,
and a cosy lounge bar.
`;

  const allInclusivePoints = [
    "Breakfast buffet (07:00 – 10:00)",
    "Late breakfast at the continental restaurant (10:00 – 11:00)",
    "Lunch buffet (12:30 – 14:30)",
    "Afternoon tea at the lobby bar (16:30 – 17:30)",
    "Dinner buffet (18:30 – 21:30)",
    "À la carte dinner once per stay (18:30 – 22:00)",
    "Locally produced alcoholic and non-alcoholic drinks at selected bars",
  ];

  const roomsText = `
The well-appointed guest rooms feature parquet flooring, furnished balconies or
terraces with sea or garden views, flat-screen satellite TV, air conditioning,
mini fridge, hairdryer, and complimentary toiletries.
`;

  const locationData = {
    description: `
The hotel is located on the Chlorakas Bay in Paphos Town, just a short distance
from popular tourist attractions and sandy beaches. Paphos International Airport
is approximately 20 minutes away.
  `,
    distances: [
      "Seafront access via steps from rocks",
      "800m from nearest shops, bars and restaurants",
      "3km from the beach",
      "3km from Paphos resort centre",
      "8km from Coral Bay resort centre",
      "Approximate transfer time: 50 minutes",
    ],
    mapEmbedUrl: "https://www.google.com/maps?q=Paphos%20Cyprus&output=embed",
  };

  const facilitiesList = [
    "Rivayat restaurant",
    "Tamimi restaurant",
    "Azur restaurant",
    "Vue bar",
    "The Oberoi Spa",
    "Fitness centre",
    "Yoga studio",
    "Clay tennis court",
    "Swimming pool",
    "Kids’ club",
    "Library",
    "Cooking classes",
    "Shuttle service",
    "Laundry service",
    "Valet parking",
    "Wi-Fi",
    "Check-in: 3pm / Check-out: 12pm",
  ];

  const reviewsData = {
    rating: 4.5,
    total: 4090,
    updatedAt: "01/01/2024",
  };

  const finePrintData = [
    "Prices are per person based on two people sharing and subject to availability.",
    "Prices are correct at time of publishing and may change at any time.",
    "Offers operate on a first come, first served basis.",
    "Optional extras are payable locally unless stated otherwise.",
    "Flight times are confirmed with the final booking documentation.",
    "Premium support package is not included unless stated.",
    "Refunds are processed within 7–10 business days where applicable.",
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <main className="mx-auto bg-white px-4 md:px-10">
        <HotelBanner
          location="DUBAI - THE PALM ISLAND"
          title="Deluxe Dubai Break including meals, drinks, transfers and FREE Excursion"
          subtitle="Exclusive offer to Plan My Luxe - Hurry Limited Seats and Availability - Selling Fast!!!"
          priceLabel="Price starting from"
          price="299"
          ctaText="View Options"
          images={[
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
          badgeText="Prices include FREE Attraction Entry"
        />

        <div className="mx-auto max-w-[1280px] py-[16px] ">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
            {/* Left column */}
            <div className="w-full space-y-6">
              <HolidayDealCard {...palmDealData} />
              <div className="flex gap-2 lg:block justify-between">
                <HolidayCalendar
                  availableAirports={airports}
                  availableBoardBases={boardBases}
                  availableDurations={durations}
                  initialPrices={mockPriceData}
                  initialDepartureDate={initialDate}
                  nights={7}
                />
                <div className="hidden md:block lg:hidden">
                  <FlightSummary
                    nights={14}
                    outboundFlight={{
                      flightNumber: "WIZ/U2 - W95313",
                      departureCode: "LTN",
                      arrivalCode: "HRG",
                      departureDate: "Thu, 15 Jan",
                      departureTime: "08:10",
                      arrivalDate: "Thu, 15 Jan",
                      arrivalTime: "16:35",
                    }}
                    inboundFlight={{
                      flightNumber: "WIZ/U2 - W95313",
                      departureCode: "HRG",
                      arrivalCode: "LTN",
                      departureDate: "Thu, 15 Jan",
                      departureTime: "08:10",
                      arrivalDate: "Thu, 15 Jan",
                      arrivalTime: "16:35",
                    }}
                    isAllInclusive={true}
                    includes={["Hand luggage for each passenger"]}
                    transfers={false}
                    pricePerPerson="£4,099"
                    quoteRef="ABC123456"
                    ctaText="Book Now"
                    atolProtected={true}
                    onBookNow={handleBookNow}
                  />
                </div>
              </div>
            </div>

            {/* Right column - remove items-start from grid, add it here */}
            <aside className="w-full block md:hidden lg:block">
              <ShareOffer
                copyText="https://planmyluxe.com/offers/paphos-holiday"
                className="hidden md:flex"
              />
              <div className="lg:sticky lg:top-24 space-y-4">
                <FlightSummary
                  nights={14}
                  outboundFlight={{
                    flightNumber: "WIZ/U2 - W95313",
                    departureCode: "LTN",
                    arrivalCode: "HRG",
                    departureDate: "Thu, 15 Jan",
                    departureTime: "08:10",
                    arrivalDate: "Thu, 15 Jan",
                    arrivalTime: "16:35",
                  }}
                  inboundFlight={{
                    flightNumber: "WIZ/U2 - W95313",
                    departureCode: "HRG",
                    arrivalCode: "LTN",
                    departureDate: "Thu, 15 Jan",
                    departureTime: "08:10",
                    arrivalDate: "Thu, 15 Jan",
                    arrivalTime: "16:35",
                  }}
                  isAllInclusive={true}
                  includes={["Hand luggage for each passenger"]}
                  transfers={false}
                  pricePerPerson="£4,099"
                  quoteRef="ABC123456"
                  ctaText="Book Now"
                  atolProtected={true}
                  onBookNow={handleBookNow}
                />
              </div>
            </aside>
          </div>
        </div>

        <HotelDetailsTabs
          overview={overviewText}
          amenities={amenitiesText}
          foodAndDrink={foodText}
          allInclusive={allInclusivePoints}
          rooms={roomsText}
          location={locationData}
          facilities={facilitiesList}
          reviews={reviewsData}
          finePrint={finePrintData}
        />

        <div
          className="sticky left-0 bottom-0 px-5 w-full bg-white justify-between z-50 
                    md:hidden md:inset-auto md:px-0 md:w-auto md:bg-transparent md:z-auto flex items-center gap-4"
        >
          <div className="text-[#4c4c4c] text-[12px] md:text-[13px]">
            <div className="mb-1">Price Starting From</div>
            <div className="text-[#CB2187] text-[24px] md:text-[28px] font-bold">
              499 <span className="text-[#4c4c4c] text-[12px]">pp</span>
            </div>
          </div>

          <button className="bg-[#CB2187] text-white text-[13px] md:text-[16px] font-semibold px-5 py-2 md:px-6 md:py-3 rounded-[10px]">
            View Options
          </button>
        </div>
        <div className="bg-gradient-to-br from-[#1a9b9e] via-[#2ab5b8] to-[#5bc9cc] w-full py-[36px] md:py-[70px] md:pb-24 lg:pb-[80px] relative z-0">
          <div
            className="absolute top-0 bottom-0  bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: "url('https://planmylux.s3.eu-west-2.amazonaws.com/static/images/escapedestinations.png')",
              width: '100vw',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>
          <div className="mx-auto max-w-[1280px]">
            <div className="rounded-[8px] overflow-hidden relative">
              <img src="https://planmylux.s3.eu-west-2.amazonaws.com/static/images/toptrending20.jpg" className="sm:block hidden w-full h-[208px] object-cover" />
              <div className="w-full h-[160px] object-cover bg-[#92D8CC] sm:hidden"></div>
              <div className="absolute inset-0 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 sm:gap-5 px-6 md:px-12">
                <div className="flex flex-row items-center gap-5">
                  <svg className="w-[64px] h-[75px] sm:w-[99px] sm:h-[116px]" viewBox="0 0 99 116" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M56.693 2.34378C47.4033 6.02854 41.3801 12.5738 38.3928 21.9578C37.2468 25.5578 37.0331 29.2444 37.1708 32.9797C37.3182 36.9769 36.7833 40.8466 35.0855 44.5193C33.3652 48.2405 30.0888 51.3475 26.182 52.6962C28.212 49.3316 29.2783 45.8217 28.7413 42.1532C28.2425 38.7454 27.2664 35.3925 26.2958 32.0753C25.842 30.5241 24.5834 30.1039 23.2546 30.9443C9.04619 39.9307 -0.52195 52.0183 0.0220642 69.5821C0.535667 86.1638 7.70859 99.5097 22.1357 108.414C26.3618 111.023 30.9934 112.707 35.8541 113.728C36.3306 113.828 36.9373 113.878 37.3408 113.671C43.3211 110.613 48.9977 107.122 53.2399 101.754C59.4655 93.8776 60.3273 85.1124 57.4365 75.7513C55.8506 70.6158 52.6755 64.271 50.2509 61.4661C45.011 66.1205 41.9188 71.8943 40.9881 78.8328C40.0866 85.5532 41.1643 92.0204 43.4817 98.3304C43.6402 98.7618 43.9544 99.3063 43.8164 99.642C43.4984 100.415 43.1048 101.389 42.4517 101.737C41.5084 102.239 40.4238 101.782 40.0372 100.692C35.7529 88.6178 34.6761 76.6002 41.7691 65.1738C43.6868 62.0845 46.6369 59.6175 49.2206 56.9696C50.2157 55.9497 51.5138 56.0414 52.3986 57.2404C59.2132 66.4756 64.0426 76.4858 62.9708 88.3147C62.1872 96.9636 58.0744 104.081 51.3622 109.602C49.0994 111.463 46.6254 113.067 43.803 115.111C46.3484 115.111 48.4617 115.177 50.5697 115.099C60.3419 114.738 69.6561 112.651 78.1174 107.53C88.5042 101.243 94.6861 91.9386 97.1161 80.1872C100.373 64.4372 96.5711 50.3813 86.2618 38.092C81.3234 32.2051 76.0331 26.6849 69.774 22.1212C65.6216 19.0936 64.2375 14.0334 66.0018 9.19611C66.7099 7.2546 67.9111 5.49808 68.745 3.59479C69.0873 2.81352 69.4482 1.60023 69.087 1.06455C68.6552 0.424109 67.3814 -0.120538 66.608 0.0232485C63.3182 0.634838 60.0786 1.51645 56.693 2.34378Z" fill="white" />
                  </svg>
                  <div className="flex flex-col justify-center items-start">
                    <div className="text-white text-[12px] md:text-[14px] font-medium tracking-widest">
                      DISCOVER EXCLUSIVES
                    </div>
                    <div className="text-white text-lg md:text-2xl font-bold mt-1">
                      TRENDING TOP 20
                    </div>
                    <a href="#" className="mt-4 bg-[#CB2187] text-white px-2 md:px-6 py-2 rounded-[8px] text-[11px] sm:text-sm font-medium hover:bg-[#f3f3f3] w-full sm:w-auto text-center">
                      Find Your Perfect Deal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Trustsection/>
      </main>
    </div>
  );
}