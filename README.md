# 🚀 AI UMKM Website - Inovasi AI untuk Promosi UMKM
**Project Hackathon 36 Jam**: Website AI yang membantu UMKM membuat ide konten, caption, dan layout poster promosi secara instan.

## 📋 Deskripsi Produk
Platform AI-first yang membantu UMKM mikro membuat **ide konten, caption, dan layout poster** promosi secara instan. AI yang "belajar" dari data 250+ promosi UMKM asli dari Instagram, TikTok, dan WhatsApp.

**Target User**: Bu Ani, pemilik warung kopi, HP Android 4GB RAM  
**Goal**: Dapat ide → copy → paste ke Instagram dalam 30 detik

## ⭐ Fitur Utama
1. **AI Ide Konten Promosi** - Generate 3 ide konten berdasarkan jenis usaha, tujuan, platform
2. **AI Caption Generator** - Buat caption + hashtags + CTA otomatis  
3. **AI Poster Generator** - Layout text + color palette + font suggestions

## 🛠 Tech Stack
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript (No Framework)
- **Backend**: Netlify Functions (Serverless)
- **AI**: Google Gemini 1.5 Flash API
- **Data**: training-data.json (250+ promosi UMKM real)
- **Deploy**: Netlify (frontend + functions)

## 🏗 Struktur Project
```
/
├── netlify/
│   └── functions/          # Serverless backend functions
│       ├── ideas.js        # AI Ide Konten endpoint
│       ├── caption.js      # Caption Generator endpoint
│       └── poster.js       # Poster Generator endpoint
├── js/                     # Core JavaScript
│   ├── main.js            # Hash routing & app initialization  
│   ├── api.js             # Fetch functions untuk Netlify Functions
│   └── utils.js           # Helper functions (copy, toast, loading)
├── src/
│   ├── css/
│   │   └── style.css      # Mobile-first styles (Flexbox, 600px max-width)
│   └── js/               # Feature-specific JavaScript
│       ├── ai-ideas.js   # Content idea generation
│       ├── ai-caption.js # Caption generation  
│       └── ai-poster.js  # Poster layout generation
├── assets/               # Images & icons
├── training-data.json    # 250+ UMKM promotional content dataset
├── index.html           # SPA entry point with hash routing
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies (node-fetch untuk functions)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (untuk local functions development)
- Git
- Netlify CLI (optional, untuk local testing)

### Local Development
```bash
# 1. Clone repository
git clone <repo-url>
cd ai-umkm-website

# 2. Install dependencies (untuk Netlify Functions)
npm install

# 3. Setup environment variables
# Buat file .env di root folder
echo "GEMINI_KEY=your-google-gemini-api-key" > .env

# 4. Run local development
# Option A: Simple HTTP Server (frontend only)
npx live-server .

# Option B: Full development with Netlify Functions
npx netlify dev
```

### Deploy to Production
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Deploy to Netlify
# - Connect repo di dashboard Netlify
# - Add environment variable GEMINI_KEY
# - Deploy otomatis dari Git

# 3. Test production
# Akses https://your-site.netlify.app
```

## 🎯 API Endpoints

### GET `/api/ideas`
Generate ide konten promosi
```
Query params:
- jenis_usaha: "makanan" | "fashion" | "jasa"
- tujuan: "jualan" | "edukasi" | "brand_awareness" 
- platform: "Instagram" | "TikTok" | "WhatsApp"

Response:
[
  {
    "title": "Behind The Scene Masak",
    "description": "Tunjukkan proses pembuatan...",
    "format": "Reels",
    "confidence": 0.89
  }
]
```

### POST `/api/caption`
Generate caption + hashtags + CTA
```
Body:
{
  "tema": "menu baru",
  "tone": "casual", 
  "panjang": "medium"
}

Response:
{
  "caption": "Hari ini lagi ngeluarin menu baru...",
  "hashtags": ["#kulinerjogja", "#umkm"],
  "cta": "Pesan WA 08123456789"
}
```

### POST `/api/poster`  
Generate layout poster + design suggestions
```
Body:
{
  "judul": "Promo Akhir Bulan",
  "deskripsi": "Diskon 50%",
  "jenis_promo": "diskon",
  "cta": "Hubungi WA"
}

Response:
{
  "layout": "JUDUL (36pt, Bold)\\nSubjudul (18pt)...",
  "color_palette": ["#FF0000", "#FFFFFF"],
  "font_suggestion": "Montserrat Bold + Open Sans"
}
```

## 📱 User Flow (Mobile-First)
1. **Home** → Pilih fitur AI
2. **Form Input** → Isi 3 dropdown / form
3. **Generate** → Tap button "Generate" (sticky di bottom)
4. **Loading** → Spinner + "AI sedang berpikir..."
5. **Results** → 3 cards fade-in dengan hasil
6. **Copy** → Tap card → Auto copy → Toast notification

**Target waktu**: <30 detik total (Form:10s + Loading:2-5s + Copy:5s)

## 🎨 Design System
- **Colors**: Biru (#3B82F6) + Kuning (#EAB308) + Putih
- **Fonts**: Inter 16px (body), Poppins 24px (header)  
- **Layout**: Single column, card padding 20px
- **Buttons**: Height 48px (touch-friendly)
- **Animations**: Fade-in (0.3s), toast notifications

## 🧪 Testing

### Manual Testing
```bash
# Test semua fitur di mobile browser
# Chrome DevTools → Mobile view
# Test dengan koneksi lambat
```

### Real User Testing
- Target: 3-5 pemilik UMKM  
- Scenario: "Buat ide konten untuk jualan hari ini"
- Metric: <30 detik dari buka website → copy ide

## 📊 Performance Targets
- **Page Load**: <2 detik
- **Mobile Performance**: Lighthouse score 60+
- **API Response**: <2 detik (cached), <5 detik (AI)
- **Font Size**: Minimal 14px
- **Touch Target**: 48x48px minimum

## 🔧 Troubleshooting

### Common Issues
```bash
# CORS Error
# → Pastikan GEMINI_KEY ada di Netlify environment variables

# Functions tidak jalan
# → Check netlify.toml configuration
# → Check functions folder path

# Mobile layout rusak  
# → Test dengan Chrome DevTools mobile view
# → Pastikan max-width: 600px di CSS
```

## 📝 Development Notes

### Code Standards
- **No OOP**: Gunakan fungsi sederhana, hindari class
- **Vanilla JS**: No framework, no bundler
- **Beginner-friendly**: Code harus mudah dipahami pemula
- **Mobile-first**: All design decisions prioritize mobile

### Training Data
File `training-data.json` berisi 250+ data promosi UMKM asli:
- Instagram: 150 caption  
- TikTok: 50 script video
- WhatsApp: 50 status text
- Struktur: `{ jenis_usaha, tujuan, platform, title, description, format }`

## 🎬 Demo
- **Video Demo**: 2 menit (problem → solution → live demo)
- **Slide Deck**: 6 slide (minimal, fokus ke live demo)  
- **Backup Plan**: Screenshot + video recorded jika internet bermasalah

## 🏆 Success Metrics
- ✅ 3 fitur AI berjalan lancar (Ideas, Caption, Poster)
- ✅ User dapat hasil dalam <30 detik
- ✅ 90% output AI relevan (test 10 kasus UMKM)
- ✅ Demo berjalan lancar di mobile device
- ✅ Code readable untuk juri (vanilla JS, no complexity)

## 🤝 Contributing
Project ini dibuat untuk hackathon 36 jam. Kontribusi terbuka untuk:
- Tambah training data UMKM
- Improve UX mobile
- Optimize performance
- Dokumentasi yang lebih baik

## 📄 License
MIT License - Feel free to use for educational purposes

---

**Dibuat dengan ❤️ untuk UMKM Indonesia**  
*Keep it simple, keep it working, keep it demo-ready!*