// Placeholder pages untuk fitur AI

function loadIdeas() {
  return `
    <section class="hero" style="padding: 60px 20px;">
      <div class="hero-content">
        <h2>AI Ide Konten</h2>
        <p class="hero-subtitle">Dapatkan 3 ide konten yang relevan untuk usaha Anda</p>
      </div>
    </section>
    
    <section class="features" style="min-height: 400px; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <p style="font-size: 18px; color: #6b7280; margin-bottom: 20px;">
          Halaman Ide Konten sedang dikembangkan...
        </p>
        <a href="#/" class="btn btn-primary">Kembali ke Home</a>
      </div>
    </section>
  `;
}

function loadCaption() {
  return `
    <section class="hero" style="padding: 60px 20px;">
      <div class="hero-content">
        <h2>AI Caption Generator</h2>
        <p class="hero-subtitle">Buat caption yang menarik dan siap posting</p>
      </div>
    </section>
    
    <section class="features" style="min-height: 400px; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <p style="font-size: 18px; color: #6b7280; margin-bottom: 20px;">
          Halaman Caption Generator sedang dikembangkan...
        </p>
        <a href="#/" class="btn btn-primary">Kembali ke Home</a>
      </div>
    </section>
  `;
}

function loadPoster() {
  return `
    <section class="hero" style="padding: 60px 20px;">
      <div class="hero-content">
        <h2>AI Poster Generator</h2>
        <p class="hero-subtitle">Dapatkan layout poster yang siap copy-paste ke Canva</p>
      </div>
    </section>
    
    <section class="features" style="min-height: 400px; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <p style="font-size: 18px; color: #6b7280; margin-bottom: 20px;">
          Halaman Poster Generator sedang dikembangkan...
        </p>
        <a href="#/" class="btn btn-primary">Kembali ke Home</a>
      </div>
    </section>
  `;
}

function loadLogin() {
  return `
    <section class="hero" style="padding: 40px 20px;">
      <div class="hero-content">
        <h2>Masuk / Daftar</h2>
        <p class="hero-subtitle">Masuk untuk mengakses fitur produk</p>
      </div>
    </section>

    <section class="features" style="min-height: 360px; display: flex; align-items: center; justify-content: center; padding: 20px;">
      <div style="width:100%; max-width:420px;">
        <div class="card">
          <div style="padding:18px;">
            <h3 id="authTitle">Masuk ke Market Whispher AI</h3>

            <div id="authForms">
                <form id="loginForm" class="auth-form">
                    <label for="loginEmail">Email</label>
                    <input id="loginEmail" type="email" required>
                    <label for="loginPassword">Kata sandi</label>
                    <input id="loginPassword" type="password" required>
                    <button type="submit" class="btn btn-primary">Masuk</button>
                    <p class="muted">Belum punya akun? <button id="showSignup" class="link-like">Daftar</button></p>
                </form>

                <form id="signupForm" class="auth-form hidden">
                    <label for="signupName">Nama</label>
                    <input id="signupName" type="text" required>
                    <label for="signupEmail">Email</label>
                    <input id="signupEmail" type="email" required>
                    <label for="signupPassword">Kata sandi</label>
                    <input id="signupPassword" type="password" required>
                    <button type="submit" class="btn btn-primary">Daftar</button>
                    <p class="muted">Sudah punya akun? <button id="showLogin" class="link-like">Masuk</button></p>
                </form>
            </div>

            <div style="margin-top:12px; text-align:right;">
              <a href="#/" class="btn btn-secondary">Kembali</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function loadProducts() {
  return `
    <section class="hero" style="padding: 40px 20px;">
      <div class="hero-content">
        <h2>Produk Kami</h2>
        <p class="hero-subtitle">Pilih paket layanan yang cocok untuk usaha Anda</p>
      </div>
    </section>

    <section class="features" style="padding: 32px 20px;">
      <div class="section-title" style="text-align:center; margin-bottom:18px; font-size:24px;">Paket & Harga</div>

      <div class="features-grid" style="max-width:1000px; margin: 0 auto;">
        <div class="feature-card" data-sku="starter">
          <h3>Starter</h3>
          <p>3 ide konten / hari, 3 caption / hari, akses poster sederhana.</p>
          <p style="font-weight:700; margin-top:8px;">Rp 49.000 / bulan</p>
          <button class="btn btn-primary buy-btn" data-sku="starter">Beli</button>
        </div>

        <div class="feature-card" data-sku="pro">
          <h3>Pro</h3>
          <p>10 ide konten / hari, 10 caption / hari, template poster premium.</p>
          <p style="font-weight:700; margin-top:8px;">Rp 129.000 / bulan</p>
          <button class="btn btn-primary buy-btn" data-sku="pro">Beli</button>
        </div>

        <div class="feature-card" data-sku="enterprise">
          <h3>Enterprise</h3>
          <p>Unlimited ide & caption, dukungan prioritas, kustomisasi brand.</p>
          <p style="font-weight:700; margin-top:8px;">Kontak untuk harga</p>
          <button class="btn btn-primary buy-btn" data-sku="enterprise">Hubungi</button>
        </div>
      </div>
    </section>

    <section class="features" style="padding: 20px;">
      <div style="max-width:740px; margin:0 auto; text-align:center; color:#6b7280;">
        <p>Semua paket dapat dicoba selama 7 hari gratis. Pembayaran dilakukan melalui metode lokal (transfer/QR) di tahap selanjutnya.</p>
      </div>
    </section>
  `;
}
