import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "💻",
      title: "Webentwicklung",
      description: "Moderne Websites und Webanwendungen mit React, TypeScript und Tailwind CSS.",
      features: ["React", "TypeScript", "Responsive Design", "SEO Optimierung"],
      image: "/images/services/web-development.jpg"
    },
    {
      icon: "🎨",
      title: "Webdesign",
      description: "Professionelle Designs, die Ihr Unternehmen perfekt präsentieren.",
      features: ["UI/UX Design", "Branding", "Prototyping", "Design System"],
      image: "/images/services/web-design.jpg"
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Responsive Websites, die auf allen Geräten perfekt funktionieren.",
      features: ["Mobile Optimierung", "Touch Friendly", "Performance", "PWA"],
      image: "/images/services/mobile-first.jpg"
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Schnelle und optimierte Websites für beste Nutzererfahrung.",
      features: ["Ladezeiten", "SEO", "Core Web Vitals", "Optimierung"],
      image: "/images/services/performance.jpg"
    },
    {
      icon: "🔧",
      title: "Wartung",
      description: "Regelmäßige Updates und Wartung für Ihre Website.",
      features: ["Updates", "Backups", "Monitoring", "Support"],
      image: "/images/services/maintenance.jpg"
    },
    {
      icon: "🚀",
      title: "Deployment",
      description: "Professionelles Hosting und Deployment Ihrer Website.",
      features: ["Hosting", "SSL", "CDN", "Monitoring"],
      image: "/images/services/deployment.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unsere Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten umfassende Webentwicklungs- und Design-Services. 
            Von der Konzeption bis zum Launch - wir sind Ihr Partner für digitale Lösungen.
          </p>
        </div>

        {/* Horizontal Scrolling Services */}
        <div className="scroll-track-wrapper">
          <div className="scroll-track-left">
            <div className="scroll-items">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 w-80 flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Service Image */}
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <div className="text-6xl">{service.icon}</div>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-3xl mb-4">{service.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Mehr erfahren
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;