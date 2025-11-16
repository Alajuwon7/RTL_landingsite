# Rush The Line — Landing Experience

A high-energy, AI-forward landing page for **Rush The Line**, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. The site follows the Rush design system: bold gradients, glassmorphism, speed-inspired motion, and human + AI storytelling.

## 🚀 Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS 4, custom CSS variables, glassmorphism utilities
- **Animation**: Framer Motion for scroll reveal, transitions, and interactive timelines
- **Icons**: lucide-react
- **Utilities**: clsx, class-variance-authority, tailwind-merge

## 📁 Project Structure
```
src/
  app/
    layout.tsx        # Metadata, Inter font, skip link
    page.tsx          # Landing page composition
    globals.css       # Design system variables & utility classes
  components/
    Navigation.tsx    # Sticky nav with mobile drawer
    Footer.tsx        # Responsive footer + socials
    shared/           # Button, Card, Section, GradientText helpers
  sections/
    Hero.tsx          # Hero with CTAs + live data panel
    Overview.tsx      # Brand story & value highlights
    TechGrowth.tsx    # Interactive milestone timeline (Framer Motion)
    Features.tsx      # Glass card feature grid
    HowItWorks.tsx    # 3-step traveler flow
    CTASection.tsx    # Primary waitlist call-to-action
  lib/
    design-tokens.ts  # Typed Rush design tokens
    utils.ts          # cn helper
rush-design-system.json # Full design system reference
```

## 🧱 Design System
- Color palette, gradients, spacing, typography, and component guidance live in `rush-design-system.json`.
- Core CSS variables and utility classes are defined in `src/app/globals.css`.
- Reusable helpers (buttons, cards, sections) reference these tokens for consistency.

## 🔧 Scripts
```bash
npm run dev     # Start local development server (http://localhost:3000)
npm run build   # Production build
npm run start   # Serve production build locally
npm run lint    # Run ESLint
```

## ✅ Implementation Highlights
- Sticky glass navigation with active section tracking & accessible mobile drawer
- Responsive hero with gradient headline, AI feature badges, and animated data card
- Overview section with human + AI narrative and iconography
- **Tech Growth** timeline: tabbed desktop experience + animated mobile timeline powered by Framer Motion
- Feature grid, traveler workflow, and hero-grade CTA section with hover & scroll animations
- Accessibility: skip link, focus-visible styles, reduced motion support, semantic HTML

## 🧪 Next Steps
- Connect waitlist CTA to backend or marketing tooling
- Add analytics (Plausible, GA4, etc.)
- Supply final brand imagery for hero and timeline accents (current visuals are CSS-based mockups)

## 📦 Deployment
- Vercel-ready. Update `next.config.ts` or environment variables as needed, then `npm run build` and deploy via Vercel CLI or dashboard.

---
Created with care to showcase the Rush The Line movement: **human + AI guidance for fearless airport navigation**.💫
