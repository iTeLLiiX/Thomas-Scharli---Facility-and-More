import React from 'react';
import { Home, Building, Truck, Package, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Privatumzüge',
      description: 'Komplette Umzugsdienstleistungen für Privatkunden mit professioneller Verpackung und Transport. Wir kümmern uns um jeden Aspekt Ihres Umzugs.',
      features: ['Verpackungsservice', 'Möbelmontage', 'Reinigungsservice', 'Versicherung inklusive'],
      color: 'bg-blue-500',
      image: '/images/services/private-move.jpg',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building,
      title: 'Büroumzüge',
      description: 'Spezialisierte Büroumzüge mit minimaler Ausfallzeit und IT-Equipment-Transport. Wir sorgen für einen reibungslosen Übergang.',
      features: ['IT-Transport', 'Wochenendumzug', 'Aktenarchivierung', 'Minimale Ausfallzeiten'],
      color: 'bg-green-500',
      image: '/images/services/office-move.jpg',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      title: 'Fernumzüge',
      description: 'Deutschlandweite und europäische Umzüge mit Full-Service-Betreuung. Wir begleiten Sie von der Planung bis zur Ankunft.',
      features: ['Zwischenlagerung', 'Zollabwicklung', 'Rundum-Betreuung', 'Internationale Transporte'],
      color: 'bg-purple-500',
      image: '/images/services/long-distance.jpg',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Package,
      title: 'Express Transport',
      description: 'Schnelle Kurier- und Expresstransporte für dringende Sendungen. Wir garantieren pünktliche Lieferung auch unter Zeitdruck.',
      features: ['Same-Day Delivery', 'Overnight Service', 'Fragile Handling', '24/7 Verfügbarkeit'],
      color: 'bg-orange-500',
      image: '/images/services/express-transport.jpg',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Entrümpelung',
      description: 'Professionelle Haushaltsauflösungen und Entrümpelungen mit fachgerechter Entsorgung. Wir übernehmen die komplette Abwicklung.',
      features: ['Wertanrechnung', 'Fachgerechte Entsorgung', 'Reinigung', 'Umweltfreundlich'],
      color: 'bg-red-500',
      image: '/images/services/clearance.jpg',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Lagerung',
      description: 'Sichere Zwischenlagerung Ihres Eigentums in unseren modernen Lagerhallen. Klimakontrolle und 24/7 Überwachung inklusive.',
      features: ['Klimakontrolle', '24/7 Überwachung', 'Flexible Laufzeiten', 'Vollversichert'],
      color: 'bg-indigo-500',
      image: '/images/services/storage.jpg',
      gradient: 'from-indigo-500 to-indigo-600'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von Privatumzügen bis zu komplexen Logistiklösungen - wir bieten Ihnen 
            den kompletten Service aus einer Hand. Kontaktieren Sie uns für ein individuelles Angebot.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                {/* Background Image or Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                
                {/* Service Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-16 w-16 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {service.title}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`${service.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-600">Individuelles Angebot</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors group-hover:shadow-lg">
                  Angebot anfordern
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Individuelle Beratung gewünscht?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Jeder Transport ist einzigartig. Lassen Sie sich von unseren Experten beraten und erhalten Sie ein maßgeschneidertes Angebot für Ihre spezifischen Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Kostenlose Beratung
              </a>
              <a
                href="tel:+4917012345678"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
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

export default Services;