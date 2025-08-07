import React, { useState, useEffect } from 'react';

const WorkSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Büroumzug München",
      description: "Kompletter Büroumzug mit 50 Arbeitsplätzen",
      image: "/images/gallery/gallery-7.jpg",
      category: "Büroumzug"
    },
    {
      id: 2,
      title: "Möbeltransport Hamburg",
      description: "Antike Möbel sicher transportiert",
      image: "/images/gallery/gallery-2.jpg",
      category: "Transport"
    },
    {
      id: 3,
      title: "Lagerhaltung Frankfurt",
      description: "6 Monate sichere Möbellagerung",
      image: "/images/gallery/gallery-3.jpg",
      category: "Lagerung"
    },
    {
      id: 4,
      title: "Fahrzeugtransport Berlin",
      description: "Motorrad sicher von Berlin nach Wien",
      image: "/images/gallery/gallery-4.jpg",
      category: "Fahrzeugtransport"
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unsere Projekte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Überzeugen Sie sich von unserer professionellen Arbeit anhand ausgewählter Projekte.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Projekte
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Erfolgreiche Transporte</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Kundenzufriedenheit</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Service & Beratung</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection; 