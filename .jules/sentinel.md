## 2024-05-24 - Missing HTML/Header Sanitization in Email Templates
**Vulnerability:** User inputs (name, phone, pflegegrad) were being directly interpolated into an HTML email template and subject line without sanitization, leading to HTML injection and potentially email header injection.
**Learning:** Next.js API routes that accept JSON payloads don't automatically sanitize the inputs. When rendering these inputs into HTML emails, explicit escaping is necessary to prevent injection attacks. Email subjects also need strict filtering (e.g. newline removal) to avoid header injection.
**Prevention:** Always use utility functions (like `sanitizeInput` for HTML bodies and `sanitizeForSubject` for headers) when handling user input before passing it to email services.
