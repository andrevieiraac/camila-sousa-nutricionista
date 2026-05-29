import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import PhysicalSection from './components/PhysicalSection';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-title font-sans selection:bg-brand-accent selection:text-brand-bg transition-colors duration-300">
      
      {/* Sticky Premium Header */}
      <Header />

      <main>
        {/* Hero Showcase with Custom Specialist Portrait */}
        <Hero />

        {/* Dynamic Social Proof cards & simulated WhatsApp channels */}
        <SocialProof />

        {/* Map Coordinates & Certificated operating schedules */}
        <PhysicalSection />

        {/* Dynamic FAQ accordions & questions answering */}
        <Faq />
      </main>

      {/* Elegant informative bottom footer */}
      <Footer />
      
    </div>
  );
}
