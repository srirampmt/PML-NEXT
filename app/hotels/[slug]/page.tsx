import HotelBanner from "@/components/hotels/HotelBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto bg-white md:container lg:container xl:container bg-white">
        <HotelBanner 
          location="Paris, France"
          title="Luxury Stay at The Ritz"
          subtitle="Experience the epitome of elegance and comfort"
          priceLabel="Price starting from"
          price="£299"
          ctaText="Book Now"
          images={[
            "/assets/images/t-1.jpg",
            "/assets/images/t-2.png",
            "/assets/images/t-3.jpg"
          ]}
          badgeText="Prices include FREE Attraction Entry"
        /> 
         
      </main>
    </div>
  );
}
