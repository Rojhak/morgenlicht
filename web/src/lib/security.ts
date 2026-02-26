/**
 * Sanitizes input to prevent HTML injection/XSS.
 * Replaces <, >, &, ", and ' with their HTML entity equivalents.
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Sanitizes input for use in email subject lines.
 * Replaces newlines and carriage returns with spaces to prevent header injection.
 */
export function sanitizeForSubject(input: string): string {
  if (typeof input !== 'string') return ''
  return input.replace(/[\r\n]+/g, ' ').trim()
}

/**
 * Validates inquiry data.
 * Checks types and basic constraints.
 */
export function validateInquiry(data: any): boolean {
  if (!data || typeof data !== 'object') return false

  // Validate name (required, string, 2-100 chars)
  if (typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.length > 100) {
    return false
  }

  // Validate phone (required, string, 6-30 chars, basic chars allowed)
  // Allows digits, spaces, +, -, (, ), /, .
  if (typeof data.phone !== 'string' || !/^[\d\s+\-()\/.]+$/.test(data.phone) || data.phone.length < 6 || data.phone.length > 30) {
    return false
  }

  // Validate pflegegrad (optional, string, specific values)
  if (data.pflegegrad !== undefined && data.pflegegrad !== null) {
    const validGrades = ['1', '2', '3', '4', '5', 'keinen', 'beantragt']
    if (typeof data.pflegegrad !== 'string' || !validGrades.includes(data.pflegegrad)) {
      return false
    }
  }

  return true
}
