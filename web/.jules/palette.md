## 2024-04-05 - Added Accessible Progressbar to CareFinder Component
**Learning:** Visual progress bars in wizard components (like CareFinder) require explicit ARIA attributes `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-label` to be communicated properly to screen readers. Purely decorative elements indicating the progress should be hidden using `aria-hidden="true"`.
**Action:** Always ensure any custom UI element displaying progress or steps includes the standard `progressbar` role with correct value tracking attributes for maximum accessibility.
