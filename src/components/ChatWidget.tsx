import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, Sparkles } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPromptEnhancer, setShowPromptEnhancer] = useState(false);
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hallo! Ich bin Thomas vom Scharli Transport-Team. Wie kann ich Ihnen heute helfen?',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    { text: 'Kostenvoranschlag anfordern', action: 'quote' },
    { text: 'Termin vereinbaren', action: 'appointment' },
    { text: 'Service-Informationen', action: 'services' },
    { text: 'Notfallservice', action: 'emergency' },
    { text: 'Prompt Enhancer nutzen', action: 'enhancer' },
  ];

  const botResponses: Record<string, string> = {
    quote: 'Gerne erstelle ich Ihnen ein kostenloses Angebot! Nutzen Sie unseren Kostenrechner oder rufen Sie uns direkt an: +49 170 123 456 78',
    appointment: 'Für einen Termin können Sie uns anrufen oder das Kontaktformular ausfüllen. Wir melden uns innerhalb von 24 Stunden zurück!',
    services: 'Wir bieten Privatumzüge, Büroumzüge, Fernumzüge, Express-Transport, Entrümpelung und Lagerung. Was interessiert Sie besonders?',
    emergency: '🚨 Bei Notfällen erreichen Sie uns 24/7 unter +49 170 123 456 78. Wir sind innerhalb von 2 Stunden vor Ort!',
    enhancer: 'Ich öffne den Prompt Enhancer für Sie. Dort können Sie Ihre Anfrage detaillierter beschreiben und erhalten automatische Verbesserungsvorschläge.',
    default: 'Vielen Dank für Ihre Nachricht! Für detaillierte Beratung rufen Sie uns gerne an: +49 170 123 456 78 oder nutzen Sie unser Kontaktformular.',
  };

  // Transport-spezifische Enhancement-Regeln
  const enhancementRules = [
    {
      name: "Detaillierung",
      patterns: [
        { match: /umzug/i, enhance: "Bitte spezifizieren Sie: Anzahl Zimmer, Stockwerk, Aufzug vorhanden, Parkmöglichkeiten" },
        { match: /transport/i, enhance: "Geben Sie an: Abhol- und Lieferadresse, Gewicht/Volumen, Fragilität der Güter" },
        { match: /entrümpelung/i, enhance: "Beschreiben Sie: Wohnungsgröße, Art der Gegenstände, Wertanrechnung gewünscht" }
      ]
    },
    {
      name: "Zeitplanung",
      patterns: [
        { match: /dringend|schnell|sofort/i, enhance: "Wann genau benötigen Sie den Service? (Datum und Uhrzeit)" },
        { match: /termin/i, enhance: "Welche Termine kommen für Sie in Frage? (Flexibilität angeben)" }
      ]
    },
    {
      name: "Zusatzleistungen",
      patterns: [
        { match: /verpackung|packen/i, enhance: "Benötigen Sie Verpackungsmaterial und -service?" },
        { match: /montage|aufbau/i, enhance: "Soll Möbelmontage/-demontage inklusive sein?" },
        { match: /reinigung/i, enhance: "Wünschen Sie Reinigungsservice nach dem Umzug?" }
      ]
    }
  ];

  const enhancePrompt = (input: string) => {
    let enhanced = input;
    let additions: string[] = [];

    // Wende Enhancement-Regeln an
    enhancementRules.forEach(rule => {
      rule.patterns.forEach(pattern => {
        if (pattern.match.test(input)) {
          additions.push(pattern.enhance);
        }
      });
    });

    // Füge Standard-Enhancements hinzu
    if (!input.includes('Adresse') && !input.includes('adresse')) {
      additions.push("Bitte geben Sie Abhol- und Lieferadresse an");
    }

    if (!input.includes('Kontakt') && !input.includes('kontakt')) {
      additions.push("Wie können wir Sie am besten erreichen? (Telefon/E-Mail)");
    }

    // Erstelle den erweiterten Prompt
    if (additions.length > 0) {
      enhanced += "\n\n**Zusätzliche Informationen benötigt:**\n" + 
        additions.map((addition, index) => `${index + 1}. ${addition}`).join('\n');
    }

    return enhanced;
  };

  const sendMessage = (message: string) => {
    const newMessage = {
      id: Date.now(),
      type: 'user',
      message,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const response = botResponses[message] || botResponses.default;
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'enhancer') {
      setShowPromptEnhancer(true);
      sendMessage(action);
    } else {
      sendMessage(action);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
    }
  };

  const handlePromptEnhance = () => {
    if (inputMessage.trim()) {
      const enhanced = enhancePrompt(inputMessage);
      setEnhancedPrompt(enhanced);
      setShowPromptEnhancer(false);
    }
  };

  const useEnhancedPrompt = () => {
    if (enhancedPrompt) {
      sendMessage(enhancedPrompt);
      setEnhancedPrompt('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <User className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold">Thomas Scharli</h3>
                <p className="text-xs text-blue-100">Online • Antwortet sofort</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('de-DE', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickActions.map((action) => (
                <button
                  key={action.action}
                  onClick={() => handleQuickAction(action.action)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                >
                  {action.text}
                </button>
              ))}
            </div>

            {/* Prompt Enhancer */}
            {showPromptEnhancer && (
              <div className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Prompt Enhancer</span>
                </div>
                
                {!enhancedPrompt ? (
                  <div className="space-y-2">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Beschreiben Sie Ihr Transport-Anliegen..."
                      className="w-full h-20 p-2 text-xs border border-gray-300 rounded resize-none"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={handlePromptEnhance}
                        disabled={!inputMessage.trim()}
                        className="flex-1 bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
                      >
                        Erweitern
                      </button>
                      <button
                        onClick={() => setShowPromptEnhancer(false)}
                        className="bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded hover:bg-gray-400"
                      >
                        Abbrechen
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-xs bg-white p-2 rounded border">
                      <pre className="whitespace-pre-wrap text-gray-700">{enhancedPrompt}</pre>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={useEnhancedPrompt}
                        className="flex-1 bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700"
                      >
                        Verwenden
                      </button>
                      <button
                        onClick={() => {
                          setEnhancedPrompt('');
                          setShowPromptEnhancer(false);
                        }}
                        className="bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded hover:bg-gray-400"
                      >
                        Abbrechen
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Nachricht eingeben..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;