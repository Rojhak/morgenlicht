## 2025-05-18 - Email Header Injection Prevention
**Vulnerability:** Email subject lines are vulnerable to Header Injection (CRLF) if newlines are not stripped from user input.
**Learning:** While some email providers handle this, explicitly stripping newlines from user input used in email headers (like Subject) is a critical defense-in-depth measure.
**Prevention:** Use a dedicated `sanitizeForSubject` function that removes `\r` and `\n` characters before using input in email headers.
