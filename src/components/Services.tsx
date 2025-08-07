import React from 'react';
import { Truck, Warehouse, Package, AlertTriangle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transport Services",
      description: "Professioneller Transport von Möbeln, Fahrzeugen (außer PKW) und verschiedenen Gütern",
      features: [
        "Möbeltransport und Umzüge",
        "Fahrzeugtransport (LKW, Motorräder, etc.)",
        "Spezialtransporte für verschiedene Güter",
        "Deutschlandweite Abholung und Lieferung"
      ]
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: "Lager Services",
      description: "Sichere und moderne Lagerung in unserem großen Lagerhaus",
      features: [
        "Kurzzeit- und Langzeitlagerung",
        "Klimakontrollierte Räume",
        "24/7 Überwachung und Sicherheit",
        "Flexible Lagergrößen nach Bedarf"
      ]
    }
  ];

  const exclusions = [
    "Keine Aquarien (Lebendtiere)",
    "Keine PKW-Transporte",
    "Keine gefährlichen Güter",
    "Keine verderblichen Lebensmittel"
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-blue-600">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Umfassende Transport- und Lagerlösungen für Ihre individuellen Bedürfnisse. 
            Jeder Auftrag wird persönlich betreut und nach Ihren Anforderungen kalkuliert.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Package className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Individuelles Angebot anfordern
              </button>
            </div>
          ))}
        </div>

        {/* Exclusions */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                Wichtige Ausschlüsse
              </h4>
              <p className="text-yellow-700 mb-4">
                Aus Sicherheits- und Qualitätsgründen führen wir folgende Transporte nicht durch:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {exclusions.map((exclusion, index) => (
                  <li key={index} className="text-yellow-700 flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    {exclusion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">
              Individuelles Angebot gewünscht?
            </h3>
            <p className="text-blue-100 mb-6">
              Jeder Auftrag ist einzigartig. Lassen Sie uns gemeinsam die beste Lösung für Sie finden.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Kostenlose Beratung vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;