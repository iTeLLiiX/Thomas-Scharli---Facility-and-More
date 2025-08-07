import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Professionelle
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Webentwicklung
              </span>
              & Design
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Moderne Websites, die Ihr Unternehmen zum Erfolg führen. 
              Von React bis TypeScript - wir entwickeln maßgeschneiderte Lösungen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Projekt starten
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Portfolio ansehen
              </button>
            </div>

            {/* Tech Stack Icons */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-700">React</div>
                <div className="text-xs text-gray-500">Moderne UI</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-700">TypeScript</div>
                <div className="text-xs text-gray-500">Type Safety</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-700">Tailwind</div>
                <div className="text-xs text-gray-500">Styling</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Animation */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-2">Webentwicklung</h3>
                <p className="text-blue-100">Moderne & responsive Websites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
