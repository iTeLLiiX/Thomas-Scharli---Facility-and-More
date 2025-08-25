import React, { useState } from 'react';

const Webinars: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const webinars = [
    {
      id: 1,
      title: "Logistik-Trends 2024",
      description: "Die neuesten Entwicklungen in der Transportbranche",
      thumbnail: "/images/webinar-1.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "45 min",
      date: "15. Januar 2024"
    },
    {
      id: 2,
      title: "Nachhaltige Transportlösungen",
      description: "Umweltfreundliche Alternativen für Ihre Lieferungen",
      thumbnail: "/images/webinar-2.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "60 min",
      date: "22. Januar 2024"
    },
    {
      id: 3,
      title: "Digitalisierung in der Logistik",
      description: "Wie Technologie Ihre Prozesse optimiert",
      thumbnail: "/images/webinar-3.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "50 min",
      date: "29. Januar 2024"
    },
    {
      id: 4,
      title: "Kundenservice Excellence",
      description: "Strategien für erstklassigen Kundenservice",
      thumbnail: "/images/webinar-4.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "40 min",
      date: "5. Februar 2024"
    }
  ];

  const openVideo = (id: number) => {
    setSelectedVideo(id);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Monthly Webinars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bleiben Sie auf dem neuesten Stand mit unseren monatlichen Webinaren zu 
            Logistik-Trends und Transportlösungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webinars.map((webinar) => (
            <div 
              key={webinar.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openVideo(webinar.id)}
            >
              <div className="relative">
                <img 
                  src={webinar.thumbnail} 
                  alt={webinar.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x300/${['4F46E5', '10B981', 'F59E0B', 'EF4444'][webinar.id - 1]}/FFFFFF?text=${encodeURIComponent(webinar.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {webinar.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {webinar.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {webinar.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{webinar.date}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Ansehen →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Nächste Webinare</h3>
            <p className="text-lg mb-6 opacity-90">
              Melden Sie sich für unsere kommenden Webinare an und erhalten Sie 
              exklusive Einblicke in die Zukunft der Logistik.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Jetzt anmelden
            </button>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                src={webinars.find(w => w.id === selectedVideo)?.videoUrl}
                className="absolute inset-0 w-full h-full rounded-lg"
                title="Webinar Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Webinars;
