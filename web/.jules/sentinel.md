## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-05-24 - [Validation Bypass & Silent Failure Fixes]
**Vulnerability:** Found a lack of explicit type checking in form validation logic where injected arrays/objects could bypass checks and crash the app, and silent failures where email delivery issues were not securely reported to users.
**Learning:** Explicit `typeof` checks for strings are necessary before operations like length checking to prevent validation bypass via arrays or objects. Always handle SDK response objects explicitly (like Resend's `{ error }`) instead of relying solely on thrown exceptions.
**Prevention:** Incorporate explicit primitive type checks in server-side validation logic and routinely review third-party SDK error handling behaviors to prevent silent failures.
