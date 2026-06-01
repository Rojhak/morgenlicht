## 2024-05-24 - Accessible Toggle Filters
**Learning:** Custom UI elements acting as toggleable filters or checkboxes (like the location and availability filters in the search page) fail to announce their active state to screen readers without explicit ARIA attributes.
**Action:** Always apply `aria-pressed={isActive}` or `aria-checked={isChecked}` to custom `<button>` elements that toggle state to ensure screen readers reliably announce their current status.
