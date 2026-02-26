
/**
 * Sanitizes input to prevent HTML injection/XSS.
 * Encodes special characters: <, >, &, ", '
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitizes input for use in email subjects to prevent header injection.
 * Removes newlines and limits length.
 */
export function sanitizeForSubject(input: string): string {
  if (!input) return '';
  // Remove newlines and carriage returns to prevent header injection
  return input.replace(/[\r\n]+/g, ' ').trim();
}

/**
 * Validates the inquiry data structure.
 */
export interface InquiryData {
  name: string;
  phone: string;
  pflegegrad?: string;
}

export function validateInquiry(data: any): data is InquiryData {
  if (!data || typeof data !== 'object') {
    return false;
  }

  if (typeof data.name !== 'string' || !data.name.trim()) {
    return false;
  }

  if (typeof data.phone !== 'string' || !data.phone.trim()) {
    return false;
  }

  if (data.pflegegrad !== undefined && typeof data.pflegegrad !== 'string') {
    return false;
  }

  return true;
}
