import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "🎨",
      title: "Web Design",
      description: "Beautiful, modern designs that capture your brand's essence and engage your audience.",
      features: ["Responsive Design", "UI/UX Optimization", "Brand Integration", "Custom Illustrations"]
    },
    {
      icon: "⚡",
      title: "Web Development",
      description: "Fast, scalable websites built with the latest technologies and best practices.",
      features: ["React/Next.js", "TypeScript", "Performance Optimization", "SEO Ready"]
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      description: "Complete online stores that drive sales and provide excellent customer experiences.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Accounts"]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Native Development", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: "🔍",
      title: "SEO & Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      features: ["Search Engine Optimization", "Content Marketing", "Social Media", "Analytics"]
    },
    {
      icon: "🛠️",
      title: "Maintenance",
      description: "Ongoing support and maintenance to keep your website running smoothly.",
      features: ["Security Updates", "Performance Monitoring", "Content Updates", "Technical Support"]
    },
    {
      icon: "🚀",
      title: "Performance",
      description: "Optimize your website for speed and user experience.",
      features: ["Speed Optimization", "Core Web Vitals", "Caching", "CDN Setup"]
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Protect your website and data with enterprise-grade security measures.",
      features: ["SSL Certificates", "Security Audits", "Backup Systems", "Malware Protection"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web development and design services to help your business 
            succeed online. From concept to launch, we handle everything.
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
                  {/* Icon */}
                  <div className="text-5xl mb-6">{service.icon}</div>
                  
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
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
              
              {/* Duplicate items for seamless loop */}
              {services.map((service, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="bg-white border border-gray-200 rounded-2xl p-8 w-80 flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="text-5xl mb-6">{service.icon}</div>
                  
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
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              We specialize in creating custom web solutions tailored to your specific needs. 
              Let's discuss your project and find the perfect approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-animated-big bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </button>
              <button className="btn-animated-big border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;