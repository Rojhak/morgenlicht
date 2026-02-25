import { test, expect } from '@playwright/test'

test.describe('Accordion Accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    // Navigate to the questions page where accordion is used
    await page.goto('/fragen')

    // Find the first accordion trigger button
    const trigger = page.locator('button[aria-expanded]').first()
    await expect(trigger).toBeVisible()

    // Get the ID of the trigger
    const triggerId = await trigger.getAttribute('id')
    expect(triggerId).toBeTruthy()

    // Get the aria-controls attribute
    const contentId = await trigger.getAttribute('aria-controls')
    expect(contentId).toBeTruthy()

    // Find the content region
    // Since useId generates IDs with colons, we need to be careful with CSS selectors if we were using them directly.
    // But here we can use locator by ID attribute which is safe.
    const content = page.locator(`[id="${contentId}"]`)

    // Verify content attributes
    await expect(content).toHaveAttribute('role', 'region')
    await expect(content).toHaveAttribute('aria-labelledby', triggerId!)
  })
})
