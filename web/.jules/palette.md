## 2024-03-26 - Add proper ARIA attributes to multi-step wizard progress bar
**Learning:** Purely visual step indicators (like the pill-shaped bars in the CareFinder wizard) lack context for screen readers. Using `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` dynamically updates the current step status for assistive technologies.
**Action:** Always add `role="progressbar"` to custom visual progress indicators and explicitly hide purely decorative child elements using `aria-hidden="true"`.
