import { test, describe } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security'

describe('Security Utils', () => {
  describe('sanitizeInput', () => {
    test('should escape HTML characters', () => {
      const input = '<script>alert("xss")</script>'
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    test('should handle ampersands correctly', () => {
      const input = 'Tom & Jerry'
      const expected = 'Tom &amp; Jerry'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    test('should return empty string for non-string input', () => {
      // @ts-ignore
      assert.strictEqual(sanitizeInput(null), '')
      // @ts-ignore
      assert.strictEqual(sanitizeInput(undefined), '')
    })
  })

  describe('sanitizeForSubject', () => {
    test('should remove newlines', () => {
      const input = 'Hello\nWorld'
      const expected = 'Hello World'
      assert.strictEqual(sanitizeForSubject(input), expected)
    })

    test('should remove carriage returns', () => {
      const input = 'Hello\rWorld'
      const expected = 'Hello World'
      assert.strictEqual(sanitizeForSubject(input), expected)
    })

    test('should trim whitespace', () => {
       const input = '  Hello World  '
       const expected = 'Hello World'
       assert.strictEqual(sanitizeForSubject(input), expected)
    })
  })

  describe('validateInquiry', () => {
    test('should validate correct data', () => {
      const data = {
        name: 'Max Mustermann',
        phone: '+49 123 456789',
        pflegegrad: 'Pflegegrad 2'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, true)
    })

    test('should fail if name is missing', () => {
      const data = {
        phone: '+49 123 456789'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.strictEqual(result.error, 'Name ist erforderlich')
    })

    test('should fail if phone is missing', () => {
      const data = {
        name: 'Max Mustermann'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.strictEqual(result.error, 'Telefonnummer ist erforderlich')
    })

    test('should fail with invalid phone characters', () => {
      const data = {
        name: 'Max Mustermann',
        phone: '123-abc-456'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.strictEqual(result.error, 'Ungültiges Telefonformat')
    })

    test('should fail if name is too long', () => {
      const data = {
        name: 'a'.repeat(101),
        phone: '123456'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.strictEqual(result.error, 'Name ist zu lang (max 100 Zeichen)')
    })
  })
})
