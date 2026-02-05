
import { escapeHtml, validatePhoneNumber } from './security';
import assert from 'assert';

console.log('🛡️  Running Security Checks...');

// Test escapeHtml
console.log('Testing escapeHtml...');
try {
    assert.strictEqual(escapeHtml('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;/script&gt;', 'Should escape script tags');
    assert.strictEqual(escapeHtml('"quote"'), '&quot;quote&quot;', 'Should escape double quotes');
    assert.strictEqual(escapeHtml("'single'"), '&#039;single&#039;', 'Should escape single quotes');
    assert.strictEqual(escapeHtml('Normal text'), 'Normal text', 'Should leave normal text alone');
    assert.strictEqual(escapeHtml(123), '', 'Should return empty string for number');
    assert.strictEqual(escapeHtml(null), '', 'Should return empty string for null');
    assert.strictEqual(escapeHtml(undefined), '', 'Should return empty string for undefined');
    console.log('✅ escapeHtml passed');
} catch (e) {
    console.error('❌ escapeHtml failed:', e);
    process.exit(1);
}

// Test validatePhoneNumber
console.log('Testing validatePhoneNumber...');
try {
    assert.strictEqual(validatePhoneNumber('030/123456'), true, 'Should accept 030/123456');
    assert.strictEqual(validatePhoneNumber('+49 170 1234567'), true, 'Should accept +49 170 1234567');
    assert.strictEqual(validatePhoneNumber('0151-12345678'), true, 'Should accept dashes');
    assert.strictEqual(validatePhoneNumber('(030) 123456'), true, 'Should accept parens');
    assert.strictEqual(validatePhoneNumber('123456'), true, 'Should accept 6 digits');
    assert.strictEqual(validatePhoneNumber('12345'), false, 'Should reject 5 digits');
    assert.strictEqual(validatePhoneNumber('abcdefg'), false, 'Should reject letters');
    assert.strictEqual(validatePhoneNumber('<script>'), false, 'Should reject HTML');
    assert.strictEqual(validatePhoneNumber(123456), false, 'Should reject number type');
    assert.strictEqual(validatePhoneNumber(null), false, 'Should reject null');
    console.log('✅ validatePhoneNumber passed');
} catch (e) {
    console.error('❌ validatePhoneNumber failed:', e);
    process.exit(1);
}

console.log('🎉 All security checks passed!');
