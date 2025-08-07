import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkSection from './components/WorkSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CookieConsent from './components/CookieConsent';
import AdminPanel from './components/AdminPanel';
import { Settings } from 'lucide-react';

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
      <Services />
      <WorkSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
      <CookieConsent />
      
      {/* Admin Button */}
      <button
        onClick={() => setShowAdminPanel(true)}
        className="fixed bottom-4 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Admin Panel"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Admin Panel */}
      <AdminPanel 
        isOpen={showAdminPanel} 
        onClose={() => setShowAdminPanel(false)} 
      />
    </div>
  );
}

export default App;