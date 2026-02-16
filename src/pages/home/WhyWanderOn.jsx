import {
  ShieldCheck,
  Eye,
  Filter,
  BadgeCheck
} from "lucide-react";

export default function WhyWanderOn() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Tripvocation?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <WhyCard
            title="No Third Party Mess"
            desc="100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!"
            icon={<ShieldCheck size={56} />}
          />

          <WhyCard
            title="Transparency & Security"
            desc="Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!"
            icon={<Eye size={56} />}
          />

          <WhyCard
            title="Co-Travelers Filtering"
            desc="Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!"
            icon={<Filter size={56} />}
          />

          <WhyCard
            title="One Stop Hassle Free Experience"
            desc="Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!"
            icon={<BadgeCheck size={56} />}
          />

        </div>
      </div>
    </section>
  );
}

/* ---------- Card Component ---------- */

function WhyCard({ title, desc, icon }) {
  return (
    <div className="relative border border-[#08a8c7] rounded-2xl p-6 pt-8 flex flex-col justify-between">

      {/* Text */}
      <div>
        <h3 className="text-xl font-bold text-[#08a8c7] mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Icon Area */}
      <div className="mt-8 flex justify-center text-[#08a8c7]">
        {icon}
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#08a8c7]/10 rounded-b-2xl"></div>
    </div>
  );
}
