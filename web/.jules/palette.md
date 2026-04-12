## 2025-02-15 - [Added aria labels to progress bar]
**Learning:** Custom visual progress bars must implement explicit accessibility attributes including `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-label`, while using `aria-hidden="true"` on purely decorative child elements.
**Action:** Always add ARIA progress attributes when creating custom un-semantic progress elements.
