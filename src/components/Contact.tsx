import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Calendar, Truck } from 'lucide-react';
import PromptEnhancer from './PromptEnhancer';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [showPromptEnhancer, setShowPromptEnhancer] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    serviceType: '',
    urgency: '',
    
    // Step 2: Details
    fromAddress: '',
    toAddress: '',
    movingDate: '',
    rooms: '',
    additionalServices: [] as string[],
    
    // Step 3: Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    
    // Preferences
    contactMethod: 'phone',
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    { value: 'private', label: 'Privatumzug', icon: '🏠' },
    { value: 'office', label: 'Büroumzug', icon: '🏢' },
    { value: 'long-distance', label: 'Fernumzug', icon: '🚛' },
    { value: 'express', label: 'Express Transport', icon: '⚡' },
    { value: 'clearance', label: 'Entrümpelung', icon: '🧹' },
    { value: 'storage', label: 'Lagerung', icon: '📦' },
  ];

  const urgencyOptions = [
    { value: 'flexible', label: 'Flexibel (2-4 Wochen)', color: 'bg-green-100 text-green-800' },
    { value: 'normal', label: 'Standard (1-2 Wochen)', color: 'bg-blue-100 text-blue-800' },
    { value: 'urgent', label: 'Dringend (diese Woche)', color: 'bg-orange-100 text-orange-800' },
    { value: 'emergency', label: 'Notfall (heute/morgen)', color: 'bg-red-100 text-red-800' },
  ];

  const additionalServices = [
    'Verpackungsservice',
    'Möbelmontage',
    'Reinigungsservice',
    'Zwischenlagerung',
    'Entsorgungsservice',
    'Halteverbotszone beantragen',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const handleEnhancedPrompt = (enhancedPrompt: string) => {
    setFormData(prev => ({
      ...prev,
      message: enhancedPrompt
    }));
    setShowPromptEnhancer(false);
    // Automatisch zu Step 3 wechseln
    setStep(3);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Vielen Dank für Ihre Anfrage!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-green-800 mb-2">Ihre nächsten Schritte:</h3>
                <ul className="text-green-700 text-left space-y-2">
                  <li>• Sie erhalten eine Bestätigungs-E-Mail</li>
                  <li>• Unser Team prüft Ihre Anfrage</li>
                  <li>• Wir erstellen ein individuelles Angebot</li>
                  <li>• Terminvereinbarung per Telefon</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    serviceType: '',
                    urgency: '',
                    fromAddress: '',
                    toAddress: '',
                    movingDate: '',
                    rooms: '',
                    additionalServices: [],
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                    contactMethod: 'phone',
                    privacy: false,
                  });
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Neue Anfrage erstellen
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Transport-Lösung finden. 
            Wir sind für Sie da und erstellen ein individuelles Angebot.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div className="space-y-8">
              {/* Step Indicator */}
              <div className="flex items-center space-x-4 mb-8">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {stepNumber}
                    </div>
                    {stepNumber < 3 && (
                      <div className={`w-12 h-1 mx-2 ${
                        step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Welchen Service benötigen Sie?
                  </h3>
                  
                  {/* Service Types */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Art der Dienstleistung
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceTypes.map((service) => (
                        <label
                          key={service.value}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.serviceType === service.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="serviceType"
                            value={service.value}
                            onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{service.icon}</span>
                            <span className="font-medium">{service.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Wie dringend ist Ihr Anliegen?
                    </label>
                    <div className="space-y-3">
                      {urgencyOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.urgency === option.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={option.value}
                            onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
                            className="sr-only"
                          />
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${option.color}`}>
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={nextStep}
                    disabled={!formData.serviceType || !formData.urgency}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Weiter zu Details
                  </button>
                </div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Details zu Ihrem Transport
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Von (Adresse)
                      </label>
                      <input
                        type="text"
                        value={formData.fromAddress}
                        onChange={(e) => setFormData(prev => ({ ...prev, fromAddress: e.target.value }))}
                        placeholder="Abholadresse"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nach (Adresse)
                      </label>
                      <input
                        type="text"
                        value={formData.toAddress}
                        onChange={(e) => setFormData(prev => ({ ...prev, toAddress: e.target.value }))}
                        placeholder="Lieferadresse"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Gewünschtes Datum
                      </label>
                      <input
                        type="date"
                        value={formData.movingDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, movingDate: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Anzahl Zimmer
                      </label>
                      <select
                        value={formData.rooms}
                        onChange={(e) => setFormData(prev => ({ ...prev, rooms: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="1">1 Zimmer</option>
                        <option value="2">2 Zimmer</option>
                        <option value="3">3 Zimmer</option>
                        <option value="4">4 Zimmer</option>
                        <option value="5">5+ Zimmer</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Zusatzleistungen (optional)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {additionalServices.map((service) => (
                        <label
                          key={service}
                          className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.additionalServices.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="mr-3 text-blue-600"
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!formData.fromAddress || !formData.toAddress}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Weiter zu Kontakt
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Ihre Kontaktdaten
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vorname
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder="Ihr Vorname"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nachname
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Ihr Nachname"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="ihre.email@beispiel.de"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+49 170 123 456 78"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Message with Prompt Enhancer */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Zusätzliche Nachricht (optional)
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPromptEnhancer(!showPromptEnhancer)}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {showPromptEnhancer ? 'Schließen' : 'Prompt Enhancer öffnen'}
                      </button>
                    </div>
                    
                    {showPromptEnhancer && (
                      <div className="mb-4">
                        <PromptEnhancer
                          onEnhancedPrompt={handleEnhancedPrompt}
                          placeholder="Beschreiben Sie Ihr Transport-Anliegen..."
                        />
                      </div>
                    )}
                    
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Weitere Details zu Ihrem Transport-Anliegen..."
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Wie sollen wir Sie kontaktieren?
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'phone', label: 'Telefonisch', icon: Phone },
                        { value: 'email', label: 'Per E-Mail', icon: Mail },
                        { value: 'both', label: 'Beides', icon: MessageSquare },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={option.value}
                            checked={formData.contactMethod === option.value}
                            onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value }))}
                            className="mr-3 text-blue-600"
                          />
                          <option.icon className="h-4 w-4 text-gray-600 mr-2" />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacy}
                      onChange={(e) => setFormData(prev => ({ ...prev, privacy: e.target.checked }))}
                      className="mt-1 text-blue-600"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Ich stimme der{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu und erlaube die Kontaktaufnahme für mein Anliegen.
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.privacy || isSubmitting}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Anfrage senden</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Direkter Kontakt
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Telefon</p>
                      <a href="tel:+4917012345678" className="text-blue-600 hover:text-blue-700">
                        +49 170 123 456 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">E-Mail</p>
                      <a href="mailto:info@scharli-transport.de" className="text-blue-600 hover:text-blue-700">
                        info@scharli-transport.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Adresse</p>
                      <p className="text-gray-600">
                        Scharli Transport GmbH<br />
                        Musterstraße 123<br />
                        12345 Musterstadt
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Öffnungszeiten</p>
                      <p className="text-gray-600">
                        Mo-Fr: 8:00 - 18:00<br />
                        Sa: 9:00 - 14:00<br />
                        So: Nach Vereinbarung
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">24/7 Notfallservice</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Bei dringenden Transporten erreichen Sie uns auch außerhalb der Geschäftszeiten.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Warum Scharli Transport?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Über 15 Jahre Erfahrung</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Vollversicherte Transporte</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Deutschlandweite Abdeckung</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Professionelles Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Faire und transparente Preise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;