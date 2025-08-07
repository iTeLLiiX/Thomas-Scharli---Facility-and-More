import React from 'react';
import { Truck, Warehouse, MapPin, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professionelle <span className="text-blue-600">Transport</span> & 
              <span className="text-blue-600"> Lager</span>lösungen
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Vertrauen Sie auf unsere langjährige Erfahrung im Transport von Möbeln, 
              Fahrzeugen und verschiedenen Gütern. Sichere Lagerung in unserem modernen 
              Lagerhaus für ganz Deutschland und angrenzende Länder.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                Kostenloses Angebot
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg">
                <Phone className="w-5 h-5 inline mr-2" />
                Jetzt Anrufen
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Transport</div>
                  <div className="text-sm text-gray-600">Möbel & Fahrzeuge</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Warehouse className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lagerung</div>
                  <div className="text-sm text-gray-600">Sichere Aufbewahrung</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Deutschland</div>
                  <div className="text-sm text-gray-600">& Nachbarländer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Transport LKW" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;