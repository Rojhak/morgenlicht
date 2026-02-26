import { describe, it } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security'

describe('Security Utilities', () => {
  describe('sanitizeInput', () => {
    it('should escape HTML characters', () => {
      assert.strictEqual(sanitizeInput('<script>alert("xss")</script>'), '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
      assert.strictEqual(sanitizeInput('Foo & Bar'), 'Foo &amp; Bar')
      assert.strictEqual(sanitizeInput("'"), '&#039;')
    })

    it('should return empty string for null/undefined', () => {
      // @ts-ignore
      assert.strictEqual(sanitizeInput(null), '')
      // @ts-ignore
      assert.strictEqual(sanitizeInput(undefined), '')
    })
  })

  describe('sanitizeForSubject', () => {
    it('should remove newlines', () => {
      assert.strictEqual(sanitizeForSubject('Subject\nInjection'), 'Subject Injection')
      assert.strictEqual(sanitizeForSubject('Subject\r\nInjection'), 'Subject Injection')
    })
  })

  describe('validateInquiry', () => {
    it('should return valid for correct data', () => {
      const result = validateInquiry({
        name: 'John Doe',
        phone: '1234567890'
      })
      assert.strictEqual(result.isValid, true)
    })

    it('should return valid for correct data with pflegegrad', () => {
      const result = validateInquiry({
        name: 'John Doe',
        phone: '1234567890',
        pflegegrad: '2'
      })
      assert.strictEqual(result.isValid, true)
    })

    it('should fail for short name', () => {
      const result = validateInquiry({
        name: 'J',
        phone: '1234567890'
      })
      assert.strictEqual(result.isValid, false)
      assert.match(result.error || '', /Name/)
    })

    it('should fail for invalid phone', () => {
      const result = validateInquiry({
        name: 'John Doe',
        phone: 'abc'
      })
      assert.strictEqual(result.isValid, false)
      assert.match(result.error || '', /Telefon/)
    })

    it('should fail for too long pflegegrad', () => {
      const result = validateInquiry({
        name: 'John Doe',
        phone: '1234567890',
        pflegegrad: 'a'.repeat(51)
      })
      assert.strictEqual(result.isValid, false)
      assert.match(result.error || '', /Pflegegrad/)
    })
  })
})
