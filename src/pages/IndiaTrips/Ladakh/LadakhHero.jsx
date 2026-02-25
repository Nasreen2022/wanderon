import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LadakhHero() {
  /* ---------- IMAGES ---------- */
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609948543911-5a7e6b5234f6?q=80&w=1600",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593697820989-3aa45a98a1f1?q=80&w=1600",
    },
  ];

  const [current, setCurrent] = useState(0);

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  return (
    <div className="relative h-[520px] w-full overflow-hidden">

      {/* ---------- BACKGROUND IMAGES ---------- */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* ---------- DARK GRADIENT OVERLAY ---------- */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* ---------- CONTENT ---------- */}
      <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6">

        <div className="text-white max-w-xl space-y-4">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Leh Ladakh Tour Packages 2026 | Book Now To Get Upto 25% Off
          </h1>

          {/* SUBTITLE */}
          <p className="text-lg">
            All Inclusive Leh Ladakh Covering Nubra Valley, Khardung La,
            Pangong Lake!
          </p>

          {/* PRICE */}
          <p className="text-lg">
            Starting Price:
            <span className="text-yellow-400 font-semibold">
              {" "}Rs. 15,800/- Per Person
            </span>
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-2">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">
              Request a Callback
            </button>

            <button className="bg-green-500 px-6 py-3 rounded-full font-semibold">
              Chat With Us
            </button>
          </div>
        </div>
      </div>

      {/* ---------- LEFT ARROW ---------- */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      {/* ---------- RIGHT ARROW ---------- */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      {/* ---------- DOTS ---------- */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              current === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}