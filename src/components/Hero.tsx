import React from 'react';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Professionelle 
              <span className="text-blue-600"> Transport</span> & 
              <span className="text-blue-600"> Lagerlösungen</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Vertrauen Sie auf unsere langjährige Erfahrung im Transport von Möbeln, 
              Fahrzeugen und verschiedenen Gütern. Sichere Lagerung in unserem modernen 
              Lagerhaus für ganz Deutschland und angrenzende Länder.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Kostenloses Angebot
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Jetzt Anrufen
              </button>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-700">Transport</div>
                <div className="text-xs text-gray-500">Möbel & Fahrzeuge</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-700">Lagerung</div>
                <div className="text-xs text-gray-500">Sichere Aufbewahrung</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-700">Deutschland</div>
                <div className="text-xs text-gray-500">& Nachbarländer</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Van Image with Background - Like in Screenshot */}
              <div className="relative h-96 bg-gradient-to-b from-blue-200 via-green-200 to-green-400">
                {/* Sky with clouds */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-300 to-blue-200">
                  <div className="absolute top-4 left-8 w-16 h-8 bg-white rounded-full opacity-60"></div>
                  <div className="absolute top-6 right-12 w-12 h-6 bg-white rounded-full opacity-60"></div>
                  <div className="absolute top-2 right-24 w-8 h-4 bg-white rounded-full opacity-60"></div>
                </div>
                
                {/* Green field */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-green-500 to-green-400">
                  {/* Tree */}
                  <div className="absolute bottom-0 right-8">
                    <div className="w-4 h-16 bg-yellow-800 rounded-full"></div>
                    <div className="absolute -top-8 -left-4 w-12 h-12 bg-green-700 rounded-full"></div>
                  </div>
                </div>
                
                {/* Van Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-48 bg-white rounded-lg shadow-lg flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚛</div>
                      <div className="text-sm text-gray-600 font-semibold">Weißer Lieferwagen</div>
                    </div>
                    
                    {/* Van Decals - Left side */}
                    <div className="absolute top-2 left-2 text-left">
                      <div className="text-xs font-bold text-gray-900">THOMAS SCHARLI</div>
                      <div className="text-xs text-blue-600 font-semibold">Transport & Umzug</div>
                      <div className="text-xs text-gray-600">Tel: 0152 2135 1626</div>
                    </div>
                    
                    {/* Van Decals - Right side */}
                    <div className="absolute top-2 right-2 text-right">
                      <div className="text-xs font-bold text-gray-900">FS</div>
                      <div className="text-xs text-blue-600 font-semibold">Netzmontagen</div>
                      <div className="text-xs text-gray-600">Tel: 0152 005 499 06</div>
                    </div>
                    
                    {/* Slogan at bottom */}
                    <div className="absolute bottom-2 left-0 right-0 text-center">
                      <div className="text-xs font-semibold text-gray-700">Schnell | Sicher | Stressfrei</div>
                    </div>
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs text-gray-600">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
