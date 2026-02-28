import { Bike, CalendarDays, CheckCircle2, MapPin, Star } from "lucide-react";

const topPackages = [
  {
    title: "Best Ladakh Bike Trip from Srinagar to Manali | Umling La",
    price: "Rs. 42,999/-",
    oldPrice: "Rs. 48,999/-",
    duration: "10N/11D",
    route: "Srinagar - Leh - Manali",
    image:
      "https://images.unsplash.com/photo-1609948543911-5a7e6b5234f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "9 Days Great Lakes Expedition: Ladakh Tour Package",
    price: "Rs. 30,999/-",
    oldPrice: "Rs. 35,999/-",
    duration: "8N/9D",
    route: "Leh - Nubra - Pangong - Hanle",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "8-Day Leh Ladakh Tour Package with Turtuk and Tso Moriri",
    price: "Rs. 28,999/-",
    oldPrice: "Rs. 32,999/-",
    duration: "7N/8D",
    route: "Leh - Nubra - Turtuk - Pangong",
    image:
      "https://images.unsplash.com/photo-1593697820989-3aa45a98a1f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "6 Days Leh and Ladakh Package with Nubra & Pangong",
    price: "Rs. 24,999/-",
    oldPrice: "Rs. 28,499/-",
    duration: "5N/6D",
    route: "Leh - Khardung La - Nubra - Pangong",
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "7-Day Leh Tour Package for Family with Siachen & Thang",
    price: "Rs. 39,999/-",
    oldPrice: "Rs. 45,999/-",
    duration: "6N/7D",
    route: "Leh - Nubra - Turtuk - Pangong",
    image:
      "https://images.unsplash.com/photo-1576381394626-53b3d2d48145?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "8 Days Thrilling Leh Ladakh Tour Package with Umling La",
    price: "Rs. 36,999/-",
    oldPrice: "Rs. 41,999/-",
    duration: "7N/8D",
    route: "Leh - Hanle - Umling La - Pangong",
    image:
      "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=1200&q=80",
  },
];

const placesToVisit = [
  {
    name: "Shanti Stupa",
    detail: "Hilltop white-domed Buddhist stupa with sunrise and sunset views.",
    info: "Leh | 8:00 AM - 8:00 PM",
  },
  {
    name: "Umling La",
    detail: "One of the highest motorable roads in the world for thrill-seekers.",
    info: "Demchok | Open 24 hours",
  },
  {
    name: "Leh Palace",
    detail: "Historic nine-storey palace with museum displays and old architecture.",
    info: "Leh | 7:00 AM - 7:00 PM",
  },
  {
    name: "Sangam Point",
    detail: "Confluence of Indus and Zanskar rivers with striking color contrast.",
    info: "Srinagar-Leh Highway | Open 24 hours",
  },
  {
    name: "Magnetic Hill",
    detail: "Famous optical illusion point with panoramic mountain views.",
    info: "Near Leh | Open 24 hours",
  },
];

const thingsToDo = [
  "Ride a bike across high-altitude passes.",
  "Try local dishes like Thukpa, Momos, and Butter Tea.",
  "Take a Bactrian camel safari in Hunder.",
  "Go stargazing in Hanle under clear night skies.",
  "Enjoy river rafting on the Zanskar stretch.",
  "Explore monastery trails and short scenic hikes.",
];

const bestTime = [
  {
    season: "Summer (May to September)",
    text: "Best for road trips, bike expeditions, and complete sightseeing circuits.",
  },
  {
    season: "Autumn (October)",
    text: "Fewer crowds, crisp weather, and dramatic mountain colors.",
  },
  {
    season: "Winter (November to February)",
    text: "Ideal for snow landscapes, frozen lakes, and extreme adventures.",
  },
];

const faqs = [
  {
    q: "What is the starting price of Ladakh tour packages?",
    a: "Our Ladakh packages start from around Rs. 15,800 per person, based on itinerary and season.",
  },
  {
    q: "How many days are ideal for a Leh Ladakh trip?",
    a: "A 6 to 9 day plan works well for popular routes covering Leh, Nubra, and Pangong.",
  },
  {
    q: "Is acclimatization included in the itinerary?",
    a: "Yes, most itineraries include acclimatization time in Leh for safer high-altitude travel.",
  },
  {
    q: "Do you offer group and customized trips?",
    a: "Yes, we provide both fixed group departures and fully customized private plans.",
  },
];

export default function Ladakh() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609948543911-5a7e6b5234f6?auto=format&fit=crop&w=1800&q=80"
          alt="Leh Ladakh"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Leh Ladakh Tour Packages 2026 | Book Now To Get Upto 25% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            All Inclusive Leh Ladakh Covering Nubra Valley, Khardung La, Pangong Lake.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 15,800/- Per Person</span>
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
            {[
              "4.9 (14,001 reviews)",
              "5.0 (3,850 reviews)",
              "4.9 (1,031 reviews)",
            ].map((rating) => (
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
            Explore the Best Leh Ladakh Tour Packages
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Like adventure seekers across the world, if you are dreaming of an epic Ladakh escape, this is
            the perfect time. Our Leh Ladakh tour packages are designed for group trips, families, couples,
            bikers, and custom travellers. Cover iconic spots like Pangong Lake, Nubra Valley, and Leh with
            stay, logistics, and route planning already sorted.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Choose from short to extended routes with flexible durations, reliable on-ground support, and
            carefully curated experiences. You focus on the adventure; we handle the details.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Ladakh Packages by WanderOn</h2>
        <p className="mt-2 text-slate-600">
          Top-selling routes with bike options, high-altitude highlights, and seamless travel support.
        </p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {topPackages.map((pkg) => (
            <article
              key={pkg.title}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-yellow-300 text-slate-900 rounded-full px-3 py-1 text-xs font-semibold">
                  <span className="line-through opacity-80 mr-1">{pkg.oldPrice}</span> {pkg.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
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
            <h2 className="text-2xl font-bold text-slate-900">Places to Visit in Ladakh</h2>
            <div className="mt-5 space-y-4">
              {placesToVisit.map((place) => (
                <div key={place.name} className="rounded-xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">{place.name}</p>
                  <p className="text-slate-700 mt-1">{place.detail}</p>
                  <p className="text-sm text-slate-500 mt-1">{place.info}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold">Things to Do in Ladakh</h2>
            <div className="mt-5 space-y-3">
              {thingsToDo.map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-200">
                  <Bike size={16} className="text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-8">Why Choose Us for Ladakh Trips</h3>
            <div className="mt-4 space-y-3">
              {[
                "Dedicated travel assistance from booking to return.",
                "Experienced trip captains and route planning support.",
                "Group, couple, family, and customized itineraries.",
                "On-ground team support and safety-first operations.",
              ].map((point) => (
                <p key={point} className="flex items-start gap-2 text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <span>{point}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time to Visit Ladakh</h2>
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
