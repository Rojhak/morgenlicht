## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.
## 2024-05-24 - API Route Silent Failure with Resend SDK v6+
**Vulnerability:** The Resend API call `resend.emails.send` was missing error handling because the Resend v6 SDK no longer throws exceptions on failure, returning an `{ error }` object instead. If this went unnoticed, the endpoint would respond with HTTP 200, but fail silently to send emails.
**Learning:** SDK updates can change error handling paradigms. In serverless functions, assuming exceptions for failure is dangerous when SDKs adopt object returns (Go-style error handling).
**Prevention:** Always check the explicit response objects returned from third-party SDKs, especially when handling external APIs in Next.js routes. Ensure they are correctly evaluated to prevent silent failures.

## 2024-05-24 - Payload Type Injection Bypass in Validation
**Vulnerability:** The `validateInquiry` function in `web/src/lib/security.ts` did not enforce type checking on the optional properties `pflegegrad` and `message` before applying length checks or string operations.
**Learning:** In JavaScript/TypeScript, payloads parsed with `request.json()` can contain arrays or objects. If an attacker injects an array `["A", "B"]`, the `length` property might pass validation or trigger unhandled `TypeError` exceptions during sanitization, bypassing security checks and causing DoS.
**Prevention:** Always explicitly check `typeof property === 'string'` before performing any operations or length checks, even on optional inputs.
