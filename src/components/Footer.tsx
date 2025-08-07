import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">THOMAS SCHARLI</h3>
                  <p className="text-sm text-blue-200">Facility and More</p>
                </div>
              </div>
              <p className="text-blue-200 mb-4">
                Ihr vertrauensvoller Partner für professionelle Transport- und Lagerlösungen 
                in Deutschland und den angrenzenden Ländern. Über 15 Jahre Erfahrung für Ihre Zufriedenheit.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-blue-200">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@scharli-transport.de</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Unsere Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Möbeltransport</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Fahrzeugtransport</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Lagerung</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Umzüge</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Beratung</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">AGB</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Versicherung</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Zertifikate</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-300 text-sm mb-4 md:mb-0">
              © 2024 Thomas Scharli - Facility and More. Alle Rechte vorbehalten.
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4 text-sm text-blue-300">
              <span>Vollversichert</span>
              <span>•</span>
              <span>Zertifiziert</span>
              <span>•</span>
              <span>GDPR-konform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;