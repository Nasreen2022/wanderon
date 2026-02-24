import { CalendarDays, Clock3, ArrowRight, Tag, BookOpenText, Mail } from "lucide-react";

const categories = [
  "Travel Guides",
  "Visa & Documents",
  "Budget Planning",
  "Corporate Travel",
  "Weekend Getaways",
  "International Trips",
];

const posts = [
  {
    title: "Spiti Valley Trip Planning Guide for 2026",
    category: "Travel Guides",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    image: "/journey/spiti-re.jpg",
    excerpt:
      "A complete route, stay, packing, and budgeting guide for first-time Spiti travelers planning with confidence.",
  },
  {
    title: "How to Plan a Team Offsite Without Operational Chaos",
    category: "Corporate Travel",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    image: "/journey/dubai re 01.jpg",
    excerpt:
      "A practical checklist for HR and admin teams to run successful offsites with timelines, approvals, and clear accountability.",
  },
  {
    title: "Vietnam Group Trip Cost Breakdown: Flights, Stay, and Activities",
    category: "Budget Planning",
    date: "Feb 03, 2026",
    readTime: "6 min read",
    image: "/journey/vietnam 2.jpg",
    excerpt:
      "Understand where your travel budget actually goes and how to optimize total cost without compromising experiences.",
  },
  {
    title: "Best Month-Wise Guide for Ladakh Adventures",
    category: "Travel Guides",
    date: "Feb 11, 2026",
    readTime: "9 min read",
    image: "/journey/ladakh-re.jpg",
    excerpt:
      "From road accessibility to weather windows, here is the month-by-month breakdown for planning the right Ladakh trip.",
  },
  {
    title: "10 Smart Hacks for Affordable International Holidays",
    category: "International Trips",
    date: "Feb 16, 2026",
    readTime: "5 min read",
    image: "/journey/bhutan 4.jpg",
    excerpt:
      "Simple planning moves that can reduce your travel spend while still keeping your itinerary premium and comfortable.",
  },
  {
    title: "Weekend Escape Playbook for Busy Professionals",
    category: "Weekend Getaways",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    image: "/journey/kerala-trips-1.jpg",
    excerpt:
      "A framework to plan quick two to three day breaks that actually help you reset instead of feeling rushed.",
  },
];

const quickGuides = [
  "First-time international traveler checklist",
  "How to choose between group and private tours",
  "Packing essentials by weather and destination type",
  "How to compare trip quotes correctly",
];

export default function Blog() {
  const featured = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <main className="bg-[#f7fbfc]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07323c] via-[#096173] to-[#08a8c7]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Travel Journal</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Insights, stories, and practical guides for smarter travel.
          </h1>
          <p className="mt-4 text-sm md:text-base text-cyan-50 max-w-2xl leading-relaxed">
            Explore destination guides, cost breakdowns, planning templates, and real travel insights
            from the Trip Vocation team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-[#b8dfe8] bg-white text-sm text-[#0f5566] hover:bg-cyan-50 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-10">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src={featured.image} alt={featured.title} className="w-full h-[280px] md:h-[420px] object-cover" />
          </div>

          <article className="rounded-3xl bg-white border border-[#d4e7ed] p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0f6f85]">
              <Tag size={14} />
              Featured Post
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#0f2226]">{featured.title}</h2>
            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">{featured.excerpt}</p>

            <div className="mt-5 flex flex-wrap gap-4 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1">
                <CalendarDays size={14} />
                {featured.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock3 size={14} />
                {featured.readTime}
              </span>
            </div>

            <button className="mt-6 inline-flex items-center gap-2 bg-[#08a8c7] hover:bg-[#0896b1] text-white text-sm font-semibold px-5 py-3 rounded-full transition">
              Read Article
              <ArrowRight size={16} />
            </button>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2226]">Latest Articles</h2>
          <button className="text-sm font-semibold text-[#0f6f85] hover:underline">View all posts</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {latestPosts.map((post) => (
            <article key={post.title} className="bg-white border border-[#d4e7ed] rounded-2xl overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold text-[#0f6f85] uppercase tracking-wider">{post.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#0f2226] leading-snug">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={14} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[#d4e7ed]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-800 text-sm font-semibold">
                <BookOpenText size={16} />
                Quick Travel Guides
              </div>
              <h2 className="mt-4 text-2xl md:text-4xl font-bold text-[#0f2226]">
                Bookmark these essentials before your next trip
              </h2>
            </div>

            <ul className="grid gap-3">
              {quickGuides.map((guide) => (
                <li key={guide} className="bg-[#f7fbfc] border border-[#d4e7ed] rounded-xl p-4 text-sm text-gray-700">
                  {guide}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="rounded-3xl bg-[#0f2226] text-white p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-200 text-sm font-semibold">
              <Mail size={16} />
              Newsletter
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">Get new travel insights every week</h2>
            <p className="mt-2 text-sm text-gray-300 max-w-xl">
              Subscribe for destination updates, planning tips, and special trip announcements from Trip Vocation.
            </p>
          </div>

          <div className="w-full md:w-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-72 px-4 py-3 rounded-xl text-sm text-black outline-none"
            />
            <button className="px-5 py-3 rounded-xl bg-[#08a8c7] hover:bg-[#0896b1] text-sm font-semibold whitespace-nowrap transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
