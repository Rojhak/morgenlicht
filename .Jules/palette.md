## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2026-05-14 - Active State and Keyboard Focus in Navigation
**Learning:** Missing `aria-current="page"` on active navigation links prevents screen readers from announcing the current page context. Additionally, omitting explicit `focus-visible` rings on interactive elements makes keyboard navigation difficult.
**Action:** Always use `usePathname` to conditionally apply `aria-current="page"` to active navigation links. Always apply explicit `focus-visible:ring-2 focus-visible:ring-[#134E4A] focus-visible:ring-offset-2 rounded-lg` to all navigation `<Link>` and `<button>` elements.
