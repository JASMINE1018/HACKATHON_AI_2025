// Hamburger Menu Handler
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (!hamburger || !navLinks) return;

  // Toggle menu saat hamburger diklik
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Tutup menu saat link diklik
  const navItems = navLinks.querySelectorAll('.nav-link');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Tutup menu saat klik di luar
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Router - Handle hash routes
function handleRoute() {
  const hash = window.location.hash || '#/';
  const app = document.getElementById('app');
  
  if (!app) return;

  // Tutup menu saat navigasi
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  if (navLinks) {
    navLinks.classList.remove('open');
  }
  if (hamburger) {
    hamburger.classList.remove('open');
  }

  // Route handling
  if (hash === '#/' || hash === '#/home') {
    app.innerHTML = loadHome();
  } else if (hash === '#/ideas') {
    app.innerHTML = loadIdeas();
  } else if (hash === '#/caption') {
    app.innerHTML = loadCaption();
  } else if (hash === '#/poster') {
    app.innerHTML = loadPoster();
  } else {
    app.innerHTML = loadHome(); // Default ke home
  }

  // Update active nav link
  updateActiveNavLink(hash);
}

// Update active nav link styling
function updateActiveNavLink(hash) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === hash) {
      link.classList.add('active');
    }
  });
}

// Initialize app saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  handleRoute();
});

// Listen to hash changes
window.addEventListener('hashchange', handleRoute);
