import { useState } from "react";

export default function FilterSidebar() {
  const [duration, setDuration] = useState(7);
  const [budget, setBudget] = useState(50000);

  return (
        <div
      className="
        w-full lg:w-[300px]
        bg-white rounded-xl shadow-md border
        lg:sticky lg:top-[120px]
        max-h-[calc(100vh-140px)]
        overflow-y-auto
      "
    >


      {/* HEADER */}
      <div className="px-5 py-4 border-b">
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>

      <div className="p-5 space-y-6">

        {/* DESTINATION */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            Destination
          </h4>

          <div className="space-y-3">
            <button className="w-full flex justify-between text-gray-700 hover:text-black">
              India <span>›</span>
            </button>

            <button className="w-full flex justify-between text-gray-700 hover:text-black">
              International <span>›</span>
            </button>
          </div>
        </div>

        <hr />

        {/* DURATION */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">
            Duration (in nights)
          </h4>

          <input
            type="range"
            min="1"
            max="14"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full accent-teal-600"
          />

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>1N</span>
            <span>14N</span>
          </div>
        </div>

        <hr />

        {/* BUDGET */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">
            Budget (per person)
          </h4>

          <input
            type="range"
            min="8000"
            max="300000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full accent-teal-600"
          />

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>8,000</span>
            <span>3,00,000</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex border-t">
        <button
          onClick={() => {
            setDuration(7);
            setBudget(50000);
          }}
          className="w-1/2 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100"
        >
          Clear Filters
        </button>

        <button className="w-1/2 py-3 bg-teal-600 text-white font-semibold hover:bg-teal-700">
          Apply
        </button>
      </div>
    </div>
  );
}
