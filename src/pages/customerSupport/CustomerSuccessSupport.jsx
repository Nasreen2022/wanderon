import { Headset, Mail, Phone, Clock3, BadgeCheck, MessageSquare, FileText } from "lucide-react";

const supportChannels = [
  {
    icon: Phone,
    title: "Call Support",
    detail: "+918077726794",
    note: "For urgent booking and travel assistance",
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "zaidkhan.khan9@gmail.com",
    note: "For detailed queries and documentation help",
  },
  {
    icon: MessageSquare,
    title: "Trip Coordination",
    detail: "Dedicated trip updates",
    note: "Pre-trip and on-trip communication support",
  },
];

const helpAreas = [
  "Booking assistance and payment confirmation support",
  "Trip itinerary clarifications and destination guidance",
  "Changes, rescheduling, and cancellation process help",
  "Invoice, voucher, and documentation support",
  "On-ground escalation for active departures",
  "Post-trip feedback and service resolution",
];

export default function CustomerSuccessSupport() {
  return (
    <main className="bg-[#f6fafb]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07343d] via-[#0a6071] to-[#08a8c7]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Support</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Customer Success & Support
          </h1>
          <p className="mt-4 text-sm md:text-base text-cyan-50 max-w-3xl leading-relaxed">
            Our support team is here to assist you before, during, and after your trip with quick,
            practical, and transparent help.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {supportChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <article key={channel.title} className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
                <Icon className="text-[#08a8c7]" size={22} />
                <h2 className="mt-3 font-semibold text-[#0f2226]">{channel.title}</h2>
                <p className="mt-2 text-sm font-medium text-gray-800">{channel.detail}</p>
                <p className="mt-1 text-sm text-gray-600">{channel.note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-[#0f5566]">
              <BadgeCheck size={18} />
              <p className="text-sm font-semibold uppercase tracking-wide">How We Help</p>
            </div>
            <ul className="mt-5 space-y-3">
              {helpAreas.map((item) => (
                <li key={item} className="text-sm md:text-base text-gray-700 leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[#0f2226] text-white rounded-2xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-cyan-200">
              <Headset size={18} />
              <p className="text-sm font-semibold uppercase tracking-wide">Support Window</p>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-gray-200">
              <Clock3 size={16} />
              10:00 AM to 7:00 PM (Monday to Saturday)
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-gray-200">
              <Phone size={16} />
              +918077726794
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-gray-200">
              <Mail size={16} />
              zaidkhan.khan9@gmail.com
            </p>
            <p className="mt-6 text-sm text-gray-300 leading-relaxed">
              For faster resolution, keep your booking ID, travel dates, and registered contact details handy.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-cyan-100 bg-white/10 border border-white/20 px-3 py-2 rounded-full">
              <FileText size={14} />
              Priority response for active travelers
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
