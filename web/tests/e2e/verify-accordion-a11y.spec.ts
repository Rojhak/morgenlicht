import { test, expect } from '@playwright/test'

test.describe('Accordion Accessibility Verification', () => {
  test('Accordion items should have correct ARIA attributes', async ({ page }) => {
    // Navigate to the FAQ page
    await page.goto('/fragen')

    // Find all accordion buttons
    const buttons = page.locator('button[aria-expanded]')
    const count = await buttons.count()

    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)

      // 1. Check aria-controls
      const controlsId = await button.getAttribute('aria-controls')
      expect(controlsId).toBeTruthy()
      expect(controlsId).toMatch(/^accordion-content-/)

      // 2. Check button ID
      const buttonId = await button.getAttribute('id')
      expect(buttonId).toBeTruthy()
      expect(buttonId).toMatch(/^accordion-button-/)

      // 3. Find the controlled content region
      // useId generates IDs with colons, so we need to use attribute selector or escape it.
      const content = page.locator(`[id="${controlsId}"]`)
      await expect(content).toHaveCount(1)

      // 4. Check role="region"
      const role = await content.getAttribute('role')
      expect(role).toBe('region')

      // 5. Check aria-labelledby
      const labelledBy = await content.getAttribute('aria-labelledby')
      expect(labelledBy).toBe(buttonId)
    }
  })

  test('Accordion state toggles correctly with ARIA attributes', async ({ page }) => {
    await page.goto('/fragen')

    // Get the first accordion item (usually open by default in this app based on code reading)
    const firstButton = page.locator('button[aria-expanded]').first()

    // Check initial state (should be expanded)
    await expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    // Click to collapse
    await firstButton.click()
    await expect(firstButton).toHaveAttribute('aria-expanded', 'false')

    // Click to expand
    await firstButton.click()
    await expect(firstButton).toHaveAttribute('aria-expanded', 'true')
  })
})
