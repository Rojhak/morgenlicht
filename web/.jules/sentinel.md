## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-05-24 - [Silent Failure in Resend SDK Email Delivery]
**Vulnerability:** The contact form API (`web/src/app/api/inquiry/route.ts`) was failing to handle errors from `resend.emails.send()`. In Resend SDK v6, failures (like invalid API keys) return an `{ error }` object instead of throwing an exception. Because this was unhandled, the API returned `{ success: true }` to users even when email delivery failed, causing lost inquiries and a false sense of security.
**Learning:** SDKs that use the "Result object" pattern (returning data or error properties) can lead to silent failures if errors are not explicitly checked. Relying on `try/catch` blocks is insufficient for these libraries.
**Prevention:** Always check the return object for errors when using libraries like Resend. Ensure that error states are properly logged server-side and trigger a 500 status code to the client rather than assuming success.
