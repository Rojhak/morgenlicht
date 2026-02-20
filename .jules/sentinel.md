## 2025-05-27 - Unsanitized Email Input
**Vulnerability:** Input from `request.json()` was directly injected into HTML email templates in `api/inquiry/route.ts`.
**Learning:** Next.js API routes do not automatically validate or sanitize JSON body content.
**Prevention:** Always use a validation function (like `validateInquiry`) and sanitization helpers (`sanitizeInput`) before using user input in HTML or other sensitive contexts.
