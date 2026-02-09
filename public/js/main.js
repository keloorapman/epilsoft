// Load Google Fonts async
const googleFonts = document.getElementById('google-fonts');
if (googleFonts) {
  googleFonts.addEventListener('load', function() {
    this.media = 'all';
  });
}

// All initialization in single DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Animation d'ouverture au chargement - Semeraro Style
  const wrapper = document.querySelector('.page-wrapper');

  // Retirer start-anim au scroll et ajouter sticky
  window.addEventListener('scroll', () => {
    const posScroll = window.pageYOffset;
    if (posScroll > 0) {
      wrapper?.classList.remove('start-anim');
    }

    // Ajouter sticky class quand on scroll (Semeraro behavior)
    if (posScroll > 200) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  });

  // Activer les animations au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('play');
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec la classe animate
  const animateElements = document.querySelectorAll('.animate');
  animateElements.forEach(el => observer.observe(el));

  // Testimonials Carousel
  const carouselTrack = document.querySelector('.carousel-track');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicators = document.querySelectorAll('.indicator');

  let currentIndex = 0;
  const totalSlides = testimonialCards.length;

  function updateCarousel(index) {
    // Update track position
    const offset = -index * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Update active card
    testimonialCards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });

    // Update active indicator
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });

    currentIndex = index;
  }

  // Previous button
  prevBtn?.addEventListener('click', () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    updateCarousel(newIndex);
  });

  // Next button
  nextBtn?.addEventListener('click', () => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    updateCarousel(newIndex);
  });

  // Indicator buttons
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      updateCarousel(index);
    });
  });

  // Auto-play carousel (optional - every 5 seconds)
  let autoplayInterval = setInterval(() => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    updateCarousel(newIndex);
  }, 5000);

  // Pause autoplay on hover
  const carouselContainer = document.querySelector('.testimonials-carousel');
  carouselContainer?.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });

  // Resume autoplay on mouse leave
  carouselContainer?.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => {
      const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
      updateCarousel(newIndex);
    }, 5000);
  });

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carouselContainer?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carouselContainer?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next
        const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
        updateCarousel(newIndex);
      } else {
        // Swipe right - prev
        const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        updateCarousel(newIndex);
      }
    }
  }

  // Popup Promo
  const promoPopup = document.getElementById('promo-popup');
  const popupClose = document.getElementById('popup-close');

  // Afficher le popup après 3 secondes
  setTimeout(() => {
    // Vérifier si le popup a déjà été affiché dans cette session
    if (!sessionStorage.getItem('promoPopupShown')) {
      promoPopup?.classList.add('show');
      sessionStorage.setItem('promoPopupShown', 'true');
    }
  }, 3000);

  // Fermer le popup
  popupClose?.addEventListener('click', () => {
    promoPopup?.classList.remove('show');
  });

  // Fermer en cliquant sur l'overlay
  promoPopup?.addEventListener('click', (e) => {
    if (e.target === promoPopup) {
      promoPopup.classList.remove('show');
    }
  });

  // Fermer avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && promoPopup?.classList.contains('show')) {
      promoPopup.classList.remove('show');
    }
  });

  // Technology Carousel (mobile/tablet only)
  const techGrid = document.querySelector('.technology-grid');
  const techPrevBtn = document.querySelector('.tech-prev-btn');
  const techNextBtn = document.querySelector('.tech-next-btn');
  const techIndicators = document.querySelectorAll('.tech-indicator');
  const techItems = document.querySelectorAll('.tech-item');

  if (techGrid && techPrevBtn && techNextBtn && techIndicators.length > 0) {
    let techCurrentIndex = 0;
    const techTotalSlides = techItems.length;

    function updateTechCarousel(index) {
      // Update grid position using viewport width
      const containerWidth = techGrid.parentElement.offsetWidth;
      const offset = -index * containerWidth;
      techGrid.style.transform = `translateX(${offset}px)`;

      // Update active indicator
      techIndicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });

      techCurrentIndex = index;
    }

    // Previous button
    techPrevBtn.addEventListener('click', () => {
      const newIndex = techCurrentIndex === 0 ? techTotalSlides - 1 : techCurrentIndex - 1;
      updateTechCarousel(newIndex);
    });

    // Next button
    techNextBtn.addEventListener('click', () => {
      const newIndex = techCurrentIndex === techTotalSlides - 1 ? 0 : techCurrentIndex + 1;
      updateTechCarousel(newIndex);
    });

    // Indicators
    techIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        updateTechCarousel(index);
      });
    });

    // Touch support
    let techTouchStartX = 0;
    let techTouchEndX = 0;

    techGrid.addEventListener('touchstart', (e) => {
      techTouchStartX = e.changedTouches[0].screenX;
    });

    techGrid.addEventListener('touchend', (e) => {
      techTouchEndX = e.changedTouches[0].screenX;
      handleTechSwipe();
    });

    function handleTechSwipe() {
      const swipeThreshold = 50;
      const diff = techTouchStartX - techTouchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next
          const newIndex = techCurrentIndex === techTotalSlides - 1 ? 0 : techCurrentIndex + 1;
          updateTechCarousel(newIndex);
        } else {
          // Swipe right - prev
          const newIndex = techCurrentIndex === 0 ? techTotalSlides - 1 : techCurrentIndex - 1;
          updateTechCarousel(newIndex);
        }
      }
    }
  }
});
