
/**
 * Security utility functions for input validation and sanitization.
 */

/**
 * Escapes HTML characters to prevent HTML injection/XSS.
 * Useful when embedding user input into email bodies or HTML templates.
 * Returns empty string if input is not a string.
 */
export function escapeHtml(str: unknown): string {
  if (typeof str !== 'string' || !str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Validates a phone number, supporting common German formats.
 * Allowed characters: digits, spaces, +, -, /, ., (, )
 * Must contain between 6 and 20 digits.
 * Returns false if input is not a string.
 */
export function validatePhoneNumber(phone: unknown): boolean {
  if (typeof phone !== 'string' || !phone) return false;

  // Allow only valid characters
  const validCharsRegex = /^[\d\+\-\/\.\(\)\s]+$/;
  if (!validCharsRegex.test(phone)) return false;

  // Must contain at least 6 digits and reasonable max length
  const digitCount = (phone.match(/\d/g) || []).length;
  return digitCount >= 6 && digitCount <= 20;
}
