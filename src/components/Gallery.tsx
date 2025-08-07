import React, { useState } from 'react';
import { Image, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/private-move-1.jpg',
      alt: 'Professioneller Privatumzug',
      category: 'Privatumzug',
      description: 'Sorgfältiger Transport von Möbeln und persönlichen Gegenständen',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      src: '/images/gallery/office-move-1.jpg',
      alt: 'Büroumzug mit IT-Equipment',
      category: 'Büroumzug',
      description: 'Sichere IT-Transporte und Büroausstattung',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      src: '/images/gallery/long-distance-1.jpg',
      alt: 'Fernumzug Deutschland',
      category: 'Fernumzug',
      description: 'Deutschlandweite und europäische Transporte',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      src: '/images/gallery/express-transport-1.jpg',
      alt: 'Express Transport',
      category: 'Express Transport',
      description: 'Schnelle Kurier- und Expresstransporte',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      src: '/images/gallery/clearance-1.jpg',
      alt: 'Entrümpelung und Haushaltsauflösung',
      category: 'Entrümpelung',
      description: 'Professionelle Entrümpelung und Entsorgung',
      gradient: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      src: '/images/gallery/storage-1.jpg',
      alt: 'Sichere Lagerung',
      category: 'Lagerung',
      description: 'Moderne Lagerhallen mit Klimakontrolle',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 7,
      src: '/images/gallery/team-1.jpg',
      alt: 'Unser professionelles Team',
      category: 'Team',
      description: 'Erfahrenes und zuverlässiges Transport-Team',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      id: 8,
      src: '/images/gallery/equipment-1.jpg',
      alt: 'Moderne Transport-Ausrüstung',
      category: 'Ausrüstung',
      description: 'Professionelle Ausrüstung für sichere Transporte',
      gradient: 'from-gray-500 to-gray-600'
    }
  ];

  const categories = ['Alle', 'Privatumzug', 'Büroumzug', 'Fernumzug', 'Express Transport', 'Entrümpelung', 'Lagerung', 'Team', 'Ausrüstung'];
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredImages = selectedCategory === 'Alle' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Unsere Arbeit in Bildern
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere professionellen Transport- und Umzugsdienstleistungen. 
            Jedes Bild zeigt unsere Sorgfalt und Expertise bei der Arbeit.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient} opacity-90`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                
                {/* Image Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Image className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Image className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{image.alt}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Überzeugen Sie sich selbst von unserer Qualität
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Jedes Bild zeigt unsere Sorgfalt und Professionalität. 
              Lassen Sie sich von unseren Experten beraten und erhalten Sie ein individuelles Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Angebot anfordern
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

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image Container */}
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Display */}
              <div className="w-full h-96 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${filteredImages[selectedImage]?.gradient} opacity-90`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-8">
                    <Image className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {filteredImages[selectedImage]?.alt}
                    </h3>
                    <p className="text-gray-600">{filteredImages[selectedImage]?.category}</p>
                  </div>
                  <button
                    onClick={() => {
                      // Simulate download
                      const link = document.createElement('a');
                      link.href = filteredImages[selectedImage]?.src || '#';
                      link.download = filteredImages[selectedImage]?.alt || 'image';
                      link.click();
                    }}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    title="Bild herunterladen"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-700">{filteredImages[selectedImage]?.description}</p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} von {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;