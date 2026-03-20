## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-05-24 - [DoS via JSON Payload Type Injection]
**Vulnerability:** API routes validating JSON payloads (e.g. `request.json()`) allowed non-string types (like Arrays or Objects) to bypass length/format validations and cause unhandled `TypeError` exceptions during sanitization (e.g., `input.replace is not a function`). This could lead to a Denial of Service.
**Learning:** Checking for `typeof data.field === 'string'` is critical before performing string manipulations or validations. Attackers can inject nested arrays or objects into raw JSON payloads.
**Prevention:** Always implement strict explicit type checking (`typeof field === 'string'`) as a guard clause before applying validations, sanitizations, or manipulating user-provided data from a parsed JSON payload.
