import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <TopNavbar />
      <BottomNavbar />
    </header>
  );
}
