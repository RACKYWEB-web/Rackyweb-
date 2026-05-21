# 🚀 Rackyweb Promote
### Nigeria's #1 Digital Advertising & Business Promotion Platform
**Powered by Rackyweb Global** · *Promote. Grow. Dominate.*

---

## ✨ Features

### 🏠 Homepage Hero
- Animated particle canvas with network lines
- Typewriter headline animation
- Floating glassmorphism preview cards
- Live animated statistics counters
- 4 CTA buttons: Advertise Now, Promote Business, Become Featured, Explore Businesses

### 🛒 Business Ad Marketplace
- Full ad listing system with 9 demo businesses
- Grid & list view toggle
- Filter by: category, country, sort order
- Search across business names & descriptions
- Ad detail view with full stats
- WhatsApp + Website direct contact

### 💼 Advertiser Dashboard
- Overview with KPI cards and mini bar charts
- Campaign management (pause/resume/delete)
- 3-step ad creation wizard
- Analytics with weekly bar chart & traffic sources
- Notification center
- Profile & notification settings

### 💳 Premium Ad Plans
- Free / Starter (₦7,500) / Pro (₦20,000) / Enterprise (₦75,000)
- Monthly/Yearly billing toggle (20% yearly discount)
- Full feature comparison table
- Paystack + Flutterwave payment modal
- FAQ accordion

### 🤖 AI Assistant
- Floating chatbot FAB
- Typing animation
- Quick suggestion chips
- Context-aware marketing responses

### 📝 Blog / News
- 6 categorised articles
- Featured post hero
- Article detail view with related posts
- Newsletter signup

### 🏢 About / Contact
- Mission & values
- Team section
- Contact form (name, email, subject, message)
- Direct WhatsApp, email, and social links

---

## 🛠 Tech Stack
- **React 18** — UI framework
- **Vite 5** — Build tool & dev server
- **React Router DOM** — Client-side routing (structure ready)
- **Pure CSS** — Custom design system (no UI library dependencies)
- **Canvas API** — Particle background animation
- **Intersection Observer** — Scroll-triggered counters
- **PWA** — manifest.json included

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📦 Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
rackyweb-promote/
├── public/
│   └── manifest.json          # PWA manifest
├── src/
│   ├── components/
│   │   ├── UI.jsx             # Reusable components (GlassCard, Counter, etc.)
│   │   ├── Navbar.jsx         # Responsive navigation
│   │   ├── Footer.jsx         # Footer with newsletter
│   │   └── AIAssistant.jsx    # Floating AI chatbot
│   ├── pages/
│   │   ├── HomePage.jsx       # Hero, stats, featured, earn, CTA
│   │   ├── MarketplacePage.jsx # Ad listings, filters, detail view
│   │   ├── PlansPage.jsx      # Pricing, comparison, payment modal
│   │   ├── DashboardPage.jsx  # Advertiser dashboard
│   │   ├── BlogPage.jsx       # Blog listing & article view
│   │   └── AboutPage.jsx      # About, team, contact form
│   ├── data/
│   │   └── data.js            # All mock data
│   ├── styles/
│   │   └── global.css         # Design system, variables, animations
│   ├── App.jsx                # Root with page routing
│   └── main.jsx               # React entry point
├── index.html                 # HTML shell with Google Fonts
├── vite.config.js
└── package.json
```

---

## 💳 Payment Integration

The payment modal UI supports both **Paystack** and **Flutterwave**.

### Paystack (Production)
```bash
npm install @paystack/inline-js
```
```javascript
import PaystackPop from '@paystack/inline-js';
const popup = new PaystackPop();
popup.checkout({
  key: 'pk_live_YOUR_PUBLIC_KEY',
  email: form.email,
  amount: planAmount * 100, // in kobo
  currency: 'NGN',
  callback: (response) => { /* handle success */ },
});
```

### Flutterwave (Production)
```bash
npm install flutterwave-react-v3
```
```javascript
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--cyan` | `#00f0ff` |
| `--purple` | `#8b5cf6` |
| `--pink` | `#ff0080` |
| `--black` | `#050816` |
| `--font-display` | Orbitron |
| `--font-body` | Syne |
| `--font-mono` | JetBrains Mono |

---

## 📞 Contact

- **WhatsApp:** +2347087806251
- **Email:** edwardzethan792@gmail.com
- **Platform:** Rackyweb Global

---

*© 2025 Rackyweb Global. Built with ❤️ in Nigeria 🇳🇬*
