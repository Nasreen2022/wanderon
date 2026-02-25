import React, { useState } from "react";

export default function LadakhPackages() {
  const [cardIndex, setCardIndex] = useState(0);
  const cardsToShow = 4;

  /* ================= FILTER CHIPS ================= */
  const chips = [
    "Duration",
    "Routes",
    "Budget",
    "Reset",
    "Summer Sale",
    "Best-Selling",
    "Group Tour",
    "Family Tours",
  ];

  /* ================= TOUR DATA ================= */
  const tours = [
    {
      title:
        "Best Ladakh Bike Trip from Srinagar to Manali | Umling La",
      price: "42,999",
      oldPrice: "48,999",
      duration: "10N/11D",
      route: "Srinagar - Delhi",
      date: "23 May, 27 May +5 batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "9 Days Great Lakes of Ladakh Expedition",
      price: "30,999",
      oldPrice: "35,999",
      duration: "8N/9D",
      route: "Delhi - Srinagar",
      date: "29 May, 5 Jun +4 batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "11 Days Ladakh Tour Package with Umling La",
      price: "37,999",
      oldPrice: "43,999",
      duration: "10N/11D",
      route: "Delhi/Chandigarh",
      date: "31 May, 7 Jun +3 batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "8-Day Leh Ladakh Tour Package with Turtuk",
      price: "28,999",
      oldPrice: "32,999",
      duration: "7N/8D",
      route: "Leh - Leh",
      date: "2 May, 9 May +2 batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Luxury Ladakh Experience",
      price: "55,999",
      oldPrice: "62,999",
      duration: "9N/10D",
      route: "Leh - Nubra - Pangong",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">

      {/* ================= INFO BOX ================= */}
      <div className="bg-gray-100 rounded-xl p-6 mb-8 relative">
        <h2 className="text-xl font-semibold mb-2">
          Explore the Best Leh Ladakh Tour Packages
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          Like all the adventure seekers around the world, you must also be
          dreaming of that one adventurous trip to Ladakh. WanderOn offers
          8+ Ladakh tour packages ranging from 4 to 11 days covering iconic
          destinations like Pangong Lake, Nubra Valley, and Leh. Packages
          start from ₹15,800 per person with carefully planned itineraries,
          comfortable stays, and seamless travel arrangements. Enjoy up to
          25% discount for a limited time.
        </p>

        <span className="absolute right-6 top-6 text-sm font-medium cursor-pointer">
          Read More...
        </span>
      </div>

      {/* ================= FILTER CHIPS ================= */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {chips.map((chip, i) => (
          <div
            key={i}
            className="
              px-4 py-2
              bg-white
              border
              rounded-full
              text-sm
              shadow-sm
              cursor-pointer
              hover:bg-gray-50
            "
          >
            {chip}
          </div>
        ))}
      </div>

      {/* ================= BEST SELLING HEADING ================= */}
      <h3 className="text-2xl font-bold text-[#0a6c74] mb-6">
        Best-Selling Ladakh Tours
      </h3>

      {/* ================= CARD SLIDER ================= */}
      <div className="relative overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={() => setCardIndex((prev) => Math.max(prev - 1, 0))}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow"
        >
          ←
        </button>

        {/* VIEWPORT */}
        <div className="overflow-hidden px-6.5">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${(cardIndex * 100) / 4}%)`,
            }}
          >
            {tours.map((item, i) => (
              <div
                key={i}
                className="
                  basis-[calc((100%-72px)/4)]
                  flex-shrink-0
                  rounded-xl overflow-hidden relative shadow-md h-[320px]
                "
              >
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                />

                {/* PRICE */}
                <div className="absolute top-3 left-3 bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-semibold">
                  <span className="line-through text-gray-600 mr-1">
                    ₹{item.oldPrice}
                  </span>
                  ₹{item.price}
                </div>

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="text-xs text-gray-200 space-y-1">
                    <div>⏱ {item.duration}</div>
                    <div>📍 {item.route}</div>
                    <div>📅 {item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() =>
            setCardIndex((prev) =>
              Math.min(prev + 1, tours.length - cardsToShow)
            )
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow"
        >
          →
        </button>
      </div>
    </section>
  );
}