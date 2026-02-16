import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= DATA ================= */

const destinations = [
  {
    title: "Leh Ladakh",
    price: "Starting Price Rs. 21,999/-",
    img: "/journey/himachal re.jpg",
  },
  {
    title: "Spiti",
    price: "Starting Price Rs. 17,999/-",
    img: "/journey/himachal re.jpg",
  },
  {
    title: "Kashmir",
    price: "Starting Price Rs. 24,499/-",
    img: "/journey/himachal re.jpg",
  },
  {
    title: "Meghalaya",
    price: "Starting Price Rs. 21,499/-",
    img: "/journey/himachal re.jpg",
  },
  {
    title: "Himachal",
    price: "Starting Price Rs. 7,999/-",
    img: "/journey/himachal re.jpg",
  },
];

/* ================= COMPONENT ================= */

export default function ExploreIndia() {
  const sliderRef = useRef();

  const scrollLeft = () =>
    sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });

  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });

  return (
    <section className="bg-gray-100 pt-10 pb-32">

      {/* ================= HERO VIDEO BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div
          className="
          relative w-full overflow-hidden
          rounded-[18px] shadow-md
          h-[260px] sm:h-[300px] md:h-[360px] lg:h-[320px]
          "
        >
          {/* Background Video */}
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white max-w-xl">

            <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold">
              Explore India
            </h2>

            <p className="mt-2 text-sm md:text-base opacity-90">
              A Journey Through Time, Colour And Culture
            </p>

            <button className="mt-3 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg w-fit">
              Explore
            </button>

          </div>
        </div>
      </div>

      {/* ================= FLOATING CARD SLIDER ================= */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative -mt-20 md:-mt-24">

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 bg-[#08a8c7] text-white shadow rounded-full
                     items-center justify-center"
        >
          <ChevronLeft />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar px-1 pb-4"
        >
          {destinations.map((item, i) => (
            <div
              key={i}
              className="
              flex-shrink-0
              w-[180px] sm:w-[200px] md:w-[220px]
              h-[260px] sm:h-[280px] md:h-[300px]
              rounded-[16px]
              overflow-hidden
              relative border-[3px] border-white
              shadow-lg group cursor-pointer
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-xs opacity-90">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 bg-[#08a8c7] text-white shadow rounded-full
                     items-center justify-center"
        >
          <ChevronRight />
        </button>

      </div>
    </section>
  );
}
