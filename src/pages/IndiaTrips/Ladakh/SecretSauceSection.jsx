import React from "react";

/* =====================================================
   WANDERON SECRET SAUCE SECTION
===================================================== */

export default function SecretSauceSection() {

  const cards = [
    {
      title: "No Third Party Mess",
      desc: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
      bg: "/earlyBird/icons/sauceBg1.svg",
    },
    {
      title: "Transparency & Security",
      desc: "Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!",
      bg: "/earlyBird/icons/sauceBg2.svg",
    },
    {
      title: "Co-Travelers Filtering",
      desc: "Multi-step filtering to bring only like-minded people together! That’s our key to have fuss-free trips!",
      bg: "/earlyBird/icons/sauceBg3.svg",
    },
    {
      title: "One Stop Hassle Free Experience",
      desc: "Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!",
      bg: "/earlyBird/icons/sauceBg4.svg",
    },
  ];

  return (
    <section className="py-24 bg-[#f7f7f7]">

      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-[#13a7bd] text-sm font-semibold mb-3">
            Why WanderOn?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0a6c74] mb-4">
            WanderOn’s Secret Sauce
          </h2>

          <div className="w-24 h-[3px] bg-yellow-400 mx-auto"></div>

        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {cards.map((card, index) => (

            <div
              key={index}
              className="relative rounded-3xl border border-[#0a6c74] overflow-hidden bg-white"
            >

              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-bottom opacity-90"
                style={{
                  backgroundImage: `url(${card.bg})`,
                }}
              />

              {/* CONTENT */}
              <div className="relative p-6 h-[350px] flex flex-col">

                <h3 className="text-[#0ea5b7] font-bold text-xl leading-snug mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}