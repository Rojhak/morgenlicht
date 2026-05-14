## 2025-03-01 - Missing Input Validation on Contact Form
**Vulnerability:** The API endpoint `/api/inquiry/route.ts` lacks proper input validation for `name`, `phone`, and `pflegegrad`. Although length constraints and allowed characters might be mentioned in documentation, they are not enforced on the backend.
**Learning:** Next.js API routes need robust manual validation before processing inputs to prevent injection attacks and ensure data integrity.
**Prevention:** Implement validation utilities (like `security.ts` functions) and use them to validate all incoming data to API endpoints.
## 2025-03-01 - Missing Input Length Validation on Message Field
**Vulnerability:** The API endpoint `/api/inquiry/route.ts` did not extract or validate the `message` field from the contact form submission. A large payload for `message` could be submitted, bypassing any validation limits and posing a DoS risk if processed later without limits.
**Learning:** All fields submitted by a client must be explicitly extracted (mass assignment prevention), validated (e.g., maximum length), and sanitized on the server before use, even optional fields.
**Prevention:** Add explicit length constraints in `validateInquiry` for all text fields (like max 2000 chars for message) and securely map only expected fields from `request.json()`.
## 2024-05-14 - [Update X-XSS-Protection Header]
**Vulnerability:** X-XSS-Protection header was set to "1; mode=block".
**Learning:** The X-XSS-Protection header is deprecated by modern browsers and its use can introduce cross-site scripting/XS-Search vulnerabilities.
**Prevention:** Set the X-XSS-Protection header to "0" in next.config.js to disable it.
