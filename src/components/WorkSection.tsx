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

  const stats = [
    { number: "500+", label: "Erfolgreiche Transporte" },
    { number: "15+", label: "Jahre Erfahrung" },
    { number: "98%", label: "Kundenzufriedenheit" },
    { number: "24/7", label: "Service & Beratung" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

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
          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Projekte
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📦</div>
                  <p className="text-gray-600">{project.title}</p>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Customer Reviews */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Echte <span className="text-blue-600">Kundenbewertungen</span>
            </h3>
            <p className="text-gray-600">
              Authentische Bewertungen von verifizierten Kunden, die unsere Services genutzt haben.
            </p>
          </div>
          
          {/* Rating Summary */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Basierend auf 2 verifizierten Bewertungen</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-600 font-semibold">100% Verifiziert</span>
                </div>
                <p className="text-sm text-gray-600">Nur echte Kundenbewertungen</p>
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MS
                </div>
                <div>
                  <div className="font-semibold">M. Schmidt</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Professioneller Service, pünktlich und zuverlässig. Sehr empfehlenswert!"
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  KW
                </div>
                <div>
                  <div className="font-semibold">K. Weber</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Schneller und sicherer Transport. Alles ist perfekt angekommen!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection; 