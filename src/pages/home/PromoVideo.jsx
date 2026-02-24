export default function PromoVideo() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

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
            className="w-full h-auto max-h-[70vh] object-contain"
          />

        </div>

      </div>
    </section>
  );
}
