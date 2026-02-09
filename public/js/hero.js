// Trigger hero animations on load
document.addEventListener('DOMContentLoaded', () => {
  const heroAnimations = document.querySelectorAll('.hero .animate');
  heroAnimations.forEach(el => {
    el.classList.add('play');
  });
});
