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

## 2025-03-01 - Accordion ARIA Links
**Learning:** Shared UI Accordion components lack proper `aria-controls` and `aria-labelledby` linkages between the toggle button and the expandable content. Without `role="region"`, screen reader users might miss changes in state.
**Action:** Always link Accordion toggles to their respective content areas using `useId()` for auto-generated unique IDs in React. Provide `role="region"` for the content blocks.
