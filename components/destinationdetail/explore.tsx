"use client";

interface ExploreItem {
  tagline: string;
  title: string;
  description: string;
  image: string;
}

const exploreItems: ExploreItem[] = [
  {
    tagline: "Beach escapes",
    title: "Beaches and bays to explore",
    description: "Mallorca is home to an incredible collection of beaches and bays offering soft sands clear turquoise waters and a relaxing Mediterranean atmosphere that draws visitors back year after year. From long sweeping shores to small hidden coves the island presents a coastline that suits every style of traveller whether you are seeking a peaceful escape or lively coastal energy. The famous beaches of Alcudia and Cala Millor stretch for miles with shallow waters and gentle waves while the smaller coves around Cala dOr and Cala Mondrago offer sheltered scenic spots that feel intimate and inviting. Many beaches have excellent facilities sunbeds and beachside cafés that make long sunny days effortless and enjoyable. Across the island the warm Balearic climate creates perfect conditions for swimming snorkelling and simply unwinding as the day drifts by. With so much variety Mallorcas coastline brings together natural beauty easy comfort and the kind of sun soaked moments that define an unforgettable holiday experience.",
    image: "/assets/images/explore-1.png"
  },
  {
    tagline: "Natural beauty",
    title: "Nature and outdoor adventures in Mallorca",
    description: "Mallorcas landscapes offer a beautiful contrast of rugged mountains gentle countryside and serene coastal paths creating the perfect setting for travellers who enjoy exploring the outdoors. The Serra de Tramuntana mountain range stretches across the northwest coast with dramatic cliffs ancient stone terraces and scenic viewpoints that showcase the islands wild natural beauty. Walking trails wind through charming villages olive groves and forested hillsides offering routes suitable for relaxed strolls or more adventurous hikes. Cyclists will find the island especially appealing with smooth coastal roads challenging climbs and breathtaking views along every turn. Away from the mountains the island features peaceful nature reserves calm wetlands and wide open spaces ideal for birdwatching and quiet escapes surrounded by Mediterranean flora. Whether you choose a coastal walk a countryside cycle or a scenic hillside viewpoint Mallorcas outdoor experiences offer a refreshing balance of activity and calm making the island a wonderful destination for nature lovers.",
    image: "/assets/images/explore-2.png"
  },
  {
    tagline: "Island heritage",
    title: "Culture and history across the island",
    description: "Mallorcas culture and history shine through its charming old towns striking architecture and centuries old traditions that continue to shape the identity of the island. Palma the vibrant capital offers a blend of elegant boulevards hidden lanes and the impressive Santa Maria Cathedral rising above the marina with intricate stonework that reflects its long heritage. Within the island you will find historic hilltop sanctuaries ancient monasteries and traditional villages where narrow streets open into colourful squares filled with cafés markets and local life. Museums galleries and cultural centres celebrate Mallorcan art crafts and folklore giving visitors a deeper connection to the islands past. Many towns host weekly markets musical events and festivals that bring together residents and visitors in lively celebration. Whether exploring grand architecture tasting local delicacies or wandering through historic streets Mallorcas cultural landscape offers a meaningful backdrop to every holiday and a lasting sense of the islands rich character.",
    image: "/assets/images/explore-3.png"
  },
  {
    tagline: "After dark",
    title: "Nightlife and entertainment for every mood",
    description: "Mallorca offers a vibrant mix of nightlife and entertainment with something to match every mood from relaxed seaside evenings to lively nights out in the islands most energetic resorts. Palma Marina sets the scene with stylish bars rooftop terraces and lounges where you can enjoy warm Balearic evenings with coastal views and a welcoming atmosphere. In the livelier areas such as Magaluf and Palmanova nightclubs live music venues and beachfront bars create an upbeat holiday energy that continues well into the night. For a more laid back experience many coastal towns offer sunset spots quiet cocktail terraces and waterfront restaurants where evenings unfold at a slower Mediterranean pace. Families will find gentle entertainment options including promenade shows open air events and charming night markets. With its diverse mix of venues and atmospheres Mallorca ensures that every traveller can enjoy evenings that feel personal enjoyable and perfectly suited to the holiday style they love.",
    image: "/assets/images/explore-4.png"
  }
];

export default function Explore() {
  return (
    <section className="w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] relative bg-white font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-8 md:py-16 lg:py-20">
        <div className="w-full max-w-[1280px] mx-auto space-y-8 md:space-y-20 lg:space-y-24">
          {exploreItems.map((item, index) => {
            const isImageRight = index % 2 === 0; // First item (index 0) has image on right, alternates after
            
            return (
              <div 
                key={index} 
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 items-center"
              >
                {/* Image Column - 1 part */}
                <div className={`lg:col-span-1 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full aspect-[4/3] lg:w-[405px] lg:h-[480px] object-cover rounded-[10px]"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] lg:w-[405px] lg:h-[480px] bg-[#D9D9D9] rounded-[10px] flex items-center justify-center">
                      {/* Placeholder image icon */}
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                        <rect x="10" y="15" width="60" height="50" rx="4" stroke="#9CA3AF" strokeWidth="2"/>
                        <circle cx="25" cy="30" r="5" fill="#9CA3AF"/>
                        <path d="M10 55 L30 35 L45 50 L55 40 L70 55" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Text Column - 2 parts */}
                <div className={`lg:col-span-2 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    {/* Tagline */}
                    <p className="text-[#888888] text-[12px] md:text-[13px] font-normal tracking-wide uppercase">
                      {item.tagline}
                    </p>

                    {/* Title */}
                    <h2 className="text-[#5A5A5A] text-[28px] md:text-[48px] lg:text-[48px] font-semibold max-w-[625px]">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[#6B6B6B] text-[13px] md:text-[14px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}