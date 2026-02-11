export interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
}

/**
 * Escapes HTML special characters to prevent HTML injection and XSS.
 * @param input The raw input string
 * @returns The sanitized string
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export interface ValidationResult {
  isValid: boolean
  error?: string
  sanitizedData?: InquiryData
}

/**
 * Validates and sanitizes inquiry data.
 * @param data The raw data from the request body
 * @returns ValidationResult with sanitized data if valid
 */
export function validateInquiry(data: any): ValidationResult {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Ungültige Daten' }
  }

  const { name, phone, pflegegrad } = data

  // Validate Name
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return { isValid: false, error: 'Name ist erforderlich' }
  }

  if (name.length > 100) {
    return { isValid: false, error: 'Name ist zu lang (max. 100 Zeichen)' }
  }

  // Validate Phone
  if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
    return { isValid: false, error: 'Telefonnummer ist erforderlich' }
  }

  const phoneRegex = /^[0-9\s\-\+\(\)]{6,}$/
  if (!phoneRegex.test(phone)) {
    return { isValid: false, error: 'Bitte geben Sie eine gültige Telefonnummer ein' }
  }

  // Validate Pflegegrad (Optional)
  if (pflegegrad !== undefined && pflegegrad !== null) {
    if (typeof pflegegrad !== 'string') {
      return { isValid: false, error: 'Ungültiger Pflegegrad' }
    }
  }

  return {
    isValid: true,
    sanitizedData: {
      name: sanitizeInput(name),
      phone: sanitizeInput(phone),
      pflegegrad: pflegegrad ? sanitizeInput(pflegegrad) : undefined
    }
  }
}
