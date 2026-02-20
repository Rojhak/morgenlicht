
import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security';

test('sanitizeInput', async (t) => {
  await t.test('should escape HTML characters', () => {
    const input = '<script>alert("XSS")</script>';
    const expected = '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;';
    assert.strictEqual(sanitizeInput(input), expected);
  });

  await t.test('should handle empty input', () => {
    assert.strictEqual(sanitizeInput(''), '');
  });
});

test('sanitizeForSubject', async (t) => {
  await t.test('should remove newlines', () => {
    const input = 'Hello\nWorld';
    const expected = 'Hello World';
    assert.strictEqual(sanitizeForSubject(input), expected);
  });

  await t.test('should remove carriage returns', () => {
    const input = 'Hello\rWorld';
    const expected = 'Hello World';
    assert.strictEqual(sanitizeForSubject(input), expected);
  });
});

test('validateInquiry', async (t) => {
  await t.test('should validate valid data', () => {
    const data = { name: 'John Doe', phone: '1234567890' };
    assert.strictEqual(validateInquiry(data), true);
  });

  await t.test('should validate valid data with pflegegrad', () => {
    const data = { name: 'John Doe', phone: '1234567890', pflegegrad: '2' };
    assert.strictEqual(validateInquiry(data), true);
  });

  await t.test('should reject missing name', () => {
    const data = { phone: '1234567890' };
    assert.strictEqual(validateInquiry(data), false);
  });

  await t.test('should reject missing phone', () => {
    const data = { name: 'John Doe' };
    assert.strictEqual(validateInquiry(data), false);
  });

  await t.test('should reject invalid pflegegrad type', () => {
    const data = { name: 'John Doe', phone: '1234567890', pflegegrad: 123 };
    assert.strictEqual(validateInquiry(data), false);
  });
});
