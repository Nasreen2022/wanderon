import { BriefcaseBusiness, Users, Rocket, BadgeCheck, Mail, MapPin, ArrowRight } from "lucide-react";

const perks = [
  "High ownership and learning-driven environment",
  "Exposure to travel operations, product, and brand",
  "Collaborative cross-functional teams",
  "Fast execution culture with clear accountability",
  "Growth opportunities across business verticals",
  "Meaningful impact on customer experiences",
];

const openings = [
  {
    role: "Travel Operations Executive",
    type: "Full-time",
    location: "Gurugram",
    exp: "1-3 years",
  },
  {
    role: "Customer Success Associate",
    type: "Full-time",
    location: "Gurugram",
    exp: "0-2 years",
  },
  {
    role: "Performance Marketing Specialist",
    type: "Full-time",
    location: "Gurugram",
    exp: "2-4 years",
  },
  {
    role: "Content and Community Manager",
    type: "Full-time",
    location: "Gurugram",
    exp: "1-3 years",
  },
];

export default function Careers() {
  return (
    <main className="bg-[#f6fafb]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07343d] via-[#0a6071] to-[#08a8c7]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Join Us</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">Careers at Tripvocation</h1>
          <p className="mt-4 text-sm md:text-base text-cyan-50 max-w-3xl leading-relaxed">
            Build memorable travel experiences with a team that values speed, ownership, creativity,
            and customer obsession.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <Users className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">People First</h2>
            <p className="mt-2 text-sm text-gray-600">
              We build teams around trust, ownership, and growth.
            </p>
          </article>
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <Rocket className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">High Impact Work</h2>
            <p className="mt-2 text-sm text-gray-600">
              Solve real travel and customer experience challenges at scale.
            </p>
          </article>
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <BriefcaseBusiness className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Career Growth</h2>
            <p className="mt-2 text-sm text-gray-600">
              Structured responsibilities with room to learn and lead.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-8 md:pb-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0f2226]">Why work with us</h2>
            <ul className="mt-5 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="inline-flex items-start gap-2 text-sm md:text-base text-gray-700 leading-relaxed">
                  <BadgeCheck size={16} className="text-[#08a8c7] mt-1 shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[#0f2226] text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold">Apply Now</h2>
            <p className="mt-3 text-sm text-gray-300">
              Share your CV and role preference. Our team will get back if your profile matches current openings.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-gray-200">
              <Mail size={16} />
              careers@tripvocation.in
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-gray-200">
              <MapPin size={16} />
              Gurugram, Haryana
            </p>
            <button className="mt-6 inline-flex items-center gap-2 bg-[#08a8c7] hover:bg-[#0896b1] text-white text-sm font-semibold px-5 py-3 rounded-full transition">
              Submit Application
              <ArrowRight size={16} />
            </button>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <article className="bg-white border border-[#d4e6ec] rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#0f2226]">Current Openings</h2>
          <div className="mt-5 space-y-4">
            {openings.map((job) => (
              <div key={job.role} className="border border-[#d4e6ec] rounded-xl p-4 md:p-5">
                <h3 className="font-semibold text-[#0f2226]">{job.role}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {job.type} • {job.location} • {job.exp}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
