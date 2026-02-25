import { test } from 'node:test'
import assert from 'node:assert'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '../src/lib/security'

test('sanitizeInput', (t) => {
  assert.strictEqual(sanitizeInput(''), '', 'Empty string should return empty string')
  assert.strictEqual(sanitizeInput('abc'), 'abc', 'Normal string should pass through')
  assert.strictEqual(sanitizeInput('alert("XSS")'), 'alert(&quot;XSS&quot;)', 'Should encode quotes')
  assert.strictEqual(sanitizeInput('<script>'), '&lt;script&gt;', 'Should encode script tags')
  assert.strictEqual(sanitizeInput('&'), '&amp;', 'Should encode ampersands')
})

test('sanitizeForSubject', (t) => {
  assert.strictEqual(sanitizeForSubject(''), '', 'Empty string should return empty string')
  assert.strictEqual(sanitizeForSubject('Subject Line'), 'Subject Line', 'Normal string should pass through')
  assert.strictEqual(sanitizeForSubject('Subject\nLine'), 'Subject Line', 'Should replace newline with space')
  assert.strictEqual(sanitizeForSubject('Subject\rLine'), 'Subject Line', 'Should replace carriage return with space')
})

test('validateInquiry', (t) => {
  // Valid cases
  assert.strictEqual(validateInquiry({ name: 'Valid Name', phone: '123456789' }).isValid, true, 'Valid name and phone should be valid')
  assert.strictEqual(validateInquiry({ name: 'Valid Name', phone: '123456789', pflegegrad: '1' }).isValid, true, 'Valid name, phone, pflegegrad 1 should be valid')
  assert.strictEqual(validateInquiry({ name: 'Valid Name', phone: '123456789', pflegegrad: 'Pflegegrad 5' }).isValid, true, 'Valid name, phone, pflegegrad 5 should be valid')

  // Invalid Name
  assert.strictEqual(validateInquiry({ name: '', phone: '123456789' }).isValid, false, 'Empty name should be invalid')
  assert.strictEqual(validateInquiry({ name: 'A', phone: '123456789' }).isValid, false, 'Name too short should be invalid')

  // Invalid Phone
  assert.strictEqual(validateInquiry({ name: 'Valid Name', phone: '' }).isValid, false, 'Empty phone should be invalid')
  assert.strictEqual(validateInquiry({ name: 'Valid Name', phone: 'abc' }).isValid, false, 'Invalid phone characters should be invalid')

  // Invalid Pflegegrad
  assert.strictEqual(validateInquiry({ name: 'Valid Name', phone: '123456789', pflegegrad: '6' }).isValid, false, 'Pflegegrad 6 should be invalid')
  assert.strictEqual(validateInquiry({ name: 'Valid Name', phone: '123456789', pflegegrad: 'invalid' }).isValid, false, 'Invalid pflegegrad string should be invalid')
})
