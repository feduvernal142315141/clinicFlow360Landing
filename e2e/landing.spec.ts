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
    await expect(h1).toContainText("Tu clínica sigue atendiendo")
  })

  test("hero CTA button is visible", async ({ page }) => {
    const cta = page.getByRole("link", { name: /Probar gratis 14 días/ })
    await expect(cta).toBeVisible()
  })

  test("navbar has all navigation links", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "Navegación principal" })
    await expect(nav).toBeVisible()

    // Desktop links (hidden on mobile, but exist in DOM)
    await expect(nav.getByText("Producto")).toBeAttached()
    await expect(nav.getByText("Recepción IA")).toBeAttached()
    await expect(nav.getByText("App móvil")).toBeAttached()
    await expect(nav.getByText("Precios")).toBeAttached()
  })

  test("pricing section shows 3 plans", async ({ page }) => {
    const pricing = page.locator("#precios")
    await pricing.scrollIntoViewIfNeeded()

    await expect(page.getByText("Esencial")).toBeVisible()
    await expect(page.getByText("Clínica Pro")).toBeVisible()
    await expect(page.getByText("Clínica AI")).toBeVisible()
  })

  test("FAQ accordion expands on click", async ({ page }) => {
    const faq = page.locator("#faq")
    await faq.scrollIntoViewIfNeeded()

    const firstQuestion = page.getByText(
      "¿ClinicFlow360 funciona con un solo doctor?"
    )
    await firstQuestion.click()

    const answer = page.getByText("Funciona para consultorios de un solo")
    await expect(answer).toBeVisible()
  })

  test("before/after slider has correct ARIA role", async ({ page }) => {
    const slider = page.getByRole("slider", {
      name: "Comparador antes y después",
    })
    await slider.scrollIntoViewIfNeeded()
    await expect(slider).toBeAttached()
  })

  test("footer is visible with copyright", async ({ page }) => {
    const footer = page.getByRole("contentinfo")
    await footer.scrollIntoViewIfNeeded()
    await expect(footer.getByText(/ClinicFlow360/)).toBeVisible()
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
