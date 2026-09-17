# ClinicFlow360 Landing — Backlog de Pendientes

> Elementos diferidos, mejoras futuras, y deuda técnica documentada.
>
> Cada ítem incluye contexto y criterio para saber cuándo activarlo.

---

## Pendientes Críticos (activar cuando recurso disponible)

### PEND-01 — Hero Animation Full Sequence
**Sprint:** 1 (implementado simplificado) → mejorar en sprint futuro
**Descripción:** El hero actualmente usa composición estática con micro-animaciones. La versión completa requiere un loop de 10-14 segundos:
1. Paciente escribe mensaje en WhatsApp
2. Typing indicator aparece
3. IA ofrece horarios disponibles
4. Paciente elige horario
5. Appointment card aparece en agenda del browser
6. Push notification llega al smartphone del doctor
7. Hold (2-3s)
8. Reset suave

**Requisitos técnicos:**
- Usar Motion (ownership de chat bubbles, floating cards)
- Pausar cuando `document.hidden === true`
- Respetar `prefers-reduced-motion`
- No hacer loops agresivos
- Duración: 10-14 segundos
**Activar:** Cuando sprint 1 esté estabilizado y se busque impacto visual adicional.

---

### PEND-02 — Video Demo de 2 Minutos
**Sprint:** 1 (CTA oculto actualmente)
**Descripción:** El secondary CTA del hero dice "Ver demo de 2 minutos". Actualmente está oculto porque no existe el video.
**Cuando activar:**
- Video producido y alojado (preferir hosting optimizado)
- Implementar como modal con `<video>` nativo (no player library pesado)
- Dynamic import del modal al hacer click
- Lazy-loaded, poster optimizado, no autoplay con audio
**Referencia:** Blueprint sección 185-186.

---

### PEND-03 — Screenshots Reales del Producto
**Sprint:** Todos (actualmente CSS mockups)
**Descripción:** Todas las visuales del producto son mockups CSS construidos a partir del conocimiento de la UI real. Deben reemplazarse progresivamente por screenshots reales.
**Assets necesarios:**
- `hero-dashboard.webp` — Agenda principal con citas del día
- `doctor-app-agenda.webp` — App móvil: pantalla de agenda
- `doctor-app-patient.webp` — App móvil: detalle de paciente
- `doctor-app-camera.webp` — App móvil: captura de fotos
- `odontogram.webp` — Odontograma interactivo
- `patient-record.webp` — Expediente del paciente
- `whatsapp-chat.webp` — Conversación WhatsApp IA
**Formato:** WebP o AVIF, max 900px ancho para uso inline, no PNG 6000×4000.
**Naming:** `public/landing/{section}/{nombre-descriptivo}.webp`
**Activar:** Cuando la plataforma web y app estén desplegadas y se puedan capturar.

---

### PEND-04 — Precios Reales
**Sprint:** 5 (placeholder $XX/mes)
**Descripción:** Los 3 planes (Esencial, Pro, AI) tienen precio `null` → se muestra `$XX/mes`.
**Cuando activar:** Decisión comercial sobre pricing definitivo.
**Consideraciones:**
- Toggle mensual/anual → small Client Component si se implementa
- No usar global state, local component state suficiente
- Moneda puede variar por país en el futuro

---

### PEND-05 — Redirect de "Probar gratis"
**Sprint:** 5
**Descripción:** El CTA principal "Probar gratis 14 días" actualmente no redirige a ningún lado.
**Opciones cuando se active:**
- Redirect a `/signup?plan=ai` en ClinicaDental
- Formulario inline en la landing
- Calendly o similar para demo
- Flow de checkout con billing provider
**Configurar en:** `lib/config.ts` → `siteConfig.signupUrl`

---

### PEND-06 — WhatsApp Demo Interactivo
**Sprint:** 2 (CTA preparado pero oculto)
**Descripción:** CTA "Habla con nuestra recepcionista →" que abre WhatsApp real con la IA.
**Cuando activar:** Cuando exista un número de WhatsApp demo funcional.
**Implementación:**
- URL desde `siteConfig.whatsappDemoUrl` (actualmente `null`)
- `<a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">`
- No hardcodear número en múltiples componentes

---

### PEND-07 — Testimonios Reales
**Sprint:** 5 (placeholder genérico)
**Descripción:** No inventar testimonios. Sección muestra mensaje genérico hasta tener testimonios reales con autorización.
**Formato ideal por testimonio:**
```
"Cita textual del cliente..."
Nombre Completo
Cargo
Nombre de Clínica
```
**Cuando activar:** Con autorización escrita de cada cliente citado.
**Consideraciones:** No carousel automático. Grid o case study enfocado.

---

### PEND-08 — Métricas Reales de Social Proof
**Sprint:** 2 (placeholder textual)
**Descripción:** Mostrar métricas solo cuando sean verificables:
```
+XX,XXX citas gestionadas
XX% confirmadas automáticamente
XX h administrativas ahorradas
```
**Cuando activar:** Cuando existan datos reales del producto en producción.
**Prohibido:** Inventar cifras, redondear agresivamente, usar datos de prueba.

---

### PEND-09 — App Store Badges
**Sprint:** 2 (no incluidos)
**Descripción:** Links a App Store y Google Play para la app móvil del doctor.
**Cuando activar:** Cuando la app esté publicada en las tiendas.
**Implementación:** Badges oficiales de Apple y Google en la sección de app móvil.

---

## Pendientes Técnicos

### PEND-10 — GSAP Doctor Phone Pinned Showcase
**Sprint:** 2 (simplificado inicialmente) → mejorar en sprint 4
**Descripción:** La sección de app móvil debería tener un showcase GSAP con phone sticky/pinned mientras cambian las pantallas con scroll:
1. Agenda
2. Paciente
3. Cámara
4. Before/After
5. Voice note
**Tech:** GSAP ScrollTrigger, `gsap.matchMedia()` para mobile fallback.
**Mobile:** Cards verticales con Motion inView (no pinned).
**Activar:** Sprint 4 o cuando se busque máximo impacto visual.

---

### PEND-11 — Playwright E2E Tests
**Sprint:** 6
**Descripción:** Tests E2E con Playwright.
**Tests mínimos:**
- Homepage loads correctamente
- Navbar links funcionan
- Mobile menu abre/cierra
- CTA es visible y clickeable
- Pricing section renderiza 3 planes
- FAQ accordion abre/cierra
- Before/after slider responde a interacción
- Reduced motion: animaciones reducidas
**Dependencia:** `@axe-core/playwright` opcional para a11y scan.

---

### PEND-12 — Analytics Integration
**Sprint:** 6+
**Descripción:** Integrar analytics real (PostHog o GA4).
**Eventos preparados:**
```
hero_cta_click
demo_click
ai_whatsapp_demo_click
pricing_view
plan_select
signup_start
signup_complete
login_click
faq_open
```
**Wrapper:** `lib/analytics/track.ts` ya abstracto.
**Requisitos:** Cargar después de interacción/idle, respetar consentimiento, no bloquear render.

---

### PEND-13 — Billing Provider Integration
**Sprint:** Futuro
**Descripción:** Conectar con Tilopay o BAC Xpress Pago para checkout real.
**Interface lista:** `lib/billing/provider.ts` con `BillingProvider`.
**Flujo:**
```
Landing → Elegir plan → Backend → Payment Provider → Hosted Checkout → Webhook → Subscription ACTIVE → Crear/activar clínica
```
**Seguridad:** Nunca almacenar card_number, CVV. Checkout alojado preferido.

---

### PEND-14 — Páginas Legales
**Sprint:** Futuro
**Descripción:** Crear `/privacidad` y `/terminos` con contenido legal real.
**Cuando activar:** Antes de lanzar públicamente con formularios o analytics.

---

### PEND-15 — Cookie Consent
**Sprint:** Futuro
**Descripción:** CMP/banner de consentimiento si analytics/marketing lo requiere según mercados objetivo.
**Requisito:** No mostrar banner falso que no controle cookies realmente.

---

### PEND-16 — Security Headers
**Sprint:** 6 o deploy
**Descripción:** Configurar en Vercel/Next.js:
- CSP razonable (no romper analytics/checkout)
- X-Frame-Options
- Referrer-Policy
**Cuando activar:** Al cerrar deployment de producción.

---

### PEND-17 — Country Pages (i18n futuro)
**Sprint:** Futuro
**Descripción:** Arquitectura preparada para `/ni`, `/cr`, `/pa`, `/mx`.
**Estado:** Copy centralizado en `data/` para futura i18n. No instalar i18n library inicialmente.
**Cuando activar:** Expansión a mercados específicos con contenido localizado.

---

### PEND-18 — Before/After Images
**Sprint:** 3 (placeholder)
**Descripción:** El slider before/after necesita imágenes. No usar fotos clínicas reales sin permiso.
**Opciones:**
- Stock clínico licenciado
- Mock demo creado para marketing
- Ilustraciones dentales
**Cuando activar:** Cuando existan assets apropiados autorizados.

---

### PEND-19 — Open Graph Image Premium
**Sprint:** 5-6
**Descripción:** Crear imagen OG 1200×630 con logo, headline breve, y screenshot/device del producto.
**Implementación:** `app/opengraph-image.tsx` o imagen estática optimizada.

---

### PEND-20 — Favicon y App Icons
**Sprint:** 0-1
**Descripción:** Crear favicon, app icon, y apple touch icon basados en identidad ClinicFlow360.
**Formato:** SVG preferido para logo, PNG para favicons.
**Cuando activar:** Cuando exista el logo definitivo.

---

## Mejoras de Polish (post-launch)

### POLISH-01 — Lenis + GSAP Sync Optimization
Verificar que una sola instancia de Lenis esté sincronizada con ScrollTrigger. No crear múltiples RAF loops.

### POLISH-02 — content-visibility: auto
Evaluar en secciones muy below fold si `content-visibility: auto` con `contain-intrinsic-size` mejora performance sin side effects.

### POLISH-03 — View Transitions
Evaluar View Transitions API para navegación interna cuando haya rutas adicionales. No activar experimentalmente solo por novedad.

### POLISH-04 — Bundle Analyzer
Si bundle crece, usar analyzer compatible con Next.js 16. No dejar instalado permanentemente.

### POLISH-05 — Intersection Preload
Cuando sección compleja esté ~800-1200px antes del viewport, iniciar lazy import/preload de GSAP modules.
