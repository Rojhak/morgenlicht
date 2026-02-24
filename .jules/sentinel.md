# Sentinel's Journal

## 2026-02-24 - HTML Injection in Email
**Vulnerability:** User input (name, phone) was directly interpolated into the HTML body of email notifications sent via Resend.
**Learning:** Email clients render HTML, so unescaped input allows attackers to inject malicious HTML, links, or scripts (HTML/Email Injection). Even if the email is internal, it can be a vector for phishing or XSS against staff.
**Prevention:** Always sanitize user input before using it in HTML contexts using `sanitizeInput` (HTML entity encoding) and sanitize subject lines with `sanitizeForSubject` (removing newlines) to prevent header injection.
