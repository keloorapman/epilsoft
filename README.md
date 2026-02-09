# 🌟 Epilsoft - Projet Astro avec Style Complet

Site web pour Epilsoft, centre d'épilation laser à Bruxelles, avec le **style visuel authentique d'epilsoft.be**.

## ✨ Nouveau : Style Epilsoft Complet !

Ce projet utilise maintenant **le design complet d'Epilsoft** :
- ✅ Typographie : **Kanit + DM Sans**
- ✅ Couleurs : **Palette or Epilsoft** (#8A7538, #D8B25A, #9F6E22)
- ✅ Composants : **Hero, ServiceCard, ContentSection**
- ✅ Pages exemples : **Accueil, Services, Contact**
- ✅ Design : **Moderne, élégant, professionnel**

**👉 [Voir NOUVEAU-STYLE-EPILSOFT.md](NOUVEAU-STYLE-EPILSOFT.md) pour découvrir tous les changements !**

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du projet

```
epilsoft/
├── public/              # Assets statiques (images, fonts, etc.)
│   ├── fonts/
│   └── images/
├── src/
│   ├── components/      # Composants réutilisables (.astro)
│   │   └── Header.astro
│   ├── layouts/         # Layouts de page
│   │   └── Layout.astro
│   ├── pages/           # Pages du site (routing automatique)
│   │   └── index.astro
│   └── styles/          # CSS global et modules
│       └── global.css
├── astro.config.mjs     # Configuration Astro
├── package.json
└── tsconfig.json
```

## 🎨 Variables CSS (Couleurs Epilsoft)

Les couleurs de la marque sont définies dans `src/styles/global.css` :

```css
--gold-primary: #D8B25A;  /* Or principal */
--gold-dark: #8A7538;     /* Or foncé */
--gold-darker: #9F6E22;   /* Or très foncé */
```

## ✨ Bonnes pratiques implémentées

### 🔧 Organisation du code
- **CSS séparé** : `global.css` pour les styles généraux, styles scoped dans les composants
- **Composants modulaires** : Créez des composants dans `src/components/`
- **Layouts réutilisables** : Utilisez `Layout.astro` pour le template de base

### ⚡ Performance (PageSpeed optimisé)
- **Compression HTML** activée
- **CSS code splitting** pour charger uniquement le CSS nécessaire
- **Images optimisées** : Utilisez le composant `<Image>` d'Astro
- **Preconnect** pour les ressources externes
- **Lazy loading** natif pour les images

### 🔍 SEO optimisé
- **Meta tags complets** (Open Graph, Twitter Cards)
- **Canonical URLs** automatiques
- **Structured data ready**
- **Multilingue** (FR, EN, NL) configuré
- **Sitemap** et robots.txt à ajouter

## 📝 Comment ajouter du contenu

### Créer une nouvelle page

```astro
---
// src/pages/services.astro
import Layout from '../layouts/Layout.astro';
---

<Layout 
  title="Nos Services - Epilsoft"
  description="Découvrez nos services d'épilation laser"
  lang="fr"
>
  <main>
    <h1>Nos Services</h1>
    <!-- Votre contenu -->
  </main>
</Layout>
```

### Créer un composant

```astro
---
// src/components/ServiceCard.astro
interface Props {
  title: string;
  description: string;
  image: string;
}

const { title, description, image } = Astro.props;
---

<div class="service-card">
  <img src={image} alt={title} loading="lazy" />
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .service-card {
    /* Styles scoped au composant */
  }
</style>
```

### Utiliser un composant

```astro
---
import ServiceCard from '../components/ServiceCard.astro';
---

<ServiceCard 
  title="Épilation Laser"
  description="Technologie de pointe"
  image="/images/laser.jpg"
/>
```

## 🌍 Multilingue

Le site est configuré pour 3 langues :
- Français (par défaut)
- Anglais
- Néerlandais

Créez des pages par langue :
```
src/pages/
  index.astro           # FR (défaut)
  en/index.astro        # EN
  nl/index.astro        # NL
```

## 🎯 Optimisations pour PageSpeed

1. **Images** : 
   - Utilisez WebP quand possible
   - Spécifiez toujours width/height
   - Activez lazy loading

2. **CSS** :
   - Variables CSS pour cohérence
   - Styles critiques inline si nécessaire
   - Évitez les @import

3. **JavaScript** :
   - Minification automatique
   - Chargement différé des scripts non-critiques

4. **Fonts** :
   - Utilisez font-display: swap
   - Préchargez les fonts critiques

## 📦 Build de production

```bash
npm run build
```

Le build crée un dossier `dist/` avec :
- HTML minifié
- CSS optimisé et splitté
- Assets optimisés
- Prêt pour déploiement

## 🚀 Déploiement

Compatible avec :
- Netlify
- Vercel
- Cloudflare Pages
- N'importe quel serveur static

## 🔗 Ressources

- [Documentation Astro](https://docs.astro.build)
- [Astro Themes](https://astro.build/themes)
- [Epilsoft Uccle](https://epilsoft.be/uccle)
- [Epilsoft Etterbeek](https://epilsoft.be/etterbeek)

## 📞 Support

Pour toute question sur le projet, contactez l'équipe technique Epilsoft.
