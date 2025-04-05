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
    </div>
  );
}