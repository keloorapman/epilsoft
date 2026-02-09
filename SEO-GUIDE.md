# 🔍 Guide d'optimisation SEO Epilsoft

## Meta tags par page

Chaque page doit avoir :

```astro
<Layout 
  title="Titre unique < 60 caractères"
  description="Description unique 150-160 caractères"
  lang="fr"
  canonical="https://epilsoft.be/page"
  ogImage="/images/og-page.jpg"
/>
```

## Structure des URLs

- ✅ BIEN : `/epilsoft-uccle`, `/services/laser-alexandrite`
- ❌ ÉVITER : `/page1`, `/service?id=123`

## Structured Data (Schema.org)

Ajoutez dans chaque page de centre :

```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Epilsoft Uccle",
  "image": "https://epilsoft.be/images/uccle.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chaussée d'Alsemberg 630",
    "addressLocality": "Uccle",
    "postalCode": "1180",
    "addressCountry": "BE"
  },
  "telephone": "+32-XXX-XXX-XXX",
  "priceRange": "€€",
  "url": "https://epilsoft.be/uccle"
}
</script>
```

## Images SEO

```astro
<img 
  src="/images/laser-alexandrite.jpg"
  alt="Appareil laser Alexandrite pour épilation définitive"
  width="800"
  height="600"
  loading="lazy"
/>
```

## Balises H1-H6

- **1 seul H1** par page (titre principal)
- H2 pour les sections principales
- H3 pour les sous-sections
- Structure logique et hiérarchique

## Performance checklist

- [ ] Toutes les images ont width/height
- [ ] Images en WebP ou AVIF
- [ ] CSS critique inline
- [ ] Fonts préchargées
- [ ] Lazy loading activé
- [ ] Compression Gzip/Brotli
- [ ] Cache navigateur configuré

## Sitemap

Pour générer automatiquement le sitemap, installez :

```bash
npm install @astrojs/sitemap
```

Puis dans `astro.config.mjs` :

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://epilsoft.be',
  integrations: [sitemap()]
});
```

## Multilingue hreflang

Ajoutez dans Layout.astro :

```astro
<link rel="alternate" hreflang="fr" href="https://epilsoft.be/page" />
<link rel="alternate" hreflang="en" href="https://epilsoft.be/en/page" />
<link rel="alternate" hreflang="nl" href="https://epilsoft.be/nl/page" />
<link rel="alternate" hreflang="x-default" href="https://epilsoft.be/page" />
```

## Core Web Vitals

Objectifs pour PageSpeed :
- **LCP** (Largest Contentful Paint) : < 2.5s
- **FID** (First Input Delay) : < 100ms
- **CLS** (Cumulative Layout Shift) : < 0.1

## Analytics

Ajoutez Google Analytics 4 dans Layout.astro :

```astro
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Local SEO

Pour les deux centres, créez des pages Google My Business et ajoutez :
- Photos haute qualité
- Horaires d'ouverture
- Avis clients
- Services détaillés
- Lien vers le site web
