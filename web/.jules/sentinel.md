## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-05-24 - [Uncaught TypeError in Input Sanitization Bypassing Validation]
**Vulnerability:** The `sanitizeInput` and `sanitizeForSubject` functions in `web/src/lib/security.ts` lacked defensive type checking (`typeof input !== 'string'`). The API route's payload validation only checked for string type if a field was truthy or for specific fields, allowing an attacker to pass an array (e.g., `{"message": ["array"]}`) which bypassed the `typeof data.message === 'string'` check, directly feeding an array to `.replace()` and throwing an uncaught 500 TypeError, exposing an internal server error instead of failing securely.
**Learning:** Sanitization functions must defensively handle non-string types at their boundary to act as a defense-in-depth layer against payload manipulation and runtime TypeErrors. Do not rely solely on upstream API type validations.
**Prevention:** Always implement graceful fallbacks for unexpected inputs in sanitization functions (e.g., `if (!input || typeof input !== 'string') return ''`).
