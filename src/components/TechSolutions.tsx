import React from 'react';

const TechSolutions: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              We develop tech solutions that matter
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Moderne Technologie ist der Schlüssel zu effizienten Transportlösungen. 
              Wir entwickeln und implementieren innovative Tech-Lösungen, die Ihre 
              Logistikprozesse optimieren und Kosten senken.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Tracking System</h3>
                  <p className="text-gray-600">
                    Real-time GPS-Tracking und intelligente Routenoptimierung für maximale Effizienz.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatisierte Prozesse</h3>
                  <p className="text-gray-600">
                    KI-gestützte Automatisierung reduziert manuelle Arbeit und minimiert Fehler.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Datenanalyse & Reporting</h3>
                  <p className="text-gray-600">
                    Umfassende Analysen und detaillierte Reports für bessere Entscheidungsfindung.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2">
                <span>Mehr erfahren</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="stickey_circle_wrap relative">
            <div className="circle w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto relative z-10">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
            </div>
            
            {/* Decorative elements around the circle */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-4 right-0 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-0 left-4 w-4 h-4 bg-red-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-purple-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1.5s'}}></div>
            
            {/* Tech icons floating around */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center transform rotate-12">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div className="absolute top-12 right-12 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center transform -rotate-12">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <div className="absolute bottom-8 left-12 w-14 h-14 bg-white rounded-lg shadow-lg flex items-center justify-center transform rotate-6">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            <div className="absolute bottom-12 right-8 w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center transform -rotate-6">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
