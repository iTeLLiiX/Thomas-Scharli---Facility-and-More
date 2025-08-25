import React, { useState, useEffect, useRef } from 'react';

const Services: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      title: "Express-Transport",
      description: "Schnelle und zuverlässige Lieferungen in ganz Deutschland",
      image: "/images/services/express-transport.jpg",
      features: ["24h Express-Service", "Live-Tracking", "Versicherter Transport"],
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 2,
      title: "Langstrecken-Transport",
      description: "Professionelle Transporte über große Distanzen",
      image: "/images/services/long-distance.jpg",
      features: ["Deutschlandweit", "Spezialausrüstung", "Geschulte Fahrer"],
      color: "from-green-600 to-green-700"
    },
    {
      id: 3,
      title: "Büroumzug",
      description: "Komplette Umzugslösungen für Unternehmen",
      image: "/images/services/office-move.jpg",
      features: ["Minimale Betriebsunterbrechung", "Professionelle Planung", "Sichere Umsetzung"],
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 4,
      title: "Privatumzug",
      description: "Stressfreie Umzüge für Privatpersonen",
      image: "/images/services/private-move.jpg",
      features: ["Persönliche Betreuung", "Sorgfältige Behandlung", "Flexible Termine"],
      color: "from-red-600 to-red-700"
    },
    {
      id: 5,
      title: "Lagerung",
      description: "Sichere und flexible Lagerlösungen",
      image: "/images/services/storage.jpg",
      features: ["Klimatisierte Räume", "24/7 Sicherheit", "Flexible Mietdauer"],
      color: "from-yellow-600 to-yellow-700"
    },
    {
      id: 6,
      title: "Räumung & Entsorgung",
      description: "Professionelle Räumung und umweltgerechte Entsorgung",
      image: "/images/services/clearance.jpg",
      features: ["Vollständige Räumung", "Umweltgerechte Entsorgung", "Dokumentation"],
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
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Angebot an Transport- und Logistiklösungen
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Service Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
              </div>

              {/* Service Features */}
              <div className="p-6 bg-white">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                  Mehr erfahren
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Bereit für Ihren Transport?</h3>
            <p className="text-xl mb-6 opacity-90">
              Kontaktieren Sie uns für ein kostenloses Angebot
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Jetzt anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;