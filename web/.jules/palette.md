## 2026-04-30 - Skip-to-content Link Pattern
**Learning:** Identified a reusable UX pattern for this design system: visually hidden, keyboard-focusable elements should use the Tailwind classes `sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-emerald-900 focus:text-white` to ensure consistency with the app's emerald color scheme and accessibility standards.
**Action:** Applied this pattern to create a skip-to-content link directly inside the `<body>` tag of `layout.tsx` targeting `#main-content`.
