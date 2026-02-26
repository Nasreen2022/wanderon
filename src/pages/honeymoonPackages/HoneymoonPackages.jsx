import { Heart, MapPin, Star, CheckCircle2 } from "lucide-react";

const reviews = [
  { platform: "Google", score: "4.9", count: "14,001 reviews" },
  { platform: "Tripadvisor", score: "5.0", count: "3,850 reviews" },
  { platform: "Facebook", score: "4.9", count: "1,031 reviews" },
];

const destinations = [
  {
    name: "Bali",
    price: "Starting from Rs. 44,999/-",
    blurb: "Sunset beach dinners, jungle swings, and private villa stays.",
    places: "Ubud, Kuta, Denpasar",
    things: "Bali swing, Mount Batur trek, water sports",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kashmir",
    price: "Starting from Rs. 29,999/-",
    blurb: "Shikara rides, snow valleys, and cozy mountain stays.",
    places: "Gulmarg, Srinagar, Pahalgam",
    things: "Shikara ride, gondola ride, local shopping",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Maldives",
    price: "Starting from Rs. 74,999/-",
    blurb: "Overwater villas, turquoise lagoons, and candlelight moments.",
    places: "Male, Addu Atoll, Fulhadhoo",
    things: "Scuba diving, sunset cruise, beach dinner",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Thailand",
    price: "Starting from Rs. 39,999/-",
    blurb: "Island hopping, lively nightlife, and tropical romance.",
    places: "Phuket, Krabi, Bangkok",
    things: "Long-tail boat tours, spa dates, street food",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kerala",
    price: "Starting from Rs. 26,999/-",
    blurb: "Backwater cruises, tea gardens, and lush hill escapes.",
    places: "Munnar, Alleppey, Thekkady",
    things: "Houseboat stay, ayurveda spa, wildlife trails",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Dubai",
    price: "Starting from Rs. 49,999/-",
    blurb: "Luxury skylines, desert adventures, and premium stays.",
    places: "Burj Khalifa, Palm Jumeirah, Marina",
    things: "Desert safari, dhow cruise, sky views",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
];

const inclusions = [
  "Premium stays and handpicked couple-friendly properties",
  "Curated sightseeing and romantic experiences",
  "Airport transfers and local commute support",
  "Dedicated travel captain and 24x7 assistance",
  "Flexible meal plans and custom add-ons",
  "Hassle-free planning from booking to return",
];

export default function HoneymoonPackages() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ffd6e7_0,_#ffeef5_35%,_#f8fafc_80%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-rose-600 bg-rose-100 px-3 py-1.5 rounded-full">
              <Heart size={14} />
              Honeymoon Tour Packages
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Where Forever Begins, Together
            </h1>
            <p className="mt-4 text-slate-700 text-base md:text-lg">
              Celebrate your new chapter with curated honeymoon packages across India and international destinations, designed for romance, comfort, and unforgettable experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-[#08a8c7] text-white px-6 py-3 rounded-full font-semibold hover:brightness-95 transition">
                Book Now
              </button>
              <button className="border border-slate-300 text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-white transition">
                Explore Destinations
              </button>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3 md:gap-4">
            {reviews.map((item) => (
              <div key={item.platform} className="bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm">
                <p className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  {item.score} on {item.platform}
                </p>
                <p className="text-xs text-slate-500 mt-1">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About Honeymoon Packages</h2>
        <div className="mt-5 space-y-4 text-slate-700 leading-7">
          <p>
            This is your sign to pack your bags and say yes to a beautiful forever. Our honeymoon packages are crafted for couples who want both romance and adventure, from peaceful beaches and mountain retreats to luxury island escapes.
          </p>
          <p>
            Every trip is built to give you private moments, scenic experiences, and a smooth travel journey. Whether you prefer a laid-back romantic getaway or an activity-filled escape, we help you choose the destination and pace that fits your story.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Places To Visit With Our Honeymoon Packages</h2>
        <p className="mt-2 text-slate-600">Handpicked destinations for newlyweds with the best blend of romance and experiences.</p>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {destinations.map((trip) => (
            <article key={trip.name} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-56">
                <img src={trip.image} alt={trip.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{trip.name}</h3>
                  <p className="text-sm">{trip.price}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-slate-700">{trip.blurb}</p>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">Places to visit:</span> {trip.places}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Things to do:</span> {trip.things}
                  </p>
                </div>

                <button className="mt-5 w-full bg-slate-900 text-white py-2.5 rounded-xl font-medium hover:bg-slate-800 transition">
                  View Package
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What You Get In Our Couple Packages</h2>
            <p className="mt-3 text-slate-600">
              From planning to execution, everything is built to keep your honeymoon stress-free and memorable.
            </p>
            <div className="mt-6 grid gap-3">
              {inclusions.map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-0.5" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8">
            <h3 className="text-xl font-bold">Plan Your Honeymoon With Us</h3>
            <p className="mt-2 text-slate-300">
              Tell us your travel month and budget. Our team will share the best options for your dream getaway.
            </p>

            <div className="mt-6 space-y-3">
              <div className="bg-slate-800 rounded-xl px-4 py-3 flex items-center gap-2 text-slate-200">
                <MapPin size={16} />
                India & International destinations
              </div>
              <div className="bg-slate-800 rounded-xl px-4 py-3 flex items-center gap-2 text-slate-200">
                <Heart size={16} />
                Customized romantic experiences
              </div>
              <div className="bg-slate-800 rounded-xl px-4 py-3 flex items-center gap-2 text-slate-200">
                <Star size={16} />
                Rated highly by thousands of travelers
              </div>
            </div>

            <button className="mt-6 w-full bg-[#08a8c7] py-3 rounded-xl font-semibold hover:brightness-95 transition">
              Request Callback
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
