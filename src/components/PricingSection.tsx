import React, { useState } from 'react';

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pricingPlans = [
    {
      title: "Website",
      description: "Perfect for businesses that need a professional online presence",
      price: "$2,500",
      duration: "one-time",
      features: [
        "Custom Website Design",
        "Responsive Layout",
        "Up to 10 Pages",
        "Contact Forms",
        "SEO Optimization",
        "Google Analytics",
        "Social Media Integration",
        "1 Month Support"
      ],
      popular: false
    },
    {
      title: "Website + Branding",
      description: "Complete brand identity with a stunning website",
      price: "$4,500",
      duration: "one-time",
      features: [
        "Everything in Website",
        "Logo Design",
        "Brand Guidelines",
        "Business Cards",
        "Social Media Templates",
        "Email Signature",
        "Brand Assets Package",
        "3 Months Support"
      ],
      popular: true
    },
    {
      title: "Monthly Retainer",
      description: "Ongoing support and maintenance for growing businesses",
      price: "$500",
      duration: "per month",
      features: [
        "Website Maintenance",
        "Content Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Monthly Reports",
        "Priority Support",
        "Feature Additions",
        "Unlimited Revisions"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "Startup Founder",
      text: "The website + branding package was exactly what we needed. Our new site looks professional and converts much better.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "Restaurant Owner",
      text: "The monthly retainer has been a game-changer. We can focus on our business while they handle all the technical stuff.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Consultant",
      text: "Fast, professional, and delivered exactly what was promised. Highly recommend their services.",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. All plans include our commitment 
            to quality and ongoing support.
          </p>
        </div>

        {/* Pricing Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {pricingPlans.map((plan, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {plan.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Plan Details */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Plan Info */}
            <div>
              <div className="mb-6">
                {pricingPlans[activeTab].popular && (
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {pricingPlans[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {pricingPlans[activeTab].description}
                </p>
                <div className="mb-8">
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900">
                    {pricingPlans[activeTab].price}
                  </span>
                  <span className="text-lg text-gray-600 ml-2">
                    {pricingPlans[activeTab].duration}
                  </span>
                </div>
              </div>

              <button className="btn-animated-big bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors w-full lg:w-auto">
                Get Started
              </button>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                What's Included
              </h4>
              <ul className="space-y-4">
                {pricingPlans[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-700 italic mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-600 mb-8">
            We're here to help you choose the right plan for your business
          </p>
          <button className="btn-animated-big border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 