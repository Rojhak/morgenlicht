## 2025-02-23 - HTML Injection in Email Body
**Vulnerability:** User input was directly interpolated into HTML email templates, allowing potential HTML/XSS injection if email clients render it.
**Learning:** `resend` library does not automatically sanitize HTML body content. Next.js API routes receiving JSON payload as `any` need explicit validation and sanitization.
**Prevention:** Use `sanitizeInput` for HTML content and `sanitizeForSubject` for headers. Validate all incoming JSON payloads with `validateInquiry` before processing.
