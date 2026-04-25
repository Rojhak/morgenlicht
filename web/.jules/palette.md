
## 2024-04-25 - Skip-to-Content Link Placement
**Learning:** In Next.js App Router applications, visually hidden accessibility links (e.g., 'skip-to-content') should be placed directly inside the `<body>` tag of `layout.tsx` to guarantee correct indexing at the start of the document for keyboard navigation.
**Action:** When adding skip links, always place them as the very first element inside `<body>` in `layout.tsx` and ensure the target element (usually `<main>`) has a matching `id`. Use the established Tailwind pattern `sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-emerald-900 focus:text-white` for consistent styling.
