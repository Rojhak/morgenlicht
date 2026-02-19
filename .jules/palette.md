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

## 2026-02-19 - Async Button Feedback Pattern
**Learning:** Async actions (e.g., form submissions) require immediate, accessible feedback to prevent user uncertainty.
**Action:** Use `isLoading` prop on buttons to trigger a visual spinner, disable interaction, add `aria-busy="true"`, and update button text (e.g., "Wird gesendet...") consistently across the app.
