import { describe, it } from 'node:test'
import assert from 'node:assert'
import {
  sanitizeInput,
  sanitizeForSubject,
  validateInquiry,
} from '../src/lib/security'

describe('Security Utilities', () => {
  describe('sanitizeInput', () => {
    it('should encode HTML special characters', () => {
      const input = '<script>alert("xss")</script>'
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    it('should handle regular text correctly', () => {
      const input = 'Hello World'
      assert.strictEqual(sanitizeInput(input), 'Hello World')
    })

    it('should handle empty input', () => {
      assert.strictEqual(sanitizeInput(''), '')
    })
  })

  describe('sanitizeForSubject', () => {
    it('should remove newlines', () => {
      const input = 'Hello\nWorld'
      assert.strictEqual(sanitizeForSubject(input), 'Hello World')
    })

    it('should remove carriage returns', () => {
      const input = 'Hello\rWorld'
      assert.strictEqual(sanitizeForSubject(input), 'Hello World')
    })

     it('should trim whitespace', () => {
      const input = '  Hello World  '
      assert.strictEqual(sanitizeForSubject(input), 'Hello World')
    })
  })

  describe('validateInquiry', () => {
    it('should validate correct data', () => {
      const data = { name: 'John Doe', phone: '123456789' }
      assert.strictEqual(validateInquiry(data), true)
    })

    it('should validate data with optional fields', () => {
      const data = { name: 'John Doe', phone: '123456789', pflegegrad: '2' }
      assert.strictEqual(validateInquiry(data), true)
    })

    it('should reject missing name', () => {
      const data = { phone: '123456789' }
      assert.strictEqual(validateInquiry(data), false)
    })

    it('should reject empty name', () => {
      const data = { name: '   ', phone: '123456789' }
      assert.strictEqual(validateInquiry(data), false)
    })

    it('should reject missing phone', () => {
      const data = { name: 'John Doe' }
      assert.strictEqual(validateInquiry(data), false)
    })

    it('should reject invalid phone format', () => {
      const data = { name: 'John Doe', phone: 'abc' }
      assert.strictEqual(validateInquiry(data), false)
    })

    it('should reject short phone number', () => {
      const data = { name: 'John Doe', phone: '123' }
      assert.strictEqual(validateInquiry(data), false)
    })

    it('should reject invalid pflegegrad type', () => {
      const data = { name: 'John Doe', phone: '123456789', pflegegrad: 123 }
      assert.strictEqual(validateInquiry(data), false)
    })

    it('should reject non-object input', () => {
      assert.strictEqual(validateInquiry(null), false)
      assert.strictEqual(validateInquiry('string'), false)
    })
  })
})
