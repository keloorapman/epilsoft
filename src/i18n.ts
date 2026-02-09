// Fichier de traductions pour le site multilingue

export const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    centers: 'Nos Centres',
    about: 'À Propos',
    contact: 'Contact',
    booking: 'Réserver',
    
    // Hero
    heroTitle: 'Épilation Laser Définitive à Bruxelles',
    heroSubtitle: 'Technologie de pointe pour des résultats durables',
    heroCTA: 'Réserver une séance',
    
    // Centres
    uccleCenter: 'Centre Uccle',
    etterbeekCenter: 'Centre Etterbeek',
    address: 'Adresse',
    phone: 'Téléphone',
    hours: 'Horaires',
    directions: 'Itinéraire',
    
    // Services
    laserHairRemoval: 'Épilation Laser',
    definitiveResults: 'Résultats Définitifs',
    allSkinTypes: 'Tous Types de Peaux',
    quickSessions: 'Séances Rapides',
    
    // CTA
    bookNow: 'Réserver Maintenant',
    learnMore: 'En Savoir Plus',
    contactUs: 'Nous Contacter',
    
    // Footer
    followUs: 'Suivez-nous',
    legal: 'Mentions Légales',
    privacy: 'Politique de Confidentialité',
    rights: 'Tous droits réservés',
    
    // Meta
    metaDescription: 'Épilation laser définitive à Bruxelles. Centres à Uccle et Etterbeek. Technologie laser de pointe pour tous types de peaux.',
  },
  
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    centers: 'Our Centers',
    about: 'About',
    contact: 'Contact',
    booking: 'Book',
    
    // Hero
    heroTitle: 'Permanent Laser Hair Removal in Brussels',
    heroSubtitle: 'Cutting-edge technology for lasting results',
    heroCTA: 'Book a session',
    
    // Centers
    uccleCenter: 'Uccle Center',
    etterbeekCenter: 'Etterbeek Center',
    address: 'Address',
    phone: 'Phone',
    hours: 'Opening Hours',
    directions: 'Directions',
    
    // Services
    laserHairRemoval: 'Laser Hair Removal',
    definitiveResults: 'Permanent Results',
    allSkinTypes: 'All Skin Types',
    quickSessions: 'Quick Sessions',
    
    // CTA
    bookNow: 'Book Now',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    
    // Footer
    followUs: 'Follow Us',
    legal: 'Legal Notice',
    privacy: 'Privacy Policy',
    rights: 'All rights reserved',
    
    // Meta
    metaDescription: 'Permanent laser hair removal in Brussels. Centers in Uccle and Etterbeek. Advanced laser technology for all skin types.',
  },
  
  nl: {
    // Navigation
    home: 'Home',
    services: 'Diensten',
    centers: 'Onze Centra',
    about: 'Over Ons',
    contact: 'Contact',
    booking: 'Boeken',
    
    // Hero
    heroTitle: 'Definitieve Laserontharing in Brussel',
    heroSubtitle: 'Geavanceerde technologie voor langdurige resultaten',
    heroCTA: 'Boek een sessie',
    
    // Centers
    uccleCenter: 'Centrum Ukkel',
    etterbeekCenter: 'Centrum Etterbeek',
    address: 'Adres',
    phone: 'Telefoon',
    hours: 'Openingsuren',
    directions: 'Routebeschrijving',
    
    // Services
    laserHairRemoval: 'Laserontharing',
    definitiveResults: 'Definitieve Resultaten',
    allSkinTypes: 'Alle Huidtypes',
    quickSessions: 'Snelle Sessies',
    
    // CTA
    bookNow: 'Boek Nu',
    learnMore: 'Meer Info',
    contactUs: 'Contacteer Ons',
    
    // Footer
    followUs: 'Volg Ons',
    legal: 'Juridische Vermeldingen',
    privacy: 'Privacybeleid',
    rights: 'Alle rechten voorbehouden',
    
    // Meta
    metaDescription: 'Definitieve laserontharing in Brussel. Centra in Ukkel en Etterbeek. Geavanceerde lasertechnologie voor alle huidtypes.',
  }
};

// Helper function pour obtenir les traductions
export function t(lang: 'fr' | 'en' | 'nl', key: string): string {
  return translations[lang][key] || key;
}

// Helper pour obtenir la langue depuis l'URL
export function getLangFromUrl(url: URL): 'fr' | 'en' | 'nl' {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'nl') return lang;
  return 'fr';
}
