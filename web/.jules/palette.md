
## 2024-04-08 - Focus Management for Input Clear Buttons
**Learning:** When users click a clear button inside a search input (like the "Suche löschen" button), the focus is often lost because the button itself is removed from the DOM. This breaks keyboard navigation for screen reader users and power users who expect to be able to immediately start typing a new query.
**Action:** When implementing clear buttons for text inputs, explicitly return focus to the text input using a React `useRef` upon clearing to ensure proper keyboard accessibility and a seamless user experience.
