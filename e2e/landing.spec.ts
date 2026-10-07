import { test, expect } from "@playwright/test"

test.describe("Landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("homepage loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/ClinicFlow360/)
  })

  test("hero section is visible with H1", async ({ page }) => {
    const h1 = page.locator("h1")
    await expect(h1).toBeVisible()
    await expect(h1).toContainText("Tu clínica conectada.")
  })

  test("hero CTA button is visible", async ({ page }) => {
    const cta = page.locator("#hero").getByRole("link", { name: /Probar gratis 14 días/ })
    await expect(cta).toBeVisible()
  })

  test("navbar has all navigation links", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "Navegación principal" })
    await expect(nav).toBeVisible()

    // Desktop links (hidden on mobile, but exist in DOM)
    await expect(nav.getByText("Recepción IA")).toBeAttached()
    await expect(nav.getByText("Voice")).toBeAttached()
    await expect(nav.getByText("RX")).toBeAttached()
    await expect(nav.getByText("Growth")).toBeAttached()
    await expect(nav.getByText("Precios")).toBeAttached()
  })

  test("pricing section shows 3 plans", async ({ page }) => {
    const pricing = page.locator("#precios")
    await pricing.scrollIntoViewIfNeeded()

    for (const [plan, price] of [["Essential", "$39"], ["Pro", "$99"], ["Elite", "$199"]] as const) {
      await expect(pricing.getByRole("heading", { name: plan, exact: true })).toBeVisible()
      await expect(pricing.getByText(price, { exact: true }).first()).toBeVisible()
    }
  })

  test("FAQ accordion expands on click", async ({ page }) => {
    const faq = page.locator("#faq")
    await faq.scrollIntoViewIfNeeded()

    const firstQuestion = page.locator("#faq").getByText("¿Qué es ClinicFlow RX?")
    await firstQuestion.click()

    const answer = page.getByText("Es la integración de imagenología de ClinicFlow360")
    await expect(answer).toBeVisible()
  })

  test("footer is visible with copyright", async ({ page }) => {
    const footer = page.getByRole("contentinfo")
    await footer.scrollIntoViewIfNeeded()
    await expect(footer.getByText(/ClinicFlow360/).first()).toBeVisible()
  })

  test("skip-to-content link exists", async ({ page }) => {
    const skipLink = page.getByRole("link", {
      name: "Ir al contenido principal",
    })
    await expect(skipLink).toBeAttached()
  })

  test("single H1 on page", async ({ page }) => {
    const h1s = page.locator("h1")
    await expect(h1s).toHaveCount(1)
  })
})
