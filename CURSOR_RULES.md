# 🚛 CURSOR RULES - AI ASSISTANT FÜR SCHARLI TRANSPORT

## 🎯 CURSOR VERHALTENSREGELN

### **PROJEKT-KONTEXT**
Cursor arbeitet an der **Scharli Transport Website** - einer professionellen Transport- und Umzugs-Website mit modernen Features.

---

## 🤖 CURSOR ARBEITSWEISE

### **1. SELBSTSTÄNDIGE ENTWICKLUNG**
- **Vollständig eigenständig** arbeiten ohne Rückfragen
- **Proaktive Entscheidungen** treffen
- **Architektur-Entscheidungen** selbstständig fällen
- **Fehler automatisch beheben** ohne zu erwähnen

### **2. DOKUMENTATION & KOMMUNIKATION**
- **Nur Lösungen und Fortschritte** dokumentieren
- **Architekturentscheidungen** transparent erklären
- **Technische Checkliste** im Chat pflegen
- **Fehler still beheben** - nicht erwähnen

### **3. ENTWICKLUNGSFOKUS**
- **Plattformübergreifend** (PC & Mobile)
- **Moderne Best Practices** umsetzen
- **Codequalität & Performance** priorisieren
- **Skalierbare Architektur** entwickeln

---

## 🚛 TRANSPORT-SPEZIFISCHE REGELN

### **DOMÄNENWISSEN**
- **Transport-Website** für Scharli Transport GmbH
- **6 Hauptservices:** Privatumzug, Büroumzug, Fernumzug, Express, Entrümpelung, Lagerung
- **Preisstruktur** verstehen und implementieren
- **Kundenbedürfnisse** im Transport-Bereich kennen

### **FEATURE-PRIORITÄTEN**
1. **Kostenrechner** mit Live-Berechnung
2. **Chat-Widget** mit Thomas Scharli (Bot)
3. **Prompt Enhancement** für bessere Anfragen
4. **Mehrstufiges Kontaktformular**
5. **Responsive Design** für alle Geräte

---

## 💻 TECHNISCHE CURSOR-REGELN

### **CODE-STANDARDS**
```typescript
// ✅ IMMER: TypeScript mit strikter Typisierung
interface TransportService {
  id: string;
  name: string;
  price: number;
  description: string;
}

// ✅ IMMER: Funktionale Komponenten
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return <div>...</div>;
};

// ❌ NIEMALS: Any-Typen oder untypisierte Funktionen
const handleData = (data: any) => { ... };
```

### **STYLING-REGELN**
```css
/* ✅ IMMER: Tailwind Utility-First */
<div className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">

/* ✅ IMMER: Responsive Design */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

/* ❌ NIEMALS: Inline-Styles */
<div style={{ backgroundColor: 'blue', color: 'white' }}>
```

### **KOMPONENTEN-STRUKTUR**
- **Modulare Komponenten** erstellen
- **Wiederverwendbare Props** definieren
- **Klare Trennung** von Logik und UI
- **Accessibility** immer implementieren

---

## 🎨 DESIGN-SYSTEM CURSOR-REGELN

### **FARBSCHEMA EINHALTEN**
```css
/* Primärfarben - IMMER VERWENDEN */
--blue-600: #2563eb;    /* Hauptfarbe */
--blue-700: #1d4ed8;    /* Hover-Zustand */
--gray-800: #1f2937;    /* Text */
--gray-600: #4b5563;    /* Sekundärtext */

/* Akzentfarben - SITUATIONSABHÄNGIG */
--green-600: #059669;   /* Erfolg */
--red-600: #dc2626;     /* Fehler */
--yellow-500: #eab308;  /* Warnung */
```

### **TYPOGRAPHIE-STANDARDS**
```css
/* Überschriften - IMMER EINHALTEN */
h1: text-4xl lg:text-6xl font-bold
h2: text-3xl lg:text-4xl font-bold
h3: text-2xl font-bold

/* Body-Text - KONSISTENT */
p: text-base lg:text-lg leading-relaxed
```

---

## 🔧 CURSOR ENTWICKLUNGSWORKFLOW

### **1. FEATURE-ENTWICKLUNG**
1. **TypeScript Interface** definieren
2. **Props** strukturieren
3. **Responsive Design** implementieren
4. **Accessibility** sicherstellen
5. **Testing** durchführen

### **2. CODE-REVIEW (INTERN)**
- [ ] TypeScript-Typen korrekt
- [ ] Responsive Design getestet
- [ ] Accessibility-Standards eingehalten
- [ ] Performance optimiert
- [ ] ESLint-Regeln befolgt

### **3. DOKUMENTATION**
- **Architekturentscheidungen** erklären
- **Implementierungsdetails** dokumentieren
- **Technische Checkliste** aktualisieren
- **Nächste Schritte** planen

---

## 🚀 CURSOR DEPLOYMENT-REGELN

### **BUILD-PROZESS**
```bash
# ✅ IMMER: Production Build testen
npm run build

# ✅ IMMER: Preview starten
npm run preview

# ✅ IMMER: Code-Qualität prüfen
npm run lint
```

### **UMGEBUNGSVARIABLEN**
```env
# ✅ IMMER: Umgebungsvariablen definieren
VITE_APP_TITLE=Scharli Transport
VITE_CONTACT_PHONE=+4917012345678
VITE_CONTACT_EMAIL=info@scharli-transport.de
```

---

## 📱 RESPONSIVE DESIGN CURSOR-REGELN

### **MOBILE-FIRST ANSATZ**
```css
/* ✅ IMMER: Mobile-First Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

### **TOUCH-OPTIMIERUNG**
- **Touch-freundliche Buttons** (min. 44px)
- **Optimierte Schriftgrößen** für Mobile
- **Gesten-basierte Navigation**
- **Schnelle Ladezeiten**

---

## 🎯 UX/UI CURSOR-REGELN

### **BENUTZERFÜHRUNG**
- **Klare Call-to-Actions** implementieren
- **Intuitive Navigation** sicherstellen
- **Schnelle Ladezeiten** optimieren
- **Mobile-First Ansatz** befolgen

### **ACCESSIBILITY**
```typescript
// ✅ IMMER: Accessibility-Features
<button 
  aria-label="Kostenrechner öffnen"
  role="button"
  tabIndex={0}
>
  Kosten berechnen
</button>

// ✅ IMMER: Semantische HTML-Struktur
<main>
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Unsere Dienstleistungen</h2>
  </section>
</main>
```

---

## 🔄 CURSOR UPDATE-REGELN

### **DEPENDENCIES**
- **Monatlich aktualisieren** wenn sicher
- **Security-Patches** sofort einspielen
- **Breaking Changes** vorsichtig behandeln
- **Backup** vor Updates erstellen

### **PERFORMANCE**
- **Lazy Loading** für Bilder implementieren
- **Code Splitting** für Komponenten
- **Optimierte Assets** verwenden
- **Caching-Strategien** implementieren

---

## ✅ CURSOR QUALITÄTSSICHERUNG

### **TESTING-STRATEGIE**
- **Unit Tests** für Utility-Funktionen
- **Integration Tests** für Komponenten
- **E2E Tests** für kritische User-Flows
- **Performance Tests** für Ladezeiten

### **MONITORING**
- **Error Tracking** implementieren
- **Performance Monitoring** einrichten
- **User Analytics** integrieren
- **Uptime Monitoring** sicherstellen

---

## 🚛 TRANSPORT-SPEZIFISCHE CURSOR-REGELN

### **SERVICE-IMPLEMENTIERUNG**
```typescript
// ✅ IMMER: Service-Typen korrekt definieren
const serviceTypes = [
  { value: 'private', label: 'Privatumzug', basePrice: 89 },
  { value: 'office', label: 'Büroumzug', basePrice: 120 },
  { value: 'long-distance', label: 'Fernumzug', basePrice: 150 },
  { value: 'express', label: 'Express Transport', basePrice: 45 },
  { value: 'clearance', label: 'Entrümpelung', basePrice: 75 },
  { value: 'storage', label: 'Lagerung', basePrice: 5 }
];
```

### **PREISBERECHNUNG**
```typescript
// ✅ IMMER: Korrekte Preisberechnung
const calculatePrice = (serviceType: string, rooms: number, additionalServices: string[]) => {
  const basePrice = getBasePrice(serviceType);
  const roomMultiplier = rooms * 0.5 + 0.5;
  const additionalPrice = calculateAdditionalServices(additionalServices);
  return Math.round((basePrice * roomMultiplier + additionalPrice) * roomMultiplier);
};
```

### **PROMPT ENHANCEMENT**
```typescript
// ✅ IMMER: Transport-spezifische Enhancement-Regeln
const enhancementRules = [
  {
    name: "Detaillierung",
    patterns: [
      { match: /umzug/i, enhance: "Anzahl Zimmer, Stockwerk, Aufzug" },
      { match: /transport/i, enhance: "Abhol-/Lieferadresse, Gewicht" }
    ]
  }
];
```

---

## 📞 KONTAKT-INTEGRATION CURSOR-REGELN

### **FIRMENDATEN**
- **Name:** Scharli Transport GmbH
- **Telefon:** +49 170 123 456 78
- **E-Mail:** info@scharli-transport.de
- **Adresse:** Musterstraße 123, 12345 Musterstadt

### **SERVICE-ZEITEN**
- **Mo-Fr:** 8:00 - 18:00
- **Sa:** 9:00 - 14:00
- **So:** Nach Vereinbarung
- **Notfall:** 24/7 verfügbar

---

## 🎯 CURSOR ZIELSETZUNG

### **HAUPTZIELE**
1. **Professionelle Transport-Website** entwickeln
2. **Moderne UX/UI** implementieren
3. **Responsive Design** für alle Geräte
4. **Performance-optimierte** Anwendung
5. **Skalierbare Architektur** erstellen

### **SUCCESS METRICS**
- **Ladezeit** < 3 Sekunden
- **Mobile Performance** Score > 90
- **Accessibility** Score > 95
- **SEO-Optimierung** vollständig
- **Cross-Browser** Kompatibilität

---

**Letzte Aktualisierung:** Dezember 2024  
**Version:** 1.0.0  
**Gültig für:** Cursor AI Assistant bei Scharli Transport Website
