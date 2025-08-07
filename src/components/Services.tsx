import React from 'react';
import { Check, Send } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="text-blue-600">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Umfassende Transport- und Lagerlösungen für Ihre individuellen Bedürfnisse. 
            Jeder Auftrag wird persönlich betreut und nach Ihren Anforderungen kalkuliert.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Transport Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Transport Services</h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-center">
              Professioneller Transport von Möbeln, Fahrzeugen (außer PKW) und verschiedenen Gütern
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Möbeltransport und Umzüge</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Fahrzeugtransport (LKW, Motorräder, etc.)</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Spezialtransporte für verschiedene Güter</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Deutschlandweite Abholung und Lieferung</span>
              </li>
            </ul>
            
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Individuelles Angebot anfordern</span>
            </button>
          </div>

          {/* Lager Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Lager Services</h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-center">
              Sichere und moderne Lagerung in unserem großen Lagerhaus
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Kurzzeit- und Langzeitlagerung</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Klimakontrollierte Räume</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>24/7 Überwachung und Sicherheit</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Flexible Lagergrößen nach Bedarf</span>
              </li>
            </ul>
            
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Individuelles Angebot anfordern</span>
            </button>
          </div>
        </div>

        {/* Warehouse Section */}
        <div className="mb-16">
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center mb-6">
            <div className="text-center">
              <span className="text-6xl mb-4 block">🏭</span>
              <p className="text-gray-600 font-medium">Unser Lagerhaus</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unser Lagerhaus</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moderne, sichere und klimakontrollierte Lagerung für Ihre wertvollen Güter. 
              24/7 Überwachung und flexible Lagergrößen nach Ihren Bedürfnissen.
            </p>
          </div>
        </div>

        {/* Exclusions Section */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm">⚠️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-900 mb-4">Wichtige Ausschlüsse</h3>
              <p className="text-yellow-800 mb-4">
                Aus Sicherheits- und Qualitätsgründen führen wir folgende Transporte nicht durch:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-yellow-800">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span>Keine Aquarien (Lebendtiere)</span>
                </li>
                <li className="flex items-center text-yellow-800">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span>Keine gefährlichen Güter</span>
                </li>
                <li className="flex items-center text-yellow-800">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span>Keine PKW-Transporte</span>
                </li>
                <li className="flex items-center text-yellow-800">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span>Keine verderblichen Lebensmittel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;