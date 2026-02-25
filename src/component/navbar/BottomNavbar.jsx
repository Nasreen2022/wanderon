import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BottomNavbar() {
  return (
    <div className="bg-[#08a8c7] relative">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-10 text-white text-sm font-medium overflow-visible">
        <NavItem text="International Trips" />
        <IndiaTrips />
        <NavItem text="Group Tours" />
        <NavItem text="Honeymoon Packages" />
        <NavItem text="🎁 Gift Cards" />
      </div>
    </div>
  );
}

/* ================= SIMPLE NAV ITEM ================= */

function NavItem({ text }) {
  return (
    <div className="cursor-pointer hover:underline flex items-center gap-1">
      {text}
      <ChevronDown size={16} />
    </div>
  );
}

/* ================= INDIA DROPDOWN ================= */

function IndiaTrips() {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [locked, setLocked] = useState(false);
  const containerRef = useRef();

  const isOpen = hoverOpen || locked;

  /* ---------- state + routes ---------- */
  const states = [
    { name: "Ladakh", path: "ladakh" },
    { name: "Kashmir", path: "kashmir" },
    { name: "Himachal Pradesh", path: "himachal-pradesh" },
    { name: "Arunachal Pradesh", path: "arunachal-pradesh" },
    { name: "Rajasthan", path: "rajasthan" },
    { name: "Weekend Getaways", path: "weekend-getaways" },
    { name: "Spiti", path: "spiti" },
    { name: "Meghalaya", path: "meghalaya" },
    { name: "Sikkim", path: "sikkim" },
    { name: "Uttarakhand", path: "uttarakhand" },
    { name: "Andaman", path: "andaman" },
    { name: "Kerala", path: "kerala" },
  ];

  /* ---------- close when clicking outside ---------- */
  useEffect(() => {
    function handleClickOutside(e) {
      if (!containerRef.current?.contains(e.target)) {
        setLocked(false);
        setHoverOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function handleClick(e) {
    e.stopPropagation();
    setLocked(!locked);
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => !locked && setHoverOpen(true)}
      onMouseLeave={() => !locked && setHoverOpen(false)}
    >
      {/* NAV TEXT */}
      <div
        onClick={handleClick}
        className="cursor-pointer flex items-center gap-1 hover:underline"
      >
        India Trips
        <ChevronDown
          size={16}
          className={`transition ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* DROPDOWN */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-10 z-50">
          {/* ARROW */}
          <div className="w-3 h-3 bg-white rotate-45 absolute -top-1 left-1/2 -translate-x-1/2 shadow-sm" />

          {/* MENU */}
          <div className="bg-white text-gray-700 rounded-xl shadow-xl px-8 py-6 w-[360px]">
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm">
              {states.map((state, i) => (
                <Link
                  key={i}
                  to={`/india/${state.path}`}
                  className="cursor-pointer hover:text-[#08a8c7]"
                  onClick={() => setLocked(false)}
                >
                  {state.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}