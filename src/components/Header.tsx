import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

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
            <a href="#" className="text-2xl lg:text-3xl font-bold text-gray-900">
              Scharli
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#services" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Services
            </a>
            <a href="#work" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Work
            </a>
            <a href="#pricing" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="link-underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Admin Login Button */}
            <button
              onClick={onAdminLogin}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              title="Admin-Login"
            >
              <Shield className="h-4 w-4" />
              <span>Admin</span>
            </button>
            
            {/* CTA Button */}
            <button className="btn-animated-big bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Start now
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
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#work"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              
              {/* Mobile Admin Login Button */}
              <button
                onClick={() => {
                  onAdminLogin?.();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                <Shield className="h-4 w-4" />
                <span>Admin-Login</span>
              </button>
              
              <div className="px-3 py-2">
                <button className="w-full bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  Start now
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