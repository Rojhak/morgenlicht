/**
 * Escapes HTML special characters to prevent HTML injection.
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Sanitizes input by trimming, escaping HTML, and truncating to a maximum length.
 * Handles non-string inputs by coercing them to string (except null/undefined).
 * @param input The input string (or unknown)
 * @param maxLength The maximum allowed length (default: 1000)
 */
export function sanitizeInput(
  input: unknown,
  maxLength: number = 1000
): string {
  if (input === null || input === undefined) {
    return ''
  }

  const stringInput = String(input)
  const trimmed = stringInput.trim()
  const escaped = escapeHtml(trimmed)
  return escaped.slice(0, maxLength)
}
