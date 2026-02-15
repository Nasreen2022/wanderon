import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";

/* ================= MONTH FILTER ================= */

const months = [
  "JAN '26",
  "FEB '26",
  "MAR '26",
  "APR '26",
  "MAY '26",
  "JUN '26",
  "JUL '26",
  "AUG '26",
  "SEP '26",
  "OCT '26",
  "NOV '26",
  "DEC '26",
];

/* ================= TRIP DATA ================= */

const trips = [
  {
    image: "/journey/himachal re.jpg",
    title: "Spiti Valley - Exclusive Escape",
    duration: "6N/7D",
    location: "Delhi - Delhi",
    price: "₹24,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Spiti Valley - Bliss in Budget",
    duration: "6N/7D",
    location: "Delhi - Delhi",
    price: "₹19,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "9 Days Vietnam Group Trip",
    duration: "8N/9D",
    location: "Noi Bai International",
    price: "₹72,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
  {
    image: "/journey/himachal re.jpg",
    title: "Explore Sri Lanka in 8 Days",
    duration: "7N/8D",
    location: "Marissa - Colombo",
    price: "₹49,999/- Onwards",
  },
 
];

/* ================= COMPONENT ================= */

export default function UpcomingTrips() {
  const [activeMonth, setActiveMonth] = useState(0);
  const sliderRef = useRef();

  const scrollLeft = () => {
  const card = sliderRef.current.querySelector("div");
  if (!card) return;

  const gap = 24; // gap-6 = 24px
  const cardWidth = card.offsetWidth + gap;

  sliderRef.current.scrollBy({
    left: -(cardWidth * 4),
    behavior: "smooth",
  });
};

const scrollRight = () => {
  const card = sliderRef.current.querySelector("div");
  if (!card) return;

  const gap = 24;
  const cardWidth = card.offsetWidth + gap;

  sliderRef.current.scrollBy({
    left: cardWidth * 4,
    behavior: "smooth",
  });
};


  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-[24px] font-semibold text-gray-900">
            Upcoming Community Trips
          </h2>

          <button className="flex items-center gap-3 group">
            <span className="text-[14px] font-medium text-[#0e7490]">
              View All
            </span>

            <div className="w-8 h-8 rounded-full bg-[#0e7490] text-white flex items-center justify-center">
              <ChevronRight size={16} />
            </div>
          </button>

        </div>

        {/* ================= MONTH CHIPS ================= */}
        <div className="relative">

          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">

            {months.map((month, i) => (
              <button
                key={i}
                onClick={() => setActiveMonth(i)}
                className={`
                  h-[40px] px-6 rounded-full border whitespace-nowrap text-[14px] font-medium transition-all
                  ${
                    activeMonth === i
                      ? "border-[#0e7490] text-[#0e7490] bg-[#ecfeff]"
                      : "border-gray-300 text-gray-500 bg-white hover:border-gray-400"
                  }
                `}
              >
                {month}
              </button>
            ))}

          </div>

          {/* divider */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
        </div>

        {/* ================= TRIPS SLIDER ================= */}
        <div className="relative mt-8">

          {/* LEFT ARROW */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10
            w-11 h-11 bg-white shadow-md rounded-full items-center justify-center"
          >
            <ChevronLeft />
          </button>

          {/* CARDS */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {trips.map((trip, i) => (
              <div
                key={i}
                className="w-[250px] h-[340px] rounded-xl overflow-hidden
                relative shadow-md border border-gray-200 flex-shrink-0 group"
              >

                {/* Image */}
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* PRICE RIBBON (WanderOn style) */}
                <div className="absolute top-3 left-0 bg-yellow-400 text-black
                text-[13px] font-semibold px-5 py-1 rounded-r-full shadow">
                  {trip.price}
                </div>

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">

                  <h3 className="font-semibold text-[17px] leading-tight">
                    {trip.title}
                  </h3>

                  <div className="flex items-center gap-4 mt-2 text-[13px] opacity-90">

                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {trip.duration}
                    </span>

                    <span className="flex items-center gap-1 truncate">
                      <MapPin size={14} />
                      {trip.location}
                    </span>

                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10
            w-11 h-11 bg-[#08a8c7] text-white shadow-md rounded-full items-center justify-center"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}
