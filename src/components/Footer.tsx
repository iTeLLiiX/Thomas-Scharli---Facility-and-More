import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="Footer_Section bg-gray-900 text-white py-8">
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
                  <p className="text-sm text-gray-300">Facility and More</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Professional transport and storage services. We create reliable, 
                secure, and efficient solutions for your transportation and storage needs.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@scharli-transport.de</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Unsere Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Möbeltransport</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Fahrzeugtransport</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Lagerung</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Umzüge</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Beratung</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AGB</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Versicherung</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Zertifikate</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Thomas Scharli - Facility and More. Alle Rechte vorbehalten.
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
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