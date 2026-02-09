# 🚀 Installation rapide - Epilsoft Astro

## Prérequis

- Node.js 18+ ([télécharger](https://nodejs.org/))
- Un éditeur de code (VS Code recommandé)

## Installation en 3 étapes

### 1. Extraire le projet

Décompressez `epilsoft-astro-project.zip` dans votre dossier de travail.

### 2. Installer les dépendances

```bash
cd epilsoft
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur : http://localhost:4321

## 📦 Structure du projet

```
epilsoft/
├── public/              # Fichiers statiques (ajoutez vos images ici)
├── src/
│   ├── components/      # Composants réutilisables (Header, Footer)
│   ├── layouts/         # Layout principal avec SEO
│   ├── pages/           # Vos pages (index.astro = page d'accueil)
│   └── styles/          # CSS global avec variables Epilsoft
└── astro.config.mjs     # Configuration (déjà optimisée)
```

## ✅ Avantages de cette structure

### Performance ⚡
- CSS séparé et optimisé automatiquement
- Images lazy-load par défaut
- Code splitting automatique
- HTML compressé en production

### SEO 🔍
- Meta tags complets sur chaque page
- Open Graph pour les réseaux sociaux
- Canonical URLs automatiques
- Multilingue (FR, EN, NL) prêt

### Organisation 📁
- CSS global dans `src/styles/global.css`
- Composants isolés dans `src/components/`
- Styles scoped dans chaque composant
- Variables CSS pour cohérence de marque

## 🎨 Personnalisation

### Changer les couleurs

Éditez `src/styles/global.css` :

```css
:root {
  --gold-primary: #D8B25A;
  --gold-dark: #8A7538;
  --gold-darker: #9F6E22;
}
```

### Ajouter une page

1. Créez `src/pages/nom-page.astro`
2. Copiez la structure de `index.astro`
3. Personnalisez le contenu

### Ajouter un composant

1. Créez `src/components/MonComposant.astro`
2. Utilisez-le : `import MonComposant from '../components/MonComposant.astro'`

## 🚀 Build de production

```bash
npm run build
```

Le dossier `dist/` contiendra votre site optimisé.

## 📊 Test PageSpeed

Une fois buildé, testez sur :
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

Scores attendus : 90-100 sur tous les critères ✅

## 🌐 Déploiement

Compatible avec :
- **Netlify** : Déposez le dossier `dist/`
- **Vercel** : Connectez votre repo Git
- **Cloudflare Pages** : Build automatique
- **Serveur classique** : Upload du dossier `dist/`

## 📚 Ressources

- [Documentation Astro](https://docs.astro.build)
- [README.md](README.md) - Guide complet
- [SEO-GUIDE.md](SEO-GUIDE.md) - Optimisations SEO

## 🆘 Besoin d'aide ?

Consultez la [documentation Astro](https://docs.astro.build) ou contactez l'équipe technique.

---

**Prêt à créer un site ultra-rapide pour Epilsoft ! 🌟**
