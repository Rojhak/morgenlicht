## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2026-05-13 - Missing aria-pressed on Custom Toggle Buttons
**Learning:** Using generic `<button>` elements to simulate stateful toggles (like checkboxes or chips) without `aria-pressed` prevents screen readers from announcing their current active/inactive status, leading to confusion for non-visual users.
**Action:** Always apply the `aria-pressed` attribute to custom toggle buttons, dynamically binding it to the component's underlying state.
