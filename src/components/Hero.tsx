import React from 'react';
import { Phone, Send } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Transport &</span>
            <br />
            Lagerlösungen
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Vertrauen Sie auf unsere langjährige Erfahrung im Transport von Möbeln, 
            Fahrzeugen und verschiedenen Gütern. Sichere Lagerung in unserem modernen 
            Lagerhaus für ganz Deutschland und angrenzende Länder.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-animated-big bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 text-lg">
              <Send className="w-5 h-5" />
              <span>Kostenloses Angebot</span>
            </button>
            
            <button className="btn-animated-big bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2 text-lg">
              <Phone className="w-5 h-5" />
              <span>Jetzt Anrufen</span>
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Erfolgreiche Transporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Kundenzufriedenheit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Service & Beratung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
