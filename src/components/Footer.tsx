import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <span className="text-xl font-bold">TS</span>
              </div>
              <div>
                <div className="text-lg font-bold">THOMAS SCHARLI</div>
                <div className="text-sm text-blue-400">Facility and More</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Ihr vertrauensvoller Partner für professionelle Transport- und Lagerlösungen 
              in Deutschland und den angrenzenden Ländern. Über 15 Jahre Erfahrung für 
              Ihre Zufriedenheit.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Musterstraße 123, 12345 Musterstadt</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@scharli-transport.de</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Unsere Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Möbeltransport</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Fahrzeugtransport</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Lagerung</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Umzüge</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Beratung</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Impressum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">AGB</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Versicherung</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Zertifikate</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Thomas Scharli - Facility and More. Alle Rechte vorbehalten.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-300 text-sm">
                Vollversichert • Zertifiziert • GDPR-konform
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;