/**
 * Escapes HTML characters to prevent injection attacks.
 */
export function sanitizeInput(input: string): string {
  return input.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case "'":
        return '&#39;'
      default:
        return char
    }
  })
}

/**
 * Strips newlines from headers to prevent header injection.
 */
export function sanitizeHeader(input: string): string {
  return input.replace(/[\r\n]/g, '')
}

/**
 * Validates inquiry data structure and types.
 */
export function validateInquiry(data: unknown): {
  isValid: boolean
  error?: string
} {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Ungültiges Datenformat' }
  }

  const record = data as Record<string, unknown>

  if (typeof record.name !== 'string' || !record.name.trim()) {
    return { isValid: false, error: 'Name ist erforderlich' }
  }

  if (record.name.length > 100) {
    return { isValid: false, error: 'Name ist zu lang (max. 100 Zeichen)' }
  }

  if (typeof record.phone !== 'string' || !record.phone.trim()) {
    return { isValid: false, error: 'Telefonnummer ist erforderlich' }
  }

  if (record.phone.length > 50) {
    return {
      isValid: false,
      error: 'Telefonnummer ist zu lang (max. 50 Zeichen)',
    }
  }

  if (record.pflegegrad !== undefined && record.pflegegrad !== null) {
    if (typeof record.pflegegrad !== 'string') {
      return { isValid: false, error: 'Ungültiger Pflegegrad' }
    }
    if (record.pflegegrad.length > 50) {
      return { isValid: false, error: 'Pflegegrad ist zu lang' }
    }
  }

  return { isValid: true }
}
