import React from 'react'
import ScrollIndicator from './ScrollIndicator'
import TypewriterText from './TypewriterText'
import { ChevronDown, Download } from 'lucide-react';


function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-72 md:h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content wrapper with full screen height */}
      <div className="relative z-10 flex flex-col justify-center gap-10 min-h-screen pt-16 md:pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex-1 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-purple-400 text-base md:text-lg mb-3 md:mb-4">Aspiring Software Engineer</p>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
  Hi, I'm{' '}
  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    Taschai
  </span>
</h1>
<TypewriterText />
<p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
  I'm a self-motivated developer with a strong interest in web development, system security, and open-source technologies. Always learning, always building.
</p>
<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
<a
  href="#projects"
  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm md:text-base text-center"
>
  View My Work
</a>
  <a
    href="src/assets/Taschai_Srilampung_Resume.pdf"
    download="Taschai_Srilampung_Resume.pdf"
    target="_blank"
    className="group border border-white/30 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-sm md:text-base text-center"
  >
    <div className="flex items-center justify-center gap-2">
      <span className="font-bold">Get My Resume</span>
      <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
    </div>
  </a>
</div>

          </div>

          {/* Right content - Profile circle */}
          <div className="flex-shrink-0 mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 md:border-4 border-purple-500/50 flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  {/* <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg> */}
                  <img
                    src="src/assets/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />


                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-pulse"></div>
              <div className="absolute -inset-2 md:-inset-4 rounded-full border border-purple-400/20 animate-ping"></div>
            </div>
          </div>
        </div>

       
        {/* Bouncing Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection