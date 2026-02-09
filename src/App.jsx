import './App.css'
import CallbackSection from './component/CallbackSection'
import Footer from './component/footer/Footer'
import HeroVideo from './component/HeroVideo'
import Navbar from './component/navbar/Navbar'
import ReviewsBar from './component/ReviewsBar'
import WhyWanderOn from './component/WhyWanderOn'

function App() {

  return (
    <>
      <Navbar/>
      <HeroVideo/>
      <ReviewsBar/>
      <WhyWanderOn/>
      <CallbackSection/>
      <Footer/>
    </>
  )
}

export default App
