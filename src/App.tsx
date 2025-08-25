<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import WhoWeAre from './components/WhoWeAre';
import OurWork from './components/OurWork';
import TechSolutions from './components/TechSolutions';
import OfficeDay from './components/OfficeDay';
import Webinars from './components/Webinars';
import WorkWithUs from './components/WorkWithUs';
import Services from './components/Services';
=======
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
>>>>>>> e5299f6b66d7c20a71a7838b373248c537535e11
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

  // Initialize GSAP and ScrollTrigger when component mounts
  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        
        // Initialize animations after GSAP is loaded
        initializeAnimations(gsap);
      } catch (error) {
        console.error('Failed to load GSAP:', error);
      }
    };

    loadGSAP();
  }, []);

  const initializeAnimations = (gsap: any) => {
    // H4 text animations
    gsap.utils.toArray('h4').forEach((h4: any) => {
      const text = h4.textContent;
      h4.innerHTML = '';
      text.split('').forEach((char: string) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        h4.appendChild(span);
      });

      gsap.fromTo(h4.children, 
        { x: -50, filter: 'blur(10px)', opacity: 0 },
        {
          x: 0,
          filter: 'blur(0px)',
          opacity: 1,
          stagger: 0.03,
          duration: 0.8,
          scrollTrigger: {
            trigger: h4,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Card animations
    gsap.utils.toArray('.row').forEach((row: any) => {
      const cardLeft = row.querySelector('.card-left');
      const cardRight = row.querySelector('.card-right');
      
      if (cardLeft) {
        gsap.fromTo(cardLeft,
          { x: -100, y: 50, rotation: -5 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1,
            scrollTrigger: {
              trigger: cardLeft,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
      
      if (cardRight) {
        gsap.fromTo(cardRight,
          { x: 100, y: 50, rotation: 5 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1,
            scrollTrigger: {
              trigger: cardRight,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Circle animation
    const circleWrap = document.querySelector('.stickey_circle_wrap');
    const circle = document.querySelector('.circle');
    
    if (circleWrap && circle) {
      gsap.fromTo(circle,
        { width: '50px', height: '50px', borderRadius: '50%' },
        {
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          duration: 2,
          scrollTrigger: {
            trigger: circleWrap,
            start: 'top center',
            end: 'bottom center',
            scrub: true
          }
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
<<<<<<< HEAD
      <TeamSection />
      <WhoWeAre />
      <OurWork />
      <TechSolutions />
      <OfficeDay />
      <Webinars />
      <WorkWithUs />
      <Services />
=======
      <WorkSection />
      <AboutUs />
      <Services />
      <Contact />
>>>>>>> e5299f6b66d7c20a71a7838b373248c537535e11
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