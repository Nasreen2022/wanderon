import { CalendarDays, CheckCircle2, MapPin, Star, Tent } from "lucide-react";

const rajasthanPackages = [
  {
    title: "Royal Rajasthan Circuit",
    price: "Rs. 23,999/-",
    oldPrice: "Rs. 27,999/-",
    duration: "6N/7D",
    route: "Jaipur - Jodhpur - Udaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Jaipur Jaisalmer Desert Escape",
    price: "Rs. 19,499/-",
    oldPrice: "Rs. 22,999/-",
    duration: "5N/6D",
    route: "Jaipur - Jaisalmer - Sam",
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Udaipur Mount Abu Leisure Tour",
    price: "Rs. 17,999/-",
    oldPrice: "Rs. 21,499/-",
    duration: "4N/5D",
    route: "Udaipur - Mount Abu",
    image:
      "https://images.unsplash.com/photo-1599661046227-14f3990f7e30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Jodhpur Jaisalmer Heritage Trip",
    price: "Rs. 18,999/-",
    oldPrice: "Rs. 22,499/-",
    duration: "5N/6D",
    route: "Jodhpur - Jaisalmer",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Complete Rajasthan Backpacking",
    price: "Rs. 27,499/-",
    oldPrice: "Rs. 31,999/-",
    duration: "8N/9D",
    route: "Jaipur - Pushkar - Jodhpur - Jaisalmer - Udaipur",
    image:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customized Rajasthan Family Tour",
    price: "Customised",
    oldPrice: "",
    duration: "Flexible",
    route: "Tailored itinerary by preference",
    image:
      "https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&w=1200&q=80",
  },
];

const reasonsToBook = [
  "Curated routes covering forts, palaces, lakes, and desert experiences.",
  "Great options for couples, families, and group departures.",
  "Balanced itineraries with sightseeing and local cultural immersion.",
  "Comfortable stays and seamless transport coordination.",
  "Customizable packages for budget, premium, or luxury travel.",
];

const placesToVisit = [
  {
    name: "Jaipur",
    detail: "Amer Fort, City Palace, Hawa Mahal, and vibrant bazaars.",
  },
  {
    name: "Udaipur",
    detail: "City of lakes with palaces, boat rides, and sunset points.",
  },
  {
    name: "Jodhpur",
    detail: "Mehrangarh Fort, blue city lanes, and heritage architecture.",
  },
  {
    name: "Jaisalmer",
    detail: "Golden fort city with dunes, camps, and desert sunsets.",
  },
  {
    name: "Pushkar",
    detail: "Sacred lake town with cafés, temples, and cultural vibes.",
  },
];

const bestTime = [
  {
    season: "Winter (October to March)",
    text: "Best season for sightseeing, city tours, and desert experiences.",
  },
  {
    season: "Summer (April to June)",
    text: "Suitable for shorter trips with early morning and evening plans.",
  },
  {
    season: "Monsoon (July to September)",
    text: "Pleasant for Udaipur and Mount Abu with fewer crowds.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Rajasthan tour packages?",
    a: "Packages generally start around Rs. 14,999 to Rs. 19,499 per person based on route and season.",
  },
  {
    q: "How many days are enough for Rajasthan?",
    a: "A 5 to 7 day itinerary is ideal for popular cities like Jaipur, Jodhpur, Udaipur, and Jaisalmer.",
  },
  {
    q: "Can Rajasthan tours be customized?",
    a: "Yes. You can customize destinations, hotel category, transport mode, and activity pace.",
  },
  {
    q: "Do Rajasthan packages include desert camp stays?",
    a: "Many packages include Jaisalmer desert camp experiences with cultural evenings and dinner.",
  },
];

export default function Rajasthan() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1800&q=80"
          alt="Rajasthan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Rajasthan Tour Packages 2026 | Up to 30% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Explore royal forts, desert dunes, lakeside palaces, and colorful city culture.
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
            Explore the Best Rajasthan Tour Packages
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Rajasthan is a perfect blend of history, culture, architecture, and desert adventure. Our
            itineraries are designed to help you experience iconic forts, local markets, palace stays, and
            traditional cultural evenings without travel stress.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Whether you are planning a quick getaway or a complete state circuit, we provide curated plans,
            reliable support, and customizable options suited to your travel style and budget.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Why Book Rajasthan Packages with WanderOn
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Rajasthan Tour Packages</h2>
        <p className="mt-2 text-slate-600">Top routes covering Jaipur, Udaipur, Jodhpur, and Jaisalmer.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {rajasthanPackages.map((pkg) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Rajasthan</h2>
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
            <h2 className="text-2xl font-bold">Things To Do In Rajasthan</h2>
            <div className="mt-5 space-y-3">
              {[
                "Take a desert safari and camping experience in Jaisalmer.",
                "Visit royal forts, palaces, and heritage sites in major cities.",
                "Enjoy folk dance, music, and local cultural evenings.",
                "Explore colorful bazaars for handicrafts, fabrics, and jewelry.",
                "Try traditional Rajasthani cuisine in heritage settings.",
                "Capture sunrise and sunset views at forts and dunes.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <Tent size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Rajasthan</h2>
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
