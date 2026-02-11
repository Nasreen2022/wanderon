import { Search, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function TopNavbar({ menuOpen, setMenuOpen }) {
  const [openMega, setOpenMega] = useState(null);

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo + Phone */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/assets/images/wanderon-logo-white.webp"
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </a>
          <a href="tel:+91-9090403075" className="text-sm text-gray-700">+91-9090403075</a>
        </div>

        {/* Desktop Navigation (mega-style) */}
        <nav className="hidden lg:block flex-1 px-6">
          <ul className="flex items-center gap-6 text-sm text-gray-800">
            <li className="relative group">
              <a href="/international-trips">International Trips</a>
              <div className="absolute left-0 top-full mt-2 w-[720px] bg-white border shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity">
                {/* Example grid inside mega menu (static items) */}
                <div className="p-4 grid grid-cols-3 gap-3">
                  <div>
                    <a href="/international-trips/europe-tour-packages" className="block py-1">Europe</a>
                    <a href="/international-trips/vietnam-tour-packages" className="block py-1">Vietnam</a>
                    <a href="/international-trips/bali-tour-packages" className="block py-1">Bali</a>
                    <a href="/international-trips/thailand-tour-packages" className="block py-1">Thailand</a>
                  </div>
                  <div>
                    <a href="/international-trips/japan-tour-packages" className="block py-1">Japan</a>
                    <a href="/international-trips/dubai-tour-packages" className="block py-1">Dubai</a>
                    <a href="/international-trips/georgia-tour-packages" className="block py-1">Georgia</a>
                    <a href="/international-trips/sri-lanka-tour-packages" className="block py-1">Sri Lanka</a>
                  </div>
                  <div>
                    <a href="/international-trips/bhutan-tour-packages" className="block py-1">Bhutan</a>
                    <a href="/international-trips/philippines-tour-packages" className="block py-1">Philippines</a>
                    <a href="/international-trips/kazakhstan-tour-packages" className="block py-1">Kazakhstan</a>
                    <a href="/international-trips/singapore-tour-packages" className="block py-1">Singapore</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="relative group">
              <a href="/india-trips">India Trips</a>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white border shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity p-3">
                <a href="/india-trips/rajasthan-tour-packages" className="block py-1">Rajasthan</a>
                <a href="/india-trips/kashmir-tour-packages" className="block py-1">Kashmir</a>
                <a href="/india-trips/meghalaya-tour-packages" className="block py-1">Meghalaya</a>
              </div>
            </li>

            <li><a href="/upcoming-community-trips">Group Tours</a></li>
            <li><a href="/honeymoon-packages">Honeymoon Packages</a></li>
            <li><a href="/gift-cards">Gift Cards</a></li>
            <li><a href="/events-and-festivals">Events &amp; Festivals <span className="text-xs ml-1 bg-[#e0faff] px-1 rounded">NEW</span></a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/payment">Payments</a></li>
          </ul>
        </nav>

        {/* Right side icons and search */}
        <div className="flex items-center gap-4">
          <a href="/search" className="hidden lg:inline-flex p-2 rounded-full hover:bg-gray-100">
            <Search size={20} />
          </a>

          <button className="hidden lg:inline-flex items-center gap-2 border border-[#08a8c7] text-[#08a8c7] px-4 py-2 rounded-full">
            <Phone size={16} />
            +91-9090403075
          </button>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer/Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="p-4 space-y-4 text-sm">
            <a href="/offer/early-bird" className="block">Early Bird Offer</a>
            <a href="/upcoming-community-trips" className="block">Upcoming Community Trips</a>
            <a href="/international-trips" className="block">International Trips</a>
            <a href="/india-trips" className="block">India Trips</a>
            <a href="/weekend-getaways" className="block">Weekend Getaways</a>
            <a href="/blogs" className="block">Blogs</a>
            <a href="/about-us" className="block">About Us</a>

            <div className="mt-3">
              <input type="text" placeholder="Where do you want to go?" className="w-full pl-4 pr-4 py-2 border rounded-full" />
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#08a8c7] text-white py-2 rounded">Contact Us</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
