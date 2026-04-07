export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export function sanitizeForSubject(input: string): string {
  if (!input || typeof input !== 'string') return ''
  // Remove newlines to prevent header injection
  return input.replace(/[\r\n]+/g, ' ').trim()
}

export function validateInquiry(data: { name?: string; phone?: string; pflegegrad?: string; message?: string }): string | null {
  if (!data || typeof data !== 'object') {
    return 'Ungültige Anfragedaten.'
  }

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.trim().length > 100) {
    return 'Name muss zwischen 2 und 100 Zeichen lang sein.'
  }

  if (!data.phone || typeof data.phone !== 'string') {
    return 'Telefonnummer ist erforderlich.'
  }

  const phoneRegex = /^[\d\s+\-()/.]{6,30}$/
  if (!phoneRegex.test(data.phone)) {
    return 'Ungültige Telefonnummer.'
  }

  if (data.pflegegrad) {
    const validPflegegrad = ['Keiner', '1', '2', '3', '4', '5', 'Unbekannt']
    if (!validPflegegrad.includes(data.pflegegrad)) {
      return 'Ungültiger Pflegegrad.'
    }
  }

  // Security: Enforce max length to prevent DoS via large payloads
  if (data.message && typeof data.message === 'string' && data.message.length > 2000) {
    return 'Nachricht darf maximal 2000 Zeichen lang sein.'
  }

  return null
}
