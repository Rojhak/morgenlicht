## 2025-05-18 - Missing Input Validation in API Routes
**Vulnerability:** The inquiry API route (`/api/inquiry`) trusted user input implicitly without any validation or sanitization, directly injecting it into HTML emails.
**Learning:** Next.js API routes with `request.json()` return `any` (or the specified generic type), but this is only a compile-time check. Runtime validation is crucial.
**Prevention:** Always treat external input as untrusted. Implement runtime validation (e.g., manual checks or Zod) and sanitization before processing or displaying data.
