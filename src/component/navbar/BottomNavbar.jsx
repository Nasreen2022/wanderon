import { ChevronDown } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div className="bg-[#08a8c7]">
      <div
        className="
          max-w-7xl mx-auto px-4
          h-14
          flex items-center gap-8
          text-white text-sm font-medium
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
        "
      >
        <NavItem text="International Trips" dropdown />
        <NavItem text="India Trips" dropdown />
        <NavItem text="Group Tours" dropdown />

        <NavItem text="Honeymoon Packages" />
        <NavItem text="🎁 Gift Cards" />

        <span className="flex items-center gap-2">
          Events & Festivals
          <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">
            NEW
          </span>
        </span>
      </div>
    </div>
  );
}

function NavItem({ text, dropdown }) {
  return (
    <span className="flex items-center gap-1 cursor-pointer hover:underline">
      {text}
      {dropdown && <ChevronDown size={16} />}
    </span>
  );
}
