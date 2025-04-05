// components/HowItWorks.js
import React, { useRef, useState } from 'react'; // Added useState
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import Image from 'next/image'; // Import Next.js Image

// --- Icon Components and Data (remain the same) ---
const colors = { gold: '#D4AF37', crimson: '#A4133C', lightText: '#E5E7EB', mediumText: '#9CA3AF', darkBg: '#111111', iconBg: '#2a2a2a' };
const InstallIcon = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L6.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg> );
const CaptureIcon = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> );
const AnalysisIcon = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8a1 1 0 10-2 0v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h7a1 1 0 100-2H5z"></path></svg> );
const ReportIcon = ({ className }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg> );
const stepsData = [ { id: 1, title: 'Install & Secure Login', description: 'Easily install the Cold Eye Review app on any supported device. Log in securely using multi-factor authentication.', icon: InstallIcon, }, { id: 2, title: 'Initiate Audit & Capture', description: 'Start a new audit session. Use the intuitive interface to capture high-quality video and audio evidence securely.', icon: CaptureIcon, }, { id: 3, title: 'AI Assists Analysis', description: 'Leverage built-in AI tools to analyze footage, detect anomalies, or transcribe audio during or after capture.', icon: AnalysisIcon, }, { id: 4, title: 'Generate & Share Report', description: 'Compile findings into a secure, encrypted report. Share instantly with authorized stakeholders through the platform.', icon: ReportIcon, }, ];
// -------------------------------------------------------------

// Animation variants for step content (remain the same)
const stepVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Animation variants for the mouse-following image
const mouseImageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 0.85, scale: 1 }, // Slightly transparent
};

const HowItWorks = () => {
  // Ref for scroll progress calculation
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform scroll progress for the line animation
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotOpacity = (index) => useTransform(pathLength, [index * 0.25 - 0.1, index * 0.25 + 0.1], [0.2, 1]);

  // State for mouse tracking *within this section*
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInSection, setIsMouseInSection] = useState(false);

  // Event Handlers for the section itself
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setIsMouseInSection(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInSection(false);
  };

  // Define offsets for the mouse-following image
  const imageOffsetX = 20;
  const imageOffsetY = 20;

  return (
    // Add mouse event handlers directly to the section
    <motion.section
      id="howitworks"
      ref={containerRef}
      className="bg-gradient-to-b from-black to-[#0a0a0a] py-24 sm:py-32 overflow-hidden relative" // Increased padding, added relative for absolute children positioning if needed later
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove} // Track mouse move over section
      onMouseEnter={handleMouseEnter} // Track mouse entering section
      onMouseLeave={handleMouseLeave} // Track mouse leaving section
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title (remains the same) */}
        <div className="text-center mb-16 md:mb-24"> {/* Increased bottom margin */}
          <h2 className={`text-base font-semibold text-[${colors.crimson}] tracking-wide uppercase`}>
            Simple Process
          </h2>
          <p className={`mt-2 text-3xl font-extrabold text-[${colors.gold}] sm:text-4xl tracking-tight`}>
            How Cold Eye Review Works
          </p>
          <p className={`mt-4 max-w-2xl mx-auto text-xl text-[${colors.mediumText}]`}>
            Follow these steps to conduct secure and efficient field audits.
          </p>
        </div>

        {/* Main container for steps and line */}
        <div className="relative">

          {/* Animated SVG Line - Desktop Only (remains the same) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <div className="h-full w-full bg-gray-700/30 rounded"></div>
            <svg width="4" height="100%" viewBox="0 0 4 1000" preserveAspectRatio="none" className="absolute top-0 left-0 h-full">
              <motion.line
                x1="2" y1="0" x2="2" y2="1000"
                stroke={colors.gold}
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength }}
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Steps Container */}
          {/* Increased mobile spacing, added desktop bottom margin to each step */}
          <div className="space-y-24 md:space-y-0">
            {stepsData.map((step, index) => {
              const isOdd = index % 2 !== 0;
              const IconComponent = step.icon;

              return (
                // Added md:mb-24 for desktop spacing between steps
                <motion.div
                  key={step.id}
                  className="relative md:grid md:grid-cols-2 md:items-center md:gap-x-8 md:mb-24" // Last item won't need margin if handled by section padding
                  initial={isOdd ? 'hiddenRight' : 'hiddenLeft'}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={stepVariants}
                >
                  {/* Content Column (remains the same structure) */}
                  <div className={`p-6 rounded-lg bg-[${colors.cardBg}] bg-opacity-60 backdrop-blur-sm shadow-lg ${isOdd ? 'md:col-start-2' : 'md:col-start-1'}`}>
                    <h3 className={`text-2xl font-bold text-[${colors.gold}] mb-2 hover:underline transition-all duration-500 cursor-pointer` }>
                      {step.title}
                    </h3>
                    <p className={`text-[${colors.lightText}]`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Icon/Number Column (remains the same structure) */}
                  <div className={`relative flex justify-center items-center mt-6 md:mt-0 ${isOdd ? 'md:col-start-1 md:row-start-1 md:justify-end md:pr-12' : 'md:col-start-2 md:row-start-1 md:justify-start md:pl-12'}`}>
                     {/* Dot on the line - Desktop Only */}
                     <motion.div
                       className="hidden md:block absolute z-10 w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-900"
                       style={{
                         backgroundColor: useTransform(dotOpacity(index + 1), [0.2, 1], [colors.iconBg, colors.gold]),
                       }}
                    />
                    {/* Actual Icon */}
                    <div className={`relative z-20 flex items-center justify-center w-16 h-16 rounded-full bg-[${colors.iconBg}] border-2 border-[${colors.gold}]/50 shadow-xl`}>
                      <IconComponent className={`w-8 h-8 text-[${colors.gold}]`} />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mouse Following Image - Rendered Conditionally */}
      <AnimatePresence>
        {isMouseInSection && (
          <motion.div
            className="fixed top-0 left-0 z-[70] pointer-events-none rounded-lg overflow-hidden shadow-lg" // Higher z-index, pointer-events none
            style={{
              // Use framer motion x/y for positioning
              x: mousePosition.x + imageOffsetX,
              y: mousePosition.y + imageOffsetY,
            }}
            variants={mouseImageVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.1 }} // Springy follow effect
          >
            <Image
            className='animate-pulse'
              src="/Feature.gif" // Path relative to the public folder
              alt="Feature visualization"
              width={100} // Define desired width
              height={100} // Define desired height
              objectFit="cover" // Or contain, depending on gif aspect ratio
            />
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
};

export default HowItWorks;