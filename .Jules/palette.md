## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.

## 2026-05-30 - Toggleable Filter Button Accessibility
**Learning:** When using `<button>` elements to represent custom toggleable filters or checkboxes, they lack native state announcements. Keyboard users and screen readers may not know their active status.
**Action:** Always apply the `aria-pressed={isActive}` attribute to ensure screen readers reliably announce their active state, and apply `focus-visible` utility classes for keyboard focus.
