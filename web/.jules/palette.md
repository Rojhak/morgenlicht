## 2026-05-01 - Skip-to-content link positioning in Next.js
**Learning:** In Next.js App Router applications, visually hidden accessibility links (e.g., 'skip-to-content') must be placed directly inside the `<body>` tag of `layout.tsx` to guarantee correct indexing at the start of the document for keyboard navigation.
**Action:** Always place skip links as the very first element inside `<body>` in `layout.tsx` and use the established utility pattern `sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-emerald-900 focus:text-white`.
