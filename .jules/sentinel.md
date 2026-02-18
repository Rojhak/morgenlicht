## 2026-02-18 - Missing Input Validation in API Routes
**Vulnerability:** The `/api/inquiry` endpoint accepted raw JSON input without any validation or sanitization, directly embedding it into HTML emails.
**Learning:** Next.js API routes do not automatically validate or sanitize request bodies. `request.json()` returns `any`, leading to potential injection vulnerabilities if not explicitly handled.
**Prevention:** Always implement runtime validation (e.g., using type guards or libraries like Zod) and sanitization for all user inputs in API routes before processing or rendering them.
