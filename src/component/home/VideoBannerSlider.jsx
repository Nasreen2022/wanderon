import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "/banner/banner1.mp4",
  "/banner/banner2.mp4",
  "/banner/banner3.mp4",
  "/banner/banner4.mp4",
  "/banner/banner5.mp4",
];

export default function VideoBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);
  const videoRefs = useRef([]);

  /* Auto Slide */
  useEffect(() => {
    if (pause) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [current, pause]);

  /* Play only active video */
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else video.pause();
    });
  }, [current]);

  const next = () =>
    setCurrent((prev) => (prev + 1) % videos.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="py-8 md:py-12 bg-gray-100">
      <div
        className="max-w-7xl mx-auto px-4 md:px-6"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-black">

          {/* ---------- Slides ---------- */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {videos.map((src, i) => (
              <div key={i} className="w-full flex-shrink-0">

                {/* Container adjusts to video */}
                <div className="w-full flex items-center justify-center">

                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={src}
                    muted
                    loop
                    playsInline
                    controls={false}
                    className="
                      w-full
                      h-auto        /* height auto → responsive */
                      max-h-[80vh]  /* prevents huge size on big screens */
                      object-contain /* full video visible */
                    "
                  />

                </div>

              </div>
            ))}
          </div>

          {/* ---------- Left Arrow ---------- */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2
                       w-8 h-8 md:w-10 md:h-10 bg-[#08a8c7]
                       text-white rounded-full flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          {/* ---------- Right Arrow ---------- */}
          <button
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2
                       w-8 h-8 md:w-10 md:h-10 bg-[#08a8c7]
                       text-white rounded-full flex items-center justify-center"
          >
            <ChevronRight />
          </button>

          {/* ---------- Dots ---------- */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  current === i ? "w-6 bg-gray-700" : "w-2 bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
