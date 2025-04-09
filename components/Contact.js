// components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
// Removed Link as it's no longer needed for the privacy policy link tied to the form
// Removed useState as form state is no longer needed

const colors = {
  gold: '#D4AF37',
  crimson: '#A4133C',
  lightText: '#E7EB', // Using a slightly less bright white for better readability
  mediumText: '#9CA3AF',
  darkBg: '#0a0a0a',
  // Input related colors can be removed or kept for future use if needed
};

// Animation Variants (kept the same)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Team Member Data (using the provided details)
// Note: Placeholders used where data was incomplete in the request.
//       'Phone' for Swapnil is displayed literally as requested.
const teamMembers = [
  {
    name: 'Terje Bjørkevoll',
    role: 'CEO',
    phone: '+47-90015544', // Displaying literally as provided
    email: 'terje@digitalsafety.no'
  },
  {
    name: 'Swapnil Kumar',
    role: 'IT',
    phone: '+47-40565790', // Displaying literally as provided
    email: 'swapnil@digitalsafety.no'
  },
  {
    name: 'Ole Petter',
    role: 'Manager', // Placeholder / Incomplete
    phone: '+47-90225574', // Placeholder / Incomplete
    email: 'ole@digitalsafety.no' // Placeholder / Incomplete
  },
  {
    name: 'Teddy Broadhurst',
    role: 'Manager', // Placeholder / Incomplete
    phone: "+47-91395462", // No phone provided
    email: 'teddy@digitalsafety.no' // Placeholder / Incomplete
  },
];


const Contact = () => {
  // Removed form state and handlers

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-b from-[#0a0a0a] to-black py-16 sm:py-24" // Gradient continues
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-lg font-semibold text-[#A4133C] tracking-wide uppercase"> {/* Crimson */}
            Get Started
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-[#D4AF37] sm:text-5xl tracking-tight"> {/* Gold */}
            Contact Our Team
          </p>
          <p className="mt-5 max-w-xl mx-auto text-xl text-[#9CA3AF] sm:text-2xl"> {/* Medium Text */}
            Reach out directly to a member of our team for inquiries or to discuss your needs.
          </p>
        </motion.div>

        {/* Team Contact Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants} // Apply item animation to each card
              className="text-center md:text-left p-4 rounded-lg" // Added padding and rounded corners, can add bg if desired
            >
              <h3 className="text-xl font-semibold text-[#ff0055bb]"> {/* Light Text */}
                {member.name}
              </h3>
              <p className="text-md text-[#9CA3AF] mt-1"> {/* Medium Text */}
                {member.role}
              </p>
              {member.phone && ( // Conditionally render phone if available
                <p className="text-md text-[#9CA3AF] mt-2"> {/* Medium Text */}
                  Phone: {member.phone}
                </p>
              )}
              {member.email && ( // Conditionally render email if available
                <p className="text-md text-[#9CA3AF] mt-1"> {/* Medium Text */}
                  Email: <a
                            href={`mailto:${member.email}`}
                            className="font-medium text-[#D4AF37] hover:text-opacity-80 transition underline" /* Gold Link */
                         >
                            {member.email}
                         </a>
                </p>
              )}
               {/* Note for incomplete entries */}
               {(member.email === '...' || member.email === 'teddy@digital...') && (
                 <p className="text-xs text-red-400 mt-2 italic">(Contact details incomplete)</p>
               )}
            </motion.div>
          ))}
        </motion.div>

        {/* Removed Form and Submit Logic */}
        {/* Removed Alternative Contact Email */}

      </div>
    </motion.section>
  );
};

export default Contact;