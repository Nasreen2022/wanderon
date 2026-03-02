import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LadakhHero() {
  /* ---------- LEH LADAKH SLIDER IMAGES ---------- */
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600", // Pangong Lake
    },
    {
      image:
        "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1600", // Ladakh road mountains
    },
    {
      image:
        "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1600", // Leh landscape
    },
  ];

  const [current, setCurrent] = useState(0);

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  /* ---------- NAVIGATION ---------- */
  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  return (
    <div className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full overflow-hidden">

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
            alt="Leh Ladakh"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* ---------- DARK OVERLAY ---------- */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* ---------- CONTENT ---------- */}
      <div className="absolute inset-0 flex items-center max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-white max-w-lg space-y-3 sm:space-y-4">

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Leh Ladakh Tour Packages 2026 | Book Now To Get Upto 25% Off
          </h1>

          {/* SUBTITLE */}
          <p className="text-sm sm:text-base md:text-lg">
            All Inclusive Leh Ladakh Covering Nubra Valley, Khardung La,
            Pangong Lake!
          </p>

          {/* PRICE */}
          <p className="text-sm sm:text-base md:text-lg">
            Starting Price:
            <span className="text-yellow-400 font-semibold">
              {" "}Rs. 15,800/- Per Person
            </span>
          </p>

          {/* BUTTONS (SMALLER) */}
          <div className="flex gap-3 pt-2">
            <button className="bg-yellow-400 text-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-semibold">
              Request Callback
            </button>

            <button className="bg-green-500 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-semibold">
              Chat With Us
            </button>
          </div>
        </div>
      </div>

      {/* ---------- LEFT ARROW ---------- */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50"
      >
        <ChevronLeft size={24} />
      </button>

      {/* ---------- RIGHT ARROW ---------- */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50"
      >
        <ChevronRight size={24} />
      </button>

      {/* ---------- DOTS ---------- */}
      <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer ${
              current === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}