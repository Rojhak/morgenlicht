## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2025-04-11 - [Defense in Depth: Runtime Type Checking on Input Sanitizers]
**Vulnerability:** Sanitization utility functions like `sanitizeInput` implicitly assume string inputs but are often passed `any` types or poorly typed payloads (e.g., from `request.json()`). This can lead to runtime TypeErrors (e.g., `input.replace is not a function`) when arrays or objects are injected, bypassing validation or causing unhandled exceptions.
**Learning:** Even with strict Typescript typings, external inputs to utility functions can deviate from the expected type. Relying solely on typescript for security sanitization isn't enough; runtime type assertions act as a necessary defense-in-depth layer against payload manipulation.
**Prevention:** Sanitization utility functions must gracefully handle non-string inputs. Incorporating `if (!input || typeof input !== 'string') return ''` prevents runtime exceptions and strengthens the overall resilience against unexpected input structures.
