import { CalendarDays, CheckCircle2, MapPin, Ship, Star } from "lucide-react";

const andamanPackages = [
  {
    title: "Best of Andaman Islands",
    price: "Rs. 26,999/-",
    oldPrice: "Rs. 31,999/-",
    duration: "5N/6D",
    route: "Port Blair - Havelock - Neil Island",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Andaman Couple Escape",
    price: "Rs. 29,499/-",
    oldPrice: "Rs. 34,999/-",
    duration: "5N/6D",
    route: "Port Blair - Havelock - Neil",
    image:
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Andaman Family Holiday",
    price: "Rs. 24,999/-",
    oldPrice: "Rs. 29,499/-",
    duration: "4N/5D",
    route: "Port Blair - Havelock - Port Blair",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Scuba Special Andaman Trip",
    price: "Rs. 32,999/-",
    oldPrice: "Rs. 37,999/-",
    duration: "6N/7D",
    route: "Port Blair - Havelock - Neil - Ross",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Andaman Adventure Circuit",
    price: "Rs. 27,999/-",
    oldPrice: "Rs. 33,499/-",
    duration: "6N/7D",
    route: "Port Blair - Baratang - Havelock - Neil",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customized Andaman Tour",
    price: "Customised",
    oldPrice: "",
    duration: "Flexible",
    route: "Tailored itinerary by preference",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
  },
];

const reasonsToBook = [
  "Curated island itineraries covering Port Blair, Havelock, and Neil.",
  "Smooth ferry transfers, local transport, and activity coordination.",
  "Great options for couples, families, and adventure travellers.",
  "Flexible plans with custom add-ons like scuba and water sports.",
  "Dedicated support from booking stage till trip completion.",
];

const placesToVisit = [
  {
    name: "Radhanagar Beach",
    detail: "One of Asia’s top beaches known for white sand and sunset views.",
  },
  {
    name: "Havelock Island",
    detail: "Popular for scuba diving, snorkeling, and tropical beaches.",
  },
  {
    name: "Neil Island",
    detail: "Peaceful island with coral spots, clear waters, and scenic bridges.",
  },
  {
    name: "Cellular Jail",
    detail: "Historic landmark in Port Blair with light and sound show.",
  },
  {
    name: "Ross Island",
    detail: "Colonial ruins, island walks, and rich historical significance.",
  },
];

const bestTime = [
  {
    season: "Winter (October to February)",
    text: "Best for pleasant weather, water activities, and island hopping.",
  },
  {
    season: "Summer (March to May)",
    text: "Clear seas and good conditions for scuba/snorkeling.",
  },
  {
    season: "Monsoon (June to September)",
    text: "Off-season with occasional ferry disruptions and fewer crowds.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Andaman tour packages?",
    a: "Andaman packages generally start around Rs. 19,999 to Rs. 26,999 per person based on itinerary and season.",
  },
  {
    q: "How many days are ideal for Andaman?",
    a: "A 5 to 7 day itinerary is ideal for Port Blair, Havelock, and Neil Island.",
  },
  {
    q: "Do Andaman packages include ferry transfers?",
    a: "Most packages include inter-island ferry and local transfer support.",
  },
  {
    q: "Can I customize activities like scuba diving?",
    a: "Yes, activities like scuba, snorkeling, sea walk, and cruises can be customized.",
  },
];

export default function Andaman() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
          alt="Andaman"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Andaman Tour Packages 2026 | Up to 30% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Tropical island escapes with beaches, water sports, and curated stay experiences.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 19,999/- Per Person</span>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Explore the Best Andaman Tour Packages
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Andaman is perfect for beach lovers, honeymooners, families, and adventure seekers who want
            crystal-clear waters, coral experiences, and relaxed island vibes. Our itineraries are designed
            for smooth transfers, comfortable stays, and well-paced sightseeing.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Whether you want a short tropical break or a full island circuit with activities, we provide
            customizable plans that fit your travel style and budget.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Why Book Andaman Packages with WanderOn
        </h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {reasonsToBook.map((item) => (
            <div key={item} className="bg-white rounded-xl border border-slate-200 p-4 text-slate-700">
              <p className="flex items-start gap-2">
                <CheckCircle2 size={17} className="text-emerald-500 mt-0.5" />
                <span>{item}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Andaman Tour Packages</h2>
        <p className="mt-2 text-slate-600">Popular itineraries across Port Blair, Havelock, and Neil Island.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {andamanPackages.map((pkg) => (
            <article
              key={pkg.title}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                {pkg.oldPrice ? (
                  <div className="absolute top-3 left-3 bg-yellow-300 text-slate-900 rounded-full px-3 py-1 text-xs font-semibold">
                    <span className="line-through opacity-80 mr-1">{pkg.oldPrice}</span> {pkg.price}
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 bg-cyan-300 text-slate-900 rounded-full px-3 py-1 text-xs font-semibold">
                    {pkg.price}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{pkg.title}</h3>
                <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <CalendarDays size={15} className="text-[#08a8c7]" />
                    {pkg.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={15} className="text-[#08a8c7]" />
                    {pkg.route}
                  </p>
                </div>
                <button className="mt-4 w-full rounded-xl bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800 transition">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Andaman</h2>
            <div className="mt-5 space-y-4">
              {placesToVisit.map((place) => (
                <div key={place.name} className="rounded-xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">{place.name}</p>
                  <p className="text-slate-700 mt-1">{place.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold">Things To Do In Andaman</h2>
            <div className="mt-5 space-y-3">
              {[
                "Go scuba diving and snorkeling at top reef locations.",
                "Enjoy glass-bottom boat rides and sea walk experiences.",
                "Relax on pristine beaches and watch island sunsets.",
                "Take inter-island ferry rides and scenic ocean journeys.",
                "Explore historical sites and local island culture.",
                "Try kayaking, jet ski, banana ride, and other water sports.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <Ship size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Andaman</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {bestTime.map((item) => (
              <div key={item.season} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{item.season}</p>
                <p className="mt-2 text-slate-700 text-sm leading-6">{item.text}</p>
              </div>
            ))}
          </div>
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
    </main>
  );
}
