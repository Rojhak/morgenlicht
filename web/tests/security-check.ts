import { escapeHtml, sanitizeInput } from '../src/lib/security'

console.log('🛡️  Running Security Checks...')

let failures = 0

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`)
    failures++
  } else {
    console.log(`✅ PASSED: ${message}`)
  }
}

// Test escapeHtml
assert(escapeHtml('<script>') === '&lt;script&gt;', 'Should escape < and >')
assert(escapeHtml('"') === '&quot;', 'Should escape quotes')
assert(escapeHtml("'") === '&#039;', 'Should escape single quotes')
assert(escapeHtml('&') === '&amp;', 'Should escape ampersand')

// Test sanitizeInput
assert(sanitizeInput('  hello  ') === 'hello', 'Should trim input')
assert(sanitizeInput('<script>alert(1)</script>') === '&lt;script&gt;alert(1)&lt;/script&gt;', 'Should escape HTML in sanitizeInput')
assert(sanitizeInput(123) === '123', 'Should handle numeric input')
assert(sanitizeInput(null) === '', 'Should handle null')
assert(sanitizeInput(undefined) === '', 'Should handle undefined')
assert(sanitizeInput('a'.repeat(2000), 10).length === 10, 'Should truncate input')
assert(sanitizeInput('test', 10) === 'test', 'Should not truncate short input')

if (failures > 0) {
  console.error(`\n❌ ${failures} security checks failed!`)
  process.exit(1)
} else {
  console.log('\n✅ All security checks passed!')
}
