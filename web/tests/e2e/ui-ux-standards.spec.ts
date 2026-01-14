import { test, expect, Page } from '@playwright/test'
import { injectAxe, checkA11y } from 'axe-playwright'
import { captureScreenshot, captureAllStates } from '../utils/screenshot'
import { getContrastRatio, parseRGB, parseRGBA, meetsWCAGAA } from '../utils/accessibility'

test.describe('UI/UX Standards Verification', () => {
    let page: Page

    test.beforeEach(async ({ page: testPage }) => {
        page = testPage
        await page.goto('/')
        await page.waitForLoadState('networkidle')
    })

    test.describe('1. Contrast Compliance (WCAG 2.2)', () => {
        test('homepage should meet WCAG AA contrast standards', async () => {
            // Inject accessibility testing library
            await injectAxe(page)

            // Run comprehensive accessibility check
            await checkA11y(page, undefined, {
                detailedReport: true,
                detailedReportOptions: {
                    html: true,
                },
            })

            // Capture screenshot for documentation
            await captureScreenshot(page, {
                name: 'contrast-compliance-homepage',
                fullPage: true,
            })
        })

        test('CareFinder Pflegegrad buttons should have sufficient contrast', async () => {
            // Scroll to CareFinder section
            await page.locator('#calculator').scrollIntoViewIfNeeded()
            await page.waitForTimeout(500)

            // Get first Pflegegrad button
            const button = page.locator('button:has-text("Pflegegrad 1")').first()

            // Get computed styles
            const backgroundColor = await button.evaluate((el) => {
                return window.getComputedStyle(el).backgroundColor
            })

            const textColor = await button.evaluate((el) => {
                return window.getComputedStyle(el).color
            })

            // Parse colors
            const bgColor = parseRGBA(backgroundColor) || parseRGB(backgroundColor)
            const fgColor = parseRGBA(textColor) || parseRGB(textColor)

            expect(bgColor).toBeTruthy()
            expect(fgColor).toBeTruthy()

            if (bgColor && fgColor) {
                const ratio = getContrastRatio(bgColor, fgColor)
                console.log(`Contrast ratio for Pflegegrad button: ${ratio.toFixed(2)}:1`)

                // WCAG AA requires minimum 4.5:1 for normal text
                expect(meetsWCAGAA(ratio)).toBe(true)
            }

            // Capture button states
            await captureAllStates(page, 'button:has-text("Pflegegrad 1")', 'pflegegrad-button')
        })

        test('CTA section text should be readable on dark background', async () => {
            // Find CTA section
            const ctaSection = page.locator('section:has(#cta-title)')
            await ctaSection.scrollIntoViewIfNeeded()

            // Check h2 title contrast
            const title = ctaSection.locator('h2')
            const titleColor = await title.evaluate((el) => {
                return window.getComputedStyle(el).color
            })

            // The CTA background is dark teal (#0D6E64), text should be white
            const textRgb = parseRGBA(titleColor) || parseRGB(titleColor)

            if (textRgb) {
                // White text (255,255,255) on dark teal (#0D6E64 = rgb(13, 110, 100))
                const darkTeal = { r: 13, g: 110, b: 100 }
                const ratio = getContrastRatio(textRgb, darkTeal)
                console.log(`CTA title contrast ratio: ${ratio.toFixed(2)}:1`)

                // Should have excellent contrast for white on dark teal
                expect(ratio).toBeGreaterThan(7) // AAA level
            }

            await captureScreenshot(page, {
                name: 'cta-section-contrast',
                fullPage: false,
            })
        })
    })

    test.describe('2. CareFinder Component Affordances', () => {
        test('buttons should have visible borders in default state', async () => {
            await page.locator('#calculator').scrollIntoViewIfNeeded()

            const button = page.locator('button:has-text("Pflegegrad 1")').first()

            // Check border visibility
            const borderWidth = await button.evaluate((el) => {
                return window.getComputedStyle(el).borderWidth
            })

            const borderColor = await button.evaluate((el) => {
                return window.getComputedStyle(el).borderColor
            })

            // Should have visible border (not 0px)
            expect(borderWidth).not.toBe('0px')
            console.log(`Button border: ${borderWidth} ${borderColor}`)

            await captureScreenshot(page, {
                name: 'carefinder-default-state',
                fullPage: false,
            })
        })

        test('selected button should have distinct active state', async () => {
            await page.locator('#calculator').scrollIntoViewIfNeeded()

            const button = page.locator('button:has-text("Pflegegrad 2")').first()

            // Click to select
            await button.click()
            await page.waitForTimeout(300)

            // Check active styles
            const backgroundColor = await button.evaluate((el) => {
                return window.getComputedStyle(el).backgroundColor
            })

            const bgColor = parseRGBA(backgroundColor) || parseRGB(backgroundColor)

            // Selected state should be teal-800 (darker)
            // Not white like default state
            if (bgColor) {
                const isWhite = bgColor.r > 240 && bgColor.g > 240 && bgColor.b > 240
                expect(isWhite).toBe(false)
                console.log(`Selected button bg: rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`)
            }

            await captureScreenshot(page, {
                name: 'carefinder-selected-state',
                fullPage: false,
            })
        })

        test('should show distinct hover state', async () => {
            await page.locator('#calculator').scrollIntoViewIfNeeded()

            const button = page.locator('button:has-text("Pflegegrad 3")').first()

            // Get default background
            const defaultBg = await button.evaluate((el) => {
                return window.getComputedStyle(el).backgroundColor
            })

            // Hover
            await button.hover()
            await page.waitForTimeout(300)

            // Get hover background
            const hoverBg = await button.evaluate((el) => {
                return window.getComputedStyle(el).backgroundColor
            })

            // Hover state should be different from default
            expect(hoverBg).not.toBe(defaultBg)
            console.log(`Default: ${defaultBg}, Hover: ${hoverBg}`)

            await captureScreenshot(page, {
                name: 'carefinder-hover-state',
                fullPage: false,
            })
        })

        test('should have visible focus rings for keyboard navigation', async () => {
            await page.locator('#calculator').scrollIntoViewIfNeeded()

            const button = page.locator('button:has-text("Pflegegrad 1")').first()

            // Focus via keyboard
            await button.focus()
            await page.waitForTimeout(200)

            // Check for outline or ring
            const outline = await button.evaluate((el) => {
                const styles = window.getComputedStyle(el)
                return {
                    outline: styles.outline,
                    outlineWidth: styles.outlineWidth,
                    boxShadow: styles.boxShadow,
                }
            })

            // Should have either outline or box-shadow for focus ring
            const hasFocusIndicator =
                (outline.outlineWidth && outline.outlineWidth !== '0px') ||
                (outline.boxShadow && outline.boxShadow !== 'none')

            expect(hasFocusIndicator).toBe(true)
            console.log('Focus styles:', outline)

            await captureScreenshot(page, {
                name: 'carefinder-focus-ring',
                fullPage: false,
            })
        })
    })

    test.describe('3. Interactive Elements', () => {
        test('glass card hover effects should be visible', async () => {
            // Find a pathway card
            const card = page.locator('.group > div').filter({ hasText: 'Für mich selbst' }).first()

            await card.scrollIntoViewIfNeeded()

            // Capture default state
            await captureScreenshot(page, {
                name: 'glass-card-default',
                fullPage: false,
            })

            // Hover
            await card.hover()
            await page.waitForTimeout(500)

            await captureScreenshot(page, {
                name: 'glass-card-hover',
                fullPage: false,
            })
        })

        test('buttons should show smooth transitions', async () => {
            const primaryButton = page.locator('text=Möglichkeiten entdecken').first()

            await primaryButton.scrollIntoViewIfNeeded()

            // Capture all states
            await captureAllStates(
                page,
                'text=Möglichkeiten entdecken',
                'primary-button'
            )
        })
    })

    test.describe('4. Responsive Design', () => {
        test('homepage should be readable on mobile viewport', async ({ page: mobilePage }) => {
            await mobilePage.setViewportSize({ width: 375, height: 667 })
            await mobilePage.goto('/')
            await mobilePage.waitForLoadState('networkidle')

            // Check that headline is visible
            const headline = mobilePage.locator('#hero-title')
            await expect(headline).toBeVisible()

            // Capture mobile view
            await captureScreenshot(mobilePage, {
                name: 'mobile-homepage',
                fullPage: true,
            })

            // Run accessibility check on mobile
            await injectAxe(mobilePage)
            await checkA11y(mobilePage)
        })

        test('CareFinder buttons should be appropriately sized for touch', async ({ page: mobilePage }) => {
            await mobilePage.setViewportSize({ width: 375, height: 667 })
            await mobilePage.goto('/')
            await mobilePage.locator('#calculator').scrollIntoViewIfNeeded()

            const button = mobilePage.locator('button:has-text("Pflegegrad 1")').first()

            // Get button dimensions
            const box = await button.boundingBox()

            expect(box).toBeTruthy()
            if (box) {
                // Touch targets should be at least 44x44 pixels (iOS HIG)
                expect(box.height).toBeGreaterThanOrEqual(44)
                console.log(`Button dimensions: ${box.width}x${box.height}`)
            }

            await captureScreenshot(mobilePage, {
                name: 'mobile-carefinder',
                fullPage: false,
            })
        })
    })

    test.describe('5. Premium Aesthetics', () => {
        test('glassmorphism effects should render correctly', async () => {
            // Check for backdrop-filter support and usage
            const glassCard = page.locator('.backdrop-blur-lg').first()

            if (await glassCard.count() > 0) {
                const backdropFilter = await glassCard.evaluate((el) => {
                    return window.getComputedStyle(el).backdropFilter
                })

                expect(backdropFilter).toContain('blur')
                console.log('Backdrop filter:', backdropFilter)
            }

            await captureScreenshot(page, {
                name: 'glassmorphism-effects',
                fullPage: true,
            })
        })

        test('gradient implementations should be smooth', async () => {
            // Check CTA section gradient
            const ctaSection = page.locator('section:has(#cta-title)')
            await ctaSection.scrollIntoViewIfNeeded()

            const gradient = await ctaSection.locator('div').first().evaluate((el) => {
                return window.getComputedStyle(el).backgroundImage
            })

            expect(gradient).toContain('gradient')
            console.log('CTA gradient:', gradient.substring(0, 100))

            await captureScreenshot(page, {
                name: 'gradient-implementations',
                fullPage: false,
            })
        })

        test('typography hierarchy should be clear', async () => {
            // Check font sizes for hierarchy
            const h1 = page.locator('#hero-title')
            const h2 = page.locator('#testimonials-title')

            const h1Size = await h1.evaluate((el) => {
                return window.getComputedStyle(el).fontSize
            })

            const h2Size = await h2.evaluate((el) => {
                return window.getComputedStyle(el).fontSize
            })

            // H1 should be larger than H2
            const h1Px = parseFloat(h1Size)
            const h2Px = parseFloat(h2Size)

            expect(h1Px).toBeGreaterThan(h2Px)
            console.log(`H1: ${h1Size}, H2: ${h2Size}`)

            await captureScreenshot(page, {
                name: 'typography-hierarchy',
                fullPage: true,
            })
        })
    })
})
