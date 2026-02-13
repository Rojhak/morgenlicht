/**
 * Sanitizes user input to prevent XSS attacks by escaping HTML characters.
 * Also handles non-string inputs gracefully.
 */
export function sanitizeInput(input: unknown): string {
  if (input === null || input === undefined) return ''
  if (typeof input !== 'string') {
    // If input is not a string, coerce it to string but be careful not to expose objects
    return typeof input === 'object' ? '' : String(input)
  }
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
  isValid: boolean
  errors: string[]
}

/**
 * Validates inquiry data.
 */
export function validateInquiry(data: Partial<InquiryData>): ValidationResult {
  const errors: string[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name ist erforderlich')
  } else if (data.name.length > 100) {
    errors.push('Name ist zu lang (max. 100 Zeichen)')
  }

  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length === 0) {
    errors.push('Telefonnummer ist erforderlich')
  } else {
    // Allow digits, spaces, +, -, (, ), /, .
    const phoneRegex = /^[\d\s\+\-\(\)\/\.]+$/
    if (!phoneRegex.test(data.phone)) {
      errors.push('Telefonnummer enthält ungültige Zeichen')
    } else if (data.phone.length > 50) {
      errors.push('Telefonnummer ist zu lang (max. 50 Zeichen)')
    }
  }

  if (data.pflegegrad) {
    if (typeof data.pflegegrad !== 'string') {
         errors.push('Pflegegrad muss ein Text sein')
    } else if (data.pflegegrad.length > 50) {
      errors.push('Pflegegrad ist zu lang')
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
