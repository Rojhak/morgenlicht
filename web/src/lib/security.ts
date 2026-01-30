export const MAX_NAME_LENGTH = 100
export const MAX_PHONE_LENGTH = 50
export const MAX_PFLEGEGRAD_LENGTH = 50

export function escapeHtml(unsafe: string): string {
  if (!unsafe) return ''
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false
  const trimmed = name.trim()
  return trimmed.length > 0 && trimmed.length <= MAX_NAME_LENGTH
}

export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false
  const trimmed = phone.trim()
  if (trimmed.length === 0 || trimmed.length > MAX_PHONE_LENGTH) return false
  // Allow digits, spaces, plus, minus, parens, forward slash
  const validPhoneRegex = /^[0-9+\-\s()/]+$/
  return validPhoneRegex.test(trimmed)
}

export function isValidPflegegrad(pflegegrad: string | undefined): boolean {
  if (!pflegegrad) return true // Optional field
  if (typeof pflegegrad !== 'string') return false
  return pflegegrad.length <= MAX_PFLEGEGRAD_LENGTH
}
