// Language dropdown toggle
const langCurrent = document.querySelector('.lang .current');
const langOther = document.querySelector('.lang .other');

langCurrent?.addEventListener('click', () => {
  if (langOther) {
    langOther.style.display = langOther.style.display === 'block' ? 'none' : 'block';
  }
});

// Language dropdown toggle mobile
const langMobileCurrent = document.querySelector('.lang-mobile .current');
const langMobileOther = document.querySelector('.lang-mobile .other');

langMobileCurrent?.addEventListener('click', () => {
  if (langMobileOther) {
    langMobileOther.style.display = langMobileOther.style.display === 'block' ? 'none' : 'block';
  }
});

// Mobile menu toggle
const menuMobile = document.getElementById('menu-mobile');
const headerNav = document.getElementById('header-nav');

menuMobile?.addEventListener('click', () => {
  menuMobile.classList.toggle('active');
  document.body.classList.toggle('active_overflow');
  headerNav?.classList.toggle('active');

  // Close all sub menus
  const subs = document.querySelectorAll('.sub');
  subs.forEach(sub => sub.style.display = 'none');

  const menuIcons = document.querySelectorAll('.menu li i');
  menuIcons.forEach(icon => icon.classList.remove('active'));
});

// Sub menu toggle for mobile
const menuIcons = document.querySelectorAll('.menu li i');
menuIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    const sub = this.nextElementSibling;

    // Close all other subs
    const allSubs = document.querySelectorAll('.sub');
    allSubs.forEach(s => {
      if (s !== sub) s.style.display = 'none';
    });

    // Remove active from all icons
    menuIcons.forEach(i => {
      if (i !== this) i.classList.remove('active');
    });

    // Toggle current
    if (sub) {
      if (this.classList.contains('active')) {
        sub.style.display = 'none';
        this.classList.remove('active');
      } else {
        sub.style.display = 'block';
        this.classList.add('active');
      }
    }
  });
});

// Display mobile menu height
function displayMobile() {
  const headerNav = document.getElementById('header-nav');
  const windowHeight = window.innerHeight;

  if (window.innerWidth < 1201 && headerNav) {
    headerNav.style.height = windowHeight + 'px';
  } else if (headerNav) {
    headerNav.style.height = 'auto';
    headerNav.classList.remove('active');
    menuMobile?.classList.remove('active');

    const allSubs = document.querySelectorAll('.sub');
    allSubs.forEach(sub => sub.style.display = '');

    document.body.classList.remove('active_overflow');
  }
}

window.addEventListener('resize', displayMobile);
window.addEventListener('scroll', displayMobile);
displayMobile();
