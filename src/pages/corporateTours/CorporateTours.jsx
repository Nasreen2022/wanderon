import { Building2, BriefcaseBusiness, Users, ShieldCheck, CalendarClock, PlaneTakeoff, BadgeCheck, Headset, ArrowRight } from "lucide-react";

const stats = [
  { label: "Corporate Groups Served", value: "450+" },
  { label: "Destinations Available", value: "35+" },
  { label: "Average CSAT", value: "4.9/5" },
  { label: "Dedicated Response", value: "< 2 Hours" },
];

const offerings = [
  {
    title: "Offsite Retreats",
    description:
      "End-to-end planning for annual offsites, leadership retreats, and strategy meetups with balanced work and leisure schedules.",
  },
  {
    title: "Team Bonding Escapes",
    description:
      "Activity-based trips focused on collaboration and morale building with curated games, adventure modules, and local experiences.",
  },
  {
    title: "Incentive Travel Programs",
    description:
      "Reward top performers with premium domestic and international trips designed around celebration and brand impact.",
  },
  {
    title: "Conference and MICE",
    description:
      "Venue sourcing, logistics, rooming lists, transfers, and agenda coordination for smooth business events at any scale.",
  },
];

const processSteps = [
  "Requirement discovery call and budget alignment",
  "Destination shortlist with sample itineraries",
  "Hotel, transport, and activity blockings",
  "Pre-trip employee communication and onboarding",
  "On-ground trip captain and operations support",
  "Post-trip reports, invoices, and feedback insights",
];

const reasons = [
  "Single point of contact for your HR/Admin team",
  "Vendor-managed execution across transport, stay, and activities",
  "Compliance-ready invoicing and GST-friendly documentation",
  "Flexible itinerary options for mixed employee preferences",
  "Risk-aware planning with contingency and emergency support",
  "Custom branding options for internal campaigns and events",
];

export default function CorporateTours() {
  return (
    <main className="bg-[#f4f8fa]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#2a6a7a_0%,#10333d_40%,#091b21_100%)]" />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-28 left-10 w-72 h-72 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 text-white">
          <p className="text-sm tracking-[0.2em] uppercase text-cyan-100">Corporate Travel Solutions</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Corporate Tours engineered for productivity, culture, and impact.
          </h1>
          <p className="mt-5 text-sm md:text-base max-w-2xl text-cyan-50 leading-relaxed">
            From leadership retreats to large team offsites, Trip Vocation builds business-first travel
            programs that run on clear timelines, transparent budgets, and reliable on-ground execution.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item) => (
              <article key={item.label} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-5">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="mt-1 text-xs text-cyan-100">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-2 text-[#0f5566] text-sm font-semibold">
          <BriefcaseBusiness size={16} />
          What We Manage
        </div>
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-[#0f2226]">
          Purpose-built formats for corporate teams
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 gap-5 md:gap-6">
          {offerings.map((item) => (
            <article key={item.title} className="bg-white rounded-2xl border border-[#d7e8ed] p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0f2226]">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[#d7e8ed]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid lg:grid-cols-2 gap-10 md:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-900 text-sm font-semibold">
              <CalendarClock size={16} />
              Execution Workflow
            </div>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold text-[#0f2226]">A planning process teams trust</h2>
            <ol className="mt-6 space-y-3">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm md:text-base text-gray-700">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-[#08a8c7] text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl bg-[#0f2226] text-gray-100 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold">What your company gets</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex gap-2 text-sm">
                <BadgeCheck size={16} className="mt-0.5 text-cyan-300 shrink-0" />
                Custom itinerary based on objective, budget, and team size.
              </li>
              <li className="flex gap-2 text-sm">
                <BadgeCheck size={16} className="mt-0.5 text-cyan-300 shrink-0" />
                Clear cost sheet with inclusions, exclusions, and milestone payment plan.
              </li>
              <li className="flex gap-2 text-sm">
                <BadgeCheck size={16} className="mt-0.5 text-cyan-300 shrink-0" />
                Dedicated operations manager and on-trip support team.
              </li>
              <li className="flex gap-2 text-sm">
                <BadgeCheck size={16} className="mt-0.5 text-cyan-300 shrink-0" />
                Documentation support for approvals, finance, and reimbursements.
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-4">
              <p className="text-sm font-medium text-cyan-100">Typical team size</p>
              <p className="mt-1 text-2xl font-bold">20 to 500 Employees</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0f2226]">Why companies choose Trip Vocation</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reasons.map((reason) => (
            <article key={reason} className="bg-white rounded-xl border border-[#d7e8ed] p-4">
              <p className="text-sm text-gray-700 leading-relaxed">{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0f2226] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Plan your next corporate retreat with confidence.
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-300 max-w-xl">
                Share your team size, preferred dates, and destination type. Our corporate desk will
                send a tailored proposal with itinerary options and budget bands.
              </p>
            </div>

            <div className="rounded-2xl bg-white text-[#0f2226] p-6 md:p-7">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border p-3">
                  <p className="text-xs text-gray-500">Business Travel Desk</p>
                  <p className="text-sm font-semibold mt-1">zaidkhan.khan9@gmail.com</p>
                </div>
                <div className="rounded-xl border p-3">
                  <p className="text-xs text-gray-500">Direct Contact</p>
                  <p className="text-sm font-semibold mt-1">+918077726794</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800">
                  <Building2 size={14} />
                  HR Teams
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800">
                  <Users size={14} />
                  Admin Teams
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800">
                  <PlaneTakeoff size={14} />
                  Offsite Planning
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800">
                  <ShieldCheck size={14} />
                  Policy Support
                </span>
              </div>

              <button className="mt-5 w-full bg-[#08a8c7] hover:bg-[#0894ae] text-white font-semibold py-3 rounded-xl inline-flex items-center justify-center gap-2 transition">
                <Headset size={16} />
                Request Corporate Proposal
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
