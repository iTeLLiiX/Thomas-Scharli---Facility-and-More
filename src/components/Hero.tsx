import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const imageScrollRef = useRef<HTMLDivElement>(null);

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
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-heading text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight mb-6">
              We build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                websites
              </span>
              that work
            </h1>
            
            <p className="hero-description text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Modern, fast, and beautiful websites that convert visitors into customers. 
              Built with the latest technologies and optimized for success.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-animated-big bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
                Start your project
              </button>
              <button className="btn-animated-big border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors">
                View our work
              </button>
            </div>
          </div>

          {/* Right Column - Scrolling Images */}
          <div className="relative">
            {/* Desktop Image Scroll */}
            <div className="hidden lg:block header76_image-scroll-wrapper">
              <div ref={imageScrollRef} className="header76_image-list">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="header76_image-wrapper">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-6 w-64 h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{i + 1}</span>
                        </div>
                        <p className="text-gray-600 font-medium">Project {i + 1}</p>
                        <p className="text-sm text-gray-500">Modern Design</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={`duplicate-${i}`} className="header76_image-wrapper">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-6 w-64 h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{i + 1}</span>
                        </div>
                        <p className="text-gray-600 font-medium">Project {i + 1}</p>
                        <p className="text-sm text-gray-500">Modern Design</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet/Mobile Image Scroll */}
            <div className="lg:hidden header76_image-scroll-wrapper-tablet">
              <div className="header76_image-list-tablet">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="header76_image-wrapper-tablet">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl p-4 w-48 h-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{i + 1}</span>
                        </div>
                        <p className="text-gray-600 font-medium text-sm">Project {i + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={`duplicate-mobile-${i}`} className="header76_image-wrapper-tablet">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl p-4 w-48 h-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{i + 1}</span>
                        </div>
                        <p className="text-gray-600 font-medium text-sm">Project {i + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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