## 2025-04-26 - Visually Hidden Skip Links Behavior
**Learning:** When using Tailwind utility classes for visually hidden skip links (`sr-only focus:not-sr-only focus:absolute`), adding explicit positioning (`focus:top-0 focus:left-0`) ensures the element overlays content correctly rather than adopting `position: static` behavior which can push the layout down.
**Action:** Always include explicit `top` and `left` coordinates alongside `focus:absolute` when implementing hidden accessibility links in Tailwind design systems.
