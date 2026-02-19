
/**
 * Security utilities for input sanitization and validation.
 */

/**
 * Sanitizes input string by encoding HTML special characters to prevent XSS.
 * Encodes: <, >, &, ", '
 */
export function sanitizeInput(input: string): string {
  if (!input) return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Sanitizes input for use in email subjects to prevent header injection.
 * Removes newlines and carriage returns.
 */
export function sanitizeForSubject(input: string): string {
  if (!input) return ''
  // Remove newlines and carriage returns to prevent header injection
  return input.replace(/[\r\n]+/g, ' ').trim()
}

/**
 * Validates inquiry data.
 * checks:
 * - name: required, string
 * - phone: required, valid format (digits, spaces, +, -, (, ), /, .)
 * - pflegegrad: optional, string
 */
export function validateInquiry(data: any): { valid: boolean; errors?: string[] } {
  const errors: string[] = []

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid data format'] }
  }

  // Name validation
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    errors.push('Name is required')
  }

  // Phone validation
  if (!data.phone || typeof data.phone !== 'string') {
    errors.push('Phone number is required')
  } else {
    // Allow digits, spaces, +, -, (, ), /, .
    const phoneRegex = /^[0-9\s\+\-\(\)\/\.]+$/
    if (!phoneRegex.test(data.phone) || data.phone.trim().length < 6) {
      errors.push('Invalid phone number format')
    }
  }

  // Pflegegrad validation (optional)
  if (data.pflegegrad !== undefined && data.pflegegrad !== null && data.pflegegrad !== '') {
     if (typeof data.pflegegrad !== 'string') {
        errors.push('Invalid pflegegrad format')
     }
     // Optional: specific check for valid pflegegrad values if needed,
     // but currently just checking it's a string if present.
  }

  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  }
}
