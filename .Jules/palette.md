## 2026-05-12 - Explicit Label for Select Dropdowns
**Learning:** In the search interface, using a plain `<span>` next to a `<select>` dropdown means screen readers may not announce the field's purpose when focused, and it reduces the clickable target area.
**Action:** Always pair `<select>` dropdowns explicitly with a `<label>` using matching `id` and `htmlFor` attributes.
## 2025-05-13 - Missing focus-visible states on custom search inputs
**Learning:** When removing default borders from inputs (`border-0 outline-none`) inside custom wrappers like `GlassCard`, the native focus ring is lost. Keyboard users lose track of focus.
**Action:** Always apply `focus-within:ring-*` to the parent wrapper of borderless inputs to maintain WCAG compliant focus indicators.
## 2025-05-14 - Navigation Accessibility in Next.js
**Learning:** Next.js `<Link>` components do not automatically indicate the active route to screen readers. Sighted users rely on visual cues, but screen readers need explicit semantic markup.
**Action:** Always use `usePathname` from `next/navigation` to dynamically apply `aria-current="page"` to the active navigation link.
