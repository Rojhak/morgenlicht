import { sanitizeInput, validateInquiry } from '../src/lib/security'
import assert from 'assert'

console.log('Running security tests...')

// Test sanitizeInput
try {
  assert.strictEqual(sanitizeInput('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;&#x2F;script&gt;')
  assert.strictEqual(sanitizeInput('John "Doe"'), 'John &quot;Doe&quot;')
  assert.strictEqual(sanitizeInput("O'Connor"), 'O&#x27;Connor')
  assert.strictEqual(sanitizeInput('1 & 2'), '1 &amp; 2')
  console.log('✅ sanitizeInput tests passed')
} catch (e) {
  console.error('❌ sanitizeInput tests failed:', e)
  process.exit(1)
}

// Test validateInquiry
try {
  // Valid input
  const validData = { name: 'John Doe', phone: '1234567890', pflegegrad: 'PG1' }
  const result1 = validateInquiry(validData)
  assert.strictEqual(result1.success, true)
  assert.strictEqual(result1.data?.name, 'John Doe')

  // Missing name
  const missingName = { phone: '1234567890' }
  const result2 = validateInquiry(missingName)
  assert.strictEqual(result2.success, false)
  assert.strictEqual(result2.error, 'Name is required and must be a string')

  // Invalid phone type
  const invalidPhone = { name: 'John Doe', phone: 123 }
  const result3 = validateInquiry(invalidPhone)
  assert.strictEqual(result3.success, false)
  assert.strictEqual(result3.error, 'Phone is required and must be a string')

  // Too long input
  const longName = { name: 'a'.repeat(101), phone: '123' }
  const result4 = validateInquiry(longName)
  assert.strictEqual(result4.success, false)
  assert.strictEqual(result4.error, 'Name is too long (max 100 chars)')

  console.log('✅ validateInquiry tests passed')
} catch (e) {
  console.error('❌ validateInquiry tests failed:', e)
  process.exit(1)
}

console.log('All tests passed!')
