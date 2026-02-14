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

## 2026-02-14 - Interactive Component Relationships
**Learning:** Interactive components like Accordions require explicit relationship attributes (`aria-controls`, `aria-labelledby`) beyond just state (`aria-expanded`) to be fully navigable by screen readers.
**Action:** Use `useId` to generate unique IDs for triggers and content panels, and link them with `aria-controls` and `aria-labelledby` in all disclosure components.
