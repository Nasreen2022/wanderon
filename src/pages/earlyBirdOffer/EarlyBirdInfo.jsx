import React from "react";

export default function EarlyBirdInfo() {
  const features = [
    {
      title: "How it works?",
      desc: "Let's say Modiji wishes to go to Spiti in 2026. The regular price of the trip is 21,999. He purchases a 10K voucher, which locks the trip at a discounted price.",
      icon: "/earlyBird/icons/Landscape mode-cuate.png",
    },
    {
      title: "Redeem Discounts in 2026",
      desc: "In 2026, Modiji selects his travel dates 14 days prior. Since he has a 10K voucher, he only pays the remaining amount.",
      icon: "/earlyBird/icons/Landscape mode-cuate.png",
    },
    {
      title: "Travel Smart with WanderOn",
      desc: "Regular prices would be higher in 2026. Early Bird voucher helps you save more and travel smart.",
      icon: "/earlyBird/icons/Landscape mode-cuate.png",
    },
  ];

  return (
    <section className="bg-gray-100">

      {/* ================= VOUCHER IMAGE (NO SPACE ANYWHERE) ================= */}
      <img
        src="/earlyBird/icons/voucherHome.jpeg"
        alt="Voucher"
        className="w-full h-auto block"
      />

      {/* ================= FEATURES SECTION ================= */}
      <div className="py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 text-center">

            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center max-w-sm mx-auto">

                {/* icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow flex items-center justify-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </div>

                {/* title */}
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-teal-700 mb-2">
                  {item.title}
                </h3>

                {/* description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}