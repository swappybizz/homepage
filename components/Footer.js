// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example social icons
import Logo from './Logo'; // Assuming you want the logo here too

const colors = {
  gold: '#D4AF37',
  lightText: '#E5E7EB',
  mediumText: '#9CA3AF',
  darkBg: '#000000', // Pure black footer bg
  iconHover: '#D4AF37', // Gold hover for icons
};

// Example social links (replace with actual links)
const socialLinks = [
  { name: 'GitHub', href: '#', icon: FaGithub },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'Twitter', href: '#', icon: FaTwitter },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[${colors.darkBg}] text-[${colors.mediumText}]`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Copyright */}
          <div className="space-y-4 xl:col-span-1">
             <Link href="#top" legacyBehavior>
                <a className="inline-block" aria-label="DigitalSafety Home">
                    <Logo className="h-8 w-auto" gold={colors.gold} crimson={'#A4133C'} /> {/* Using crimson from theme */}
                </a>
             </Link>
            <p className="text-sm">
              Secure field audits, powered by AI.
            </p>
            <p className="text-sm">
              © {currentYear} DigitalSafety.no. All Rights Reserved.
            </p>
          </div>

          {/* Navigation Links (Optional - can add more if needed) */}
          <div className="mt-8 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 md:grid-cols-3">
             {/* Example Column 1 */}
             <div className="md:grid md:grid-cols-1 md:gap-8">
                 <div>
                     <h3 className={`text-sm font-semibold text-[${colors.lightText}] tracking-wider uppercase mb-3`}>
                        Navigation
                     </h3>
                     <ul role="list" className="space-y-3">
                         <li><Link href="#features" legacyBehavior><a className="hover:text-[${colors.gold}] transition-colors duration-200 text-base">Features</a></Link></li>
                         <li><Link href="#howitworks" legacyBehavior><a className="hover:text-[${colors.gold}] transition-colors duration-200 text-base">How It Works</a></Link></li>
                         <li><Link href="#benefits" legacyBehavior><a className="hover:text-[${colors.gold}] transition-colors duration-200 text-base">Benefits</a></Link></li>
                          <li><Link href="#contact" legacyBehavior><a className="hover:text-[${colors.gold}] transition-colors duration-200 text-base">Contact</a></Link></li>
                     </ul>
                 </div>
             </div>
              {/* Example Column 2 */}
             <div className="md:grid md:grid-cols-1 md:gap-8">
                 <div>
                     <h3 className={`text-sm font-semibold text-[${colors.lightText}] tracking-wider uppercase mb-3`}>
                         Legal
                     </h3>
                     <ul role="list" className="space-y-3">
                        <li>
                            {/* Use Next.js Link for internal page navigation */}
                            <Link href="/privacy" legacyBehavior>
                                <a className={`hover:text-[${colors.gold}] transition-colors duration-200 text-base`}>Privacy Policy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" legacyBehavior>
                                <a className={`hover:text-[${colors.gold}] transition-colors duration-200 text-base`}>Terms of Service</a>
                            </Link>
                        </li>
                     </ul>
                 </div>
             </div>
             {/* Column 3 - Social Links */}
              <div className="md:grid md:grid-cols-1 md:gap-8">
                 <div>
                     <h3 className={`text-sm font-semibold text-[${colors.lightText}] tracking-wider uppercase mb-3`}>
                         Connect
                     </h3>
                     <div className="flex space-x-5">
                        {socialLinks.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                target="_blank" // Open social links in new tab
                                rel="noopener noreferrer" // Security best practice
                                className={`text-[${colors.mediumText}] hover:text-[${colors.iconHover}] transition-colors duration-200`}
                                whileHover={{ y: -2, scale: 1.1 }}
                                aria-label={item.name}
                            >
                                <item.icon className="h-6 w-6" />
                            </motion.a>
                         ))}
                     </div>
                 </div>
             </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;