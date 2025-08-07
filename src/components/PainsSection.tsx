import React from 'react';

const PainsSection = () => {
  const pains = [
    {
      icon: "😰",
      title: "Langsame Websites",
      description: "Ihre Website lädt zu langsam und verliert Kunden",
      solution: "Performance-Optimierung für schnelle Ladezeiten"
    },
    {
      icon: "📱",
      title: "Nicht mobil-optimiert",
      description: "Ihre Website funktioniert nicht gut auf Smartphones",
      solution: "Responsive Design für alle Geräte"
    },
    {
      icon: "🔍",
      title: "Schlechte SEO",
      description: "Ihre Website wird nicht bei Google gefunden",
      solution: "SEO-Optimierung für bessere Sichtbarkeit"
    },
    {
      icon: "💸",
      title: "Hohe Kosten",
      description: "Entwicklung und Wartung sind zu teuer",
      solution: "Kosteneffiziente Lösungen mit modernen Technologien"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Häufige Probleme bei Websites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Viele Unternehmen kämpfen mit diesen Herausforderungen. 
            Wir haben die Lösungen, um Ihre Website zum Erfolg zu führen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{pain.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{pain.title}</h3>
              <p className="text-gray-600 mb-4">{pain.description}</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800 font-medium text-sm">
                  <span className="font-bold">Lösung:</span> {pain.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainsSection; 