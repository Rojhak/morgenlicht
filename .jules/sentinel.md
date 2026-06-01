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

## 2025-06-01 - Prevent Information Disclosure and XSS in Production
**Vulnerability:** The application was exposing the `X-Powered-By: Next.js` header and indiscriminately applying `"unsafe-eval"` in the `Content-Security-Policy` `script-src` directive for all environments.
**Learning:** Next.js exposes its signature by default, which can help attackers fingerprint the stack. Additionally, `"unsafe-eval"` is necessary for Fast Refresh in development but creates a severe XSS risk if left active in production.
**Prevention:** Set `poweredByHeader: false` in `next.config.js` to mitigate fingerprinting, and conditionally construct the CSP to apply `"unsafe-eval"` only when `process.env.NODE_ENV === "development"`.
