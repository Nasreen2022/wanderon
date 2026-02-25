import { ShieldCheck, CreditCard, Landmark, Wallet, CircleCheckBig, BadgeHelp, FileText, Phone } from "lucide-react";

const paymentModes = [
  {
    icon: CreditCard,
    title: "Cards (Credit/Debit)",
    description: "Pay securely using Visa, MasterCard, RuPay, and other major cards.",
  },
  {
    icon: Wallet,
    title: "UPI & Wallets",
    description: "Fast checkout through UPI apps and supported digital wallets.",
  },
  {
    icon: Landmark,
    title: "Bank Transfer",
    description: "NEFT/RTGS/IMPS transfer options for domestic and corporate bookings.",
  },
];

const steps = [
  "Choose your trip and confirm travel dates.",
  "Connect with our team for final quote and inclusions.",
  "Complete payment using your preferred method.",
  "Receive booking confirmation and invoice details.",
];

const faqs = [
  {
    q: "Do you provide GST invoices?",
    a: "Yes. GST-compliant invoices are shared after payment confirmation.",
  },
  {
    q: "Can I pay in installments?",
    a: "Selected departures support split payments as per booking policy and timelines.",
  },
  {
    q: "How do I confirm payment status?",
    a: "You can share transaction details with our support team for quick verification.",
  },
  {
    q: "Are refunds available?",
    a: "Refunds are handled as per trip cancellation terms and payment policy.",
  },
];

export default function Payments() {
  return (
    <main className="bg-[#f6fafb]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07333d] via-[#0a6071] to-[#08a8c7]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Payments</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Safe, transparent, and hassle-free payment experience.
          </h1>
          <p className="mt-4 text-sm md:text-base text-cyan-50 max-w-2xl leading-relaxed">
            Complete your booking with confidence. We support secure payment channels, provide clear
            billing records, and assist you through every step of your transaction.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f2226]">Available Payment Modes</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {paymentModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <article key={mode.title} className="bg-white border border-[#d3e6ec] rounded-2xl p-6">
                <div className="w-11 h-11 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0f2226]">{mode.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{mode.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white border-y border-[#d3e6ec]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-14 grid lg:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2226]">How Payment Works</h2>
            <ol className="mt-6 space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <span className="w-7 h-7 rounded-full bg-[#08a8c7] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-[#0f2226] text-gray-100 p-6 md:p-7">
            <h3 className="text-xl font-semibold">Important Notes</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                Booking is confirmed only after successful payment verification.
              </li>
              <li className="flex gap-2">
                <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                Advance amount and deadlines vary by trip and departure.
              </li>
              <li className="flex gap-2">
                <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                Cancellation and refund timelines follow the selected package policy.
              </li>
              <li className="flex gap-2">
                <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                For corporate bookings, custom payment terms can be discussed.
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-white/20 bg-white/10 p-4 text-sm">
              <p className="inline-flex items-center gap-2 font-semibold text-cyan-100">
                <ShieldCheck size={16} />
                Secure Transactions
              </p>
              <p className="mt-2 text-gray-300">
                All payments are processed through trusted channels with transaction tracking support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          <div className="rounded-2xl bg-white border border-[#d3e6ec] p-6 md:p-7">
            <h2 className="text-2xl font-bold text-[#0f2226]">Need Payment Assistance?</h2>
            <p className="mt-2 text-sm text-gray-600">
              Reach our support team for payment verification, receipts, or invoice-related help.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <p className="inline-flex items-center gap-2 text-gray-700">
                <Phone size={16} className="text-[#08a8c7]" />
                +918077726794
              </p>
              <p className="inline-flex items-center gap-2 text-gray-700">
                <FileText size={16} className="text-[#08a8c7]" />
                zaidkhan.khan9@gmail.com
              </p>
              <p className="inline-flex items-center gap-2 text-gray-700">
                <BadgeHelp size={16} className="text-[#08a8c7]" />
                Support Hours: 10:00 AM to 7:00 PM (Mon-Sat)
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#ecf8fb] border border-[#bfe3ec] p-6 md:p-7">
            <h3 className="text-xl font-semibold text-[#0f2226]">Payment FAQs</h3>
            <div className="mt-4 space-y-4">
              {faqs.map((item) => (
                <article key={item.q}>
                  <h4 className="text-sm font-semibold text-[#0f2226]">{item.q}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
