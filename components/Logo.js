// components/Logo.js
import React from 'react';

const Logo = ({ className = '', gold = '#D4AF37', crimson = '#A4133C' }) => {
  return (
    <svg
      className={className}
      width="40" // Adjust size as needed via className or props
      height="40" // Adjust size as needed via className or props
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DigitalSafety Logo"
    >
      {/* Optional background shape */}
      {/* <rect width="100" height="100" rx="15" fill="#222" /> */}
      {/* Letter D - using Crimson */}
      <path
        d="M25 20 C25 15, 30 10, 40 10 H 60 C 75 10, 85 20, 85 35 V 65 C 85 80, 75 90, 60 90 H 40 C 30 90, 25 85, 25 80 V 20 Z M 40 25 V 75 H 60 C 68 75, 70 70, 70 65 V 35 C 70 30, 68 25, 60 25 H 40 Z"
        fill={crimson}
      />
      {/* Letter S - overlaid using Gold, maybe slightly offset or styled differently */}
      <path
        d="M65 30 C75 30, 80 35, 80 45 C 80 55, 70 60, 60 60 H 40 C 30 60, 25 65, 25 75 C 25 85, 35 90, 45 90 H 65"
        stroke={gold} // Using stroke for contrast, adjust strokeWidth
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" // Make sure it's not filled if using stroke primarily
      />
       {/* Alternative S fill - uncomment if you prefer filled S
       <path
        d="M65 30 C75 30, 80 35, 80 45 C 80 55, 70 60, 60 60 H 40 C 30 60, 25 65, 25 75 C 25 85, 35 90, 45 90 H 65 V 80 H 45 C 40 80, 40 75, 40 70 C 40 65, 50 60, 60 60 H 70 V 45 C 70 40, 65 35, 60 35 H 45 V 30 H 65 Z"
        fill={gold}
       />
       */}
    </svg>
  );
};

export default Logo;