## 2025-03-01 - Missing Input Validation on Contact Form
**Vulnerability:** The API endpoint `/api/inquiry/route.ts` lacks proper input validation for `name`, `phone`, and `pflegegrad`. Although length constraints and allowed characters might be mentioned in documentation, they are not enforced on the backend.
**Learning:** Next.js API routes need robust manual validation before processing inputs to prevent injection attacks and ensure data integrity.
**Prevention:** Implement validation utilities (like `security.ts` functions) and use them to validate all incoming data to API endpoints.
## 2025-03-01 - Missing Input Length Validation on Message Field
**Vulnerability:** The API endpoint `/api/inquiry/route.ts` did not extract or validate the `message` field from the contact form submission. A large payload for `message` could be submitted, bypassing any validation limits and posing a DoS risk if processed later without limits.
**Learning:** All fields submitted by a client must be explicitly extracted (mass assignment prevention), validated (e.g., maximum length), and sanitized on the server before use, even optional fields.
**Prevention:** Add explicit length constraints in `validateInquiry` for all text fields (like max 2000 chars for message) and securely map only expected fields from `request.json()`.
## 2026-05-15 - Disable Legacy X-XSS-Protection Header
**Vulnerability:** The `X-XSS-Protection` header was set to `1; mode=block`, which can introduce XS-Search vulnerabilities on modern browsers.
**Learning:** Modern security best practices recommend disabling the legacy XSS auditor by setting the header to `0`, as modern browsers no longer support it and it can be exploited to bypass other security mechanisms.
**Prevention:** Always set `X-XSS-Protection` to `0` instead of `1; mode=block` and rely on Content-Security-Policy (CSP) for XSS protection.

## 2025-05-27 - Restrict unsafe-eval in CSP and disable X-Powered-By
**Vulnerability:** The application exposed the X-Powered-By header and unconditionally allowed unsafe-eval in the Content-Security-Policy, creating information disclosure and XSS risks in production.
**Learning:** Next.js needs unsafe-eval for Fast Refresh in development, but it must be removed in production. The poweredByHeader defaults to true and should be disabled.
**Prevention:** Set poweredByHeader: false in next.config.js and dynamically configure the CSP script-src based on process.env.NODE_ENV.
