import { Search, Phone } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2 min-w-[140px]">
          <div className="h-10 w-10 bg-[#08a8c7] rounded-full"></div>
          <span className="font-bold text-sm text-[#08a8c7]">
            WANDERON
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full pl-5 pr-10 py-2 border border-[#08a8c7] rounded-full outline-none"
          />
          <Search
            size={18}
            className="absolute right-4 top-2.5 text-[#08a8c7]"
          />
        </div>

        {/* Right Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">

          <NavItem text="Early Bird Offer" />
          <NavItem text="Upcoming Trips" />
          <NavItem text="Corporate Tours" />
          <NavItem text="Blogs" />
          <NavItem text="About Us" />
          <NavItem text="Payments" />

          {/* Phone Button */}
          <button className="flex items-center gap-2 border border-[#08a8c7] text-[#08a8c7] px-4 py-2 rounded-full">
            <Phone size={16} />
            +91-9090403075
          </button>
        </div>

      </div>
    </div>
  );
}

function NavItem({ text }) {
  return (
    <span className="cursor-pointer hover:text-[#08a8c7]">
      {text}
    </span>
  );
}
