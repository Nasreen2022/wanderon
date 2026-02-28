import { CalendarDays, CheckCircle2, MapPin, Mountain, Star } from "lucide-react";

const uttarakhandPackages = [
  {
    title: "Complete Uttarakhand Explorer",
    price: "Rs. 22,999/-",
    oldPrice: "Rs. 27,499/-",
    duration: "6N/7D",
    route: "Nainital - Ranikhet - Kausani - Corbett",
    image:
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Auli Chopta Snow Escape",
    price: "Rs. 18,999/-",
    oldPrice: "Rs. 22,999/-",
    duration: "5N/6D",
    route: "Rishikesh - Joshimath - Auli - Chopta",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nainital Mussoorie Family Tour",
    price: "Rs. 16,999/-",
    oldPrice: "Rs. 20,499/-",
    duration: "4N/5D",
    route: "Nainital - Mussoorie",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rishikesh Adventure Weekend",
    price: "Rs. 9,999/-",
    oldPrice: "Rs. 12,499/-",
    duration: "2N/3D",
    route: "Rishikesh - Shivpuri - Neelkanth",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kedarkantha Trek + Dehradun",
    price: "Rs. 11,999/-",
    oldPrice: "Rs. 14,999/-",
    duration: "5N/6D",
    route: "Dehradun - Sankri - Kedarkantha",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customized Uttarakhand Holiday",
    price: "Customised",
    oldPrice: "",
    duration: "Flexible",
    route: "Tailored as per travel preference",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
];

const reasonsToBook = [
  "Curated itineraries for hills, wildlife, adventure, and spiritual routes.",
  "Group, family, couple, and custom options based on travel style.",
  "Reliable stays and transport with destination-specific route planning.",
  "Balanced trips with sightseeing, activities, and downtime.",
  "Dedicated support from planning stage to trip completion.",
];

const placesToVisit = [
  {
    name: "Nainital",
    detail: "Lakeside town with boating, viewpoints, and market walks.",
  },
  {
    name: "Mussoorie",
    detail: "Colonial hill station charm, scenic roads, and waterfalls.",
  },
  {
    name: "Rishikesh",
    detail: "Adventure capital with rafting, yoga centers, and Ganga ghats.",
  },
  {
    name: "Auli",
    detail: "Snow landscapes, ropeway views, and skiing-friendly slopes.",
  },
  {
    name: "Jim Corbett",
    detail: "Jungle safari experiences and rich wildlife sightings.",
  },
];

const bestTime = [
  {
    season: "Spring & Summer (March to June)",
    text: "Best for hill getaways, sightseeing, and family travel.",
  },
  {
    season: "Monsoon (July to September)",
    text: "Lush greenery with selective route planning due to rains.",
  },
  {
    season: "Autumn (October to November)",
    text: "Clear skies and pleasant weather for mountain views.",
  },
  {
    season: "Winter (December to February)",
    text: "Snow experiences in Auli/Chopta and winter trekking options.",
  },
];

const faqs = [
  {
    q: "What is the starting price for Uttarakhand tour packages?",
    a: "Packages usually start from around Rs. 8,999 to Rs. 12,999 per person depending on itinerary and season.",
  },
  {
    q: "How many days are ideal for Uttarakhand trips?",
    a: "A 4 to 7 day plan is ideal for covering major hill towns and adventure destinations.",
  },
  {
    q: "Can I customize Uttarakhand packages?",
    a: "Yes, routes, hotel category, transport, and activities can be customized as per your preference.",
  },
  {
    q: "Are adventure activities included in packages?",
    a: "Adventure options like rafting, trekking, and safari can be included based on package type.",
  },
];

export default function Uttarakhand() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1800&q=80"
          alt="Uttarakhand"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Uttarakhand Tour Packages 2026 | Up to 30% Off
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Explore mountains, lakes, rivers, and forests with curated Uttarakhand itineraries.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Starting Price:
            <span className="text-yellow-300 font-semibold"> Rs. 8,999/- Per Person</span>
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
            Explore the Best Uttarakhand Tour Packages
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            Uttarakhand is one of India&apos;s top destinations for nature escapes, adventure experiences,
            and peaceful hill vacations. From lakeside towns and snow slopes to forest reserves and spiritual
            routes, the region offers great variety for every kind of traveller.
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            Our itineraries are designed for short getaways as well as complete circuits with trusted stays,
            transfer support, and customizable add-ons to fit your travel style and budget.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Why Book Uttarakhand Packages with WanderOn
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
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Uttarakhand Tour Packages</h2>
        <p className="mt-2 text-slate-600">Top routes covering Nainital, Mussoorie, Rishikesh, Auli, and Corbett.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {uttarakhandPackages.map((pkg) => (
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
            <h2 className="text-2xl font-bold text-slate-900">Places To Visit In Uttarakhand</h2>
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
            <h2 className="text-2xl font-bold">Things To Do In Uttarakhand</h2>
            <div className="mt-5 space-y-3">
              {[
                "Go river rafting and adventure activities in Rishikesh.",
                "Take scenic mountain drives through major hill circuits.",
                "Enjoy boating and viewpoints in Nainital.",
                "Visit temples and spiritual landmarks in hill towns.",
                "Experience wildlife safari in Jim Corbett National Park.",
                "Try snow and winter experiences in Auli and nearby regions.",
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Best Time To Visit Uttarakhand</h2>
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
