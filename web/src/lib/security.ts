/**
 * Sanitizes input to prevent HTML Injection in email bodies.
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
 * Sanitizes input for use in email subjects to prevent header injection.
 * Replaces newlines with spaces.
 */
export function sanitizeForSubject(input: string): string {
  if (!input) return ''
  // Replace newlines with spaces to prevent header injection
  return input.replace(/[\r\n]+/g, ' ').trim()
}

/**
 * Validates inquiry data.
 */
export function validateInquiry(data: any): { isValid: boolean; error?: string } {
  // Validate Name
  if (!data.name || typeof data.name !== 'string') {
    return { isValid: false, error: 'Name ist erforderlich.' }
  }

  if (data.name.length < 2 || data.name.length > 100) {
    return { isValid: false, error: 'Name muss zwischen 2 und 100 Zeichen lang sein.' }
  }

  // Validate Phone
  if (!data.phone || typeof data.phone !== 'string') {
    return { isValid: false, error: 'Telefonnummer ist erforderlich.' }
  }

  // Basic phone validation: allows digits, spaces, +, -, (, ), /, .
  // Length 6-30
  const phoneRegex = /^[0-9\s\+\-\(\)\/\.]{6,30}$/
  if (!phoneRegex.test(data.phone)) {
    return { isValid: false, error: 'Ungültiges Telefonnummernformat.' }
  }

  // Validate Pflegegrad (optional)
  if (data.pflegegrad) {
    // Assuming pflegegrad is a string like "1", "2", etc. or "keiner"
    // Adjust based on actual usage if needed. Looking at route.ts, it just passes it through.
    // Let's allow 1-5 and some common strings.
    const allowedPflegegrade = ['1', '2', '3', '4', '5', 'keiner', 'unbekannt', 'beantragt']
    if (!allowedPflegegrade.includes(data.pflegegrad) && !/^Pflegegrad [1-5]$/.test(data.pflegegrad)) {
       // If it doesn't match strict list, maybe it's free text?
       // For security, let's limit length at least.
       if (data.pflegegrad.length > 50) {
         return { isValid: false, error: 'Pflegegrad Angabe zu lang.' }
       }
       // And sanitize strictly? Let's just rely on sanitizeInput later for display.
       // But for validation, let's stick to length check if not in allowlist.
    }
  }

  return { isValid: true }
}
