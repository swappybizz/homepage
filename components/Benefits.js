// components/Benefits.js
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import BenefitVisualSvg from "./BenefitVisualSvg";

// --- Paste or import benefitsData and colors constants here ---
const benefitsData = [
  {
    id: 1,
    title: "Enhance Compliance",
    description:
      "Meet HSE and industry regulations effortlessly with standardized, verifiable digital audit trails. Reduce non-compliance risks.",
  },
  {
    id: 2,
    title: "Increase Accuracy & Consistency",
    description:
      "Minimize human error and ensure consistent audit procedures across all technicians and sites with AI assistance and guided workflows.",
  },
  {
    id: 3,
    title: "Reduce Costs & Time",
    description:
      "Significantly cut down on travel time, repeat visits, and manual reporting efforts. Faster audits mean quicker project turnaround.",
  },
  {
    id: 4,
    title: "Improve Data Security",
    description:
      "On Device secure storage protect sensitive audit data, ensuring privacy and integrity. ",
  },
  {
    id: 5,
    title: "Faster Decision Making",
    description:
      "Reporting at your fingertips. Reporting on the go and super easy sharing of reports.",
  },
];
const colors = {
  gold: "#D4AF37",
  crimson: "#A4133C",
  lightText: "#E5E7EB",
  mediumText: "#9CA3AF",
  darkBg: "#0a0a0a",
  cardBg: "#1F2937",
  // Increase alpha from 0.1 to 0.3 for more visibility
  lightBlob: "rgba(212, 175, 55, 0.3)",
};
// -------------------------------------------------------------

// Animation variants for benefit text blocks (remain the same)
const benefitTextVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation variants for the light blob (remain the same)
const lightBlobVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const Benefits = () => {
  const containerRef = useRef(null);

  // Scroll progress for clip-path animation (remains the same)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const clipPathValue = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]
  );

  // State for mouse tracking (remains the same)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInSection, setIsMouseInSection] = useState(false);

  // Event Handlers for the section (remains the same)
  const handleMouseMove = (event) =>
    setMousePosition({ x: event.clientX, y: event.clientY });
  const handleMouseEnter = () => setIsMouseInSection(true);
  const handleMouseLeave = () => setIsMouseInSection(false);

  return (
    // Add mouse event handlers to the section
    <motion.section
      id="benefits"
      ref={containerRef}
      className="bg-black py-16 sm:py-24 min-h-[200vh] relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Max width container / Grid setup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
        {/* Left Column: Scrolling Benefit Text */}
        <div className="lg:col-span-1 mt-12 lg:mt-0">
          {/* Section Title Area - Adjusted Text Sizes */}
          <div className="mb-12 md:mb-16 lg:mb-20 text-center lg:text-left">
            <h2
              className={`text-lg font-semibold text-[${colors.crimson}] tracking-wide uppercase`}
            >
              {" "}
              {/* Increased from text-base */}
              Value Proposition
            </h2>
            <p
              className={`mt-2 text-4xl font-extrabold text-[${colors.gold}] sm:text-5xl tracking-tight`}
            >
              {" "}
              {/* Increased from 3xl/4xl */}
              Unlock Key Benefits
            </p>
            <p
              className={`mt-4 max-w-2xl text-xl text-[${colors.mediumText}] lg:mx-0 sm:text-2xl`}
            >
              {" "}
              {/* Increased from xl */}
              See how Cold Eye Review transforms field operations and adds value
              to your business.
            </p>
          </div>
          {/* Benefits List */}
          <div className="space-y-10 lg:space-y-12">
            {benefitsData.map((benefit) => (
              <motion.div
                key={benefit.id}
                className="p-6 rounded-lg bg-[${colors.cardBg}] bg-opacity-50 backdrop-blur-sm shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={benefitTextVariants}
              >
                {/* Adjusted Text Sizes */}
                <h3
                  className={`text-2xl font-semibold text-[${colors.gold}] mb-3`}
                >
                  {" "}
                  {/* Increased from xl, added mb-3 */}
                  {benefit.title}
                </h3>
                <p
                  className={`text-lg text-[${colors.lightText}] leading-relaxed`}
                >
                  {" "}
                  {/* Increased from text-base, added leading-relaxed */}
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Visual (remains the same structure) */}
        <div className="hidden lg:block lg:col-span-1 h-full">
          <motion.div
            className="lg:sticky lg:top-20 w-full h-full rounded-xl overflow-hidden shadow-xl"
            style={{ clipPath: clipPathValue }}
          >
            <div className="w-full h-full">
              <BenefitVisualSvg />
            </div>
          </motion.div>
        </div>

        {/* Mobile Fallback Visual (remains the same structure) */}
        <div className="lg:hidden mt-12 mb-8 w-full h-[50vh] rounded-xl overflow-hidden shadow-xl">
          <BenefitVisualSvg />
        </div>
      </div>{" "}
      {/* End of max-width container / grid */}
      {/* Diffused Light Blob - Rendered Conditionally */}
      <AnimatePresence>
        {isMouseInSection && (
          <motion.div
            className="fixed top-0 left-0 z-0 pointer-events-none rounded-full"
            style={{
              width: "350px", // Can adjust size if needed
              height: "350px",
              x: mousePosition.x,
              y: mousePosition.y,
              translateX: "-50%",
              translateY: "-50%",
              // Updated background gradient using the more visible lightBlob color
              background: `radial-gradient(circle, ${colors.lightBlob} 0%, rgba(0,0,0,0) 100%)`, // Reduced fade distance slightly for more core color
              filter: "blur(80px)", // Keep blur effect
            }}
            variants={lightBlobVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Benefits;
