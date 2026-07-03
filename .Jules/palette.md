## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2025-07-03 - Unified focus indicators on layout components
**Learning:** Core layout navigation components (like `Navbar`) often omit `focus-visible` styling on standard `Link` and interactive elements when custom active or hover states are defined, breaking WCAG keyboard navigation compliance.
**Action:** Always apply explicit `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E4A] focus-visible:ring-offset-2 rounded-lg` utility classes to top-level interactive layout elements to ensure consistent keyboard focus visibility across the entire application shell.
