import { TriangleAlert, ShieldAlert, Scale, Info } from "lucide-react";

const points = [
  "Information on this website is for general informational purposes only.",
  "Trip details, pricing, and availability are subject to change without prior notice.",
  "Media content may be representative and may vary from actual on-ground experience.",
  "Third-party services (hotels, transport, activity operators) are managed with due care but remain external providers.",
  "Weather, road, political, and operational conditions may affect itinerary execution.",
  "Travelers are responsible for carrying valid IDs, visas, permits, and required documents.",
];

export default function Disclaimer() {
  return (
    <main className="bg-[#f6fafb]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07343d] via-[#0a6071] to-[#08a8c7]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Legal</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">Disclaimer</h1>
          <p className="mt-4 text-sm md:text-base text-cyan-50 max-w-3xl leading-relaxed">
            Please review this disclaimer carefully before relying on any information or booking decisions
            made through our website and services.
          </p>
          <p className="mt-3 text-xs md:text-sm text-cyan-100">Effective Date: February 24, 2026</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <TriangleAlert className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Accuracy Notice</h2>
            <p className="mt-2 text-sm text-gray-600">
              We aim for accurate information, but errors or omissions may occasionally occur.
            </p>
          </article>
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <ShieldAlert className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Operational Limits</h2>
            <p className="mt-2 text-sm text-gray-600">
              Service execution may be affected by factors outside reasonable operational control.
            </p>
          </article>
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <Scale className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Liability Scope</h2>
            <p className="mt-2 text-sm text-gray-600">
              Liability is limited to the extent permitted by applicable law and booking terms.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <article className="bg-white border border-[#d4e6ec] rounded-2xl p-6 md:p-8">
          <div className="inline-flex items-center gap-2 text-[#0f5566]">
            <Info size={18} />
            <p className="text-sm font-semibold uppercase tracking-wide">Important Notice</p>
          </div>
          <ul className="mt-5 space-y-3">
            {points.map((point) => (
              <li key={point} className="text-sm md:text-base text-gray-700 leading-relaxed">
                • {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            By using this platform, you acknowledge and accept this disclaimer and related legal pages,
            including Privacy Policy and Terms & Conditions.
          </p>
        </article>
      </section>
    </main>
  );
}
