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

## 2025-02-19 - Accessible Contact Form Enhancements
**Learning:** Found that the primary contact form lacked inline error feedback (`role="alert"`), `aria-invalid` bindings, explicit required field indicators, and `aria-busy` along with a visual spinner for async submission. These missing attributes degrade screen reader experience and general UX during form interactions.
**Action:** When implementing or updating forms, always ensure validation errors are linked to inputs via `aria-describedby` and `aria-invalid`, visually indicate required fields while hiding the indicator from screen readers (`aria-hidden="true"`), and provide an accessible async loading state (`aria-busy` and spinner) for submit buttons.
