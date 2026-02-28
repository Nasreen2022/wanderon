export default function HeroVideo() {
  return (
    <section className="relative h-[72vh] sm:h-[78vh] md:h-[88vh] w-full overflow-hidden">

      {/* VIDEO */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Passionate Travelers Network
        </h1>

        <p className="mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-400">
          Fulfill
        </p>

      </div>
    </section>
  );
}
