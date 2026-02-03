/**
 * Security utilities for input validation and sanitization.
 */

/**
 * Sanitizes a string for safe inclusion in HTML.
 * Escapes characters < > & " ' to prevent HTML injection.
 * @param input The string to sanitize.
 * @returns The sanitized string.
 */
export function sanitizeHtml(input: string): string {
  if (!input) return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Validates a phone number.
 * Allows digits, spaces, hyphens, plus sign, and parentheses.
 * Requires at least 6 characters.
 * @param phone The phone number to validate.
 * @returns True if valid, false otherwise.
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false
  const regex = /^[0-9\s\-\+\(\)\/\.]{6,50}$/
  return regex.test(phone)
}

/**
 * Validates a name.
 * Checks for non-empty string and reasonable length.
 * @param name The name to validate.
 * @returns True if valid, false otherwise.
 */
export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false
  const trimmed = name.trim()
  return trimmed.length > 0 && trimmed.length < 100
}
