## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2026-05-13 - Explicit state and focus on toggleable buttons
**Learning:** Custom UI buttons acting as toggles or checkboxes must explicitly convey their state and remain navigable. When using `<button>` elements to represent toggleable filters (like in the search page), lacking `aria-pressed` prevents screen readers from announcing their active state, and removing default outlines without providing a `focus-visible` alternative leaves keyboard users without visual tracking.
**Action:** Always apply `aria-pressed` bound to the component's state variable (e.g., `aria-pressed={isActive}`) on toggle buttons, and ensure proper `focus-visible` styling is included.
