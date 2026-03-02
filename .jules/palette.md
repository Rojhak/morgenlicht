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

## 2025-02-13 - Icon-only Mobile Menu Toggles
**Learning:** The mobile navigation menu toggle button (`Menu` / `X` icons) lacked context for screen readers as it did not have an `aria-label` or state indication.
**Action:** Ensure all icon-only buttons, especially layout toggles, include dynamic `aria-label` (e.g., "Menü öffnen"/"Menü schließen"), `aria-expanded` reflecting their state, and `aria-controls` linked to the target container's ID.
