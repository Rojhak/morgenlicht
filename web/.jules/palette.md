# Palette's Journal

## 2024-04-23 - Added Skip-to-Content Link
**Learning:** In Next.js App Router applications, visually hidden accessibility links (e.g., 'skip-to-content') should be placed directly inside the `<body>` tag of `layout.tsx` to guarantee correct indexing at the start of the document for keyboard navigation. We implemented this using the Tailwind utility pattern `sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-emerald-900 focus:text-white` to ensure accessibility and consistency with the app's emerald color scheme.
**Action:** Always verify keyboard navigation index and ensure visually hidden links are accessible on focus.
