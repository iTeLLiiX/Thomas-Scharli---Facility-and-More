import React, { useState } from 'react';
import { Calculator as CalcIcon, MapPin, Home, Clock, Euro, Send } from 'lucide-react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    fromCity: '',
    toCity: '',
    rooms: '',
    date: '',
    additionalServices: [] as string[],
  });
  const [result, setResult] = useState<null | { estimatedDuration: string; complexity: string; recommendations: string[] }>(null);

  const serviceTypes = [
    { value: 'private', label: 'Privatumzug', icon: '🏠' },
    { value: 'office', label: 'Büroumzug', icon: '🏢' },
    { value: 'long-distance', label: 'Fernumzug', icon: '🚛' },
    { value: 'express', label: 'Express Transport', icon: '⚡' },
    { value: 'clearance', label: 'Entrümpelung', icon: '🧹' },
  ];

  const additionalServices = [
    { value: 'packing', label: 'Verpackungsservice', description: 'Professionelle Verpackung und Material' },
    { value: 'mounting', label: 'Möbelmontage', description: 'Auf- und Abbau von Möbeln' },
    { value: 'cleaning', label: 'Reinigungsservice', description: 'Nachumzugsreinigung' },
    { value: 'storage', label: 'Zwischenlagerung', description: 'Sichere Lagerung' },
    { value: 'disposal', label: 'Entsorgungsservice', description: 'Fachgerechte Entsorgung' },
  ];

  const calculateEstimate = () => {
    const selectedService = serviceTypes.find(s => s.value === formData.serviceType);
    if (!selectedService || !formData.rooms) return;

    const roomCount = parseInt(formData.rooms);
    const serviceCount = formData.additionalServices.length;
    
    // Berechne geschätzte Dauer
    let baseHours = roomCount * 2 + 2;
    if (formData.serviceType === 'office') baseHours *= 1.5;
    if (formData.serviceType === 'long-distance') baseHours *= 0.5; // Nur Transport-Zeit
    
    const estimatedDuration = `${Math.ceil(baseHours)} Stunden`;
    
    // Bestimme Komplexität
    let complexity = 'Standard';
    if (roomCount > 4 || serviceCount > 2) complexity = 'Erweitert';
    if (formData.serviceType === 'long-distance' || formData.serviceType === 'office') complexity = 'Komplex';
    
    // Empfehlungen
    const recommendations = [];
    if (roomCount > 3) recommendations.push('Frühzeitige Terminplanung empfohlen');
    if (serviceCount > 2) recommendations.push('Detaillierte Beratung vor Ort sinnvoll');
    if (formData.serviceType === 'long-distance') recommendations.push('Zwischenlagerung möglich');
    if (formData.additionalServices.includes('packing')) recommendations.push('Verpackungsmaterial wird gestellt');
    
    setResult({
      estimatedDuration,
      complexity,
      recommendations,
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service],
    }));
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Unverbindliche Anfrage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erhalten Sie eine erste Einschätzung für Ihren Transport. 
            Für ein detailliertes Angebot kontaktieren Sie uns gerne persönlich.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <CalcIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Anfrage-Einschätzung</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Form */}
              <div className="space-y-6">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Art der Dienstleistung
                  </label>
                  <div className="space-y-2">
                    {serviceTypes.map((service) => (
                      <label key={service.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="serviceType"
                          value={service.value}
                          onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                          className="mr-3 text-blue-600"
                        />
                        <span className="text-lg mr-2">{service.icon}</span>
                        <span className="font-medium">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Von
                    </label>
                    <input
                      type="text"
                      value={formData.fromCity}
                      onChange={(e) => setFormData(prev => ({ ...prev, fromCity: e.target.value }))}
                      placeholder="Stadt/Ort"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Nach
                    </label>
                    <input
                      type="text"
                      value={formData.toCity}
                      onChange={(e) => setFormData(prev => ({ ...prev, toCity: e.target.value }))}
                      placeholder="Stadt/Ort"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Rooms and Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Home className="inline h-4 w-4 mr-1" />
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
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Gewünschtes Datum
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Zusatzleistungen (optional)
                  </label>
                  <div className="space-y-2">
                    {additionalServices.map((service) => (
                      <label key={service.value} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service.value)}
                          onChange={() => handleServiceToggle(service.value)}
                          className="mr-3 mt-1 text-blue-600"
                        />
                        <div>
                          <div className="font-medium">{service.label}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calculateEstimate}
                  disabled={!formData.serviceType || !formData.rooms}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <CalcIcon className="h-5 w-5" />
                  <span>Einschätzung erhalten</span>
                </button>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                {result ? (
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Ihre Einschätzung</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-semibold text-blue-800">Geschätzte Dauer</div>
                          <div className="text-blue-600">{result.estimatedDuration}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <Euro className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-semibold text-green-800">Komplexität</div>
                          <div className="text-green-600">{result.complexity}</div>
                        </div>
                      </div>

                      {result.recommendations.length > 0 && (
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <div className="font-semibold text-yellow-800 mb-2">Empfehlungen</div>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            {result.recommendations.map((rec, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-yellow-600">•</span>
                                <span>{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Hinweis:</strong> Dies ist eine unverbindliche Einschätzung. 
                        Für ein detailliertes Angebot kontaktieren Sie uns gerne.
                      </p>
                      <a
                        href="#contact"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Send className="h-4 w-4" />
                        <span>Detailliertes Angebot anfordern</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-6 h-full flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <CalcIcon className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                      <p>Füllen Sie das Formular aus, um eine Einschätzung zu erhalten</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;