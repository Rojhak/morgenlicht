## 2026-04-16 - Add Progress Bar Accessibility
**Learning:** Custom visual progress bars (e.g., in wizard components) must implement explicit accessibility attributes including `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-label`, while using `aria-hidden="true"` on purely decorative child elements to ensure correct interpretation by screen readers.
**Action:** Always add standard ARIA progress bar attributes to any custom-built step indicator or progress visual instead of relying on color/width changes alone.
