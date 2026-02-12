# Sentinel Journal 🛡️

## 2024-05-22 - Stored XSS via Email Injection
**Vulnerability:** User input (`name`, `phone`, `pflegegrad`) was directly interpolated into HTML emails without sanitization, allowing potential XSS if an attacker submits malicious scripts.
**Learning:** Email clients vary in XSS protection, but relying on client-side sanitization is insufficient. Server-side validation and output encoding are critical for all user-generated content, especially when rendered as HTML.
**Prevention:** Always sanitize user input before using it in HTML contexts. Use established libraries or strict escaping functions for HTML entities (`<`, `>`, `&`, `"`, `'`).
