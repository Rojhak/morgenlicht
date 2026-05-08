
## 2024-05-08 - Skip-to-content Pattern
**Learning:** The design system uses a specific Tailwind utility pattern (`sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-emerald-900 focus:text-white`) for visually hidden, keyboard-focusable elements like skip-to-content links to ensure consistency with the app's emerald color scheme and Next.js App Router indexing.
**Action:** Always place skip-to-content links directly inside the `<body>` tag of `layout.tsx` targeting `#main-content`, and use this exact Tailwind pattern for focusable hidden links.
