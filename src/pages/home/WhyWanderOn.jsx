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
          Why Choose Tripvocation?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <WhyCard
            title="Fully Managed Experiences"
            desc="Every journey is planned and executed by our own expert team — no outsourcing, no confusion, just complete control and accountability."
            icon={<ShieldCheck size={56} />}
          />

          <WhyCard
            title="Clear & Reliable Operations"
            desc="Our ground crew actively monitors each trip, tracking routes and conditions to ensure everything runs smoothly and safely."
            icon={<Eye size={56} />}
          />

          <WhyCard
            title="Thoughtfully Matched Travelers"
            desc="We bring together compatible travelers through a careful screening process, creating comfortable, like-minded travel groups."
            icon={<Filter size={56} />}
          />

          <WhyCard
            title="Seamless End-to-End Service"
            desc="From quality stays and professional drivers to supportive trip leaders, we handle every detail so you simply enjoy the journey."
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
