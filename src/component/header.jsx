import React, { useState } from 'react'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
          
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white/80 hover:text-white transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-black-200 backdrop-blur-md border-white-100">
            <div className="flex flex-col space-y-4 p-4">
              <a 
                href="#about" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
        
        {/* Optional: Add backdrop blur effect */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10"></div>
      </header>
    </>
  )
}

export default Header