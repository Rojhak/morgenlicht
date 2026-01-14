/**
 * Accessibility testing utilities
 * For WCAG 2.2 compliance verification
 */

/**
 * Calculate relative luminance of a color
 * Used for contrast ratio calculations (WCAG formula)
 */
export function getLuminance(rgb: { r: number; g: number; b: number }): number {
    const { r, g, b } = rgb
    const [rs, gs, bs] = [r, g, b].map((val) => {
        const normalized = val / 255
        return normalized <= 0.03928
            ? normalized / 12.92
            : Math.pow((normalized + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Calculate contrast ratio between two colors
 * Returns value between 1-21, WCAG requires minimum 4.5:1 for normal text
 */
export function getContrastRatio(
    color1: { r: number; g: number; b: number },
    color2: { r: number; g: number; b: number }
): number {
    const lum1 = getLuminance(color1)
    const lum2 = getLuminance(color2)
    const lighter = Math.max(lum1, lum2)
    const darker = Math.min(lum1, lum2)
    return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Parse RGB color string to RGB object
 */
export function parseRGB(rgbString: string): { r: number; g: number; b: number } | null {
    const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    if (!match) return null
    return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
    }
}

/**
 * Parse RGBA color string to RGB object
 */
export function parseRGBA(rgbaString: string): { r: number; g: number; b: number } | null {
    const match = rgbaString.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/)
    if (!match) return null
    return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
    }
}

/**
 * Check if contrast ratio meets WCAG AA standards
 * Normal text: 4.5:1, Large text: 3:1
 */
export function meetsWCAGAA(ratio: number, isLargeText = false): boolean {
    return isLargeText ? ratio >= 3 : ratio >= 4.5
}
