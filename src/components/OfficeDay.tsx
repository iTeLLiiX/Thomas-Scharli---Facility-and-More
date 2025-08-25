import React, { useState, useEffect } from 'react';

const OfficeDay: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const officeImages = [
    {
      src: '/images/office-1.jpg',
      alt: 'Team Meeting',
      title: 'Team Meeting',
      description: 'Tägliche Besprechungen für optimale Koordination'
    },
    {
      src: '/images/office-2.jpg',
      alt: 'Logistik Planung',
      title: 'Logistik Planung',
      description: 'Strategische Planung für effiziente Transporte'
    },
    {
      src: '/images/office-3.jpg',
      alt: 'Kundenbetreuung',
      title: 'Kundenbetreuung',
      description: 'Persönlicher Service für unsere Kunden'
    },
    {
      src: '/images/office-4.jpg',
      alt: 'Technologie',
      title: 'Moderne Technologie',
      description: 'Innovative Lösungen für die Zukunft'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % officeImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [officeImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % officeImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A typical day at the office
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erleben Sie einen Einblick in unseren Arbeitsalltag und die Menschen hinter Scharli Transport
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {officeImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 md:h-[500px]">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/1200x500/${['4F46E5', '10B981', 'F59E0B', 'EF4444'][index]}/FFFFFF?text=${encodeURIComponent(image.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{image.title}</h3>
                      <p className="text-lg md:text-xl opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {officeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Additional content below carousel */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Arbeitszeiten</h3>
              <p className="text-gray-600">Wir passen uns Ihren Bedürfnissen an</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Erfahrenes Team</h3>
              <p className="text-gray-600">Über 20 Jahre Branchenerfahrung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Moderne Technologie für bessere Lösungen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeDay;
