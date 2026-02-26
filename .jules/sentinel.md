## 2025-10-26 - Missing Security Library
**Vulnerability:** The codebase was missing the central `web/src/lib/security.ts` library referenced in documentation, leaving API routes to implement ad-hoc or no validation.
**Learning:** Documentation/Memory can drift from reality. Critical security infrastructure code must be verified for existence, not just assumed.
**Prevention:** Always verify the existence of security utilities before relying on them. Added the library with `sanitizeInput`, `sanitizeForSubject`, and `validateInquiry`.

## 2025-10-26 - Double Encoding in Email Subjects
**Vulnerability:** Sanitizing input with HTML entity encoding (`sanitizeInput`) before using it in plain-text contexts (like email subjects) results in user-visible artifacts (e.g., `O'Connor` -> `O&#039;Connor`).
**Learning:** Security controls must be context-aware. HTML sanitization is for HTML contexts; header sanitization (newline removal) is for header contexts.
**Prevention:** Use `sanitizeForSubject` (newline removal only) for email subjects and `sanitizeInput` (HTML escaping) for email bodies.
