import React from 'react';

const OurWork: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Some Of Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreichen Transportprojekte und Logistiklösungen
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Row 1 */}
          <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="card-left bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img 
                  src="/images/work-1.jpg" 
                  alt="Express Lieferung"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Express+Lieferung';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Express Lieferung</h3>
                  <p className="text-lg">Schnelle und zuverlässige Lieferungen</p>
                </div>
              </div>
            </div>
            
            <div className="card-right space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Express-Lieferungen in ganz Deutschland
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unser Express-Service garantiert pünktliche Lieferungen in ganz Deutschland. 
                Mit unserem modernen Fuhrpark und erfahrenen Fahrern erreichen wir Ihr Ziel 
                schnell und sicher.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24h Express-Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Live-Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Versicherter Transport</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="card-left space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900">
                Spezialtransporte für sensible Güter
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Für empfindliche oder wertvolle Güter bieten wir spezielle Transportlösungen. 
                Unsere klimatisierten Fahrzeuge und geschulten Fahrer gewährleisten den 
                sicheren Transport Ihrer wertvollen Fracht.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Klimatisierte Fahrzeuge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Spezialausrüstung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Geschulte Fahrer</span>
                </div>
              </div>
            </div>
            
            <div className="card-right bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="/images/work-2.jpg" 
                  alt="Spezialtransport"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Spezialtransport';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Spezialtransport</h3>
                  <p className="text-lg">Sichere Transporte für sensible Güter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="card-left bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img 
                  src="/images/work-3.jpg" 
                  alt="Logistiklösungen"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Logistiklösungen';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Logistiklösungen</h3>
                  <p className="text-lg">Maßgeschneiderte Logistikkonzepte</p>
                </div>
              </div>
            </div>
            
            <div className="card-right space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Komplette Logistiklösungen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Von der Planung bis zur Ausführung - wir bieten komplette Logistiklösungen 
                für Ihr Unternehmen. Unsere Experten entwickeln maßgeschneiderte Konzepte 
                für optimale Effizienz.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lagerung & Kommissionierung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Supply Chain Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Just-in-Time Lieferungen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
