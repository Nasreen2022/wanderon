import { CalendarDays, CheckCircle2, CloudRain, MapPin, Star } from "lucide-react";

const meghalayaPackages = [
  {
    title: "Meghalaya Backpacking Expedition",
    price: "Rs. 21,999/-",
    oldPrice: "Rs. 25,499/-",
    duration: "5N/6D",
    route: "Shillong - Cherrapunji - Dawki - Mawlynnong",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Best of Meghalaya Group Tour",
    price: "Rs. 19,999/-",
    oldPrice: "Rs. 23,499/-",
    duration: "4N/5D",
    route: "Shillong - Cherrapunji - Shillong",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Meghalaya + Kaziranga Combo",
    price: "Rs. 28,499/-",
    oldPrice: "Rs. 32,999/-",
    duration: "7N/8D",
    route: "Guwahati - Shillong - Cherrapunji - Kaziranga",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Living Root Bridge Trail",
    price: "Rs. 22,499/-",
    oldPrice: "Rs. 26,499/-",
    duration: "5N/6D",
    route: "Shillong - Cherrapunji - Nongriat",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Meghalaya Family Holiday",
    price: "Rs. 18,999/-",
    oldPrice: "Rs. 22,999/-",
    duration: "4N/5D",
    route: "Shillong - Dawki - Mawlynnong",
    image:
      "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customized Meghalaya Escape",
    price: "Customised",
    oldPrice: "",
    duration: "Flexible",
    route: "Tailored itinerary as per preference",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
];

const reasonsToBook = [
  "Curated routes covering Shillong, Cherrapunji, Dawki, and Mawlynnong.",
  "Balanced itineraries with nature, adventure, and local experiences.",
  "Group, couple, family, and custom travel options available.",
  "Supportive on-ground coordination and smooth transfer planning.",
  "Budget-friendly packages with trusted stay options.",
];

const placesToVisit = [
  {
    name: "Shillong",
    detail: "Music city vibes, cafes, viewpoints, and local markets.",
  },
  {
    name: "Cherrapunji",
    detail: "Waterfalls, caves, misty valleys, and root bridge trails.",
  },
  {
    name: "Dawki",
    detail: "Crystal-clear Umngot river and scenic boating experiences.",
  },
  {
    name: "Mawlynnong",
    detail: "Asia’s clean village with bamboo skywalk and local charm.",
  },
  {
    name: "Nongriat",
    detail: "Famous double-decker living root bridge trekking route.",
  },
];

const bestTime = [
  {
    season: "Spring (March to May)",
    text: "Great weather for sightseeing and outdoor exploration.",
  },
  {
    season: "Monsoon (June to September)",
    text: "Best for lush landscapes and full-flowing waterfalls.",
  },
  {
    season: "Autumn (October to November)",
    text: "Pleasant climate and clear views for road trips.",
  },
  {
    season: "Winter (December to February)",
    text: "Cool weather with ideal conditions for relaxed travel.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Meghalaya tour packages?",
    a: "Meghalaya packages usually start from around Rs. 15,999 to Rs. 19,999 per person depending on itinerary.",
  },
  {
    q: "How many days are ideal for Meghalaya?",
    a: "A 5 to 7 day itinerary works well for Shillong, Cherrapunji, Dawki, and nearby highlights.",
  },
  {
    q: "Can I include Kaziranga with Meghalaya?",
    a: "Yes, combo itineraries covering Meghalaya and Kaziranga are available.",
  },
  {
    q: "Are Meghalaya trips suitable for families?",
    a: "Yes, family-friendly packages with comfortable pacing and stays are available.",
  },
];

export default function Meghalaya() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80"
          alt="Meghalaya"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Meghalaya Tour Packages 2026 | Up to 25% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Explore waterfalls, living root bridges, and crystal rivers in the Abode of Clouds.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 15,999/- Per Person</span>
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
            Explore the Best Meghalaya Tour Packages
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Meghalaya is one of the most beautiful northeast destinations, known for misty hills, waterfalls,
            root bridges, caves, and clear river views. Our packages are designed to help you experience these
            landscapes comfortably with well-paced itineraries and trusted stays.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Whether you are traveling with friends, family, or as a couple, we offer flexible options that
            blend nature, adventure, and local culture in a smooth travel plan.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Why Book Meghalaya Packages with WanderOn
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Meghalaya Tour Packages</h2>
        <p className="mt-2 text-slate-600">Top itineraries across Shillong, Cherrapunji, Dawki, and Nongriat.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {meghalayaPackages.map((pkg) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Meghalaya</h2>
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
            <h2 className="text-2xl font-bold">Things To Do In Meghalaya</h2>
            <div className="mt-5 space-y-3">
              {[
                "Boat on the crystal-clear waters of Umngot river in Dawki.",
                "Trek to the double-decker living root bridge in Nongriat.",
                "Explore caves and waterfalls around Cherrapunji.",
                "Enjoy local Khasi cuisine and market walks in Shillong.",
                "Capture scenic viewpoints, skywalks, and bamboo trails.",
                "Take short nature hikes and village experiences.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <CloudRain size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Meghalaya</h2>
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
