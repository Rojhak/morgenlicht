## 2024-05-23 - HTML Injection in Email Templates
**Vulnerability:** User input from API requests was directly interpolated into HTML email templates, creating a risk of HTML injection/XSS.
**Learning:** Even internal API routes need strict input sanitization. `request.json()` returns `any`, so type checking (e.g. `typeof === 'string'`) is critical before using string methods to prevent runtime crashes (DoS).
**Prevention:** Use a dedicated `escapeHtml` utility for all user input in emails. Enforce type checks in validation logic.
