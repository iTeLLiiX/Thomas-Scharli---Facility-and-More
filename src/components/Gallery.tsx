import React, { useState } from 'react';
import { Image, X, ChevronLeft, ChevronRight, Download, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const portfolioProjects = [
    {
      id: 1,
      src: '/images/portfolio/project-1.jpg',
      alt: 'E-Commerce Website',
      category: 'E-Commerce',
      description: 'Moderne E-Commerce Plattform mit React und TypeScript'
    },
    {
      id: 2,
      src: '/images/portfolio/project-2.jpg',
      alt: 'Corporate Website',
      category: 'Corporate',
      description: 'Professionelle Unternehmenswebsite mit modernem Design'
    },
    {
      id: 3,
      src: '/images/portfolio/project-3.jpg',
      alt: 'Mobile App',
      category: 'Mobile',
      description: 'Responsive Mobile App mit PWA-Funktionen'
    },
    {
      id: 4,
      src: '/images/portfolio/project-4.jpg',
      alt: 'Landing Page',
      category: 'Landing',
      description: 'Conversion-optimierte Landing Page'
    },
    {
      id: 5,
      src: '/images/portfolio/project-5.jpg',
      alt: 'Blog Platform',
      category: 'Blog',
      description: 'Moderne Blog-Plattform mit CMS'
    },
    {
      id: 6,
      src: '/images/portfolio/project-6.jpg',
      alt: 'Dashboard',
      category: 'Dashboard',
      description: 'Analytics Dashboard mit React'
    },
    {
      id: 7,
      src: '/images/portfolio/project-7.jpg',
      alt: 'Portfolio Website',
      category: 'Portfolio',
      description: 'Kreative Portfolio-Website'
    },
    {
      id: 8,
      src: '/images/portfolio/project-8.jpg',
      alt: 'Restaurant Website',
      category: 'Restaurant',
      description: 'Responsive Restaurant-Website'
    },
    {
      id: 9,
      src: '/images/portfolio/project-9.jpg',
      alt: 'SaaS Platform',
      category: 'SaaS',
      description: 'SaaS-Plattform mit moderner UI'
    }
  ];

  const categories = ['Alle', 'E-Commerce', 'Corporate', 'Mobile', 'Landing', 'Blog', 'Dashboard', 'Portfolio', 'Restaurant', 'SaaS'];

  const filteredProjects = selectedCategory === 'Alle' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unser Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreichen Webentwicklungs-Projekte. 
            Jedes Projekt ist einzigartig und auf die Bedürfnisse unserer Kunden zugeschnitten.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-6xl text-white">💻</div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.alt}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
                <div className="text-8xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredProjects[selectedImage].alt}
                </h3>
                <p className="text-blue-100">
                  {filteredProjects[selectedImage].description}
                </p>
              </div>

              {/* Project Info */}
              <div className="mt-4 text-center text-white">
                <p className="text-lg">
                  {filteredProjects[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;