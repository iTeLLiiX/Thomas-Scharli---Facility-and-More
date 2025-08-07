import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check, RotateCcw } from 'lucide-react';

interface PromptEnhancerProps {
  onEnhancedPrompt: (prompt: string) => void;
  placeholder?: string;
  className?: string;
}

const PromptEnhancer: React.FC<PromptEnhancerProps> = ({
  onEnhancedPrompt,
  placeholder = "Beschreiben Sie Ihr Transport-Anliegen...",
  className = ""
}) => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [copied, setCopied] = useState(false);

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
    },
    {
      name: "Spezielle Anforderungen",
      patterns: [
        { match: /piano|klavier/i, enhance: "Piano-Transport erfordert Spezialausrüstung. Stockwerk und Zugang beschreiben" },
        { match: /kunst|antiquität/i, enhance: "Für wertvolle Gegenstände: Klimakontrolle und Spezialverpackung nötig" },
        { match: /it|computer|server/i, enhance: "IT-Equipment erfordert ESD-Schutz und Klimakontrolle" }
      ]
    }
  ];

  const enhancePrompt = async () => {
    if (!inputPrompt.trim()) return;

    setIsEnhancing(true);
    
    // Simuliere Verarbeitungszeit
    await new Promise(resolve => setTimeout(resolve, 1500));

    let enhanced = inputPrompt;
    let additions: string[] = [];

    // Wende Enhancement-Regeln an
    enhancementRules.forEach(rule => {
      rule.patterns.forEach(pattern => {
        if (pattern.match.test(inputPrompt)) {
          additions.push(pattern.enhance);
        }
      });
    });

    // Füge Standard-Enhancements hinzu
    if (!inputPrompt.includes('Adresse') && !inputPrompt.includes('adresse')) {
      additions.push("Bitte geben Sie Abhol- und Lieferadresse an");
    }

    if (!inputPrompt.includes('Kontakt') && !inputPrompt.includes('kontakt')) {
      additions.push("Wie können wir Sie am besten erreichen? (Telefon/E-Mail)");
    }

    // Erstelle den erweiterten Prompt
    if (additions.length > 0) {
      enhanced += "\n\n**Zusätzliche Informationen benötigt:**\n" + 
        additions.map((addition, index) => `${index + 1}. ${addition}`).join('\n');
    }

    // Füge professionelle Formatierung hinzu
    enhanced += "\n\n**Service-Anfrage für Scharli Transport**\n" +
      "Datum: " + new Date().toLocaleDateString('de-DE') + "\n" +
      "Status: Unverbindliche Anfrage";

    setEnhancedPrompt(enhanced);
    setIsEnhancing(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(enhancedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Fehler beim Kopieren:', err);
    }
  };

  const resetForm = () => {
    setInputPrompt('');
    setEnhancedPrompt('');
    setCopied(false);
  };

  const useEnhancedPrompt = () => {
    onEnhancedPrompt(enhancedPrompt);
    resetForm();
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">Prompt Enhancer</h3>
      </div>

      {/* Input Bereich */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ihre Anfrage
          </label>
          <textarea
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder={placeholder}
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={isEnhancing}
          />
        </div>

        <div className="flex space-x-3">
          <button
            onClick={enhancePrompt}
            disabled={!inputPrompt.trim() || isEnhancing}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isEnhancing ? (
              <>
                <RotateCcw className="h-4 w-4 animate-spin" />
                <span>Erweitere...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Prompt erweitern</span>
              </>
            )}
          </button>

          {inputPrompt && (
            <button
              onClick={resetForm}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Zurücksetzen
            </button>
          )}
        </div>
      </div>

      {/* Enhanced Prompt Anzeige */}
      {enhancedPrompt && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-800">Erweiterte Anfrage</h4>
            <div className="flex space-x-2">
              <button
                onClick={copyToClipboard}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Kopieren"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
              {enhancedPrompt}
            </pre>
          </div>

          <button
            onClick={useEnhancedPrompt}
            className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center space-x-2"
          >
            <Send className="h-4 w-4" />
            <span>Erweiterte Anfrage verwenden</span>
          </button>
        </div>
      )}

      {/* Enhancement-Tipps */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-semibold text-blue-800 mb-2">💡 Tipps für bessere Anfragen:</h4>
        <ul className="text-xs text-blue-700 space-y-1">
          <li>• Erwähnen Sie die Art des Transports (Umzug, Express, etc.)</li>
          <li>• Geben Sie grobe Abmessungen oder Zimmeranzahl an</li>
          <li>• Nennen Sie besondere Anforderungen (Piano, Kunst, etc.)</li>
          <li>• Geben Sie Ihre gewünschte Zeitplanung an</li>
        </ul>
      </div>
    </div>
  );
};

export default PromptEnhancer;

