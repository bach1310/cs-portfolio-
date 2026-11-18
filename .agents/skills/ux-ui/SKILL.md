---
name: ux-ui
description: Professional UX/UI design guidelines based on DTCG design tokens, WCAG 2.2 accessibility, component anatomy, and micro-interactions.
---

# UX/UI Agent Skill: Design System & Experience Architecture

This skill provides senior-level UX/UI architectural principles, DTCG design tokens, and accessibility standards for modern web applications.

## 1. Design Token Hierarchy (DTCG Standard)
- **Primitive Tokens**: Raw hex values (e.g., slate-900 `#0f172a`, sky-600 `#0284c7`).
- **Semantic Tokens**: Contextual roles (surface, foreground, muted, border, primary-accent, success-accent).
- **Component Tokens**: Button heights, card border radii, badge padding.

## 2. Accessibility Guidelines (WCAG 2.2 AA)
- **Contrast Ratio**: Normal text must have at least 4.5:1 contrast against its background; large text at least 3:1.
- **Touch Target**: Interactive elements must provide at least 44x44px touch targets on mobile viewports.
- **Keyboard Navigation**: All interactive elements must show visible `focus-visible:ring-2 focus-visible:ring-sky-500` rings.
- **Reduced Motion**: Respect `prefers-reduced-motion` for transitions.

## 3. Component Anatomy & States
- Every interactive component must define states:
  - Default
  - Hover (`hover:border-slate-300 hover:shadow-md`)
  - Active / Pressed
  - Focus-visible
- Visual hierarchy: Display > Section Title > Card Title > Body > Metadata/Footnote.
- Spacing: Consistent scale using 4px/8px rhythm (p-2, p-3, p-4, p-6, p-8).

## 4. Micro-Interactions & Polish
- Subtle transform lifts on card hovers (`hover:-translate-y-0.5 transition-all duration-200`).
- Arrow icon animations on link hover (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`).
- Clear status indicators with pulsing ambient dots.
