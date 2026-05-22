## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.

## 2026-05-22 - Filter Buttons Missing Toggle State and Focus Ring
**Learning:** Custom toggle buttons acting as checkboxes (like the availability and location filters) fail to communicate their state to screen readers if they lack `aria-pressed` and omit focus rings, rendering them inaccessible to keyboard users.
**Action:** Always add `aria-pressed={isActive}` and explicit `focus-visible:ring-*` classes to any custom toggleable buttons.
