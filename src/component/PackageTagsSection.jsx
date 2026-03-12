import React from "react";

export default function PackageTagsSection({ title, items, active }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">

      {/* MAIN CONTAINER */}
      <div className="bg-gray-50 border border-gray-300 rounded-xl p-5 shadow-sm">

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {title}
        </h2>

        {/* Package Buttons */}
        <div className="flex flex-wrap gap-3">

          {items.map((item, index) => {

            const label = typeof item === "string" ? item : item.label;
            const link = typeof item === "string" ? "#" : item.link || "#";
            const isActive = label === active;

            return (
              <a
                key={index}
                href={link}
                className={`
                  px-5 py-2
                  rounded-lg
                  text-sm
                  border
                  transition duration-300
                  ${
                    isActive
                      ? "bg-[#0aa3b8] text-white border-[#0aa3b8]"
                      : "border-[#0aa3b8] text-[#0aa3b8] hover:bg-[#0aa3b8] hover:text-white"
                  }
                `}
              >
                {label}
              </a>
            );
          })}

        </div>

      </div>

    </section>
  );
}