/**
 * Escapes HTML special characters to prevent HTML injection/XSS.
 * Handles non-string inputs by converting them to string.
 * @param unsafe The value to escape.
 * @returns The escaped string.
 */
export function escapeHtml(unsafe: unknown): string {
  if (unsafe === null || unsafe === undefined) return '';
  const str = String(unsafe);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
