const PHONE_REGEX = /^[\d\s+\-()/.]{6,30}$/
const VALID_PFLEGEGRADE = new Set(['Keiner', '1', '2', '3', '4', '5', 'Unbekannt'])

export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  if (!input) return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export function sanitizeForSubject(input: string): string {
  if (typeof input !== 'string') return ''
  if (!input) return ''
  // Remove newlines to prevent header injection
  return input.replace(/[\r\n]+/g, ' ').trim()
}

export function validateInquiry(data: { name?: string; phone?: string; pflegegrad?: string; message?: string }): string | null {
  if (!data || typeof data !== 'object') {
    return 'Ungültige Anfragedaten.'
  }

  if (data.name !== undefined && typeof data.name !== 'string') {
    return 'Name muss zwischen 2 und 100 Zeichen lang sein.'
  }
  if (!data.name || data.name.trim().length < 2 || data.name.trim().length > 100) {
    return 'Name muss zwischen 2 und 100 Zeichen lang sein.'
  }

  if (data.phone !== undefined && typeof data.phone !== 'string') {
    return 'Telefonnummer ist erforderlich.'
  }
  if (!data.phone || data.phone.length > 50) {
    return 'Telefonnummer ist erforderlich.'
  }

  if (!PHONE_REGEX.test(data.phone)) {
    return 'Ungültige Telefonnummer.'
  }

  if (data.pflegegrad !== undefined) {
    if (typeof data.pflegegrad !== 'string' || !VALID_PFLEGEGRADE.has(data.pflegegrad)) {
      return 'Ungültiger Pflegegrad.'
    }
  }

  // Security: Enforce strict type checking and max length to prevent payload manipulation and DoS
  if (data.message !== undefined) {
    if (typeof data.message !== 'string') {
      return 'Ungültiges Nachrichtenformat.'
    }
    if (data.message.length > 2000) {
      return 'Nachricht darf maximal 2000 Zeichen lang sein.'
    }
  }

  return null
}
