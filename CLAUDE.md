# CLAUDE.md — clinicFlow360Landing

## Source of Truth

Priority order for decisions:

1. `docs/technical-blueprint.md` (technical decisions)
2. `docs/master-prompt.md` (product, copy, UX)
3. Current repository state
4. Agent judgment

## Stack Rules

- **pnpm** only. No npm, yarn, or bun.
- **Next.js 16** with App Router. No Pages Router.
- **Server Components by default.** Only use `"use client"` where interaction exists.
- **Tailwind CSS 4.3** CSS-first. No `tailwind.config.js`.
- **motion** package (`import { motion } from "motion/react"`). NOT `framer-motion`.
- **GSAP** only for scroll-driven pinned storytelling. Use `useGSAP()` from `@gsap/react`.
- **Lenis** only on desktop (`pointer: fine`). Disabled for `prefers-reduced-motion`.
- **No** Three.js, Lottie, Spline, Swiper, AOS, jQuery, Bootstrap, MUI, Chakra, Ant Design.
- **No** Zustand, Redux, TanStack Query, Axios, lodash, moment, dayjs.
- **No** `shadcn add --all`. Add only needed components.

## Animation Ownership

Never control the same CSS property on the same element with both Motion and GSAP.

| Effect | Owner |
|--------|-------|
| Button hover/focus | CSS |
| Hero reveals, chat bubbles, floating cards | Motion |
| Scroll pinned storytelling | GSAP |
| Before/after drag | React Pointer Events |
| FAQ accordion | Base UI |
| Desktop smooth scroll | Lenis |
| Mobile scroll | Native |

## Validation

```bash
pnpm lint
pnpm build
```

Run after every sprint. Zero errors, zero warnings.

## Content Rules

- Spanish for UI copy (LATAM natural).
- English for code, comments, commits, documentation.
- **Never invent** prices, metrics, testimonials, certifications, clients, logos.
- Copy in `data/` files for future i18n readiness.

## Do Not

- Do not add dependencies without justification (see Blueprint §103-105).
- Do not use `"use client"` on page.tsx, layout.tsx, or static sections.
- Do not create global state for landing page.
- Do not use `@ts-ignore`. Use `@ts-expect-error` with explanation if needed.
- Do not leave `console.log` or `debugger` in code.
- Do not hardcode WhatsApp number, URLs, or config in multiple components. Use `lib/config.ts`.
