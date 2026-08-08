## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.

## 2025-05-21 - Custom toggle buttons require aria-pressed
**Learning:** When using `<button>` elements to represent toggleable filters (like checkboxes), screen readers won't announce their active state without `aria-pressed`.
**Action:** Always add `aria-pressed={isActive}` to custom toggle buttons.
