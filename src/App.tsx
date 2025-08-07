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
      
      {/* Admin Button - Einfache Version */}
      <button
        onClick={() => setShowAdminPanel(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors text-xl font-bold"
        title="Admin Panel"
      >
        ADMIN
      </button>

      {/* Admin Panel - Einfache Version */}
      {showAdminPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-96 max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
              <p className="text-gray-600">Thomas Scharli - Facility and More</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900">Login</h3>
                <p className="text-blue-700 text-sm">Benutzername: thomas</p>
                <p className="text-blue-700 text-sm">Passwort: hodenkobold</p>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900">Funktionen</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Inhalte bearbeiten</li>
                  <li>• Bilder hinzufügen</li>
                  <li>• Projekte verwalten</li>
                  <li>• Services anpassen</li>
                </ul>
              </div>
            </div>
            
            <button
              onClick={() => setShowAdminPanel(false)}
              className="w-full mt-6 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;