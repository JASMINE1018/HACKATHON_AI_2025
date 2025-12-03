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

// Add blur / scrolled state to header when user scrolls
function initHeaderBlur() {
  const header = document.querySelector('.header');
  if (!header) return;
  const threshold = 12; // px
  function onScroll() {
    if (window.scrollY > threshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
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
  // Protect some routes (demo client-side protection)
  const protectedRoutes = ['#/produk'];
  if (protectedRoutes.includes(hash) && window.auth && !window.auth.isLoggedIn()) {
    // jika belum login, arahkan ke halaman login
    window.location.hash = '#/login';
    return;
  }

  if (hash === '#/' || hash === '#/home') {
    app.innerHTML = loadHome();
  } else if (hash === '#/ideas') {
    app.innerHTML = loadIdeas();
  } else if (hash === '#/caption') {
    app.innerHTML = loadCaption();
  } else if (hash === '#/poster') {
    app.innerHTML = loadPoster();
  } else if (hash === '#/produk' || hash === '#/products') {
    // products is a protected route; if user is logged in, render products
    app.innerHTML = loadProducts();
    if (window.products && typeof window.products.init === 'function') {
      window.products.init();
    }
  } else if (hash === '#/login') {
    app.innerHTML = loadLogin();
    if (window.auth && typeof window.auth.init === 'function') {
      // bind events for forms on the injected login page
      window.auth.init();
    }
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
  // header blur on scroll
  initHeaderBlur();
  // init fade-in scroll animations
  initFadeIn();
  // init auth if available
  if (window.auth && typeof window.auth.init === 'function') {
    window.auth.init();
  }
  handleRoute();
});

// Listen to hash changes
window.addEventListener('hashchange', handleRoute);

// Init IntersectionObserver to reveal elements with .fade-in
function initFadeIn() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: make all visible
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        const delay = el.getAttribute('data-delay');
        if (delay) {
          el.style.transitionDelay = `${parseInt(delay, 10)}ms`;
        }
        el.classList.add('visible');
        obs.unobserve(el);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.12
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
