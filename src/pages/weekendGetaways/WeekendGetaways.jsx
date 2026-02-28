import { CalendarDays, CheckCircle2, MapPin, Star, Trees } from "lucide-react";

const weekendPackages = [
  {
    title: "Kasol Tosh Weekend Escape",
    price: "Rs. 8,999/-",
    oldPrice: "Rs. 10,999/-",
    duration: "2N/3D",
    route: "Delhi - Kasol - Tosh - Delhi",
    image:
      "https://images.unsplash.com/photo-1565019011521-b0575c8fdb75?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rishikesh Adventure Getaway",
    price: "Rs. 7,499/-",
    oldPrice: "Rs. 9,499/-",
    duration: "2N/3D",
    route: "Delhi - Rishikesh - Delhi",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Jaipur Heritage Weekend",
    price: "Rs. 7,999/-",
    oldPrice: "Rs. 9,999/-",
    duration: "2N/3D",
    route: "Delhi - Jaipur - Delhi",
    image:
      "https://images.unsplash.com/photo-1599661046227-14f3990f7e30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Jibhi Tirthan Valley Trip",
    price: "Rs. 9,499/-",
    oldPrice: "Rs. 11,499/-",
    duration: "2N/3D",
    route: "Delhi - Jibhi - Tirthan - Delhi",
    image:
      "https://images.unsplash.com/photo-1577641776669-50f8caac8c65?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Udaipur Quick Retreat",
    price: "Rs. 10,999/-",
    oldPrice: "Rs. 13,499/-",
    duration: "3N/4D",
    route: "Udaipur City Circuit",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Goa Weekend Party Trip",
    price: "Rs. 11,999/-",
    oldPrice: "Rs. 14,499/-",
    duration: "3N/4D",
    route: "North Goa - South Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  },
];

const highlights = [
  "Short, smart itineraries designed for working professionals.",
  "Fixed departures and hassle-free planning from major cities.",
  "Budget-friendly packages with verified stays and transport.",
  "Adventure, culture, and relaxation options in one platform.",
  "Ideal for friends, couples, and solo weekend travellers.",
];

const topDestinations = [
  {
    name: "Kasol",
    detail: "Riverside cafés, easy treks, and mountain village vibes.",
  },
  {
    name: "Rishikesh",
    detail: "Rafting, cafés, yoga hubs, and scenic Ganga ghats.",
  },
  {
    name: "Jaipur",
    detail: "Royal forts, shopping streets, and vibrant food scenes.",
  },
  {
    name: "Jibhi",
    detail: "Wooden cabins, pine forests, and offbeat valley views.",
  },
  {
    name: "Udaipur",
    detail: "Lake views, sunset points, and heritage experiences.",
  },
];

const bestTime = [
  {
    season: "Spring (February to April)",
    text: "Great weather for hills, camping, and road trips.",
  },
  {
    season: "Summer (May to June)",
    text: "Perfect for mountain escapes and cool-weather getaways.",
  },
  {
    season: "Monsoon (July to September)",
    text: "Lush landscapes for selected destinations and short retreats.",
  },
  {
    season: "Autumn & Winter (October to January)",
    text: "Best season for city breaks, deserts, and snow routes.",
  },
];

const faqs = [
  {
    q: "What are weekend getaways packages?",
    a: "These are short-duration trips (typically 2N/3D or 3N/4D) designed for quick travel breaks.",
  },
  {
    q: "What is the starting cost for weekend trips?",
    a: "Most packages start from around Rs. 6,999 to Rs. 9,999 depending on destination and inclusions.",
  },
  {
    q: "Are weekend departures available every week?",
    a: "Yes, many packages have frequent departures, especially from major metro cities.",
  },
  {
    q: "Can I customize a weekend itinerary?",
    a: "Yes. You can customize stay category, activities, and travel mode based on your preferences.",
  },
];

export default function WeekendGetaways() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1800&q=80"
          alt="Weekend Getaways"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Weekend Getaways 2026 | Quick Trips, Big Memories
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Short and exciting weekend escapes across hills, beaches, deserts, and cultural cities.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 6,999/- Per Person</span>
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
            Discover the Best Weekend Getaways
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            If you are looking for a quick break from routine, weekend getaways are the perfect choice. Our
            packages are crafted for short travel windows and include efficient itineraries, reliable stays,
            and smooth transfers to maximize your trip experience in just a few days.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Choose from mountain retreats, beach escapes, adventure hubs, and culture-rich cities depending
            on your mood, budget, and travel group.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Why Book Weekend Getaways with WanderOn
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Top Weekend Trips</h2>
        <p className="mt-2 text-slate-600">Short itineraries with high-value experiences and easy departures.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {weekendPackages.map((pkg) => (
            <article
              key={pkg.title}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute top-3 left-3 bg-yellow-300 text-slate-900 rounded-full px-3 py-1 text-xs font-semibold">
                  <span className="line-through opacity-80 mr-1">{pkg.oldPrice}</span> {pkg.price}
                </div>
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
            <h2 className="text-2xl font-bold text-slate-900">Top Destinations For Weekend Getaways</h2>
            <div className="mt-5 space-y-4">
              {topDestinations.map((place) => (
                <div key={place.name} className="rounded-xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">{place.name}</p>
                  <p className="text-slate-700 mt-1">{place.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold">Things To Do On Weekend Trips</h2>
            <div className="mt-5 space-y-3">
              {[
                "Go camping, bonfire, and short hikes in mountain valleys.",
                "Try river rafting, zipline, and adventure sports.",
                "Explore local cafés, street food, and market walks.",
                "Take heritage walks and fort/palace visits in city breaks.",
                "Plan road trips with scenic photography stops.",
                "Enjoy slow travel and wellness-focused retreats.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <Trees size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time For Weekend Getaways</h2>
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
