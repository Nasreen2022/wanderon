import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* =====================================================
 MAIN EXPORT COMPONENT
===================================================== */

export default function AdventureActivitiesSection() {
  /* ================= DATA ================= */

  const adventureData = [
    {
      location: "Nimu",
      title: "River Rafting",
      time: "3 hours approx",
      description: "River rafting is an immensely popular adventure sport in Ladakh.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      location: "Leh",
      title: "Mountain Biking",
      time: "2 hours approx",
      description: "Mountain biking is one of the best adventure sports in Leh Ladakh.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      location: "Hunder",
      title: "Camel Safari",
      time: "30 minutes approx",
      description: "Ride the double-humped camel and explore the sand dunes.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
  ];

  const placesData = [
    {
      location: "Ladakh",
      title: "Pangong Tso Lake",
      description: "Pangong Tso is among the most popular lakes in Leh Ladakh.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      location: "Leh",
      title: "Magnetic Hill",
      description: "Magnetic Hill is famous for its gravity-defying phenomenon.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      location: "Nubra Valley",
      title: "Nubra Valley",
      description: "Known for sand dunes and double-humped camels.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
  ];

  const foodData = [
    {
      location: "Main Bazaar, Leh",
      title: "Lehvenda Cafe",
      badge: "₹500/- approx for two",
      description: "Cuisines: Italian, Indian, Fast Food.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      location: "Changspa Road",
      title: "The Tibetan Kitchen",
      badge: "₹600/- approx for two",
      description: "Authentic Tibetan and Ladakhi cuisine.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      location: "Fort Road",
      title: "Gesmo Restaurant",
      badge: "₹400/- approx for two",
      description: "One of the oldest bakeries in Leh.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
  ];

  const shoppingData = [
    {
      location: "Chubi, Leh-Ladakh",
      title: "Women’s Alliance Of Ladakh Shopping Hub",
      time: "12:00 AM - 12:00 AM",
      description: "Shop for woolen garments and silver jewelry.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      location: "Main Market, Leh",
      title: "Leh Main Bazaar",
      time: "10:00 AM - 8:00 PM",
      description: "Famous for souvenirs and handicrafts.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      location: "Changspa Road",
      title: "Tibetan Market",
      time: "9:00 AM - 9:00 PM",
      description: "Best place to buy pashmina shawls.",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
  ];

  return (
    <>
      <CardSliderSection title="Adventure In Ladakh To Try On Your Next Trip" data={adventureData} />
      <CardSliderSection title="Places to Visit in Ladakh With Our Ladakh Packages" data={placesData} />
      <CardSliderSection title="Food in Ladakh - Best Places To Eat" data={foodData} />
      <CardSliderSection title="Best Places for Shopping in Ladakh" data={shoppingData} />

      <FAQSection />

      {/* ✅ GUIDELINES NOW AFTER FAQ */}
      <LadakhTravelGuidelines />
    </>
  );
}

/* =====================================================
 CARD SLIDER SECTION (UNCHANGED)
===================================================== */

function CardSliderSection({ title, data }) {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
      setIndex(0);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = Math.max(0, data.length - cardsToShow);

  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold text-[#0a6c74] mb-8">{title}</h2>

      <div className="relative">
        <button
          onClick={() => setIndex((p) => Math.max(p - 1, 0))}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => setIndex((p) => Math.min(p + 1, maxIndex))}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
        >
          <ChevronRight />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * (100 / cardsToShow)}%)` }}
          >
            {data.map((item, i) => (
              <div key={i} className="flex-shrink-0 px-3" style={{ width: `${100 / cardsToShow}%` }}>
                <InfoCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
 INFO CARD (UNCHANGED)
===================================================== */

function InfoCard({ item }) {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden shadow">
        <img src={item.image} alt={item.title} className="w-full h-[220px] object-cover" />

        {item.badge && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
            {item.badge}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-xs bg-black/80 px-2 py-1 rounded mb-1 inline-block">
            📍 {item.location}
          </div>

          <div className="font-semibold text-sm">{item.title}</div>

          {item.time && (
            <div className="text-xs bg-black/80 px-2 py-1 rounded mt-1 inline-block">
              {item.time}
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-3">
        {item.description} <span className="font-semibold cursor-pointer">Read More...</span>
      </p>
    </div>
  );
}

/* =====================================================
 FAQ SECTION (UNCHANGED)
===================================================== */

function FAQSection() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "How to plan a Leh Ladakh trip?", a: "Choose best time between May–September and plan itinerary." },
    { q: "Which Leh Ladakh tour package suits families?", a: "Family packages include comfortable stays and safe transport." },
    { q: "Which Is The Best Time To Visit Ladakh?", a: "May to September is ideal." },
    { q: "What Is The Difference Between Leh And Ladakh?", a: "Ladakh is region, Leh is city." },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold text-[#0a6c74] mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((item, i) => {
          const isOpen = open === i;

          return (
            <div key={i} className="border-b pb-4">
              <div className="flex justify-between cursor-pointer" onClick={() => setOpen(isOpen ? null : i)}>
                <div className="flex gap-4">
                  <span className="text-gray-400 font-semibold">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold">{item.q}</h3>
                </div>

                <div className="text-xl">{isOpen ? "−" : "+"}</div>
              </div>

              {isOpen && <p className="mt-3 text-gray-600 ml-10">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =====================================================
 GUIDELINES SECTION
===================================================== */

function LadakhTravelGuidelines() {
  const guidelines = [
    {
      title: "Acclimatize Properly",
      text: "Ladakh’s high altitude can take a toll on your body, so allow 1–2 days for acclimatisation upon arrival. Stay hydrated, avoid strenuous activities initially, and consult your doctor about carrying preventive medication like Diamox if needed. Many Leh Ladakh packages include acclimatization days to ensure a comfortable experience.",
    },
    {
      title: "Pack for All Weather",
      text: "Ladakh’s weather can be unpredictable, so pack layers. Include thermal wear, a good-quality windproof jacket, gloves, woolen socks, and a sturdy pair of shoes. Don’t forget sunscreen, sunglasses, and lip balm to protect against harsh sun and dry winds.",
    },
    {
      title: "Plan for Permits",
      text: "You can’t just stroll into some of Ladakh’s coolest spots like Nubra Valley or Pangong Tso without a bit of paperwork. You’ll need an Inner Line Permit (ILP) for Indians or Protected Area Permit (PAP) for foreigners. Most Leh Ladakh tour packages handle this for you, but if you’re going solo, head to the DC office in Leh or apply online.",
    },
    {
      title: "Stay Hydrated and Eat Light",
      text: "Drink plenty of water to avoid dehydration in the dry climate. Eat small, light meals to help your body adjust to the altitude. Avoid alcohol and smoking, as they can worsen altitude sickness.",
    },
    {
      title: "Carry Essentials",
      text: "Pack a well-stocked first-aid kit, including medicines for altitude sickness, headaches, and stomach issues. Carry energy bars, chocolates, and dry fruits for quick energy. An insulated water bottle is a lifesaver to keep your drinks warm.",
    },
    {
      title: "Mind the Roads",
      text: "Ladakh roads are wild, beautiful, and sometimes a bit bumpy. If you’re driving, make sure your vehicle’s up for the challenge. SUVs work best for those rocky terrains. And for all the biking enthusiasts, pack extra fuel, tools, and parts—because when you’re out there, you’ll want to keep rolling!",
    },
    {
      title: "Cash and Connectivity",
      text: "ATMs are limited to Leh city, so carry enough cash for your trip. Mobile connectivity is also limited, with BSNL and Jio providing the best coverage in Leh and nearby areas.",
    },
    {
      title: "Respect Nature and Culture",
      text: "Ladakh’s culture is as rich as its landscapes, so show some love by respecting local customs and keeping the environment clean. No plastic! Always ask permission before snapping photos of the locals. It’s the little things that make the big difference!",
    },
    {
      title: "Travel with a Reliable Tour Operator",
      text: "Let’s face it, Ladakh’s beauty is better appreciated when you’re not stressing about permits or accommodation. Choose a Leh Ladakh tour package from WanderOn, and let the pros handle all the logistics.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold text-[#0a6c74] mb-10">
        Ladakh Travel Guidelines
      </h2>

      <div className="space-y-6">
        {guidelines.map((item, i) => (
          <div key={i} className="border-b pb-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}