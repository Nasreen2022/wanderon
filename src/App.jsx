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
import Kashmir from "./pages/IndiaTrips/Kashmir/Kashmir";
import Himachal from "./pages/IndiaTrips/Himachal/Himachal";
import Arunachal from "./pages/IndiaTrips/Arunachal/Arunachal";
import Rajasthan from "./pages/IndiaTrips/Rajasthan/Rajasthan";
import Spiti from "./pages/IndiaTrips/Spiti/Spiti";
import Meghalaya from "./pages/IndiaTrips/Meghalaya/Meghalaya";
import Sikkim from "./pages/IndiaTrips/Sikkim/Sikkim";
import Uttarakhand from "./pages/IndiaTrips/Uttarakhand/Uttarakhand";
import Andaman from "./pages/IndiaTrips/Andaman/Andaman";
import Kerala from "./pages/IndiaTrips/Kerala/Kerala";
import HoneymoonPackages from "./pages/honeymoonPackages/HoneymoonPackages";
import GiftCards from "./pages/giftCards/GiftCards";
import EventsAndFestivals from "./pages/eventsAndFestivals/EventsAndFestivals";
import WeekendGetaways from "./pages/weekendGetaways/WeekendGetaways";

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
        <Route path="/events-and-festivals" element={<EventsAndFestivals />} />
        <Route path="/weekend-getaways" element={<WeekendGetaways />} />
        {/* ----------------India Trip------------------ */}
        <Route path="/india/ladakh" element={<Ladakh />} />
        <Route path="/india/kashmir" element={<Kashmir />} />
        <Route path="/india/himachal-pradesh" element={<Himachal />} />
        <Route path="/india/arunachal-pradesh" element={<Arunachal />} />
        <Route path="/india/rajasthan" element={<Rajasthan />} />
        <Route path="/india/spiti" element={<Spiti />} />
        <Route path="/india/meghalaya" element={<Meghalaya />} />
        <Route path="/india/sikkim" element={<Sikkim />} />
        <Route path="/india/uttarakhand" element={<Uttarakhand />} />
        <Route path="/india/andaman" element={<Andaman />} />
        <Route path="/india/kerala" element={<Kerala />} />
        <Route path="/india-trips/leh-ladakh-tour-packages" element={<Ladakh />} />
        <Route path="/india-trips/kashmir-tour-packages" element={<Kashmir />} />
        <Route path="/india-trips/himachal-pradesh-tour-packages" element={<Himachal />} />
        <Route path="/india-trips/arunachal-pradesh-tour-packages" element={<Arunachal />} />
        <Route path="/india-trips/rajasthan-tour-packages" element={<Rajasthan />} />
        <Route path="/india-trips/spiti-valley-tour-packages" element={<Spiti />} />
        <Route path="/india-trips/meghalaya-tour-packages" element={<Meghalaya />} />
        <Route path="/india-trips/sikkim-tour-packages" element={<Sikkim />} />
        <Route path="/india-trips/uttarakhand-tour-packages" element={<Uttarakhand />} />
        <Route path="/india-trips/andaman-tour-packages" element={<Andaman />} />
        <Route path="/india-trips/kerala-tour-packages" element={<Kerala />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
