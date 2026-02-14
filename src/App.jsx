import './App.css'
import CallbackSection from './component/CallbackSection'
import Footer from './component/footer/Footer'
import HeroVideo from './component/HeroVideo'
import JourneyFrames from './component/JourneyFrames'
import Navbar from './component/navbar/Navbar'
import ReviewsBar from './component/ReviewsBar'
import VideoBannerSlider from './component/VideoBannerSlider'
import WhyWanderOn from './component/WhyWanderOn'
import PromoVideo from './component/PromoVideo'
import ExperienceBanner from './component/ExperienceBanner'
import RomanticEscapes from './component/RomanticEscapes'
import ExploreIndia from './component/ExploreIndia'
import InternationalTrips from './component/InternationalTrips'

function App() {

  return (
    <>
      <Navbar/>
      <HeroVideo/>
      <ReviewsBar/>
      <ExperienceBanner/>
      <PromoVideo/>
      <VideoBannerSlider/>
      <InternationalTrips/>
      <ExploreIndia/>
      <RomanticEscapes/>
      <JourneyFrames/>
      <WhyWanderOn/>
      <CallbackSection/>
      <Footer/>
    </>
  )
}

export default App
