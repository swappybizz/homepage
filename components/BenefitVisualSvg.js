// components/BenefitVisualSvg.js
import React from 'react';
import { motion } from 'framer-motion';

const colors = { gold: '#D4AF37', crimson: '#A4133C', dark: '#18181b' }; // Darker shade

const BenefitVisualSvg = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 300 300" // Larger viewbox for more space
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background Rect */}
      <rect width="300" height="300" fill={colors.dark} />

      {/* Rotating square shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.rect
          key={`rect1-${i}`}
          x={50 + i * 80}
          y={50 + i * 30}
          width={60 - i * 10}
          height={60 - i * 10}
          rx="5"
          stroke={colors.gold}
          strokeWidth="1"
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10 + i * 5,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}
       {[...Array(2)].map((_, i) => (
        <motion.rect
          key={`rect2-${i}`}
          x={180 - i * 60}
          y={150 + i * 40}
          width={40 + i * 10}
          height={40 + i * 10}
          rx="5"
          stroke={colors.crimson}
          strokeWidth="0.5"
          initial={{ rotate: 0, opacity: 0.4 }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 12 + i * 4,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.8,
          }}
        />
      ))}

       {/* Pulsating Circles */}
       {[...Array(3)].map((_, i) => (
          <motion.circle
            key={`circle-${i}`}
            cx={150 + (i - 1) * 80} // Center, left, right
            cy={i === 1 ? 80 : 220} // Top center, bottom left/right
            r={15 - i*3}
            fill={i % 2 === 0 ? colors.gold : colors.crimson}
            initial={{ scale: 0.8, opacity: 0.1 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.5, 0.1] }}
             transition={{
              duration: 3 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1,
            }}
          />
       ))}
    </motion.svg>
  );
};

export default BenefitVisualSvg;