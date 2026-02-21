/**
 * Security utilities for input sanitization and validation.
 */

/**
 * Sanitizes input string by escaping HTML characters to prevent XSS.
 * @param input The raw input string.
 * @returns The sanitized string safe for HTML insertion.
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitizes input string for use in email subjects by removing newlines.
 * Prevents header injection attacks.
 * @param input The raw input string.
 * @returns The sanitized string.
 */
export function sanitizeForSubject(input: string): string {
  if (typeof input !== 'string') return '';
  // Remove newlines and carriage returns to prevent header injection
  return input.replace(/[\r\n]+/g, ' ').trim();
}

/**
 * Validates the inquiry data structure and content.
 * @param data The raw request body.
 * @returns An object containing validity status and optional error message.
 */
export function validateInquiry(data: any): { valid: boolean; error?: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Ungültiges Anfrageformat' };
  }

  const { name, phone, pflegegrad } = data;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return { valid: false, error: 'Name ist erforderlich' };
  }

  if (name.length > 100) {
    return { valid: false, error: 'Name ist zu lang (max 100 Zeichen)' };
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
    return { valid: false, error: 'Telefonnummer ist erforderlich' };
  }

  // Basic phone validation: allow digits, spaces, +, -, (, ), / and .
  const phoneRegex = /^[\d\s\+\-\(\)\/\.]+$/;
  if (!phoneRegex.test(phone)) {
    return { valid: false, error: 'Ungültiges Telefonformat' };
  }

  if (phone.length > 50) {
    return { valid: false, error: 'Telefonnummer ist zu lang (max 50 Zeichen)' };
  }

  if (pflegegrad !== undefined && pflegegrad !== null && typeof pflegegrad !== 'string') {
    return { valid: false, error: 'Ungültiger Pflegegrad' };
  }

  if (pflegegrad && pflegegrad.length > 50) {
    return { valid: false, error: 'Pflegegrad ist zu lang (max 50 Zeichen)' };
  }

  return { valid: true };
}
