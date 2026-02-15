export default function ExperienceBanner() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= Banner Container ================= */}
        <div
          className="
          rounded-xl sm:rounded-2xl md:rounded-3xl
          shadow-lg overflow-hidden
          bg-gradient-to-r from-[#1fa7b6] to-[#0f8f9f]

          px-6 sm:px-8 md:px-12
          py-10 md:py-12

          flex flex-col lg:flex-row
          items-center
          justify-between
          gap-10 lg:gap-6
          "
        >

          {/* ================= LEFT ================= */}
          <div className="w-full lg:w-[35%] text-white text-center lg:text-left relative">

            <span
              className="
              inline-block bg-yellow-400 text-black
              text-xs sm:text-sm font-extrabold
              px-3 py-1 mb-3 rotate-[-6deg]
              "
            >
              THE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight">
              EXPERIENCE
            </h2>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-yellow-400">
              UPGRADE
            </h1>

            <p className="text-sm sm:text-base font-semibold mt-2">
              STARTS NOW !
            </p>

            {/* Curved Arrow — Desktop only */}
            <svg
              className="
              hidden lg:block
              absolute right-[-20px] bottom-[-10px]
              "
              width="120"
              height="60"
              viewBox="0 0 120 60"
              fill="none"
            >
              <path
                d="M10 30C45 80 85 65 110 40"
                stroke="#FFD400"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path d="M98 32L115 40L102 54" fill="#FFD400" />
            </svg>
          </div>

          {/* ================= CENTER CARD ================= */}
          <div className="w-full lg:w-auto flex justify-center shrink-0">

            <div
              className="
              bg-white
              rounded-lg md:rounded-xl
              shadow-2xl

              px-6 sm:px-7 py-5
              text-center

              w-full max-w-[320px]
              sm:max-w-[360px]
              lg:w-[340px]

              rotate-0 lg:rotate-[-6deg]
              "
            >
              <p className="text-gray-800 font-semibold text-sm sm:text-base leading-relaxed">
                We’ve just raised 54 Cr. in Series A Funding,
                one of the largest rounds in India’s experiential
                travel space.
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="
            w-full lg:w-[35%]
            text-white
            text-center lg:text-right

            space-y-3 sm:space-y-4
            text-base sm:text-lg
            font-semibold
            "
          >
            <p>
              More{" "}
              <span className="bg-yellow-400 text-black px-2 py-1">
                Destinations
              </span>
            </p>

            <p>
              More{" "}
              <span className="bg-yellow-400 text-black px-2 py-1">
                Events
              </span>
            </p>

            <p>
              Unforgettable{" "}
              <span className="bg-yellow-400 text-black px-2 py-1">
                Trips
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
