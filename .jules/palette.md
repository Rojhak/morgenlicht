# Palette's Journal

This journal documents critical UX and accessibility learnings for the project.

## Format
`## YYYY-MM-DD - [Title]`
`**Learning:** [UX/a11y insight]`
`**Action:** [How to apply next time]`

---

## 2025-02-12 - Form Error Accessibility
**Learning:** Contact forms lacked explicit error message association (`aria-describedby`) and invalid state (`aria-invalid`), making error feedback difficult for screen reader users.
**Action:** Ensure all form inputs with validation have corresponding error message IDs linked via `aria-describedby` and reflect validation state with `aria-invalid`. Visually indicate required fields in labels.

## 2025-10-26 - Async Button Feedback
**Learning:** Reusable button components (`GlassButton`) should encapsulate loading states (spinner + `aria-busy`) to ensure consistent feedback for async actions across the application without ad-hoc implementations.
**Action:** When implementing async actions, enhance the base button component with an `isLoading` prop rather than manually managing loading UI in each usage.
