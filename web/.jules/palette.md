## 2024-03-19 - Progress Bar Accessibility
**Learning:** Custom UI progress bars without semantic meaning block screen readers from tracking multi-step wizard progress, despite being visually clear.
**Action:** Always implement `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and an `aria-label` when building custom multi-step indicators, and hide decorative elements with `aria-hidden="true"`.
