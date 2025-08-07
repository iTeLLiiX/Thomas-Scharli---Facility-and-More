import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Truck } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#calculator', label: 'Kostenrechner' },
    { href: '#gallery', label: 'Referenzen' },
    { href: '#testimonials', label: 'Bewertungen' },
    { href: '#coverage', label: 'Einsatzgebiet' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+4917012345678" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+49 170 123 456 78</span>
            </a>
            <a href="mailto:info@thomas-scharli.de" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@thomas-scharli.de</span>
            </a>
          </div>
          <div className="text-blue-200">
            Mo-Fr: 7:00-19:00 | Sa: 8:00-16:00
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Thomas Scharli</h1>
                <p className="text-sm text-gray-600">Facility and More</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+4917012345678"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg"
              >
                Jetzt anrufen
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
              >
                Angebot anfordern
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                  <a
                    href="tel:+4917012345678"
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold text-center hover:bg-orange-600 transition-colors"
                  >
                    Jetzt anrufen
                  </a>
                  <a
                    href="#contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                  >
                    Angebot anfordern
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;