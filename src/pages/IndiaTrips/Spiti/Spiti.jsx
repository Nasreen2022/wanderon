import { Bike, CalendarDays, CheckCircle2, MapPin, Mountain, Star } from "lucide-react";

const groupPackages = [
  {
    title: "Discover Spiti Valley: Winter Wonders",
    duration: "6N/7D",
    price: "INR 24,999",
    route: "Shimla - Kaza - Tabo - Nako",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Spiti Backpacking",
    duration: "6N/7D",
    price: "INR 17,999",
    route: "Shimla - Kaza - Chicham - Manali",
    image:
      "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "2026 Spiti Valley Winter Tour",
    duration: "6N/7D",
    price: "INR 25,999",
    route: "Shimla - Kalpa - Kaza - Shimla",
    image:
      "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Frozen Spiti Backpacking",
    duration: "6N/7D",
    price: "INR 18,999",
    route: "Shimla - Reckong Peo - Kaza - Tabo",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
  },
];

const customPackages = [
  { title: "Astounding Spiti Valley Escapade", duration: "5N/6D" },
  { title: "Thrilling Spiti Valley Tour", duration: "7N/8D" },
  { title: "Spectacular Spiti Sojourn", duration: "6N/7D" },
  { title: "Chandigarh To Spiti Valley Expedition", duration: "5N/6D" },
  { title: "Spiti Valley Adventure From Delhi", duration: "6N/7D" },
];

const expeditionTypes = [
  {
    title: "Spiti Valley Group Tour",
    text: "Our most popular social route for first-timers and mountain lovers, with a full Shimla-to-Manali style experience.",
  },
  {
    title: "Solo Trip to Spiti Valley",
    text: "Travel independently with group safety, backup vehicle support, and like-minded travellers throughout the journey.",
  },
  {
    title: "Spiti Couple & Honeymoon Tour",
    text: "Romantic mountain escapes with curated stays, scenic spots, and quieter routes for couples.",
  },
  {
    title: "Spiti Family Tour",
    text: "Comfort-focused itineraries with better pacing, acclimatization support, and stay choices for families.",
  },
  {
    title: "Winter Spiti Special",
    text: "Extreme sub-zero route via Shimla for experienced travellers looking for White Spiti adventures.",
  },
];

const highlights = [
  "Flexible durations from 5N/6D quick circuits to 7N/8D full Spiti experiences.",
  "Iconic stops: Hikkim Post Office, Komic, Langza fossil village, and Chandratal.",
  "Trip support with transport planning, selected stays, and experienced trip captains.",
  "Summer and winter batches depending on the travel style you choose.",
  "Group, backpacking, bike, and custom route options in one place.",
];

const reasonsToBook = [
  "1500+ successful Spiti departures handled with on-ground operations.",
  "Direct operations model with route planning, stays, and travel support managed internally.",
  "Trained trip captains for high-altitude navigation and group coordination.",
  "Safety-first approach with real-time route planning and weather checks.",
  "Strong traveler community feedback and repeat trip participation.",
];

const bestTime = [
  {
    season: "Summer (June to September)",
    text: "Best time for full circuit routes, clear skies, and first-time Spiti trips.",
  },
  {
    season: "Autumn (October to November)",
    text: "Golden mountain views, thinner crowds, and excellent photography conditions.",
  },
  {
    season: "Winter (December to March)",
    text: "White Spiti experience with sub-zero temperatures and snow-covered landscapes.",
  },
  {
    season: "Spring (April to May)",
    text: "Transition season with snow remnants and gradually opening high-altitude routes.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Spiti Valley tour packages?",
    a: "Our Spiti packages start from around INR 17,999, depending on route, duration, and season.",
  },
  {
    q: "What is the best time to visit Spiti Valley?",
    a: "June to September is best for the full Spiti circuit, while winter trips are ideal for extreme adventure lovers.",
  },
  {
    q: "Can I do Spiti as a solo traveler?",
    a: "Yes. Group departures are a great option for solo travellers because they combine flexibility with safety.",
  },
  {
    q: "Are Spiti routes open throughout the year?",
    a: "No. Route conditions vary by season. Shimla-side access is generally more reliable in colder months.",
  },
];

export default function Spiti() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1800&q=80"
          alt="Spiti Valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Spiti Valley Tour Packages 2026 | Up to 30% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Curated Spiti packages covering Kaza, Chandra Taal, Hikkim, and more.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 17,999/- Per Person</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="bg-[#08a8c7] px-6 py-3 rounded-full font-semibold hover:brightness-95 transition">
              Request a Callback
            </button>
            <button className="bg-emerald-500 px-6 py-3 rounded-full font-semibold hover:brightness-95 transition">
              Chat With Us
            </button>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl">
            {["4.9 (14,001 reviews)", "5.0 (3,850 reviews)", "4.9 (1,031 reviews)"].map((rating) => (
              <div
                key={rating}
                className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-sm"
              >
                {rating}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-14">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About Spiti Valley Tour Packages</h2>
          <p className="mt-4 text-slate-700 leading-7">
            A Spiti trip is a true bucket-list adventure across India&apos;s high-altitude cold desert. These
            journeys are built for experience-driven travellers looking for raw landscapes, mountain roads,
            unique villages, and cinematic scenery.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Our curated routes include group tours, backpacking circuits, bike-friendly batches, and custom
            itineraries. You can choose a plan by season, duration, and travel style while we handle the
            logistics and on-ground coordination.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Most Versatile Spiti Group Packages</h2>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {groupPackages.map((pkg) => (
            <article
              key={pkg.title}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-44">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute top-3 left-3 bg-yellow-300 text-slate-900 rounded-full px-3 py-1 text-xs font-semibold">
                  {pkg.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-slate-900">{pkg.title}</h3>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <CalendarDays size={14} className="text-[#08a8c7]" />
                    {pkg.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#08a8c7]" />
                    {pkg.route}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Customized Spiti Valley Trip Packages</h2>
          <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-3">
            {customPackages.map((pkg) => (
              <div key={pkg.title} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="font-semibold text-slate-900">{pkg.title}</p>
                <p className="text-sm text-slate-600 mt-1">{pkg.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          WanderOn&apos;s Ultimate Spiti Expeditions: Choose Your Vibe
        </h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {expeditionTypes.map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-slate-700 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">2026 Spiti Trip Highlights</h2>
            <div className="mt-5 space-y-3">
              {highlights.map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-700">
                  <Mountain size={16} className="text-[#08a8c7] mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold">Why Book Spiti Tours with WanderOn</h2>
            <div className="mt-5 space-y-3">
              {reasonsToBook.map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Spiti Valley</h2>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {bestTime.map((item) => (
              <div key={item.season} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{item.season}</p>
                <p className="mt-2 text-slate-700 text-sm leading-6">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-slate-700 text-sm">
            For first-time Spiti travelers, July and August are generally easiest for full-route access.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">FAQs</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-xl bg-white border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold text-slate-900 flex items-center gap-2">
                <Star size={15} className="text-amber-500" />
                {item.q}
              </summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-[#08a8c7] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Ready for your Spiti adventure?</h3>
            <p className="text-cyan-100 mt-1">Get route guidance, batch options, and a personalized callback.</p>
          </div>
          <button className="bg-white text-[#08a8c7] px-6 py-3 rounded-full font-semibold hover:brightness-95 transition">
            Plan My Spiti Trip
          </button>
        </div>
      </section>
    </main>
  );
}
