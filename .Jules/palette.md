## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.

## 2026-05-26 - Missing Keyboard Focus Visibility in Global Navigation
**Learning:** The primary navigation (`Navbar.tsx`) lacks explicit focus indicators, relying purely on default browser outlines or hover states which are inaccessible for keyboard-only users.
**Action:** Always apply `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color] focus-visible:ring-offset-2` (and a `rounded` class if not already present) to all interactive navigation elements (`Link`, `button`) to ensure WCAG compliant focus indicators.
