export interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
}

/**
 * Sanitizes input to prevent XSS in HTML contexts (like emails).
 * Replaces <, >, &, ", and ' with HTML entities.
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
 * Validates inquiry data.
 * Returns an error message if invalid, or null if valid.
 */
export function validateInquiry(data: Partial<InquiryData>): string | null {
  if (!data.name || data.name.trim().length === 0) {
    return 'Name ist erforderlich'
  }
  if (data.name.length > 100) {
    return 'Name ist zu lang (max. 100 Zeichen)'
  }

  if (!data.phone || data.phone.trim().length === 0) {
    return 'Telefonnummer ist erforderlich'
  }

  // Allow digits, spaces, +, -, (, )
  // Minimum 6 characters (to be somewhat realistic)
  const phoneRegex = /^[0-9\s\-\+\(\)]{6,30}$/
  if (!phoneRegex.test(data.phone)) {
    return 'Ungültige Telefonnummer'
  }

  if (data.pflegegrad && data.pflegegrad.length > 50) {
    return 'Pflegegrad ist zu lang (max. 50 Zeichen)'
  }

  return null
}
