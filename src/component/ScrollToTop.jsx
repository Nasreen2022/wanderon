import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component scrolls the window to top whenever the route changes.
// It should be placed inside the BrowserRouter in App.jsx.

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
