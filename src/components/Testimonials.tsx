import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Schmidt',
      location: 'München',
      rating: 5,
      date: '15. März 2024',
      service: 'Privatumzug',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Absolut professioneller Service! Das Team von Thomas Scharli hat unseren 4-Zimmer Umzug von München nach Berlin perfekt abgewickelt. Pünktlich, sorgfältig und sehr freundlich. Alle Möbel sind unbeschädigt angekommen. Kann ich nur weiterempfehlen!',
      highlights: ['Pünktlichkeit', 'Sorgfalt', 'Freundlichkeit']
    },
    {
      id: 2,
      name: 'Dr. Andreas Weber',
      location: 'Frankfurt',
      rating: 5,
      date: '8. März 2024',
      service: 'Büroumzug',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Unser Büroumzug wurde über das Wochenende durchgeführt, sodass der Geschäftsbetrieb nicht unterbrochen wurde. Hervorragende Planung und Durchführung. Besonders beeindruckt hat mich der sorgfältige Umgang mit unserer IT-Ausstattung.',
      highlights: ['Wochenendservice', 'IT-Kompetenz', 'Planung']
    },
    {
      id: 3,
      name: 'Familie Müller',
      location: 'Hamburg',
      rating: 5,
      date: '22. Februar 2024',
      service: 'Entrümpelung',
      avatar: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Nach dem Tod unseres Vaters mussten wir das Elternhaus entrümpeln. Thomas Scharli und sein Team haben uns sehr einfühlsam geholfen und sogar noch Geld für verwertbare Gegenstände angerechnet. Sehr empfehlenswert in schweren Zeiten.',
      highlights: ['Einfühlsamkeit', 'Wertanrechnung', 'Zuverlässigkeit']
    },
    {
      id: 4,
      name: 'Stefan Richter',
      location: 'Berlin',
      rating: 5,
      date: '10. Februar 2024',
      service: 'Fernumzug',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Umzug von Stuttgart nach Wien - international und problemlos! Die Zollabwicklung wurde komplett übernommen. Zwischenlagerung war notwendig und wurde perfekt organisiert. Preis-Leistung stimmt absolut.',
      highlights: ['Internationale Kompetenz', 'Zollabwicklung', 'Flexibilität']
    },
    {
      id: 5,
      name: 'Jennifer Hartmann',
      location: 'Düsseldorf',
      rating: 5,
      date: '1. Februar 2024',
      service: 'Luxusumzug',
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Unser Penthouse-Umzug mit wertvollen Kunstgegenständen war eine Herausforderung. Das Team hat mit Spezialverpackungen und höchster Vorsicht gearbeitet. Alles ist perfekt angekommen. Danke für den erstklassigen Service!',
      highlights: ['Kunsttransport', 'Spezialverpackung', 'Präzision']
    },
    {
      id: 6,
      name: 'Rechtsanwaltskanzlei Meyer & Partner',
      location: 'Köln',
      rating: 5,
      date: '18. Januar 2024',
      service: 'Kanzleiumzug',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Höchste Vertraulichkeit bei unserem Kanzleiumzug. Mandantenakten wurden sicher und diskret transportiert. Express-Service hat funktioniert - am Montag konnten wir normal weiterarbeiten. Absolute Professionalität!',
      highlights: ['Vertraulichkeit', 'Express-Service', 'Professionalität']
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Überzeugen Sie sich von der Qualität unserer Arbeit durch die Erfahrungen 
            unserer zufriedenen Kunden.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg relative">
            {/* Quote Icon */}
            <Quote className="h-12 w-12 text-blue-200 mb-6" />
            
            {/* Testimonial Content */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Customer Info */}
              <div className="text-center md:text-left">
                <div className="relative inline-block mb-4">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1 rounded-full">
                    <User className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600">{currentTestimonial.location}</p>
                <div className="flex justify-center md:justify-start space-x-1 mt-2">
                  {renderStars(currentTestimonial.rating)}
                </div>
                <div className="mt-3 space-y-1 text-sm text-gray-500">
                  <div>{currentTestimonial.service}</div>
                  <div>{currentTestimonial.date}</div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="md:col-span-2">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{currentTestimonial.text}"
                </blockquote>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {currentTestimonial.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                idx === currentSlide 
                  ? 'border-blue-600 shadow-lg' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
              onClick={() => setCurrentSlide(idx)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                {testimonial.text}
              </p>
              <div className="mt-3 text-xs text-gray-500">
                {testimonial.service} • {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">4.9/5</div>
            <div className="text-green-100">Durchschnittliche Bewertung</div>
            <div className="flex justify-center space-x-1 mt-3">
              {renderStars(5)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-blue-100">Weiterempfehlungsrate</div>
            <div className="text-sm text-blue-100 mt-2">würden uns wieder wählen</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-purple-100">Zufriedene Kunden</div>
            <div className="text-sm text-purple-100 mt-2">seit 2008</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Werden Sie unser nächster zufriedener Kunde!
            </h3>
            <p className="text-orange-100 mb-6">
              Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und 
              überzeugen Sie sich selbst von unserem Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
              >
                Kostenlos beraten lassen
              </a>
              <a
                href="tel:+4917012345678"
                className="bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors border-2 border-white/20"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;