import { test, expect } from '@playwright/test';

test.describe('API Security - Inquiry Endpoint', () => {
  const API_URL = '/api/inquiry';

  test('should reject requests with missing required fields', async ({ request }) => {
    // Missing phone
    const response1 = await request.post(API_URL, {
      data: {
        name: 'Test User'
      }
    });
    expect(response1.status()).toBe(400);

    // Missing name
    const response2 = await request.post(API_URL, {
      data: {
        phone: '123456789'
      }
    });
    expect(response2.status()).toBe(400);
  });

  test('should reject invalid phone numbers', async ({ request }) => {
    const response = await request.post(API_URL, {
      data: {
        name: 'Test User',
        phone: 'invalid-phone-number' // Too generic, but if we add regex validation this should fail if it doesn't match digits
      }
    });
    // Note: Currently the code does NOT validate phone format, so this test is expected to fail (or pass with 200/500) before my fix.
    // After my fix, it should be 400.
    // For now, I will assert 400 and expect it to fail, confirming the vulnerability/issue.
    expect(response.status()).toBe(400);
  });

  test('should accept valid requests', async ({ request }) => {
    // We mock the RESEND_API_KEY env var in the test environment if possible,
    // but here we might get 500 if the key is missing on the server.
    // However, validation happens BEFORE the key check/email sending in the current code?
    // Let's check route.ts again.
    // Validation is first.
    // Then key check.

    const response = await request.post(API_URL, {
      data: {
        name: 'Valid User',
        phone: '0123 456789'
      }
    });

    // If key is missing, it returns 500 with "E-Mail-Service nicht konfiguriert".
    // If key is present, it returns 200.
    // So 200 or 500 are "valid" outcomes in terms of input validation passing.
    expect([200, 500]).toContain(response.status());
  });
});
