// Simple client-side auth for demo purposes
// Stores users in localStorage (insecure for production)

(function(){
  function $(sel) { return document.querySelector(sel); }
  function $id(id) { return document.getElementById(id); }

  function getUsers() {
    try { return JSON.parse(localStorage.getItem('mw_users') || '[]'); } catch(e){ return []; }
  }

  function saveUsers(users) {
    localStorage.setItem('mw_users', JSON.stringify(users));
  }

  function setCurrentUser(user) {
    localStorage.setItem('mw_currentUser', JSON.stringify(user));
    updateNavUser();
  }

  function clearCurrentUser() {
    localStorage.removeItem('mw_currentUser');
    updateNavUser();
  }

  function getCurrentUser() {
    try { return JSON.parse(localStorage.getItem('mw_currentUser') || 'null'); } catch(e){ return null; }
  }

  function hashPass(pwd) {
    // very simple transform (not secure) just to avoid visible plain text in storage
    return btoa(pwd);
  }

  function showModal() {
    const modal = $id('authModal');
    if (modal) modal.classList.remove('hidden');
  }
  function hideModal() {
    const modal = $id('authModal');
    if (modal) modal.classList.add('hidden');
  }

  function showLogin() {
    showModal();
    $id('loginForm').classList.remove('hidden');
    $id('signupForm').classList.add('hidden');
  }

  function showSignup() {
    showModal();
    $id('signupForm').classList.remove('hidden');
    $id('loginForm').classList.add('hidden');
  }

  function updateNavUser() {
    const loginBtn = $id('loginBtn');
    const navLinks = document.getElementById('navLinks');
    const current = getCurrentUser();

    // remove existing badge if any
    const existing = document.getElementById('userBadge');
    if (existing) existing.remove();

    if (current && loginBtn) {
      // show badge instead of login button
      const span = document.createElement('span');
      span.id = 'userBadge';
      span.className = 'user-badge';
      span.innerHTML = `${escapeHtml(current.name || current.email)} <button id="logoutBtn" class="link-like" style="margin-left:8px;">Keluar</button>`;
      navLinks.appendChild(span);
      loginBtn.style.display = 'none';
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          logout();
        });
      }
    } else if (loginBtn) {
      loginBtn.style.display = '';
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>\"']/g, function (s) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[s];
    });
  }

  function signup(name, email, password) {
    const users = getUsers();
    const exists = users.find(u => u.email === email.toLowerCase());
    if (exists) return { ok: false, message: 'Email sudah didaftarkan' };
    const user = { name: name || '', email: email.toLowerCase(), password: hashPass(password) };
    users.push(user);
    saveUsers(users);
    setCurrentUser({ name: user.name, email: user.email });
    return { ok: true };
  }

  function login(email, password) {
    const users = getUsers();
    const hashed = hashPass(password);
    const user = users.find(u => u.email === email.toLowerCase() && u.password === hashed);
    if (!user) return { ok: false, message: 'Email atau kata sandi salah' };
    setCurrentUser({ name: user.name, email: user.email });
    return { ok: true };
  }

  function logout() {
    clearCurrentUser();
    showToast('Anda telah keluar');
    // optional: redirect to home
    window.location.hash = '#/';
  }

  function isLoggedIn() {
    return !!getCurrentUser();
  }

  function bindEvents() {
    const loginBtn = $id('loginBtn');
    const authClose = $id('authClose');
    const showSignupBtn = $id('showSignup');
    const showLoginBtn = $id('showLogin');

    // only attach modal-trigger behavior if the login control is a button element
    if (loginBtn && loginBtn.tagName && loginBtn.tagName.toLowerCase() === 'button') {
      loginBtn.addEventListener('click', (e)=>{ e.preventDefault(); showLogin(); });
    }
    if (authClose) authClose.addEventListener('click', (e)=>{ e.preventDefault(); hideModal(); });
    if (showSignupBtn) showSignupBtn.addEventListener('click', (e)=>{ e.preventDefault(); showSignup(); });
    if (showLoginBtn) showLoginBtn.addEventListener('click', (e)=>{ e.preventDefault(); showLogin(); });

    // submit handlers
    const loginForm = $id('loginForm');
    const signupForm = $id('signupForm');

    if (loginForm) loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = $id('loginEmail').value.trim();
      const pwd = $id('loginPassword').value;
      const res = login(email, pwd);
      if (res.ok) {
        hideModal();
        showToast('Berhasil masuk');
      } else {
        showToast(res.message || 'Gagal masuk');
      }
    });

    if (signupForm) signupForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = $id('signupName').value.trim();
      const email = $id('signupEmail').value.trim();
      const pwd = $id('signupPassword').value;
      const res = signup(name, email, pwd);
      if (res.ok) {
        hideModal();
        showToast('Pendaftaran berhasil, Anda otomatis masuk');
      } else {
        showToast(res.message || 'Gagal daftar');
      }
    });

    // close modal on ESC
    document.addEventListener('keydown', (e)=>{
      if (e.key === 'Escape') hideModal();
    });

    // click outside to close (only if modal exists)
    const _authModalEl = document.getElementById('authModal');
    if (_authModalEl) {
      _authModalEl.addEventListener('click', (e)=>{
        if (e.target === _authModalEl) hideModal();
      });
    }
  }

  // Public API
  window.auth = {
    init: function(){
      // ensure DOM ready
      bindEvents();
      updateNavUser();
    },
    signup: signup,
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
    getCurrentUser: getCurrentUser,
    showLogin: showLogin,
    showSignup: showSignup
  };
})();
