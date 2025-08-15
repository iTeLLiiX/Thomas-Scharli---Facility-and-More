import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CookieConsent from './components/CookieConsent';
import AdminPanel from './components/AdminPanel';

function App() {
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    // GSAP Animationen
    const { gsap } = window;
    if (gsap) {
      gsap.from('.hero-content', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WorkSection />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
      <ChatWidget />
      <CookieConsent />
      
      {/* Admin Button - Versteckt */}
      <button
        onClick={() => setShowAdminPanel(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors text-xs font-bold opacity-20 hover:opacity-100"
        title="Admin Panel"
      >
        A
      </button>

      {/* Admin Panel */}
      {showAdminPanel && (
        <AdminPanel isOpen={showAdminPanel} onClose={() => setShowAdminPanel(false)} />
      )}
    </div>
  );
}

export default App;