## 2025-02-12 - Fix HTML Injection in Email
**Vulnerability:** User input was directly interpolated into an HTML email body in `api/inquiry`, allowing for HTML injection.
**Learning:** Even internal API routes that send emails need strict output encoding/sanitization, as email clients render HTML.
**Prevention:** Use a sanitization library or function (like `escapeHtml`) before inserting user-provided strings into HTML templates, or use a templating engine that auto-escapes.
