import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { images } from '../utils/imageImports';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "Büroumzug München",
      description: "Kompletter Büroumzug mit 50 Arbeitsplätzen",
      image: images.portfolio.project1,
      fallback: images.portfolio.fallbacks[0]
    },
    {
      title: "Möbeltransport Hamburg",
      description: "Antike Möbel sicher transportiert",
      image: images.portfolio.project2,
      fallback: images.portfolio.fallbacks[1]
    },
    {
      title: "Lagerhaltung Frankfurt",
      description: "6 Monate sichere Möbellagerung",
      image: images.portfolio.project3,
      fallback: images.portfolio.fallbacks[2]
    },
    {
      title: "Fahrzeugtransport Berlin",
      description: "Motorrad sicher von Berlin nach Wien",
      image: images.portfolio.project4,
      fallback: images.portfolio.fallbacks[3]
    }
  ];


  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-blue-600">Projekte</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Überzeugen Sie sich von unserer professionellen Arbeit anhand ausgewählter Projekte.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('projects')}
            >
              Projekte
            </button>
          </div>
        </div>

        {/* Projects Tab */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <OptimizedImage
                  src={project.image}
                  fallbackSrc={project.fallback}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Erfolgreiche Transporte</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Kundenzufriedenheit</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Service & Beratung</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;