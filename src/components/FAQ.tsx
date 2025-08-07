import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Phone, Clock, Euro, Truck } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Alle Fragen', icon: HelpCircle },
    { value: 'pricing', label: 'Preise & Kosten', icon: Euro },
    { value: 'services', label: 'Dienstleistungen', icon: Truck },
    { value: 'booking', label: 'Buchung & Termine', icon: Clock },
    { value: 'contact', label: 'Kontakt & Support', icon: Phone },
  ];

  const faqItems = [
    {
      id: 1,
      category: 'pricing',
      question: 'Wie berechnen sich die Kosten für meinen Umzug?',
      answer: 'Unsere Preise basieren auf mehreren Faktoren: Anzahl der Zimmer, Entfernung, zusätzliche Services und Zeitaufwand. Privatumzüge beginnen bei 89€/Stunde, Büroumzüge bei 120€/Stunde. Nutzen Sie unseren Kostenrechner für eine erste Einschätzung oder kontaktieren Sie uns für ein individuelles Angebot.',
    },
    {
      id: 2,
      category: 'pricing',
      question: 'Gibt es versteckte Kosten?',
      answer: 'Nein, wir arbeiten transparent. Alle Kosten werden im Voraus besprochen und schriftlich festgehalten. Eventuelle Zusatzkosten (z.B. für unvorhersehbare Mehrarbeiten) werden nur nach Rücksprache berechnet.',
    },
    {
      id: 3,
      category: 'services',
      question: 'Welche Dienstleistungen bieten Sie an?',
      answer: 'Wir bieten Privatumzüge, Büroumzüge, Fernumzüge, Express-Transport, Entrümpelungen und Lagerung. Zusätzlich: Verpackungsservice, Möbelmontage, Reinigungsservice und Zwischenlagerung. Was wir NICHT transportieren: Kraftfahrzeuge, Klaviere und Aquarien.',
    },
    {
      id: 4,
      category: 'services',
      question: 'Sind meine Sachen während des Transports versichert?',
      answer: 'Ja, alle Transporte sind vollversichert. Wir haben eine Transportversicherung die Schäden bis zu 500.000€ abdeckt. Bei besonders wertvollen Gegenständen können wir eine zusätzliche Versicherung arrangieren.',
    },
    {
      id: 5,
      category: 'booking',
      question: 'Wie weit im Voraus muss ich buchen?',
      answer: 'Für optimale Terminplanung empfehlen wir eine Buchung 2-3 Wochen im Voraus. Express-Services sind oft auch kurzfristiger möglich. In Notfällen versuchen wir auch Same-Day Services zu ermöglichen.',
    },
    {
      id: 6,
      category: 'booking',
      question: 'Können Sie auch am Wochenende oder an Feiertagen arbeiten?',
      answer: 'Ja, wir arbeiten auch an Wochenenden und Feiertagen. Für diese Termine fällt ein Aufschlag von 25% an. Besonders für Büroumzüge ist der Wochenendservice sehr beliebt.',
    },
    {
      id: 7,
      category: 'services',
      question: 'Wie läuft ein Umzug mit Ihnen ab?',
      answer: 'Nach Ihrer Anfrage führen wir eine Besichtigung durch (vor Ort oder virtuell), erstellen ein Angebot, planen den Umzug detailliert, führen den Transport durch und übergeben alles ordnungsgemäß am Zielort. Sie erhalten eine Checkliste mit allen wichtigen Schritten.',
    },
    {
      id: 8,
      category: 'pricing',
      question: 'Kann ich bei der Kostenkalkulation sparen?',
      answer: 'Ja, durch gute Vorbereitung: Kartons selbst packen, Möbel demontieren, Halteverbotszonen beantragen, flexible Terminwahl (Mo-Do günstiger). Wir beraten Sie gerne zu Einsparmöglichkeiten.',
    },
    {
      id: 9,
      category: 'services',
      question: 'Bieten Sie auch internationale Umzüge an?',
      answer: 'Ja, wir führen Umzüge in alle EU-Nachbarländer durch. Besonders häufig: Österreich, Schweiz, Niederlande, Belgien. Wir übernehmen auch die komplette Zollabwicklung.',
    },
    {
      id: 10,
      category: 'contact',
      question: 'Wie erreiche ich Sie in Notfällen?',
      answer: 'Unsere Hotline +49 170 123 456 78 ist Mo-Fr 7-19 Uhr und Sa 8-16 Uhr besetzt. Für Notfälle außerhalb der Geschäftszeiten haben wir einen 24/7 Bereitschaftsdienst.',
    },
    {
      id: 11,
      category: 'services',
      question: 'Was passiert wenn etwas zu Bruch geht?',
      answer: 'Schäden werden sofort dokumentiert und über unsere Versicherung reguliert. In über 15 Jahren hatten wir eine Schadenquote von unter 0,1%. Sollte doch etwas passieren, regeln wir das schnell und unkompliziert.',
    },
    {
      id: 12,
      category: 'booking',
      question: 'Muss ich beim Umzug anwesend sein?',
      answer: 'Bei Privatumzügen sollte mindestens eine verantwortliche Person anwesend sein. Bei Büroumzügen reicht oft ein Ansprechpartner. Wir können auch mit Ihren Vertretungen arbeiten, benötigen dann aber schriftliche Vollmachten.',
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Häufige Fragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu 
            unseren Dienstleistungen, Preisen und Abläufen.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Suchen Sie nach einem Thema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Keine Ergebnisse gefunden
              </h3>
              <p className="text-gray-600">
                Versuchen Sie es mit anderen Suchbegriffen oder kontaktieren Sie uns direkt.
              </p>
              <a
                href="tel:+4917012345678"
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Direkt anrufen
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Ihre Frage war nicht dabei?
              </h3>
              <p className="text-blue-100">
                Kein Problem! Unser erfahrenes Team hilft Ihnen gerne persönlich weiter.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Telefonberatung</h4>
                <p className="text-sm text-blue-100 mb-3">
                  Mo-Fr 7-19 Uhr<br />Sa 8-16 Uhr
                </p>
                <a
                  href="tel:+4917012345678"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
                >
                  +49 170 123 456 78
                </a>
              </div>

              <div className="text-center">
                <HelpCircle className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-sm text-blue-100 mb-3">
                  Sofortige Hilfe<br />Online verfügbar
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors">
                  Chat starten
                </button>
              </div>

              <div className="text-center">
                <Euro className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Kostenvoranschlag</h4>
                <p className="text-sm text-blue-100 mb-3">
                  Unverbindlich<br />Kostenlos
                </p>
                <a
                  href="#contact"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors"
                >
                  Angebot anfordern
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Beliebte Themen
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Umzugskosten',
              'Versicherung',
              'Terminbuchung',
              'Verpackungsservice',
              'Möbelmontage',
              'Internationale Umzüge',
              'Express Service',
              'Lagerung',
            ].map((topic, idx) => (
              <span
                key={idx}
                className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;