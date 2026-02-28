export function sanitizeInput(input: string): string {
  if (!input) return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function sanitizeForSubject(input: string): string {
  if (!input) return ''
  // Replace newlines and carriage returns with spaces to prevent header injection
  // Limit length just in case
  return input.replace(/[\r\n]+/g, ' ').substring(0, 150).trim()
}

export function validateInquiry(name: string, phone: string, pflegegrad?: string): string | null {
  if (!name || name.length < 2 || name.length > 100) {
    return 'Name muss zwischen 2 und 100 Zeichen lang sein'
  }

  // Basic phone validation (digits, spaces, +, -, (, ), /, .)
  const phoneRegex = /^[\d\s\+\-\(\)\/\.]{6,30}$/
  if (!phone || !phoneRegex.test(phone)) {
    return 'Ungültige Telefonnummer'
  }

  if (pflegegrad) {
    const validPflegegrade = ['1', '2', '3', '4', '5']
    if (!validPflegegrade.includes(pflegegrad)) {
      return 'Ungültiger Pflegegrad'
    }
  }

  return null
}
