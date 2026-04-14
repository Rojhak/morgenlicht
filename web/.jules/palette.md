## 2026-04-14 - Search Input Focus Management
**Learning:** When users click a 'clear search' button, the input loses focus and the button disappears, leaving the user without keyboard focus. This breaks keyboard navigation and slows down users who want to immediately type a new query.
**Action:** When implementing clearable inputs, always use a `useRef` to programmatically return focus to the input element (e.g., `inputRef.current?.focus()`) immediately after clearing the value.
