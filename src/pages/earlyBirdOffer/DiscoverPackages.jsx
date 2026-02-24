import React, { useState } from "react";

export default function DiscoverPackages() {
  /* ================= STATES ================= */
  const [chipIndex, setChipIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const chipsToShow = 6;
  const cardsToShow = 4;

  /* ================= DESTINATION CHIPS ================= */
  const chips = [
    { name: "Bali", image: "/earlyBird/icons/Landscape mode-cuate.png" },
    { name: "Vietnam", image: "/earlyBird/icons/Landscape mode-cuate.png" },
    { name: "Thailand", image: "/earlyBird/icons/Landscape mode-cuate.png" },
    { name: "Sri-lanka", image: "/earlyBird/icons/Landscape mode-cuate.png" },
    { name: "Georgia", image: "/earlyBird/icons/Landscape mode-cuate.png" },
    { name: "Bhutan", image: "/earlyBird/icons/Landscape mode-cuate.png" },
    { name: "Meghalaya", image: "/earlyBird/icons/Landscape mode-cuate.png" },
    { name: "Spiti", image: "/earlyBird/icons/Landscape mode-cuate.png" },
    { name: "Kashmir", image: "/earlyBird/icons/Landscape mode-cuate.png" },
  ];

  /* ================= PACKAGE DATA ================= */
  const packages = [
    {
      title: "6-Days Meghalaya Holiday Package",
      price: "17,499",
      oldPrice: "22,999",
      duration: "5N/6D",
      route: "Guwahati - Guwahati",
      date: "No Upcoming Batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Spiti Summer Special",
      price: "15,999",
      oldPrice: "20,999",
      duration: "4N/5D",
      route: "Delhi - Delhi",
      date: "No Upcoming Batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Bhutan Road Trip Package",
      price: "30,999",
      oldPrice: "36,999",
      duration: "6N/7D",
      route: "Bagdogra Airport - Bhutan",
      date: "3 Apr, 18 Apr +11 batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Bhutan Road Trip with Phobjikha Valley",
      price: "38,999",
      oldPrice: "44,999",
      duration: "7N/8D",
      route: "Bagdogra Airport - Bhutan",
      date: "4 Apr, 11 Apr +21 batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Kerala Escape",
      price: "14,999",
      oldPrice: "18,999",
      duration: "3N/4D",
      route: "Cochin - Munnar",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Kerala Escape",
      price: "14,999",
      oldPrice: "18,999",
      duration: "3N/4D",
      route: "Cochin - Munnar",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Kerala Escape",
      price: "14,999",
      oldPrice: "18,999",
      duration: "3N/4D",
      route: "Cochin - Munnar",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Kerala Escape",
      price: "14,999",
      oldPrice: "18,999",
      duration: "3N/4D",
      route: "Cochin - Munnar",
      date: "Weekly batches",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
        {
        title: "Kerala Escape",
        price: "14,999",
        oldPrice: "18,999",
        duration: "3N/4D",
        route: "Cochin - Munnar",
        date: "Weekly batches",
        image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
        },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Discover Early Bird Packages
        </h2>
        <p className="text-gray-500 mt-2">
          Book Early, Explore More, Spend Less!
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">

        {/* ================= CHIPS CAROUSEL ================= */}
        <div className="relative mb-12 overflow-hidden">

          {/* LEFT ARROW */}
          <button
            onClick={() => setChipIndex((prev) => Math.max(prev - 1, 0))}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border shadow-sm"
          >
            ←
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden px-12">
            <div
              className="flex gap-4 transition-transform duration-500"
              style={{
                transform: `translateX(-${chipIndex * 160}px)`,
              }}
            >
              {chips.map((chip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-gray-50 shadow-sm whitespace-nowrap flex-shrink-0"
                >
                  <img
                    src={chip.image}
                    alt={chip.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{chip.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() =>
              setChipIndex((prev) =>
                Math.min(prev + 1, chips.length - chipsToShow)
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border shadow-sm"
          >
            →
          </button>
        </div>

        {/* ================= PACKAGE CARDS ================= */}
        <div className="relative overflow-hidden">

          {/* LEFT ARROW */}
          <button
            onClick={() => setCardIndex((prev) => Math.max(prev - 1, 0))}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow"
          >
            ←
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${(cardIndex * 100) / 4}%)`,
              }}
            >
              {packages.map((item, index) => (
                <div
                  key={index}
                  className="
                    basis-[calc((100%-72px)/4)]
                    flex-shrink-0
                    rounded-xl overflow-hidden relative shadow-md
                    h-[320px]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* PRICE BADGE */}
                  <div className="absolute top-3 left-3 bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="line-through text-gray-600 mr-1">
                      ₹{item.oldPrice}
                    </span>
                    ₹{item.price} onwards
                  </div>

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                    <h3 className="text-sm font-semibold line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="text-xs space-y-1 text-gray-200">
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
                Math.min(prev + 1, packages.length - cardsToShow)
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}