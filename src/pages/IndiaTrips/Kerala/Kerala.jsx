import { CalendarDays, CheckCircle2, MapPin, Palmtree, Star } from "lucide-react";

const keralaPackages = [
  {
    title: "Best Kerala Tour Package",
    price: "Rs. 14,000/-",
    oldPrice: "Rs. 17,500/-",
    duration: "3N/4D",
    route: "Cochin - Munnar - Alleppey - Cochin",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Short Trip to Kerala with Alleppey Backwaters",
    price: "Rs. 14,999/-",
    oldPrice: "Rs. 18,499/-",
    duration: "3N/4D",
    route: "Cochin - Munnar - Alleppey",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "5-Day Captivating Kerala Tour",
    price: "Rs. 15,999/-",
    oldPrice: "Rs. 19,499/-",
    duration: "4N/5D",
    route: "Cochin - Munnar - Thekkady - Alleppey",
    image:
      "https://images.unsplash.com/photo-1582639296346-560c37a0f711?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kerala Honeymoon Romantic Escapade",
    price: "Rs. 17,600/-",
    oldPrice: "Rs. 21,999/-",
    duration: "5N/6D",
    route: "Cochin - Munnar - Thekkady - Alleppey",
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Misty Hills to Scenic Shores",
    price: "Rs. 23,500/-",
    oldPrice: "Rs. 28,999/-",
    duration: "7N/8D",
    route: "Cochin - Munnar - Thekkady - Alleppey - Kovalam - Trivandrum",
    image:
      "https://images.unsplash.com/photo-1580800939614-0e5f9e9f3f50?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customized Kerala Family/Couple Tour",
    price: "Customised",
    oldPrice: "",
    duration: "Flexible",
    route: "Tailored itinerary by your preference",
    image:
      "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1200&q=80",
  },
];

const themes = [
  "Kerala Solo Trip Package",
  "Kerala Tour Packages for Friends",
  "Kerala Family Vacation Packages",
  "Kerala Tour Packages for Couples",
  "Kerala Honeymoon Packages",
];

const reasonsToBook = [
  "Curated routes covering Munnar, Thekkady, Alleppey, and Athirapally.",
  "Well-paced itineraries for couples, families, friends, and solo travelers.",
  "Houseboat stays, hill station escapes, and backwater experiences in one trip.",
  "Customizable durations from 3-day quick trips to 8-day complete circuits.",
  "Smooth planning support with trusted stays and transfers.",
];

const placesToVisit = [
  {
    name: "Munnar",
    detail: "Tea plantations, misty hills, waterfalls, and viewpoint trails.",
  },
  {
    name: "Alleppey",
    detail: "Houseboat cruises and serene backwater scenery.",
  },
  {
    name: "Thekkady",
    detail: "Wildlife sanctuary, spice plantations, and forest boating.",
  },
  {
    name: "Kovalam",
    detail: "Popular beach destination with sunset points and water activities.",
  },
  {
    name: "Athirapally",
    detail: "Spectacular waterfall spot and scenic drive routes.",
  },
];

const bestTime = [
  {
    season: "Winter (October to February)",
    text: "Best weather for sightseeing, beaches, and hill station travel.",
  },
  {
    season: "Summer (March to May)",
    text: "Great for Munnar/Thekkady escapes and houseboat stays.",
  },
  {
    season: "Monsoon (June to September)",
    text: "Ideal for lush greenery and Ayurvedic wellness-focused trips.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Kerala tour packages?",
    a: "Kerala packages generally start from around Rs. 14,000 per person depending on duration and itinerary.",
  },
  {
    q: "How many days are ideal for Kerala trips?",
    a: "A 4 to 6 day plan works well for Munnar, Thekkady, and Alleppey. Longer 7-8 day routes cover beaches and extended circuits.",
  },
  {
    q: "Are Kerala packages available for couples and families?",
    a: "Yes, there are dedicated plans for couples, honeymooners, families, friends, and solo travelers.",
  },
  {
    q: "Can I customize my Kerala itinerary?",
    a: "Yes, destination mix, stay type, and duration can be customized based on your travel preferences.",
  },
];

export default function Kerala() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=80"
          alt="Kerala"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Kerala Tour Packages 2026: A Heartfelt Trip to God&apos;s Own Country
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Curated Kerala trips covering Athirapally Waterfalls, Munnar, and Alleppey.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 14,000/- Per Person</span>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Find Your Perfect Kerala Package</h2>
          <p className="mt-4 text-slate-700 leading-7">
            Kerala offers the ideal blend of backwaters, beaches, hill stations, forests, and rich cultural
            experiences. With options for couples, friends, families, and solo travelers, you can choose a
            travel style that fits your pace and preference.
          </p>
          <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-3">
            {themes.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Book Kerala Packages with WanderOn</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Kerala Tour Packages</h2>
        <p className="mt-2 text-slate-600">Short highlights, weeklong wonders, and complete Kerala circuits.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {keralaPackages.map((pkg) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Kerala</h2>
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
            <h2 className="text-2xl font-bold">Things To Do In Kerala</h2>
            <div className="mt-5 space-y-3">
              {[
                "Enjoy a traditional houseboat cruise through Kerala backwaters.",
                "Visit tea estates and scenic viewpoints in Munnar.",
                "Explore wildlife reserves and spice plantations in Thekkady.",
                "Relax on beaches like Kovalam and Varkala.",
                "Try adventure activities like surfing, trekking, and zip-lining.",
                "Experience local cuisine, culture, and art forms.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <Palmtree size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Kerala</h2>
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
