
import assert from 'node:assert';
import { escapeHtml, validateInquiryInput } from './security';

console.log('Running security tests...');

// Test escapeHtml
try {
  assert.strictEqual(escapeHtml('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;/script&gt;');
  assert.strictEqual(escapeHtml('"quote"'), '&quot;quote&quot;');
  assert.strictEqual(escapeHtml("'single'"), '&#039;single&#039;');
  assert.strictEqual(escapeHtml('Normal text'), 'Normal text');
  console.log('✅ escapeHtml tests passed');
} catch (e) {
  console.error('❌ escapeHtml tests failed:', e);
  process.exit(1);
}

// Test validateInquiryInput
try {
  // Valid input
  const valid = validateInquiryInput({
    name: 'John Doe',
    phone: '0123456789'
  });
  assert.strictEqual(valid.isValid, true);
  assert.deepStrictEqual(valid.data, { name: 'John Doe', phone: '0123456789', pflegegrad: undefined });

  // Valid input with pflegegrad
  const validWithPflegegrad = validateInquiryInput({
    name: 'Jane Doe',
    phone: '+49 123 45678',
    pflegegrad: 'Grad 2'
  });
  assert.strictEqual(validWithPflegegrad.isValid, true);
  assert.strictEqual(validWithPflegegrad.data?.pflegegrad, 'Grad 2');

  // German phone format
  const validGerman = validateInquiryInput({
    name: 'Hans',
    phone: '030/123456'
  });
  assert.strictEqual(validGerman.isValid, true);

  const validGerman2 = validateInquiryInput({
    name: 'Hans',
    phone: '0170.1234567'
  });
  assert.strictEqual(validGerman2.isValid, true);

  // Invalid: missing name
  const missingName = validateInquiryInput({
    phone: '123'
  });
  assert.strictEqual(missingName.isValid, false);
  assert.strictEqual(missingName.error, 'Name ist erforderlich');

  // Invalid: empty name
  const emptyName = validateInquiryInput({
    name: '   ',
    phone: '123'
  });
  assert.strictEqual(emptyName.isValid, false);

  // Invalid: name too long
  const longName = validateInquiryInput({
    name: 'a'.repeat(101),
    phone: '123'
  });
  assert.strictEqual(longName.isValid, false);
  assert.strictEqual(longName.error?.includes('Name ist zu lang'), true);

  // Invalid: bad phone characters
  const badPhone = validateInquiryInput({
    name: 'John',
    phone: '123abc456'
  });
  assert.strictEqual(badPhone.isValid, false);
  assert.strictEqual(badPhone.error, 'Ungültiges Telefonformat');

  // Invalid: non-object input
  assert.strictEqual(validateInquiryInput(null).isValid, false);
  assert.strictEqual(validateInquiryInput('string').isValid, false);

  console.log('✅ validateInquiryInput tests passed');
} catch (e) {
  console.error('❌ validateInquiryInput tests failed:', e);
  process.exit(1);
}

console.log('🎉 All security tests passed!');
