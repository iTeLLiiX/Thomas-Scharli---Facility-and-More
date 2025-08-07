import React from 'react';
import { Truck, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Star, Shield, Award, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Thomas Scharli</h3>
                <p className="text-gray-400">Facility and More</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Umzüge und Transporte 
              in Deutschland und Europa. Seit über 15 Jahren im Dienst unserer Kunden.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Vollversichert bis 500.000€</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="h-4 w-4 text-yellow-400" />
                <span>IHK-zertifiziert</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>4.9/5 Sterne Bewertung</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Unsere Services</h4>
            <ul className="space-y-3">
              {[
                'Privatumzüge',
                'Büroumzüge', 
                'Fernumzüge',
                'Express Transport',
                'Entrümpelung',
                'Zwischenlagerung',
                'Verpackungsservice',
                'Möbelmontage'
              ].map((service, idx) => (
                <li key={idx}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Informationen</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Referenzen
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Kostenrechner
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Häufige Fragen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Karriere
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <a href="tel:+4917012345678" className="text-white hover:text-blue-400 transition-colors font-semibold">
                    +49 170 123 456 78
                  </a>
                  <p className="text-gray-400 text-sm">24/7 Hotline</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <a href="mailto:info@thomas-scharli.de" className="text-white hover:text-blue-400 transition-colors font-semibold">
                    info@thomas-scharli.de
                  </a>
                  <p className="text-gray-400 text-sm">Antwort binnen 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-semibold">Hauptsitz München</p>
                  <p className="text-gray-400 text-sm">Deutschlandweit aktiv</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-semibold">Mo-Fr: 7:00-19:00</p>
                  <p className="text-white font-semibold">Sa: 8:00-16:00</p>
                  <p className="text-gray-400 text-sm">So: Notfallservice</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4 mt-6">
              <p className="text-red-300 text-sm font-semibold mb-1">🚨 Notfallservice</p>
              <p className="text-white font-bold">+49 170 123 456 78</p>
              <p className="text-red-200 text-xs">Rund um die Uhr erreichbar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-bold mb-2">Bleiben Sie informiert</h4>
              <p className="text-gray-400 text-sm">
                Erhalten Sie Umzugstipps und exklusive Angebote per E-Mail
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                className="flex-grow md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-600 text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                Abonnieren
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>© 2024 Thomas Scharli - Facility and More. Alle Rechte vorbehalten.</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Heart className="h-4 w-4 text-red-400" />
                <span>Made with care in Germany</span>
              </span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Impressum
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Datenschutz
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>SSL-verschlüsselt</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-yellow-400" />
              <span>DSGVO-konform</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>Trusted Shop</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🇩🇪</span>
              <span>Deutsches Unternehmen</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;