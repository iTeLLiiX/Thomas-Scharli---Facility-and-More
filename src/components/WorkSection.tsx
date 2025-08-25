import React from 'react';

const WorkSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Büroumzug München",
      description: "Kompletter Büroumzug mit 50 Arbeitsplätzen",
      category: "Büroumzug"
    },
    {
      id: 2,
      title: "Möbeltransport Hamburg",
      description: "Antike Möbel sicher transportiert",
      category: "Transport"
    },
    {
      id: 3,
      title: "Lagerhaltung Frankfurt",
      description: "6 Monate sichere Möbellagerung",
      category: "Lagerung"
    },
    {
      id: 4,
      title: "Fahrzeugtransport Berlin",
      description: "Motorrad sicher von Berlin nach Wien",
      category: "Fahrzeugtransport"
    }
  ];

  const stats = [
    { number: "500+", label: "Erfolgreiche Transporte" },
    { number: "15+", label: "Jahre Erfahrung" },
    { number: "98%", label: "Kundenzufriedenheit" },
    { number: "24/7", label: "Service & Beratung" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="text-blue-600">Projekte</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Überzeugen Sie sich von unserer professionellen Arbeit anhand ausgewählter Projekte.
          </p>
          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Projekte
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                {/* Project specific images */}
                {index === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🚛</div>
                      <div className="text-xs text-gray-600">Büroumzug</div>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🪑</div>
                      <div className="text-xs text-gray-600">Möbeltransport</div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🏢</div>
                      <div className="text-xs text-gray-600">Lagerung</div>
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🏍️</div>
                      <div className="text-xs text-gray-600">Fahrzeugtransport</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection; 