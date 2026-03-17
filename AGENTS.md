# AGENTS.md - Coffee2 Project Guidelines

This file provides guidelines for AI agents working on this codebase.

---

## 1. Project Commands

### Running the Project
Since this is a static HTML project:
```bash
# Option 1: Python HTTP server
python3 -m http.server 8000

# Option 2: npx serve
npx serve /Users/guille/proyectos/coffee2
```

### No Build Required
This is a pure HTML/CSS/JS project - no build process needed.

---

## 2. Code Style Guidelines

### HTML Structure
- Semantic HTML5 elements (header, main, section, footer)
- BEM-like class naming
- Clean indentation (2 spaces)

### CSS
- CSS variables for colors and fonts
- Mobile-first responsive approach
- Use clamp() for fluid typography
- Custom properties for consistency

### JavaScript
- Vanilla ES6+ JavaScript
- Use gsap.registerPlugin() for GSAP plugins
- Clean event listener patterns
- ScrollTrigger for scroll animations

### File Organization
```
coffee2/
├── index.html      # Main HTML file
├── css/
│   └── style.css   # All styles
├── js/
│   └── main.js     # GSAP animations
├── SKILL.md        # Frontend design guidelines
└── AGENTS.md       # This file
```

---

## 3. Design Guidelines

Follow the principles in SKILL.md:
- Distinctive typography (Cormorant Garamond + Outfit)
- Rich earthy color palette
- Elaborate animations with GSAP
- Geometric, art deco-inspired aesthetics
- Grain texture overlays
- Mobile responsive

---

## 4. Adding New Sections

When adding content:
1. Add semantic HTML structure
2. Use CSS variables for colors
3. Add ScrollTrigger animations in main.js
4. Follow existing naming conventions
5. Test responsive behavior
