
## 2024-06-25 - [Search Input Clear Button Accessibility]
**Learning:** When using a clear button (`X`) within a search input component to clear the current search query, keyboard users lose focus context if the clear button disappears without shifting focus back to an appropriate element.
**Action:** When creating clear buttons for search inputs or forms, always explicitly return focus to the text input using a React `useRef` upon clearing to ensure proper keyboard accessibility and a seamless typing flow.
