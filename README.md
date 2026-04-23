# QEVN — AI Business Automation Website

Production-grade Next.js 14 marketing website for QEVN.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D**: Three.js + React Three Fiber + Drei
- **Smooth Scroll**: Lenis
- **Fonts**: Plus Jakarta Sans (display), DM Sans (body), JetBrains Mono (mono)
- **Deployment**: Vercel-ready

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Calendly Setup

In `components/sections/CtaSection.tsx`, update the Calendly embed URL:

```tsx
src="https://calendly.com/YOUR_USERNAME/YOUR_EVENT_TYPE?..."
```

Replace `qevn/strategy-call` with your actual Calendly username and event slug.

## Project Structure

```
qevn/
├── app/
│   ├── globals.css          # CSS variables, base styles, animations
│   ├── layout.tsx           # Root layout with fonts + Lenis provider
│   └── page.tsx             # Main page composition
├── components/
│   ├── nav/
│   │   └── Navbar.tsx       # Sticky nav with scroll-triggered blur
│   ├── hero/
│   │   ├── HeroSection.tsx  # Hero layout with word-by-word animation
│   │   └── HeroCanvas.tsx   # R3F 3D neural network scene
│   ├── sections/
│   │   ├── TrustBar.tsx     # Infinite ticker
│   │   ├── Services.tsx     # 2×3 service card grid
│   │   ├── HowItWorks.tsx   # 3-step timeline
│   │   ├── Metrics.tsx      # Count-up stats
│   │   ├── Industries.tsx   # Pill tag grid
│   │   └── CtaSection.tsx   # CTA + Calendly modal
│   ├── footer/
│   │   └── Footer.tsx       # 4-column footer
│   ├── ui/
│   │   ├── Button.tsx       # Variant button system
│   │   ├── ServiceCard.tsx  # Hover-glow card
│   │   └── GlowBorder.tsx   # Reusable glow wrapper
│   └── providers/
│       └── SmoothScrollProvider.tsx  # Lenis wrapper
├── tailwind.config.ts
├── next.config.js
└── vercel.json
```

## Color System

```css
--bg-base:       #08090A   /* near-black base */
--bg-surface:    #0F1012   /* card surfaces */
--bg-elevated:   #16181C   /* hover states, modals */
--accent-primary: #C8F04B  /* electric lime — brand signal */
--accent-secondary: #4B8BF0 /* cool blue */
--text-primary:  #F2F2F0   /* off-white */
--text-muted:    #6B7280   /* grey subtext */
--border:        rgba(255,255,255,0.07)
```

## 3D Canvas Notes

The hero 3D scene (`HeroCanvas.tsx`) uses:
- **NodeNetwork**: 28 nodes with proximity-based edges, lime-tinted glow
- **ParticleField**: 600 instanced particles drifting slowly
- **Cursor parallax**: Mouse moves subtly rotate the mesh
- **Scroll fade**: Canvas opacity + scale reduce on scroll
- **WebGL fallback**: If WebGL is unavailable, renders a static radial gradient

Performance optimizations:
- `dpr={[1, 1.5]}` — caps pixel ratio
- `powerPreference: 'high-performance'` 
- `pointer-events: none` on canvas
- Dynamic import with `ssr: false`

## Deployment

```bash
# Deploy to Vercel
npx vercel

# Or push to GitHub and connect via Vercel dashboard
```

Environment variables needed: None (Calendly is embedded via public URL)

## Accessibility

- All animations respect `prefers-reduced-motion`
- Semantic HTML throughout
- Keyboard navigation support
- ARIA labels on interactive elements

## Customization

### Updating Calendly
Edit `src` in `CtaSection.tsx`:
```tsx
src="https://calendly.com/YOUR_SLUG?background_color=0F1012&text_color=F2F2F0&primary_color=C8F04B"
```

### Adding Services
Edit the `services` array in `Services.tsx`.

### Changing Metrics
Edit the `stats` array in `Metrics.tsx`. Set `numericEnd: null` for non-numeric values like "24/7".

### Brand Colors
Update CSS variables in `globals.css` and `tailwind.config.ts`.
