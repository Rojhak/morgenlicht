
## 2025-05-05 - Skip-to-Content Link Pattern
**Learning:** In Next.js App Router applications, visually hidden accessibility links (e.g., "skip-to-content") should be placed directly inside the `<body>` tag of `layout.tsx` to guarantee correct indexing at the start of the document for keyboard navigation. The target container should have `id="main-content"`.
**Action:** Apply the standard skip-to-content link with appropriate Tailwind focus states at the top of the body for accessibility.
