// components/HeroBackgroundSvg.js
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const colors = {
  gold: '#D4AF37',
  crimson: '#A4133C',
  dark: '#111111', // Slightly lighter than pure black for subtle shapes
};

// Simple random number generator for particle positions
const random = (min, max) => Math.random() * (max - min) + min;

// Define Icon paths (assuming roughly 24x24 viewbox)
const IconPaths = {
  shield: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
  lock: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
  camera: "M9.4 10.5 A1.5 1.5 0 0 1 8 9 A1.5 1.5 0 0 1 9.4 7.5 L14.6 7.5 A1.5 1.5 0 0 1 16 9 A1.5 1.5 0 0 1 14.6 10.5 Z M 4 8 L 4 18 L 20 18 L 20 8 L 17 8 A 5 5 0 0 0 12 4 A 5 5 0 0 0 7 8 L 4 8 M 12 16 A 4 4 0 0 1 8 12 A 4 4 0 0 1 12 8 A 4 4 0 0 1 16 12 A 4 4 0 0 1 12 16 M 12 14 A 2 2 0 0 0 14 12 A 2 2 0 0 0 12 10 A 2 2 0 0 0 10 12 A 2 2 0 0 0 12 14", // Custom simplified
  mic: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z",
  plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
  // Added mobile phone icon path (based on Material Icons 'StayCurrentPortrait')
  mobile: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
};

// The iconTypes array will automatically include 'mobile' now
const iconTypes = Object.keys(IconPaths);

const HeroBackgroundSvg = ({ mouseX, mouseY }) => {
  // ... (rest of the component code remains the same) ...

  const rotateX = useTransform(mouseY, [0, 1], [8, -8], { clamp: false });
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8], { clamp: false });

  const particles = React.useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: random(5, 95),
    y: random(5, 95),
    sizeFactor: random(0.15, 0.4),
    color: Math.random() > 0.5 ? colors.gold : colors.crimson,
    opacity: random(0.2, 0.7),
    // Now randomly picks from shield, lock, camera, mic, plus, mobile
    iconType: iconTypes[Math.floor(Math.random() * iconTypes.length)]
  })), []);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{
          rotateX,
          rotateY,
          transition: 'transform 0.1s ease-out',
        }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {/* Static background shapes */}
        <motion.circle cx="15" cy="85" r="30" fill={colors.dark} initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 1.5, delay: 0.5 }} />
        <motion.rect x="70" y="10" width="40" height="40" fill={colors.dark} rx="10" initial={{ opacity: 0, x: 90 }} animate={{ opacity: 0.4, x: 70 }} transition={{ duration: 1.5, delay: 0.7 }} />

        {/* Animated Icons */}
        {particles.map(p => (
          <motion.g
            key={p.id}
            initial={{ opacity: 0, scale: 0.5 * p.sizeFactor, x: p.x, y: p.y }}
            animate={{ opacity: [0, p.opacity, 0], scale: [0.5 * p.sizeFactor, 1 * p.sizeFactor, 0.5 * p.sizeFactor], x: p.x, y: p.y }}
            transition={{ duration: random(5, 10), repeat: Infinity, repeatType: 'loop', delay: random(0, 5), ease: "easeInOut" }}
          >
            <path
              d={IconPaths[p.iconType]}
              fill={p.color}
              transform="translate(-12, -12)" // Centers the 24x24 icon
            />
          </motion.g>
        ))}

        {/* Animated Lines */}
        <motion.path d="M 10 10 Q 50 30 90 10" stroke={colors.gold} strokeWidth="0.3" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }} transition={{ duration: 2, delay: 1, ease: "easeInOut" }} />
        <motion.path d="M 90 90 Q 50 70 10 90" stroke={colors.crimson} strokeWidth="0.3" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }} />

      </motion.svg>
    </motion.div>
  );
};

export default HeroBackgroundSvg;