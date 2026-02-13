import { describe, it } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, validateInquiry } from '../src/lib/security'

describe('Security Utility', () => {
  describe('sanitizeInput', () => {
    it('should escape HTML characters', () => {
      const input = '<script>alert("xss")</script>'
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    it('should handle single quotes', () => {
      const input = "User's input"
      const expected = 'User&#039;s input'
      assert.strictEqual(sanitizeInput(input), expected)
    })

    it('should handle ampersands', () => {
        const input = 'Fish & Chips'
        const expected = 'Fish &amp; Chips'
        assert.strictEqual(sanitizeInput(input), expected)
    })

    it('should return empty string for null/undefined input', () => {
        assert.strictEqual(sanitizeInput(null), '')
        assert.strictEqual(sanitizeInput(undefined), '')
    })

    it('should coerce numbers to string', () => {
        assert.strictEqual(sanitizeInput(123), '123')
    })

    it('should return empty string for objects', () => {
        assert.strictEqual(sanitizeInput({}), '')
    })
  })

  describe('validateInquiry', () => {
    it('should return valid for correct data', () => {
      const data = {
        name: 'John Doe',
        phone: '123456789',
        pflegegrad: 'PG1'
      }
      const result = validateInquiry(data)
      assert.strictEqual(result.isValid, true)
      assert.strictEqual(result.errors.length, 0)
    })

    it('should fail if name is missing or not a string', () => {
        const data = {
            phone: '123456789'
        }
        const result = validateInquiry(data)
        assert.strictEqual(result.isValid, false)
        assert.ok(result.errors.includes('Name ist erforderlich'))

        const data2 = {
            name: 123,
            phone: '123'
        }
        // @ts-ignore
        const result2 = validateInquiry(data2)
        assert.strictEqual(result2.isValid, false)
        assert.ok(result2.errors.includes('Name ist erforderlich'))
    })

    it('should fail if phone is missing or not a string', () => {
        const data = {
            name: 'John Doe'
        }
        const result = validateInquiry(data)
        assert.strictEqual(result.isValid, false)
        assert.ok(result.errors.includes('Telefonnummer ist erforderlich'))
    })

    it('should fail if phone contains invalid characters', () => {
        const data = {
            name: 'John Doe',
            phone: '12345abc'
        }
        const result = validateInquiry(data)
        assert.strictEqual(result.isValid, false)
        assert.ok(result.errors.includes('Telefonnummer enthält ungültige Zeichen'))
    })

    it('should allow valid phone characters including / and .', () => {
        const data = {
            name: 'John Doe',
            phone: '+49 123-456 (789) / 0.1'
        }
        const result = validateInquiry(data)
        assert.strictEqual(result.isValid, true)
    })
  })
})
