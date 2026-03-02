import React from "react";

/* =====================================================
   OUR BLOGS SECTION — WANDERON EXACT LAYOUT
===================================================== */

export default function OurBlogsSection() {
  const smallBlogs = [
    {
      title: "6 Days Leh Ladakh on Bike: Guide To Thrilling Lifetime Journey",
      date: "February 28, 2026",
      read: "5 Min Read",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "WanderOn Ladakh Bike Trip Reviews: Real Rider Stories",
      date: "February 28, 2026",
      read: "5 Min Read",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
    {
      title: "Acute Mountain Sickness in Ladakh: Complete Guide",
      date: "February 28, 2026",
      read: "5 Min Read",
      image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
    },
  ];

  const featuredBlog = {
    title: "Exploring Leh to Changthang Region By Bike: Ultimate Guide",
    image: "/earlyBird/seasonTrip/kerala-trips-1.jpg",
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-24">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-14">
        <h2 className="text-2xl font-bold text-[#0a6c74] mb-2">
          Our Blogs
        </h2>

        <p className="text-[#0aa3b8] text-sm">
          Some good reads to help you travel better!
        </p>

        <div className="w-24 h-[3px] bg-yellow-400 mx-auto mt-3" />
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT — SMALL BLOG LIST */}
        <div className="space-y-6">
          {smallBlogs.map((blog, i) => (
            <SmallBlogCard key={i} blog={blog} />
          ))}
        </div>

        {/* RIGHT — FEATURED BLOG */}
        <FeaturedBlogCard blog={featuredBlog} />

      </div>
    </section>
  );
}

/* =====================================================
   SMALL BLOG CARD (LEFT SIDE)
===================================================== */

function SmallBlogCard({ blog }) {
  return (
    <div className="flex gap-4 border border-[#0aa3b8] rounded-lg p-4 hover:shadow-md transition cursor-pointer">

      {/* IMAGE */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-28 h-20 object-cover rounded"
      />

      {/* CONTENT */}
      <div>
        <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-xs text-gray-500">
          {blog.date} | {blog.read}
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   FEATURED BLOG CARD (RIGHT SIDE)
===================================================== */

function FeaturedBlogCard({ blog }) {
  return (
    <div className="border border-[#0aa3b8] rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer">

      {/* IMAGE */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[280px] object-cover"
      />

      {/* TITLE */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900">
          {blog.title}
        </h3>
      </div>
    </div>
  );
}