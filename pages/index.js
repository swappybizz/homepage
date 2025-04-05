// pages/index.js (simplified example)
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Clients from '../components/Clients'; // Import Clients
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// ... other imports

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="top"></div>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Clients /> {/* Add the Clients section */}
        <Contact />
      </main>

      <Footer />

      {/* Watermark Overlay */}
      <div
        style={{
          position: 'fixed', // Keep it fixed relative to the viewport
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex', // Use flexbox for centering
          alignItems: 'center', // Center vertically
          justifyContent: 'center', // Center horizontally
          zIndex: 9999, // Ensure it's on top of everything
          pointerEvents: 'none', // Make it non-interactive (clicks pass through)
          overflow: 'hidden', // Prevent scrollbars if text somehow extends too far
        }}
      >
        <span // Use span or div for the text itself to apply rotation/styles
          style={{
            fontSize: 'clamp(5rem, 18vw, 25rem)', // Responsive large font size (adjust as needed)
            fontWeight: 'bold', // Bold text
            color: 'rgba(128, 128, 128, 0.4)', // Translucent grey color (adjust opacity/color)
            transform: 'rotate(-45deg)', // Rotate diagonally
            whiteSpace: 'nowrap', // Prevent text from wrapping
            userSelect: 'none', // Prevent text selection
            textAlign: 'center',
          }}
        >
          Awaiting Payment
        </span>
      </div>
    </div>
  );
}