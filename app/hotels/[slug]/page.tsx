"use client";
import FlightSummary from "@/components/hotels/FlightSummary";
import HolidayCalendar from "@/components/hotels/HolidayCalendar";
import HolidayDealCard from "@/components/hotels/HolidayDealCard";
import HotelBanner from "@/components/hotels/HotelBanner";

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
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <HotelBanner
          location="DUBAI - THE PALM ISLAND"
          title="Deluxe Dubai Break including meals, drinks, transfers and FREE Excursion"
          subtitle="Exclusive offer to Plan My Luxe - Hurry Limited Seats and Availability - Selling Fast!!!"
          priceLabel="Price starting from"
          price="199"
          ctaText="View Options"
          images={[
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
          badgeText="Prices include FREE Attraction Entry"
        />

        {/* Updated layout: left column = content (deal card + calendar), right column = sticky flight summary */}
        <div className="mx-auto max-w-[1280px] px-4 py-6 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
            {/* Left column: main content (full width of column) */}
            <div className="w-full space-y-6">
              <HolidayDealCard {...palmDealData} />

              {/* Calendar should be same width as the card above — both are full width of left column */}
              <HolidayCalendar
                availableAirports={airports}
                availableBoardBases={boardBases}
                availableDurations={durations}
                initialPrices={mockPriceData}
                initialDepartureDate={initialDate}
                nights={7}
              />
            </div>

            {/* Right column: sticky FlightSummary on large screens; on small screens this stacks below and is full width */}
            <aside className="w-full">
              <div className="lg:sticky lg:top-24 lg:self-start">
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
      </main>
    </div>
  );
}