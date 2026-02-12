/**
 * Security utilities for input sanitization and validation.
 */

// Basic HTML entity map for escaping
const ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;',
};

/**
 * Escapes HTML special characters to prevent XSS.
 * @param input The input string to sanitize.
 * @returns The sanitized string with HTML entities escaped.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input.replace(/[&<>"']/g, (char) => ESCAPE_MAP[char]);
}

export interface InquiryData {
  name: string;
  phone: string;
  pflegegrad?: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitizedData?: InquiryData;
}

/**
 * Validates and sanitizes inquiry data from the contact form.
 * @param data The raw data from the request body.
 * @returns A ValidationResult object.
 */
export function validateInquiry(data: any): ValidationResult {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Ungültige Daten' };
  }

  const name = sanitizeInput(String(data.name || '').trim());
  const phone = sanitizeInput(String(data.phone || '').trim());
  const pflegegrad = data.pflegegrad ? sanitizeInput(String(data.pflegegrad).trim()) : undefined;

  // Validate required fields
  if (!name) {
    return { isValid: false, error: 'Name ist erforderlich' };
  }

  if (!phone) {
    return { isValid: false, error: 'Telefonnummer ist erforderlich' };
  }

  // Validate phone format (digits, spaces, +, -, (, ), min 6 chars)
  // Note: We validate the sanitized phone number. Since legitimate phone numbers
  // should not contain HTML special characters like <, >, &, ", ', the regex
  // will correctly reject them if they were present in the original input.
  const phoneRegex = /^[0-9\s\-\+\(\)]{6,}$/;
  if (!phoneRegex.test(phone)) {
    return { isValid: false, error: 'Bitte geben Sie eine gültige Telefonnummer ein' };
  }

  return {
    isValid: true,
    sanitizedData: {
      name,
      phone,
      pflegegrad,
    },
  };
}
