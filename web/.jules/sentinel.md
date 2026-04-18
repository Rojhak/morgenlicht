## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-05-24 - [Runtime TypeErrors in Sanitization Utilities]
**Vulnerability:** Sanitization utilities like `sanitizeInput` and `sanitizeForSubject` were expecting strings but failing to explicitly check the type, leading to potential `TypeError` runtime crashes if non-string payloads (e.g., objects or arrays) were passed.
**Learning:** Even well-typed TypeScript parameters (like `input: string`) can be bypassed at runtime if validation rules miss unexpected payload types or structured attacks, causing unexpected runtime crashes that could be exploited for DoS.
**Prevention:** Always add explicit runtime type-checking (e.g., `typeof input !== 'string'`) and fallback logic (like returning `''`) in all security sanitization functions, enforcing defense-in-depth against payload manipulation.
