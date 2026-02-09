## 2025-01-27 - HTML Injection in Emails
**Vulnerability:** Inquiry data (`name`, `phone`, `pflegegrad`) was directly interpolated into email HTML without sanitization, allowing HTML injection.
**Learning:** Manual HTML construction for emails bypasses standard framework protections (like React's escaping).
**Prevention:** Always sanitize user input before interpolating into HTML strings, or use a templating engine that auto-escapes. Added `sanitizeInput` helper in `web/src/lib/security.ts`.
