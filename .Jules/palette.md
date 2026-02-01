## 2026-02-01 - Fixed Broken Details/Summary Pattern
**Learning:** Using `details/summary` with `preventDefault` and React state to control visibility breaks the native `open` attribute behavior. This causes content to remain hidden by user agent styles (display: none) even if React renders the content, because the parent `details` element lacks the `open` attribute.
**Action:** When custom animation or precise state control is needed for an accordion/disclosure, avoid `details` element overrides. Instead, use a controlled `button` + `div` pattern with `aria-expanded` and `aria-controls`.
