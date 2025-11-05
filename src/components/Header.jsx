import React, { useState, useEffect, useCallback } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#') // Default to home
  const [boxStyle, setBoxStyle] = useState({ left: '0px', width: '0px' })

  const links = [
    { href: '', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
    { href: '#resume', label: 'Resume', isButton: true },
  ]

  const onLinkClick = (href) => {
    setActiveLink(href)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-blue-500/20 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold select-none">
            Shivanshu Kashyap
          </h2>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map(({ href, label, isButton }) => {
              const isActive = activeLink === href
              if (isButton) {
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => onLinkClick(href)}
                    className="px-4 py-2 text-white rounded-full bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg"
                  >
                    {label}
                  </a>
                )
              }

              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => onLinkClick(href)}
                  className={`px-3 py-2 rounded-md transition-all duration-200 relative
                    ${isActive 
                      ? 'border-2 border-orange-400 text-white scale-105 bg-orange-500 font-semibold text-lg shadow-2xl' 
                      : 'text-gray-300 hover:border-2 hover:border-orange-400/50 hover:text-white hover:scale-105 hover:font-medium'}`}
                >
                  {label}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {links.map(({ href, label, isButton }) => (
              isButton ? (
                <a
                  key={label}
                  href={href}
                  onClick={() => onLinkClick(href)}
                  className="inline-block px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                  {label}
                </a>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={() => onLinkClick(href)}
                  className={`block px-3 py-2 rounded-md transition-all duration-200 
                    ${activeLink === href 
                      ? 'border-2 border-blue-400 bg-blue-500/10 text-white' 
                      : 'text-gray-300 hover:border-2 hover:border-blue-300/50 hover:text-white'}`}
                >
                  {label}
                </a>
              )
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header