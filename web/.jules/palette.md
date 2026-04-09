## 2024-04-09 - Focus Management on Clear Buttons
**Learning:** When users click a "clear" button inside a search or text input, they often expect to continue typing immediately. Without explicit focus management, clicking the button removes focus from the input, forcing the user to manually click or tab back into it, which degrades keyboard accessibility and the overall experience.
**Action:** Always attach a `useRef` to text inputs and explicitly call `.focus()` on the ref in the `onClick` handler of the clear button to return focus to the input immediately after clearing it.
