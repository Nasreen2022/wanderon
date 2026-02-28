import { CalendarDays, CheckCircle2, MapPin, MountainSnow, Star } from "lucide-react";

const arunachalPackages = [
  {
    title: "Tawang Winter Expedition",
    price: "Rs. 27,999/-",
    oldPrice: "Rs. 32,999/-",
    duration: "7N/8D",
    route: "Guwahati - Dirang - Tawang - Bomdila",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Scenic Arunachal Road Trip",
    price: "Rs. 24,499/-",
    oldPrice: "Rs. 28,000/-",
    duration: "6N/7D",
    route: "Guwahati - Bhalukpong - Dirang - Tawang",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Offbeat Ziro + Tawang Circuit",
    price: "Rs. 31,999/-",
    oldPrice: "Rs. 36,999/-",
    duration: "8N/9D",
    route: "Itanagar - Ziro - Bomdila - Tawang",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Arunachal Family Getaway",
    price: "Rs. 23,999/-",
    oldPrice: "Rs. 27,499/-",
    duration: "5N/6D",
    route: "Guwahati - Dirang - Tawang",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bum La + Madhuri Lake Special",
    price: "Rs. 29,999/-",
    oldPrice: "Rs. 34,499/-",
    duration: "7N/8D",
    route: "Tawang - Bum La Pass - Sangetsar Lake",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customized Arunachal Explorer",
    price: "Customised",
    oldPrice: "",
    duration: "Flexible",
    route: "Tailored route based on preferences",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
];

const reasonsToBook = [
  "Expertly planned mountain itineraries with acclimatization support.",
  "Trusted trip operations with local assistance and route insights.",
  "Ideal options for groups, couples, families, and private travellers.",
  "Smooth transport coordination on challenging hill roads.",
  "Customizable trips including permits, stays, and sightseeing.",
];

const placesToVisit = [
  {
    name: "Tawang Monastery",
    detail: "One of India’s largest monasteries with panoramic mountain views.",
  },
  {
    name: "Sela Pass",
    detail: "High-altitude mountain pass with frozen lakes and dramatic scenery.",
  },
  {
    name: "Bum La Pass",
    detail: "Historic Indo-China border pass with rugged landscapes.",
  },
  {
    name: "Ziro Valley",
    detail: "Picturesque valley known for pine hills and Apatani culture.",
  },
  {
    name: "Sangetsar Lake",
    detail: "Famous Madhuri Lake with surreal alpine surroundings.",
  },
];

const bestTime = [
  {
    season: "Spring (March to May)",
    text: "Pleasant weather and clear road conditions for sightseeing.",
  },
  {
    season: "Summer (June to August)",
    text: "Lush green views with occasional rains in lower regions.",
  },
  {
    season: "Autumn (September to November)",
    text: "Crystal-clear skies and best mountain visibility for road trips.",
  },
  {
    season: "Winter (December to February)",
    text: "Snowfall in high-altitude regions for a true Himalayan feel.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Arunachal Pradesh tour packages?",
    a: "Trips generally start around Rs. 23,999 to Rs. 27,999 per person based on duration and route.",
  },
  {
    q: "Do I need permits to travel in Arunachal Pradesh?",
    a: "Yes. Indian travellers need ILP and foreign nationals require PAP. We can help guide permit requirements.",
  },
  {
    q: "How many days are ideal for Arunachal Pradesh?",
    a: "A 6 to 8 day itinerary is ideal for covering Dirang, Tawang, and nearby highlights.",
  },
  {
    q: "Are these packages available as group departures?",
    a: "Yes, both group departures and customized private trips are available.",
  },
];

export default function Arunachal() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1800&q=80"
          alt="Arunachal Pradesh"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Arunachal Pradesh Tour Packages 2026 | Up to 25% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Discover Tawang, Sela Pass, Ziro Valley, and untouched Himalayan landscapes.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 23,999/- Per Person</span>
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
            Explore Arunachal Pradesh with Curated Himalayan Itineraries
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Arunachal Pradesh offers pristine valleys, ancient monasteries, high-altitude passes, and rich
            tribal culture. Our packages are tailored for travellers who want scenic road journeys with a
            balanced mix of exploration, comfort, and local experiences.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Whether you are planning a group adventure or a customized trip, we provide route planning,
            reliable stays, and seamless on-ground support for a stress-free mountain experience.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Why Book Arunachal Pradesh Packages with WanderOn
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Best Arunachal Pradesh Tour Packages
        </h2>
        <p className="mt-2 text-slate-600">Top-selling routes covering Dirang, Tawang, Ziro, and beyond.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {arunachalPackages.map((pkg) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Arunachal Pradesh</h2>
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
            <h2 className="text-2xl font-bold">Things To Do In Arunachal Pradesh</h2>
            <div className="mt-5 space-y-3">
              {[
                "Visit monasteries and learn about local Buddhist traditions.",
                "Drive through scenic mountain passes and alpine roads.",
                "Explore tribal culture and local village life in valleys.",
                "Enjoy sunrise and stargazing in high-altitude regions.",
                "Capture dramatic landscapes, lakes, and snow-covered peaks.",
                "Taste regional cuisine and local tea in hill towns.",
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Arunachal Pradesh</h2>
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
