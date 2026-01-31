# Palette's Journal

## 2026-01-13 - Focus Management in Wizards
**Learning:** In multi-step wizards like `CareFinder`, simply changing state is not enough for accessibility. Screen reader users and keyboard navigators lose context if focus remains on a vanished button or the document body.
**Action:** Always implement focus management (e.g., using `useRef` and `useEffect`) to move focus to the new step's heading or container when the step changes. Also, ensure components don't have duplicate IDs when used in pages that anchor to them.
