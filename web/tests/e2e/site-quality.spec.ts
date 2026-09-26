import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { expect, test, type Page } from '@playwright/test'

// Guards the SEO, accessibility and conversion basics of every page in the sitemap.

const axeSource = readFileSync(join(process.cwd(), 'node_modules/axe-core/axe.min.js'), 'utf8')
const PROD = 'https://www.morgenlicht-alltagshilfe.de'

async function sitemapPaths(page: Page): Promise<string[]> {
  const response = await page.request.get('/sitemap.xml')
  expect(response.status()).toBe(200)
  const xml = await response.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replace(PROD, '') || '/')
}

test.describe('Every page in the sitemap', () => {
  test('is indexable, well-formed and accessible', async ({ page }, testInfo) => {
    test.setTimeout(240_000)
    const isMobile = testInfo.project.name === 'Mobile'
    const paths = await sitemapPaths(page)
    expect(paths.length).toBeGreaterThan(20)

    for (const path of paths) {
      const response = await page.goto(path, { waitUntil: 'load' })
      expect(response?.status(), `${path} status`).toBe(200)

      const facts = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? '',
        canonical: document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? '',
        robots: document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content ?? '',
        h1Count: document.querySelectorAll('h1').length,
        jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => node.textContent ?? ''),
        overflow: document.documentElement.scrollWidth - window.innerWidth,
      }))

      expect(facts.title.length, `${path} title "${facts.title}"`).toBeLessThanOrEqual(60)
      expect(facts.description.length, `${path} description length`).toBeGreaterThanOrEqual(100)
      expect(facts.description.length, `${path} description length`).toBeLessThanOrEqual(160)
      expect(facts.canonical, `${path} canonical`).toBe(`${PROD}${path}`)
      expect(facts.robots, `${path} robots`).not.toContain('noindex')
      expect(facts.h1Count, `${path} h1 count`).toBe(1)
      for (const block of facts.jsonLd) expect(() => JSON.parse(block), `${path} JSON-LD`).not.toThrow()
      expect(facts.overflow, `${path} horizontal overflow`).toBeLessThanOrEqual(1)

      if (!isMobile) {
        await page.addScriptTag({ content: axeSource })
        const violations = await page.evaluate(async () => {
          const axe = (window as unknown as { axe: { run: (context: Document, options: object) => Promise<{ violations: Array<{ id: string; nodes: unknown[] }> }> } }).axe
          const result = await axe.run(document, {
            runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
          })
          return result.violations.map((violation) => `${violation.id} (${violation.nodes.length})`)
        })
        expect(violations, `${path} axe violations`).toEqual([])
      }
    }
  })
})

test.describe('Technical SEO files', () => {
  test('robots.txt, llms.txt and redirects', async ({ page }) => {
    const robots = await page.request.get('/robots.txt')
    expect(robots.status()).toBe(200)
    expect(await robots.text()).toContain('Sitemap: https://www.morgenlicht-alltagshilfe.de/sitemap.xml')

    const llms = await page.request.get('/llms.txt')
    expect(llms.status()).toBe(200)
    expect(await llms.text()).toContain('§ 45a SGB XI')

    const legacySearch = await page.request.get('/suche', { maxRedirects: 0 })
    expect(legacySearch.status()).toBe(308)
    expect(legacySearch.headers().location).toContain('/leistungen')

    const missing = await page.goto('/diese-seite-gibt-es-nicht')
    expect(missing?.status()).toBe(404)
    const robotsTags = page.locator('meta[name="robots"]')
    await expect(robotsTags).toHaveCount(1)
    await expect(robotsTags).toHaveAttribute('content', /noindex/)
  })
})

test.describe('Navigation and contact', () => {
  test('skip link moves focus to the main content', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Mobile', 'keyboard test runs on desktop')
    await page.goto('/')
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Zum Hauptinhalt springen' })).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()
  })

  test('mobile menu opens visibly and closes with Escape', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'Mobile', 'mobile only')
    await page.goto('/')
    const toggle = page.locator('button[aria-controls="mobile-menu"]')
    await toggle.click()
    const menu = page.locator('#mobile-menu')
    await expect(menu).toBeVisible()
    const box = await menu.boundingBox()
    expect(box?.height ?? 0).toBeGreaterThan(300)
    await expect(menu.getByRole('link', { name: 'Leistungen' })).toBeVisible()
    await expect(menu.getByRole('link', { name: /Anrufen/ })).toHaveAttribute('href', 'tel:+493023593028')
    await page.keyboard.press('Escape')
    await expect(menu).toHaveCount(0)
    await expect(toggle).toBeFocused()
  })

  test('call and WhatsApp are reachable on the home page', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('main a[href="tel:+493023593028"]').first()).toBeVisible()
    await expect(page.locator('main a[href^="https://wa.me/4915156057365"]').first()).toBeVisible()
  })
})

test.describe('Without JavaScript', () => {
  test.use({ javaScriptEnabled: false })

  test('core content is part of the HTML', async ({ page }) => {
    const expectations: Array<[string, string]> = [
      ['/', 'Alltagshilfe zu Hause in Berlin-Kreuzberg und Neukölln'],
      ['/pflegegrad-guide', 'Checkliste für den Begutachtungstermin'],
      ['/fragen', 'Wie oft kann die Hilfe kommen?'],
      ['/kosten', 'Drei Wege der Finanzierung'],
      ['/blog/pflegesachleistung-haushaltshilfe-umwandlungsanspruch', 'Vier Gründe, warum sich das lohnt'],
    ]
    for (const [path, text] of expectations) {
      await page.goto(path)
      await expect(page.getByText(text).first(), `${path}`).toBeAttached()
    }
  })
})
