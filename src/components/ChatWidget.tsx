import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hallo! Ich bin Ihr digitaler Assistent. Wie kann ich Ihnen bei Ihren Transport- oder Lageranfragen helfen?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    "Transport anfragen",
    "Lagerung benötigt",
    "Preise erfragen",
    "Verfügbarkeit prüfen",
    "Termin vereinbaren"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('transport') || lowerMessage.includes('umzug')) {
      return "Gerne helfe ich Ihnen bei Ihrer Transportanfrage! Wir transportieren Möbel, Fahrzeuge (außer PKW) und verschiedene Güter. Welche Art von Transport benötigen Sie? Für ein individuelles Angebot können Sie unser Kontaktformular nutzen oder uns direkt anrufen.";
    }
    
    if (lowerMessage.includes('lager') || lowerMessage.includes('aufbewahrung')) {
      return "Wir bieten sichere Lagerung in unserem modernen Lagerhaus! Kurz- und Langzeitlagerung mit 24/7 Überwachung sind möglich. Was möchten Sie einlagern und für welchen Zeitraum?";
    }
    
    if (lowerMessage.includes('preis') || lowerMessage.includes('kosten')) {
      return "Alle unsere Preise werden individuell kalkuliert, da jeder Auftrag einzigartig ist. Faktoren wie Entfernung, Größe, besondere Anforderungen und Zeitrahmen fließen in die Berechnung ein. Nutzen Sie unser Kontaktformular für ein kostenloses Angebot!";
    }
    
    if (lowerMessage.includes('termin') || lowerMessage.includes('verfügbar')) {
      return "Für Terminabsprachen und Verfügbarkeitsanfragen rufen Sie uns gerne direkt an unter +49 (0) 123 456 789 oder nutzen Sie unser Kontaktformular. Wir sind Mo-Fr von 8:00-18:00 Uhr und Sa von 9:00-14:00 Uhr erreichbar.";
    }
    
    return "Vielen Dank für Ihre Nachricht! Für detaillierte Informationen und individuelle Angebote empfehle ich Ihnen, unser Kontaktformular auszufüllen oder uns direkt zu kontaktieren. Unser Team berät Sie gerne persönlich!";
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-40 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5" />
          <div>
            <div className="font-semibold">TS Support</div>
            <div className="text-xs text-blue-200">Online</div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies */}
      {messages.length <= 2 && (
        <div className="px-4 py-2">
          <div className="text-xs text-gray-500 mb-2">Häufige Anfragen:</div>
          <div className="flex flex-wrap gap-1">
            {quickReplies.slice(0, 3).map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ihre Nachricht..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Für komplexe Anfragen nutzen Sie gerne unser Kontaktformular.
        </p>
      </div>
    </div>
  );
};

export default ChatWidget;