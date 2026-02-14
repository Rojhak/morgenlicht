import { test } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, validateInquiry } from '../src/lib/security'

test('sanitizeInput', async (t) => {
  await t.test('escapes HTML special characters', () => {
    const input = '<script>alert("XSS")</script>'
    const expected = '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
    assert.strictEqual(sanitizeInput(input), expected)
  })

  await t.test('escapes ampersands', () => {
    const input = 'Tom & Jerry'
    const expected = 'Tom &amp; Jerry'
    assert.strictEqual(sanitizeInput(input), expected)
  })

  await t.test('escapes quotes', () => {
    const input = "It's fine"
    const expected = 'It&#039;s fine'
    assert.strictEqual(sanitizeInput(input), expected)
  })

  await t.test('handles empty input', () => {
    assert.strictEqual(sanitizeInput(''), '')
  })
})

test('validateInquiry', async (t) => {
  await t.test('validates valid input', () => {
    const data = {
      name: 'Max Mustermann',
      phone: '0123456789',
      pflegegrad: 'Pflegegrad 2',
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.valid, true)
    assert.strictEqual(result.error, undefined)
  })

  await t.test('validates valid input without optional pflegegrad', () => {
    const data = {
      name: 'Max Mustermann',
      phone: '+49 123 456789',
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.valid, true)
    assert.strictEqual(result.error, undefined)
  })

  await t.test('rejects missing name', () => {
    const data = {
      name: '',
      phone: '0123456789',
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.valid, false)
    assert.match(result.error || '', /Name ist erforderlich/)
  })

  await t.test('rejects missing phone', () => {
    const data = {
      name: 'Max Mustermann',
      phone: '',
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.valid, false)
    assert.match(result.error || '', /Telefonnummer ist erforderlich/)
  })

  await t.test('rejects invalid phone format', () => {
    const data = {
      name: 'Max Mustermann',
      phone: 'invalid phone',
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.valid, false)
    assert.match(result.error || '', /Ungültige Telefonnummer/)
  })

  await t.test('rejects too long name', () => {
    const data = {
      name: 'A'.repeat(101),
      phone: '0123456789',
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.valid, false)
    assert.match(result.error || '', /Name ist zu lang/)
  })

  await t.test('rejects too long phone', () => {
    const data = {
      name: 'Max',
      phone: '1'.repeat(51),
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.valid, false)
    assert.match(result.error || '', /Telefonnummer ist zu lang/)
  })

  await t.test('rejects too long pflegegrad', () => {
    const data = {
      name: 'Max',
      phone: '0123456789',
      pflegegrad: 'A'.repeat(51),
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.valid, false)
    assert.match(result.error || '', /Pflegegrad ist zu lang/)
  })
})
