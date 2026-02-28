import { CalendarDays, CheckCircle2, MapPin, Snowflake, Star } from "lucide-react";

const featuredPackages = [
  {
    title: "Kashmir Winter Expedition",
    price: "Rs. 24,499/-",
    oldPrice: "Rs. 26,500/-",
    duration: "5N/6D",
    route: "Srinagar - Gulmarg - Pahalgam - Srinagar",
    image:
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kashmir Spring Special",
    price: "Rs. 26,999/-",
    oldPrice: "Rs. 29,000/-",
    duration: "5N/6D",
    route: "Srinagar - Sonamarg - Gulmarg - Pahalgam",
    image:
      "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Summer Backpacking Kashmir",
    price: "Rs. 24,499/-",
    oldPrice: "Rs. 26,500/-",
    duration: "5N/6D",
    route: "Srinagar - Gulmarg - Pahalgam - Srinagar",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heavenly Kashmir Escapade",
    price: "Rs. 17,999/-",
    oldPrice: "Rs. 20,999/-",
    duration: "4N/5D",
    route: "Srinagar - Gulmarg - Srinagar",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Couple Special Kashmir",
    price: "Customised",
    oldPrice: "",
    duration: "4N/5D",
    route: "Srinagar - Pahalgam - Gulmarg",
    image:
      "https://images.unsplash.com/photo-1516589091380-5d60167d9d5a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Family Tour to Jewels of Kashmir",
    price: "Customised",
    oldPrice: "",
    duration: "5N/6D",
    route: "Srinagar - Srinagar",
    image:
      "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?auto=format&fit=crop&w=1200&q=80",
  },
];

const reasonsToBook = [
  "Trusted by 5000+ travellers with 500+ Kashmir trips organised.",
  "Hassle-free planning with transport, hotels, and route support.",
  "Customizable itineraries for group, private, and family vacations.",
  "Local cultural experiences including Shikara rides and food trails.",
  "Seasonal departures for winter snow, spring blooms, and summer escapes.",
];

const placesToVisit = [
  {
    name: "Srinagar",
    detail: "Dal Lake, Mughal Gardens, old city markets, and houseboat stays.",
  },
  {
    name: "Gulmarg",
    detail: "Gondola rides, skiing zones, and panoramic snow-covered meadows.",
  },
  {
    name: "Pahalgam",
    detail: "Riverside valleys, pine forests, pony trails, and scenic viewpoints.",
  },
  {
    name: "Sonamarg",
    detail: "Glacier landscapes, alpine meadows, and adventure-friendly routes.",
  },
  {
    name: "Doodhpathri",
    detail: "Lush grasslands, streamside picnics, and peaceful mountain views.",
  },
];

const bestTime = [
  {
    season: "Spring (March to May)",
    text: "Ideal for blooming gardens, tulip season, and pleasant weather.",
  },
  {
    season: "Summer (June to August)",
    text: "Best for sightseeing, trekking, gondola rides, and family travel.",
  },
  {
    season: "Autumn (September to November)",
    text: "Golden chinar leaves, fewer crowds, and crisp scenic mornings.",
  },
  {
    season: "Winter (December to February)",
    text: "Perfect for snowfall, winter sports, and dreamy white landscapes.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Kashmir tour packages?",
    a: "The starting price is around Rs. 24,499 per person, depending on travel season and package type.",
  },
  {
    q: "How many days are ideal for a Kashmir trip?",
    a: "A 5 to 7 day plan is ideal to cover Srinagar, Gulmarg, Pahalgam, and Sonamarg comfortably.",
  },
  {
    q: "Are Kashmir packages customizable?",
    a: "Yes. You can customize hotels, activities, travel pace, and sightseeing preferences.",
  },
  {
    q: "Do packages include houseboat stay and transfers?",
    a: "Most packages include accommodation options like hotels/houseboats and intercity transfers.",
  },
];

export default function Kashmir() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=1800&q=80"
          alt="Kashmir"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Kashmir Tour Packages 2026 | Up to 40% Off | Book Now
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Exclusive Kashmir tours with Gulmarg, Sonamarg, Pahalgam and beyond.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 24,499/- Per Person</span>
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
            Experience Paradise on Earth in 2026
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Feel the magic of Kashmir with specially curated trip packages that cover snow-clad mountains,
            peaceful lakes, houseboat stays, and valley experiences. Choose from group tours, private tours,
            and customizable itineraries designed for different travel styles and budgets.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Our itineraries combine sightseeing, local culture, and adventure with comfortable stays and
            reliable transport support. Whether you want a quick escape or an extended scenic holiday, we
            help you build the perfect Kashmir experience.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Reasons To Book Kashmir Tour Packages with WanderOn
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Kashmir Tour Packages up to 40% Off</h2>
        <p className="mt-2 text-slate-600">
          Top-selling itineraries across Srinagar, Gulmarg, Sonamarg, and Pahalgam.
        </p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredPackages.map((pkg) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Kashmir</h2>
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
            <h2 className="text-2xl font-bold">Things To Do In Kashmir</h2>
            <div className="mt-5 space-y-3">
              {[
                "Ride a Shikara on Dal Lake and explore floating markets.",
                "Take a Gulmarg Gondola cable car ride to higher viewpoints.",
                "Enjoy pony rides in Sonamarg and Pahalgam valleys.",
                "Try winter activities like skiing and snowboarding.",
                "Taste authentic Kashmiri cuisine including Wazwan and Kahwa.",
                "Shop for pashmina, saffron, wooden crafts, and local spices.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <Snowflake size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Kashmir</h2>
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
