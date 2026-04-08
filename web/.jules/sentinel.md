## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-05-25 - [Payload Type Confusion DoS in Sanitization Utility]
**Vulnerability:** Found that sanitization functions like `sanitizeInput` and `sanitizeForSubject` were expecting strings but didn't explicitly check for `typeof input === 'string'`. This could allow attackers to bypass validation logic or cause a `TypeError` Denial of Service (DoS) by passing arrays or objects in the JSON payload (e.g., `{"name": ["admin"]}`).
**Learning:** In dynamically typed environments processing API requests (even with TypeScript, since runtime JSON parsing doesn't enforce types), utility functions that perform string operations (like `.replace()`) must have strict runtime type checking as a defense-in-depth layer.
**Prevention:** Always explicitly check `typeof input === 'string'` in sanitization and validation utilities before calling string-specific methods, returning a safe default (like an empty string) if the type is unexpected.
