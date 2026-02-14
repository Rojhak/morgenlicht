## 2025-02-18 - Missing API Input Validation
**Vulnerability:** The inquiry API route (`/api/inquiry`) lacked server-side input validation and sanitization, relying solely on client-side checks. This exposed the email system to HTML injection and potential flooding.
**Learning:** Next.js API routes often process `request.json()` directly without type safety or sanitization.
**Prevention:** Always use a validation schema (e.g., Zod or custom validation function) and sanitization utility for all user inputs in API routes before processing. Restored `web/src/lib/security.ts` to centralize this logic.
