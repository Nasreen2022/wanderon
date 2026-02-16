import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import EarlyBird from "./pages/earlyBirdOffer/EarlyBird";
import UpComing from "./pages/upComingCommunityTrip/UpComing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/early-bird" element={<EarlyBird />} />
        <Route path="/upcoming" element={<UpComing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
