## 2026-01-13 - Focus Management in Wizards
**Learning:** When implementing focus management for step-based wizards, ensure focus is NOT applied on initial mount. This prevents unexpected scrolling if the wizard is below the fold. Using `useRef` to track first render is a robust pattern.
**Action:** Use `const isFirstRender = useRef(true)` guard clause in `useEffect` when managing focus programmatically.

## 2026-01-13 - Native Details Toggle
**Learning:** Native `<details>`/`<summary>` elements provide robust accessibility out of the box. Styling can be fully controlled with Tailwind's `group` and `group-open` modifiers, eliminating the need for React state to toggle visibility.
**Action:** Prefer native `<details>` over custom accordion state for simple expand/collapse interactions.
