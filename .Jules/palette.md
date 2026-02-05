## 2025-05-15 - Accessible Details Accordion
**Learning:** React's `onClick` + `preventDefault` on `<summary>` breaks native `<details>` keyboard accessibility.
**Action:** Use `onToggle` event on `<details>` to sync React state (e.g., for icon rotation) while preserving native browser behavior. Use `group` and `group-open:` Tailwind classes for simpler styling.
