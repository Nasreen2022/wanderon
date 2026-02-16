import { Ticket } from "lucide-react";

export default function EarlyBirdHero() {
  return (
    <section className="relative w-full">

      {/* ===== HERO CONTAINER ===== */}
      <div className="relative h-[420px] md:h-[520px] lg:h-[560px] w-full overflow-hidden">

        {/* Background Image */}
        <img
          src="/earlybird-bg.jpg"   // put image in public folder
          alt="Early Bird Offer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Bottom Dark Gradient (like WanderOn) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

        {/* ===== CENTER CONTENT ===== */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
            Early Bird Offer 2026
          </h1>

          {/* Discount Badge */}
          <div className="mt-3 bg-cyan-100 text-cyan-900 font-semibold px-4 py-1 rounded-md text-sm md:text-base">
            Discount Up To ₹7,500*
          </div>

          {/* CTA Button */}
          <button className="mt-8 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition">
            <Ticket size={18} />
            Book Your Voucher
          </button>

        </div>

        {/* ===== VOUCHER COUNTER RIGHT SIDE ===== */}
        <div
          className="
          absolute right-6 md:right-12
          bottom-16 md:bottom-20
          text-white text-center
          "
        >
          <p className="text-lg md:text-xl font-semibold mb-2">
            Vouchers left
          </p>

          <div
            className="
            bg-black/40 backdrop-blur-md
            px-8 py-6 rounded-xl
            text-2xl md:text-3xl font-bold
            shadow-lg
            "
          >
            42/300
          </div>
        </div>

      </div>
    </section>
  );
}
