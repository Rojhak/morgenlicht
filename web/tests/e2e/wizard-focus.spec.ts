import { test, expect } from '@playwright/test';

test.describe('CareFinder Wizard Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to the calculator section to ensure visibility
    await page.locator('#calculator').scrollIntoViewIfNeeded();
  });

  test('should move focus to next step heading when advancing to Step 2', async ({ page }) => {
    // Step 1: Select Pflegegrad 2 (to go to Step 2)
    const pflegegradButton = page.getByRole('button', { name: '2', exact: true });
    await pflegegradButton.click();

    const weiterButton = page.getByRole('button', { name: 'Weiter' });
    await weiterButton.click();

    // Verify focus moved to the question heading in Step 2
    // The heading text is "Nutzen Sie bereits einen Pflegedienst?"
    // Note: It might be a 'heading' role or just text depending on implementation.
    // I'll check if the element with this text is focused.
    const heading = page.getByText('Nutzen Sie bereits einen Pflegedienst?');
    await expect(heading).toBeFocused();
  });

  test('should move focus to result when finishing (PG1)', async ({ page }) => {
    // Step 1: Select Pflegegrad 1 (goes directly to result)
    const pflegegradButton = page.getByRole('button', { name: '1', exact: true });
    await pflegegradButton.click();

    const weiterButton = page.getByRole('button', { name: 'Weiter' });
    await weiterButton.click();

    // Verify focus moved to the result container.
    // The container should contain the text "Stunden pro Monat" (since PG1 gives >0 hours).
    // We check if the focused element contains this text.
    await expect(page.getByText('Stunden pro Monat')).toBeVisible();

    const activeElementText = await page.evaluate(() => document.activeElement?.textContent);
    expect(activeElementText).toContain('Stunden pro Monat');
  });

  test('details/summary should be accessible and use native elements', async ({ page }) => {
    // Navigate to a result page with details (PG2 + No Sachleistung)
    await page.getByRole('button', { name: '2', exact: true }).click();
    await page.getByRole('button', { name: 'Weiter' }).click();

    // Step 2: Select 'Nein' (No Sachleistung)
    // The button has text "Nein" inside.
    await page.getByRole('button', { name: 'Nein Mehr Budget verfügbar' }).click();

    // Now on Result page
    // Check for "Details zum Budget" summary
    const summary = page.locator('summary');
    await expect(summary).toBeVisible();
    await expect(summary).toHaveText(/Details zum Budget/);

    // Check native details element
    const details = page.locator('details');
    await expect(details).toBeVisible();

    // Ideally, content should be hidden initially (or shown if default open, but likely hidden)
    // The current implementation hides it via JS (no rendered).
    // The new implementation will hide it via native details (rendered but hidden).

    // Click summary to toggle
    await summary.click();

    // Check content visibility
    await expect(page.getByText('Entlastungsbetrag')).toBeVisible();

    // Check open attribute
    await expect(details).toHaveAttribute('open', '');
  });
});
