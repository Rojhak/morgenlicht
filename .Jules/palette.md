## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2026-05-14 - ARIA Pressed and Focus on Custom Toggle Buttons
**Learning:** Custom filter toggle buttons representing checkboxes or states often miss `aria-pressed` and native focus rings when styled with custom classes, making them inaccessible to screen readers and keyboard users.
**Action:** Always apply `aria-pressed` bound to the state variable and add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E4A] focus-visible:ring-offset-2` to maintain WCAG compliant states.
