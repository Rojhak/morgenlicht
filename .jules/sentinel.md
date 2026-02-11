# Sentinel's Journal

## 2025-02-24 - HTML Injection in Email Templates
**Vulnerability:** The inquiry API route (`web/src/app/api/inquiry/route.ts`) was injecting unsanitized user input directly into the HTML body of emails sent via Resend.
**Learning:** Email sending libraries like `resend` typically treat the `html` field as raw HTML and do not perform automatic sanitization. This allows attackers to inject malicious HTML (phishing links, fake forms) or scripts (if the email client executes them).
**Prevention:** Always sanitize user input using a dedicated utility (like `sanitizeInput` in `web/src/lib/security.ts`) before interpolating it into HTML strings. Validate input strictly on the server side.
