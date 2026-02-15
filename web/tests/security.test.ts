import { test } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, validateInquiry } from '../src/lib/security'

test('sanitizeInput escapes HTML characters', () => {
  const input = '<script>alert("xss")</script>'
  const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
  assert.strictEqual(sanitizeInput(input), expected)
})

test('sanitizeInput handles empty string', () => {
  assert.strictEqual(sanitizeInput(''), '')
})

test('validateInquiry accepts valid data', () => {
  const validData = { name: 'John Doe', phone: '0123456789' }
  assert.strictEqual(validateInquiry(validData), null)
})

test('validateInquiry accepts valid data with pflegegrad', () => {
  const validData = { name: 'John Doe', phone: '0123456789', pflegegrad: 'Pflegegrad 1' }
  assert.strictEqual(validateInquiry(validData), null)
})

test('validateInquiry rejects missing name', () => {
  const invalidData = { phone: '0123456789' }
  assert.strictEqual(validateInquiry(invalidData), 'Name ist erforderlich')
})

test('validateInquiry rejects empty name', () => {
  const invalidData = { name: '   ', phone: '0123456789' }
  assert.strictEqual(validateInquiry(invalidData), 'Name ist erforderlich')
})

test('validateInquiry rejects long name', () => {
  const invalidData = { name: 'a'.repeat(101), phone: '0123456789' }
  assert.strictEqual(validateInquiry(invalidData), 'Name ist zu lang (max. 100 Zeichen)')
})

test('validateInquiry rejects missing phone', () => {
  const invalidData = { name: 'John Doe' }
  assert.strictEqual(validateInquiry(invalidData), 'Telefonnummer ist erforderlich')
})

test('validateInquiry rejects invalid phone', () => {
  const invalidData = { name: 'John Doe', phone: 'abc' }
  assert.strictEqual(validateInquiry(invalidData), 'Ungültige Telefonnummer')
})

test('validateInquiry rejects short phone', () => {
  const invalidData = { name: 'John Doe', phone: '123' }
  assert.strictEqual(validateInquiry(invalidData), 'Ungültige Telefonnummer')
})

test('validateInquiry rejects long phone', () => {
  const invalidData = { name: 'John Doe', phone: '1'.repeat(31) }
  assert.strictEqual(validateInquiry(invalidData), 'Ungültige Telefonnummer')
})

test('validateInquiry rejects long pflegegrad', () => {
  const invalidData = { name: 'John Doe', phone: '0123456789', pflegegrad: 'a'.repeat(51) }
  assert.strictEqual(validateInquiry(invalidData), 'Pflegegrad ist zu lang (max. 50 Zeichen)')
})
