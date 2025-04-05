// components/Features.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import HoverSlideshow from './HoverSlideshow'; // Import the new component

// Feature data including slideshow images
const featuresData = [
  {
    id: 1,
    title: 'Secure & Encrypted',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo Eaque Quisquam quod.',
    imageUrl: 'https://picsum.photos/seed/security/400/300',
    slideshowImages: [
      'https://picsum.photos/seed/sec1/150/100',
      'https://picsum.photos/seed/sec2/150/100',
      'https://picsum.photos/seed/sec3/150/100',
    ],
    imageAlt: 'Abstract image representing security'
  },
  {
    id: 2,
    title: 'Cross-Platform Access',
    description: 'Adipisci tempore vitae eius quia quas fuga rem, necessitatibus cumque. Dolor.',
    imageUrl: 'https://picsum.photos/seed/devices/400/300',
    slideshowImages: [
      'https://picsum.photos/seed/dev1/150/100',
      'https://picsum.photos/seed/dev2/150/100',
      'https://picsum.photos/seed/dev3/150/100',
    ],
    imageAlt: 'Abstract image representing multiple devices'
  },
  {
    id: 3,
    title: 'AI-Powered Analysis',
    description: 'Laboriosam, dignissimos consequatur et minus distinctio reiciendis quasi commodi.',
    imageUrl: 'https://picsum.photos/seed/ai/400/300',
     slideshowImages: [
      'https://picsum.photos/seed/ai1/150/100',
      'https://picsum.photos/seed/ai2/150/100',
      'https://picsum.photos/seed/ai3/150/100',
    ],
     imageAlt: 'Abstract image representing artificial intelligence'
  },
    {
    id: 4,
    title: 'Real-time Collaboration',
    description: 'Voluptates molestiae nemo esse nobis, provident quae doloribus natus placeat?',
    imageUrl: 'https://picsum.photos/seed/collaboration/400/300',
     slideshowImages: [
      'https://picsum.photos/seed/collab1/150/100',
      'https://picsum.photos/seed/collab2/150/100',
      'https://picsum.photos/seed/collab3/150/100',
    ],
     imageAlt: 'Abstract image representing collaboration'
  },
  {
    id: 5,
    title: 'Comprehensive Audit Trails',
    description: 'Facere error delectus obcaecati ipsam temporibus possimus laudantium optio.',
    imageUrl: 'https://picsum.photos/seed/audittrail/400/300',
    slideshowImages: [
      'https://picsum.photos/seed/audit1/150/100',
      'https://picsum.photos/seed/audit2/150/100',
      'https://picsum.photos/seed/audit3/150/100',
    ],
     imageAlt: 'Abstract image representing data logs or trails'
  },
  {
    id: 6,
    title: 'Industry Specific Audits',
    description: 'Quibusdam commodi quos repellat distinctio? Mollitia facere ipsa quia quisquam.',
    imageUrl: 'https://picsum.photos/seed/industry/400/300',
    slideshowImages: [
      'https://picsum.photos/seed/ind1/150/100',
      'https://picsum.photos/seed/ind2/150/100',
      'https://picsum.photos/seed/ind3/150/100',
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