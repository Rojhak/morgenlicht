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

## 2025-05-21 - Accordion Accessibility
**Learning:** React `useId()` generates IDs with colons (e.g., `:R...:`) which break CSS selectors in tests unless escaped or selected via attribute selectors.
**Action:** Use `[id="..."]` attribute selectors instead of `#...` in Playwright tests when dealing with React-generated IDs, and ensure Accordion headers (`aria-expanded`) and panels (`role="region"`) are correctly linked via `aria-controls` and `aria-labelledby`.
