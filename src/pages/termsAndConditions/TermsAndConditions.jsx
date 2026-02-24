import { FileText, ShieldCheck, Scale, AlertTriangle } from "lucide-react";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using our website and services, you agree to comply with these Terms & Conditions. If you do not agree, please discontinue use of the platform and services.",
  },
  {
    title: "2. Booking and Confirmation",
    content:
      "All bookings are subject to availability and confirmation by Tripvocation Experiences Pvt Ltd. A booking is considered confirmed only after required payment and official confirmation is issued.",
  },
  {
    title: "3. Pricing and Inclusions",
    content:
      "Trip prices, inclusions, and exclusions are communicated in the itinerary or booking details. Prices may change before confirmation due to availability, taxes, or supplier revisions.",
  },
  {
    title: "4. Payment Terms",
    content:
      "Customers must follow stated payment timelines for advance and balance amounts. Delays in payment may lead to release of blocked inventory or cancellation of booking.",
  },
  {
    title: "5. Cancellation and Refund Policy",
    content:
      "Cancellation charges and refund eligibility depend on trip type, departure timeline, and partner policies. Refund processing timelines may vary based on payment channel and banks.",
  },
  {
    title: "6. Changes to Itinerary",
    content:
      "Tripvocation may modify itinerary flow due to weather, safety advisories, road conditions, operational constraints, or force majeure events while maintaining service quality.",
  },
  {
    title: "7. Traveler Responsibilities",
    content:
      "Travelers must provide accurate details, carry valid identity documents, follow trip instructions, and maintain respectful conduct with co-travelers, staff, and local communities.",
  },
  {
    title: "8. Health and Safety",
    content:
      "Travelers are responsible for assessing personal fitness and medical suitability for selected trips. Any pre-existing conditions must be disclosed where relevant to trip safety.",
  },
  {
    title: "9. Liability Limitation",
    content:
      "Tripvocation is not liable for losses caused by circumstances beyond reasonable control, including weather disruptions, natural events, transport delays, government restrictions, or third-party failures.",
  },
  {
    title: "10. Intellectual Property",
    content:
      "Website content, visual assets, branding, and material are owned by or licensed to Tripvocation. Unauthorized use, reproduction, or distribution is prohibited.",
  },
  {
    title: "11. Governing Law and Jurisdiction",
    content:
      "These terms are governed by applicable laws of India. Any disputes shall be subject to the jurisdiction of competent courts in Gurugram, Haryana.",
  },
  {
    title: "12. Updates to Terms",
    content:
      "We may revise these Terms & Conditions from time to time. Updated terms become effective once published on this page.",
  },
];

export default function TermsAndConditions() {
  return (
    <main className="bg-[#f6fafb]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07343d] via-[#0a6071] to-[#08a8c7]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Legal</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm md:text-base text-cyan-50 max-w-3xl leading-relaxed">
            Please read these Terms & Conditions carefully before booking or using our services.
            They define important rights, responsibilities, and limitations applicable to all users.
          </p>
          <p className="mt-3 text-xs md:text-sm text-cyan-100">
            Effective Date: February 24, 2026
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <FileText className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Clear Commitments</h2>
            <p className="mt-2 text-sm text-gray-600">
              Booking, payment, and cancellation terms are documented for transparency.
            </p>
          </article>
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <ShieldCheck className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Fair Usage</h2>
            <p className="mt-2 text-sm text-gray-600">
              Travelers and service providers are expected to follow safe and respectful conduct.
            </p>
          </article>
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <Scale className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Legal Framework</h2>
            <p className="mt-2 text-sm text-gray-600">
              Applicable law and jurisdiction are clearly stated for dispute resolution.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <div className="bg-white border border-[#d4e6ec] rounded-2xl p-5 md:p-8">
          <div className="flex items-center gap-2 text-[#0f5566] mb-5">
            <AlertTriangle size={18} />
            <p className="text-sm font-semibold uppercase tracking-wide">Important Terms</p>
          </div>

          <div className="space-y-6">
            {termsSections.map((section) => (
              <article key={section.title}>
                <h3 className="text-lg font-semibold text-[#0f2226]">{section.title}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f2226] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
          <h2 className="text-2xl font-bold">Contact for Terms-Related Queries</h2>
          <p className="mt-3 text-sm text-gray-300">Email: hello@tripvocation.in</p>
          <p className="text-sm text-gray-300">Phone: +91-9090403075</p>
          <p className="text-sm text-gray-300">
            Address: 3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015
          </p>
        </div>
      </section>
    </main>
  );
}
