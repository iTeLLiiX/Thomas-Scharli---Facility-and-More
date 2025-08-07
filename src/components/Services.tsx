import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import { Settings } from 'lucide-react';

const Services = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const services = [
    {
      icon: "🚛",
      title: "Transport Services",
      description: "Professioneller Transport von Möbeln, Fahrzeugen (außer PKW) und verschiedenen Gütern",
      features: ["Möbeltransport und Umzüge", "Fahrzeugtransport (LKW, Motorräder, etc.)", "Spezialtransporte für verschiedene Güter", "Deutschlandweite Abholung und Lieferung"],
      image: "/images/services/transport.jpg"
    },
    {
      icon: "🏭",
      title: "Lager Services",
      description: "Sichere und moderne Lagerung in unserem großen Lagerhaus",
      features: ["Kurzzeit- und Langzeitlagerung", "Klimakontrollierte Räume", "24/7 Überwachung und Sicherheit", "Flexible Lagergrößen nach Bedarf"],
      image: "/images/services/warehouse.jpg"
    },
    {
      icon: "📦",
      title: "Verpackung",
      description: "Professionelle Verpackung und Sicherung Ihrer Güter für den Transport",
      features: ["Spezialverpackung", "Sicherung", "Materialien", "Qualitätssicherung"],
      image: "/images/services/packaging.jpg"
    },
    {
      icon: "🌍",
      title: "International",
      description: "Transport und Lagerung in ganz Deutschland und angrenzenden Ländern",
      features: ["Deutschlandweit", "EU-Transport", "Zollabwicklung", "Internationale Partner"],
      image: "/images/services/international.jpg"
    },
    {
      icon: "⚡",
      title: "Express Service",
      description: "Schnelle Lieferung für zeitkritische Transporte",
      features: ["24h Service", "Express Lieferung", "Priorität", "Tracking"],
      image: "/images/services/express.jpg"
    },
    {
      icon: "🛡️",
      title: "Versicherung",
      description: "Vollständige Versicherung für Ihre Güter während Transport und Lagerung",
      features: ["Transportversicherung", "Lagerversicherung", "Haftung", "Schadensregulierung"],
      image: "/images/services/insurance.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      {/* Admin Button */}
      <button
        onClick={() => setShowAdminPanel(true)}
        className="fixed bottom-4 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Admin Panel"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Admin Panel */}
      <AdminPanel 
        isOpen={showAdminPanel} 
        onClose={() => setShowAdminPanel(false)} 
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unsere Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Transport- und Lagerlösungen für Ihre individuellen Anforderungen. 
            Vertrauen Sie auf unsere langjährige Erfahrung und modernen Service.
          </p>
        </div>

        {/* Horizontal Scrolling Services */}
        <div className="scroll-track-wrapper">
          <div className="scroll-track-left">
            <div className="scroll-items">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 w-80 flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Service Image */}
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <div className="text-6xl">{service.icon}</div>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-3xl mb-4">{service.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Scrolling Track */}
        <div className="scroll-track-wrapper mt-8">
          <div className="scroll-track-right">
            <div className="scroll-items">
              {services.slice().reverse().map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 w-80 flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Service Image */}
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <div className="text-6xl">{service.icon}</div>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-3xl mb-4">{service.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;