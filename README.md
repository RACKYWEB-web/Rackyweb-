# 🌍 Rackyweb Promote v2.0
### Powered by Rackyweb Global Media
**Where Business Meets Innovation**
*Promote. Grow. Dominate.*

---

## 🎨 Design Theme
- **Background:** Deep navy blue (`#030b1a`) — premium, professional, world-class
- **Primary accent:** Gold (`#f59e0b`, `#fbbf24`) — luxury, authority, trust
- **Secondary accent:** Blue (`#3b82f6`, `#93c5fd`) — tech, global, innovation
- **Typography:** Sora (display) + Plus Jakarta Sans (body) + JetBrains Mono (code/labels)
- **Logo:** Your actual Rackyweb Global Media logo used throughout

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Opens at http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
rackyweb-promote/
├── public/
│   └── logo.png                  ← Your Rackyweb logo
├── src/
│   ├── components/
│   │   ├── UI.jsx                ← Particles, Counter, Typewriter, Logo, Toast, etc.
│   │   ├── Navbar.jsx            ← Responsive navigation with logo
│   │   ├── Footer.jsx            ← Newsletter, links, contact, social
│   │   ├── AdCard.jsx            ← Business listing card component
│   │   └── AIAssistant.jsx       ← Floating RackyAI chatbot
│   ├── pages/
│   │   ├── HomePage.jsx          ← Hero, stats, featured, why us, CTA
│   │   ├── MarketplacePage.jsx   ← Ad listings, filters, search, detail view
│   │   ├── PlansPage.jsx         ← Pricing, comparison table, FAQ, payment modal
│   │   ├── DashboardPage.jsx     ← Full advertiser dashboard (6 tabs)
│   │   ├── BlogPage.jsx          ← Blog listing + article reader
│   │   └── AboutPage.jsx         ← Mission, team, contact form
│   ├── data/
│   │   └── data.js               ← All platform data (global, no regional)
│   ├── styles/
│   │   └── global.css            ← Design system, variables, animations
│   ├── App.jsx                   ← Root app with routing + back-to-top
│   └── main.jsx                  ← React entry point
├── index.html                    ← HTML shell with Google Fonts + favicon
├── vite.config.js
├── package.json
└── README.md
```

---

## ✨ Features

### 🏠 Homepage
- Fullscreen animated hero with particle canvas background
- Typewriter headline animation
- Floating glassmorphism preview cards
- Animated statistics counters
- 4 CTA buttons (Advertise, Promote, Featured, Explore)
- Trust badges (Paystack, Flutterwave, SSL, GDPR)
- Featured businesses section
- "Why Rackyweb Promote" — 6 value props + 340% ROI callout
- Payment provider logos
- Full-width CTA banner with logo

### 🛒 Marketplace
- Grid / List view toggle
- Search across names, descriptions, categories
- Filter by 15 categories
- Sort: Popular / Trending / Featured
- Ad detail page with full stats & contact buttons
- WhatsApp + Website direct contact

### 💳 Plans
- Free / Starter ($49) / Pro ($149) / Enterprise ($499)
- Monthly / Yearly billing toggle (20% yearly discount)
- Full feature comparison table
- 3-step payment modal (Paystack, Flutterwave, Stripe)
- FAQ accordion

### 💼 Dashboard (6 tabs)
- **Overview:** KPI cards, weekly bar charts, active campaigns
- **Campaigns:** Pause/resume, stats, budget progress
- **Create Ad:** 3-step wizard with category selector
- **Analytics:** Weekly bar chart, traffic sources
- **Notifications:** Unread badge, mark all read
- **Settings:** Profile editor, notification toggles

### 📝 Blog
- Category filter
- Featured article hero
- Article detail with related posts
- Newsletter signup

### 🏢 About
- Mission & values
- Edward Prince founder spotlight with logo
- Team grid
- Contact form + direct contact cards
- Partnership callout

### 🤖 AI Assistant
- Floating RackyAI chatbot
- Quick suggestion chips
- Typing animation
- Gold-themed UI

---

## 💳 Payment Integration (Production)

### Paystack
```bash
npm install @paystack/inline-js
```
```js
import PaystackPop from '@paystack/inline-js'
const popup = new PaystackPop()
popup.checkout({
  key: 'pk_live_YOUR_KEY',
  email: form.email,
  amount: planAmount * 100, // kobo
  currency: 'NGN',
  callback: (res) => { /* handle success */ }
})
```

### Flutterwave
```bash
npm install flutterwave-react-v3
```

### Stripe
```bash
npm install @stripe/stripe-js
```

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#030b1a` | Page background |
| `--gold` | `#f59e0b` | Primary accent |
| `--gold-light` | `#fbbf24` | Hover states, highlights |
| `--blue` | `#1d4ed8` | Secondary accent |
| `--blue-light` | `#3b82f6` | Links, tags |
| `--font` | Plus Jakarta Sans | Body text |
| `--font-d` | Sora | Headlines, buttons |
| `--font-m` | JetBrains Mono | Labels, stats |

---

## 📞 Contact

- **WhatsApp:** +2347087806251
- **Email:** edwardzethan792@gmail.com
- **Portfolio:** [rackyweb-web.github.io/RACKYWEB-About-me](https://rackyweb-web.github.io/RACKYWEB-About-me/)

---

*© 2025 Rackyweb Global Media — Where Business Meets Innovation*
*Built by Edward Prince, Founder & CEO*
