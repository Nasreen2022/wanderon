import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal information such as your name, phone number, email address, travel preferences, booking details, and payment-related transaction references when you interact with our services.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used to process bookings, provide customer support, improve trip planning, send important trip-related updates, and share relevant offers where permitted.",
  },
  {
    title: "3. Payment and Billing Data",
    content:
      "Payments are processed through trusted payment channels. We do not store sensitive card details on our systems. Billing and invoice records are retained for compliance and support purposes.",
  },
  {
    title: "4. Data Sharing",
    content:
      "We may share limited necessary data with trusted service providers such as hotels, transport operators, activity partners, and payment processors to fulfill your booking and deliver services.",
  },
  {
    title: "5. Cookies and Analytics",
    content:
      "Our website may use cookies and analytics tools to understand user behavior, improve platform performance, and enhance browsing experience. You can manage cookie preferences in your browser.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain personal data for as long as needed to provide services, meet legal obligations, resolve disputes, and enforce agreements, after which data is removed or anonymized.",
  },
  {
    title: "7. Your Rights",
    content:
      "You may request access, correction, or deletion of your personal information, subject to legal and operational requirements. Contact us through the support details below for such requests.",
  },
  {
    title: "8. Data Security",
    content:
      "We apply reasonable administrative and technical safeguards to protect your data from unauthorized access, misuse, or disclosure. No internet transmission is entirely risk-free.",
  },
  {
    title: "9. Third-Party Links",
    content:
      "Our website may contain links to third-party platforms. We are not responsible for the privacy practices or content of external websites. Please review their policies independently.",
  },
  {
    title: "10. Policy Updates",
    content:
      "This Privacy Policy may be updated from time to time. Any changes will be posted on this page with the updated effective date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f6fafb]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07343d] via-[#0a6071] to-[#08a8c7]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Legal</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm md:text-base text-cyan-50 max-w-3xl leading-relaxed">
            This policy explains how Tripvocation Experiences Pvt Ltd collects, uses, stores, and
            protects your personal information when you use our website, products, and travel services.
          </p>
          <p className="mt-3 text-xs md:text-sm text-cyan-100">
            Effective Date: February 24, 2026
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <ShieldCheck className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Trust and Transparency</h2>
            <p className="mt-2 text-sm text-gray-600">
              We clearly communicate why your data is collected and how it is used.
            </p>
          </article>
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <Lock className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">Security Focused</h2>
            <p className="mt-2 text-sm text-gray-600">
              Reasonable safeguards are applied to reduce risk and protect your information.
            </p>
          </article>
          <article className="bg-white border border-[#d4e6ec] rounded-2xl p-5">
            <Eye className="text-[#08a8c7]" size={22} />
            <h2 className="mt-3 font-semibold text-[#0f2226]">User Control</h2>
            <p className="mt-2 text-sm text-gray-600">
              You can contact us for access, correction, or deletion requests.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <div className="bg-white border border-[#d4e6ec] rounded-2xl p-5 md:p-8">
          <div className="flex items-center gap-2 text-[#0f5566] mb-5">
            <FileText size={18} />
            <p className="text-sm font-semibold uppercase tracking-wide">Policy Details</p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
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
          <h2 className="text-2xl font-bold">Contact for Privacy Queries</h2>
          <p className="mt-3 text-sm text-gray-300">
            Email: hello@tripvocation.in
          </p>
          <p className="text-sm text-gray-300">
            Phone: +91-9090403075
          </p>
          <p className="text-sm text-gray-300">
            Address: 3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015
          </p>
        </div>
      </section>
    </main>
  );
}
