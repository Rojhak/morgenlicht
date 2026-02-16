/**
 * Security utility functions for input validation and sanitization.
 */

/**
 * Sanitizes input to prevent XSS in HTML contexts (like emails).
 * Replaces <, >, &, ", and ' with HTML entities.
 * Returns empty string if input is not a string.
 */
export function sanitizeInput(input: unknown): string {
  if (typeof input !== 'string') return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Validates inquiry data.
 * Returns an error message if invalid, or null if valid.
 * Checks types at runtime to prevent crashes.
 */
export function validateInquiry(data: unknown): string | null {
  if (typeof data !== 'object' || data === null) {
    return 'Ungültige Anfrage'
  }

  const { name, phone, pflegegrad } = data as Record<string, unknown>

  if (typeof name !== 'string' || name.trim().length === 0) {
    return 'Name ist erforderlich'
  }
  if (name.length > 100) {
    return 'Name ist zu lang (max. 100 Zeichen)'
  }

  if (typeof phone !== 'string' || phone.trim().length === 0) {
    return 'Telefonnummer ist erforderlich'
  }

  // Allow digits, spaces, +, -, (, )
  // Minimum 6 characters (to be somewhat realistic)
  const phoneRegex = /^[0-9\s\-\+\(\)]{6,30}$/
  if (!phoneRegex.test(phone)) {
    return 'Ungültige Telefonnummer'
  }

  if (pflegegrad !== undefined && (typeof pflegegrad !== 'string' || pflegegrad.length > 50)) {
     return 'Pflegegrad ist ungültig oder zu lang'
  }

  return null
}
