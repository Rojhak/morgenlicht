## 2024-05-22 - Unsafe API Input Handling
**Vulnerability:** The inquiry API route (`/api/inquiry`) accepted raw JSON input and injected it directly into an HTML email body without validation or sanitization, creating a Stored XSS/HTML Injection vulnerability.
**Learning:** Next.js `request.json()` returns `any` (or `Promise<any>`), which bypasses TypeScript type safety at runtime. Developers trusted the client input to match the interface.
**Prevention:** Always use runtime validation (manual or with libraries like Zod) for API inputs. Explicitly sanitize any user input before rendering it in HTML (emails, pages).
