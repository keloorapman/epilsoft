# ⚡ Démarrage Rapide Multilingue

## 🌍 Ton site est déjà multilingue !

Le projet est configuré pour **3 langues** :
- 🇫🇷 **Français** (défaut) : `epilsoft.be/`
- 🇬🇧 **Anglais** : `epilsoft.be/en/`
- 🇳🇱 **Néerlandais** : `epilsoft.be/nl/`

## ✅ Ce qui est déjà fait

✓ Sélecteur de langue dans le header  
✓ Header et Footer traduits  
✓ Pages d'accueil en FR, EN, NL  
✓ Système de traductions `i18n.ts`  
✓ URLs SEO-friendly  
✓ Hreflang tags pour Google  

## 🚀 Ajouter une page en 3 étapes

### Étape 1 : Ajouter les traductions

Édite `src/i18n.ts` :

```typescript
export const translations = {
  fr: {
    nouveauTitre: 'Mon nouveau titre',
  },
  en: {
    nouveauTitre: 'My new title',
  },
  nl: {
    nouveauTitre: 'Mijn nieuwe titel',
  }
};
```

### Étape 2 : Créer la page FR

`src/pages/ma-page.astro` :

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { translations } from '../i18n';

const lang = 'fr';
const t = translations[lang];
---

<Layout title="Ma Page - Epilsoft" description="Description" lang={lang}>
  <Header lang={lang} />
  <main>
    <h1>{t.nouveauTitre}</h1>
  </main>
  <Footer lang={lang} />
</Layout>
```

### Étape 3 : Créer les versions EN et NL

**EN** : `src/pages/en/ma-page.astro`  
**NL** : `src/pages/nl/mijn-pagina.astro`

Copie le même code en changeant :
- `const lang = 'en'` ou `'nl'`
- Les chemins : `'../../layouts/Layout.astro'`

## 📁 Structure simple

```
src/
├── i18n.ts              ← Toutes les traductions ici
├── pages/
│   ├── index.astro      ← Page FR
│   ├── services.astro   ← Services FR
│   ├── en/
│   │   ├── index.astro  ← Page EN
│   │   └── services.astro
│   └── nl/
│       ├── index.astro  ← Page NL
│       └── diensten.astro (services en NL)
```

## 🎯 Utiliser les traductions

Dans n'importe quel composant :

```astro
---
import { translations } from '../i18n';
const t = translations['fr']; // ou 'en', 'nl'
---

<h1>{t.heroTitle}</h1>
<p>{t.heroSubtitle}</p>
<button>{t.bookNow}</button>
```

## 🔗 Liens multilingues

Utilise le préfixe de langue :

```astro
---
const lang = 'en';
const prefix = lang === 'fr' ? '' : `/${lang}`;
---

<a href={`${prefix}/services`}>Services</a>
<!-- Résultat : /services (FR) ou /en/services (EN) -->
```

## 💡 Traductions disponibles

Déjà dans `i18n.ts` :

### Navigation
- `home`, `services`, `centers`, `about`, `contact`, `booking`

### Hero
- `heroTitle`, `heroSubtitle`, `heroCTA`

### Centres
- `uccleCenter`, `etterbeekCenter`, `address`, `phone`, `hours`

### CTA
- `bookNow`, `learnMore`, `contactUs`

### Footer
- `followUs`, `legal`, `privacy`, `rights`

## 🌐 URLs résultantes

Page Services :
- FR : `epilsoft.be/services`
- EN : `epilsoft.be/en/services`
- NL : `epilsoft.be/nl/diensten`

## ✨ Le sélecteur de langue

Déjà intégré dans le Header ! Les utilisateurs peuvent :
- Cliquer sur FR, EN ou NL
- Rester sur la même page dans une autre langue
- Voir la langue active (bouton doré)

## 🎨 Personnaliser le sélecteur

Édite `src/components/LanguageSwitcher.astro` :

```css
.lang-link.active {
  background-color: var(--gold-primary); /* Change cette couleur */
}
```

## 📖 Guide complet

Pour plus de détails, consulte [GUIDE-MULTILINGUE.md](GUIDE-MULTILINGUE.md)

## ⚙️ Configuration Astro

Déjà dans `astro.config.mjs` :

```javascript
i18n: {
  defaultLocale: 'fr',
  locales: ['fr', 'en', 'nl'],
  routing: {
    prefixDefaultLocale: false  // FR sans /fr/ dans l'URL
  }
}
```

## 🚀 C'est tout !

Tu peux maintenant :
1. Ajouter des traductions dans `i18n.ts`
2. Créer des pages en FR, EN, NL
3. Utiliser `{t.clé}` pour afficher les traductions

**Ton site multilingue est prêt ! 🌍**

---

**Besoin d'aide ?** Consulte le [GUIDE-MULTILINGUE.md](GUIDE-MULTILINGUE.md) pour des exemples complets.
