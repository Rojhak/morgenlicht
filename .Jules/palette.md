## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2026-05-13 - Toggle Buttons Require Explicit State Attributes
**Learning:** Custom UI components that function as toggles or checkboxes but are implemented using native `<button>` elements (e.g., search filters or yes/no selections) fail to convey their active state to screen readers by default.
**Action:** Always apply the `aria-pressed={isActive}` attribute to `<button>` elements that represent a two-state toggle to ensure screen readers announce whether the toggle is currently pressed or unpressed.
