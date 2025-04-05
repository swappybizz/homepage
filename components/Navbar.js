// components/Navbar.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Use Next.js Link for internal navigation if needed later
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from './Logo'; // Import the Logo component

// Define navigation items
const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#howitworks' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Contact', href: '#contact' },
];

// Define colors (can also be moved to tailwind.config.js)
const colors = {
  gold: '#D4AF37', // Slightly desaturated gold
  crimson: '#A4133C', // Deeper crimson
  darkBg: '#111111', // Very dark grey instead of pure black
  lightText: '#E5E7EB', // Light grey text
  mediumText: '#9CA3AF', // Medium grey text
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for potential background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Add background after scrolling down 10px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll handler (optional, CSS `scroll-behavior: smooth` is simpler)
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust offset (e.g., navbar height)
        behavior: 'smooth',
      });
    }
    if (isOpen) setIsOpen(false); // Close mobile menu on link click
  };

  // Framer Motion variants for the mobile menu
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
      transitionEnd: {
         display: "none", // Hide from DOM when closed
      }
    },
    open: {
      opacity: 1,
      y: 0,
      display: "block", // Ensure it's displayed when open
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled || isOpen ? `bg-[${colors.darkBg}]/95 backdrop-blur-sm shadow-lg` : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Use Next Link if you have a home page, otherwise regular anchor */}
            <a href="#top" onClick={(e) => handleScrollTo(e, '#top')} aria-label="Scroll to top">
              <Logo className="h-8 w-auto md:h-10" gold={colors.gold} crimson={colors.crimson} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-[${colors.mediumText}] hover:text-[${colors.gold}] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact" // Assuming CTA links to contact, adjust if needed
              onClick={(e) => handleScrollTo(e, '#contact')}
              className={`bg-[${colors.crimson}] text-white hover:text-[${colors.gold}] hover:bg-opacity-90 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow`}
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md text-[${colors.mediumText}] hover:text-[${colors.gold}] hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[${colors.gold}]`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-[#181818] border-t border-gray-700 shadow-xl" // Slightly different dark for dropdown
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)} // Use handler here too
                  className={`text-[${colors.lightText}] hover:bg-gray-700 hover:text-[${colors.gold}] block px-3 py-2 rounded-md text-base font-medium text-center`}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact" // CTA in mobile menu
                onClick={(e) => handleScrollTo(e, '#contact')}
                className={`block w-full text-center mt-4 bg-[${colors.crimson}] text-white hover:text-[${colors.gold}] hover:bg-opacity-90 px-5 py-3 rounded-md text-base font-semibold transition-all duration-300 shadow`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;