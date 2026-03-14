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

  const resultMaxLen = validateInquiry({ name: 'Test', phone: '030 12345678', message: 'a'.repeat(2001) });
  assert.equal(resultMaxLen, 'Nachricht darf maximal 2000 Zeichen lang sein.');

  const resultValidMsg = validateInquiry({ name: 'Test', phone: '030 12345678', message: 'a'.repeat(2000) });
  assert.equal(resultValidMsg, null);

  const resultInvalidMsgTypeArray = validateInquiry({ name: 'Test', phone: '030 12345678', message: ['a', 'b', 'c'] as any });
  assert.equal(resultInvalidMsgTypeArray, 'Ungültiges Format für die Nachricht.');

  const resultInvalidMsgTypeObject = validateInquiry({ name: 'Test', phone: '030 12345678', message: { key: 'value' } as any });
  assert.equal(resultInvalidMsgTypeObject, 'Ungültiges Format für die Nachricht.');

  const resultInvalidPflegegradTypeArray = validateInquiry({ name: 'Test', phone: '030 12345678', pflegegrad: ['1'] as any });
  assert.equal(resultInvalidPflegegradTypeArray, 'Ungültiges Format für den Pflegegrad.');
});
