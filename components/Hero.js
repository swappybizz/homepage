// components/Hero.js
import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import HeroBackgroundSvg from './HeroBackgroundSvg'; // Import the SVG background

// Define colors - consistent with Navbar
const colors = {
  gold: '#D4AF37',
  crimson: '#A4133C',
  lightText: '#E5E7EB',
  mediumText: '#9CA3AF',
};

const Hero = () => {
  const heroRef = useRef(null);

  // Motion values to track mouse position relative to the hero section
  const mouseX = useMotionValue(0.5); // Start at center (0.5 = 50%)
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (event) => {
    if (heroRef.current) {
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      // Calculate position as a fraction (0 to 1) within the element
      const x = (event.clientX - left) / width;
      const y = (event.clientY - top) / height;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
      // Reset to center when mouse leaves
      mouseX.set(0.5);
      mouseY.set(0.5);
  }

  // Variants for staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animating in
        delayChildren: 0.3, // Wait before starting children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero" // Make sure ID matches navbar link
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave} // Add mouse leave handler
      className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden" // Added overflow-hidden
      // Adjust padding as needed, especially for smaller screens
      style={{ paddingTop: '0', marginTop: '0' }} // Override global section padding for hero
    >
      {/* Background SVG */}
      <HeroBackgroundSvg mouseX={mouseX} mouseY={mouseY} />

      {/* Max width container for content, positioned above SVG */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Use animate="visible" to trigger animation on load
        // Or use whileInView for scroll-triggered animation if not the first element
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.5 }}
      >
        {/* Main Headline */}
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          <span className={`block text-[${colors.lightText}]`}>Secure Field Audits,</span>
          <span className={`block text-[${colors.gold}] mt-1 md:mt-2`}>Powered by AI</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className={`mt-4 max-w-md mx-auto text-lg text-[${colors.mediumText}] sm:text-xl md:mt-6 md:max-w-2xl`}
          variants={itemVariants}
        >
          Introducing <span className={`text-[${colors.lightText}] font-semibold`}>Cold Eye Review</span>:
          The private, cross-platform camera app for secure, AI-enhanced HSE, progress, and health audits.
        </motion.p>

        {/* Button Group */}
        <motion.div
          className="mt-8 sm:mt-10 flex justify-center items-center space-x-4"
          variants={itemVariants}
        >
          {/* Primary CTA */}
          <motion.a
            href="#contact" // Link to contact section
            onClick={(e) => {
                // Optional: Add smooth scroll JS if needed, but CSS should handle it
                // e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`inline-block bg-[${colors.crimson}] text-white px-6 py-3 rounded-md text-base font-semibold shadow-md transition-colors duration-300 hover:bg-opacity-85 `}
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Request Demo
          </motion.a>

          {/* Secondary CTA (Optional) */}
          <motion.a
            href="#features" // Link to features section
             onClick={(e) => {
                // Optional: Add smooth scroll JS if needed
                // e.preventDefault(); document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`inline-block bg-transparent border-2 border-[${colors.gold}] text-[${colors.gold}] px-6 py-3 rounded-md text-base font-semibold transition-all duration-300 hover:bg-[${colors.gold}] hover:text-gray-600`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;