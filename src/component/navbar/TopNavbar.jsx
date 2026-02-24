import { Search, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/tripvocationlogo.jpeg";

export default function TopNavbar({ menuOpen, setMenuOpen }) {
  const navLinks = [
    { name: "Early Bird Offer", path: "/early-bird" },
    { name: "Upcoming Trips", path: "/upcoming" },
    { name: "Corporate Tours", path: "/corporate-tours" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about-us" },
    { name: "Payments", path: "/payments" },
  ];

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="WanderOn logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Search */}
        <div className="hidden lg:block flex-1 max-w-md mx-6 relative">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full pl-5 pr-10 py-2 border border-[#08a8c7] rounded-full outline-none"
          />
          <Search className="absolute right-4 top-2.5 text-[#08a8c7]" size={18} />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="hover:text-[#08a8c7]">
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+919090403075"
            className="flex items-center gap-2 border border-[#08a8c7] text-[#08a8c7] px-4 py-2 rounded-full"
          >
            <Phone size={16} />
            +91-9090403075
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="p-4 space-y-4 text-sm">

            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block border-b pb-2"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-5 pr-10 py-2 border rounded-full"
              />
              <Search className="absolute right-4 top-2.5 text-gray-400" size={18} />
            </div>

            <a
              href="tel:+919090403075"
              className="w-full flex items-center justify-center gap-2 border border-[#08a8c7] text-[#08a8c7] px-4 py-2 rounded-full"
            >
              <Phone size={16} />
              +91-9090403075
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
