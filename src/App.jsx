import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import EarlyBird from "./pages/earlyBirdOffer/EarlyBird";
import UpComing from "./pages/upComingCommunityTrip/UpComing";
import AboutUs from "./pages/about/AboutUs";
import CorporateTours from "./pages/corporateTours/CorporateTours";
import Blog from "./pages/blog/Blog";
import Payments from "./pages/payments/Payments";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions";
import CustomerSuccessSupport from "./pages/customerSupport/CustomerSuccessSupport";
import Disclaimer from "./pages/disclaimer/Disclaimer";
import Careers from "./pages/careers/Careers";
import Ladakh from "./pages/IndiaTrips/Ladakh/Ladakh";
import HoneymoonPackages from "./pages/honeymoonPackages/HoneymoonPackages";
import GiftCards from "./pages/giftCards/GiftCards";

// custom utility
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/early-bird" element={<EarlyBird />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/corporate-tours" element={<CorporateTours />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/customer-success-support" element={<CustomerSuccessSupport />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/honeymoon-packages" element={<HoneymoonPackages />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        {/* ----------------India Trip------------------ */}
        <Route path="/india/ladakh" element={<Ladakh />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
