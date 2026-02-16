export default function AdventureCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* CTA CARD */}
        <div className="relative rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center">

          {/* BACKGROUND IMAGE */}
          <img
            src="/adventure-bg.jpg"
            alt="Adventure Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          {/* LEFT CONTENT */}
          <div className="relative z-10 w-full lg:w-1/2 p-10 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Dreaming of your next Adventure?
            </h2>

            <p className="mt-2 text-lg">
              Hit us up!
            </p>

            <button className="mt-6 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition">
              Connect Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative z-10 w-full lg:w-1/2 flex justify-center p-6">
            <img
              src="/mobile-mockup.png"
              alt="Mobile Mockup"
              className="max-w-xs lg:max-w-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
