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
import LoadingScreen from './component/LoadingScreen' // เพิ่มบรรทัดนี้

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true) // เพิ่ม state สำหรับ loading

  // Function เมื่อ loading เสร็จ
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // ถ้ายัง loading อยู่ให้แสดง LoadingScreen
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  // ถ้า loading เสร็จแล้วให้แสดงเว็บปกติ
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