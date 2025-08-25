<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';

const Services: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      title: "Express Lieferungen",
      description: "Schnelle und zuverlässige Lieferungen in ganz Deutschland",
      icon: "🚛",
      features: ["24h Express-Service", "Live-Tracking", "Versicherter Transport"],
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 2,
      title: "Spezialtransporte",
      description: "Sichere Transporte für empfindliche und wertvolle Güter",
      icon: "📦",
      features: ["Klimatisierte Fahrzeuge", "Spezialausrüstung", "Geschulte Fahrer"],
      color: "from-green-600 to-green-700"
    },
    {
      id: 3,
      title: "Logistiklösungen",
      description: "Komplette Logistiklösungen für Ihr Unternehmen",
      icon: "🏭",
      features: ["Lagerung & Kommissionierung", "Supply Chain Management", "Just-in-Time Lieferungen"],
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 4,
      title: "Internationale Transporte",
      description: "Weltweite Transportlösungen für Ihre internationalen Geschäfte",
      icon: "🌍",
      features: ["Zollabwicklung", "Mehrsprachiger Support", "Internationale Partner"],
      color: "from-red-600 to-red-700"
    },
    {
      id: 5,
      title: "E-Commerce Logistik",
      description: "Spezialisierte Lösungen für Online-Händler",
      icon: "🛒",
      features: ["Same-Day Delivery", "Retourenmanagement", "Multi-Channel-Logistik"],
      color: "from-yellow-600 to-yellow-700"
    },
    {
      id: 6,
      title: "Projektlogistik",
      description: "Komplexe Logistikprojekte für Großkunden",
      icon: "🏗️",
      features: ["Projektplanung", "Ressourcenmanagement", "Risikomanagement"],
      color: "from-indigo-600 to-indigo-700"
=======
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
>>>>>>> e5299f6b66d7c20a71a7838b373248c537535e11
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const rect = scrollContainer.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Angebot an Transport- und Logistiklösungen
          </p>
        </div>

        {/* Sticky Section */}
        <div className={`sticky-section ${isSticky ? 'sticky top-0 z-10 bg-white shadow-lg' : ''}`}>
          <div className="scroll-container-parent relative">
            {/* Navigation Arrows */}
            <button
              onClick={scrollToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={scrollToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="scroll-container flex space-x-6 overflow-x-auto scrollbar-hide pb-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="service-panel flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <div className="text-4xl">{service.icon}</div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="mt-6 w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                      Mehr erfahren
                    </button>
=======
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
>>>>>>> e5299f6b66d7c20a71a7838b373248c537535e11
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

<<<<<<< HEAD
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Brauchen Sie eine maßgeschneiderte Lösung?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Kontaktieren Sie uns für eine individuelle Beratung und ein maßgeschneidertes Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Kostenlose Beratung
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Angebot anfordern
=======
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
>>>>>>> e5299f6b66d7c20a71a7838b373248c537535e11
              </button>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Services;