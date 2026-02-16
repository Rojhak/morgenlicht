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

## 2025-05-23 - Accordion Accessibility Pattern
**Learning:** Custom accordion implementations (like in FAQSection) using only CSS transitions for `max-height` leave content in the accessibility tree when collapsed, confusing screen reader users. Also, missing semantic heading structure for questions hampers navigation.
**Action:** Ensure collapsed content uses `invisible` or `hidden` state alongside transitions. Use `useId` for unique ID generation to link buttons (`aria-controls`) and content (`id`). Wrap question triggers in headings (e.g., `<h3>`) for proper document structure.
