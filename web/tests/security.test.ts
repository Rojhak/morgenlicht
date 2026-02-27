import { describe, it } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security'

describe('Security Utils', () => {
  describe('sanitizeInput', () => {
    it('should escape HTML special characters', () => {
      const input = '<script>alert("xss")</script>'
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    it('should handle empty strings', () => {
      assert.strictEqual(sanitizeInput(''), '')
    })

    it('should handle non-string inputs', () => {
      // @ts-ignore
      assert.strictEqual(sanitizeInput(null), '')
      // @ts-ignore
      assert.strictEqual(sanitizeInput(123), '')
    })
  })

  describe('sanitizeForSubject', () => {
    it('should remove newlines', () => {
      const input = 'Subject\nWith\rNewlines'
      const expected = 'Subject With Newlines'
      assert.strictEqual(sanitizeForSubject(input), expected)
    })

    it('should trim whitespace', () => {
      const input = '  Subject  '
      const expected = 'Subject'
      assert.strictEqual(sanitizeForSubject(input), expected)
    })
  })

  describe('validateInquiry', () => {
    it('should accept valid data', () => {
      const data = {
        name: 'John Doe',
        phone: '0123456789',
        pflegegrad: 'Pflegegrad 1'
      }
      assert.strictEqual(validateInquiry(data), null)
    })

    it('should reject missing name', () => {
      const data = {
        phone: '0123456789'
      }
      assert.strictEqual(validateInquiry(data), 'Name ist erforderlich')
    })

    it('should reject short name', () => {
      const data = {
        name: 'J',
        phone: '0123456789'
      }
      assert.strictEqual(validateInquiry(data), 'Name muss zwischen 2 und 100 Zeichen lang sein')
    })

    it('should reject missing phone', () => {
      const data = {
        name: 'John Doe'
      }
      assert.strictEqual(validateInquiry(data), 'Telefonnummer ist erforderlich')
    })

    it('should reject invalid phone characters', () => {
      const data = {
        name: 'John Doe',
        phone: '0123abc456'
      }
      // The regex allows digits, spaces, +, -, (, ), /, .
      // So 'abc' is invalid
      assert.match(validateInquiry(data) || '', /Ungültige Zeichen/)
    })

    it('should reject too long pflegegrad', () => {
      const data = {
        name: 'John Doe',
        phone: '0123456789',
        pflegegrad: 'A'.repeat(51)
      }
      assert.strictEqual(validateInquiry(data), 'Pflegegrad Angabe ist zu lang')
    })
  })
})
