export function sanitizeInput(input: unknown): string {
  if (typeof input !== 'string') {
    return '';
  }
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function sanitizeForSubject(input: unknown): string {
  if (typeof input !== 'string') {
    return '';
  }
  // Remove newlines to prevent header injection
  return input.replace(/[\r\n]+/g, ' ').trim();
}

export function validateInquiry(data: any): { isValid: boolean; error?: string } {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Ungültige Daten' };
  }

  const { name, phone, pflegegrad } = data;

  if (!name || typeof name !== 'string' || name.length < 2 || name.length > 100) {
    return { isValid: false, error: 'Name muss zwischen 2 und 100 Zeichen lang sein' };
  }

  // Allow digits, spaces, +, -, (, ), /, .
  const phoneRegex = /^[0-9\s\+\-\(\)\/\.]{6,30}$/;
  if (!phone || typeof phone !== 'string' || !phoneRegex.test(phone)) {
    return { isValid: false, error: 'Ungültiges Telefonnummer-Format' };
  }

  if (pflegegrad !== undefined && pflegegrad !== null) {
     const pgStr = String(pflegegrad);
     if (pgStr.length > 20) {
        return { isValid: false, error: 'Ungültiger Pflegegrad' };
     }
  }

  return { isValid: true };
}
