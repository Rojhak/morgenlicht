export function sanitizeInput(text: string): string {
  if (typeof text !== 'string') return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function sanitizeForSubject(text: string): string {
  if (typeof text !== 'string') return ''
  // Remove newlines and other control characters that could be used for header injection
  return text.replace(/[\r\n\t]/g, ' ').trim()
}

export function validateInquiry(data: any): string | null {
  if (!data || typeof data !== 'object') {
    return 'Ungültige Daten'
  }

  // Name validation
  if (!data.name || typeof data.name !== 'string') {
    return 'Name ist erforderlich'
  }
  const name = data.name.trim()
  if (name.length < 2 || name.length > 100) {
    return 'Name muss zwischen 2 und 100 Zeichen lang sein'
  }

  // Phone validation
  if (!data.phone || typeof data.phone !== 'string') {
    return 'Telefonnummer ist erforderlich'
  }
  const phone = data.phone.trim()

  // Allow digits, spaces, +, -, (, ), /, .
  if (phone.length < 6 || phone.length > 30) {
    return 'Telefonnummer muss zwischen 6 und 30 Zeichen lang sein'
  }

  // The regex allows digits, spaces, +, -, (, ), /, .
  const phoneRegex = /^[0-9\s\-\+\(\)\/\.]+$/
  if (!phoneRegex.test(phone)) {
    return 'Ungültige Zeichen in der Telefonnummer'
  }

  // Pflegegrad validation (optional)
  if (data.pflegegrad !== undefined && data.pflegegrad !== null && data.pflegegrad !== '') {
    if (typeof data.pflegegrad !== 'string') {
      return 'Ungültiger Pflegegrad'
    }
    const pflegegrad = data.pflegegrad.trim()

    // Just length check as explained
    if (pflegegrad.length > 50) {
      return 'Pflegegrad Angabe ist zu lang'
    }
  }

  return null
}
