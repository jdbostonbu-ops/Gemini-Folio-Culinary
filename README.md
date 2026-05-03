# Culinary Archive 🍽️
A high-performance, visually-driven culinary catalog, designed as a fusion of three premium design philosophies: Neo-Brutalist typography, Glassmorphic depth, and Cinematic Grid transitions. Culinary Archive presents 20 essential recipes through immersive 180° card flips, a full-panel recipe modal, and a live filter and search system — all developed in pure Vanilla HTML, CSS, and JavaScript.

## 👤 Author
**Jacqueline**
[Check out my GitHub Profile](https://github.com/jdbostonbu-ops)
🚀 **[Launch — Culinary Archive](https://jdbostonbu-ops.github.io/Claude-fused-culinary-recipe-page/)**

<div align="center">
  <img src="premium_photo-1692781059203-3c4e76576845.avif" width="100%" alt="Culinary Archive Demo">
</div>

---

# 🌟 Key Features

- **180° Card Flip Reveal:** Each recipe card rotates on hover using CSS `transform: rotateY(180deg)` with `transform-style: preserve-3d` and `backface-visibility: hidden` — the front shows the full-bleed image and title, the back reveals key ingredients, time, serves, difficulty level, and a "View Full Recipe" button.
- **Full-Panel Recipe Modal:** Clicking "View Full Recipe" opens a two-column cinematic modal — the left side is a full-bleed image panel, and the right side delivers the complete ingredient list and numbered method steps using a custom animation easing.
- **Live Filter & Search System:** Five category filter pills (All, Savory, Sweet, Seafood, Vegetarian) combined with a debounced keyword search — results re-render with a staggered card entrance animation.
- **Custom Magnetic Cursor:** A dual-layer custom cursor system — a solid dot that moves at native speed and a trailing ring that follows with `0.12` lerp dampening.
- **Cinematic Hero Section:** Full-viewport hero with animated scroll-reveal staggered text, a gold ticker-tape headline bar, and a sweeping animated scroll-cue line.
- **Zero Dependencies:** Pure Vanilla HTML5, CSS3, and JavaScript ES6+ — no frameworks, no build tools, no npm.

---

# 🎨 Design Philosophy — Three Styles, One Vision

This project fuses all three design concepts into a single aesthetic:

### 1. Neo-Brutalist (Style #1)
- **Bebas Neue** display font — bold, high-contrast typographic authority
- `#e8c84a` gold on a near-black `#0a0a08` background — maximum contrast ratio
- `box-shadow` offset on interactive buttons — the signature brutalist outline
- Solid gold ticker-tape headline running at full viewport width

### 2. Glassmorphic (Style #2)
- Sticky filter bar: `backdrop-filter: blur(20px)` over scrolling content
- Recipe modal overlay: `backdrop-filter: blur(24px)` with frosted-glass backdrop
- Card backs: inner glow achieved via translucent box shadows
- Consistent glass border system: `border: 1px solid var(--glass-border)`

### 3. Cinematic Grid (Style #3)
- Full-bleed `object-fit: cover` images with color transitions on hover
- Cinematic two-panel modal with the image filling the entire left column
- Film-grain noise texture overlay on the hero section using SVG `feTurbulence`

---

# 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+) — `IntersectionObserver`, `requestAnimationFrame`, `debounce`, and keyboard navigation
- **Styling:** CSS3 — Custom properties, CSS Grid, Flexbox, and `cubic-bezier` transitions
- **Typography:** Bebas Neue, DM Serif Display, and DM Mono via Google Fonts
- **Deployment:** GitHub Pages

---

# 🚀 The User Flow

- **Land:** Full-viewport cinematic hero with staggered text reveal and scrolling gold ticker
- **Filter:** Select a category pill (Savory, Sweet, Seafood, Vegetarian) — the grid re-renders with staggered animation
- **Search:** Type in the search field — debounced live search across title, tags, and ingredients
- **Flip:** Hover any recipe card — 180° rotation reveals ingredients and difficulty
- **Explore:** Click "View Full Recipe →" — a cinematic modal opens with ingredients and numbered steps
- **Contact:** Click "CONTACT US" in the navigation bar to smoothly scroll down to the bottom of the page