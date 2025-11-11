import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [activeLink, setActiveLink] = useState('#')

const resumeFile = '../../public/resume.pdf'

const links = [
{ href: '', label: 'Home' },
{ href: '#about', label: 'About' },
{ href: '#experiance', label: 'Experience' },
{ href: '#projects', label: 'Projects' },
{ href: '#achivements', label: 'Achievements' },
{ href: '#contact', label: 'Contact' },
{ href: resumeFile, label: 'Resume', isButton: true, download: true },
]

const onLinkClick = (href) => {
setActiveLink(href)
setIsMenuOpen(false)
}

return (
<motion.header
initial={{ y: -60, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
className="fixed top-0  bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-orange-500/20 z-50 overflow-x-hidden w-screen"
> <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> <div className="flex items-center justify-between">
<motion.h2
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
className="text-2xl md:text-3xl font-bold text-white select-none tracking-wide"
>
Shivanshu Kashyap
</motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden lg:flex items-center space-x-2 xl:space-x-4"
      >
        {links.map(({ href, label, isButton, download }) => {
          const isActive = activeLink === href
          if (isButton) {
            return (
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                key={label}
                href={href}
                onClick={() => onLinkClick(href)}
                download={download ? true : undefined}
                className="px-5 py-2 text-white rounded-full bg-orange-500 hover:bg-orange-600 transition-all shadow-lg text-sm md:text-base font-semibold"
              >
                {label}
              </motion.a>
            )
          }
          return (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={label}
              href={href}
              onClick={() => onLinkClick(href)}
              className={`relative px-3 py-2 rounded-md text-sm md:text-base transition-all duration-200 
                ${isActive 
                  ? 'border-2 border-orange-400 text-white bg-orange-500 font-semibold shadow-xl' 
                  : 'text-gray-300 hover:border-2 hover:border-orange-400/50 hover:text-white hover:font-semibold'}`}
            >
              {label}
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400 rounded"
                />
              )}
            </motion.a>
          )
        })}
      </motion.div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="lg:hidden text-gray-300 hover:text-orange-400 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </motion.svg>
      </motion.button>
    </div>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-4 pb-4 flex flex-col items-center space-y-3"
        >
          {links.map(({ href, label, isButton, download }) => (
            isButton ? (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={label}
                href={href}
                download={download ? true : undefined}
                onClick={() => onLinkClick(href)}
                className="w-full max-w-xs text-center px-4 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all font-semibold"
              >
                {label}
              </motion.a>
            ) : (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                key={label}
                href={href}
                onClick={() => onLinkClick(href)}
                className={`block w-full max-w-xs text-center px-3 py-2 rounded-md transition-all duration-200 text-sm sm:text-base
                  ${activeLink === href 
                    ? 'border-2 border-orange-400 bg-orange-500/10 text-white font-medium' 
                    : 'text-gray-300 hover:border-2 hover:border-orange-300/50 hover:text-white'}`}
              >
                {label}
              </motion.a>
            )
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
</motion.header>
)
}

export default Header