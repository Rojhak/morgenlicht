## 2025-03-01 - Missing Input Validation on Contact Form
**Vulnerability:** The API endpoint `/api/inquiry/route.ts` lacks proper input validation for `name`, `phone`, and `pflegegrad`. Although length constraints and allowed characters might be mentioned in documentation, they are not enforced on the backend.
**Learning:** Next.js API routes need robust manual validation before processing inputs to prevent injection attacks and ensure data integrity.
**Prevention:** Implement validation utilities (like `security.ts` functions) and use them to validate all incoming data to API endpoints.
