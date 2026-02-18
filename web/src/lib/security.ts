export interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
}

export function sanitizeInput(input: string): string {
  if (!input) return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function sanitizeForSubject(input: string): string {
  if (!input) return ''
  // Remove newlines and carriage returns to prevent header injection
  return input.replace(/[\r\n]+/g, ' ').trim()
}

export function validateInquiry(data: any): data is InquiryData {
  if (!data || typeof data !== 'object') {
    return false
  }

  // Check required fields
  if (typeof data.name !== 'string' || !data.name.trim()) {
    return false
  }

  if (typeof data.phone !== 'string' || !data.phone.trim()) {
    return false
  }

  // Validate phone format (digits, spaces, +, -, (, ), / and .)
  // Allowing / and . as well since they are common in DE
  // Minimum length 6
  const phoneRegex = /^[0-9\s\+\-\(\)\/\.]{6,}$/
  if (!phoneRegex.test(data.phone)) {
    return false
  }

  // Check optional field type
  if (data.pflegegrad !== undefined && typeof data.pflegegrad !== 'string') {
    return false
  }

  return true
}
