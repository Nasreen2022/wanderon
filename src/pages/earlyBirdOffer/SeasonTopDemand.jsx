import React from "react";

export default function SeasonTopDemand() {
  const destinations = [
    { title: "Leh Ladakh", price: "23,999", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Spiti", price: "18,499", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Kashmir", price: "19,499", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Meghalaya", price: "16,499", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Bhutan", price: "30,999", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Goa", price: "12,999", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Kerala", price: "14,999", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Andaman", price: "22,999", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Manali", price: "11,499", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
    { title: "Rajasthan", price: "13,999", image: "/earlyBird/seasonTrip/kerala-trips-1.jpg" },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16">

      {/* ===== HEADER ===== */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
          Season's Top Demand!
        </h2>

        <p className="text-gray-500 mt-2">
          Where do you wish to go this season?
        </p>
      </div>

      {/* ===== CARDS CONTAINER ===== */}
      <div className="max-w-5xl mx-auto px-4">

        <div
          className="
            flex gap-6 overflow-x-auto pb-4   /* mobile → single row */

            lg:grid lg:grid-cols-5            /* desktop → 5 columns */
            lg:overflow-visible               /* remove scroll */
          "
        >
          {destinations.map((item, index) => (
            <div
              key={index}
              className="
                min-w-[220px] sm:min-w-[240px]   /* mobile width */
                h-[320px]

                lg:min-w-0                        /* remove min width on desktop */

                rounded-xl overflow-hidden relative
                shadow-md hover:scale-105 transition
                cursor-pointer flex-shrink-0
              "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200">
                  Starting Price Rs. {item.price}/-
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}