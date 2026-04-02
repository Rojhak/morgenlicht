## 2024-04-02 - Type Mismatch and Error Log Leakage in Inquiry Handler
**Vulnerability:** The application was vulnerable to runtime TypeError crashes by processing inputs without sufficient type checking (e.g. users bypassing length checks or injecting non-strings). Furthermore, server logs leaked internal error object stack traces. Also, Resend SDK does not throw exceptions upon API errors, leading to potentially silent failures.
**Learning:** Type checking must accompany logic like `.length` and `.includes()` because the runtime types of parsed JSON request bodies cannot be implicitly trusted based solely on TypeScript interfaces. External SDKs like Resend may not behave strictly synchronously by throwing; they might return an `error` object which must be checked. Logging unhandled exceptions directly leaks internal structural details.
**Prevention:** Apply explicit type checks (`typeof data.field === 'string'`) before operating on inputs. Treat error objects defensively in backend route catch blocks, sanitizing them to capture `error.message` instead of raw error dumps. Always check the API documentation for SDK error-handling patterns.

## 2024-04-02 - (Restored) Memory Check Warning
**Note**: The previous file content was mistakenly overwritten. Moving forward, I will ensure `>>` is used instead of `>` when adding to the `.jules/sentinel.md` journal.
