import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, Eye, BarChart3 } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing consent to not interfere with user experience
      const timer = setTimeout(() => setShowConsent(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setCookieSettings(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowConsent(false);
    setShowSettings(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookieSettings));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowConsent(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setCookieSettings(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowConsent(false);
    setShowSettings(false);
  };

  const cookieTypes = [
    {
      key: 'necessary',
      name: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich.',
      icon: Shield,
      required: true,
      examples: 'Session-Management, Sicherheit, CSRF-Schutz',
    },
    {
      key: 'functional',
      name: 'Funktionale Cookies',
      description: 'Ermöglichen erweiterte Funktionen wie Chat-Widget und Präferenzen.',
      icon: Settings,
      required: false,
      examples: 'Chat-Status, Spracheinstellungen, Formulardaten',
    },
    {
      key: 'analytics',
      name: 'Analyse Cookies',
      description: 'Helfen uns zu verstehen, wie Besucher die Website nutzen.',
      icon: BarChart3,
      required: false,
      examples: 'Google Analytics, Besucherstatistiken, Heatmaps',
    },
    {
      key: 'marketing',
      name: 'Marketing Cookies',
      description: 'Werden verwendet, um relevante Werbung anzuzeigen.',
      icon: Eye,
      required: false,
      examples: 'Facebook Pixel, Google Ads, Retargeting',
    },
  ];

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
      
      <div className="relative bg-white rounded-t-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
        {!showSettings ? (
          /* Simple Consent Banner */
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Cookie className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  🍪 Wir verwenden Cookies
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                  Notwendige Cookies sind für die Funktion der Website erforderlich. Andere helfen uns dabei, 
                  unsere Website zu verbessern und Ihnen relevante Inhalte zu zeigen.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Datenschutz bei Thomas Scharli:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Ihre Daten werden DSGVO-konform behandelt</li>
                    <li>✓ Keine Weitergabe an Dritte ohne Ihre Einwilligung</li>
                    <li>✓ Jederzeit widerrufbare Einstellungen</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Einstellungen
                  </button>
                </div>

                <div className="mt-4 text-xs text-gray-500">
                  Mehr Informationen in unserer{' '}
                  <a href="#" className="text-blue-600 underline">Datenschutzerklärung</a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Detailed Settings */
          <div className="max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">Cookie-Einstellungen</h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Wählen Sie, welche Cookies Sie zulassen möchten:
              </p>
            </div>

            <div className="p-6 space-y-6">
              {cookieTypes.map((type) => (
                <div key={type.key} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <type.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{type.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          <strong>Beispiele:</strong> {type.examples}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {type.required ? (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          Erforderlich
                        </span>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookieSettings[type.key as keyof typeof cookieSettings]}
                            onChange={(e) => setCookieSettings(prev => ({ 
                              ...prev, 
                              [type.key]: e.target.checked 
                            }))}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  onClick={handleRejectAll}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Alle ablehnen
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Auswahl speichern
                </button>
              </div>
              
              <div className="mt-4 text-center text-xs text-gray-500">
                Sie können Ihre Einstellungen jederzeit ändern. Weitere Informationen finden Sie in unserer{' '}
                <a href="#" className="text-blue-600 underline">Datenschutzerklärung</a>.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;