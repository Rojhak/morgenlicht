## 2024-05-18 - Improve accessibility in CareFinder wizard
**Learning:** Multi-step wizard components need manual focus management (e.g., using `useRef` on a step container with `tabIndex={-1}` and `aria-live="polite"`) to ensure screen readers announce step transitions and keyboard users maintain context. Visual progress bars must also be made accessible using `role="progressbar"` and appropriate `aria-*` attributes.
**Action:** Always implement manual focus management for dynamic content changes that mimic page transitions, and apply standard ARIA roles to custom visual indicators.
