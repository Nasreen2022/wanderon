import React from "react";

/* =====================================================
   LADAKH TOUR PACKAGES (CITY SECTION WITH BORDER)
===================================================== */

export default function LadakhPackagesCitiesSection() {
  const packages = [
    "Ladakh trip from Chandigarh",
    "Ladakh trip from Mumbai",
    "Ladakh trip from Hyderabad",
    "Ladakh trip from Delhi",
    "Ladakh trip from Manali",
    "Ladakh trip from Ahmedabad",
    "Ladakh trip from Chennai",
    "Ladakh trip from Srinagar",
    "Ladakh trip from Bangalore",
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">

      {/* MAIN CONTAINER WITH BORDER */}
      <div className="bg-gray-50 border border-gray-300 rounded-xl p-8 shadow-sm">

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Ladakh Tour Packages
        </h2>

        {/* Package Buttons */}
        <div className="flex flex-wrap gap-4">
          {packages.map((item, index) => (
            <button
              key={index}
              className="border border-[#0aa3b8] text-[#0aa3b8] px-5 py-2 rounded-lg text-sm hover:bg-[#0aa3b8] hover:text-white transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}