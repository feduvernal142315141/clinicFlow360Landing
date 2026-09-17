# ClinicFlow360 Landing

Landing page SaaS premium para [ClinicFlow360](https://clinicflow360.com) — la plataforma que conecta tu clínica, tus doctores y tus pacientes.

## Stack

- **Next.js 16.3.5** (App Router, Server Components by default)
- **React 19.2** + **TypeScript** (strict)
- **Tailwind CSS 4.3** (CSS-first, design tokens via `@theme`)
- **shadcn/ui + Base UI** (accessibility primitives)
- **motion 13.4.x** (React UI animations)
- **GSAP 3.15.x** + **@gsap/react** (scroll storytelling)
- **Lenis 1.3.26** (smooth scroll, desktop only)
- **Lucide React** (icons)
- **Geist** (typography)

## Requirements

- Node.js 22 LTS
- pnpm

## Setup

```bash
nvm use
pnpm install
pnpm dev
```

## Commands

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm start        # Serve production build
pnpm lint         # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Server Component)
│   ├── page.tsx            # Landing page (Server Component)
│   ├── globals.css         # Design tokens, Tailwind config
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt
│
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── landing/            # Landing sections (18 sections)
│       ├── navbar/
│       ├── hero/
│       ├── product-showcase/
│       ├── social-proof/
│       ├── unified-platform/
│       ├── ai-receptionist/
│       ├── mobile-app/
│       ├── before-after/
│       ├── voice-notes/
│       ├── patient-record/
│       ├── whatsapp-automation/
│       ├── day-timeline/
│       ├── security/
│       ├── pricing/
│       ├── testimonials/
│       ├── faq/
│       ├── final-cta/
│       └── footer/
│
├── data/                   # Static content (pricing, FAQ, features)
├── lib/
│   ├── analytics/          # Analytics wrapper
│   ├── billing/            # Billing provider abstraction
│   ├── motion/             # Easings, variants, reduced-motion
│   ├── seo/                # Structured data helpers
│   └── config.ts           # Site configuration
│
├── hooks/                  # Custom hooks
└── types/                  # TypeScript types
```

## Documentation

- **[PLAN.md](./PLAN.md)** — Master implementation plan with sprints
- **[BACKLOG.md](./BACKLOG.md)** — Deferred items and pending features
- **[docs/master-prompt.md](./docs/master-prompt.md)** — Product, copy, UX, and section architecture
- **[docs/technical-blueprint.md](./docs/technical-blueprint.md)** — Technical stack, animation rules, performance targets

## Animation Rules

| Level | Technology | Use |
|-------|-----------|-----|
| 1 | CSS | Hover, focus, shadows, simple transitions |
| 2 | motion | Reveals, chat bubbles, stagger, floating cards |
| 3 | GSAP | Scroll-driven pinned storytelling |

**Critical rule:** Never control the same CSS property on the same element with both Motion and GSAP.

## Performance Targets

- Lighthouse Desktop: >= 95 (all categories)
- Lighthouse Mobile: >= 90 performance, >= 95 rest
- LCP < 2.0s, CLS < 0.05, INP < 200ms
- Initial client JS: < 180 KB gzip

## Deployment

Vercel (recommended). Connect this repository and deploy.
