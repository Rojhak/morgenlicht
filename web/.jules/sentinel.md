## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.
## 2025-03-01 - Prevent Runtime TypeError and Payload Manipulation in Sanitization Functions
**Vulnerability:** The sanitization functions `sanitizeInput` and `sanitizeForSubject` expected string inputs but did not validate the input type. Passing non-string objects (like arrays or objects) could cause runtime `TypeError` exceptions (`input.replace is not a function`), leading to 500 Internal Server Errors and potentially being exploited to crash the service (DoS via payload manipulation).
**Learning:** Sanitization functions must be defensive and robust against unexpected types, particularly when handling external input. Relying solely on TypeScript definitions is insufficient because external requests bypass static typing.
**Prevention:** Always validate that the input is a string (`typeof input === 'string'`) before attempting string operations like `.replace()`. Return a safe fallback (like an empty string) for invalid input types.
