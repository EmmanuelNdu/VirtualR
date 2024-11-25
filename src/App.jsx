import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HeroSection />
    <FeatureSection />
    <WorkFlow />
    <Pricing />
    <Testimonials />
    </>
  )
}

export default App
