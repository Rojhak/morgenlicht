
/**
 * Sanitizes input for HTML context to prevent XSS.
 * Encodes special characters into HTML entities.
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
 * Sanitizes input for email subject lines to prevent header injection.
 * Removes newlines and control characters.
 */
export function sanitizeForSubject(input: string): string {
  if (!input) return ''
  // Remove newlines and carriage returns, replace with space
  return input.replace(/[\r\n]+/g, ' ').trim()
}

/**
 * Validates inquiry data structure and content.
 */
export function validateInquiry(data: any): { valid: boolean; error?: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Ungültige Datenstruktur' }
  }

  // Validate Name
  if (!data.name || typeof data.name !== 'string') {
    return { valid: false, error: 'Name ist erforderlich' }
  }
  const name = data.name.trim()
  if (name.length < 2 || name.length > 100) {
    return { valid: false, error: 'Name muss zwischen 2 und 100 Zeichen lang sein' }
  }

  // Validate Phone
  if (!data.phone || typeof data.phone !== 'string') {
    return { valid: false, error: 'Telefonnummer ist erforderlich' }
  }
  const phone = data.phone.trim()
  // Allow digits, spaces, +, -, (, ), /, .
  const phoneRegex = /^[0-9\s\+\-\(\)\/\.]+$/
  if (!phoneRegex.test(phone)) {
    return { valid: false, error: 'Ungültiges Telefonnummerformat' }
  }
  if (phone.length < 6 || phone.length > 30) {
    return { valid: false, error: 'Telefonnummer muss zwischen 6 und 30 Zeichen lang sein' }
  }

  // Validate Pflegegrad (Optional)
  if (data.pflegegrad !== undefined && data.pflegegrad !== null && data.pflegegrad !== '') {
    if (typeof data.pflegegrad !== 'string') {
       return { valid: false, error: 'Ungültiger Pflegegrad' }
    }
    const pflegegrad = data.pflegegrad.trim()
    if (pflegegrad.length > 50) {
      return { valid: false, error: 'Pflegegrad zu lang' }
    }
  }

  return { valid: true }
}
