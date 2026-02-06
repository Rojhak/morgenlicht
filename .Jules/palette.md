## 2024-05-22 - Wizard Focus Management
**Learning:** Screen reader users lose context in multi-step wizards if focus isn't managed.
**Action:** Use `useRef` to focus the step container (with `tabIndex={-1}`) whenever the current step index changes.

## 2024-05-22 - Native Details Element
**Learning:** Intercepting `onClick` on `<summary>` to manage state prevents native behavior and can be accessible-hostile.
**Action:** Use `onToggle` event on `<details>` to sync React state with the browser's native open/closed state.
