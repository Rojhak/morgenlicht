## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-05-25 - [Payload Manipulation DoS and Server-Side Information Disclosure via Stack Traces]
**Vulnerability:** Sanitization and validation functions like `sanitizeInput` implicitly assumed inputs were strictly strings, causing runtime `TypeError: input.replace is not a function` when given arrays/objects via payload manipulation. Also, raw error objects were being logged on the server.
**Learning:** Defense in depth means assuming type safety (TypeScript) doesn't exist at runtime at API boundaries. Non-string payloads bypass simple string validators and crash functions assuming `.replace` exists. Catch blocks logging raw errors might expose internal stack traces to monitoring systems or client responses if not caught properly.
**Prevention:** Explicitly enforce `typeof input === 'string'` in validation and sanitization utilities (returning fallback empty strings). Log only `error.message` on server logs to sanitize any accidental trace leakage.
