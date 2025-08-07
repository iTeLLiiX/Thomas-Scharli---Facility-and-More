import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainsSection from './components/PainsSection';
import WorkSection from './components/WorkSection';
import QuoteSection from './components/QuoteSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CookieConsent from './components/CookieConsent';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const initLenis = async () => {
      const Lenis = await import('lenis');
      const lenis = new Lenis.default({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    // Initialize time update for footer
    const updateTime = () => {
      const now = new Date();
      const madridTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Madrid"}));
      const timeString = madridTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
      
      const timeElement = document.getElementById('madrid-time');
      if (timeElement) {
        timeElement.textContent = timeString;
      }
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 60000); // Update every minute

    // Footer z-index logic
    const handleScroll = () => {
      const footer = document.querySelector('.Footer_Section');
      if (footer) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollTop + windowHeight >= documentHeight - 100) {
          footer.classList.add('visible');
        } else {
          footer.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminLogin={() => setIsAdminPanelOpen(true)} />
      <Hero />
      <PainsSection />
      <WorkSection />
      <QuoteSection />
      <Services />
      <Gallery />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
      <ChatWidget />
      <CookieConsent />

      {/* Admin Panel */}
      <AdminPanel 
        isOpen={isAdminPanelOpen} 
        onClose={() => setIsAdminPanelOpen(false)} 
      />
    </div>
  );
}

export default App;