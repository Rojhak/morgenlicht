
## 2024-03-16 - Add Skip to Main Content Link
**Learning:** For a Next.js application, implementing a functional skip-to-content link requires not just adding the visually hidden anchor link (`sr-only focus:not-sr-only`), but also properly configuring the target `<main>` element with `tabIndex={-1}` and removing its default focus outline (`focus:outline-none`) to ensure a smooth keyboard navigation experience without visual jank.
**Action:** Always verify the target element of skip links has the appropriate `tabIndex` and `outline` styles applied when implementing global keyboard navigation improvements.
