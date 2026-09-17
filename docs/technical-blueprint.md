# ClinicFlow360 — Technical Blueprint para Landing SaaS Premium

> **Documento obligatorio para Codex / Claude Code / agentes de desarrollo**
>
> Este archivo es el complemento técnico de:
>
> `clinicflow360_landing_master_prompt.md`
>
> El documento maestro define **qué debe comunicar y mostrar la landing**.
>
> ESTE documento define **exactamente cómo debe construirse**.
>
> En caso de conflicto sobre stack, arquitectura frontend, animaciones, performance o estructura del código, **este Technical Blueprint tiene prioridad**.

---

# 0. OBJETIVO TÉCNICO

Construir una landing SaaS de nivel internacional para ClinicFlow360 que cumpla simultáneamente cuatro objetivos:

1. **Impacto visual premium.**
2. **Animaciones sofisticadas y fluidas.**
3. **Carga extremadamente rápida.**
4. **Código mantenible y entendible por humanos y agentes IA.**

La página debe sentirse comparable en calidad percibida a sitios premium de:

- Linear
- Vercel
- Stripe
- Framer
- Apple product pages
- NexHealth
- SaaS health-tech de primer nivel

Pero NO debe copiar ninguno.

La prioridad NO es añadir la mayor cantidad posible de efectos.

La prioridad es:

> **producto + narrativa + movimiento + performance.**

---

# 1. PRINCIPIO ARQUITECTÓNICO

Usar:

> **Server Components por defecto. Client Components solamente donde exista interacción real.**

La página NO debe convertirse en un gigantesco:

```tsx
"use client"
```

Eso está prohibido.

La landing debe aprovechar Next.js App Router para servir la mayor cantidad posible de HTML estático desde servidor.

Solo deben hidratarse:

- hero animado,
- chat IA,
- sliders,
- timelines interactivos,
- secciones que usan Motion,
- secciones que usan GSAP,
- menú móvil,
- FAQ accordion,
- pricing toggle si existe,
- componentes interactivos.

---

# 2. STACK OBLIGATORIO

## Runtime

### Node.js

Usar:

```text
Node.js 22 LTS
```

Crear:

```text
.nvmrc
```

Contenido:

```text
22
```

No utilizar Bun como runtime de producción.

---

## Package Manager

Usar exclusivamente:

```text
pnpm
```

No mezclar:

- npm
- yarn
- bun

Commit obligatorio:

```text
pnpm-lock.yaml
```

Una vez instalado el proyecto y generado el lockfile:

> **NO actualizar dependencias por iniciativa propia durante la implementación.**

---

# 3. FRAMEWORK

## Next.js

Versión base definida para este proyecto:

```text
Next.js 16.3.5
```

Utilizar:

```text
App Router
```

NO Pages Router.

Referencia oficial consultada en septiembre de 2026:

https://nextjs.org/docs

La documentación oficial mostraba Next.js `16.3.5` como versión actual al definir esta arquitectura.

---

# 4. REACT

Utilizar:

```text
React 19.2
```

No instalar:

- canary manual,
- experimental manual,
- forks.

Aceptar las versiones compatibles instaladas por el ecosistema Next 16.

Referencia:

https://react.dev/versions

React 19.2 aparece como la versión estable actual.

---

# 5. TYPESCRIPT

TypeScript obligatorio.

Configuración:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

Reglas:

- evitar `any`,
- preferir tipos explícitos para APIs y data structures,
- usar `unknown` donde aplique,
- no ignorar errores con `@ts-ignore`,
- no abusar de type assertions.

Si excepcionalmente se necesita:

```ts
// @ts-expect-error
```

debe contener explicación.

---

# 6. CSS / DESIGN SYSTEM

## Tailwind CSS

Versión:

```text
Tailwind CSS 4.3
```

Referencia:

https://tailwindcss.com/docs/installation/framework-guides/nextjs

No usar Tailwind v3.

No crear:

```text
tailwind.config.js
```

solo por costumbre.

Tailwind v4 debe configurarse siguiendo su modelo actual CSS-first.

---

# 7. DESIGN TOKENS

Todos los valores visuales recurrentes deben vivir como design tokens.

Usar CSS variables + Tailwind v4.

Ejemplo:

```css
@theme {
  --color-brand-50: #eff8ff;
  --color-brand-100: #dff1ff;
  --color-brand-500: #079cfb;
  --color-brand-600: #037ecc;
  --color-brand-700: #025f9a;

  --color-accent: #2dd4bf;

  --color-ink: #0f172a;
  --color-muted: #64748b;
  --color-surface: #ffffff;
  --color-surface-soft: #f8fafc;
  --color-border: #e2e8f0;
}
```

---

## Paleta base ClinicFlow360

```text
Primary             #037ECC
Bright Blue         #079CFB
Dark Blue           #025F9A
Teal                #2DD4BF

Ink                 #0F172A
Muted               #64748B
Soft Background     #F8FAFC
White               #FFFFFF
Border               #E2E8F0
```

---

# 8. COMPONENT SYSTEM

Usar:

```text
shadcn/ui
```

con:

```text
Base UI
```

como primitives para proyectos nuevos.

En julio de 2026 shadcn convirtió Base UI en su opción predeterminada para nuevos proyectos.

Referencia:

https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default

---

## Filosofía

shadcn NO debe determinar la estética final.

Usarlo para:

- accessibility primitives,
- Dialog,
- Sheet,
- Accordion,
- Tooltip,
- Dropdown,
- Button foundations si conviene.

Después customizar completamente.

ClinicFlow360 necesita identidad propia.

---

## No instalar todo shadcn

PROHIBIDO:

```bash
shadcn add --all
```

Agregar únicamente componentes necesarios.

Esto evita:

- archivos muertos,
- dependencias innecesarias,
- confusión para agentes futuros.

---

# 9. TIPOGRAFÍA

Usar:

```text
Geist
```

mediante la integración optimizada de Next.

Preferencia:

```tsx
import { Geist, Geist_Mono } from "next/font/google"
```

Si la versión instalada de Next expone Geist de otra forma oficial, usar la opción soportada por esa versión.

Fallback:

```text
Inter
```

NO descargar manualmente archivos de fuentes.

---

## Typography scale

### Hero desktop

```text
font-size: clamp(3.75rem, 7vw, 5.25rem)
line-height: 0.98–1.04
letter-spacing: -0.045em
```

### H2

```text
clamp(2.5rem, 5vw, 4rem)
```

### Body large

```text
18–20px
line-height: 1.6
```

### Body

```text
16–18px
```

---

# 10. ICONOS

Usar exclusivamente como librería principal:

```text
lucide-react
```

No mezclar con:

- Heroicons,
- FontAwesome,
- Material Icons,
- React Icons,

salvo requerimiento específico.

Para iconos de marca:
usar SVG oficial optimizado.

---

# 11. ANIMATION STACK

Esta parte es crítica.

La landing usará TRES niveles de animación.

No improvisar.

---

# 12. NIVEL 1 — CSS

CSS/Tailwind será responsable de:

- hover de botones,
- pequeños cambios de color,
- focus,
- underline,
- sombras,
- transformaciones simples,
- transition opacity,
- pequeños hover lifts.

Ejemplo:

```css
transition:
  transform 180ms cubic-bezier(.2,.8,.2,1),
  box-shadow 180ms ease,
  background-color 180ms ease;
```

No usar una librería JS cuando CSS lo resuelve.

---

# 13. NIVEL 2 — MOTION FOR REACT

Librería principal de animación React:

```text
motion 13.4.x
```

Import correcto:

```tsx
import { motion } from "motion/react"
```

NO:

```tsx
import { motion } from "framer-motion"
```

El proyecto utilizará el paquete moderno:

```text
motion
```

Referencia:

https://motion.dev/docs/react

Versión investigada al crear este blueprint:

```text
13.4.0
```

---

## Motion se usa para

- entrance animations,
- reveals,
- stagger,
- floating UI,
- chat bubbles,
- notification cards,
- microinteractions,
- hover/tap gestures,
- modal transitions,
- layout animation,
- phone screen changes,
- small parallax,
- CTA interactions.

---

## Motion NO se usa para

- secciones pinned complejas,
- timelines enormes controlados por scroll,
- scroll choreography con múltiples escenas sincronizadas.

Eso corresponde a GSAP.

---

# 14. NIVEL 3 — GSAP

Usar:

```text
gsap 3.15.x
@gsap/react 2.1.x
```

Versión investigada:

```text
gsap       3.15.0
@gsap/react 2.1.2
```

Plugins permitidos:

```text
ScrollTrigger
```

Opcional:

```text
SplitText
```

solo si realmente mejora un headline importante.

No utilizar SplitText para cada título.

---

## GSAP se usa exclusivamente para

### A. Storytelling pinned

Ejemplo:

```text
Un día con ClinicFlow360
```

donde el usuario hace scroll y una escena fija cambia progresivamente.

### B. Hero orchestration compleja

Solo si Motion no es suficiente.

### C. Product walkthrough

Cuando varias interfaces:

```text
WhatsApp
→ agenda
→ app móvil
```

deben sincronizarse con precisión.

### D. Scroll-driven phone showcase

Ejemplo:

```text
Agenda
↓
Paciente
↓
Fotos
↓
Dictado
```

mientras el teléfono queda sticky/pinned.

---

# 15. REGLA CRÍTICA: MOTION VS GSAP

Nunca controlar la misma propiedad del mismo elemento simultáneamente con Motion y GSAP.

PROHIBIDO:

```text
Motion controla translateY
+
GSAP controla translateY
```

en el mismo DOM node.

Eso produce:

- conflictos de transforms,
- jitter,
- bugs,
- mantenimiento imposible.

---

## Ownership rule

Cada animación debe tener un dueño.

Ejemplo:

```text
Hero chat bubbles              Motion
Hero floating cards            Motion
Pinned doctor phone sequence   GSAP
Before/after drag              React Pointer Events
Button hover                   CSS
```

---

# 16. GSAP EN REACT

Usar siempre:

```text
@gsap/react
```

con:

```tsx
useGSAP()
```

NO crear timelines directamente en `useEffect` salvo razón documentada.

Ejemplo:

```tsx
"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function StorySection() {
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "+=2500",
          scrub: 0.8,
          pin: true,
        },
      })

      // timeline
    },
    { scope }
  )

  return <section ref={scope}>{/* ... */}</section>
}
```

La documentación oficial de GSAP recomienda `useGSAP()` porque maneja cleanup correctamente en React.

Referencia:

https://gsap.com/resources/React/

---

# 17. SMOOTH SCROLL

Usar:

```text
Lenis 1.3.26
```

PERO con restricciones estrictas.

Referencia:

https://github.com/darkroomengineering/lenis

Lenis actualmente trabaja sobre native scroll, mantiene compatibilidad con sticky/anchors y está diseñado para sincronización con GSAP.

---

## Desktop

Activar Lenis para:

```text
(pointer: fine)
```

---

## Mobile / touch

Preferir scroll nativo.

No aplicar artificialmente smooth scroll pesado en móviles.

---

## Reduced Motion

Si:

```css
prefers-reduced-motion: reduce
```

Lenis debe estar deshabilitado.

---

## Anchors

Si Lenis está activo:

```ts
anchors: true
```

para que navegación como:

```text
#pricing
#ai
#mobile
```

funcione correctamente.

---

# 18. LENIS + GSAP

Si ambas librerías están activas, debe existir UNA sincronización central.

No crear un Lenis por sección.

Solo una instancia global.

Arquitectura:

```text
SmoothScrollProvider
      │
      ├── Lenis
      │
      └── ScrollTrigger sync
```

No crear múltiples requestAnimationFrame loops independientes si pueden sincronizarse.

---

# 19. LIBRERÍAS QUE NO SE UTILIZARÁN

Por defecto, NO instalar:

```text
Three.js
React Three Fiber
Spline runtime
Lottie
Anime.js
AOS
ScrollMagic
Locomotive Scroll
Swiper
jQuery
Bootstrap
Material UI
Ant Design
Chakra UI
```

Razón:

La landing puede alcanzar nivel premium sin agregar peso y complejidad innecesaria.

---

# 20. WEBGL / 3D

No usar WebGL únicamente porque se vea “premium”.

ClinicFlow360 es un software.

El protagonista debe ser:

> **la interfaz del producto.**

Solo evaluar WebGL si existe una idea concreta aprobada donde contribuya a comunicar el producto.

---

# 21. VIDEO

NO colocar un video MP4 de 15–30 MB en el hero.

El hero principal debe construirse como:

```text
DOM + CSS + Motion
```

Ventajas:

- carga menor,
- responsive perfecto,
- texto crisp,
- fácil actualización,
- accesibilidad,
- SEO indirecto,
- control de animación.

Para demos extensas sí puede usarse video:

```text
WebM/MP4
```

pero:

- lazy-loaded,
- posterior al fold,
- poster optimizado,
- no autoplay con audio.

---

# 22. BEFORE / AFTER SLIDER

NO instalar librería.

Implementar internamente usando:

- React,
- Pointer Events,
- CSS clip-path,
- range semantics.

Debe soportar:

- mouse,
- touch,
- keyboard.

Arquitectura:

```text
BeforeAfterSlider
├── before image
├── after image
├── clipping layer
├── divider
└── accessible control
```

---

# 23. ESTADO

NO usar Zustand para la landing.

NO Redux.

NO Context global innecesario.

Prioridad:

1. Server data.
2. Component local state.
3. URL state si aplica.
4. Context únicamente para Lenis / global UI.
5. Zustand solo si en el futuro aparece una necesidad real.

---

# 24. FETCHING

La mayoría de la landing será estática.

No usar TanStack Query.

No usar SWR salvo necesidad futura.

Pricing y contenido inicial:

```text
TypeScript static data
```

Ejemplo:

```ts
export const plans = [...]
```

---

# 25. FORMS

Si se implementa formulario:

```text
React Hook Form
Zod
```

Validación compartida.

No instalar ambos hasta que exista un formulario real.

Si CTA redirige a signup:

no son necesarios inicialmente.

---

# 26. ESTRUCTURA SERVER / CLIENT

Ejemplo:

```text
app/page.tsx                         SERVER
components/landing/hero.tsx         SERVER wrapper
components/landing/hero-demo.tsx    CLIENT
components/landing/pricing.tsx      SERVER
components/landing/faq.tsx          CLIENT small island
```

No marcar toda una sección `use client` si solamente un pequeño elemento necesita interacción.

Separar:

```text
Static shell
+
Interactive island
```

---

# 27. RECOMMENDED PROJECT STRUCTURE

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── accordion.tsx
│   │   ├── sheet.tsx
│   │   └── ...
│   │
│   └── landing/
│       ├── navbar/
│       │   ├── navbar.tsx
│       │   └── mobile-menu.tsx
│       │
│       ├── hero/
│       │   ├── hero.tsx
│       │   ├── hero-product-demo.tsx
│       │   ├── ai-chat-card.tsx
│       │   ├── appointment-card.tsx
│       │   └── doctor-phone.tsx
│       │
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
├── data/
│   ├── navigation.ts
│   ├── features.ts
│   ├── pricing.ts
│   ├── faq.ts
│   └── testimonials.ts
│
├── lib/
│   ├── analytics/
│   ├── motion/
│   │   ├── easings.ts
│   │   ├── variants.ts
│   │   └── reduced-motion.ts
│   ├── billing/
│   ├── seo/
│   └── utils/
│
├── hooks/
│   ├── use-media-query.ts
│   └── use-reduced-motion.ts
│
└── types/
```

---

# 28. DESIGN SYSTEM ARCHITECTURE

No usar valores aleatorios por componente.

Crear escalas.

---

## Border radius

```text
xs    6px
sm    10px
md    14px
lg    20px
xl    28px
2xl   36px
full  9999px
```

---

## Premium surfaces

Product screenshots:

```text
border: rgba(...)
shadow:
0 1px 2px ...
0 12px 40px ...
0 40px 120px ...
```

No poner sombras enormes negras en cada card.

---

# 29. SPACING SYSTEM

Usar múltiplos coherentes.

Section desktop:

```text
padding-block:
120–180px
```

Mobile:

```text
72–96px
```

No todas las secciones tienen exactamente el mismo padding.

Alternar ritmo visual.

---

# 30. CONTAINER

Principal:

```text
max-width: 1280px
```

Texto largo:

```text
max-width: 720px
```

Hero copy:

```text
max-width: 900px
```

---

# 31. LAYOUT

Preferir:

```text
CSS Grid
Flexbox
```

No posicionar cada elemento con absolute.

`position: absolute` está permitido para:

- floating cards,
- decorative glow,
- overlays.

La estructura principal debe continuar siendo responsive naturalmente.

---

# 32. PREMIUM BACKGROUNDS

Permitido:

- gradients extremadamente sutiles,
- radial illumination,
- noise muy ligero,
- grid decorativo,
- soft blue glow.

No usar:

- purple neon SaaS cliché,
- 20 blobs flotantes,
- gradient rainbow.

---

# 33. NOISE / TEXTURE

Si se usa noise:

preferir CSS/data texture pequeña.

No cargar PNG de 3 MB para ruido.

Opacity:

```text
0.015 – 0.04
```

---

# 34. HERO — IMPLEMENTACIÓN TÉCNICA

Hero shell:

```text
Server Component
```

Hero demo:

```text
Client Component
```

---

## Hero visual hierarchy

```text
Hero
├── badge
├── H1
├── subheadline
├── CTAs
├── microcopy
└── ProductStage
    ├── BrowserMockup
    ├── AIChatCard
    ├── DoctorPhone
    └── Notification / status
```

---

## Hero entrance sequence

Timing recomendado:

```text
0ms      badge
80ms     H1
180ms    subheadline
280ms    CTA
450ms    main product window
620ms    floating cards
```

Entrada:

```text
opacity 0 → 1
y 18px → 0
scale .985 → 1
```

No usar:

```text
y: 100px
```

para cada elemento.

Premium = sutileza.

---

# 35. HERO DEMO LOOP

Después de entrance, iniciar demo.

Escena:

### Phase 1

Paciente escribe.

### Phase 2

Typing indicator.

### Phase 3

IA ofrece horarios.

### Phase 4

Paciente elige.

### Phase 5

Appointment card aparece en agenda.

### Phase 6

Push notification llega al móvil.

### Phase 7

Hold.

### Phase 8

Reset suave.

Duración:

```text
10–14 s
```

Pause cuando:

```text
document.hidden === true
```

No desperdiciar CPU en background tabs.

---

# 36. AI CHAT ANIMATION

Implementar chat como DOM.

No gif.

No video.

Cada bubble:

```tsx
<motion.div />
```

Motion ownership:

- opacity,
- y,
- scale.

Typing:

CSS animation con 3 dots.

---

# 37. PRODUCT WINDOW

Crear componentes propios:

```text
BrowserFrame
DashboardFrame
PhoneFrame
```

No usar una librería externa de mockups.

Razón:

- más control,
- menos bundle,
- responsive,
- mejor branding.

---

# 38. AI SECTION

AI section:

```text
dark premium section
```

Animación principal:

Motion.

Si existe un flujo complejo basado en scroll:

GSAP permitido.

---

## Background

Ejemplo:

```text
#061525
```

con radial blue illumination.

No negro absoluto.

---

# 39. MOBILE APP SECTION

Esta será una sección de alto impacto.

En desktop:

```text
left: sticky phone
right: narrative steps
```

o inverso.

---

## Recommended implementation

Usar GSAP ScrollTrigger.

Phone permanece sticky/pinned mientras cambian:

1. Agenda.
2. Patient.
3. Camera.
4. Before/After.
5. Voice note.

---

## Transitions

Entre screens:

```text
opacity
scale 0.985 → 1
small translate
```

No hacer rotación extrema del teléfono.

---

# 40. BEFORE/AFTER SECTION

Debe ser altamente visual.

El slider es interactivo.

Al entrar en viewport:

Motion puede hacer:

```text
clip 35% → 50%
```

como pequeña demo.

Después devuelve control completo al usuario.

---

# 41. VOICE SECTION

Visual:

```text
phone
+
voice waveform
+
live transcription
```

Waveform:

Preferir CSS/SVG animado.

NO usar canvas si no hace falta.

20–32 bars máximo.

Transform:

```text
scaleY
```

para alto rendimiento.

---

# 42. DAY WITH CLINICFLOW — SIGNATURE SECTION

Esta debe ser una de las experiencias premium centrales.

Usar:

```text
GSAP ScrollTrigger
```

Desktop:

- section pinned,
- izquierda: timeline,
- derecha: visual activo.

Cada scroll segment cambia de escena.

---

## Scenes

```text
01 WhatsApp message
02 AI response
03 Appointment created
04 Patient reminder
05 Doctor push
06 Patient record
07 Camera
08 Voice note
09 Complete
```

---

## Rule

No crear 9 screenshots gigantes cargados al inicio.

Lazy preload cuando la sección esté cerca.

---

# 43. SCROLL STORY IMPLEMENTATION

Diseñar timeline con labels.

Ejemplo conceptual:

```ts
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "+=4000",
    scrub: 0.7,
    pin: true,
  }
})

tl
  .addLabel("message")
  .to(...)
  .addLabel("booking")
  .to(...)
  .addLabel("notification")
```

No construir una montaña de listeners manuales de scroll.

---

# 44. MOBILE FALLBACK FOR PINNED SECTIONS

En mobile:

NO intentar replicar exactamente el storytelling pinned desktop.

Usar:

```text
normal vertical cards
+
subtle Motion inView
```

Resultado:

- más usable,
- más rápido,
- menos bugs Safari,
- mejor UX.

---

# 45. RESPONSIVE STRATEGY

No pensar:

```text
desktop primero y luego reducir.
```

Diseñar explícitamente:

### Mobile

375–639

### Tablet

640–1023

### Desktop

1024–1439

### Wide

1440+

---

# 46. MOBILE PERFORMANCE

En mobile:

- desactivar decoraciones secundarias,
- reducir blur,
- reducir shadows,
- no pinned GSAP largo,
- native scroll,
- menos layers animados.

La experiencia debe seguir sintiéndose premium sin castigar GPU/batería.

---

# 47. CSS BLUR

Backdrop-filter es costoso.

Usarlo solo en:

- navbar,
- quizá 1 floating surface.

No aplicar:

```text
backdrop-blur-xl
```

en 20 cards simultáneamente.

---

# 48. ANIMATION PERFORMANCE RULES

Priorizar animar:

```text
transform
opacity
filter con moderación
clip-path con moderación
```

Evitar animar continuamente:

```text
width
height
top
left
margin
padding
```

cuando puede utilizarse transform.

---

# 49. WILL-CHANGE

No aplicar globalmente.

Incorrecto:

```css
* {
  will-change: transform;
}
```

Usar solamente en elementos con animación activa conocida.

Después permitir que navegador recupere recursos.

---

# 50. PERFORMANCE BUDGET

Estos son objetivos obligatorios.

## Lighthouse desktop

```text
Performance       >= 95
Accessibility     >= 95
Best Practices    >= 95
SEO               >= 95
```

## Lighthouse mobile

```text
Performance       >= 90
Accessibility     >= 95
Best Practices    >= 95
SEO               >= 95
```

---

# 51. CORE WEB VITALS

Objetivos:

```text
LCP  < 2.5 s
INP  < 200 ms
CLS  < 0.1
```

Objetivo interno superior:

```text
LCP  < 2.0 s
CLS  < 0.05
```

---

# 52. JAVASCRIPT BUDGET

Landing inicial debe mantener JS cliente bajo control.

Objetivo:

```text
Initial client JS:
< 180 KB gzip ideal
```

Secciones GSAP pesadas pueden cargar dinámicamente después.

---

# 53. DYNAMIC IMPORTS

Usar dynamic imports para:

- GSAP storytelling,
- demos complejas below fold,
- potencial video modal.

Ejemplo:

```tsx
const DayTimeline = dynamic(
  () => import("./day-timeline"),
  {
    ssr: false,
    loading: () => <TimelineSkeleton />
  }
)
```

IMPORTANTE:

No desactivar SSR arbitrariamente para contenido SEO importante.

Separar contenido estático de motor interactivo.

---

# 54. IMÁGENES

Usar:

```text
next/image
```

Formatos prioritarios:

```text
AVIF
WebP
```

PNG solo donde transparencia/UI lo requiera.

---

# 55. SCREENSHOTS DE PRODUCTO

Exportar screenshots al tamaño razonable.

NO:

```text
6000 × 4000 PNG
```

para mostrarse a 900px.

Crear variantes optimizadas.

---

# 56. IMAGE PRIORITY

`priority` únicamente para assets realmente above-the-fold.

Probablemente:

- hero dashboard.

No marcar todas las imágenes como priority.

---

# 57. FONTS PERFORMANCE

Usar Next font optimization.

Máximo:

```text
1 font family
2 variable axes
```

Ideal:

Geist Variable.

No cargar:

- 6 weights independientes,
- 3 familias decorativas.

---

# 58. SEO ARCHITECTURE

Usar Metadata API nativa de Next.

No instalar `next-seo`.

Crear:

```text
metadata
robots.ts
sitemap.ts
opengraph-image.tsx
```

---

# 59. STRUCTURED DATA

Usar JSON-LD manual tipado.

Schemas:

```text
Organization
SoftwareApplication
FAQPage
```

No instalar librería solo para schema.

---

# 60. ANALYTICS

Fase inicial recomendada:

```text
PostHog
```

o GA4 según decisión comercial.

NO instalar ambos sin necesidad.

Eventos definidos en archivo maestro.

Crear wrapper:

```ts
track(eventName, properties)
```

Así analytics puede cambiarse posteriormente.

---

# 61. ANALYTICS PERFORMANCE

Analytics debe:

- cargarse después de interacción/idle cuando sea posible,
- respetar consentimiento requerido,
- no bloquear render.

---

# 62. DEPLOYMENT

Provider principal:

```text
Vercel
```

Razones:

- integración Next,
- image optimization,
- preview deployments,
- edge/CDN,
- observabilidad,
- rollout sencillo.

---

# 63. ENVIRONMENTS

Tener:

```text
development
preview
production
```

Nunca probar checkout real directamente en producción como primer flujo.

---

# 64. ENV VARIABLES

Naming:

```text
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_LOGIN_URL=
NEXT_PUBLIC_SIGNUP_URL=

NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

BILLING_PROVIDER=
```

No poner secretos del backend como `NEXT_PUBLIC`.

---

# 65. BILLING

Landing preparada para provider desacoplado.

Interfaz:

```ts
export interface BillingProvider {
  createCheckoutSession(
    input: CreateCheckoutInput
  ): Promise<CheckoutSession>

  getSubscription(
    id: string
  ): Promise<Subscription>

  cancelSubscription(
    id: string
  ): Promise<void>
}
```

Provider futuro:

```text
Tilopay
BAC Xpress Pago
```

La UI no conoce detalles del proveedor.

---

# 66. BILLING SECURITY

Nunca:

```text
card_number
cvv
expiry
```

en frontend/backend ClinicFlow si se usa hosted/tokenized provider.

Checkout alojado preferido.

---

# 67. ACCESSIBILITY

Objetivo:

```text
WCAG 2.2 AA
```

No sacrificar accesibilidad por animación.

---

# 68. REDUCED MOTION

Crear hook central:

```text
useReducedMotion()
```

Cuando sea true:

- desactivar Lenis,
- desactivar parallax,
- desactivar pinned choreography innecesaria,
- hacer reveals instantáneos o fade mínimo,
- mantener funcionalidad.

---

# 69. FOCUS

Todos los elementos interactivos necesitan:

```text
focus-visible
```

premium pero evidente.

No usar:

```css
outline: none;
```

sin sustituto.

---

# 70. SEMANTIC HTML

Usar:

```html
<header>
<nav>
<main>
<section>
<footer>
```

Un solo:

```html
<h1>
```

Jerarquía H2/H3 correcta.

---

# 71. BUTTON VS LINK

Si navega:

```html
<a>
```

Si ejecuta acción:

```html
<button>
```

No usar div clickeables.

---

# 72. BEFORE/AFTER ACCESSIBILITY

Debe poder manejarse con teclado:

```text
ArrowLeft
ArrowRight
Home
End
```

Proporcionar label adecuado.

---

# 73. FAQ

Usar Accordion accesible basado en shadcn/Base UI.

No implementar un accordion casero defectuoso.

---

# 74. TESTING STACK

## E2E

Usar:

```text
Playwright
```

Tests mínimos:

- homepage loads,
- navbar links,
- mobile menu,
- CTA,
- pricing section,
- FAQ,
- before/after interaction,
- reduced motion behavior.

---

# 75. ACCESSIBILITY TEST

Agregar:

```text
@axe-core/playwright
```

al QA si el presupuesto de dependencias lo permite.

Ejecutar scan de homepage.

---

# 76. UNIT TESTS

No llenar landing con unit tests triviales.

Testear lógica únicamente donde aporte:

- slider calculations,
- billing URL helpers,
- analytics mapping.

Vitest puede agregarse solo si aparece lógica testeable real.

---

# 77. VISUAL QA

Screenshots obligatorios:

```text
375 × 812
390 × 844
768 × 1024
1440 × 900
1920 × 1080
```

Comprobar:

- clipping,
- overflow,
- sticky sections,
- font wrapping,
- screenshots,
- animation positions.

---

# 78. BROWSERS

QA mínimo:

```text
Chrome latest
Safari latest
Firefox latest
Edge latest
Safari iOS
Chrome Android
```

---

# 79. SAFARI

Tener especial cuidado con:

- sticky,
- vh,
- blur,
- clip-path,
- scroll pinning.

Preferir:

```text
dvh
svh
```

cuando aplique.

---

# 80. CODE QUALITY

ESLint:

usar integración recomendada para Next 16.

Formatting:

```text
Prettier
```

No discutir estilo durante desarrollo.

---

# 81. IMPORT ORDER

Mantener:

1. framework,
2. third party,
3. internal,
4. types,
5. styles.

---

# 82. NAMING

React components:

```text
PascalCase
```

Files:

```text
kebab-case.tsx
```

Hooks:

```text
use-*.ts
```

---

# 83. CLIENT BOUNDARIES

No usar `use client` en:

- page.tsx,
- layout.tsx,
- pricing estático,
- footer,
- server copy sections.

Solo cuando necesario.

---

# 84. ANIMATION TOKENS

Crear:

```ts
// lib/motion/easings.ts
```

Ejemplo:

```ts
export const easeOutPremium = [0.16, 1, 0.3, 1] as const
export const easeInOutPremium = [0.65, 0, 0.35, 1] as const
```

No inventar easing diferente en cada sección.

---

# 85. DURATION TOKENS

```text
micro      120–180ms
fast       220–300ms
normal     400–550ms
slow       700–900ms
story      scroll driven
```

---

# 86. MOTION VARIANTS

Crear reusable variants:

```text
fadeUp
fadeIn
scaleIn
staggerContainer
```

No copiar el mismo object literal 40 veces.

---

# 87. PREMIUM MOTION PRINCIPLE

La mayoría de elementos deberían moverse entre:

```text
8px – 24px
```

No:

```text
200px
```

Premium = movimiento contenido.

---

# 88. PARALLAX

Máximo:

```text
10–40px
```

No hacer fondos que se desplazan cientos de píxeles.

---

# 89. CURSOR EFFECTS

No custom cursor.

No spotlight siguiendo el mouse por toda la web.

Podría evaluarse un pequeño radial highlight dentro de una card específica, pero no como gimmick global.

---

# 90. MAGNETIC BUTTONS

No usar por defecto.

Pueden sentirse poco naturales y empeorar accesibilidad.

---

# 91. NAVBAR

Navbar:

```text
position: sticky
top: 0
```

Después de scroll:

- translucent surface,
- slight blur,
- subtle border.

No usar blur fuerte constante inicialmente.

---

# 92. HERO PERFORMANCE STRATEGY

Above the fold solo debe cargar:

- font,
- logo,
- hero UI,
- CTA,
- critical CSS/JS.

No cargar:

- timeline GSAP,
- testimonials carousel,
- video player,
- pricing logic compleja.

---

# 93. INTERSECTION PRELOAD

Cuando una sección compleja esté:

```text
~800–1200px
```

antes del viewport:

puede iniciarse lazy import/preload.

---

# 94. CONTENT VISIBILITY

Para secciones muy below fold, evaluar:

```css
content-visibility: auto;
contain-intrinsic-size: ...
```

solo si QA confirma beneficios sin side effects.

---

# 95. RESPONSIVE IMAGE ART DIRECTION

Si screenshot desktop se vuelve ilegible en mobile:

NO simplemente reducirlo a 300px.

Crear composición mobile específica.

---

# 96. MOBILE HERO

Mobile hero:

```text
copy
CTA
product card
chat overlay
mini phone
```

No intentar meter la misma composición widescreen comprimida.

---

# 97. CTA

Button principal:

- alto 48–54 px,
- radius coherente,
- micro shadow,
- hover translate máximo -1/-2px.

No “bounce”.

---

# 98. DARK SECTION TRANSITIONS

Entrar/salir de dark sections mediante:

- background transition visual natural,
- border radius gigante opcional,
- spacing.

No usar wipe animations que bloqueen scroll.

---

# 99. PRODUCT SCREEN AUTHENTICITY

Cuando existan screenshots reales:

No alterar funcionalidad visible para hacer marketing engañoso.

Puede:

- limpiar datos,
- reemplazar nombres con datos demo,
- ocultar información sensible.

No inventar controles inexistentes.

---

# 100. DEMO DATA

Crear dataset demo coherente.

Ejemplo:

```text
Dra. Valeria López
Ana Martínez
Carlos Ruiz
Sofía Pérez
```

Nunca usar pacientes reales.

---

# 101. PRIVACY

No usar:

- fotografías reales de pacientes,
- expediente real,
- radiografías identificables,

sin autorización documentada.

---

# 102. IMAGE COMPARISON DEMO

Usar contenido:

- autorizado,
- stock clínico licenciado,
- o mock demo creado para marketing.

---

# 103. PACKAGE POLICY

Dependencia nueva requiere satisfacer al menos uno:

1. Evita cientos de líneas complejas.
2. Mejora accesibilidad.
3. Resuelve problema técnico difícil.
4. Tiene mantenimiento activo.
5. Impacto bundle razonable.

Si no:

NO instalarla.

---

# 104. APPROVED RUNTIME DEPENDENCIES

Stack autorizado:

```text
next
react
react-dom

tailwindcss

motion
gsap
@gsap/react
lenis

lucide-react

shadcn components / Base UI dependencies
```

Condicionales:

```text
react-hook-form
zod
```

solo si formulario.

Analytics:

```text
posthog-js
```

solo cuando se active.

---

# 105. DO NOT ADD WITHOUT APPROVAL

```text
three
@react-three/fiber
@react-three/drei
spline
lottie-react
swiper
embla-carousel-react
zustand
redux
@tanstack/react-query
axios
lodash
moment
dayjs
```

No porque sean malas librerías, sino porque esta landing no las necesita inicialmente.

---

# 106. DATE UTILITIES

Si se necesita una fecha simple:

usar APIs nativas.

No instalar date library para mostrar:

```text
2026
```

en footer.

---

# 107. HTTP

No Axios.

Usar:

```text
fetch
```

nativo/Next.

---

# 108. CLASS COMPOSITION

Usar el helper oficial adoptado por shadcn en el proyecto.

A septiembre 2026 shadcn utiliza el paquete:

```text
cn
```

para composición de clases en nuevos componentes.

No mantener simultáneamente:

- clsx,
- tailwind-merge,
- cn package,

sin motivo.

---

# 109. INITIALIZATION — NEW PROJECT

Si NO existe proyecto previo:

crear con Next 16.

Ejemplo conceptual:

```bash
pnpm create next-app@16.3.5 clinicflow360-landing \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

Después:

```bash
cd clinicflow360-landing
```

Inicializar shadcn con Base UI mediante la CLI oficial actual.

Verificar configuración generada ANTES de continuar.

---

# 110. INSTALL ANIMATION STACK

```bash
pnpm add motion@13.4.0 gsap@3.15.0 @gsap/react@2.1.2 lenis@1.3.26
```

Usar versiones fijadas inicialmente.

Después de lockfile:

no cambiar durante implementación sin razón.

---

# 111. SHADCN

Usar CLI actual.

Base:

```text
Base UI
```

Añadir solamente:

```text
button
accordion
sheet
tooltip
```

si cada componente realmente se usa.

---

# 112. ENVIRONMENT CHECK BEFORE CODING

El agente debe ejecutar:

```bash
node -v
pnpm -v
pnpm exec next --version
```

Después inspeccionar:

```text
package.json
tsconfig.json
src/
public/
```

Si ya existe el proyecto:

NO recrearlo.

Adaptarse sin romper configuración válida.

---

# 113. AGENT PRE-FLIGHT

ANTES de escribir UI:

el agente debe producir internamente un inventario de:

- assets existentes,
- logo,
- screenshots,
- colores,
- componentes,
- routes,
- package versions.

Después comienza.

No preguntar cosas que pueda descubrir en el repo.

---

# 114. IMPLEMENTATION ORDER

Implementar en este orden.

## Sprint 0

Infrastructure.

- stack.
- tokens.
- fonts.
- shadcn.
- motion utilities.
- Lenis provider.
- base layout.

## Sprint 1

Hero.

- navbar.
- headline.
- CTA.
- dashboard.
- AI chat.
- doctor phone.
- hero animation.

## Sprint 2

Core story.

- unified platform.
- AI receptionist.
- mobile doctor section.

## Sprint 3

Clinical visual.

- before/after.
- voice.
- patient record.
- odontogram.

## Sprint 4

Automation/story.

- WhatsApp reminders.
- Day with ClinicFlow360 GSAP story.

## Sprint 5

Conversion.

- security.
- pricing.
- testimonials.
- FAQ.
- CTA.
- footer.

## Sprint 6

Optimization.

- lazy loading.
- image optimization.
- accessibility.
- Lighthouse.
- Playwright.

---

# 115. QUALITY GATE AFTER EACH SPRINT

Ejecutar:

```bash
pnpm lint
pnpm build
```

y tests existentes.

No esperar al final para descubrir 60 errores TypeScript.

---

# 116. PERFORMANCE GATE

Después de hero:

medir performance.

Después de GSAP sections:

medir nuevamente.

Si el score cae significativamente:

optimizar antes de continuar.

---

# 117. SOURCE MAP / DEBUG

No dejar:

```text
console.log
debugger
```

en producción.

---

# 118. ERROR BOUNDARIES

Landing estática no necesita error boundary por cada sección.

Mantener arquitectura simple.

---

# 119. LOADING SKELETONS

No usar skeleton para contenido estático.

Solo dynamic interactive modules que realmente tardan.

---

# 120. HYDRATION

Evitar contenido random basado en:

```text
Math.random()
Date.now()
```

durante SSR.

Evitar hydration mismatch.

---

# 121. ANIMATION SSR

Estado inicial de elementos debe evitar flash.

Si Motion aplica initial hidden:

asegurarse de que:

- contenido continúa accesible,
- no queda invisible si JS falla.

Preferir progressive enhancement para texto esencial.

---

# 122. NOSCRIPT

CTA y contenido principal deben seguir siendo útiles sin JS.

No es necesario que animaciones funcionen sin JS.

---

# 123. SEO COPY

Todo texto comercial importante debe existir en HTML.

No renderizar headlines dentro de Canvas/WebGL.

---

# 124. INTERNATIONALIZATION

Landing inicial:

```text
es
```

Estructurar copy en data files para futura i18n.

No instalar i18n inicialmente si solo existe español.

---

# 125. FUTURE COUNTRY PAGES

Preparar arquitectura para:

```text
/ni
/cr
/pa
/mx
```

en el futuro, pero NO crear páginas duplicadas todavía.

---

# 126. SECURITY HEADERS

Configurar adecuadamente cuando deployment esté cerrado:

- CSP razonable.
- frame protection.
- referrer policy.

No romper analytics/checkout con CSP improvisada.

---

# 127. THIRD PARTY SCRIPTS

Cada script externo debe justificarse.

No incluir:

- chat widgets,
- heatmap,
- 3 analytics,
- marketing pixels,

sin aprobación.

---

# 128. COOKIE CONSENT

Si analytics/marketing exige consentimiento según mercados objetivo:

implementar CMP/consentimiento apropiado.

No mostrar banner falso que no controle cookies realmente.

---

# 129. DARK MODE

La landing de marketing NO necesita toggle dark/light inicialmente.

El diseño usa secciones claras y oscuras intencionalmente.

No agregar dark mode por moda.

---

# 130. THEME

Sin theme provider global si no hace falta.

Menos JS.

---

# 131. PRICING TOGGLE

Si más adelante existe:

```text
Mensual / Anual
```

entonces pequeño Client Component.

No usar global state.

---

# 132. PAYMENT CTA

Mientras Tilopay/BAC no esté decidido:

CTA puede redirigir:

```text
/signup?plan=ai
```

No implementar checkout fake.

---

# 133. LINK BEHAVIOR

Internal:

```text
next/link
```

External:

```text
<a target="_blank" rel="noopener noreferrer">
```

cuando corresponde.

---

# 134. WHATSAPP CTA

Cuando exista demo:

crear URL desde config/data.

No hardcodear número en 8 componentes.

---

# 135. CONFIG

Crear:

```ts
export const siteConfig = {
  name: "ClinicFlow360",
  appUrl: "...",
  loginUrl: "...",
  whatsappDemoUrl: null,
}
```

---

# 136. CONTENT CONFIG

Copy comercial centralizado cuando sea razonable.

No abstraer cada palabra en JSON.

Balance.

---

# 137. COMPONENT SIZE

Si un componente supera ~300 líneas:

evaluar split.

No dividir absurdamente cada 20 líneas.

---

# 138. REACT MEMOIZATION

No llenar el proyecto con:

```text
useMemo
useCallback
memo
```

sin necesidad.

React moderno + compiler/framework ya optimiza muchos escenarios.

Medir antes de micro-optimizar.

---

# 139. EVENT LISTENERS

No agregar listener global por cada componente.

Scroll animation debe usar las librerías definidas.

---

# 140. RESIZE

Preferir:

```text
ResizeObserver
matchMedia
CSS
```

sobre `window.resize` manual frecuente.

---

# 141. GSAP RESPONSIVE

Usar:

```text
gsap.matchMedia()
```

para separar desktop/mobile behavior.

---

# 142. GSAP CLEANUP

Todas las timelines deben limpiarse correctamente con:

```text
useGSAP
```

No dejar ScrollTriggers vivos tras unmount.

---

# 143. MOTION REDUCED MOTION

Usar API de Motion / hook propio para respetar preferencias.

No duplicar animaciones.

---

# 144. SPRINGS

Usar springs principalmente para:

- interactive feedback,
- card settling,
- drag.

No usar spring para todo.

Story reveals suelen sentirse mejor con easing controlado.

---

# 145. SCROLL SCRUB

No usar scrub `true` sin considerar respuesta.

Preferir:

```text
scrub: 0.5–1
```

para movimiento suave.

---

# 146. PIN LENGTH

No crear una sección de:

```text
9000px
```

de scroll porque sí.

Cada historia debe avanzar continuamente.

Usuario nunca debe sentir que scroll “no hace nada”.

---

# 147. PIN SPACING

Revisar layout tras pin en Safari y mobile.

---

# 148. PREVENT SCROLL JACKING

Lenis suaviza.

NO cambia dirección ni velocidad de forma extrema.

No bloquear wheel.

No inventar horizontal scroll global.

---

# 149. HORIZONTAL SCROLL

Permitido únicamente dentro de:

- carousels,
- mobile pricing comparison,

si hay buena UX.

No convertir la landing entera en horizontal.

---

# 150. BUTTON LOADING

Si signup CTA realiza request:

mostrar estado.

No usar fake 2-second loader.

---

# 151. MICROINTERACTION STANDARD

Buttons:

```text
hover: -1px Y
active: scale .985
duration: 140–180ms
```

Cards:

```text
hover: translateY(-2px)
shadow slightly stronger
```

Solo desktop hover-capable devices.

---

# 152. PRODUCT CARD DEPTH

Depth hierarchy:

1. Main browser.
2. Phone.
3. AI card.
4. Toast.

No todas las cards con la misma sombra/z-index.

---

# 153. GLASSMORPHISM

Usar con extrema moderación.

Quizá:

- navbar,
- floating mini notification.

No convertir toda la web en glass.

---

# 154. GRADIENT TEXT

No usar gradient text para todo H1.

Headline principal preferiblemente sólido.

Puede existir accent color en una palabra si diseño lo justifica.

---

# 155. SEO / PERFORMANCE VS ANIMATION

Si hay conflicto:

```text
clarity > accessibility > performance > animation gimmick
```

Pero optimizar para conservar animaciones importantes.

---

# 156. LIGHTHOUSE WORKFLOW

Antes de finalizar:

1. production build.
2. servir build.
3. medir mobile.
4. identificar LCP.
5. revisar unused JS.
6. revisar image sizes.
7. revisar CLS.
8. corregir.
9. repetir.

---

# 157. BUNDLE INSPECTION

Si bundle crece:

usar analyzer compatible con versión de Next.

No dejar analyzer instalado/configurado permanentemente si no se necesita.

---

# 158. ANIMATION LAZY LOAD

Motion puede estar en islands tempranas.

GSAP solo cargar cuando sección correspondiente lo necesite.

Especialmente:

```text
DayWithClinicFlow
```

---

# 159. CSS FIRST

Antes de escribir una animación JS preguntarse:

> ¿Esto puede hacerse bien con CSS?

Si sí:
CSS.

---

# 160. NATIVE WEB APIs

Preferir:

```text
IntersectionObserver
ResizeObserver
Pointer Events
```

cuando son suficientes.

---

# 161. SOURCE OF TRUTH

Orden de prioridad de documentos:

```text
1. Este Technical Blueprint
2. clinicflow360_landing_master_prompt.md
3. Assets/UI real del producto
4. Decisiones existentes del repositorio compatibles
5. Criterio del agente
```

El agente NO debe sustituir una decisión explícita de este documento por su preferencia personal.

---

# 162. SI EL REPO EXISTENTE TIENE OTRAS VERSIONES

Si el proyecto ya existe y tiene stack equivalente estable:

NO hacer upgrade masivo automáticamente.

Ejemplo:

```text
Next 16.2
Tailwind 4
React 19
```

Debe:

1. informar internamente la diferencia,
2. determinar si bloquea requerimientos,
3. conservarlo si funciona,
4. solo actualizar con motivo concreto.

Este documento fija el stack para un proyecto nuevo.

---

# 163. NO REWRITE

Si landing ya contiene trabajo útil:

no borrarlo todo por defecto.

Evaluar y migrar incrementalmente.

---

# 164. GIT

Commits sugeridos:

```text
feat(landing): establish design system and foundation
feat(landing): build premium hero product story
feat(landing): add AI receptionist showcase
feat(landing): add doctor mobile experience
feat(landing): add clinical feature storytelling
feat(landing): add scroll-driven day timeline
feat(landing): add pricing and conversion sections
perf(landing): optimize images and animation loading
a11y(landing): improve reduced motion and keyboard UX
```

---

# 165. ASSET NAMING

```text
hero-dashboard.webp
doctor-app-agenda.webp
doctor-app-patient.webp
doctor-app-camera.webp
odontogram.webp
```

No:

```text
Screenshot 2026-09-14 at 4.33.52 PM.png
```

---

# 166. PUBLIC DIRECTORY

Organizar:

```text
public/
└── landing/
    ├── hero/
    ├── mobile/
    ├── patient/
    ├── before-after/
    ├── logos/
    └── social/
```

---

# 167. ALT TEXT

Screenshots decorativos:

```text
alt=""
```

cuando el contenido ya está explicado.

Screenshots informativos:

describir propósito, no cada píxel.

---

# 168. LOGO

Usar SVG.

No cargar logo PNG grande.

---

# 169. FAVICON

Crear:

- favicon.
- app icon.
- apple touch icon.

Basado en identidad ClinicFlow360.

---

# 170. OPEN GRAPH

Crear imagen OG premium:

```text
1200 × 630
```

Con:

- logo,
- headline breve,
- screenshot/product device.

No sobrecargar.

---

# 171. MOBILE MENU

Usar shadcn/Base UI Sheet.

Animación simple.

No GSAP.

---

# 172. FAQ MOTION

Accordion native component.

Motion opcional solo si no interfiere con height/accessibility.

No animación exagerada.

---

# 173. PRICING CARD MOTION

Nada de 3D tilt.

Destacar AI mediante:

- border,
- shadow,
- badge,
- slight scale.

---

# 174. TESTIMONIALS

No carousel automático inicialmente.

Mostrar grid o focused case study.

Autoplay carousels suelen:
- distraer,
- reducir accesibilidad,
- cargar JS.

---

# 175. SOCIAL PROOF LOGO MARQUEE

No marquee infinito si solo hay 3–6 logos.

Grid simple.

Si en futuro existen muchos logos, evaluar marquee CSS lento y pausable.

---

# 176. NUMBER COUNTERS

No animar números inventados.

Si existen métricas reales:

count-up una sola vez puede usarse, pero no es obligatorio.

---

# 177. AI TYPING

No retrasar demasiado el contenido.

Animación debe comunicar rápido.

Texto completo accesible debe existir en DOM.

---

# 178. AUTO PLAY

Pausar animaciones significativas cuando fuera de viewport.

Usar Intersection Observer / library behavior.

---

# 179. CPU BUDGET

No tener 15 loops `requestAnimationFrame` permanentes.

Centralizar:

- Lenis RAF,
- GSAP ticker integration cuando aplica.

Motion optimiza su propio engine.

---

# 180. MEMORY

Limpiar:

- timers,
- observers,
- listeners,
- timelines.

---

# 181. CSS CONTAINMENT

Evaluar:

```css
contain: layout paint;
```

en mockups complejos independientes si mejora performance.

No aplicar sin QA.

---

# 182. IMAGE DECODING

Next Image lo gestiona generalmente.

No micro-optimizar manualmente salvo evidencia.

---

# 183. PRELOAD

No llenar head de preload.

Preload:

- hero font mediante Next,
- hero LCP image.

Nada más inicialmente.

---

# 184. PREFETCH

Next Link maneja prefetch.

No manual prefetch de toda la aplicación.

---

# 185. VIDEO MODAL

Si existe "Ver demo":

video modal puede cargarse on-demand.

Solo importar player al abrir.

Preferir `<video>` nativo antes que pesado player library.

---

# 186. MODAL ACCESSIBILITY

Si demo modal:

- focus trap,
- Escape,
- restore focus,
- labels.

Usar Dialog primitive.

---

# 187. COLOR CONTRAST

AA mínimo.

Teal no usar como texto pequeño sobre blanco si contraste insuficiente.

Usarlo como accent gráfico.

---

# 188. FOCUS COLOR

Usar brand blue o teal según fondo.

Siempre visible.

---

# 189. TOUCH TARGETS

Mínimo:

```text
44 × 44 px
```

---

# 190. TEXT WIDTH

Body copy:

```text
55–75 characters
```

por línea idealmente.

---

# 191. HERO LINE LENGTH

H1 debe evitar líneas raras a 1024–1280px.

Probar manualmente.

---

# 192. ORPHANS

Usar `text-wrap: balance` para headings cuando sea compatible.

Body:
`text-wrap: pretty`.

---

# 193. PREMIUM DETAIL

Usar pequeños detalles:

- subtle status dots,
- timestamps,
- realistic UI,
- loading state,
- checked state.

Esto hace que producto se sienta real.

---

# 194. PRODUCT UI > DECORATION

Si hay elección entre:

```text
otro glow decorativo
```

o:

```text
un mejor estado del producto
```

elegir producto.

---

# 195. DATA VISUALIZATION

No agregar charts falsos solo para llenar dashboard.

Mostrar módulos reales.

---

# 196. DENTAL CONTEXT

El odontograma debe sentirse real.

No usar iconos random de dientes como decoración principal.

---

# 197. AI LANGUAGE

Evitar:

- revolucionario,
- disruptivo,
- IA de última generación,
- transforma para siempre.

Mostrar lo que hace.

---

# 198. FIRST LOAD EXPERIENCE

En fast connection:

hero aparece inmediatamente.

No splash screen.

No loader inicial.

---

# 199. PAGE TRANSITIONS

Landing principal no necesita page transition framework.

Internal routes futuras pueden usar View Transitions si se justifica.

---

# 200. VIEW TRANSITIONS

No activarlas experimentalmente solo por novedad.

---

# 201. ERROR LOGGING

Si la landing integra formularios/signup API:

capturar errores con provider existente.

No instalar Sentry solo para landing sin decisión global.

---

# 202. BUILD OUTPUT

El agente debe revisar:

- warnings,
- route types,
- image warnings,
- hydration warnings.

Cero warnings ignorados relevantes.

---

# 203. AGENT RULE: DO NOT OVERENGINEER

Este proyecto debe verse complejo.

El código no necesita ser innecesariamente complejo.

La sofisticación debe estar en:

- diseño,
- copy,
- composición,
- timing,
- storytelling.

No en 40 abstracciones.

---

# 204. AGENT RULE: NO PLACEHOLDER FINAL UI

Se permiten placeholders durante implementación.

Antes de terminar:

- reemplazar lorem ipsum,
- reemplazar rectangles,
- eliminar TODO temporales visibles.

Si falta un asset real:
usar demo explícitamente neutral y documentarlo.

---

# 205. AGENT RULE: NO UNSPLASH DOCTORS IN HERO

El hero vende software.

No usar la típica foto:

```text
doctor sonriendo con tablet
```

El producto es protagonista.

Fotos humanas pueden aparecer más tarde solo si existe estrategia real.

---

# 206. PREMIUM QUALITY CHECKLIST

Antes de considerar terminado:

### Hero
- [ ] se entiende en 5 segundos.
- [ ] UI es protagonista.
- [ ] demo anima fluidamente.
- [ ] mobile hero está rediseñado, no comprimido.

### Motion
- [ ] no hay scroll jank.
- [ ] reduced motion funciona.
- [ ] no hay conflicto Motion/GSAP.
- [ ] mobile usa menos efectos.

### Visual
- [ ] spacing consistente.
- [ ] typography excelente.
- [ ] no parece template.
- [ ] no hay 20 estilos de radius.

### Performance
- [ ] hero LCP optimizado.
- [ ] GSAP lazy-loaded.
- [ ] screenshots comprimidos.
- [ ] no video pesado above fold.

### Accessibility
- [ ] keyboard.
- [ ] focus.
- [ ] AA.
- [ ] FAQ accesible.
- [ ] before/after accesible.

### Code
- [ ] build green.
- [ ] lint green.
- [ ] no `any` injustificado.
- [ ] no console logs.
- [ ] no dead packages.

---

# 207. STACK FINAL RESUMIDO

El stack oficial de la landing es:

```text
Runtime
├── Node.js 22 LTS
└── pnpm

Core
├── Next.js 16.3.5
├── React 19.2
└── TypeScript strict

Styling
├── Tailwind CSS 4.3
├── CSS Variables
└── shadcn/ui + Base UI

Typography
└── Geist

Icons
└── Lucide React

Animation
├── CSS transitions       → microinteractions
├── Motion 13.4.x         → React UI animations
├── GSAP 3.15.x           → premium scroll storytelling
├── @gsap/react 2.1.x     → React GSAP lifecycle
└── Lenis 1.3.26          → desktop smooth scroll

Images
├── next/image
├── AVIF
└── WebP

Forms (only if needed)
├── React Hook Form
└── Zod

Testing
├── Playwright
└── axe optional

Deployment
└── Vercel

Analytics
└── Adapter pattern → PostHog or GA4 later

Billing
└── Provider abstraction → Tilopay/BAC later
```

---

# 208. RESPONSIBILITY MATRIX DE ANIMACIONES

| UI / Effect | Tecnología |
|---|---|
| Button hover | CSS |
| Navbar transitions | CSS / Motion mínimo |
| Hero copy reveal | Motion |
| Floating product cards | Motion |
| AI chat bubbles | Motion |
| Appointment notification | Motion |
| Product screen crossfade | Motion |
| Doctor app pinned showcase | GSAP ScrollTrigger |
| Day-with-ClinicFlow story | GSAP ScrollTrigger |
| Before/after dragging | React Pointer Events |
| Before/after intro reveal | Motion |
| Voice waveform | CSS/SVG + Motion opcional |
| FAQ | Base UI |
| Smooth desktop scroll | Lenis |
| Mobile scroll | Native |
| Reduced motion | Static / minimal fade |

Esta tabla es vinculante.

---

# 209. DEPENDENCY DECISION TREE

Antes de instalar cualquier nueva librería:

```text
¿Se puede hacer con CSS?
        │
      Sí → CSS
        │
       No
        ↓
¿Motion ya lo resuelve?
        │
      Sí → Motion
        │
       No
        ↓
¿Es scroll storytelling complejo?
        │
      Sí → GSAP
        │
       No
        ↓
¿Web API nativa puede resolverlo?
        │
      Sí → Web API
        │
       No
        ↓
Documentar por qué hace falta nueva dependencia.
```

---

# 210. PERFORMANCE DECISION TREE

Si una animación se ve espectacular pero baja mucho rendimiento:

1. reducir layers,
2. cambiar propiedad animada,
3. bajar blur,
4. lazy-load,
5. simplificar en móvil,
6. reemplazar por Motion/CSS,
7. eliminarla si todavía perjudica experiencia.

Nunca sacrificar toda la página por un efecto.

---

# 211. VISUAL PHILOSOPHY

La landing debe comunicar:

```text
software preciso
+
clínica moderna
+
automatización humana
+
tecnología premium
```

NO:

```text
startup de IA genérica
```

---

# 212. MOTION PHILOSOPHY

Movimiento debe expresar conexiones.

Ejemplos:

```text
mensaje
→ agenda

agenda
→ notificación

doctor
→ expediente

foto
→ evolución

voz
→ nota clínica
```

Ese es el lenguaje visual de ClinicFlow360.

---

# 213. SIGNATURE INTERACTIONS

La landing debe tener 3 interacciones memorables.

## Signature 1

Hero connected workflow.

```text
WhatsApp → booking → doctor push
```

## Signature 2

Doctor mobile scroll story.

```text
agenda → patient → camera → voice
```

## Signature 3

Day with ClinicFlow360.

Todo el producto conectado en una historia.

Todo lo demás debe apoyar estas tres, no competir con ellas.

---

# 214. PREMIUM DOES NOT ME HEAVY

Objetivo:

> El usuario debe sentir que la landing es sofisticada sin sentir que el navegador está trabajando.

---

# 215. FINAL INSTRUCTION FOR CODEX / CLAUDE

Antes de implementar, lee COMPLETAMENTE:

1. `clinicflow360_landing_master_prompt.md`
2. `clinicflow360_landing_technical_blueprint.md`

Después inspecciona el repositorio.

NO cambies el stack por preferencia personal.

NO sustituyas Motion por otra librería.

NO sustituyas GSAP por otra librería de scroll.

NO agregues Three.js/Spline/Lottie.

NO conviertas toda la landing en Client Component.

NO instales paquetes sin necesidad.

Construye primero una foundation excelente.

Después construye las tres signature interactions.

La calidad final se evalúa por:

```text
claridad
+ diseño
+ movimiento
+ performance
+ accesibilidad
+ calidad del código
```

No solo por “que se vea bonito”.

---

# 216. PROMPT DE ARRANQUE RECOMENDADO PARA EL AGENTE

Copiar junto con ambos documentos:

> Lee completamente `clinicflow360_landing_master_prompt.md` y `clinicflow360_landing_technical_blueprint.md` antes de modificar código.
>
> El Master Prompt define producto, copy, UX y estructura.
>
> El Technical Blueprint define stack, arquitectura, performance y animación y tiene prioridad sobre decisiones técnicas.
>
> Primero inspecciona el repositorio completo: package.json, lockfile, src, app, components, public y assets existentes.
>
> Si el proyecto ya usa una versión estable equivalente, no hagas un upgrade destructivo sin necesidad.
>
> Produce un plan corto de implementación basado en el estado real del repo y luego comienza a trabajar sin detenerte a pedir aprobación en cada sección.
>
> Implementa Server Components por defecto y crea islands cliente solamente donde haya interacción.
>
> Implementa las animaciones usando estrictamente la matriz de responsabilidades definida en el Technical Blueprint.
>
> Después de cada fase ejecuta lint/build y corrige cualquier error antes de continuar.
>
> No inventes precios, métricas, testimonios, certificaciones ni features.
>
> Prioriza UI real del producto.
>
> El resultado debe sentirse como una landing SaaS internacional de primer nivel, con animaciones premium, pero mantener Lighthouse mobile >= 90 como objetivo.
>
> No des por terminado el trabajo hasta haber revisado 375px, 390px, 768px, 1440px y 1920px, reduced-motion, teclado, Safari considerations y production build.

---

# 217. FUENTES TÉCNICAS CONSULTADAS

## Next.js

Documentación oficial:

https://nextjs.org/docs

Versión visible al momento de investigar:

```text
16.3.5
```

---

## React

Versiones oficiales:

https://react.dev/versions

Versión estable:

```text
19.2
```

---

## Tailwind CSS

Documentación oficial:

https://tailwindcss.com/docs/

Versión documentada al momento de la investigación:

```text
4.3
```

---

## shadcn/ui

Documentación:

https://ui.shadcn.com/docs

Base UI como default para proyectos nuevos:

https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default

---

## Motion

Documentación oficial:

https://motion.dev/docs/react

Performance:

https://motion.dev/docs/performance

Versión investigada:

```text
13.4.0
```

Motion utiliza un motor híbrido capaz de apoyarse en APIs nativas del navegador para animaciones de alto rendimiento.

---

## GSAP

React:

https://gsap.com/resources/React/

Versión investigada:

```text
GSAP 3.15.0
@gsap/react 2.1.2
```

La integración React oficial recomienda `useGSAP()` para manejar scope y cleanup.

---

## Lenis

Proyecto oficial:

https://github.com/darkroomengineering/lenis

Versión investigada:

```text
1.3.26
```

Lenis trabaja sobre native scroll y ofrece integración adecuada para scroll animations y anchors.

---

# 218. NOTA SOBRE VERSIONES

Estas versiones fueron investigadas el:

```text
17 de septiembre de 2026
```

No ejecutar automáticamente:

```text
pnpm update --latest
```

durante la construcción.

El lockfile es la fuente de verdad una vez inicializado el proyecto.

Actualizaciones futuras deben hacerse como tarea separada y verificarse individualmente.

---

# 219. DEFINICIÓN DE ÉXITO

La implementación será exitosa si un usuario puede decir:

> “Nunca había visto un software dental presentado así.”

mientras un ingeniero puede decir:

> “Está muy bien construido y no está lleno de hacks.”

y Lighthouse puede decir:

> “Sigue siendo rápido.”

Ese es el estándar de ClinicFlow360.
