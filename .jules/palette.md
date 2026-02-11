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

## 2025-02-12 - Wizard Focus Management
**Learning:** React components (like Wizards) that auto-focus on mount can disrupt the user experience if placed below the fold, causing unexpected page jumps. Native `<details>` with `preventDefault` on `<summary>` also breaks accessibility by preventing state toggle while leaving content hidden.
**Action:** Always check `isFirstRender` when implementing focus management in `useEffect` to ensure focus only moves in response to user actions, not initial page load. Replace broken `<details>` implementations with a controlled button/div pattern using `aria-expanded` and `aria-controls`.
