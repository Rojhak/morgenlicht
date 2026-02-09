export interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
}

export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

export function validateInquiry(data: unknown): {
  success: boolean
  error?: string
  data?: InquiryData
} {
  if (typeof data !== 'object' || data === null) {
    return { success: false, error: 'Invalid data format' }
  }

  const { name, phone, pflegegrad } = data as Record<string, unknown>

  if (!name || typeof name !== 'string') {
    return { success: false, error: 'Name is required and must be a string' }
  }

  if (!phone || typeof phone !== 'string') {
    return { success: false, error: 'Phone is required and must be a string' }
  }

  // Basic length checks to prevent DoS or buffer overflows
  if (name.length > 100) {
    return { success: false, error: 'Name is too long (max 100 chars)' }
  }

  if (phone.length > 50) {
    return { success: false, error: 'Phone is too long (max 50 chars)' }
  }

  if (pflegegrad !== undefined && pflegegrad !== null) {
    if (typeof pflegegrad !== 'string') {
      return { success: false, error: 'Pflegegrad must be a string' }
    }
    if (pflegegrad.length > 50) {
      return { success: false, error: 'Pflegegrad is too long (max 50 chars)' }
    }
  }

  return {
    success: true,
    data: {
      name,
      phone,
      pflegegrad: typeof pflegegrad === 'string' ? pflegegrad : undefined,
    },
  }
}
