import { test } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security'

test('sanitizeInput', async (t) => {
  await t.test('should return empty string for non-string input', () => {
    // @ts-ignore
    assert.strictEqual(sanitizeInput(null), '')
    // @ts-ignore
    assert.strictEqual(sanitizeInput(undefined), '')
    // @ts-ignore
    assert.strictEqual(sanitizeInput(123), '')
  })

  await t.test('should escape HTML characters', () => {
    const input = '<script>alert("xss")</script>'
    const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
    assert.strictEqual(sanitizeInput(input), expected)
  })

  await t.test('should escape ampersand', () => {
    const input = 'Me & You'
    const expected = 'Me &amp; You'
    assert.strictEqual(sanitizeInput(input), expected)
  })

  await t.test('should escape quotes', () => {
    const input = `'single' "double"`
    const expected = '&#039;single&#039; &quot;double&quot;'
    assert.strictEqual(sanitizeInput(input), expected)
  })
})

test('sanitizeForSubject', async (t) => {
  await t.test('should return empty string for non-string input', () => {
    // @ts-ignore
    assert.strictEqual(sanitizeForSubject(null), '')
  })

  await t.test('should replace newlines with spaces', () => {
    const input = 'Hello\nWorld\r\nTest'
    const expected = 'Hello World Test'
    assert.strictEqual(sanitizeForSubject(input), expected)
  })

  await t.test('should trim whitespace', () => {
    const input = '  Hello World  '
    const expected = 'Hello World'
    assert.strictEqual(sanitizeForSubject(input), expected)
  })
})

test('validateInquiry', async (t) => {
  await t.test('should return true for valid data', () => {
    const data = {
      name: 'Max Mustermann',
      phone: '0123456789',
      pflegegrad: '1'
    }
    assert.strictEqual(validateInquiry(data), true)
  })

  await t.test('should return true without optional fields', () => {
    const data = {
      name: 'Max Mustermann',
      phone: '0123456789'
    }
    assert.strictEqual(validateInquiry(data), true)
  })

  await t.test('should return false for missing required fields', () => {
    assert.strictEqual(validateInquiry({ phone: '123' }), false)
    assert.strictEqual(validateInquiry({ name: 'Max' }), false)
  })

  await t.test('should return false for invalid name', () => {
    assert.strictEqual(validateInquiry({ name: 'A', phone: '123456' }), false) // too short
    assert.strictEqual(validateInquiry({ name: 'A'.repeat(101), phone: '123456' }), false) // too long
  })

  await t.test('should return false for invalid phone', () => {
    assert.strictEqual(validateInquiry({ name: 'Max', phone: '123' }), false) // too short
    assert.strictEqual(validateInquiry({ name: 'Max', phone: 'abc' }), false) // invalid chars
  })

  await t.test('should return false for invalid pflegegrad', () => {
    const data = {
      name: 'Max Mustermann',
      phone: '0123456789',
      pflegegrad: '10' // invalid value
    }
    assert.strictEqual(validateInquiry(data), false)
  })

  await t.test('should return false for non-object input', () => {
    assert.strictEqual(validateInquiry('string'), false)
    assert.strictEqual(validateInquiry(null), false)
  })
})
