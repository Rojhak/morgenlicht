
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function validateInquiryInput(data: unknown): { isValid: boolean; error?: string; data?: { name: string; phone: string; pflegegrad?: string } } {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Ungültiges Datenformat' };
  }

  // Cast to any to access properties safely after type check
  const input = data as Record<string, unknown>;
  const name = input.name;
  const phone = input.phone;
  const pflegegrad = input.pflegegrad;

  if (typeof name !== 'string' || name.trim().length === 0) {
    return { isValid: false, error: 'Name ist erforderlich' };
  }
  if (name.length > 100) {
     return { isValid: false, error: 'Name ist zu lang (max. 100 Zeichen)' };
  }

  if (typeof phone !== 'string' || phone.trim().length === 0) {
    return { isValid: false, error: 'Telefonnummer ist erforderlich' };
  }

  // Basic phone validation: allow digits, spaces, +, -, (, ), /, .
  // German formats often use /, -, or . as separators.
  // e.g. 030/123456, 0170-1234567, +49 123 456
  if (!/^[\d\s+\-()\/.]+$/.test(phone)) {
     return { isValid: false, error: 'Ungültiges Telefonformat' };
  }

  if (phone.length > 50) {
     return { isValid: false, error: 'Telefonnummer ist zu lang (max. 50 Zeichen)' };
  }

  if (pflegegrad !== undefined && pflegegrad !== null) {
      if (typeof pflegegrad !== 'string') {
          return { isValid: false, error: 'Ungültiges Pflegegrad-Format' };
      }
      if (pflegegrad.length > 50) {
           return { isValid: false, error: 'Pflegegrad ist zu lang (max. 50 Zeichen)' };
      }
  }

  return {
    isValid: true,
    data: {
      name: name.trim(),
      phone: phone.trim(),
      pflegegrad: typeof pflegegrad === 'string' ? pflegegrad.trim() : undefined
    }
  };
}
