import React from 'react';
import { Send } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Individuelles Angebot gewünscht?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Jeder Auftrag ist einzigartig. Lassen Sie uns gemeinsam die beste Lösung für Sie finden.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2 mx-auto">
            <Send className="w-5 h-5" />
            <span>Kostenlose Beratung vereinbaren</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 