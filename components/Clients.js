// components/Clients.js
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Use Next.js Image

const colors = {
  gold: '#D4AF37',
  crimson: '#A4133C',
  lightText: '#E5E7EB',
  mediumText: '#9CA3AF',
  darkBg: '#000000',
};

// --- Client Data - Using local SVGs from /public folder ---
const clientsData = [
  {
    id: 1,
    name: 'Hydro',
    logoUrl: '/hydro.svg', // Path relative to the public folder
    isImage: true,
  },
  {
    id: 2,
    name: 'Tratec',
    logoUrl: '/tratec.svg', // Path relative to the public folder
    isImage: true,
  },
  // Add more clients here
];

// Animation Variants (remain the same)
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.15 },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.7,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  hover: {
    opacity: 1,
    scale: 1.08,
    filter: 'grayscale(0%) brightness(1)',
    transition: { duration: 0.2 }
  }
};


const Clients = () => {
  return (
    <motion.section
      id="clients"
      className={`bg-[${colors.darkBg}] py-16 sm:py-24`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-lg font-semibold text-[${colors.mediumText}] tracking-wide uppercase`}>
            Trusted By Leading Innovators
          </h2>
        </div>

        {/* Client Logos Grid */}
        <motion.div
          className="grid grid-cols-2 gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-4 items-center justify-items-center"
          // Apply variants to the grid container for staggering
          variants={sectionVariants}
        >
          {clientsData.map((client) => (
            <motion.div
              key={client.id}
              className="flex justify-center items-center p-4"
              variants={logoVariants}
              // Variants applied per item by inheriting from parent with staggerChildren
              // initial="hidden" // Not needed if parent has variants + stagger
              // animate="visible" // Not needed if parent has variants + stagger
              whileHover="hover"
            >
              {/* Use next/image for local SVGs */}
              <Image
                src={client.logoUrl}
                alt={`${client.name} Logo`}
                // You need to define appropriate width/height for layout spacing
                // These values might need adjustment based on the actual SVG aspect ratios
                width={160} // Example width
                height={50}  // Example height
                objectFit="contain" // Ensures the entire logo fits
                className="filter grayscale brightness-150 transition-all duration-200" // Initial muted style
              />
            </motion.div>
          ))}
           {/* Example Placeholders if needed */}
           {/*
            <motion.div className="flex justify-center items-center p-4 filter grayscale brightness-150 opacity-70" variants={logoVariants} whileHover="hover">
                 <span className={`text-xl font-bold tracking-wider text-gray-600`}>CLIENT 3</span>
            </motion.div>
             <motion.div className="flex justify-center items-center p-4 filter grayscale brightness-150 opacity-70" variants={logoVariants} whileHover="hover">
                 <span className={`text-xl font-bold tracking-wider text-gray-600`}>CLIENT 4</span>
            </motion.div>
            */}
        </motion.div>
         {/* No longer need the disclaimer about placeholders */}
      </div>
    </motion.section>
  );
};

export default Clients;