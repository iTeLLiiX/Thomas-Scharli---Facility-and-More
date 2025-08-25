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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
              </button>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Services;