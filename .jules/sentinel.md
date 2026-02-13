## 2025-02-18 - Missing API Input Sanitization
**Vulnerability:** API routes (e.g., `api/inquiry`) were directly injecting user input into HTML emails without sanitization, leading to Stored XSS risks in email clients.
**Learning:** Next.js `request.json()` returns `any` and does not auto-sanitize.
**Prevention:** Always use `sanitizeInput` from `web/src/lib/security.ts` for any user input rendered in HTML, and validate all API inputs.
