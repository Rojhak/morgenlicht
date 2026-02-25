
/**
 * Security utilities for input validation and sanitization.
 */

/**
 * Sanitizes input to prevent XSS by encoding special characters.
 * @param input The input string to sanitize.
 * @returns The sanitized string.
 */
export function sanitizeInput(input: string): string {
  if (!input) return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Sanitizes input for use in email subjects to prevent header injection.
 * Replaces newlines with spaces.
 * @param input The input string to sanitize.
 * @returns The sanitized string.
 */
export function sanitizeForSubject(input: string): string {
  if (!input) return ''
  return input.replace(/[\r\n]+/g, ' ').trim()
}

/**
 * Validates the inquiry data.
 * @param data The data object to validate.
 * @returns An object containing validation result and optional error message.
 */
export function validateInquiry(data: any): { isValid: boolean; error?: string } {
  if (!data) {
    return { isValid: false, error: 'Keine Daten empfangen' }
  }

  // Validate Name
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.length > 100) {
    return { isValid: false, error: 'Name muss zwischen 2 und 100 Zeichen lang sein' }
  }

  // Validate Phone
  if (!data.phone || typeof data.phone !== 'string') {
    return { isValid: false, error: 'Telefonnummer ist erforderlich' }
  }

  // Allow digits, spaces, +, -, (, ), /, .
  const phoneRegex = /^[0-9\s\+\-\(\)\/\.]{6,30}$/
  if (!phoneRegex.test(data.phone)) {
    return { isValid: false, error: 'Ungültiges Telefonnummer-Format' }
  }

  // Validate Pflegegrad (Optional)
  if (data.pflegegrad) {
    if (typeof data.pflegegrad !== 'string') {
        return { isValid: false, error: 'Ungültiges Format für Pflegegrad' }
    }
    const validPflegegrad = ['1', '2', '3', '4', '5', 'Pflegegrad 1', 'Pflegegrad 2', 'Pflegegrad 3', 'Pflegegrad 4', 'Pflegegrad 5']
    if (!validPflegegrad.includes(data.pflegegrad)) {
      return { isValid: false, error: 'Ungültiger Pflegegrad' }
    }
  }

  return { isValid: true }
}
