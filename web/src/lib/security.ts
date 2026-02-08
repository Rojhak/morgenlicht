
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  // Basic HTML escape to prevent injection
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function validateInquiry(data: any): { valid: boolean; errors?: string[] } {
  const errors: string[] = [];

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Ungültige Daten'] };
  }

  const { name, phone, pflegegrad } = data;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Name ist erforderlich');
  } else if (name.length > 100) {
    errors.push('Name ist zu lang');
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
    errors.push('Telefonnummer ist erforderlich');
  } else if (phone.length > 50) {
    errors.push('Telefonnummer ist zu lang');
  }

  if (pflegegrad && (typeof pflegegrad !== 'string' || pflegegrad.length > 50)) {
    errors.push('Pflegegrad ist ungültig');
  }

  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  };
}
