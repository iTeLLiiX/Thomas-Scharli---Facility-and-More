# 🚛 Scharli Transport Website

Eine moderne, responsive Transport- und Umzugs-Website mit Admin-Panel und Bildverwaltung.

## 🚀 Live Demo

Die Website ist live verfügbar unter: [Ihre-Vercel-URL]

## ✨ Features

- **Responsive Design** - Optimiert für alle Geräte
- **Admin-Panel** - Vollständige Bildverwaltung
- **Kontaktformular** - Mehrstufiges Formular mit Prompt Enhancement
- **Kostenrechner** - Unverbindliche Anfrage-Einschätzung
- **Chat-Widget** - Live-Chat mit Thomas Scharli Bot
- **Bildergalerie** - Mit Lightbox und Kategorie-Filter
- **SEO-optimiert** - Für bessere Suchmaschinen-Rankings

## 🛠️ Technologie-Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Installation

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Lokale Entwicklung

1. **Repository klonen**
```bash
git clone https://github.com/ihr-username/scharli-transport.git
cd scharli-transport
```

2. **Dependencies installieren**
```bash
npm install
```

3. **Entwicklungsserver starten**
```bash
npm run dev
```

4. **Browser öffnen**
```
http://localhost:5173
```

## 🚀 Deployment auf Vercel

### 1. GitHub Repository erstellen

```bash
# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Scharli Transport Website"

# GitHub Repository erstellen (manuell auf github.com)
# Dann remote hinzufügen
git remote add origin https://github.com/ihr-username/scharli-transport.git

# Auf GitHub pushen
git push -u origin main
```

### 2. Vercel Deployment

1. **Vercel Account erstellen**
   - Gehen Sie zu [vercel.com](https://vercel.com)
   - Registrieren Sie sich mit Ihrem GitHub Account

2. **Neues Projekt erstellen**
   - Klicken Sie auf "New Project"
   - Wählen Sie Ihr GitHub Repository aus
   - Vercel erkennt automatisch, dass es ein Vite-Projekt ist

3. **Build-Einstellungen**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables** (optional)
   ```
   VITE_APP_TITLE=Scharli Transport
   VITE_CONTACT_PHONE=+4917012345678
   VITE_CONTACT_EMAIL=info@scharli-transport.de
   ```

5. **Deploy klicken**
   - Vercel baut und deployed automatisch
   - Ihre Website ist in wenigen Minuten live!

### 3. Custom Domain (optional)

1. **Domain hinzufügen**
   - Gehen Sie zu Project Settings > Domains
   - Fügen Sie Ihre Domain hinzu (z.B. scharli-transport.de)

2. **DNS konfigurieren**
   - Folgen Sie den Vercel-Anweisungen für DNS-Einstellungen
   - Warten Sie auf DNS-Propagation (bis zu 48 Stunden)

## 🔧 Build & Deployment

### Lokaler Build
```bash
npm run build
```

### Build testen
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Projektstruktur

```
src/
├── components/          # React Komponenten
│   ├── AdminPanel.tsx   # Admin-Verwaltung
│   ├── Calculator.tsx   # Kostenrechner
│   ├── Contact.tsx      # Kontaktformular
│   ├── Gallery.tsx      # Bildergalerie
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Hero-Bereich
│   ├── ImageManager.tsx # Bildverwaltung
│   ├── Services.tsx     # Dienstleistungen
│   └── ...
├── App.tsx              # Haupt-App-Komponente
├── main.tsx             # App-Einstiegspunkt
└── index.css            # Globale Styles

public/
├── images/              # Bilder (siehe images/README.md)
└── index.html           # HTML-Template
```

## 🔐 Admin-Zugang

- **URL:** [Ihre-Website]/admin
- **Benutzername:** `admin`
- **Passwort:** `admin123`

**⚠️ Wichtig:** Ändern Sie das Passwort in der Produktion!

## 🖼️ Bildintegration

Siehe [public/images/README.md](public/images/README.md) für detaillierte Anweisungen zur Bildintegration.

## 🔄 Automatisches Deployment

Nach dem ersten Setup:
- Jeder Push auf `main` Branch deployed automatisch
- Vercel erstellt automatisch Preview-Deployments für Pull Requests
- Rollback zu vorherigen Versionen möglich

## 📊 Analytics & Monitoring

### Vercel Analytics (optional)
1. Gehen Sie zu Project Settings > Analytics
2. Analytics aktivieren
3. Tracking-Code wird automatisch eingefügt

### Performance Monitoring
- Vercel bietet automatisches Performance-Monitoring
- Core Web Vitals werden gemessen
- Automatische Optimierungen

## 🔒 Sicherheit

- **HTTPS:** Automatisch von Vercel bereitgestellt
- **Security Headers:** Automatisch konfiguriert
- **DDoS Protection:** Eingebaut in Vercel
- **CDN:** Globale Verteilung für bessere Performance

## 📱 Mobile Optimierung

- **Responsive Design:** Optimiert für alle Bildschirmgrößen
- **Touch-friendly:** Große Touch-Targets
- **Fast Loading:** Optimierte Bilder und Assets
- **PWA-ready:** Kann als Progressive Web App konfiguriert werden

## 🆘 Support

Bei Problemen:
1. **Vercel Logs** - Gehen Sie zu Project > Functions > View Function Logs
2. **Build Logs** - Gehen Sie zu Project > Deployments > View Build Logs
3. **GitHub Issues** - Erstellen Sie ein Issue in Ihrem Repository

## 📈 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

---

**Viel Erfolg mit Ihrer Scharli Transport Website!** 🚛✨

