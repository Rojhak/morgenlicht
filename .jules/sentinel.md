## 2026-02-15 - Centralized Security Validation
**Vulnerability:** Inconsistent input validation and sanitization across API routes led to potential XSS and data integrity issues.
**Learning:** Security logic was scattered or missing. Created `web/src/lib/security.ts` as the single source of truth for sanitization and validation.
**Prevention:** Always import `sanitizeInput` and validation functions from `web/src/lib/security.ts` for all user inputs.
