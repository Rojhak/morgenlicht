import { test, describe } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security'

describe('Security Utilities', () => {
  describe('sanitizeInput', () => {
    test('should return empty string for null/undefined/empty input', () => {
      assert.strictEqual(sanitizeInput(''), '')
      assert.strictEqual(sanitizeInput(null as any), '')
      assert.strictEqual(sanitizeInput(undefined as any), '')
    })

    test('should not modify safe strings', () => {
      const input = 'Hello World 123'
      assert.strictEqual(sanitizeInput(input), input)
    })

    test('should encode HTML special characters', () => {
      const input = '<script>alert("XSS")</script>'
      const expected = '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    test('should encode all special characters correctly', () => {
      const input = `& < > " '`
      const expected = '&amp; &lt; &gt; &quot; &#39;'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    test('should handle mixed content', () => {
      const input = 'User input with <b>bold</b> and "quotes"'
      const expected = 'User input with &lt;b&gt;bold&lt;/b&gt; and &quot;quotes&quot;'
      assert.strictEqual(sanitizeInput(input), expected)
    })
  })

  describe('sanitizeForSubject', () => {
    test('should return empty string for null/undefined/empty input', () => {
      assert.strictEqual(sanitizeForSubject(''), '')
      assert.strictEqual(sanitizeForSubject(null as any), '')
      assert.strictEqual(sanitizeForSubject(undefined as any), '')
    })

    test('should not modify safe strings', () => {
      const input = 'Valid Subject Line'
      assert.strictEqual(sanitizeForSubject(input), input)
    })

    test('should remove newlines and carriage returns', () => {
      const input = 'Subject\nWith\rNewlines'
      const expected = 'Subject With Newlines'
      assert.strictEqual(sanitizeForSubject(input), expected)
    })

    test('should handle multiple newlines', () => {
      const input = 'Line 1\n\nLine 2'
      // .replace(/[\r\n]+/g, ' ') replaces multiple newlines with a single space
      const expectedCorrect = 'Line 1 Line 2'
      assert.strictEqual(sanitizeForSubject(input), expectedCorrect)
    })
  })

  describe('validateInquiry', () => {
    test('should return valid for correct data', () => {
      const data = {
        name: 'John Doe',
        phone: '0123456789',
        pflegegrad: '2'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, true)
      assert.strictEqual(result.errors, undefined)
    })

    test('should return valid for data without optional pflegegrad', () => {
      const data = {
        name: 'John Doe',
        phone: '0123456789'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, true)
      assert.strictEqual(result.errors, undefined)
    })

    test('should return invalid if name is missing', () => {
      const data = {
        phone: '0123456789'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.ok(result.errors?.includes('Name is required'))
    })

    test('should return invalid if phone is missing', () => {
      const data = {
        name: 'John Doe'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.ok(result.errors?.includes('Phone number is required'))
    })

    test('should return invalid for invalid phone format', () => {
      const data = {
        name: 'John Doe',
        phone: 'invalid-phone'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      // Since 'invalid-phone' contains letters, it fails the regex /^[0-9\s\+\-\(\)\/\.]+$/
      assert.ok(result.errors?.includes('Invalid phone number format')) // Wait, check implementation
    })

    test('should return valid for complex phone numbers', () => {
        const data = {
            name: 'John Doe',
            phone: '+49 (0) 30 / 123 456-78'
        }
        const result = validateInquiry(data)
        assert.strictEqual(result.valid, true)
    })

    test('should return invalid for non-object input', () => {
      assert.strictEqual(validateInquiry(null).valid, false)
      assert.strictEqual(validateInquiry('string').valid, false)
    })
  })
})
