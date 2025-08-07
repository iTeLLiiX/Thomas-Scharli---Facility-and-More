import React from 'react';
import { Truck, Phone, Mail, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <span className="text-2xl font-bold">TS</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">THOMAS SCHARLI</div>
              <div className="text-sm text-blue-600 font-medium">Facility and More</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Über Uns
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Leistungen
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Referenzen
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+49 (0) 123 456 789</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Kostenlos Anfragen
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">
              Über Uns
            </a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">
              Leistungen
            </a>
            <a href="#portfolio" className="block py-2 text-gray-700 hover:text-blue-600">
              Referenzen
            </a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">
              Kontakt
            </a>
            <div className="pt-2 pb-1">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Kostenlos Anfragen
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;