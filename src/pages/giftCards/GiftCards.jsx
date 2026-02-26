import { Gift, Heart, ArrowRight, CheckCircle2, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const GIFT_THEMES = [
  {
    title: "Love across every mile",
    subtitle: "A heartfelt surprise for your special someone.",
    path: "/gift-cards/wanderon-gift-card",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Partners in All Things Crazy!",
    subtitle: "For friends who turn every plan into an adventure.",
    path: "/gift-cards/friends-gift-card",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bond of Mischief!",
    subtitle: "Gift experiences to your forever travel gang.",
    path: "/gift-cards/bond-of-mischief-gift-card",
    image:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "To Many More Years!",
    subtitle: "Perfect for anniversary trips and milestone journeys.",
    path: "/gift-cards/anniversary-gift-card",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Lovingly Hitched!",
    subtitle: "Celebrate newlyweds with their dream getaway.",
    path: "/gift-cards/newlywed-gift-card",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "To The Moments That Matter!",
    subtitle: "For family memories that stay forever.",
    path: "/gift-cards/perfect-family-gift-card",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Together, We Roam!",
    subtitle: "A thoughtful card for travel partners.",
    path: "/gift-cards/travel-partners-gift-card",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Happily Together!",
    subtitle: "For couples ready to make beautiful memories.",
    path: "/gift-cards/couple-gift-card",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "For All Your Adventures!",
    subtitle: "The ultimate travel gift for explorers.",
    path: "/gift-cards/wanderon-gift-card",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
  },
];

const terms = [
  "Only one gift voucher can be applied per booking.",
  "Partial redemption is allowed until the voucher's full value is utilized.",
  "Gift vouchers are valid for 2 years from the date of purchase.",
  "Gift cards are non-cancellable and non-refundable once purchased.",
  "Gift vouchers are redeemable across all trip packages except standalone flights or hotel-only bookings.",
  "Gift vouchers are transferable and can be redeemed by anyone.",
  "Recipient email cannot be changed once purchased.",
  "Gift cards are applicable only on new trips, not existing bookings.",
  "Gift cards cannot be applied on discounted prices.",
];

const redemptionSteps = [
  "Visit our website and choose your preferred destination.",
  "Submit your contact details through the enquiry form or available channels.",
  "A destination expert will contact you to help finalize your trip package.",
  "At booking confirmation, share your voucher details to apply your gift card.",
];

export default function GiftCards() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#cffafe_0,_#e0f2fe_35%,_#f8fafc_80%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-[#08a8c7] bg-cyan-100 px-3 py-1.5 rounded-full">
              <Gift size={14} />
              Gift Cards
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Celebrate Life's Moments With The Gift Of Exploration
            </h1>
            <p className="mt-4 text-slate-700 md:text-lg">
              Choose from themed travel gift cards and let your loved ones pick their next unforgettable journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-[#08a8c7] text-white px-6 py-3 rounded-full font-semibold hover:brightness-95 transition">
                Buy Gift Card
              </button>
              <Link
                to="/upcoming"
                className="border border-slate-300 text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-white transition"
              >
                Explore Trips
              </Link>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <CircleDollarSign size={18} className="text-emerald-500" />
                Value Range
              </p>
              <p className="text-sm text-slate-600 mt-1">Rs. 1,000 to Rs. 50,000</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <Heart size={18} className="text-rose-500" />
                Validity
              </p>
              <p className="text-sm text-slate-600 mt-1">Valid for 2 years from purchase</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#08a8c7]" />
                Easy Redemption
              </p>
              <p className="text-sm text-slate-600 mt-1">Redeem while confirming your booking</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Gift Card Themes</h2>
        <p className="text-slate-600 mt-2">Pick the perfect message and mood for every occasion.</p>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {GIFT_THEMES.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.subtitle}</p>
                <Link
                  to={item.path}
                  className="mt-4 inline-flex items-center gap-2 text-[#08a8c7] font-semibold"
                >
                  Select Theme
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Terms & Conditions</h2>
            <div className="mt-5 space-y-3">
              {terms.map((item) => (
                <p key={item} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-1" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold">Redemption Process</h2>
            <p className="mt-2 text-slate-300">Follow these simple steps to redeem your travel gift card.</p>
            <div className="mt-6 space-y-4">
              {redemptionSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#08a8c7] flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-slate-200">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-slate-700 pt-5">
              <p className="text-sm text-slate-300">Need help choosing the right gift card?</p>
              <button className="mt-3 w-full bg-[#08a8c7] py-3 rounded-xl font-semibold hover:brightness-95 transition">
                Request A Callback
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
