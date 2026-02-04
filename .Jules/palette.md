## 2026-01-20 - Broken Details/Summary Pattern
**Learning:** Using `preventDefault()` on a `<summary>` click handler without controlling the `open` attribute of the parent `<details>` element causes the content to remain hidden by the browser, even if React renders the children.
**Action:** Always prefer a controlled `div` + `button` (with `aria-expanded` and `aria-controls`) for simple disclosure widgets in React, or ensure the `open` prop is strictly controlled on the `<details>` element.

## 2026-01-20 - Invisible Progress Indicators
**Learning:** Visual-only progress bars (using divs and colors) are completely invisible to screen readers, leaving users disoriented in multi-step wizards.
**Action:** Always wrap progress steps in `role="progressbar"` or provide a visually hidden text summary (e.g., "Step 1 of 3") to ensure context is communicated.
