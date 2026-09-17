# ClinicFlow360 Landing — Plan Maestro de Implementación

> **Fuente de verdad técnica:** `docs/technical-blueprint.md`
>
> **Fuente de verdad de producto:** `docs/master-prompt.md`
>
> En conflictos técnicos, el Technical Blueprint tiene prioridad.

---

## Stack Oficial

```
Runtime
├── Node.js 22 LTS
└── pnpm

Core
├── Next.js 16.3.5
├── React 19.2
└── TypeScript strict

Styling
├── Tailwind CSS 4.3 (CSS-first, sin tailwind.config.js)
├── CSS Variables (@theme)
└── shadcn/ui + Base UI

Typography
└── Geist (next/font)

Icons
└── Lucide React

Animation (3 niveles)
├── CSS transitions       → microinteractions (hover, focus, shadows)
├── motion 13.4.x         → React UI animations (reveals, chat, stagger)
├── GSAP 3.15.x           → scroll storytelling pinned (timeline, phone)
├── @gsap/react 2.1.x     → React GSAP lifecycle
└── Lenis 1.3.26          → desktop smooth scroll (pointer: fine only)

Images
├── next/image
├── AVIF / WebP
└── Optimized screenshots

Forms (solo si se necesitan)
├── React Hook Form
└── Zod

Testing
├── Playwright (E2E)
└── axe-core (a11y, opcional)

Deployment
└── Vercel

Analytics
└── Adapter pattern → PostHog o GA4 (futuro)

Billing
└── Provider abstraction → Tilopay / BAC (futuro)
```

---

## Arquitectura de Secciones (18 secciones)

```
 1. Navbar
 2. Hero
 3. Product Showcase
 4. Social Proof
 5. Unified Platform
 6. Recepcionista IA (dark section)
 7. App Móvil (GSAP pinned showcase)
 8. Antes / Después (slider interactivo)
 9. Dictado de Voz
10. Paciente + Odontograma
11. WhatsApp Automático
12. Un Día con ClinicFlow360 (GSAP pinned story)
13. Seguridad
14. Pricing
15. Testimonios
16. FAQ
17. CTA Final
18. Footer
```

---

## 3 Signature Interactions

Estas son las interacciones memorables que definen la experiencia:

### Signature 1 — Hero Connected Workflow
```
WhatsApp → IA responde → Paciente elige → Cita en agenda → Push al doctor
```
**Tech:** Motion (chat bubbles, floating cards, notification)

### Signature 2 — Doctor Mobile Scroll Story
```
Agenda → Paciente → Cámara → Before/After → Dictado
```
**Tech:** GSAP ScrollTrigger (phone pinned, screens cambian con scroll)

### Signature 3 — Un Día con ClinicFlow360
```
7:10 AM mensaje → IA responde → Agenda → Recordatorio → Push → Expediente → Fotos → Nota → Completo
```
**Tech:** GSAP ScrollTrigger (timeline pinned, escenas sincronizadas)

---

## Matriz de Responsabilidad de Animaciones

| UI / Efecto | Tecnología |
|---|---|
| Button hover / focus | CSS |
| Navbar transitions | CSS / Motion mínimo |
| Hero copy reveal (badge, H1, CTA) | Motion |
| Floating product cards | Motion |
| AI chat bubbles | Motion |
| Appointment notification card | Motion |
| Product screen crossfade | Motion |
| Doctor app pinned showcase | GSAP ScrollTrigger |
| Day-with-ClinicFlow story | GSAP ScrollTrigger |
| Before/after dragging | React Pointer Events |
| Before/after intro reveal | Motion |
| Voice waveform | CSS/SVG + Motion opcional |
| FAQ accordion | Base UI |
| Smooth desktop scroll | Lenis |
| Mobile scroll | Native |
| Reduced motion fallback | Static / minimal fade |

**Regla crítica:** nunca controlar la misma propiedad CSS del mismo elemento con Motion y GSAP simultáneamente.

---

## Performance Targets

### Lighthouse Desktop
```
Performance       >= 95
Accessibility     >= 95
Best Practices    >= 95
SEO               >= 95
```

### Lighthouse Mobile
```
Performance       >= 90
Accessibility     >= 95
Best Practices    >= 95
SEO               >= 95
```

### Core Web Vitals
```
LCP  < 2.0 s  (target interno)
CLS  < 0.05   (target interno)
INP  < 200 ms
```

### JS Budget
```
Initial client JS: < 180 KB gzip
```

---

## Sprints de Implementación

### Sprint 0 — Infrastructure
**Objetivo:** Foundation técnica completa antes de escribir UI.

- [ ] Inicializar Next.js 16.3.5 con pnpm, TypeScript, Tailwind 4.3, App Router, src/
- [ ] Crear `.nvmrc` (Node 22)
- [ ] Configurar TypeScript strict (`noUncheckedIndexedAccess`, `noImplicitOverride`, `noFallthroughCasesInSwitch`)
- [ ] Configurar design tokens en `globals.css` con `@theme` (paleta, radius, spacing)
- [ ] Configurar tipografía Geist via `next/font`
- [ ] Instalar y configurar shadcn/ui con Base UI (solo button, accordion, sheet, tooltip)
- [ ] Instalar animation stack: `motion@13.4.x`, `gsap@3.15.x`, `@gsap/react@2.1.x`, `lenis@1.3.26`
- [ ] Crear `lib/motion/easings.ts` (easeOutPremium, easeInOutPremium)
- [ ] Crear `lib/motion/variants.ts` (fadeUp, fadeIn, scaleIn, staggerContainer)
- [ ] Crear `lib/motion/reduced-motion.ts` (useReducedMotion hook)
- [ ] Crear `hooks/use-media-query.ts`
- [ ] Crear SmoothScrollProvider (Lenis solo desktop, desactivado en reduced-motion)
- [ ] Crear `data/` con archivos de contenido estático (navigation.ts, pricing.ts, faq.ts, features.ts)
- [ ] Crear `lib/analytics/` con wrapper `track()` abstracto
- [ ] Crear `lib/billing/provider.ts` con interface BillingProvider
- [ ] Crear `app/layout.tsx` (Server Component, fonts, providers)
- [ ] Crear `app/page.tsx` (Server Component, shell de secciones)
- [ ] Crear `app/robots.ts` y `app/sitemap.ts`
- [ ] Crear estructura de `public/landing/` (hero/, mobile/, patient/, before-after/, logos/, social/)
- [ ] Crear `lib/config.ts` con siteConfig
- [ ] Configurar Prettier
- [ ] Ejecutar `pnpm lint && pnpm build` — cero errores

**Quality Gate:** Build limpio, tokens aplicados, Lenis funcional en desktop.

---

### Sprint 1 — Hero
**Objetivo:** Primera impresión premium. Hero entendible en 5 segundos.

- [ ] Navbar sticky (transparente → blur al scroll, border sutil)
- [ ] Mobile menu con Sheet (shadcn)
- [ ] Hero Server Component (shell: badge, H1, subheadline, CTAs, microcopy)
- [ ] Hero Product Demo Client Component (island interactivo)
- [ ] BrowserMockup component (agenda con citas demo)
- [ ] AIChatCard component (conversación WhatsApp)
- [ ] DoctorPhone component (smartphone con agenda del doctor)
- [ ] Hero entrance sequence (Motion: badge 0ms → H1 80ms → sub 180ms → CTA 280ms → product 450ms → cards 620ms)
- [ ] Hero demo simplificado (composición estática con micro-animaciones, NO loop completo aún)
- [ ] Responsive hero: mobile layout específico (no comprimir desktop)
- [ ] `prefers-reduced-motion` respetado
- [ ] CTA "Probar gratis 14 días" (sin redirect por ahora)
- [ ] CTA "Ver demo" oculto/deshabilitado (pendiente video)
- [ ] Ejecutar `pnpm lint && pnpm build`

**Quality Gate:** Hero impacta en 5 segundos, producto es protagonista, mobile rediseñado.

---

### Sprint 2 — Core Story
**Objetivo:** Contar por qué ClinicFlow360 es diferente.

- [ ] Product Showcase section (dashboard principal con callouts)
- [ ] Social Proof section ("Diseñado junto a profesionales de la salud dental")
- [ ] Unified Platform section (Before: 6 herramientas → After: ClinicFlow360 conecta todo)
- [ ] AI Receptionist section (dark premium, fondo ~#061525 con radial blue)
- [ ] AI demo conversation animada (Motion: typing → response → opciones → booking)
- [ ] AI capabilities list
- [ ] AI CTA futuro preparado pero oculto (WhatsApp demo)
- [ ] Mobile App section (smartphone grande)
- [ ] Mobile scroll sequence simplificado (chips: Agenda, Push, Pacientes, Imágenes, Dictado)
- [ ] Responsive en todas las secciones
- [ ] Ejecutar `pnpm lint && pnpm build`

**Quality Gate:** Narrativa fluida hero → showcase → IA. Sección IA se siente premium/dark.

---

### Sprint 3 — Clinical Visual
**Objetivo:** Mostrar capacidades clínicas con visuales impactantes.

- [ ] Before/After slider (React Pointer Events + CSS clip-path, sin librería externa)
  - Soporta mouse, touch, keyboard (Arrow, Home, End)
  - Intro reveal con Motion (clip 35% → 50%)
  - Imágenes placeholder (no clínicas reales)
- [ ] Voice Notes section (phone + waveform CSS/SVG + transcripción)
  - Waveform: 20-32 bars, scaleY animation
  - Demo: "Grabando 00:18" → texto transcrito → [Revisar] [Guardar]
- [ ] Patient Record section (ficha demo: Andrea Martínez, tabs, odontograma mockup)
  - Odontograma CSS mockup con notación FDI
  - Tabs: Resumen, Historia, Odontograma, Imágenes, Citas
- [ ] Responsive en todas las secciones
- [ ] Ejecutar `pnpm lint && pnpm build`

**Quality Gate:** Slider accesible por teclado, waveform fluido, odontograma se ve real.

---

### Sprint 4 — Automation & Storytelling
**Objetivo:** Las dos signature interactions de scroll.

- [ ] WhatsApp Automation section (timeline: cita → 24h antes → 2h antes → confirmó)
- [ ] GSAP ScrollTrigger setup para Day with ClinicFlow360
  - Desktop: section pinned, izq timeline, der visual activo
  - 9 escenas sincronizadas con scroll
  - Mobile fallback: cards verticales con Motion inView
  - `gsap.matchMedia()` para desktop/mobile separation
  - Lazy preload cuando sección esté ~1000px del viewport
- [ ] GSAP + Lenis sincronización verificada
- [ ] Pausar animaciones cuando `document.hidden === true`
- [ ] `prefers-reduced-motion` → skip pinned, mostrar static
- [ ] Ejecutar `pnpm lint && pnpm build`
- [ ] Medir performance (post-GSAP check)

**Quality Gate:** Scroll storytelling fluido, sin jank, mobile fallback funcional.

---

### Sprint 5 — Conversion
**Objetivo:** Cerrar la venta. Secciones de confianza y acción.

- [ ] Security section (cifrado, roles, permisos, aislamiento, auditoría — solo capacidades reales)
- [ ] Pricing section (3 planes: Esencial, Pro, AI — precios placeholder $XX/mes)
  - Plan AI destacado (border, shadow, badge)
  - Tabla de comparación de features
  - CTA por plan (sin redirect)
- [ ] Testimonials section (placeholder: "Diseñado junto a profesionales..." — sin testimonios inventados)
- [ ] FAQ section (12 preguntas con Accordion shadcn/Base UI)
- [ ] FAQ structured data (JSON-LD FAQPage)
- [ ] Final CTA section ("Menos tiempo administrando. Más tiempo atendiendo.")
- [ ] Footer completo (Producto, Empresa, Recursos, Legal, Cuenta)
- [ ] SEO metadata (title, description, OG, Twitter, canonical)
- [ ] Structured data (Organization, SoftwareApplication)
- [ ] Ejecutar `pnpm lint && pnpm build`

**Quality Gate:** Pricing claro, FAQ accesible, footer completo, SEO metadata OK.

---

### Sprint 6 — Optimization & QA
**Objetivo:** Lighthouse targets, accesibilidad, responsive QA, production-ready.

- [ ] Dynamic imports para GSAP sections below fold
- [ ] Image optimization (AVIF/WebP, next/image, priority solo hero)
- [ ] Lazy loading de secciones pesadas
- [ ] Accessibility audit completo:
  - Keyboard navigation (tab, enter, escape, arrows)
  - Focus visible en todos los interactivos
  - Contraste AA verificado
  - Heading hierarchy (solo un H1)
  - Alt text apropiado
  - Before/after slider accesible
  - `prefers-reduced-motion` completo
- [ ] Responsive QA en 5 resoluciones:
  - 375×812 (iPhone SE/mini)
  - 390×844 (iPhone 14)
  - 768×1024 (iPad)
  - 1440×900 (laptop)
  - 1920×1080 (desktop)
- [ ] Safari considerations (sticky, vh→dvh, blur, clip-path)
- [ ] Eliminar console.log, debugger, TODO visibles
- [ ] Production build verificado
- [ ] Lighthouse desktop >= 95 (4 categorías)
- [ ] Lighthouse mobile >= 90 performance, >= 95 resto
- [ ] Playwright E2E tests básicos:
  - Homepage loads
  - Navbar links
  - Mobile menu
  - CTA visible
  - Pricing section
  - FAQ accordion
  - Before/after interaction
  - Reduced motion behavior
- [ ] Bundle size check (< 180 KB gzip initial)

**Quality Gate:** Todos los targets de performance, a11y y responsive cumplidos.

---

## Decisiones Diferidas (requieren input del usuario)

| Decisión | Estado | Notas |
|----------|--------|-------|
| Precios finales de planes | Placeholder `$XX/mes` | Necesita definición comercial |
| Duración del trial | "14 días" (tentativo) | Confirmar |
| Video demo | Pendiente producción | CTA oculto hasta que exista |
| Número WhatsApp demo | No existe | CTA de "Habla con nuestra recepcionista" deshabilitado |
| Screenshots reales | CSS mockups iniciales | Reemplazar cuando existan |
| Testimonios reales | No inventar | Agregar cuando existan con autorización |
| Métricas reales | No inventar | Agregar cuando existan datos verificables |
| Logos de clientes | No inventar | Solo con autorización explícita |
| Certificaciones | No afirmar | Solo cuando existan oficialmente |
| Provider de pagos | Tilopay/BAC (futuro) | Interface abstracta lista |
| Provider de analytics | PostHog/GA4 (futuro) | Wrapper `track()` listo |
| Países soportados | No definir | Landing en español para LATAM |
| App Store links | No publicadas | Agregar cuando estén disponibles |
| Formulario de contacto | No implementar aún | Definir destino (Calendly, form, etc.) |
| Páginas legales | No crear aún | Privacidad y Términos cuando existan |
| Dominio final | No definido | Configurar en Vercel cuando se decida |

---

## Commits Sugeridos

```
feat(landing): initialize project with Next.js 16, Tailwind 4.3, design system
feat(landing): add motion utilities, Lenis provider, and data files
feat(landing): build premium hero with product showcase
feat(landing): add AI receptionist dark section
feat(landing): add doctor mobile experience section
feat(landing): add clinical features (before/after, voice, patient)
feat(landing): add scroll-driven day timeline with GSAP
feat(landing): add pricing, FAQ, and conversion sections
feat(landing): add footer, SEO metadata, and structured data
perf(landing): optimize images, lazy loading, and bundle size
a11y(landing): improve reduced motion, keyboard, and focus UX
test(landing): add Playwright E2E tests
```
