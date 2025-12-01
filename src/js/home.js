// Landing page HTML template
function loadHome() {
    return `
    <!-- HERO SECTION -->
    <section class="hero">
        <div class="hero-content">
            <h2>Bikin Konten UMKM Jadi Cepat & Gampang dengan AI</h2>
            <p class="hero-subtitle">
                Tidak perlu jago desain, tidak perlu jago copywriting.
                Cukup masukkan jenis usaha — AI kami langsung buatin ide konten, caption, dan layout poster hanya dalam 30 detik.
            </p>
            <div class="hero-cta">
                <a href="#/ideas" class="btn btn-primary">Gunakan Sekarang</a>
                <a href="#features" class="btn btn-secondary">Pelajari Lebih Lanjut</a>
            </div>
            <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">
                ✓ Gratis • ✓ Tanpa Login • ✓ Bisa Pakai di HP
            </p>
        </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="features" id="features">
        <h2 class="section-title">✨ Manfaat Utama untuk UMKM</h2>
        <div class="features-grid">
            <div class="feature-card">
                <h3>💡 Dapat Ide Konten Dalam Sekali Klik</h3>
                <p>AI memahami usaha Anda dan memberikan 3 ide konten yang relevan untuk Instagram, TikTok, atau WhatsApp.</p>
            </div>
            <div class="feature-card">
                <h3>📝 Caption Siap Posting</h3>
                <p>Tidak perlu bingung merangkai kata. AI membuatkan caption yang menarik, rapi, dan natural, lengkap dengan hashtag & CTA.</p>
            </div>
            <div class="feature-card">
                <h3>🎨 Layout Poster Siap Copy-Paste ke Canva</h3>
                <p>Jelasin jenis promo → AI kasih layout teks, ukuran font, dan kombinasi warna yang rapi & profesional.</p>
            </div>
            <div class="feature-card">
                <h3>📱 Bisa Digunakan Tanpa Skill Desain</h3>
                <p>Cocok untuk pemilik usaha yang hanya punya HP dan waktu sedikit. Tidak perlu course atau tutorial.</p>
            </div>
        </div>
    </section>

    <!-- USAHA TYPES SECTION -->
    <section class="usaha-types">
        <h2 class="section-title">💬 Cocok untuk Semua Jenis UMKM</h2>
        <div class="types-grid">
            <div class="type-badge">🍲 Warung Makan</div>
            <div class="type-badge">🎂 Toko Kue / Roti</div>
            <div class="type-badge">👕 Thrifting / Fashion</div>
            <div class="type-badge">📸 Jasa Foto & Printing</div>
            <div class="type-badge">🥤 Minuman Kekinian</div>
            <div class="type-badge">🧺 Laundry</div>
            <div class="type-badge">✂️ Barbershop / Salon</div>
            <div class="type-badge">🛍️ Dan Lainnya...</div>
        </div>
        <p style="text-align: center; margin-top: 32px; color: #6b7280; font-size: 14px;">
            AI akan menyesuaikan ide dan bahasa sesuai kebutuhan usaha Anda.
        </p>
    </section>

    <!-- BENEFITS SECTION -->
    <section class="benefits">
        <h2 class="section-title">🚀 Kenapa UMKM Suka Platform Ini?</h2>
        <div class="benefits-list">
            <div class="benefit-item">
                <div class="benefit-icon">⚡</div>
                <div class="benefit-text">
                    <h4>Menghemat Waktu</h4>
                    <p>Cukup klik, hasil langsung keluar. Tidak perlu mikir konten lagi.</p>
                </div>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">📊</div>
                <div class="benefit-text">
                    <h4>Promosi Jadi Konsisten</h4>
                    <p>Hasil tampak profesional walau dibuat dari HP, tanpa biaya mahal seperti jasa desain.</p>
                </div>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">🎯</div>
                <div class="benefit-text">
                    <h4>Tepat Sasaran</h4>
                    <p>AI dilatih dari 250+ promosi UMKM asli, jadi hasilnya relevan dan terbukti efektif.</p>
                </div>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">🔒</div>
                <div class="benefit-text">
                    <h4>Tidak Perlu Login</h4>
                    <p>Langsung pakai. Langsung dapat hasil. Data Anda aman dan tidak dibagikan ke mana pun.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="testimonials">
        <h2 class="section-title">💬 Testimoni UMKM</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p class="testimonial-text">
                    "Biasanya saya bingung mau posting apa. Sekarang tinggal klik, ide langsung muncul. Sangat membantu jualan harian."
                </p>
                <p class="testimonial-author">Bu Ani</p>
                <p class="testimonial-role">Warung Kopi</p>
            </div>
            <div class="testimonial-card">
                <p class="testimonial-text">
                    "Caption-nya bagus, bahasanya pas untuk pelanggan saya. Beneran ngirit waktu banget."
                </p>
                <p class="testimonial-author">Mas Deni</p>
                <p class="testimonial-role">Laundry Rumahan</p>
            </div>
        </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta-section">
        <div class="cta-content">
            <h2>🎁 Coba Gratis Hari Ini</h2>
            <p>Cukup masukkan jenis usaha Anda. AI akan bantu buatkan konten kurang dari 30 detik.</p>
            <a href="#/ideas" class="btn btn-secondary">Mulai Gunakan Sekarang</a>
            <p style="font-size: 12px; margin-top: 16px; opacity: 0.9;">
                Tawaran gratis untuk pengguna awal.
            </p>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        <p>&copy; 2025 Market Whispher AI - Platform AI untuk UMKM Indonesia</p>
        <p>Membantu usaha lokal berkembang dengan teknologi kecerdasan buatan</p>
    </footer>
    `;
}
