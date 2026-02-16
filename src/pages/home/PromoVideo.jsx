export default function PromoVideo() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Banner Container */}
        <div className="rounded-lg overflow-hidden shadow-md flex items-center justify-center">

          {/* Video */}
          <video
            src="/banner/EarlyBirdBanner.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="max-w-full max-h-full object-contain"
          />

        </div>

      </div>
    </section>
  );
}
