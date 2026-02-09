// Animation on scroll for all pages
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('play');
    }
  });
}, {
  threshold: 0.1
});

animateElements.forEach(el => observer.observe(el));
