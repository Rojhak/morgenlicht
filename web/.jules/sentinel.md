## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2025-04-10 - [Defense-in-depth Sanitization and Log Exposure Prevention]
**Vulnerability:** Sanitization functions (`sanitizeInput`, `sanitizeForSubject`) assumed string inputs, which could lead to TypeErrors if non-string payloads were injected. Additionally, the `inquiry/route.ts` API caught errors and logged the full error object to the server console, risking exposure of sensitive stack traces or environment information.
**Learning:** Type checking in utility functions acts as a critical defense-in-depth layer against malformed payloads. Errors caught in API routes must be sanitized before logging to prevent internal system information leakage.
**Prevention:** Always validate `typeof input === 'string'` in sanitization utilities, failing securely by returning an empty string. Log only safe properties like `error.message` instead of raw error objects.
