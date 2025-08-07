import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'none');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {!showDetails ? (
          // Simple consent banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-4">
              <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Datenschutz & Cookies
                </h3>
                <p className="text-gray-600 text-sm">
                  Wir verwenden nur technisch notwendige Cookies. Keine Tracking-Tools, 
                  keine Analyse-Software. Ihre Daten bleiben privat und sicher.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Details anzeigen
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
              >
                Nur notwendige
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        ) : (
          // Detailed consent view
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Datenschutz-Details
                </h3>
              </div>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-800">
                      Technisch notwendige Cookies
                    </h4>
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Ermöglichen grundlegende Website-Funktionen wie Kontaktformulare 
                    und Cookie-Einstellungen. Diese können nicht deaktiviert werden.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Analyse & Tracking
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Wir verwenden KEINE Analyse-Tools wie Google Analytics, 
                    Facebook Pixel oder ähnliche Tracking-Technologien.
                  </p>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                    Nicht verwendet
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Ihre Daten sind sicher
                  </h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Keine Weitergabe an Dritte</li>
                    <li>• Keine Profilerstellung</li>
                    <li>• Minimale Datenerfassung</li>
                    <li>• DSGVO-konform</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Kontaktformular
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Daten aus dem Kontaktformular werden nur zur Bearbeitung 
                    Ihrer Anfrage verwendet und nach Erledigung gelöscht.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2">
              <button
                onClick={handleReject}
                className="px-6 py-2 text-gray-600 hover:text-gray-700 text-sm font-medium"
              >
                Alle ablehnen
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
              >
                Nur notwendige Cookies
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;