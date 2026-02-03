import { test, expect } from '@playwright/test';

test.describe('CareFinder Accessibility & Focus Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the calculator section to be visible
    await page.locator('section[aria-labelledby="calculator-title"]').scrollIntoViewIfNeeded();
  });

  test('should have accessible progress bar', async ({ page }) => {
    // Check initial state (Step 1)
    const progressBar = page.locator('[role="progressbar"]');
    await expect(progressBar).toBeVisible();
    await expect(progressBar).toHaveAttribute('aria-valuenow', '33');
    await expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    await expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    await expect(progressBar).toHaveAttribute('aria-label', 'Fortschritt der Berechnung');
  });

  test('should manage focus when navigating steps', async ({ page }) => {
    // Step 1: Select Pflegegrad 2
    await page.getByRole('button', { name: '2' }).click();

    // Click Weiter
    await page.getByRole('button', { name: 'Weiter' }).click();

    // Expect focus to be on Step 2 heading
    const step2Heading = page.getByRole('heading', { name: 'Nutzen Sie bereits einen Pflegedienst?' });
    await expect(step2Heading).toBeFocused();

    // Step 2: Answer "Nein" (first button)
    await page.getByRole('button').filter({ hasText: 'Nein' }).click();

    // Expect focus to be on Step 3 result container
    const resultContainer = page.locator('[aria-label="Ihr Ergebnis"]');
    await expect(resultContainer).toBeFocused();
  });
});
