## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.

## 2025-05-14 - Missing focus-visible states on global navigation elements
**Learning:** Global navigation elements (like header links, logo, and mobile menu toggles) are the first items a keyboard user interacts with. Relying on default browser focus rings creates an inconsistent and sometimes invisible tab experience, especially against custom backgrounds or layouts.
**Action:** Universally apply `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E4A] focus-visible:ring-offset-2 rounded-lg` to all interactive navigation elements to ensure immediate, high-contrast feedback for keyboard navigators.
