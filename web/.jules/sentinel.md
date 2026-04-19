## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-06-12 - [In-memory Rate Limiting Pitfalls in Serverless Next.js]
**Vulnerability:** Implementing in-memory rate limiting (using Maps) mapped to the `x-forwarded-for` header in serverless Next.js applications introduces critical Denial of Service (DoS) and memory leak vulnerabilities.
**Learning:** Raw `x-forwarded-for` headers can be trivially spoofed by attackers to bypass rate limits or group legitimate users into a single block bucket. Unbounded `Map` usage without TTL/eviction and top-level `setInterval` without `.unref()` cause memory exhaustion and block graceful shutdowns.
**Prevention:** Avoid custom in-memory rate limiting in Next.js APIs. Use established infrastructure-level rate limiting tools (like Vercel KV with `@upstash/ratelimit`) or edge-middleware solutions, and always validate IP addresses against a trusted proxy configuration.
