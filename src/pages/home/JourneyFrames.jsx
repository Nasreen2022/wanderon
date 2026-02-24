import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const images = [
  { src: "/journey/vietnam 2.jpg", place: "Vietnam" },
  { src: "/journey/dubai re 01.jpg", place: "Dubai" },
  { src: "/journey/bhutan 4.jpg", place: "Bhutan" },
  { src: "/journey/kerala-trips-1.jpg", place: "Kerala" },
  { src: "/journey/meghalaya 1.jpg", place: "Meghalaya" },
  { src: "/journey/uttarakhand-re-2.jpg", place: "Uttarakhand" },
  { src: "/journey/rajasthan-gallery-image-4.jpg", place: "Rajasthan" },
  { src: "/journey/sikkim-trips-5.jpg", place: "Sikkim" },
  { src: "/journey/ladakh-re.jpg", place: "Ladakh" },
  { src: "/journey/himachal re.jpg", place: "Himachal Pradesh" },
  { src: "/journey/spiti-re.jpg", place: "Spiti Valley" },
];

export default function Journey() {
  const sliderRef = useRef(null);

  const scrollByCard = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector("[data-journey-card]");
    if (!card) return;
    const gap = 24;
    const amount = card.clientWidth + gap;
    slider.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          JOURNEY IN FRAMES
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Pictures Perfect Moments
        </p>

        {/* Gallery */}
        <div className="relative mt-8 md:mt-14">

          {/* Left Arrow */}
          <button
            onClick={() => scrollByCard(-1)}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10
                       bg-[#08a8c7] text-white w-10 h-10 rounded-full
                       items-center justify-center disabled:opacity-40"
          >
            <ChevronLeft />
          </button>

          {/* Frames */}
          <div
            ref={sliderRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
          >
              {images.map((item, i) => (
                <div
                  key={i}
                  data-journey-card
                  className="w-[200px] sm:w-[220px] md:w-[240px] h-[300px] sm:h-[330px] md:h-[360px] rounded-xl overflow-hidden
                             shadow-lg relative flex-shrink-0"
                >
                  <img
                    src={item.src}
                    alt={item.place}
                    className="w-full h-full object-cover"
                  />

                  {/* Location pill */}
                  <div className="absolute bottom-4 left-4 bg-black/70
                                  text-white text-sm px-3 py-1 rounded-full
                                  flex items-center gap-1">
                    <MapPin size={14} />
                    {item.place}
                  </div>
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollByCard(1)}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10
                       bg-[#08a8c7] text-white w-10 h-10 rounded-full
                       items-center justify-center disabled:opacity-40"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}
