// components/HoverSlideshow.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HoverSlideshow = ({ images, position }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to cycle through images and reset on prop change
  useEffect(() => {
    // Ensure images exist and have items before proceeding
    if (!images || images.length === 0) {
      return; // Exit early if no images
    }
    // Reset index to 0 whenever the images prop changes
    // This happens when the user hovers over a different card
    setCurrentIndex(0);

    // Set up the interval to change images
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Change image every 1.5 seconds

    // Cleanup function: clear the interval when the component unmounts
    // or when the 'images' prop changes before the next effect runs.
    return () => clearInterval(intervalId);

  }, [images]); // Dependency array ensures effect runs when 'images' prop changes

  // If there are no images for the currently hovered item, render nothing
  if (!images || images.length === 0) {
    return null;
  }

  // Define offsets to position the slideshow slightly away from the cursor
  const offsetX = 15;
  const offsetY = 15;

  return (
    // Main container for the slideshow
    // Uses motion.div for animation capabilities
    <motion.div
      // Tailwind classes for styling and positioning
      className="fixed top-0 left-0 w-[150px] h-[100px] rounded-md shadow-xl overflow-hidden pointer-events-none z-[60]"
      // Inline styles for dynamic positioning based on mouse coordinates
      // Framer Motion's x/y properties often provide smoother animations than top/left
      style={{
        x: position.x + offsetX,
        y: position.y + offsetY,
      }}
      // Animation properties for appearance and disappearance
      initial={{ opacity: 0, scale: 0.8 }} // Start transparent and slightly smaller
      animate={{ opacity: 1, scale: 1 }}    // Animate to fully opaque and normal size
      exit={{ opacity: 0, scale: 0.8 }}    // Animate back to transparent and smaller on exit
      transition={{ duration: 0.3, ease: 'easeOut' }} // Control animation speed and easing
    >
      {/* Display the current image using Next.js Image component */}
      {/* Using currentIndex as key helps React efficiently update/replace the image */}
      <Image
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Slideshow image ${currentIndex + 1}`}
        width={250} // Required width prop for Next Image
        height={100} // Required height prop for Next Image
        layout="responsive" // Makes image scale within container dimensions
        objectFit="cover" // Ensures image covers the area, potentially cropping
        unoptimized={true} // Recommended for external dynamic sources like Lorem Picsum
      />
    </motion.div>
  );
};

export default HoverSlideshow;