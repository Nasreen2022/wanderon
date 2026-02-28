import { CalendarDays, CheckCircle2, MapPin, Mountain, Star } from "lucide-react";

const himachalPackages = [
  {
    title: "Complete Himachal Backpacking Trip",
    price: "Rs. 21,999/-",
    oldPrice: "Rs. 25,499/-",
    duration: "8N/9D",
    route: "Shimla - Manali - Kasol - Jibhi",
    image:
      "https://images.unsplash.com/photo-1581791534621-8ac38a8fcb21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Manali Kasol Adventure Circuit",
    price: "Rs. 14,999/-",
    oldPrice: "Rs. 17,999/-",
    duration: "5N/6D",
    route: "Delhi - Manali - Kasol - Delhi",
    image:
      "https://images.unsplash.com/photo-1617191519105-d07b98b10de5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shimla Manali Family Holiday",
    price: "Rs. 17,499/-",
    oldPrice: "Rs. 21,000/-",
    duration: "5N/6D",
    route: "Shimla - Kufri - Manali",
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tirthan Jibhi Offbeat Escape",
    price: "Rs. 13,999/-",
    oldPrice: "Rs. 15,999/-",
    duration: "4N/5D",
    route: "Jibhi - Shoja - Tirthan Valley",
    image:
      "https://images.unsplash.com/photo-1577641776669-50f8caac8c65?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Spiti + Himachal Explorer",
    price: "Rs. 29,999/-",
    oldPrice: "Rs. 34,999/-",
    duration: "9N/10D",
    route: "Shimla - Kaza - Chandratal - Manali",
    image:
      "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Himachal Honeymoon Retreat",
    price: "Customised",
    oldPrice: "",
    duration: "5N/6D",
    route: "Shimla - Manali - Naggar",
    image:
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
  },
];

const highlights = [
  "Trusted departures with experienced trip captains and local support.",
  "Group tours, private trips, and custom itineraries for all travel styles.",
  "Comfortable stays, smooth transport, and well-balanced route planning.",
  "Popular circuits plus offbeat Himachal destinations in one place.",
  "Affordable fixed departures and premium custom options.",
];

const places = [
  {
    name: "Shimla",
    detail: "Colonial charm, Mall Road walks, and scenic Kufri viewpoints.",
  },
  {
    name: "Manali",
    detail: "Snow views, cafes, Solang adventures, and mountain stays.",
  },
  {
    name: "Kasol",
    detail: "Riverside hostels, chill vibes, and café culture in Parvati Valley.",
  },
  {
    name: "Jibhi",
    detail: "Wooden cottages, pine forests, waterfalls, and peaceful valleys.",
  },
  {
    name: "Spiti",
    detail: "High-altitude desert landscapes, monasteries, and road-trip thrill.",
  },
];

const bestTime = [
  {
    season: "Spring & Summer (March to June)",
    text: "Best for sightseeing, family trips, and outdoor experiences.",
  },
  {
    season: "Monsoon (July to September)",
    text: "Lush green valleys and fewer crowds in select destinations.",
  },
  {
    season: "Autumn (October to November)",
    text: "Clear skies, pleasant weather, and scenic mountain views.",
  },
  {
    season: "Winter (December to February)",
    text: "Snowfall in Shimla/Manali and perfect winter holiday vibes.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Himachal Pradesh tour packages?",
    a: "Packages typically start around Rs. 10,999 to Rs. 14,999 per person depending on route and season.",
  },
  {
    q: "How many days are enough for Himachal trips?",
    a: "A 5 to 7 day trip works well for Shimla-Manali circuits, while 8 to 10 days is better for Spiti and offbeat routes.",
  },
  {
    q: "Can I customize my Himachal itinerary?",
    a: "Yes, itineraries can be customized for destinations, stay type, transport, and activity preferences.",
  },
  {
    q: "Do you provide group departures from Delhi?",
    a: "Yes, multiple Himachal group departures are available from Delhi and nearby pickup points.",
  },
];

export default function Himachal() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581791534621-8ac38a8fcb21?auto=format&fit=crop&w=1800&q=80"
          alt="Himachal Pradesh"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Himachal Pradesh Tour Packages 2026 | Up to 30% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Explore snow peaks, pine valleys, and iconic hill towns with curated itineraries.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 10,999/- Per Person</span>
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
            Explore Himachal Pradesh with Our Curated Tour Packages
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Himachal Pradesh is one of India&apos;s most loved mountain destinations, known for snow-capped
            peaks, scenic roads, riverside villages, and adventure-friendly terrain. Our itineraries are built
            for backpackers, families, couples, and custom travellers with a balance of comfort and adventure.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            From popular circuits like Shimla and Manali to offbeat gems like Jibhi and Spiti, we help you
            plan a trip that fits your budget and pace while keeping the on-ground experience smooth.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Why Book Himachal Packages with WanderOn
        </h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {highlights.map((item) => (
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Best Himachal Pradesh Tour Packages
        </h2>
        <p className="mt-2 text-slate-600">Handpicked trips across Shimla, Manali, Kasol, Jibhi and Spiti.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {himachalPackages.map((pkg) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Himachal Pradesh</h2>
            <div className="mt-5 space-y-4">
              {places.map((place) => (
                <div key={place.name} className="rounded-xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">{place.name}</p>
                  <p className="text-slate-700 mt-1">{place.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold">Things To Do In Himachal Pradesh</h2>
            <div className="mt-5 space-y-3">
              {[
                "Go paragliding and adventure sports in Solang and Bir.",
                "Explore mountain cafés and local food in Kasol and Manali.",
                "Take scenic drives across high passes and valley roads.",
                "Try riverside camping and bonfire evenings.",
                "Visit monasteries and old temples in Kinnaur/Spiti circuits.",
                "Experience snowfall and winter landscapes in peak season.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <Mountain size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Himachal Pradesh</h2>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
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
