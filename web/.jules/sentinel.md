## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2026-03-27 - [Strict Type Validation for Next.js API Payloads]
**Vulnerability:** API routes handling JSON payloads (`request.json()`) assumed string types for fields like `name` or `message`, allowing an attacker to inject arrays or objects to bypass simple truthy checks and cause unhandled TypeErrors or Application DoS when string methods (like `.replace()`) were called.
**Learning:** TypeScript type definitions (`interface InquiryData`) provide zero runtime guarantees for external inputs. Attackers control the shape of the raw JSON body.
**Prevention:** Always implement strict runtime `typeof` checks for primitive types on data sourced from API payloads before passing them to validation or sanitization functions.

## 2026-03-27 - [Resend SDK Error Handling Pattern]
**Vulnerability:** The Resend SDK (`v6.0.0+`) returns an `{ error, data }` object rather than throwing exceptions on API failures (like invalid API keys), leading to silent failures where the application logs success but the email was not sent.
**Learning:** Modern SDKs are shifting towards Go-style error returns instead of throwing exceptions. `try/catch` blocks are insufficient for catching business logic or API errors from these libraries.
**Prevention:** Always explicitly check for the `error` property on the response object returned by `resend.emails.send()` and handle it securely, ensuring internal error messages are not leaked to the client.
