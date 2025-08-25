import React, { useState, useEffect } from 'react';
import { Shield, Phone, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onAdminLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 575);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <div className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'headershow' : 'opacity-0 pointer-events-none'
      }`} id="menuhopin">
        <div className="w-full">
          <div className="w-full" id="glassm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <a href="#" className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">TS</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      THOMAS SCHARLI
                      <div className="text-sm text-gray-600 font-normal">Facility and More</div>
                    </div>
                  </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="flex space-x-8">
                  <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
                    Über Uns
                  </a>
                  <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
                    Leistungen
                  </a>
                  <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
                    Referenzen
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
                    Kontakt
                  </a>
                </nav>

                {/* Desktop Buttons */}
                <div className="flex items-center space-x-4">
                  {/* Admin Login Button */}
                  <button
                    onClick={onAdminLogin}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white font-medium transition-all duration-300 border border-gray-800 rounded-md hover:bg-gray-700 shadow-md"
                    title="Admin-Login"
                  >
                    <Shield className="h-4 w-4" />
                    <span>Admin</span>
                  </button>
                  
                  {/* CTA Button */}
                  <button className="btn1 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg">
                    <span>Kontakt</span>
                    <ArrowRight className="h-4 w-4 elementor-button-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TS</span>
                </div>
                <div className="text-lg font-bold text-white">
                  THOMAS SCHARLI
                  <div className="text-xs text-gray-300 font-normal">Facility and More</div>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              <a href="#contact" className="text-white hover:text-blue-400 font-medium transition-colors">
                Kontakt
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-400 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="bg-gray-900 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  className="block px-3 py-2 text-white hover:text-blue-400 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Über Uns
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-white hover:text-blue-400 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Leistungen
                </a>
                <a
                  href="#gallery"
                  className="block px-3 py-2 text-white hover:text-blue-400 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Referenzen
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-white hover:text-blue-400 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </a>
                
                {/* Mobile Phone Number */}
                <div className="px-3 py-2 flex items-center space-x-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">Tel: 0152 2135 1626</span>
                </div>
                
                {/* Mobile Admin Login Button */}
                <button
                  onClick={() => {
                    onAdminLogin?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin Panel</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS for Header Animations */}
      <style jsx>{`
        .headershow {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
        
        #glassm {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn1 {
          position: relative;
          overflow: hidden;
        }
        
        .btn1:hover .elementor-button-icon {
          transform: translateX(5px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Header;