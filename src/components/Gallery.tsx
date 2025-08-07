import React, { useState } from 'react';
import { Image, X, ChevronLeft, ChevronRight, Download, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/gallery-1.jpg',
      alt: 'Professioneller Transport-Service',
      category: 'Transport',
      description: 'Sichere und professionelle Transporte mit modernster Ausrüstung'
    },
    {
      id: 2,
      src: '/images/gallery/gallery-2.jpg',
      alt: 'Umzugsdienstleistungen',
      category: 'Umzug',
      description: 'Komplette Umzugsdienstleistungen für Privat- und Geschäftskunden'
    },
    {
      id: 3,
      src: '/images/gallery/gallery-3.jpg',
      alt: 'Lagerung und Logistik',
      category: 'Lagerung',
      description: 'Moderne Lagerhallen mit Klimakontrolle und Sicherheitssystemen'
    },
    {
      id: 4,
      src: '/images/gallery/gallery-4.jpg',
      alt: 'Express Transport',
      category: 'Express',
      description: 'Schnelle Kurier- und Expresstransporte für dringende Sendungen'
    },
    {
      id: 5,
      src: '/images/gallery/gallery-5.jpg',
      alt: 'Entrümpelung und Entsorgung',
      category: 'Entrümpelung',
      description: 'Professionelle Haushaltsauflösungen und fachgerechte Entsorgung'
    },
    {
      id: 6,
      src: '/images/gallery/gallery-6.jpg',
      alt: 'Fernumzüge',
      category: 'Fernumzug',
      description: 'Deutschlandweite und europäische Umzüge mit Full-Service'
    },
    {
      id: 7,
      src: '/images/gallery/gallery-7.jpg',
      alt: 'Büroumzüge',
      category: 'Büroumzug',
      description: 'Spezialisierte Büroumzüge mit minimaler Ausfallzeit'
    },
    {
      id: 8,
      src: '/images/gallery/gallery-8.jpg',
      alt: 'IT-Equipment Transport',
      category: 'IT-Transport',
      description: 'Sichere IT-Transporte und Büroausstattung'
    },
    {
      id: 9,
      src: '/images/gallery/gallery-9.jpg',
      alt: 'Team und Ausrüstung',
      category: 'Team',
      description: 'Unser erfahrenes Team mit modernster Transport-Ausrüstung'
    }
  ];

  const categories = ['Alle', 'Transport', 'Umzug', 'Lagerung', 'Express', 'Entrümpelung', 'Fernumzug', 'Büroumzug', 'IT-Transport', 'Team'];

  const filteredImages = selectedCategory === 'Alle' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

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
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Unsere Galerie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eindrücke unserer Arbeit und unseres Engagements für exzellenten Service.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden">
                {/* Real Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{image.alt}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Galerie schließen"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Display */}
            <div className="w-full h-96 relative">
              <img
                src={filteredImages[selectedImage]?.src}
                alt={filteredImages[selectedImage]?.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {filteredImages[selectedImage]?.alt}
              </h3>
              <p className="text-gray-600 mb-4">
                {filteredImages[selectedImage]?.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Kategorie: {filteredImages[selectedImage]?.category}</span>
                <a
                  href={filteredImages[selectedImage]?.src}
                  download
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <Download className="h-4 w-4" />
                  <span>Bild herunterladen</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;