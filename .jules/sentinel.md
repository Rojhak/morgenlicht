## 2026-02-04 - HTML Injection in Email Templates
**Vulnerability:** User input (`name`, `phone`, `pflegegrad`) was directly interpolated into the email HTML body without escaping. This could allow attackers to inject malicious HTML or distort the email layout.
**Learning:** `resend.emails.send` does not automatically escape variables in the `html` string.
**Prevention:** Always use `escapeHtml` or `sanitizeInput` from `@/lib/security` when interpolating user data into HTML strings.
