import { validateInquiry } from '../../src/lib/security';
import test from 'node:test';
import assert from 'node:assert';

test('validateInquiry - input validation', () => {
  const result1 = validateInquiry(null as any);
  assert.equal(result1, 'Ungültige Anfragedaten.');

  const result2 = validateInquiry(undefined as any);
  assert.equal(result2, 'Ungültige Anfragedaten.');

  const result3 = validateInquiry("string" as any);
  assert.equal(result3, 'Ungültige Anfragedaten.');

  const result4 = validateInquiry(123 as any);
  assert.equal(result4, 'Ungültige Anfragedaten.');
});
