import React from 'react';
import { MapPin, Truck, Clock, Shield } from 'lucide-react';

const CoverageMap = () => {
  const cities = [
    { name: 'Berlin', x: 70, y: 30 },
    { name: 'Hamburg', x: 55, y: 20 },
    { name: 'München', x: 60, y: 80 },
    { name: 'Köln', x: 30, y: 50 },
    { name: 'Frankfurt', x: 45, y: 60 },
    { name: 'Stuttgart', x: 50, y: 75 },
    { name: 'Düsseldorf', x: 35, y: 45 },
    { name: 'Dresden', x: 75, y: 50 },
    { name: 'Hannover', x: 55, y: 35 },
    { name: 'Nürnberg', x: 58, y: 70 },
  ];

  const neighboringCountries = [
    { name: 'Niederlande', coverage: '100%', distance: 'bis 500km' },
    { name: 'Belgien', coverage: '100%', distance: 'bis 600km' },
    { name: 'Luxemburg', coverage: '100%', distance: 'bis 400km' },
    { name: 'Frankreich', coverage: '80%', distance: 'bis 800km' },
    { name: 'Schweiz', coverage: '100%', distance: 'bis 500km' },
    { name: 'Österreich', coverage: '100%', distance: 'bis 600km' },
    { name: 'Tschechien', coverage: '90%', distance: 'bis 500km' },
    { name: 'Polen', coverage: '70%', distance: 'bis 700km' },
    { name: 'Dänemark', coverage: '85%', distance: 'bis 400km' },
  ];

  return (
    <section id="coverage" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Unser Einsatzgebiet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deutschlandweit und in den angrenzenden Nachbarländern sind wir für Sie da. 
            Zuverlässige Transportdienstleistungen ohne Grenzen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                Deutschland & Europa
              </h3>
              
              {/* Simplified Germany Map */}
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl overflow-hidden">
                {/* Germany Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-80 bg-blue-200 rounded-lg opacity-30"></div>
                </div>

                {/* Cities */}
                {cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  >
                    <div className="bg-blue-600 w-4 h-4 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {city.name}
                    </div>
                  </div>
                ))}

                {/* Coverage Circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-blue-300 rounded-full opacity-50 animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-green-400 rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Map Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Hauptstandorte</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-600">Vollabdeckung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <span className="text-gray-600">Erweiterte Reichweite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="space-y-8">
            {/* Germany Coverage */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Truck className="h-6 w-6 text-green-600 mr-2" />
                Deutschland
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Abdeckung</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">24h</div>
                  <div className="text-sm text-gray-600">Express Service</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Alle Bundesländer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Großstädte & ländliche Gebiete</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Express-Service verfügbar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Same-Day Delivery möglich</span>
                </li>
              </ul>
            </div>

            {/* International Coverage */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Internationale Services
              </h3>
              <div className="space-y-3">
                {neighboringCountries.map((country, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-800">{country.name}</span>
                      <div className="text-sm text-gray-600">{country.distance}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: country.coverage }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">
                        {country.coverage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Clock className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <div className="text-xl font-bold text-gray-800">48h</div>
                <div className="text-sm text-gray-600">Durchschnittliche Lieferzeit Europa</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">Vollversicherung inklusive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Services */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
            <Truck className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h4 className="text-xl font-bold mb-2">Express Lieferung</h4>
            <p className="text-blue-100 text-sm">
              Same-Day und Overnight Services für dringende Transporte
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-green-200" />
            <h4 className="text-xl font-bold mb-2">GPS Tracking</h4>
            <p className="text-green-100 text-sm">
              Live-Verfolgung Ihrer Sendung in Echtzeit
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-purple-200" />
            <h4 className="text-xl font-bold mb-2">Zollabwicklung</h4>
            <p className="text-purple-100 text-sm">
              Komplette Abwicklung aller Zollformalitäten
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ihr Zielort nicht dabei?
            </h3>
            <p className="text-orange-100 mb-6">
              Kein Problem! Kontaktieren Sie uns für individuelle Transportlösungen 
              auch außerhalb unseres Standardgebiets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
              >
                Anfrage senden
              </a>
              <a
                href="tel:+4917012345678"
                className="bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors border-2 border-white/20"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;