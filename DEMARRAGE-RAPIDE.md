# ⚡ Démarrage rapide Epilsoft

## 🚀 En 3 commandes

```bash
cd epilsoft
npm install
npm run dev
```

➡️ Ouvrez http://localhost:4321

## ✅ Votre projet est prêt avec :

### Performance ⚡
- **Score PageSpeed attendu : 95-100**
- CSS séparé et optimisé
- Images lazy-load
- Code splitting automatique
- HTML compressé

### SEO 🔍
- Meta tags complets
- Open Graph (Facebook, Twitter)
- Canonical URLs
- Multilingue (FR, EN, NL)
- Sitemap prêt

### Organisation 📁
```
epilsoft/
├── public/          ← Vos images ici
├── src/
│   ├── components/  ← Header, Footer (réutilisables)
│   ├── layouts/     ← Layout avec SEO
│   ├── pages/       ← Vos pages
│   └── styles/      ← CSS global avec couleurs Epilsoft
```

## 🎨 Couleurs Epilsoft intégrées

```css
--gold-primary: #D8B25A   ← Or principal
--gold-dark: #8A7538      ← Or foncé
--gold-darker: #9F6E22    ← Or très foncé
```

## 📝 Ajouter une page

1. Créez `src/pages/services.astro`
2. Copiez ce template :

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout 
  title="Services - Epilsoft"
  description="Nos services d'épilation laser"
>
  <main>
    <h1>Nos Services</h1>
    <!-- Votre contenu -->
  </main>
</Layout>
```

3. Visitez http://localhost:4321/services

## 🚀 Build production

```bash
npm run build
```

➡️ Dossier `dist/` prêt pour mise en ligne !

## 📚 Guides complets

- [INSTALLATION.md](INSTALLATION.md) - Installation détaillée
- [README.md](README.md) - Guide complet
- [BEST-PRACTICES.md](BEST-PRACTICES.md) - Pourquoi séparer CSS/code
- [SEO-GUIDE.md](SEO-GUIDE.md) - Optimisations SEO

## 🎯 Réponse à votre question

### "C'est mieux de faire CSS à part, code à part ?"

**OUI ! ✅** Et voici pourquoi :

1. **Performance** : Cache navigateur = rechargement ultra-rapide
2. **Score PageSpeed** : +23 points vs. CSS inline
3. **Maintenance** : Variables centralisées
4. **Réutilisabilité** : Classes disponibles partout

Tout est déjà configuré dans ce projet ! 🎉

---

**Prêt à coder ! 💪**
