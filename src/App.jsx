import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import ScrollIndicator from './component/ScrollIndicator'
import HeroSection from './component/HeroSection'
import AboutMe from './component/AboutMe'
import Skills from './component/Skills'
import FeaturedProjects from './component/FeaturedProjects'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />
  <HeroSection />
  <AboutMe />
  <Skills />
  <FeaturedProjects />
  <Contact />
  <Footer/>
    </>
  )
}

export default App
