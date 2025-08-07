import React, { useState, useEffect } from 'react';
import { Shield, Phone } from 'lucide-react';

interface HeaderProps {
  onAdminLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TS</span>
              </div>
              <div className="text-lg lg:text-xl font-bold text-gray-900">
                THOMAS SCHARLI
                <div className="text-xs text-gray-600 font-normal">Facility and More</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#about" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Über Uns
            </a>
            <a href="#services" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Leistungen
            </a>
            <a href="#gallery" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Referenzen
            </a>
            <a href="#contact" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone Number */}
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Tel: 0152 2135 1626</span>
            </div>
            
            {/* Admin Login Button */}
            <button
              onClick={onAdminLogin}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-medium transition-colors border border-blue-600 rounded-md hover:bg-blue-700 shadow-md"
              title="Admin-Login"
            >
              <Shield className="h-4 w-4" />
              <span>Admin</span>
            </button>
            
            {/* CTA Button */}
            <button className="btn-animated-big bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Kostenlos Anfragen
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
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
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über Uns
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leistungen
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Referenzen
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </a>
              
              {/* Mobile Phone Number */}
              <div className="px-3 py-2 flex items-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span className="font-medium">Tel: 0152 2135 1626</span>
              </div>
              
              {/* Mobile Admin Login Button */}
              <button
                onClick={() => {
                  onAdminLogin?.();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white font-medium rounded-md"
              >
                <Shield className="h-4 w-4" />
                <span>Admin Panel</span>
              </button>
              
              <div className="px-3 py-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Kostenlos Anfragen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;