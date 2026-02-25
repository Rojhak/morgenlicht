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

## 2025-10-26 - Accordion Accessibility
**Learning:** Reusable accordion components using manual ID generation or omitting ARIA relationships (`aria-controls`, `aria-labelledby`) break the semantic connection between trigger and content for assistive technologies.
**Action:** Use React's `useId` hook to generate unique, stable IDs for component instances and explicitly link triggers to content panels with `aria-controls` and `aria-labelledby`, while ensuring proper `role="region"` usage.
