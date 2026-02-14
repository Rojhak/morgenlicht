// Security utility functions for input sanitization and validation

/**
 * Sanitizes input string to prevent XSS attacks by escaping HTML special characters.
 * @param input The string to sanitize
 * @returns The sanitized string
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

export interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
}

export interface ValidationResult {
  valid: boolean
  error?: string
}

/**
 * Validates the inquiry data ensuring required fields are present and valid.
 * @param data The inquiry data object
 * @returns ValidationResult
 */
export function validateInquiry(data: InquiryData): ValidationResult {
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    return { valid: false, error: 'Name ist erforderlich' }
  }

  if (data.name.length > 100) {
    return { valid: false, error: 'Name ist zu lang (max. 100 Zeichen)' }
  }

  if (!data.phone || typeof data.phone !== 'string' || !data.phone.trim()) {
    return { valid: false, error: 'Telefonnummer ist erforderlich' }
  }

  // Basic phone validation: allows digits, spaces, +, -, (, ), / and .
  // Must be at least 6 characters long
  const phoneRegex = /^[0-9\s\-\+\(\)\/\.]{6,}$/
  if (!phoneRegex.test(data.phone)) {
    return { valid: false, error: 'Ungültige Telefonnummer' }
  }

  if (data.phone.length > 50) {
    return { valid: false, error: 'Telefonnummer ist zu lang (max. 50 Zeichen)' }
  }

  if (data.pflegegrad && typeof data.pflegegrad !== 'string') {
    return { valid: false, error: 'Ungültiger Pflegegrad' }
  }

  if (data.pflegegrad && data.pflegegrad.length > 50) {
    return { valid: false, error: 'Pflegegrad ist zu lang (max. 50 Zeichen)' }
  }

  return { valid: true }
}
