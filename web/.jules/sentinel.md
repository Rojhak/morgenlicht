## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-06-25 - [Payload Manipulation / TypeError DoS]
**Vulnerability:** API routes were vulnerable to TypeError crashes (resulting in HTTP 500 or potentially unhandled rejections) because sanitization utilities (`sanitizeInput`, `sanitizeForSubject`) assumed the input was always a string, but malicious users could pass arrays or objects via JSON payloads.
**Learning:** Next.js API route request parsing (`await request.json()`) does not enforce interface types at runtime. Type casting (`const data: InquiryData = ...`) only satisfies TypeScript, leaving the runtime vulnerable to payload manipulation where built-in string methods (like `.replace()`) throw errors on non-string inputs.
**Prevention:** Sanitization utility functions must gracefully handle non-string inputs by explicitly checking `typeof input !== 'string'` and returning a safe default (e.g., an empty string) as a defense-in-depth layer against payload manipulation.
