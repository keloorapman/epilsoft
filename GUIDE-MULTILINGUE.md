# 🌍 Guide Multilingue - Epilsoft

## Structure des URLs

Le site utilise une structure multilingue optimisée pour le SEO :

```
epilsoft.be/           → Français (langue par défaut)
epilsoft.be/en/        → Anglais
epilsoft.be/nl/        → Néerlandais
```

## 📁 Structure des dossiers

```
src/
├── i18n.ts                    # Fichier de traductions
├── pages/
│   ├── index.astro           # Page d'accueil FR
│   ├── services.astro        # Services FR
│   ├── en/
│   │   ├── index.astro       # Page d'accueil EN
│   │   └── services.astro    # Services EN
│   └── nl/
│       ├── index.astro       # Page d'accueil NL
│       └── services.astro    # Services NL
└── components/
    ├── Header.astro          # Utilise les traductions
    ├── Footer.astro          # Utilise les traductions
    └── LanguageSwitcher.astro # Sélecteur de langue
```

## 🔤 Ajouter des traductions

Éditez `src/i18n.ts` :

```typescript
export const translations = {
  fr: {
    nouveauTexte: 'Mon nouveau texte en français',
    // ...
  },
  en: {
    nouveauTexte: 'My new text in English',
    // ...
  },
  nl: {
    nouveauTexte: 'Mijn nieuwe tekst in het Nederlands',
    // ...
  }
};
```

## 📄 Créer une nouvelle page multilingue

### 1. Créer la page FR (par défaut)

`src/pages/nouvelle-page.astro` :

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { translations } from '../i18n';

const lang = 'fr';
const t = translations[lang];
---

<Layout 
  title="Titre de la page - Epilsoft"
  description="Description de la page"
  lang={lang}
>
  <Header lang={lang} />
  
  <main>
    <h1>{t.nouveauTexte}</h1>
    <!-- Votre contenu -->
  </main>
  
  <Footer lang={lang} />
</Layout>
```

### 2. Créer la page EN

`src/pages/en/nouvelle-page.astro` :

```astro
---
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { translations } from '../../i18n';

const lang = 'en';
const t = translations[lang];
---

<Layout 
  title="Page Title - Epilsoft"
  description="Page description"
  lang={lang}
  canonical="https://epilsoft.be/en/nouvelle-page"
>
  <Header lang={lang} />
  
  <main>
    <h1>{t.nouveauTexte}</h1>
    <!-- Your content -->
  </main>
  
  <Footer lang={lang} />
</Layout>
```

### 3. Créer la page NL

`src/pages/nl/nieuwe-pagina.astro` :

```astro
---
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { translations } from '../../i18n';

const lang = 'nl';
const t = translations[lang];
---

<Layout 
  title="Paginatitel - Epilsoft"
  description="Pagina beschrijving"
  lang={lang}
  canonical="https://epilsoft.be/nl/nieuwe-pagina"
>
  <Header lang={lang} />
  
  <main>
    <h1>{t.nouveauTexte}</h1>
    <!-- Uw inhoud -->
  </main>
  
  <Footer lang={lang} />
</Layout>
```

## 🔗 Liens entre langues

### Dans les composants

Utilisez le préfixe de langue :

```astro
---
const lang = 'en';
const langPrefix = lang === 'fr' ? '' : `/${lang}`;
---

<a href={`${langPrefix}/services`}>Services</a>
```

### Hreflang pour SEO

Ajoutez dans `Layout.astro` :

```astro
<!-- Alternate language versions -->
<link rel="alternate" hreflang="fr" href={`https://epilsoft.be${cleanPath}`} />
<link rel="alternate" hreflang="en" href={`https://epilsoft.be/en${cleanPath}`} />
<link rel="alternate" hreflang="nl" href={`https://epilsoft.be/nl${cleanPath}`} />
<link rel="alternate" hreflang="x-default" href={`https://epilsoft.be${cleanPath}`} />
```

## 🎨 Sélecteur de langue

Le composant `LanguageSwitcher.astro` est déjà intégré dans le Header.

### Personnalisation

Vous pouvez modifier le style dans `src/components/LanguageSwitcher.astro` :

```css
.lang-link.active {
  color: var(--white);
  background-color: var(--gold-primary);
}
```

## 📊 Organisation des traductions

### Groupes logiques

Organisez vos traductions par sections :

```typescript
export const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    
    // Hero section
    heroTitle: 'Titre principal',
    heroSubtitle: 'Sous-titre',
    
    // Services
    serviceTitle1: 'Service 1',
    serviceDesc1: 'Description du service 1',
    
    // CTA
    bookNow: 'Réserver maintenant',
    
    // Footer
    followUs: 'Suivez-nous',
  },
  // ...
};
```

## 🌐 Détection automatique de langue

Pour détecter la langue du navigateur (optionnel) :

```javascript
// Dans un script côté client
const userLang = navigator.language.split('-')[0]; // 'fr', 'en', 'nl'
const supportedLangs = ['fr', 'en', 'nl'];

if (supportedLangs.includes(userLang) && userLang !== 'fr') {
  window.location.href = `/${userLang}${window.location.pathname}`;
}
```

## 📱 URLs canoniques et SEO

Chaque page doit avoir :

1. **Canonical URL** - URL principale de la page
2. **Hreflang tags** - Liens vers les autres versions linguistiques
3. **Open Graph locale** - Pour les réseaux sociaux

Exemple dans `Layout.astro` :

```astro
<link rel="canonical" href={canonicalURL} />
<meta property="og:locale" content={lang === 'fr' ? 'fr_BE' : lang === 'nl' ? 'nl_BE' : 'en_GB'} />
```

## ✅ Checklist pour une nouvelle page

- [ ] Créer la version FR dans `src/pages/`
- [ ] Créer la version EN dans `src/pages/en/`
- [ ] Créer la version NL dans `src/pages/nl/`
- [ ] Ajouter les traductions dans `i18n.ts`
- [ ] Vérifier les liens internes
- [ ] Ajouter les meta tags (title, description)
- [ ] Tester le changement de langue
- [ ] Vérifier les canonical URLs

## 🎯 Exemple complet : Page Services

### 1. Ajouter les traductions

```typescript
// src/i18n.ts
export const translations = {
  fr: {
    servicesTitle: 'Nos Services',
    servicesIntro: 'Découvrez notre gamme complète',
    alexandrite: 'Laser Alexandrite',
    alexandriteDesc: 'Idéal pour les peaux claires',
    // ...
  },
  en: {
    servicesTitle: 'Our Services',
    servicesIntro: 'Discover our complete range',
    alexandrite: 'Alexandrite Laser',
    alexandriteDesc: 'Ideal for light skin',
    // ...
  },
  nl: {
    servicesTitle: 'Onze Diensten',
    servicesIntro: 'Ontdek ons volledig aanbod',
    alexandrite: 'Alexandriet Laser',
    alexandriteDesc: 'Ideaal voor lichte huid',
    // ...
  }
};
```

### 2. Créer `src/pages/services.astro` (FR)

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { translations } from '../i18n';

const lang = 'fr';
const t = translations[lang];
---

<Layout 
  title={`${t.servicesTitle} - Epilsoft`}
  description="Services d'épilation laser à Bruxelles"
  lang={lang}
>
  <Header lang={lang} />
  
  <main>
    <section class="services">
      <div class="container">
        <h1>{t.servicesTitle}</h1>
        <p>{t.servicesIntro}</p>
        
        <div class="service-card">
          <h3>{t.alexandrite}</h3>
          <p>{t.alexandriteDesc}</p>
        </div>
      </div>
    </section>
  </main>
  
  <Footer lang={lang} />
</Layout>
```

### 3. Créer `src/pages/en/services.astro` (EN)

```astro
---
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { translations } from '../../i18n';

const lang = 'en';
const t = translations[lang];
---

<Layout 
  title={`${t.servicesTitle} - Epilsoft`}
  description="Laser hair removal services in Brussels"
  lang={lang}
  canonical="https://epilsoft.be/en/services"
>
  <Header lang={lang} />
  
  <main>
    <section class="services">
      <div class="container">
        <h1>{t.servicesTitle}</h1>
        <p>{t.servicesIntro}</p>
        
        <div class="service-card">
          <h3>{t.alexandrite}</h3>
          <p>{t.alexandriteDesc}</p>
        </div>
      </div>
    </section>
  </main>
  
  <Footer lang={lang} />
</Layout>
```

### 4. Créer `src/pages/nl/diensten.astro` (NL)

```astro
---
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { translations } from '../../i18n';

const lang = 'nl';
const t = translations[lang];
---

<Layout 
  title={`${t.servicesTitle} - Epilsoft`}
  description="Laserontharing diensten in Brussel"
  lang={lang}
  canonical="https://epilsoft.be/nl/diensten"
>
  <Header lang={lang} />
  
  <main>
    <section class="services">
      <div class="container">
        <h1>{t.servicesTitle}</h1>
        <p>{t.servicesIntro}</p>
        
        <div class="service-card">
          <h3>{t.alexandrite}</h3>
          <p>{t.alexandriteDesc}</p>
        </div>
      </div>
    </section>
  </main>
  
  <Footer lang={lang} />
</Layout>
```

## 🚀 Résultat final

Votre site sera accessible en 3 langues :

- **Français** : `epilsoft.be/services`
- **Anglais** : `epilsoft.be/en/services`
- **Néerlandais** : `epilsoft.be/nl/diensten`

Avec un sélecteur de langue dans le header pour naviguer facilement ! 🎉

## 💡 Conseils

1. **Cohérence** : Gardez la même structure de page pour toutes les langues
2. **SEO** : Adaptez les URLs aux conventions de chaque langue (ex: `/diensten` en NL au lieu de `/services`)
3. **Tests** : Testez tous les liens après changement de langue
4. **Images** : Si nécessaire, créez des versions d'images avec texte dans chaque langue
5. **Dates/Nombres** : Utilisez la localisation appropriée (ex: 1.234,56 € en FR vs €1,234.56 en EN)

---

**Votre site multilingue est prêt ! 🌍**
