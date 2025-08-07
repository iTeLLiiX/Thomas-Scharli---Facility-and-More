import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Formularverarbeitung stattfinden
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
    setFormData({ name: '', email: '', phone: '', message: '', type: 'general' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Projekt verwirklichen. Wir freuen uns darauf, von Ihnen zu hören!
          </p>
        </div>

          <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
            <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sprechen Sie mit uns
              </h3>
              <p className="text-gray-600 mb-8">
                Egal ob Sie eine Frage haben, ein Angebot benötigen oder einfach nur hallo sagen möchten - 
                wir sind hier, um Ihnen zu helfen.
              </p>
              </div>

                <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                  <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600">+49 170 123 456 78</p>
                  <p className="text-sm text-gray-500">Mo-Fr: 9:00 - 18:00 Uhr</p>
                    </div>
                  </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                  <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                  <p className="text-gray-600">hello@webseite-scharli.de</p>
                  <p className="text-sm text-gray-500">Antwort innerhalb von 24h</p>
                    </div>
                  </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                    <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Standort</h4>
                  <p className="text-gray-600">Deutschland</p>
                  <p className="text-sm text-gray-500">Service in ganz Deutschland</p>
                    </div>
                    </div>
                  </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Warum uns wählen?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>15+ Jahre Erfahrung</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>98% Kundenzufriedenheit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>24/7 Support verfügbar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Kostenlose Beratung</span>
                </li>
              </ul>
                    </div>
                  </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Senden Sie uns eine Nachricht
                  </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                      </label>
                      <input
                        type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ihr vollständiger Name"
                      />
                    </div>

                    <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                      </label>
                      <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                  </div>

                    <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                  name="phone"
                        value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+49 170 123 456 78"
                      />
                  </div>

                  <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Anfrage-Typ
                      </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">Allgemeine Anfrage</option>
                  <option value="quote">Kostenloses Angebot</option>
                  <option value="project">Projektanfrage</option>
                  <option value="support">Support</option>
                </select>
                    </div>
                    
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                    <textarea
                  name="message"
                      value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                    />
                  </div>

                    <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                    >
                <Send className="h-5 w-5" />
                <span>Nachricht senden</span>
                    </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;