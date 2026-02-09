# 📊 Structure Visuelle du Projet Multilingue

## 🌐 Architecture des URLs

```
https://epilsoft.be/
├── /                          → 🇫🇷 Français (défaut)
│   ├── /services
│   ├── /centres
│   ├── /about
│   └── /contact
│
├── /en/                       → 🇬🇧 Anglais
│   ├── /en/services
│   ├── /en/centers
│   ├── /en/about
│   └── /en/contact
│
└── /nl/                       → 🇳🇱 Néerlandais
    ├── /nl/diensten
    ├── /nl/centra
    ├── /nl/over-ons
    └── /nl/contact
```

## 📁 Structure des Fichiers

```
epilsoft/
│
├── 📄 Configuration
│   ├── astro.config.mjs       → Config i18n
│   ├── package.json
│   └── tsconfig.json
│
├── 📚 Documentation
│   ├── README.md              → Guide complet
│   ├── INSTALLATION.md        → Installation
│   ├── DEMARRAGE-RAPIDE.md    → Quick start
│   ├── GUIDE-MULTILINGUE.md   → Guide multilingue complet ⭐
│   ├── QUICK-START-MULTILINGUAL.md  → Quick start multilingue ⭐
│   ├── BEST-PRACTICES.md      → Bonnes pratiques
│   └── SEO-GUIDE.md           → Guide SEO
│
├── 📂 public/                 → Assets statiques
│   ├── favicon.svg
│   ├── robots.txt
│   ├── images/               → Vos images
│   └── fonts/                → Vos polices
│
└── 📂 src/                    → Code source
    │
    ├── 🌍 i18n.ts            → TRADUCTIONS ⭐
    │   └── translations { fr, en, nl }
    │
    ├── 📄 pages/             → Pages du site
    │   │
    │   ├── 🇫🇷 Français (racine)
    │   │   ├── index.astro
    │   │   ├── services.astro
    │   │   └── centres.astro
    │   │
    │   ├── 🇬🇧 en/
    │   │   ├── index.astro
    │   │   ├── services.astro
    │   │   └── centers.astro
    │   │
    │   └── 🇳🇱 nl/
    │       ├── index.astro
    │       ├── diensten.astro
    │       └── centra.astro
    │
    ├── 🧩 components/        → Composants réutilisables
    │   ├── Header.astro      → Navigation (multilingue) ⭐
    │   ├── Footer.astro      → Pied de page (multilingue) ⭐
    │   └── LanguageSwitcher.astro → Sélecteur de langue ⭐
    │
    ├── 📐 layouts/           → Templates de page
    │   └── Layout.astro      → Layout principal (SEO + hreflang) ⭐
    │
    └── 🎨 styles/            → CSS
        └── global.css        → Styles globaux + variables Epilsoft
```

## 🔄 Flux de Traduction

```
┌─────────────────────────────────────────────────────────┐
│  1. Utilisateur visite epilsoft.be/                    │
│     ou epilsoft.be/en/ ou epilsoft.be/nl/              │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  2. Astro détecte la langue depuis l'URL               │
│     FR = pas de préfixe                                │
│     EN = /en/                                          │
│     NL = /nl/                                          │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  3. Page charge Layout.astro avec lang="xx"            │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  4. Header et Footer reçoivent lang="xx"               │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  5. Composants importent translations depuis i18n.ts   │
│     const t = translations[lang]                       │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  6. Affichage avec {t.clé}                             │
│     <h1>{t.heroTitle}</h1>                             │
└─────────────────────────────────────────────────────────┘
```

## 🎯 Composants Multilingues

### Header.astro
```
┌──────────────────────────────────────┐
│  Logo  │  Navigation  │  FR EN NL   │
│ Epilsoft│ Home Services│  [Switcher] │
└──────────────────────────────────────┘
         ↓           ↓            ↓
    Vers page  Traductions  Change langue
```

### Footer.astro
```
┌─────────────────────────────────────────┐
│  Centre Uccle │ Centre Etterbeek │ ... │
│   (traduit)   │    (traduit)     │     │
├─────────────────────────────────────────┤
│ © 2024 Epilsoft | Legal | Privacy      │
│                  (traduit)              │
└─────────────────────────────────────────┘
```

### LanguageSwitcher.astro
```
┌────────┬────────┬────────┐
│   FR   │   EN   │   NL   │  ← Cliquable
└────────┴────────┴────────┘
   🟡       ⚪       ⚪       ← Active = doré
```

## 📝 Fichier i18n.ts

```typescript
translations = {
  ┌─────────────────────────────┐
  │ FR (Français)               │
  │ ├── home: 'Accueil'         │
  │ ├── services: 'Services'    │
  │ └── bookNow: 'Réserver'     │
  └─────────────────────────────┘
  
  ┌─────────────────────────────┐
  │ EN (English)                │
  │ ├── home: 'Home'            │
  │ ├── services: 'Services'    │
  │ └── bookNow: 'Book Now'     │
  └─────────────────────────────┘
  
  ┌─────────────────────────────┐
  │ NL (Nederlands)             │
  │ ├── home: 'Home'            │
  │ ├── services: 'Diensten'    │
  │ └── bookNow: 'Boek Nu'      │
  └─────────────────────────────┘
}
```

## 🔍 SEO : Hreflang Tags

Chaque page inclut automatiquement :

```html
<link rel="alternate" hreflang="fr" href="https://epilsoft.be/services" />
<link rel="alternate" hreflang="en" href="https://epilsoft.be/en/services" />
<link rel="alternate" hreflang="nl" href="https://epilsoft.be/nl/diensten" />
<link rel="alternate" hreflang="x-default" href="https://epilsoft.be/services" />
```

Cela indique à Google :
- ✅ Versions linguistiques disponibles
- ✅ URL par défaut (x-default)
- ✅ Pas de contenu dupliqué

## 🎨 Workflow : Ajouter une Page

```
1. Créer les traductions
   │
   ▼
   src/i18n.ts
   + nouveauTitre: { fr, en, nl }

2. Créer la page FR
   │
   ▼
   src/pages/nouvelle-page.astro
   import { translations }
   const t = translations['fr']

3. Créer la page EN
   │
   ▼
   src/pages/en/new-page.astro
   const t = translations['en']

4. Créer la page NL
   │
   ▼
   src/pages/nl/nieuwe-pagina.astro
   const t = translations['nl']

5. Tester !
   │
   ▼
   npm run dev
   Vérifier : / , /en/ , /nl/
```

## 🚀 Résultat Final

```
┌────────────────────────────────────────────────────────┐
│                    EPILSOFT.BE                         │
├────────────────────────────────────────────────────────┤
│                                                         │
│  🇫🇷 Visiteur français    →  epilsoft.be/              │
│  🇬🇧 Visiteur anglais     →  epilsoft.be/en/           │
│  🇳🇱 Visiteur néerlandais →  epilsoft.be/nl/           │
│                                                         │
│  Sélecteur de langue visible partout                   │
│  Navigation traduite automatiquement                   │
│  SEO optimisé pour chaque langue                       │
│  URLs propres et logiques                              │
│                                                         │
└────────────────────────────────────────────────────────┘
```

## ✨ Points Clés

| Aspect | Solution |
|--------|----------|
| **Traductions** | Centralisées dans `i18n.ts` |
| **URLs** | FR: `/page`, EN: `/en/page`, NL: `/nl/page` |
| **Navigation** | Sélecteur de langue dans Header |
| **SEO** | Hreflang tags automatiques |
| **Maintenance** | Une modification → 3 langues |
| **Performance** | Même score PageSpeed pour toutes |

---

**Ton site multilingue professionnel est prêt ! 🌍✨**
