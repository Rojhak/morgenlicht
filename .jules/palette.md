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

## 2025-02-12 - Async Action Feedback
**Learning:** Async action buttons (like form submission) lacked visual feedback (spinners) and accessibility attributes (`aria-busy`), leaving users uncertain about the process status.
**Action:** Use `GlassButton` with the `isLoading` prop for all async actions to automatically provide a spinner, disabled state, and `aria-busy` attribute.
