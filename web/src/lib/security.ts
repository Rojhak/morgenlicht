export interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
}

export const VALID_PFLEGEGRADE = [
  'Kein Pflegegrad',
  '1',
  '2',
  '3',
  '4',
  '5',
  'Beantragt',
  'Unbekannt',
] as const

/**
 * Sanitizes input to prevent HTML injection/XSS.
 * Replaces <, >, &, ", and ' with HTML entities.
 */
export function sanitizeInput(input: string | undefined | null): string {
  if (!input) return ''
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Sanitizes input for use in email subjects to prevent header injection.
 * Replaces newlines and carriage returns with spaces.
 */
export function sanitizeForSubject(input: string | undefined | null): string {
  if (!input) return ''
  return String(input).replace(/[\r\n]+/g, ' ').trim()
}

/**
 * Validates inquiry data at runtime.
 * Returns null if valid, or an error message if invalid.
 */
export function validateInquiry(data: Partial<InquiryData>): string | null {
  if (!data || typeof data !== 'object') {
    return 'Ungültiges Datenformat'
  }

  // Validate Name (2-100 characters)
  const name = typeof data.name === 'string' ? data.name.trim() : ''
  if (!name) {
    return 'Name ist erforderlich'
  }
  if (name.length < 2 || name.length > 100) {
    return 'Name muss zwischen 2 und 100 Zeichen lang sein'
  }

  // Validate Phone (6-30 characters, allowing digits, spaces, +, -, (, ), /, .)
  const phone = typeof data.phone === 'string' ? data.phone.trim() : ''
  if (!phone) {
    return 'Telefonnummer ist erforderlich'
  }
  if (phone.length < 6 || phone.length > 30) {
    return 'Telefonnummer muss zwischen 6 und 30 Zeichen lang sein'
  }
  const phoneRegex = /^[\d\s+\-()/.]+$/
  if (!phoneRegex.test(phone)) {
    return 'Telefonnummer enthält ungültige Zeichen'
  }

  // Validate Pflegegrad (Optional, must be in allowlist)
  if (data.pflegegrad !== undefined && data.pflegegrad !== null && data.pflegegrad !== '') {
    const pflegegrad = String(data.pflegegrad).trim()
    if (!VALID_PFLEGEGRADE.includes(pflegegrad as any)) {
      return 'Ungültiger Pflegegrad'
    }
  }

  return null // Valid
}
