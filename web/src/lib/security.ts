
/**
 * Basic HTML escaping to prevent XSS in email templates
 * @param unsafe - The unsafe string to escape
 * @returns The escaped string
 */
export function escapeHtml(unsafe: string): string {
  if (typeof unsafe !== 'string') return ''
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Validates input length to prevent DoS
 * @param input - The input string to check
 * @param maxLength - The maximum allowed length
 * @returns True if valid, false otherwise
 */
export function isValidLength(input: any, maxLength: number): boolean {
  if (typeof input !== 'string') return false;
  return input.length <= maxLength;
}
