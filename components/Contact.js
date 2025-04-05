// components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // For the privacy policy link

const colors = {
  gold: '#D4AF37',
  crimson: '#A4133C',
  lightText: '#E7EB',
  mediumText: '#9CA3AF',
  darkBg: '#0a0a0a', // Continuing the slight gradient
  inputBg: '#1F2937', // Dark blue-grey for inputs
  inputBorder: '#4B5563', // Muted border
  inputFocusBorder: '#D4AF37', // Gold focus
};

// Animation Variants
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

const Contact = () => {
  // Basic state for form inputs
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Placeholder submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log("Form Data Submitted:", formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/error
    const success = Math.random() > 0.3; // Simulate success mostly
    if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', companyName: '', email: '', message: '' }); // Clear form
    } else {
        setSubmitStatus('error');
    }

    setIsSubmitting(false);
    // Hide status message after a few seconds
     setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-b from-[#0a0a0a] to-black py-16 sm:py-24" // Gradient continues, ends in black for footer transition
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h2 className={`text-lg font-semibold text-[${colors.crimson}] tracking-wide uppercase`}>
            Get Started
          </h2>
          <p className={`mt-2 text-4xl font-extrabold text-[${colors.gold}] sm:text-5xl tracking-tight`}>
            Request a Demo
          </p>
          <p className={`mt-5 max-w-xl mx-auto text-xl text-[${colors.mediumText}] sm:text-2xl`}>
            Interested in seeing Cold Eye Review in action? Fill out the form below or email us directly.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className={`block text-sm font-medium text-[${colors.lightText}] mb-1`}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={`block w-full px-4 py-3 rounded-md shadow-sm bg-[${colors.inputBg}] border border-[${colors.inputBorder}] text-black placeholder-[${colors.mediumText}] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[${colors.inputFocusBorder}] focus:border-[${colors.inputFocusBorder}] transition`}
                placeholder="Jane Doe"
              />
            </div>

            {/* Company Name Field */}
            <div>
              <label htmlFor="companyName" className={`block text-sm font-medium text-[${colors.lightText}] mb-1`}>
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                required
                autoComplete="organization"
                value={formData.companyName}
                onChange={handleChange}
                className={`block w-full px-4 py-3 rounded-md shadow-sm bg-[${colors.inputBg}] border border-[${colors.inputBorder}] text-black placeholder-[${colors.mediumText}] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[${colors.inputFocusBorder}] focus:border-[${colors.inputFocusBorder}] transition`}
                placeholder="Acme Corporation"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className={`block text-sm font-medium text-[${colors.lightText}] mb-1`}>
              Company Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className={`block w-full px-4 py-3 rounded-md shadow-sm bg-[${colors.inputBg}] border border-[${colors.inputBorder}] text-black placeholder-[${colors.mediumText}] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[${colors.inputFocusBorder}] focus:border-[${colors.inputFocusBorder}] transition`}
              placeholder="you@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className={`block text-sm font-medium text-[${colors.lightText}] mb-1`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className={`block w-full px-4 py-3 rounded-md shadow-sm bg-[${colors.inputBg}] border border-[${colors.inputBorder}] text-black placeholder-[${colors.mediumText}] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[${colors.inputFocusBorder}] focus:border-[${colors.inputFocusBorder}] transition`}
              placeholder="Tell us briefly about your needs or ask any questions."
            />
          </div>

          {/* Privacy Note */}
           <div className="text-sm text-center text-[${colors.mediumText}]">
             By submitting this form, you agree to our{' '}
             <Link href="/privacy" legacyBehavior>
                <a className={`font-medium text-[${colors.gold}] hover:text-opacity-80 underline transition`}>Privacy Policy</a>
             </Link>.
           </div>

          {/* Submit Button & Status */}
          <div className="text-center">
             {submitStatus === 'success' && (
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className="mb-4 text-green-400">Message sent successfully! We'll be in touch soon.</motion.p>
             )}
             {submitStatus === 'error' && (
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className="mb-4 text-red-400">Something went wrong. Please try again or email us.</motion.p>
             )}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex justify-center items-center py-3 px-8 border border-white shadow-sm text-lg font-medium rounded-md text-white bg-[${colors.crimson}] hover:bg-opacity-85 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[${colors.crimson}] transition disabled:opacity-50 disabled:cursor-not-allowed`}
              whileHover={!isSubmitting ? { scale: 1.05, filter: 'brightness(1.1)' } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </motion.button>
          </div>
        </motion.form>

         {/* Alternative Contact */}
         <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className={`text-lg text-[${colors.mediumText}]`}>
                Or email us directly at: <a href="mailto:contact@digitalsafety.no" className={`font-medium text-[${colors.gold}] hover:text-opacity-80 transition`}>contact@digitalsafety.no</a>
            </p>
         </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;