## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2026-05-14 - Active State Context in Navigation Links
**Learning:** Adding visual active states (bold, colored text) to navigation links without an underlying semantic `aria-current="page"` attribute leaves screen reader users without crucial navigational context regarding their current location in the application.
**Action:** When implementing or updating active visual states for navigation links, always ensure the `aria-current="page"` attribute is conditionally applied alongside the styling using the current route.
