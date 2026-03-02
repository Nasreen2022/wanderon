import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ================= DATA ================= */

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

const MEGA_MENUS = [
  {
    key: "international",
    label: "International Trips",
    path: "/international-trips",
    items: INTERNATIONAL_TRIPS,
    columns: 4,
    width: "w-[580px]",
  },
  {
    key: "india",
    label: "India Trips",
    path: "/india-trips",
    items: INDIA_TRIPS,
    columns: 3,
    width: "w-[480px]",
  },
  {
    key: "group",
    label: "Group Tours",
    path: "/upcoming-community-trips",
    items: GROUP_TOURS,
    columns: 3,
    width: "w-[500px]",
  },
];

/* ================= COMPONENT ================= */

export default function BottomNavbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [lockedMenu, setLockedMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!navRef.current?.contains(event.target)) {
        setHoveredMenu(null);
        setLockedMenu(null);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const openMenu = lockedMenu || hoveredMenu;

  return (
    <div
      className="hidden lg:block bg-[#08a8c7] text-white border-b border-[#089ab5] shadow-sm"
      ref={navRef}
    >
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-8 text-[15px] font-medium">

        {MEGA_MENUS.map((menu) => {
          const isOpen = openMenu === menu.key;

          return (
            <div
              key={menu.key}
              className="relative h-full flex items-center"
              onMouseEnter={() => !lockedMenu && setHoveredMenu(menu.key)}
              onMouseLeave={() => !lockedMenu && setHoveredMenu(null)}
            >
              {/* MENU LABEL */}
              <div className="flex items-center gap-1.5">
                <Link to={menu.path} className="hover:text-white/80">
                  {menu.label}
                </Link>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    if (lockedMenu === menu.key) {
                      setLockedMenu(null);
                      setHoveredMenu(null);
                    } else {
                      setLockedMenu(menu.key);
                      setHoveredMenu(menu.key);
                    }
                  }}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* DROPDOWN */}
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <div className="w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45 absolute -top-1.5 left-6" />

                  <div
                    className={`rounded-xl border border-slate-200 bg-white shadow-xl px-4 py-3 ${menu.width}`}
                    onMouseLeave={() => !lockedMenu && setHoveredMenu(null)}
                  >
                    <div
                      className="grid gap-x-6 gap-y-2"
                      style={{
                        gridTemplateColumns: `repeat(${menu.columns}, minmax(140px, 1fr))`,
                      }}
                    >
                      {menu.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="text-sm text-slate-700 hover:text-[#08a8c7] whitespace-nowrap"
                          onClick={() => {
                            setLockedMenu(null);
                            setHoveredMenu(null);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <Link to="/honeymoon-packages" className="hover:text-white/80">
          Honeymoon Packages
        </Link>

        <Link to="/gift-cards" className="flex items-center gap-2 hover:text-white/80">
          <img src="https://wanderon-images.gumlet.io/gift.png" className="h-[18px]" />
          Gift Cards
        </Link>

        <Link to="/events-and-festivals" className="flex items-center gap-2 hover:text-white/80">
          Events & Festivals
          <span className="text-[10px] px-1.5 py-1 rounded-full bg-white text-[#08a8c7] font-semibold">
            NEW
          </span>
        </Link>

      </nav>
    </div>
  );
}