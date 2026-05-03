# Culinary Archive 🍽️

A high-performance, visually-driven culinary catalog, designed using a minimalist aesthetic with dynamic interactions, cinematic card flips, and complete accessibility features. The application presents 20 essential recipes through a full-panel recipe modal and a live filter and search system—all developed in pure Vanilla HTML, CSS, and JavaScript.

## 👤 Author

**Jacqueline**
[Check out my GitHub Profile](https://github.com/jdbostonbu-ops)
🚀 **[Launch — Culinary Archive](https://jdbostonbu-ops.github.io/Gemini-Folio-Culinary/)**

<div align="center">
  <img src="src/folio.gif" width="100%" alt="Culinary Archive Demo">
</div>

---

# 🌟 Key Features

- **180° Card Flip Reveal:** Each recipe card rotates on hover using CSS `transform: rotateY(180deg)`—the front shows a full-bleed image with an indicator for difficulty, and the back reveals key ingredients, time, serves, and a "View Full Recipe" button.
- **Full-Panel Recipe Modal:** Clicking "View Full Recipe" opens a two-column cinematic modal—the left side displays the image panel, and the right side presents the ingredients and numbered method steps.
- **Live Filter & Search System:** Category filter pills combined with a debounced 200ms keyword search, complete with a staggered entrance animation.
- **Keyboard Navigation & Accessibility:** Built-in `tabindex`, `aria-pressed`, and keydown listeners (`Enter`/`Space`) allow seamless non-mouse exploration.
- **Minimalist Design Language:** Clean typography utilizing the `Roboto` font family, along with a cohesive dark aesthetic featuring dynamic accent color-coding for difficulty levels.

---

# 🎨 Component Architecture

The application follows a unidirectional flow to guarantee that any state change maintains UI performance and responsiveness:

```text
       [ User Interaction ]
                 │
                 ▼
       [ State / Filter / Search ]
                 │
                 ▼
       [ renderGrid(RECIPES) ]
                 │
                 ▼
     [ DOM Elements & Templates ]
                 │
                 ▼
      [ Smooth Entrance Animation ]
