
/**
 * Security utility functions for input sanitization and validation.
 */

/**
 * Escapes HTML special characters to prevent XSS.
 * @param input The input string to sanitize.
 * @returns The sanitized string.
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

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validates the inquiry data.
 * @param data The input data to validate.
 * @returns A ValidationResult object.
 */
export function validateInquiry(data: any): ValidationResult {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Ungültige Daten' };
  }

  const { name, phone } = data;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return { valid: false, error: 'Name ist erforderlich' };
  }

  if (name.length > 100) {
     return { valid: false, error: 'Name ist zu lang' };
  }

  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return { valid: false, error: 'Telefonnummer ist erforderlich' };
  }

  // Regex from client-side validation
  const phoneRegex = /^[0-9\s\-\+\(\)]{6,}$/;
  if (!phoneRegex.test(phone)) {
    return { valid: false, error: 'Ungültige Telefonnummer' };
  }

  if (phone.length > 50) {
      return { valid: false, error: 'Telefonnummer ist zu lang' };
  }

  return { valid: true };
}
