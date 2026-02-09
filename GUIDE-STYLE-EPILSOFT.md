# 🎨 Guide du Style Epilsoft - Projet Astro

## Vue d'ensemble

Ce projet utilise le **style visuel complet d'Epilsoft** avec :
- Typographie : **Kanit** (titres) + **DM Sans** (texte)
- Couleurs : **Or** (#8A7538, #D8B25A, #9F6E22)
- Design : Moderne, épuré, avec animations fluides
- Performance : Optimisé pour PageSpeed 95-100

## 🎨 Variables CSS Epilsoft

### Couleurs principales
```css
--primary-gold: #8A7538    /* Or principal */
--gold-light: #D8B25A      /* Or clair */
--gold-dark: #9F6E22       /* Or foncé */
--dark-text: #1a1a1a       /* Texte foncé */
--light-text: #5a5a5a      /* Texte clair */
--background-white: #FFFFFF /* Fond blanc */
```

### Typographie
```css
--font-title: 'Kanit', sans-serif     /* Titres */
--font-body: 'DM Sans', sans-serif    /* Corps de texte */
```

### Ombres
```css
--shadow: 0 15px 40px rgba(0, 0, 0, 0.05)
--shadow-hover: 0 20px 50px rgba(0, 0, 0, 0.08)
```

## 🧩 Composants disponibles

### 1. Hero.astro
Bannière principale avec image et texte.

**Utilisation :**
```astro
<Hero 
  badge="EPILSOFT BRUXELLES"
  subtitle="Épilation Laser Définitive"
  title="Épilation Laser"
  description="Votre description ici"
  ctaText="Réserver"
  ctaLink="/contact"
  image="/images/hero.jpg"
/>
```

**Props :**
- `badge` : Petit badge en haut (optionnel)
- `subtitle` : Sous-titre en or avec ligne
- `title` : Titre principal (grand)
- `description` : Texte descriptif
- `ctaText` : Texte du bouton
- `ctaLink` : Lien du bouton
- `image` : Image à droite (optionnel)

### 2. ServiceCard.astro
Carte pour afficher un service.

**Utilisation :**
```astro
<ServiceCard 
  title="Laser Alexandrite"
  description="Description du service"
  image="/images/service.jpg"
  link="/services/alexandrite"
/>
```

**Features :**
- Image avec effet hover
- Titre et description
- Lien "En savoir plus" avec flèche
- Animation au survol

### 3. ContentSection.astro
Section avec texte et image côte à côte.

**Utilisation :**
```astro
<ContentSection 
  subtitle="NOTRE EXPERTISE"
  title="Pourquoi choisir Epilsoft ?"
  content="<p>Votre contenu HTML ici</p>"
  image="/images/expertise.jpg"
  imagePosition="left"
  features={[
    "Point 1",
    "Point 2",
    "Point 3"
  ]}
  ctaText="Réserver"
  ctaLink="/contact"
/>
```

**Props :**
- `subtitle` : Sous-titre en or
- `title` : Titre de la section
- `content` : Contenu HTML
- `image` : Chemin de l'image
- `imagePosition` : `"left"` ou `"right"`
- `features` : Array de points (avec checkmarks)
- `ctaText` / `ctaLink` : Bouton CTA

## 🎯 Classes CSS réutilisables

### Boutons
```html
<a href="/link" class="btn btn-primary">Bouton principal</a>
<a href="/link" class="btn btn-secondary">Bouton secondaire</a>
<a href="/link" class="btn btn-outline">Bouton bordure</a>
```

**Styles :**
- `.btn-primary` : Gradient or → Noir au hover
- `.btn-secondary` : Noir → Gradient or au hover
- `.btn-outline` : Transparent avec bordure

### Badges
```html
<span class="badge">EPILSOFT</span>
```

Style : Gradient or avec texte blanc et ombre.

### Sections
```html
<section class="section">
  <div class="container">
    <!-- Contenu -->
  </div>
</section>
```

**Avec header :**
```html
<div class="section-header">
  <span class="section-subtitle">SOUS-TITRE</span>
  <h2 class="section-title">Titre Principal</h2>
</div>
```

### Grilles
```html
<div class="grid-2">...</div>  <!-- 2 colonnes -->
<div class="grid-3">...</div>  <!-- 3 colonnes -->
<div class="grid-4">...</div>  <!-- 4 colonnes -->
```

Responsive : Passe à 1 colonne sur mobile automatiquement.

## 📐 Structure d'une page Epilsoft

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import Hero from '../components/Hero.astro';
import { translations } from '../i18n';

const lang = 'fr';
const t = translations[lang];
---

<Layout 
  title="Titre de la page - Epilsoft"
  description="Description SEO"
  lang={lang}
>
  <Header lang={lang} />
  
  <main>
    <!-- Hero -->
    <Hero 
      title="Titre principal"
      description="Description"
      image="/images/hero.jpg"
    />

    <!-- Section 1 -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">SOUS-TITRE</span>
          <h2 class="section-title">Titre</h2>
        </div>
        
        <!-- Contenu -->
        <div class="grid-3">
          <!-- Cards ou contenu -->
        </div>
      </div>
    </section>

    <!-- Section 2 avec fond -->
    <section class="section" style="background: #f9f9f9;">
      <div class="container">
        <!-- Contenu -->
      </div>
    </section>

    <!-- CTA Final -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2>Prêt à commencer ?</h2>
        <a href="/contact" class="btn btn-primary">Réserver</a>
      </div>
    </section>
  </main>
  
  <Footer lang={lang} />
</Layout>
```

## 🎨 Patterns de design Epilsoft

### 1. Cartes avec hover
```css
.card {
  background: var(--background-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  transition: all var(--transition-normal);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}
```

### 2. Icônes rondes avec fond or
```css
.icon-container {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #fff9f0 0%, #fff5e6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container svg {
  color: var(--primary-gold);
}
```

### 3. Statistiques avec effet
```html
<div class="stat-card">
  <span class="stat-number">5000+</span>
  <span class="stat-label">Clients</span>
</div>
```

```css
.stat-number {
  font-family: var(--font-title);
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-gold);
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--light-text);
  text-transform: uppercase;
}
```

### 4. Numéros stylisés
```html
<div class="advantage-item">
  <div class="advantage-number">01</div>
  <h3>Titre</h3>
  <p>Description</p>
</div>
```

```css
.advantage-number {
  font-family: var(--font-title);
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-gold);
  opacity: 0.3;
}
```

## 🎬 Animations

### Animation au scroll
```html
<div class="animate">
  <!-- Contenu -->
</div>
```

Ajoutez ce script :
```html
<script>
  const animateElements = document.querySelectorAll('.animate');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('play');
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => observer.observe(el));
</script>
```

### Animations disponibles
```css
@keyframes fadeInUp { ... }
@keyframes fadeInLeft { ... }
@keyframes fadeInRight { ... }
@keyframes float { ... }
```

## 🌈 Gradients Epilsoft

### Gradient or principal
```css
background: linear-gradient(180deg, 
  #D8B25A 0%, 
  #C6993E 45%, 
  #B8842F 65%, 
  #9F6E22 100%
);
```

### Gradient de fond subtle
```css
background: linear-gradient(135deg, 
  rgba(138, 117, 56, 0.05) 0%, 
  rgba(216, 178, 90, 0.08) 100%
);
```

## 📱 Responsive

### Breakpoints
- **Desktop** : > 991px
- **Tablet** : 768px - 991px
- **Mobile** : < 768px

### Media queries
```css
@media (max-width: 991px) {
  .grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}
```

## 💡 Conseils d'utilisation

### 1. Espacement
Utilisez `clamp()` pour l'espacement responsive :
```css
padding: clamp(3rem, 8vw, 6rem) 1.5rem;
```

### 2. Tailles de police
Utilisez `clamp()` pour les titres :
```css
font-size: clamp(2rem, 5vw, 3rem);
```

### 3. Images
Toujours ajouter `loading="lazy"` sauf pour le hero :
```html
<img src="/image.jpg" alt="..." loading="lazy" />
<img src="/hero.jpg" alt="..." loading="eager" />
```

### 4. Couleurs
Pour le texte, utilisez les variables :
```css
color: var(--dark-text);      /* Titres */
color: var(--light-text);     /* Paragraphes */
color: var(--primary-gold);   /* Accents */
```

## 🎯 Exemples complets

### Page de service
Voir : `src/pages/services.astro`
- Hero avec image
- Grid de 3 cards
- Section zones de traitement
- Liste d'avantages numérotés
- CTA final

### Page d'accueil
Voir : `src/pages/index.astro`
- Hero complet
- Stats cards
- Grid de services
- ContentSection
- Centre cards
- CTA final

## 🚀 Checklist pour une nouvelle page

- [ ] Importer Layout, Header, Footer
- [ ] Ajouter Hero avec image
- [ ] Section avec section-header
- [ ] Utiliser grid-2, grid-3 ou grid-4
- [ ] Ajouter classes animate pour animations
- [ ] Alterner fonds blanc et #f9f9f9
- [ ] Ajouter CTA final
- [ ] Tester responsive (< 768px, < 991px)
- [ ] Vérifier les images (lazy loading)
- [ ] Valider les couleurs Epilsoft

## 📚 Ressources

- **Fonts** : Google Fonts (Kanit + DM Sans)
- **Icônes** : Feather Icons (via SVG)
- **Couleurs** : Palette Epilsoft
- **Components** : src/components/

---

**Style Epilsoft appliqué ! 🎨✨**
