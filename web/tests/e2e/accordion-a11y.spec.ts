import { test, expect } from '@playwright/test';

test.describe('Accordion Accessibility', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/fragen');
    });

    test('should have accessible ARIA attributes', async ({ page }) => {
        // Find the first accordion button
        const button = page.locator('button[aria-expanded]').first();

        // Wait for button to be visible
        await expect(button).toBeVisible();

        // Check if button has aria-controls
        const contentId = await button.getAttribute('aria-controls');
        // This expectation should fail before the fix
        expect(contentId, 'Accordion button must have aria-controls').toBeTruthy();

        if (contentId) {
             // Find the content region
            const content = page.locator(`[id="${contentId}"]`);

            // Check content role
            await expect(content).toHaveAttribute('role', 'region');

            // Check aria-labelledby
            const buttonId = await button.getAttribute('id');
            expect(buttonId, 'Accordion button must have an id').toBeTruthy();

            if (buttonId) {
                await expect(content).toHaveAttribute('aria-labelledby', buttonId);
            }
        }
    });

    test('should update aria-expanded on click', async ({ page }) => {
         const button = page.locator('button[aria-expanded]').first();

         // Initial state (might be open or closed depending on defaultOpen)
         const initialState = await button.getAttribute('aria-expanded');

         // Click to toggle
         await button.click();

         // Check if state changed
         await expect(button).toHaveAttribute('aria-expanded', initialState === 'true' ? 'false' : 'true');
    });
});
