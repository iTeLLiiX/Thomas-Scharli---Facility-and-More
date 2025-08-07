import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "🚛",
      title: "Privatumzug",
      description: "Professionelle Umzugsdienstleistungen für Privatpersonen mit höchster Sorgfalt und Zuverlässigkeit.",
      features: ["Verpackung", "Transport", "Aufbau", "Entsorgung"],
      image: "/images/services/private-move.jpg"
    },
    {
      icon: "🏢",
      title: "Büroumzug",
      description: "Spezialisierte Büroumzüge mit minimaler Ausfallzeit und professioneller IT-Equipment-Behandlung.",
      features: ["IT-Transport", "Minimale Ausfallzeit", "Sicherheit", "Aufbau"],
      image: "/images/services/office-move.jpg"
    },
    {
      icon: "⚡",
      title: "Express Transport",
      description: "Schnelle Kurier- und Expresstransporte für dringende Sendungen und zeitkritische Lieferungen.",
      features: ["Schnelllieferung", "24/7 Service", "Tracking", "Versicherung"],
      image: "/images/services/express-transport.jpg"
    },
    {
      icon: "🌍",
      title: "Fernumzüge",
      description: "Deutschlandweite und europäische Umzüge mit Full-Service und professioneller Logistik.",
      features: ["Deutschlandweit", "Europa", "Full-Service", "Versicherung"],
      image: "/images/services/long-distance.jpg"
    },
    {
      icon: "📦",
      title: "Lagerung",
      description: "Moderne Lagerhallen mit Klimakontrolle und Sicherheitssystemen für Ihre Waren.",
      features: ["Klimakontrolle", "Sicherheit", "24/7 Zugang", "Versicherung"],
      image: "/images/services/storage.jpg"
    },
    {
      icon: "🧹",
      title: "Entrümpelung",
      description: "Professionelle Haushaltsauflösungen und fachgerechte Entsorgung aller Materialien.",
      features: ["Haushaltsauflösung", "Fachgerechte Entsorgung", "Recycling", "Sauberkeit"],
      image: "/images/services/clearance.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten umfassende Transport- und Lagerlösungen für Privat- und Geschäftskunden. 
            Von Umzügen bis zur sicheren Lagerung - wir sind Ihr zuverlässiger Partner.
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
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
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
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Mehr erfahren
                  </button>
                </div>
              ))}
              
              {/* Duplicate items for seamless loop */}
              {services.map((service, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="bg-white border border-gray-200 rounded-2xl p-8 w-80 flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Service Image */}
                  <div className="mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
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
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Mehr erfahren
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Brauchen Sie eine maßgeschneiderte Lösung?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Wir spezialisieren uns auf individuelle Transport- und Lagerlösungen. 
              Lassen Sie uns über Ihr Projekt sprechen und die perfekte Lösung finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-animated-big bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                Kostenloses Angebot
              </button>
              <button className="btn-animated-big border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Jetzt anrufen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;