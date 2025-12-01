# AI UMKM Website - Copilot Instructions

## Project Overview
This is a beginner-friendly, mobile-first AI platform for Indonesian SMEs (UMKM) to generate promotional content. Built with vanilla JavaScript and simple architecture for educational purposes (PJBL/hackathon project).

## Core Architecture Principles

### 📱 Mobile-First Vanilla JavaScript
- **No frameworks**: Pure HTML5, CSS3, vanilla JavaScript only
- **No OOP**: Avoid classes, prototypes, or complex design patterns
- **Function-based**: Use simple, standalone functions for all functionality
- **Hash routing**: Single-page app using `window.location.hash` navigation

### 🎯 Beginner-Friendly Code Standards
```javascript
// ✅ Good: Simple, readable functions
function generateIdeas(businessType, goal, platform) {
    // Clear logic here
    return ideas;
}

// ❌ Avoid: Classes, complex patterns, bundlers
class ContentGenerator { ... }
```

## Project Structure

```
/
├── js/                    # Core JavaScript (currently empty, being developed)
│   ├── main.js           # Hash routing and app initialization
│   ├── api.js            # Fetch functions for backend/Netlify Functions
│   └── utils.js          # Helper functions (copy, toast, loading)
├── src/
│   ├── css/style.css     # Mobile-first styles (Flexbox, 600px max-width)
│   └── js/               # Feature-specific JavaScript (planned)
│       ├── ai-ideas.js   # Content idea generation
│       ├── ai-caption.js # Caption generation
│       └── ai-poster.js  # Poster layout generation
├── index.html            # SPA entry point with hash routing
├── AGENTS.md            # AI assistant working instructions
├── PRD.md               # Detailed product requirements
└── TODO.md              # 36-hour hackathon timeline
```

## Key Development Patterns

### 🎨 UI/UX Conventions
- **Colors**: Blue (`#3B82F6`) + Yellow (`#EAB308`) + White
- **Fonts**: Inter 16px (body), Poppins 24px (headers)
- **Touch targets**: Minimum 48x48px buttons for mobile
- **Animations**: Simple fade-in (0.3s), avoid complex transitions
- **Loading states**: "AI sedang berpikir..." with spinner

### 🔧 JavaScript Patterns
```javascript
// API calls - always use fetch with error handling
async function fetchIdeas(params) {
    const res = await fetch(`/.netlify/functions/ideas?${new URLSearchParams(params)}`);
    if (!res.ok) throw new Error('API Error');
    return res.json();
}

// UI updates - direct DOM manipulation
function displayResults(data) {
    const container = document.getElementById('results');
    container.innerHTML = data.map(item => `<div class="card">${item.title}</div>`).join('');
}

// Copy functionality with toast feedback
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showToast('Berhasil disalin ke clipboard!');
}
```

### 🏗 Backend Integration
- **Serverless**: Uses Netlify Functions (not traditional Express server)
- **Endpoints**: `/.netlify/functions/ideas`, `/caption`, `/poster`
- **AI Integration**: Google Gemini 1.5 Flash API with local data fallback
- **Data**: `training-data.json` with 250+ real UMKM promotional content

## Development Workflow

### 🚀 Local Development
```bash
# Frontend development
cd project-root
# Use live-server or VS Code Live Server extension

# Backend functions (if using Netlify CLI)
npm install -g netlify-cli
netlify dev  # Runs functions locally
```

### 📝 Code Style Guidelines
- **Comments**: Indonesian language, explain logic for beginners
- **Variable names**: Clear, descriptive (`businessType` not `bt`)
- **Error handling**: User-friendly messages in Indonesian
- **No console.log**: Remove before production or use proper logging

### 🧪 Testing Approach
- **Manual testing**: Real UMKM user testing (target <30s task completion)
- **Mobile testing**: Test on actual Android devices (4GB RAM target)
- **Performance**: Page load <2s, Lighthouse mobile score 60+
- **Accessibility**: Minimum 14px font, proper contrast ratios

## Feature Implementation Guidelines

### AI Content Generation Flow
1. **Form input** → **Loading state** → **API call** → **Display results** → **Copy functionality**
2. Always provide 3 options minimum for generated content
3. Include confidence scores where applicable
4. Implement graceful fallbacks if AI API fails

### Critical Files to Understand
- `AGENTS.md`: Contains detailed AI assistant behavior rules
- `PRD.md`: Complete product requirements and technical specs
- `TODO.md`: 36-hour development timeline with specific tasks
- `index.html`: SPA structure with hash routing setup

## Common Tasks & Examples

### Adding New AI Feature
```javascript
// 1. Create feature-specific JS file (e.g., ai-hashtag.js)
function generateHashtags(content, niche) {
    // Implementation here
}

// 2. Add to main.js routing
function handleRoute() {
    const hash = window.location.hash;
    if (hash === '#/hashtags') loadHashtagPage();
}

// 3. Create corresponding HTML page structure
// 4. Add navigation link to header
```

### Debugging Common Issues
- **CORS errors**: Ensure Netlify Functions are deployed correctly
- **Mobile layout**: Test CSS with Chrome DevTools mobile view
- **API failures**: Always implement fallback to local data
- **Performance**: Optimize images in `/assets` directory

## Deployment Notes
- **Frontend**: Netlify auto-deploy from Git
- **Backend**: Netlify Functions (serverless, no separate backend)
- **Environment**: `GEMINI_KEY` in Netlify dashboard environment variables
- **Domain**: Single domain deployment to avoid CORS issues

---

*This project prioritizes simplicity, educational value, and real-world applicability for Indonesian SMEs. Always consider the end user (non-technical UMKM owners) in implementation decisions.*