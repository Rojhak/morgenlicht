# Sentinel Journal 🛡️

This journal records critical security learnings, vulnerabilities, and patterns discovered in the codebase.

## Format
`## YYYY-MM-DD - [Title]`
`**Vulnerability:** [What you found]`
`**Learning:** [Why it existed]`
`**Prevention:** [How to avoid next time]`

---

## 2024-05-22 - Initial Scan
**Vulnerability:** Potential HTML Injection in Email Service
**Learning:** User inputs from the contact form were directly interpolated into the email HTML body without sanitization. While modern email clients have some protections, this is a bad practice.
**Prevention:** Always sanitize user input before rendering it to HTML, even for emails. Created `web/src/lib/security.ts` with `sanitizeHtml` helper.
