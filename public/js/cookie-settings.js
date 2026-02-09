// Cookie Settings Management
document.addEventListener('DOMContentLoaded', () => {
  const cookieOverlay = document.getElementById('cookie-settings-overlay');
  const cookieClose = document.getElementById('cookie-close');
  const cookieSaveBtn = document.getElementById('cookie-save-btn');

  // Load saved preferences
  function loadCookiePreferences() {
    const preferences = localStorage.getItem('cookiePreferences');
    if (preferences) {
      const prefs = JSON.parse(preferences);
      document.getElementById('performance-cookies').checked = prefs.performance || false;
      document.getElementById('advertising-cookies').checked = prefs.advertising || false;
      document.getElementById('partner-data').checked = prefs.partnerData || false;
      document.getElementById('content-personalization').checked = prefs.personalization || false;
      document.getElementById('tracking-pixel').checked = prefs.tracking || false;
    }
  }

  // Open cookie settings from footer link
  const confidentialityLink = document.getElementById('cookie-settings-link');
  if (confidentialityLink) {
    confidentialityLink.addEventListener('click', (e) => {
      e.preventDefault();
      cookieOverlay?.classList.add('show');
      loadCookiePreferences();
    });
  }

  // Close popup
  function closeCookieSettings() {
    cookieOverlay?.classList.remove('show');
  }

  cookieClose?.addEventListener('click', closeCookieSettings);

  // Close on overlay click
  cookieOverlay?.addEventListener('click', (e) => {
    if (e.target === cookieOverlay) {
      closeCookieSettings();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cookieOverlay?.classList.contains('show')) {
      closeCookieSettings();
    }
  });

  // Save preferences
  cookieSaveBtn?.addEventListener('click', () => {
    const preferences = {
      necessary: true, // Always true
      performance: document.getElementById('performance-cookies').checked,
      advertising: document.getElementById('advertising-cookies').checked,
      partnerData: document.getElementById('partner-data').checked,
      personalization: document.getElementById('content-personalization').checked,
      tracking: document.getElementById('tracking-pixel').checked,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));

    // Show success feedback
    cookieSaveBtn.textContent = 'Préférences enregistrées !';
    cookieSaveBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)';

    setTimeout(() => {
      cookieSaveBtn.textContent = 'Enregistrer mes préférences';
      cookieSaveBtn.style.background = 'linear-gradient(135deg, #bfa477 0%, #d2bb94 100%)';
      closeCookieSettings();
    }, 1500);
  });

  // Load preferences on page load
  loadCookiePreferences();
});
