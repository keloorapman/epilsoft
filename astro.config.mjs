import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://epilsoft.be',
  
  // Optimisations de build
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Compression et optimisations
  compressHTML: true,
  
  // Configuration i18n pour multilingue
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  // Optimisation des images
  image: {
    domains: ['epilsoft.be'],
  },
  
  // Préférences de développement
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        }
      }
    }
  }
});
