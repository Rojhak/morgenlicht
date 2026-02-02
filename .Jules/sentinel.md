## 2024-05-22 - HTML Injection in Email Templates
**Vulnerability:** User inputs (`name`, `phone`, `pflegegrad`) in the inquiry API were directly interpolated into the HTML email body without sanitization, allowing for potential HTML injection in staff emails.
**Learning:** Inputs not rendered in the browser (e.g., emails) are often overlooked for XSS/Injection but can still be dangerous depending on the email client's rendering capabilities.
**Prevention:** Always escape user input before interpolation into any HTML string, regardless of where it is rendered.
