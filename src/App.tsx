import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import PortfolioGallery from './components/PortfolioGallery';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CookieConsent from './components/CookieConsent';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

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

    // Button hover animations
    const tbtns = document.querySelectorAll(".btn1 a");
    tbtns.forEach(function(tbtn: any) {
      const style = window.getComputedStyle(tbtn);
      const tbtnWidthWithoutPadding = tbtn.offsetWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);

      const icon = tbtn.querySelector(".elementor-button-icon");
      if (icon) {
        const iconStyle = window.getComputedStyle(icon);
        const iconWidth = icon.offsetWidth;

        // Calculate the padding and margin values
        const paddingToAdd = tbtnWidthWithoutPadding - iconWidth;
        const newPaddingLeft = parseFloat(iconStyle.paddingLeft) + paddingToAdd;

        // Add hover event listener to each tbtn
        tbtn.addEventListener('mouseover', function() {
          // Apply the padding and negative margin when hovering
          icon.style.paddingLeft = `${newPaddingLeft}px`;
          icon.style.marginLeft = `-${paddingToAdd}px`;
        });

        // Remove the padding and negative margin when hover ends
        tbtn.addEventListener('mouseout', function() {
          // Reset the styles when the mouse leaves
          icon.style.paddingLeft = '';  // Reset to original padding
          icon.style.marginLeft = '';   // Reset to original margin
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminLogin={() => setIsAdminPanelOpen(true)} />
      <Hero />
      <Services />
      <AboutSection />
      <TestimonialsSection />
      <PortfolioGallery />
      <Footer />
      <ChatWidget />
      <CookieConsent />
      
      {/* Admin Panel Toggle Button */}
      <button
        onClick={() => setIsAdminPanelOpen(true)}
        className="fixed top-4 right-4 z-40 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        title="Admin Panel öffnen"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Admin Panel */}
      <AdminPanel 
        isOpen={isAdminPanelOpen} 
        onClose={() => setIsAdminPanelOpen(false)} 
      />
    </div>
  );
}

export default App;