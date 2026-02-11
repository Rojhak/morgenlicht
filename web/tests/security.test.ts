import { sanitizeInput, validateInquiry } from '../src/lib/security'
import { describe, it } from 'node:test'
import assert from 'node:assert'

// Using node:test for simple testing without external runners if needed,
// but since I'm running with `npx tsx`, I can use a simple custom runner or just assertions.
// However, memory says "Unit testing... is performed via standalone tsx scripts".
// I'll write a simple script that executes tests.

async function runTests() {
  console.log('Running Security Tests...')
  let passed = 0
  let failed = 0

  function test(name: string, fn: () => void) {
    try {
      fn()
      console.log(`✅ ${name}`)
      passed++
    } catch (e) {
      console.error(`❌ ${name}`)
      console.error(e)
      failed++
    }
  }

  // Sanitize Input Tests
  test('sanitizeInput escapes HTML tags', () => {
    const input = '<script>alert(1)</script>'
    const expected = '&lt;script&gt;alert(1)&lt;/script&gt;'
    assert.strictEqual(sanitizeInput(input), expected)
  })

  test('sanitizeInput escapes quotes', () => {
    const input = '"Hello" \'World\''
    const expected = '&quot;Hello&quot; &#x27;World&#x27;'
    assert.strictEqual(sanitizeInput(input), expected)
  })

  test('sanitizeInput returns empty string for non-string input', () => {
    // @ts-ignore
    assert.strictEqual(sanitizeInput(null), '')
    // @ts-ignore
    assert.strictEqual(sanitizeInput(undefined), '')
    // @ts-ignore
    assert.strictEqual(sanitizeInput(123), '')
  })

  // Validate Inquiry Tests
  test('validateInquiry accepts valid data', () => {
    const data = {
      name: 'John Doe',
      phone: '0123456789',
      pflegegrad: 'PG1'
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.isValid, true)
    assert.deepStrictEqual(result.sanitizedData, data)
  })

  test('validateInquiry sanitizes input', () => {
    const data = {
      name: '<b>John</b>',
      phone: '0123456789',
      pflegegrad: '<script>'
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.isValid, true)
    assert.strictEqual(result.sanitizedData?.name, '&lt;b&gt;John&lt;/b&gt;')
    assert.strictEqual(result.sanitizedData?.pflegegrad, '&lt;script&gt;')
  })

  test('validateInquiry fails on missing name', () => {
    const data = {
      phone: '0123456789'
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.isValid, false)
    assert.match(result.error || '', /Name ist erforderlich/)
  })

  test('validateInquiry fails on invalid phone', () => {
    const data = {
      name: 'John',
      phone: 'abc'
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.isValid, false)
    assert.match(result.error || '', /gültige/)
  })

  test('validateInquiry fails on long name', () => {
    const data = {
      name: 'a'.repeat(101),
      phone: '0123456789'
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.isValid, false)
    assert.match(result.error || '', /Name ist zu lang/)
  })

  test('validateInquiry handles optional pflegegrad', () => {
    const data = {
      name: 'John',
      phone: '0123456789'
    }
    const result = validateInquiry(data)
    assert.strictEqual(result.isValid, true)
    assert.strictEqual(result.sanitizedData?.pflegegrad, undefined)
  })

  console.log(`\nTests completed: ${passed} passed, ${failed} failed`)
  if (failed > 0) process.exit(1)
}

runTests().catch(e => {
  console.error(e)
  process.exit(1)
})
