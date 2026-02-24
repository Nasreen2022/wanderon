import { ShieldCheck, Globe2, Users, HeartHandshake, Mountain, Plane, Star } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Happy Travelers", value: "25,000+" },
  { label: "Curated Trips", value: "300+" },
  { label: "Destinations", value: "60+" },
  { label: "Average Rating", value: "4.8/5" },
];

const values = [
  {
    icon: Users,
    title: "Community First",
    description:
      "Every itinerary is designed to create real connections. We focus on group chemistry, local experiences, and meaningful moments.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and Trust",
    description:
      "From verified stays to trained trip captains, we run each journey with clear standards and dependable on-ground support.",
  },
  {
    icon: Globe2,
    title: "Responsible Travel",
    description:
      "We collaborate with local partners and promote mindful travel that supports communities while reducing unnecessary impact.",
  },
  {
    icon: HeartHandshake,
    title: "Human Support",
    description:
      "Before, during, and after your trip, our team is available to help with planning, coordination, and quick issue resolution.",
  },
];

const highlights = [
  "Handpicked stays, routes, and experiences",
  "Experienced trip leaders and local experts",
  "Transparent pricing with clear inclusions",
  "Balanced itineraries with adventure and comfort",
  "Supportive community for solo and group travelers",
  "Memories designed to last beyond the trip",
];

export default function AboutUs() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06333d] via-[#075768] to-[#08a8c7]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-100">About Trip Vocation</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Building journeys that feel personal, safe, and unforgettable.
          </h1>
          <p className="mt-5 text-sm md:text-base text-cyan-50 max-w-2xl leading-relaxed">
            We are a modern travel brand focused on curated community trips, international escapes,
            and India adventures. Our mission is simple: make travel easier to plan and richer to
            experience for every kind of explorer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/upcoming"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              <Plane size={16} />
              Explore Trips
            </Link>
            <Link
              to="/early-bird"
              className="inline-flex items-center gap-2 border border-white/80 text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              <Star size={16} />
              Early Bird Offer
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-gray-200 p-5 md:p-6 bg-gray-50">
              <p className="text-2xl md:text-3xl font-bold text-[#0f2226]">{item.value}</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="text-sm font-semibold text-[#08a8c7] uppercase tracking-wider">Our Story</p>
            <h2 className="mt-2 text-2xl md:text-4xl font-bold text-gray-900">How we started</h2>
            <p className="mt-5 text-sm md:text-base text-gray-700 leading-relaxed">
              Trip Vocation started with one idea: travel should be exciting, but never stressful.
              We noticed travelers often struggled with fragmented planning, unclear pricing, and
              inconsistent quality. So we built a system around curated routes, dependable execution,
              and a team that actually supports travelers at every stage.
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
              Today, we design journeys across India and international destinations with a strong
              focus on comfort, discovery, and community. Whether it is your first trip or your
              tenth, we aim to deliver the same confidence and joy every single time.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/journey/vietnam 2.jpg"
              alt="Travelers on a curated journey"
              className="w-full h-[300px] md:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f6fbfc] border-y border-[#d8edf2]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">What we stand for</h2>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl mx-auto mt-4">
            These principles shape every itinerary, partnership, and traveler interaction.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mt-10">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6">
                  <div className="w-11 h-11 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/journey/ladakh-re.jpg"
              alt="Mountain destination from Trip Vocation itinerary"
              className="w-full h-[300px] md:h-[420px] object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-800 rounded-full text-sm font-semibold">
              <Mountain size={16} />
              Why travelers choose us
            </div>
            <ul className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#08a8c7] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-[#0f2226] text-gray-100 p-6">
              <h3 className="text-xl font-semibold">Ready for your next journey?</h3>
              <p className="mt-2 text-sm text-gray-300">
                Browse upcoming departures and find a trip that matches your mood, budget, and travel style.
              </p>
              <Link
                to="/upcoming"
                className="mt-5 inline-flex items-center gap-2 bg-[#08a8c7] hover:bg-[#0894ae] px-5 py-3 rounded-full text-sm font-semibold transition"
              >
                View Upcoming Trips
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
