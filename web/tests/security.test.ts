import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security';

describe('Security Utilities', () => {
  describe('sanitizeInput', () => {
    it('should return empty string for non-string input', () => {
      assert.strictEqual(sanitizeInput(null), '');
      assert.strictEqual(sanitizeInput(undefined), '');
      assert.strictEqual(sanitizeInput(123), '');
    });

    it('should sanitize HTML characters', () => {
      const input = '<script>alert("xss")</script>';
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
      assert.strictEqual(sanitizeInput(input), expected);
    });

    it('should sanitize ampersands', () => {
      const input = 'Tom & Jerry';
      const expected = 'Tom &amp; Jerry';
      assert.strictEqual(sanitizeInput(input), expected);
    });

    it('should sanitize quotes', () => {
      const input = `O'Connor "The Best"`;
      const expected = `O&#039;Connor &quot;The Best&quot;`;
      assert.strictEqual(sanitizeInput(input), expected);
    });
  });

  describe('sanitizeForSubject', () => {
    it('should return empty string for non-string input', () => {
      assert.strictEqual(sanitizeForSubject(null), '');
      assert.strictEqual(sanitizeForSubject(undefined), '');
    });

    it('should strip newlines', () => {
      const input = 'Hello\nWorld\r\n!';
      const expected = 'Hello World !';
      assert.strictEqual(sanitizeForSubject(input), expected);
    });

    it('should keep other characters intact', () => {
      const input = 'Hello <World>';
      const expected = 'Hello <World>';
      assert.strictEqual(sanitizeForSubject(input), expected);
    });
  });

  describe('validateInquiry', () => {
    it('should validate valid data', () => {
      const validData = {
        name: 'Max Mustermann',
        phone: '0123456789',
        pflegegrad: '2'
      };
      const result = validateInquiry(validData);
      assert.strictEqual(result.isValid, true);
    });

    it('should validate valid data without optional fields', () => {
      const validData = {
        name: 'Max Mustermann',
        phone: '0123456789'
      };
      const result = validateInquiry(validData);
      assert.strictEqual(result.isValid, true);
    });

    it('should validate phone numbers with separators', () => {
      const validData = {
        name: 'Max Mustermann',
        phone: '0123.456/789',
      };
      const result = validateInquiry(validData);
      assert.strictEqual(result.isValid, true);
    });

    it('should validate numeric pflegegrad', () => {
      const validData = {
        name: 'Max Mustermann',
        phone: '0123456789',
        pflegegrad: 2
      };
      const result = validateInquiry(validData);
      assert.strictEqual(result.isValid, true);
    });

    it('should fail if name is missing', () => {
      const invalidData = {
        phone: '0123456789'
      };
      const result = validateInquiry(invalidData);
      assert.strictEqual(result.isValid, false);
      assert.match(result.error || '', /Name/);
    });

    it('should fail if name is too short', () => {
      const invalidData = {
        name: 'A',
        phone: '0123456789'
      };
      const result = validateInquiry(invalidData);
      assert.strictEqual(result.isValid, false);
      assert.match(result.error || '', /Name/);
    });

    it('should fail if phone is invalid', () => {
      const invalidData = {
        name: 'Max Mustermann',
        phone: 'abc'
      };
      const result = validateInquiry(invalidData);
      assert.strictEqual(result.isValid, false);
      assert.match(result.error || '', /Telefon/);
    });

    it('should fail if phone is too short', () => {
      const invalidData = {
        name: 'Max Mustermann',
        phone: '123'
      };
      const result = validateInquiry(invalidData);
      assert.strictEqual(result.isValid, false);
      assert.match(result.error || '', /Telefon/);
    });

    it('should fail if pflegegrad is too long', () => {
      const invalidData = {
        name: 'Max Mustermann',
        phone: '0123456789',
        pflegegrad: 'very long string that is definitely not a valid pflegegrad'
      };
      const result = validateInquiry(invalidData);
      assert.strictEqual(result.isValid, false);
      assert.match(result.error || '', /Pflegegrad/);
    });
  });
});
