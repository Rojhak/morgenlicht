import { test } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, validateInquiry } from '../src/lib/security'

test('sanitizeInput escapes HTML characters', () => {
  const input = '<script>alert("xss")</script>'
  const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
  assert.strictEqual(sanitizeInput(input), expected)
})

test('sanitizeInput handles simple text', () => {
  const input = 'Hello World'
  assert.strictEqual(sanitizeInput(input), 'Hello World')
})

test('sanitizeInput handles empty input', () => {
  assert.strictEqual(sanitizeInput(''), '')
})

test('sanitizeInput handles non-string input', () => {
  assert.strictEqual(sanitizeInput(123), '')
  assert.strictEqual(sanitizeInput(null), '')
  assert.strictEqual(sanitizeInput(undefined), '')
  assert.strictEqual(sanitizeInput({}), '')
})

test('validateInquiry accepts valid data', () => {
  const validData = { name: 'John Doe', phone: '0123456789' }
  assert.strictEqual(validateInquiry(validData), null)
})

test('validateInquiry accepts valid phone with special chars', () => {
  const validData = { name: 'John Doe', phone: '+49 123 456-789' }
  assert.strictEqual(validateInquiry(validData), null)
})

test('validateInquiry rejects missing name', () => {
  const invalidData = { phone: '0123456789' }
  assert.strictEqual(validateInquiry(invalidData), 'Name ist erforderlich')
})

test('validateInquiry rejects non-string name', () => {
  const invalidData = { name: 123, phone: '0123456789' }
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

test('validateInquiry rejects non-string phone', () => {
  const invalidData = { name: 'John Doe', phone: 123456789 }
  assert.strictEqual(validateInquiry(invalidData), 'Telefonnummer ist erforderlich')
})

test('validateInquiry rejects invalid phone characters', () => {
  const invalidData = { name: 'John Doe', phone: 'abc' }
  assert.strictEqual(validateInquiry(invalidData), 'Ungültige Telefonnummer')
})

test('validateInquiry rejects short phone', () => {
  const invalidData = { name: 'John Doe', phone: '123' }
  assert.strictEqual(validateInquiry(invalidData), 'Ungültige Telefonnummer')
})

test('validateInquiry rejects long pflegegrad', () => {
  const invalidData = { name: 'John Doe', phone: '0123456789', pflegegrad: 'a'.repeat(51) }
  assert.strictEqual(validateInquiry(invalidData), 'Pflegegrad ist ungültig oder zu lang')
})

test('validateInquiry rejects non-string pflegegrad', () => {
  const invalidData = { name: 'John Doe', phone: '0123456789', pflegegrad: 123 }
  assert.strictEqual(validateInquiry(invalidData), 'Pflegegrad ist ungültig oder zu lang')
})

test('validateInquiry rejects non-object input', () => {
  assert.strictEqual(validateInquiry(null), 'Ungültige Anfrage')
  assert.strictEqual(validateInquiry(123), 'Ungültige Anfrage')
  assert.strictEqual(validateInquiry('string'), 'Ungültige Anfrage')
})
