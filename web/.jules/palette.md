## 2024-04-04 - Accessibility Enhancements for Multi-Step Wizard

**Learning:** Custom visual progress indicators and step transitions in multi-step wizard components require explicit accessibility handling to inform screen readers of progress and changes. Without manual focus management, screen reader users might miss step updates and the progress bar meaning.
**Action:** Added explicit ARIA roles and attributes (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`) to custom progress bars, alongside `aria-hidden="true"` on decorative segments. Additionally, implemented manual focus shifting to the container `div` (`tabIndex={-1}`, `aria-live="polite"`) upon step transition to ensure updates are announced and keyboard navigation context is maintained.
