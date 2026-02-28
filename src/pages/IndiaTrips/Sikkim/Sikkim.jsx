import { CalendarDays, CheckCircle2, MapPin, MountainSnow, Star } from "lucide-react";

const sikkimPackages = [
  {
    title: "Best of Sikkim Group Tour",
    price: "Rs. 21,999/-",
    oldPrice: "Rs. 25,999/-",
    duration: "5N/6D",
    route: "Gangtok - Tsomgo Lake - Pelling",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "North Sikkim Explorer",
    price: "Rs. 24,499/-",
    oldPrice: "Rs. 28,499/-",
    duration: "6N/7D",
    route: "Gangtok - Lachen - Lachung - Yumthang",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gangtok Darjeeling Escape",
    price: "Rs. 19,999/-",
    oldPrice: "Rs. 23,499/-",
    duration: "5N/6D",
    route: "Gangtok - Darjeeling",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sikkim Family Vacation",
    price: "Rs. 18,999/-",
    oldPrice: "Rs. 22,999/-",
    duration: "4N/5D",
    route: "Gangtok - Namchi - Ravangla",
    image:
      "https://images.unsplash.com/photo-1618588507085-c79565432917?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Silk Route Sikkim Adventure",
    price: "Rs. 27,999/-",
    oldPrice: "Rs. 31,999/-",
    duration: "6N/7D",
    route: "Gangtok - Zuluk - Nathang Valley",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customized Sikkim Tour",
    price: "Customised",
    oldPrice: "",
    duration: "Flexible",
    route: "Tailored itinerary as per preference",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
  },
];

const reasonsToBook = [
  "Curated routes for Gangtok, North Sikkim, and scenic monasteries.",
  "Comfortable stays and well-coordinated mountain transport.",
  "Group, family, couple, and custom package options.",
  "Permit guidance and route planning support for high-altitude zones.",
  "Balanced itineraries with nature, adventure, and local culture.",
];

const placesToVisit = [
  {
    name: "Gangtok",
    detail: "MG Marg, cable car views, monasteries, and city culture.",
  },
  {
    name: "Tsomgo Lake",
    detail: "High-altitude glacial lake with snow-capped mountain views.",
  },
  {
    name: "Yumthang Valley",
    detail: "Valley of flowers with breathtaking mountain landscapes.",
  },
  {
    name: "Lachen & Lachung",
    detail: "Picturesque mountain villages and gateway to North Sikkim.",
  },
  {
    name: "Pelling",
    detail: "Kanchenjunga views, monasteries, and skywalk experiences.",
  },
];

const bestTime = [
  {
    season: "Spring (March to May)",
    text: "Clear views, mild weather, and blooming rhododendrons.",
  },
  {
    season: "Summer (June to August)",
    text: "Lush landscapes with occasional rains in some regions.",
  },
  {
    season: "Autumn (September to November)",
    text: "Best season for clear mountain views and sightseeing.",
  },
  {
    season: "Winter (December to February)",
    text: "Cold and snowy in high-altitude areas, great for winter lovers.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Sikkim tour packages?",
    a: "Sikkim packages usually start around Rs. 14,999 to Rs. 19,999 per person depending on itinerary.",
  },
  {
    q: "How many days are ideal for a Sikkim trip?",
    a: "A 5 to 7 day itinerary is ideal to cover Gangtok, Tsomgo, and North Sikkim highlights.",
  },
  {
    q: "Do I need permits for North Sikkim?",
    a: "Yes, certain regions require permits. Our team helps with guidance for required documentation.",
  },
  {
    q: "Can Sikkim tours be customized?",
    a: "Yes, you can customize route, stays, transport, and activity preferences.",
  },
];

export default function Sikkim() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1800&q=80"
          alt="Sikkim"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Sikkim Tour Packages 2026 | Up to 30% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Discover Gangtok, Tsomgo Lake, North Sikkim valleys, and stunning Himalayan views.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 14,999/- Per Person</span>
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
            Explore the Best Sikkim Tour Packages
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Sikkim offers a beautiful blend of mountain views, monasteries, glacial lakes, and peaceful
            hill-town culture. Our itineraries are crafted for travelers who want scenic experiences with
            reliable planning, comfortable stays, and smooth local transport.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            From quick Gangtok escapes to complete North Sikkim circuits, choose a package that suits your
            travel style and budget while we handle the route details.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Why Book Sikkim Packages with WanderOn
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Sikkim Tour Packages</h2>
        <p className="mt-2 text-slate-600">Top itineraries across Gangtok, Pelling, and North Sikkim routes.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sikkimPackages.map((pkg) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Sikkim</h2>
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
            <h2 className="text-2xl font-bold">Things To Do In Sikkim</h2>
            <div className="mt-5 space-y-3">
              {[
                "Take a cable car ride and explore city viewpoints in Gangtok.",
                "Visit monasteries and experience local Buddhist culture.",
                "Enjoy high-altitude lake visits at Tsomgo and nearby regions.",
                "Explore North Sikkim valleys with scenic mountain drives.",
                "Try local Sikkim cuisine and market shopping experiences.",
                "Capture sunrise mountain views and peaceful hill landscapes.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <MountainSnow size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Sikkim</h2>
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
