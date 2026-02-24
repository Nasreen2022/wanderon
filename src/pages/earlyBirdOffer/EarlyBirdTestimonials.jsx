import React, { useState } from "react";

export default function EarlyBirdTestimonials() {
  const [index, setIndex] = useState(0);
  const cardsToShow = 2;

  const testimonials = [
    {
      name: "Akshay Kadam",
      image: "/earlyBird/icons/Landscape mode-cuate.png",
      review:
        "I had an amazing experience traveling with WanderOn to Ladakh! It was a true adrenaline-rush vacation — from snow-clad mountains and thrilling bike rides to exploring the local culture and Pangong Lake.",
      date: "Oct 15, 2025",
    },
    {
      name: "Vidhaan Jain",
      image: "/earlyBird/icons/Landscape mode-cuate.png",
      review:
        "Easily one of the best travel experiences of my life! This was my second trip with WanderOn and they absolutely nailed it.",
      date: "Nov 12, 2025",
    },
    {
      name: "Veer K",
      image: "/earlyBird/icons/Landscape mode-cuate.png",
      review:
        "My recent journey was magical. Every detail from accommodations to local guidance was perfectly arranged.",
      date: "Jul 10, 2025",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-20">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
        <p className="text-gray-500 mt-2">The word on the street</p>

        {/* ===== RATING ICONS ROW ===== */}
        <div className="flex justify-center gap-14 mt-6">

          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <img src="/icons/google.png" className="w-7" />
              <span className="text-yellow-400">★</span>
              <span className="font-semibold">4.9</span>
            </div>
            <p className="text-gray-500 text-sm">(14001 reviews)</p>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <img src="/icons/tripadvisor.png" className="w-7" />
              <span className="text-yellow-400">★</span>
              <span className="font-semibold">5.0</span>
            </div>
            <p className="text-gray-500 text-sm">(3850 reviews)</p>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <img src="/icons/facebook.png" className="w-7" />
              <span className="text-yellow-400">★</span>
              <span className="font-semibold">4.9</span>
            </div>
            <p className="text-gray-500 text-sm">(1031 reviews)</p>
          </div>

        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="max-w-5xl mx-auto px-4 relative overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full border bg-white
            flex items-center justify-center
            hover:bg-gray-100
          "
        >
          ←
        </button>

        {/* VIEWPORT */}
        <div className="overflow-hidden">

          {/* TRACK */}
          <div
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${(index * 100) / cardsToShow}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="
                  basis-[calc((100%-32px)/2)]
                  flex-shrink-0
                  border-4 border-[#b9dbe6]
                  rounded-3xl
                  p-6
                  bg-white
                "
              >
                {/* USER */}
                <div className="flex items-center gap-3 mb-4">

                  {/* avatar ring */}
                  <div className="p-[3px] rounded-full border-4 border-[#59b6c9]">
                    <img
                      src={item.image}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <div className="text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </div>

                {/* REVIEW BOX */}
                <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-600 leading-relaxed">
                  {item.review}
                </div>

                {/* FOOTER */}
                <div className="flex justify-between mt-4">
                  <p className="text-xs text-gray-400">{item.date}</p>
                  <button className="text-gray-700 text-sm font-medium">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() =>
            setIndex((prev) =>
              Math.min(prev + 1, testimonials.length - cardsToShow)
            )
          }
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full border bg-white
            flex items-center justify-center
            hover:bg-gray-100
          "
        >
          →
        </button>

      </div>
    </section>
  );
}