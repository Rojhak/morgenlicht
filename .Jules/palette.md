## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2026-05-13 - Toggle Buttons Require ARIA State
**Learning:** In custom toggle filter implementations (like the "Verfügbarkeit" and "Standort" buttons), failing to provide an `aria-pressed` attribute prevents screen readers from understanding that the buttons act as active/inactive switches, rather than standard action buttons.
**Action:** Always apply `aria-pressed={isActive}` alongside visual active styling for toggleable filter buttons to ensure parity between visual and semantic states.
