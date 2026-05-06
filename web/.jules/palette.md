## 2024-05-18 - [Skip-to-Content Link Accessibility]
**Learning:** In Next.js App Router applications, visually hidden skip links must be placed directly inside the `<body>` tag of `layout.tsx` to guarantee correct indexing at the start of the document for keyboard navigation. The Tailwind utility pattern `sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-emerald-900 focus:text-white` works perfectly for the design system.
**Action:** Always include this pattern in the root layout to ensure keyboard users can bypass repetitive navigation.
