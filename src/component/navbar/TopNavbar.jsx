import { Search, Phone, Menu, X } from "lucide-react";

export default function TopNavbar({ menuOpen, setMenuOpen }) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-[#08a8c7] rounded-full"></div>
          <span className="font-bold text-[#08a8c7]">
            WANDERON
          </span>
        </div>

        {/* Search (Desktop only) */}
        <div className="hidden lg:block flex-1 max-w-md mx-6 relative">
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

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <span>Early Bird Offer</span>
          <span>Upcoming Trips</span>
          <span>Corporate Tours</span>
          <span>Blogs</span>
          <span>About Us</span>
          <span>Payments</span>

          <button className="flex items-center gap-2 border border-[#08a8c7] text-[#08a8c7] px-4 py-2 rounded-full">
            <Phone size={16} />
            +91-9090403075
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="p-4 space-y-4 text-sm">

            <div className="border-b pb-2">Early Bird Offer</div>
            <div className="border-b pb-2">Upcoming Trips</div>
            <div className="border-b pb-2">Corporate Tours</div>
            <div className="border-b pb-2">Blogs</div>
            <div className="border-b pb-2">About Us</div>
            <div className="border-b pb-2">Payments</div>

            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-5 pr-10 py-2 border rounded-full"
              />
              <Search
                size={18}
                className="absolute right-4 top-2.5 text-gray-400"
              />
            </div>

            {/* Phone CTA */}
            <button className="w-full flex items-center justify-center gap-2 border border-[#08a8c7] text-[#08a8c7] px-4 py-2 rounded-full">
              <Phone size={16} />
              +91-9090403075
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
