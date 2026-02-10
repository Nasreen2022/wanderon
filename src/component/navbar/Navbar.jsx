import { useState } from "react";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <TopNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BottomNavbar menuOpen={menuOpen} />
    </header>
  );
}
