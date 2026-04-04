## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.
## 2025-02-19 - Type Mismatch Payload DoS
**Vulnerability:** Input fields lacking explicit type checks allowed arrays and objects to bypass string length restrictions in the validation sequence, causing fatal `TypeError`s when string prototype methods were later called on the parsed payload resulting in an unhandled 500 error that circumvented standard validation limits.
**Learning:** Checking for property existence and applying custom validation criteria (like length checks) is not sufficient; standard JSON body payloads can contain objects or arrays under property keys expected to be strings.
**Prevention:** Always implement strict defensive type checks (e.g., `typeof input !== 'string'`) as the absolute first step in input validation / sanitization pipelines, and ensure utility methods safely ignore non-conforming types.
