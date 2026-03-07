## 2024-03-06 - [Form Validation UX]
**Learning:** The contact form had custom validation logic and visual error states (red borders) but lacked explicit inline error messages and required field indicators (`*`), making it confusing for users to understand what went wrong and which fields were mandatory. It also lacked the necessary ARIA attributes linking the error states to the inputs.
**Action:** When implementing custom form validation, always pair visual cues (like borders) with explicit inline error text (`role="alert"`), clearly mark required fields, and use `aria-invalid` and `aria-describedby` to ensure screen readers announce the validation state and error message when the input is focused.

## 2024-03-07 - Dynamic IDs for Reusable Accordions
**Learning:** Reusable components like Accordions need dynamic IDs via `useId` to avoid collisions when multiple instances are rendered on the same page. Without this, `aria-controls` and `aria-labelledby` fail to uniquely associate the button trigger with its content panel.
**Action:** Always use React's `useId` hook for creating unique identifiers linking triggers and content panels in reusable disclosure widgets or modals.
