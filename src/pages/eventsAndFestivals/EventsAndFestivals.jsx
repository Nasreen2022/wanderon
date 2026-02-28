import { CalendarDays, Flame, MapPin, Star } from "lucide-react";

const featuredEvents = [
  {
    month: "Mar",
    day: "14",
    title: "Holi In Vrindavan",
    location: "Mathura & Vrindavan",
    subtitle: "Colorful celebrations, temple rituals, and local street experiences.",
    image:
      "https://images.unsplash.com/photo-1617196035154-1e1f27f4401f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    month: "Apr",
    day: "10",
    title: "Baisakhi In Punjab",
    location: "Amritsar",
    subtitle: "Traditional food, folk dance, and festive village life.",
    image:
      "https://images.unsplash.com/photo-1582647509711-c8aa8b3f9f9d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    month: "Nov",
    day: "01",
    title: "Diwali In Jaipur",
    location: "Jaipur",
    subtitle: "Lit-up markets, palace lights, and festive city walks.",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988f1?auto=format&fit=crop&w=1200&q=80",
  },
];

const monthHighlights = [
  "January: Rann Utsav, Jaipur Literature Festival",
  "February: Goa Carnival, Desert Festival Jaisalmer",
  "March: Holi Specials, International Yoga Festival",
  "April: Baisakhi Trails, Tulip Festival Kashmir",
  "October-November: Navratri & Diwali Getaways",
  "December: Christmas In Goa, New Year In Mountains",
];

const festivalPackages = [
  {
    title: "Rann Utsav Cultural Escape",
    duration: "4N/5D",
    price: "Starting from Rs. 22,999/-",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Holi Celebration Circuit",
    duration: "3N/4D",
    price: "Starting from Rs. 16,999/-",
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Diwali Royal Rajasthan",
    duration: "5N/6D",
    price: "Starting from Rs. 28,499/-",
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Goa Carnival Party Trip",
    duration: "4N/5D",
    price: "Starting from Rs. 19,999/-",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Durga Puja Kolkata Trails",
    duration: "3N/4D",
    price: "Starting from Rs. 17,499/-",
    image:
      "https://images.unsplash.com/photo-1616198814651-01b65868f6b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Christmas In Kerala",
    duration: "5N/6D",
    price: "Starting from Rs. 25,999/-",
    image:
      "https://images.unsplash.com/photo-1602305912999-7f07e9b69f17?auto=format&fit=crop&w=1200&q=80",
  },
];

const faqs = [
  {
    q: "What is included in Events & Festivals packages?",
    a: "Most packages include stay, local transfers, sightseeing, and key festival experiences. Final inclusions vary by destination and departure date.",
  },
  {
    q: "Can I customize the itinerary?",
    a: "Yes. You can customize hotels, transfers, and activity pace based on your budget and travel preferences.",
  },
  {
    q: "Are these group departures or private trips?",
    a: "Both options are available. You can choose fixed community departures or request a private customized plan.",
  },
  {
    q: "How early should I book festival trips?",
    a: "Festival seasons sell out quickly, so booking at least 30 to 60 days early is recommended for better prices and availability.",
  },
];

export default function EventsAndFestivals() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#fde68a_0,_#fff7ed_30%,_#f8fafc_75%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full">
            <Flame size={14} />
            Events & Festivals
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900 max-w-3xl leading-tight">
            Celebrate Every Season With Curated Festival Trips
          </h1>
          <p className="mt-4 text-slate-700 max-w-3xl md:text-lg">
            Explore India and international celebrations with thoughtfully planned packages for cultural events, festive getaways, and unforgettable moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="bg-[#08a8c7] text-white px-6 py-3 rounded-full font-semibold hover:brightness-95 transition">
              Book A Festival Trip
            </button>
            <button className="border border-slate-300 bg-white text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition">
              Explore Upcoming Dates
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Discover Events</h2>
        <p className="mt-2 text-slate-600">
          Join the most vibrant celebrations with guided itineraries and smooth travel planning.
        </p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-white text-slate-900 rounded-lg px-3 py-2 text-center leading-tight">
                  <p className="text-xs font-semibold uppercase text-slate-500">{event.month}</p>
                  <p className="text-lg font-bold">{event.day}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                <p className="mt-1 text-sm text-slate-500 flex items-center gap-1">
                  <MapPin size={14} />
                  {event.location}
                </p>
                <p className="mt-3 text-slate-700">{event.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Events By Month</h2>
          <p className="mt-2 text-slate-600">Choose your travel window and festival vibe.</p>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-3">
            {monthHighlights.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 flex items-start gap-2"
              >
                <CalendarDays size={16} className="text-[#08a8c7] mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">All Events & Festivals Packages</h2>
        <p className="mt-2 text-slate-600">Handpicked itineraries designed around major celebration periods.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {festivalPackages.map((pkg) => (
            <article
              key={pkg.title}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <img src={pkg.image} alt={pkg.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{pkg.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{pkg.duration}</p>
                <p className="mt-3 text-[#08a8c7] font-semibold">{pkg.price}</p>
                <button className="mt-4 w-full rounded-xl bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800 transition">
                  View Package
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="rounded-3xl bg-slate-900 text-white p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold">Want Personalized Festival Recommendations?</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Share your travel month, budget, and preferred celebration. Our team will suggest the best-fit itinerary for you.
          </p>
          <button className="mt-6 bg-[#08a8c7] px-6 py-3 rounded-full font-semibold hover:brightness-95 transition">
            Request Callback
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Traveler Reviews</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            "The itinerary was smooth and perfectly timed for the festival dates.",
            "Great hotels, local guides, and amazing cultural experiences.",
            "Very responsive support team from booking to return travel.",
          ].map((review) => (
            <div key={review} className="rounded-2xl bg-white border border-slate-200 p-5">
              <div className="flex gap-1 text-amber-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="mt-3 text-slate-700">{review}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">FAQs</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-xl bg-white border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
