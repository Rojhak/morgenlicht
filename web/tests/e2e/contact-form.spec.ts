import { test, expect, Page } from '@playwright/test'

test.describe('Contact Form UX', () => {
    let page: Page

    test.beforeEach(async ({ page: testPage }) => {
        page = testPage
        await page.goto('/kontakt')
        await page.waitForLoadState('networkidle')
    })

    test('should show required field indicators', async () => {
        // Check "Ihr Name" input
        const nameInput = page.locator('input[name="name"]')
        await expect(nameInput).toBeVisible()

        // Check label has asterisk
        // id defaults to name if not provided
        const nameLabel = page.locator('label[for="name"]')
        await expect(nameLabel).toContainText('Ihr Name')

        // The asterisk is in a span inside the label
        const nameAsterisk = nameLabel.locator('span[aria-hidden="true"]')
        await expect(nameAsterisk).toHaveText('*')
        // Check if it has the red color class
        await expect(nameAsterisk).toHaveClass(/text-red-500/)

        // Check input has required attribute
        // In HTML, boolean attributes can be present without value or with empty string
        // Playwright's toHaveAttribute handles checking for existence if value is omitted, but here we expect 'required'
        // Wait, strictly speaking <input required> has attribute "required".
        // Let's verify presence.
        const isNameRequired = await nameInput.getAttribute('required')
        expect(isNameRequired).not.toBeNull()

        // Check "Telefonnummer" input
        const phoneInput = page.locator('input[name="phone"]')
        await expect(phoneInput).toBeVisible()

        const phoneLabel = page.locator('label[for="phone"]')
        const phoneAsterisk = phoneLabel.locator('span[aria-hidden="true"]')
        await expect(phoneAsterisk).toHaveText('*')

        const isPhoneRequired = await phoneInput.getAttribute('required')
        expect(isPhoneRequired).not.toBeNull()
    })
})
