import React, { useEffect } from 'react';
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

function App() {
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
    </div>
  );
}

export default App;