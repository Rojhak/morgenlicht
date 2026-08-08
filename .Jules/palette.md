## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2026-05-13 - Missing aria-pressed state on custom checkboxes/filters
**Learning:** Using generic HTML elements (`<div>` with `border-2`) to visually represent checkbox states in custom filter lists (like in the Search page) fails to communicate their checked state to screen readers.
**Action:** When implementing custom toggleable elements (like filter buttons), always ensure the root interactive element (e.g., `<button>`) has an `aria-pressed` attribute bound to the component's state to properly inform assistive technologies.
