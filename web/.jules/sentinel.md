## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-05-25 - [Type Injection Bypassing Validation & Silent Failures]
**Vulnerability:** The API route `/api/inquiry` was extracting JSON payload fields without type checking (relying solely on existence). This allowed an attacker to inject arrays or objects instead of strings, potentially causing `TypeError` crashes during sanitization or bypassing validation logic. Additionally, the `resend.emails.send` promise was not checked for an `error` return object, causing silent delivery failures to return a 200 OK.
**Learning:** Destructuring `rawData` from a JSON payload is unsafe without explicit `typeof` checks for every field. Furthermore, modern SDKs (like Resend v6+) return errors in object payloads (`{ data, error }`) instead of throwing exceptions, so `try/catch` alone is insufficient to catch API failures.
**Prevention:** Always cast or strictly type-check explicitly extracted fields (`typeof rawData.name === 'string' ? rawData.name : ''`) before passing them to validation or sanitization functions. Always explicitly check for returned `error` properties from third-party SDK calls.
