import React, { useState, useCallback } from 'react'

// Memoize menu link component
const MenuLink = React.memo(({ href, label, onClick }) => (
  <a 
    href={href} 
    className="text-white/80 hover:text-white transition-colors duration-300 text-sm lg:text-base will-change-opacity"
    onClick={onClick}
  >
    {label}
  </a>
));

MenuLink.displayName = 'MenuLink';

const Header = React.memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black-200 backdrop-blur-md border-white-100 will-change-transform">
        {/* Navigation */}
        <nav className="container mx-auto flex justify-between items-center p-2 md:p-4">
          {/* Logo */}
          <div className="text-white font-bold text-lg md:text-xl will-change-contents">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Taschai Srilampung
            </span>
          </div>
          
          {/* Desktop & Tablet Menu */}
          <div className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8 text-white/80">
            {menuItems.map((item) => (
              <MenuLink 
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white/80 hover:text-white transition-colors duration-300 will-change-transform"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                className="w-6 h-6 transition-transform duration-300" 
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
        
        {/* Mobile Menu - Optimized with transform for GPU acceleration */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-black-200 backdrop-blur-md border-white-100 transform transition-all duration-200 will-change-transform">
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-white/80 hover:text-white transition-colors duration-300 will-change-opacity"
                  onClick={handleMobileMenuClose}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Optional: Optimized backdrop blur effect */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10 will-change-transform pointer-events-none"></div>
      </header>
    </>
  )
})

Header.displayName = 'Header';

export default Header