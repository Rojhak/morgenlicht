
import assert from 'node:assert';
import { sanitizeInput, validateInquiry } from '../src/lib/security';

console.log('Running security tests...');

// Test sanitizeInput
try {
  console.log('Testing sanitizeInput...');
  assert.strictEqual(sanitizeInput('Hello'), 'Hello', 'Normal string should pass through');
  assert.strictEqual(sanitizeInput('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;/script&gt;', 'Should escape script tags');
  assert.strictEqual(sanitizeInput('"quote"'), '&quot;quote&quot;', 'Should escape double quotes');
  assert.strictEqual(sanitizeInput("'single'"), '&#039;single&#039;', 'Should escape single quotes');
  assert.strictEqual(sanitizeInput('Rock & Roll'), 'Rock &amp; Roll', 'Should escape ampersand');
  console.log('✅ sanitizeInput tests passed');
} catch (error) {
  console.error('❌ sanitizeInput tests failed:', error);
  process.exit(1);
}

// Test validateInquiry
try {
  console.log('Testing validateInquiry...');

  // Valid case
  assert.deepStrictEqual(validateInquiry({ name: 'John Doe', phone: '0123456789' }), { valid: true }, 'Valid data should pass');
  assert.deepStrictEqual(validateInquiry({ name: 'John Doe', phone: '+49 123 456' }), { valid: true }, 'Valid phone with + and spaces should pass');

  // Invalid cases
  assert.strictEqual(validateInquiry(null).valid, false, 'Null data should fail');
  assert.strictEqual(validateInquiry({}).valid, false, 'Empty object should fail');

  // Name validation
  assert.strictEqual(validateInquiry({ phone: '123456' }).valid, false, 'Missing name should fail');
  assert.strictEqual(validateInquiry({ name: '', phone: '123456' }).valid, false, 'Empty name should fail');
  assert.strictEqual(validateInquiry({ name: 'a'.repeat(101), phone: '123456' }).valid, false, 'Too long name should fail');

  // Phone validation
  assert.strictEqual(validateInquiry({ name: 'John' }).valid, false, 'Missing phone should fail');
  assert.strictEqual(validateInquiry({ name: 'John', phone: '' }).valid, false, 'Empty phone should fail');
  assert.strictEqual(validateInquiry({ name: 'John', phone: 'abc' }).valid, false, 'Invalid phone characters should fail');
  assert.strictEqual(validateInquiry({ name: 'John', phone: '123' }).valid, false, 'Too short phone should fail');
  assert.strictEqual(validateInquiry({ name: 'John', phone: '1'.repeat(51) }).valid, false, 'Too long phone should fail');

  console.log('✅ validateInquiry tests passed');
} catch (error) {
  console.error('❌ validateInquiry tests failed:', error);
  process.exit(1);
}

console.log('🎉 All security tests passed!');
