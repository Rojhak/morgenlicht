import { test } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security'

test('sanitizeInput escapes HTML characters', () => {
  assert.strictEqual(sanitizeInput('<script>alert("xss")</script>'), '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
  assert.strictEqual(sanitizeInput('User & Company'), 'User &amp; Company')
  assert.strictEqual(sanitizeInput("It's me"), 'It&#039;s me')
  assert.strictEqual(sanitizeInput(''), '')
  // @ts-ignore
  assert.strictEqual(sanitizeInput(null), '')
})

test('sanitizeForSubject removes newlines', () => {
  assert.strictEqual(sanitizeForSubject('Hello\nWorld'), 'Hello World')
  assert.strictEqual(sanitizeForSubject('Hello\r\nWorld'), 'Hello World')
  assert.strictEqual(sanitizeForSubject('  Hello  '), 'Hello')
  assert.strictEqual(sanitizeForSubject(''), '')
})

test('validateInquiry validates correct data', () => {
  const validData = {
    name: 'Max Mustermann',
    phone: '+49 123 456789',
    pflegegrad: 'Pflegegrad 2'
  }
  assert.deepStrictEqual(validateInquiry(validData), { valid: true })
})

test('validateInquiry rejects invalid name', () => {
  assert.strictEqual(validateInquiry({ name: '', phone: '123' }).valid, false)
  assert.strictEqual(validateInquiry({ name: '   ', phone: '123' }).valid, false)
  // Very long name
  assert.strictEqual(validateInquiry({ name: 'a'.repeat(101), phone: '123' }).valid, false)
})

test('validateInquiry rejects invalid phone', () => {
  assert.strictEqual(validateInquiry({ name: 'Max', phone: '' }).valid, false)
  assert.strictEqual(validateInquiry({ name: 'Max', phone: 'invalid-phone' }).valid, false) // Letters not allowed
  assert.strictEqual(validateInquiry({ name: 'Max', phone: '1234567890'.repeat(6) }).valid, false) // Too long
})

test('validateInquiry accepts valid phone formats', () => {
    assert.strictEqual(validateInquiry({ name: 'Max', phone: '+49 123 456' }).valid, true)
    assert.strictEqual(validateInquiry({ name: 'Max', phone: '030/123456' }).valid, true)
    assert.strictEqual(validateInquiry({ name: 'Max', phone: '(030) 123-456' }).valid, true)
})

test('validateInquiry validates optional pflegegrad', () => {
  const validData = {
    name: 'Max',
    phone: '123',
    pflegegrad: 123 // Wrong type
  }
  assert.strictEqual(validateInquiry(validData).valid, false)
})

test('validateInquiry handles missing data', () => {
  assert.strictEqual(validateInquiry(null).valid, false)
  assert.strictEqual(validateInquiry({}).valid, false)
})
