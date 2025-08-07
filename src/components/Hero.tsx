import React, { useEffect, useRef } from 'react';
import { useButtonActions, ActionButton } from './ButtonActions';

const Hero: React.FC = () => {
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const { actions, executeAction } = useButtonActions();

  useEffect(() => {
    // Initialize GSAP animations when component mounts
    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      
      // Animate the main heading
      gsap.fromTo('.hero-heading', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Animate the description
      gsap.fromTo('.hero-description', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      // Animate the CTA button
      gsap.fromTo('.hero-cta', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      );
    };

    initAnimations();
  }, []);

  // Find specific actions
  const startProjectAction = actions.find(a => a.id === 'start-project');
  const viewWorkAction = actions.find(a => a.id === 'view-work');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Hero Image */}
          <div className="relative order-2 lg:order-1">
            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero/hero-main.jpg"
                alt="THOMAS SCHARLI Transport & Umzug"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-xs text-gray-600">Jahre Erfahrung</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Verfügbar</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="hero-heading text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Über Thomas Scharli
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                - Facility and More
              </span>
            </h1>
            
            <div className="hero-description text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 space-y-4">
              <p>
                Mit über 15 Jahren Erfahrung in der Transport- und Logistikbranche haben wir uns als verlässlicher Partner für Privatkunden und Unternehmen etabliert. Unser Familienunternehmen steht für Qualität, Zuverlässigkeit und persönlichen Service.
              </p>
              <p>
                Wir bieten maßgeschneiderte Lösungen für Ihre individuellen Anforderungen - von kleineren Transporten bis hin zu großen Umzügen und langfristiger Lagerung in unserem modernen Lagerhaus.
              </p>
            </div>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Vollversichert</div>
                  <div className="text-sm text-gray-600">Umfassender Schutz</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Zertifiziert</div>
                  <div className="text-sm text-gray-600">Geprüfte Qualität</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Persönlich</div>
                  <div className="text-sm text-gray-600">Individuelle Beratung</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Deutschlandweit</div>
                  <div className="text-sm text-gray-600">& Nachbarländer</div>
                </div>
              </div>
            </div>
            
            <div className="hero-cta">
              <button className="btn-animated-big bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Persönliche Beratung vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;