import React from 'react';

const PainsSection: React.FC = () => {
  const pains = [
    {
      icon: "🎨",
      title: "Outdated Design",
      description: "Your website looks old and doesn't reflect your brand's modern values.",
      solution: "We create fresh, contemporary designs that align with current trends."
    },
    {
      icon: "🐌",
      title: "Slow Performance",
      description: "Your website takes forever to load, driving visitors away.",
      solution: "We optimize for speed with modern technologies and best practices."
    },
    {
      icon: "📱",
      title: "Not Mobile-Friendly",
      description: "Your website doesn't work well on phones and tablets.",
      solution: "We build responsive designs that work perfectly on all devices."
    },
    {
      icon: "🔍",
      title: "Poor SEO",
      description: "Your website doesn't rank well in search engines.",
      solution: "We implement SEO best practices to improve your search visibility."
    },
    {
      icon: "💰",
      title: "Low Conversions",
      description: "Visitors come but don't become customers.",
      solution: "We design conversion-focused layouts that turn visitors into buyers."
    },
    {
      icon: "🔧",
      title: "Hard to Update",
      description: "You can't easily update content without technical help.",
      solution: "We build user-friendly content management systems."
    }
  ];

  return (
    <section id="pains" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common Problems We Solve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let these issues hold your business back. We've helped hundreds of companies 
            overcome these challenges and achieve their online goals.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{pain.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {pain.title}
              </h3>
              
              {/* Problem Description */}
              <p className="text-gray-600 mb-4">
                {pain.description}
              </p>
              
              {/* Solution */}
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-medium text-blue-900">
                  <span className="font-bold">Our Solution:</span> {pain.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Solve These Problems?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can transform your website and boost your business results.
            </p>
            <button className="btn-animated-big bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainsSection; 