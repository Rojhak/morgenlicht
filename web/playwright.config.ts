import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright configuration for UI/UX testing
 * Focuses on verifying 10/10 premium design standards
 */
export default defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['html', { outputFolder: 'playwright-report' }],
        ['list'],
    ],

    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'Desktop Chrome',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: 'Tablet',
            use: {
                ...devices['iPad Pro'],
                viewport: { width: 768, height: 1024 },
            },
        },
        {
            name: 'Mobile',
            use: {
                ...devices['iPhone 13'],
                viewport: { width: 375, height: 667 },
            },
        },
    ],

    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120000,
    },
})
