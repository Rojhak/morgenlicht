## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2025-05-14 - Keyboard focus indicators on custom toggle buttons
**Learning:** When using `<button>` elements to create custom toggleable filters (like the "Verfügbarkeit" and "Standort" filters in the search interface), applying default Tailwind borders or background colors without explicit focus states hides the native focus ring, making the interface completely inaccessible for keyboard users. They also need `aria-pressed` to announce their active state to screen readers.
**Action:** Always add explicit keyboard focus visibility (e.g., `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E4A] focus-visible:ring-offset-2`) and the `aria-pressed={isActive}` attribute to all custom toggle buttons in the design system.
