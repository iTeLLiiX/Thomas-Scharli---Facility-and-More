import React, { useEffect, useRef } from 'react';

const QuoteSection: React.FC = () => {
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const SplitType = await import('split-type');
      
      gsap.registerPlugin(ScrollTrigger);

      if (quoteRef.current) {
        const split = new SplitType.default(quoteRef.current, {
          types: 'words,chars',
          tagName: 'span'
        });

        gsap.fromTo(split.chars, 
          { 
            opacity: 0, 
            y: 50,
            rotateX: -90
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    };

    initAnimations();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Quote Icon */}
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          {/* Main Quote */}
          <div className="mb-12">
            <blockquote 
              ref={quoteRef}
              className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              "Working with this team transformed our online presence completely. 
              Our website now not only looks amazing but actually converts visitors 
              into customers. The results have been incredible."
            </blockquote>
          </div>

          {/* Author Info */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-1">Sarah Johnson</div>
              <div className="text-blue-300">CEO, TechStart Inc.</div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-gray-300">Increase in Conversions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">2.5x</div>
              <div className="text-gray-300">Faster Page Load Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
              <div className="text-gray-300">Reduction in Bounce Rate</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="btn-animated-big bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              See More Results
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default QuoteSection; 