import React from 'react'

function header() {
  return (
    <>
       <header className="fixed top-0 left-0 right-0 z-50 bg-black-200 backdrop-blur-md border-white-100">
      {/* Navigation */}
      <nav className="container mx-auto flex justify-between items-center p-2 md:p-4">
        {/* Logo */}
        <div className="text-white font-bold text-lg md:text-xl">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Taschai Srilampung
          </span>
        </div>

        {/* Desktop & Tablet Menu */}
        <div className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8 text-white/80">
          <a 
            href="#about" 
            className="hover:text-white transition-colors duration-300 text-sm lg:text-base"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="hover:text-white transition-colors duration-300 text-sm lg:text-base"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="hover:text-white transition-colors duration-300 text-sm lg:text-base"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="hover:text-white transition-colors duration-300 text-sm lg:text-base"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button - แสดงเฉพาะมือถือ */}
        <div className="sm:hidden">
          <button className="text-white/80 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Optional: Add backdrop blur effect */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10"></div>
    </header>

    </>
  )
}

export default header