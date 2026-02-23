import { describe, it } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security'

describe('Security Utils', () => {
  describe('sanitizeInput', () => {
    it('should encode HTML special characters', () => {
      const input = '<script>alert("xss")</script>'
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    it('should handle ampersands correctly', () => {
      const input = 'Me & You'
      const expected = 'Me &amp; You'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    it('should handle single quotes', () => {
      const input = "It's me"
      const expected = 'It&#039;s me'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    it('should return empty string for null/undefined/empty', () => {
      assert.strictEqual(sanitizeInput(''), '')
      // @ts-ignore
      assert.strictEqual(sanitizeInput(null), '')
      // @ts-ignore
      assert.strictEqual(sanitizeInput(undefined), '')
    })
  })

  describe('sanitizeForSubject', () => {
    it('should remove newlines', () => {
      const input = 'Hello\nWorld'
      const expected = 'Hello World'
      assert.strictEqual(sanitizeForSubject(input), expected)
    })

    it('should remove carriage returns', () => {
      const input = 'Hello\rWorld'
      const expected = 'Hello World'
      assert.strictEqual(sanitizeForSubject(input), expected)
    })

    it('should trim whitespace', () => {
      const input = '  Hello  '
      const expected = 'Hello'
      assert.strictEqual(sanitizeForSubject(input), expected)
    })
  })

  describe('validateInquiry', () => {
    it('should return valid for correct data', () => {
      const data = {
        name: 'John Doe',
        phone: '0123456789',
        pflegegrad: '2'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, true)
      assert.strictEqual(result.error, undefined)
    })

    it('should return valid for minimal correct data', () => {
      const data = {
        name: 'John Doe',
        phone: '+49 123 456'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, true)
    })

    it('should fail if name is missing', () => {
      const data = {
        phone: '0123456789'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.match(result.error!, /Name ist erforderlich/)
    })

    it('should fail if phone is missing', () => {
      const data = {
        name: 'John Doe'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.match(result.error!, /Telefonnummer ist erforderlich/)
    })

    it('should fail if phone has invalid characters', () => {
      const data = {
        name: 'John Doe',
        phone: '0123abc456'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.match(result.error!, /Ungültiges Telefonnummerformat/)
    })

    it('should fail if name is too short', () => {
      const data = {
        name: 'J',
        phone: '0123456789'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.valid, false)
      assert.match(result.error!, /Name muss zwischen 2 und 100 Zeichen lang sein/)
    })
  })
})
