// components/Features.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import HoverSlideshow from './HoverSlideShow'; // Import the new component

// Feature data including slideshow images
const featuresData = [
  {
    id: 1,
    title: 'Secure & Local',
    description: 'There is nothing more secure than a local solution. No data is sent to the cloud. If you can provide your own AI model, we can run completely on your own infrastructure.',
    imageUrl: 'https://i.ibb.co/B2sPv8kt/Chat-GPT-Image-Apr-9-2025-11-25-36-AM.png',
    slideshowImages: [
      "https://i.ibb.co/d4GK3szV/pexels-photo-8438918.webp",
      "https://i.ibb.co/rKbPNC5P/pexels-ron-lach-9783812-1.jpg",
      "https://i.ibb.co/QjK0Bp8X/pexels-cottonbro-5474035-1.jpg"
    ],
    imageAlt: 'Abstract image representing security'
  },
  {
    id: 2,
    title: 'Cross-Platform Access',
    description: 'Access your data from any device, anywhere. Our app is designed to work seamlessly across all platforms.',
    imageUrl: 'https://i.ibb.co/k25LJDP1/Chat-GPT-Image-Apr-9-2025-11-43-22-AM.png',
    slideshowImages: [
      'https://i.ibb.co/1W307xV/pexels-pixabay-39284-1.jpg',
      'https://i.ibb.co/0jwbJ43D/pexels-jakubzerdzicki-30909284.jpg',
      "https://i.ibb.co/GfBS4wrj/pexels-fotios-photos-1092671-1.jpg"
    ],
    imageAlt: ' image representing multiple devices'
  },
  {
    id: 3,
    title: 'AI-Powered Analysis',
    description: 'Powerful AI for intelligent feature and HSE detection, from Audio-Visual input to Text Reports in just few clicks.', 
    imageUrl: 'https://i.ibb.co/YBYS20Vk/istockphoto-1432457969-612x612.jpg',
     slideshowImages: [
      '',
      'https://i.ibb.co/TM4N7jtD/Chat-GPT-Image-Apr-9-2025-11-54-12-AM-1.png',
      'https://picsum.photos/seed/ai3/150/100',
      "https://i.ibb.co/8D5XgT79/pexels-tara-winstead-8849295-1.jpg"
    ],
     imageAlt: 'Abstract image representing artificial intelligence'
  },
  {
    id: 4,
    title: 'Industry Specific Audits',
    description: 'Trained from HSE and Industry specific data, our AI is ready to assist you in your audits.',
    imageUrl: "https://i.ibb.co/PGwTKHPp/pexels-photo-257700.jpg",
    slideshowImages: [
      "https://i.ibb.co/35MFbxs3/free-photo-of-forklift-and-containers-at-a-transshipment-port.jpg",
"https://i.ibb.co/m1T12Gd/pexels-photo-3375371.jpg",
"https://i.ibb.co/JFddjJ9d/pexels-photo-12583030.jpg",
"https://i.ibb.co/jPL5ntWY/pexels-photo-1249611.jpg",

    ],
     imageAlt: 'Abstract image representing various industries'
  }
];

// Color definitions consistent with theme
const colors = {
  gold: '#D4AF37',
  crimson: '#A4133C',
  lightText: '#E5E7EB',
  mediumText: '#9CA3AF',
  darkBg: '#111111',
  cardBg: '#1F2937', // Dark blue/grey for cards
};

// Framer Motion Variants for staggering container effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay animation start for each child
    },
  },
};

// Framer Motion Variants for individual card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and below final position
  visible: {
    opacity: 1,
    y: 0, // Animate to fully visible and original position
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};



const Features = () => {
     // State variable to store the ID of the feature card being hovered over
  const [hoveredFeatureId, setHoveredFeatureId] = useState(null); // null means nothing is hovered

  // State variable to store the current mouse coordinates (x, y)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect hook to set up and clean up the global mouse move event listener
  useEffect(() => {
    // Function to update the mouse position state
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add the event listener to the window object
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Find the full data object for the feature that is currently being hovered
  const hoveredFeatureData = featuresData.find(feature => feature.id === hoveredFeatureId);

  return (
    // Section container with ID for navigation and background styling
    <motion.section
      id="features"
      className="bg-black py-16 sm:py-24" // Black background, vertical padding
      // Animation properties for scroll-triggered reveal
      initial="hidden" // Start in the 'hidden' state defined in variants
      whileInView="visible" // Animate to 'visible' state when in viewport
      viewport={{ once: true, amount: 0.1 }} // Trigger animation once when 10% is visible
      variants={containerVariants} // Apply container variants for staggering children
    >
      {/* Centered content container with max width and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title Area */}
        <div className="text-center mb-12 md:mb-16">
          {/* Subtitle */}
          <h2 className={`text-base font-semibold text-[${colors.crimson}] tracking-wide uppercase`}>
            Why Cold Eye Review?
          </h2>
          {/* Main Title */}
          <p className={`mt-2 text-3xl font-extrabold text-[${colors.gold}] sm:text-4xl tracking-tight`}>
            Core Features & Capabilities
          </p>
          {/* Description */}
          <p className={`mt-4 max-w-2xl mx-auto text-xl text-[${colors.mediumText}]`}>
            Discover how our secure AI camera app streamlines your field audits and reporting.
          </p>
        </div>

        {/* Responsive Grid for Feature Cards */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          // Container variants could optionally be applied here instead of the section
        >
          {/* Map over the features data to render each card */}
          {featuresData.map((feature) => (
            // Individual Feature Card container
            <motion.div
              key={feature.id}
              // Styling for the card: layout, background, border, shadow, etc.
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden bg-[${colors.cardBg}] border border-gray-700`}
              // Apply card animation variants
              variants={cardVariants}
              // Apply hover animation (lift and scale)
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              // Event handlers to track mouse entering and leaving the card
              onMouseEnter={() => setHoveredFeatureId(feature.id)}
              onMouseLeave={() => setHoveredFeatureId(null)}
            >
              {/* Image container */}
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover" // Fixed height, cover area
                  src={feature.imageUrl}
                  alt={feature.imageAlt}
                  width={400} // Width hint for Next.js Image
                  height={300} // Height hint for Next.js Image
                  unoptimized={true} // For Lorem Picsum compatibility
                />
              </div>
              {/* Text content container */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  {/* Feature Title */}
                  <p className={`text-xl font-semibold text-[${colors.gold}]`}>
                    {feature.title}
                  </p>
                  {/* Feature Description */}
                  <p className={`mt-3 text-base text-[${colors.mediumText}]`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Container for the Hover Slideshow - Rendered conditionally */}
      {/* This div uses Tailwind's responsive classes to only be active on medium screens and up */}
      <div className="hidden md:block">
        {/* AnimatePresence allows the HoverSlideshow component to animate out when removed */}
        <AnimatePresence>
          {/* Conditionally render HoverSlideshow if an ID is set and data exists */}
          {hoveredFeatureId && hoveredFeatureData && (
            <HoverSlideshow
              images={hoveredFeatureData.slideshowImages} // Pass the specific slideshow images
              position={mousePosition} // Pass the current mouse position
            />
          )}
        </AnimatePresence>
      </div>

    </motion.section>
  );
};


export default Features