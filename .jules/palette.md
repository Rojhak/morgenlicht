## 2024-03-06 - [Form Validation UX]
**Learning:** The contact form had custom validation logic and visual error states (red borders) but lacked explicit inline error messages and required field indicators (`*`), making it confusing for users to understand what went wrong and which fields were mandatory. It also lacked the necessary ARIA attributes linking the error states to the inputs.
**Action:** When implementing custom form validation, always pair visual cues (like borders) with explicit inline error text (`role="alert"`), clearly mark required fields, and use `aria-invalid` and `aria-describedby` to ensure screen readers announce the validation state and error message when the input is focused.

## 2024-06-05 - [Accordion ARIA `useId` Linkage]
**Learning:** The shared `Accordion` component in `web/src/app/components/ui/Accordion.tsx` lacked proper ARIA attributes (`aria-controls`, `aria-labelledby`, and `role="region"`). Since accordion items are repeated, generating static IDs is problematic.
**Action:** When creating reusable components with ARIA linkage (like Accordions or Tabs), use React's `useId()` hook to generate unique IDs for the interactive element (header button) and its controlled content panel, then apply `aria-controls` to the button and `aria-labelledby` to the panel.

## 2024-03-29 - [Explicit Character Limits for Long-Form Inputs]
**Learning:** The contact form's `message` field lacked a visual character counter. While a 2000-character limit was enforced backend-side, users had no way of knowing this limit existed until submission potentially failed, leading to frustration if a long message was lost or silently rejected.
**Action:** Always pair backend character limits with an explicit, visual character counter on the frontend (e.g., `[current] / [max]`). The counter should use `aria-live="polite"` and `aria-atomic="true"` to announce updates to screen readers, and the submit button should be disabled if the limit is exceeded to prevent unnecessary API calls and confusing errors.
