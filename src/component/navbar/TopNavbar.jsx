import { Search, Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/tripvocationlogo.jpeg";

const INTERNATIONAL_TRIPS = [
  { name: "Europe", path: "/international-trips/europe-tour-packages" },
  { name: "Vietnam", path: "/international-trips/vietnam-tour-packages" },
  { name: "Bali", path: "/international-trips/bali-tour-packages" },
  { name: "Thailand", path: "/international-trips/thailand-tour-packages" },
  { name: "Japan", path: "/international-trips/japan-tour-packages" },
  { name: "Kenya", path: "/international-trips/kenya-tour-packages" },
  { name: "Georgia", path: "/international-trips/georgia-tour-packages" },
  { name: "Sri Lanka", path: "/international-trips/sri-lanka-tour-packages" },
  { name: "Bhutan", path: "/international-trips/bhutan-tour-packages" },
  { name: "Philippines", path: "/international-trips/philippines-tour-packages" },
  { name: "Egypt", path: "/international-trips/egypt-tour-packages" },
  { name: "Turkey", path: "/international-trips/turkey-tour-packages" },
  { name: "Kazakhstan", path: "/international-trips/kazakhstan-tour-packages" },
  { name: "Maldives", path: "/international-trips/maldives-tour-packages" },
  { name: "South Africa", path: "/international-trips/south-africa-tour-packages" },
  { name: "Singapore", path: "/international-trips/singapore-tour-packages" },
  { name: "New Zealand", path: "/international-trips/new-zealand-tour-packages" },
  { name: "France", path: "/international-trips/france-tour-packages" },
  { name: "Switzerland", path: "/international-trips/switzerland-tour-packages" },
  { name: "Spain", path: "/international-trips/spain-tour-packages" },
  { name: "Dubai", path: "/international-trips/dubai-tour-packages" },
  { name: "Australia", path: "/international-trips/australia-tour-packages" },
  { name: "Malaysia", path: "/international-trips/malaysia-tour-packages" },
  { name: "Mauritius", path: "/international-trips/mauritius-tour-packages" },
];

const INDIA_TRIPS = [
  { name: "Ladakh", path: "/india-trips/leh-ladakh-tour-packages" },
  { name: "Spiti", path: "/india-trips/spiti-valley-tour-packages" },
  { name: "Kashmir", path: "/india-trips/kashmir-tour-packages" },
  { name: "Meghalaya", path: "/india-trips/meghalaya-tour-packages" },
  { name: "Himachal Pradesh", path: "/india-trips/himachal-pradesh-tour-packages" },
  { name: "Sikkim", path: "/india-trips/sikkim-tour-packages" },
  { name: "Arunachal Pradesh", path: "/india-trips/arunachal-pradesh-tour-packages" },
  { name: "Uttarakhand", path: "/india-trips/uttarakhand-tour-packages" },
  { name: "Rajasthan", path: "/india-trips/rajasthan-tour-packages" },
  { name: "Andaman", path: "/india-trips/andaman-tour-packages" },
  { name: "Weekend Getaways", path: "/weekend-getaways" },
  { name: "Kerala", path: "/india-trips/kerala-tour-packages" },
];

const GROUP_TOURS = [
  { name: "Europe", path: "/international-trips/europe-tour-packages" },
  { name: "Ladakh", path: "/india-trips/leh-ladakh-tour-packages" },
  { name: "Vietnam", path: "/international-trips/vietnam-tour-packages" },
  { name: "Japan", path: "/international-trips/japan-tour-packages" },
  { name: "Sri Lanka", path: "/international-trips/sri-lanka-tour-packages" },
  { name: "Philippines", path: "/international-trips/philippines-tour-packages" },
  { name: "Dubai", path: "/international-trips/dubai-tour-packages" },
  { name: "Thailand", path: "/international-trips/thailand-tour-packages" },
  { name: "Georgia", path: "/international-trips/georgia-tour-packages" },
  { name: "Bhutan", path: "/international-trips/bhutan-tour-packages" },
  { name: "Arunachal Pradesh", path: "/india-trips/arunachal-pradesh-tour-packages" },
  { name: "Andaman", path: "/india-trips/andaman-tour-packages" },
  { name: "Spiti Valley", path: "/india-trips/spiti-valley-tour-packages" },
  { name: "Himachal Pradesh", path: "/india-trips/himachal-pradesh-tour-packages" },
  { name: "Bali", path: "/international-trips/bali-tour-packages" },
  { name: "Meghalaya", path: "/india-trips/meghalaya-tour-packages" },
  { name: "Kazakhstan", path: "/international-trips/kazakhstan-tour-packages" },
  { name: "Kashmir", path: "/india-trips/kashmir-tour-packages" },
];

const MOBILE_MENU_GROUPS = [
  {
    key: "international",
    title: "International Trips",
    path: "/international-trips",
    items: INTERNATIONAL_TRIPS,
  },
  {
    key: "india",
    title: "India Trips",
    path: "/india-trips",
    items: INDIA_TRIPS,
  },
  {
    key: "group",
    title: "Group Tours",
    path: "/upcoming-community-trips",
    items: GROUP_TOURS,
  },
];

export default function TopNavbar({ menuOpen, setMenuOpen }) {
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const navLinks = [
    { name: "Early Bird Offer", path: "/early-bird" },
    { name: "Upcoming Trips", path: "/upcoming" },
    { name: "Corporate Tours", path: "/corporate-tours" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about-us" },
    { name: "Payments", path: "/payments" },
  ];

  const directMobileLinks = [
    { name: "Honeymoon Packages", path: "/honeymoon-packages" },
    { name: "Gift Cards", path: "/gift-cards" },
    { name: "Events & Festivals", path: "/events-and-festivals" },
  ];

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="WanderOn logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:block flex-1 max-w-md mx-6 relative">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full pl-5 pr-10 py-2 border border-[#08a8c7] rounded-full outline-none"
          />
          <Search className="absolute right-4 top-2.5 text-[#08a8c7]" size={18} />
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="hover:text-[#08a8c7]">
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+918077726794"
            className="flex items-center gap-2 border border-[#08a8c7] text-[#08a8c7] px-4 py-2 rounded-full"
          >
            <Phone size={16} />
            +91-8077726794
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (menuOpen) {
              setExpandedMobileMenu(null);
            }
          }}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-4 space-y-4 text-sm">
            <div className="relative">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-5 pr-10 py-2 border rounded-full"
              />
              <Search className="absolute right-4 top-2.5 text-gray-400" size={18} />
            </div>

            <div className="space-y-2 border-b pb-3">
              {MOBILE_MENU_GROUPS.map((group) => {
                const isOpen = expandedMobileMenu === group.key;

                return (
                  <div key={group.key} className="rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-2.5 bg-slate-50">
                      <Link
                        to={group.path}
                        className="font-medium text-slate-800"
                        onClick={() => {
                          setMenuOpen(false);
                          setExpandedMobileMenu(null);
                        }}
                      >
                        {group.title}
                      </Link>
                      <button
                        type="button"
                        className="p-1"
                        onClick={() => setExpandedMobileMenu(isOpen ? null : group.key)}
                        aria-label={`Toggle ${group.title}`}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {isOpen && (
                      <div className="px-3 py-2 bg-white grid grid-cols-2 gap-x-3 gap-y-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="text-slate-700 py-1"
                            onClick={() => {
                              setMenuOpen(false);
                              setExpandedMobileMenu(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="space-y-3 border-b pb-3">
              {directMobileLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setExpandedMobileMenu(null);
                  }}
                  className="block"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setExpandedMobileMenu(null);
                  }}
                  className="block"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <a
              href="tel:+918077726794"
              className="w-full flex items-center justify-center gap-2 border border-[#08a8c7] text-[#08a8c7] px-4 py-2 rounded-full"
            >
              <Phone size={16} />
              +91-8077726794
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
