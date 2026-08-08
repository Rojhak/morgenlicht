## 2024-03-06 - [Form Validation UX]
**Learning:** The contact form had custom validation logic and visual error states (red borders) but lacked explicit inline error messages and required field indicators (`*`), making it confusing for users to understand what went wrong and which fields were mandatory. It also lacked the necessary ARIA attributes linking the error states to the inputs.
**Action:** When implementing custom form validation, always pair visual cues (like borders) with explicit inline error text (`role="alert"`), clearly mark required fields, and use `aria-invalid` and `aria-describedby` to ensure screen readers announce the validation state and error message when the input is focused.

## 2024-06-05 - [Accordion ARIA `useId` Linkage]
**Learning:** The shared `Accordion` component in `web/src/app/components/ui/Accordion.tsx` lacked proper ARIA attributes (`aria-controls`, `aria-labelledby`, and `role="region"`). Since accordion items are repeated, generating static IDs is problematic.
**Action:** When creating reusable components with ARIA linkage (like Accordions or Tabs), use React's `useId()` hook to generate unique IDs for the interactive element (header button) and its controlled content panel, then apply `aria-controls` to the button and `aria-labelledby` to the panel.

## 2024-07-20 - [Keyboard Accessibility in Global Navigation]
**Learning:** The primary navigation elements (Navbar links, logo, mobile menu toggle) lacked clear visual focus indicators, making it difficult for keyboard users (tabbing) to know which link was currently active.
**Action:** Always apply explicit focus visibility states (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color] focus-visible:ring-offset-2 rounded-lg`) to all interactive elements, especially in high-traffic global components like headers and footers, to ensure robust keyboard accessibility.
