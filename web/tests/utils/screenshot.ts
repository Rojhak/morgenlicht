import { Page, Locator } from '@playwright/test'
import path from 'path'

/**
 * Screenshot utilities for visual testing
 */

export interface ScreenshotOptions {
    name: string
    fullPage?: boolean
    animations?: 'disabled' | 'allow'
}

/**
 * Capture screenshot with consistent naming and storage
 */
export async function captureScreenshot(
    page: Page,
    options: ScreenshotOptions
): Promise<string> {
    const screenshotPath = path.join('tests/screenshots', `${options.name}.png`)

    await page.screenshot({
        path: screenshotPath,
        fullPage: options.fullPage ?? false,
        animations: options.animations ?? 'disabled',
    })

    return screenshotPath
}

/**
 * Capture element screenshot with annotations
 */
export async function captureElementScreenshot(
    element: Locator,
    name: string
): Promise<string> {
    const screenshotPath = path.join('tests/screenshots', `${name}.png`)

    await element.screenshot({
        path: screenshotPath,
        animations: 'disabled',
    })

    return screenshotPath
}

/**
 * Capture screenshot of all states (default, hover, focus, active)
 */
export async function captureAllStates(
    page: Page,
    selector: string,
    baseName: string
): Promise<void> {
    const element = page.locator(selector)

    // Default state
    await captureElementScreenshot(element, `${baseName}-default`)

    // Hover state
    await element.hover()
    await page.waitForTimeout(500) // Wait for animations
    await captureElementScreenshot(element, `${baseName}-hover`)

    // Focus state
    await element.focus()
    await page.waitForTimeout(200)
    await captureElementScreenshot(element, `${baseName}-focus`)

    // Reset
    await page.mouse.move(0, 0)
}
