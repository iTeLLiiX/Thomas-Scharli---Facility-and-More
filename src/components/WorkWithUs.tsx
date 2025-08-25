import React, { useState } from 'react';

const WorkWithUs: React.FC = () => {
  const [isDoSection, setIsDoSection] = useState(true);

  const doItems = [
    {
      icon: "✅",
      title: "Pünktliche Lieferungen",
      description: "Wir garantieren termingerechte Anlieferung Ihrer Fracht"
    },
    {
      icon: "✅",
      title: "Transparente Kommunikation",
      description: "Regelmäßige Updates über den Status Ihrer Sendung"
    },
    {
      icon: "✅",
      title: "Flexible Lösungen",
      description: "Maßgeschneiderte Transportlösungen für Ihre Bedürfnisse"
    },
    {
      icon: "✅",
      title: "24/7 Support",
      description: "Rund um die Uhr erreichbar für Ihre Fragen"
    },
    {
      icon: "✅",
      title: "Versicherter Transport",
      description: "Vollständige Versicherung für Ihre wertvollen Güter"
    },
    {
      icon: "✅",
      title: "Erfahrene Fahrer",
      description: "Geschulte und erfahrene Fahrer für sichere Transporte"
    }
  ];

  const dontItems = [
    {
      icon: "❌",
      title: "Versteckte Kosten",
      description: "Keine überraschenden Zusatzkosten bei uns"
    },
    {
      icon: "❌",
      title: "Schlechte Kommunikation",
      description: "Wir halten Sie immer auf dem Laufenden"
    },
    {
      icon: "❌",
      title: "Unzuverlässige Lieferungen",
      description: "Pünktlichkeit ist unser Versprechen"
    },
    {
      icon: "❌",
      title: "Mangelnde Flexibilität",
      description: "Wir passen uns Ihren Anforderungen an"
    },
    {
      icon: "❌",
      title: "Unprofessioneller Service",
      description: "Erstklassiger Kundenservice ist unser Standard"
    },
    {
      icon: "❌",
      title: "Unsichere Transporte",
      description: "Sicherheit steht bei uns an erster Stelle"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            When people do work with us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie, was uns von anderen unterscheidet und warum Kunden 
            sich für Scharli Transport entscheiden
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsDoSection(true)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isDoSection 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Was wir tun
              </button>
              <button
                onClick={() => setIsDoSection(false)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  !isDoSection 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Was wir nicht tun
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {/* Do Section */}
          <div className={`section-1 transition-all duration-500 ${isDoSection ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't Section */}
          <div className={`section-2 transition-all duration-500 ${!isDoSection ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dontItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Bereit für die Zusammenarbeit?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Lassen Sie uns gemeinsam Ihre Transportbedürfnisse besprechen und 
              die perfekte Lösung für Sie finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Kostenlose Beratung
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
