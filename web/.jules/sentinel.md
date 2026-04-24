## 2024-05-24 - [Next.js Critical DoS and SSRF Vulnerabilities]
**Vulnerability:** Found multiple vulnerabilities in `next@15.1.9` including Denial of Service via server components, SSRF due to middleware redirect handling, and Cache Key Confusion.
**Learning:** Outdated frameworks, especially in SSR/SSG apps like Next.js, can expose critical infrastructure vulnerabilities (like DoS and SSRF) that aren't specific to application logic but rather framework behavior.
**Prevention:** Regularly audit (`pnpm audit`) and update core framework dependencies (e.g., Next.js) to patched versions, especially when new minor/patch versions are available.

## 2024-04-24 - [Type Confusion / DoS via Mass Assignment in API Routes]
**Vulnerability:** Next.js `request.json()` parses payload arrays for optional string fields (like `message: ["bad"]`). If validation fails to strictly check `typeof data.message === 'string'` and incorrectly skips validation (e.g. `if (data.message && typeof data.message === 'string' && data.message.length > 2000)` doesn't throw if it is an array), downstream string operations like `.replace()` in sanitization functions will crash (`TypeError: input.replace is not a function`), causing an unhandled rejection, possible trace leakage, and a DoS vector for the endpoint.
**Learning:** In TypeScript, interfaces do not exist at runtime. Even with mass assignment prevention (`data = { message: rawData?.message }`), the assigned value can still be of the wrong type (like an Array or Object) if provided via JSON.
**Prevention:** Always explicitly check `typeof value === 'string'` for all expected string inputs before accepting them or passing them to string sanitization methods, even for optional fields (check `!== undefined` first).
