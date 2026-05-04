## 2024-05-24 - Next.js Skip Link Placement
**Learning:** In Next.js App Router applications, visually hidden accessibility links (e.g., "skip-to-content") should be placed directly inside the `<body>` tag of `layout.tsx` to guarantee correct indexing at the start of the document for keyboard navigation.
**Action:** Always place skip links at the very beginning of the body tag to provide proper keyboard accessibility.
