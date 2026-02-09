import { ChevronDown } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div className="bg-[#08a8c7]">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-10 text-white text-sm font-medium">

        <DropdownItem text="International Trips" />
        <DropdownItem text="India Trips" />
        <DropdownItem text="Group Tours" />

        <span className="cursor-pointer hover:underline">
          Honeymoon Packages
        </span>

        <span className="cursor-pointer flex items-center gap-1">
          🎁 Gift Cards
        </span>

        <span className="cursor-pointer flex items-center gap-2">
          Events & Festivals
          <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">
            NEW
          </span>
        </span>

      </div>
    </div>
  );
}

function DropdownItem({ text }) {
  return (
    <span className="flex items-center gap-1 cursor-pointer hover:underline">
      {text}
      <ChevronDown size={16} />
    </span>
  );
}
