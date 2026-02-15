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
import UpcomingCommunityTrips from './component/UpcomingCommunityTrips'
import UpcomingTrips from './component/UpcomingTrips'

function App() {

  return (
    <>
      <Navbar/>
      <HeroVideo/>
      <ReviewsBar/>
      <ExperienceBanner/>
      <PromoVideo/>
      <VideoBannerSlider/>
      <UpcomingCommunityTrips/>
      <InternationalTrips/>
      <ExploreIndia/>
      <UpcomingTrips/>
      <RomanticEscapes/>
      <JourneyFrames/>
      <WhyWanderOn/>
      <CallbackSection/>
      <Footer/>
    </>
  )
}

export default App
