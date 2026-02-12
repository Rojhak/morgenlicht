import { sanitizeInput, validateInquiry } from '../src/lib/security';
import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('Security Utilities', () => {
  describe('sanitizeInput', () => {
    it('should escape HTML special characters', () => {
      const input = '<script>alert("xss")</script>';
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
      assert.strictEqual(sanitizeInput(input), expected);
    });

    it('should handle ampersands correctly', () => {
      const input = 'Tom & Jerry';
      const expected = 'Tom &amp; Jerry';
      assert.strictEqual(sanitizeInput(input), expected);
    });

    it('should return empty string for null/undefined input', () => {
      assert.strictEqual(sanitizeInput(null as any), '');
      assert.strictEqual(sanitizeInput(undefined as any), '');
    });
  });

  describe('validateInquiry', () => {
    it('should accept valid inquiry data', () => {
      const data = {
        name: 'Max Mustermann',
        phone: '0123 456789',
        pflegegrad: 'Pflegegrad 2',
      };
      const result = validateInquiry(data);
      assert.strictEqual(result.isValid, true);
      assert.strictEqual(result.sanitizedData?.name, 'Max Mustermann');
      assert.strictEqual(result.sanitizedData?.phone, '0123 456789');
    });

    it('should reject missing name', () => {
      const data = {
        name: '',
        phone: '0123 456789',
      };
      const result = validateInquiry(data);
      assert.strictEqual(result.isValid, false);
      assert.strictEqual(result.error, 'Name ist erforderlich');
    });

    it('should reject invalid phone number', () => {
      const data = {
        name: 'Max',
        phone: 'abc', // Invalid characters
      };
      const result = validateInquiry(data);
      assert.strictEqual(result.isValid, false);
      assert.ok(result.error?.includes('Telefonnummer'));
    });

    it('should reject phone number with HTML characters', () => {
      const data = {
        name: 'Max',
        phone: '<script>012345</script>',
      };
      const result = validateInquiry(data);
      // It should be invalid because sanitized string contains &lt;... which fails regex
      assert.strictEqual(result.isValid, false);
    });

    it('should sanitize input fields', () => {
      const data = {
        name: '<b>Bold</b>',
        phone: '0123 456789',
        pflegegrad: '<i>Italic</i>',
      };
      const result = validateInquiry(data);
      assert.strictEqual(result.isValid, true);
      assert.strictEqual(result.sanitizedData?.name, '&lt;b&gt;Bold&lt;/b&gt;');
      assert.strictEqual(result.sanitizedData?.pflegegrad, '&lt;i&gt;Italic&lt;/i&gt;');
    });
  });
});
