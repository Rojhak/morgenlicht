# Palette's Journal

## 2026-02-03 - [Wizard Focus Management]
**Learning:** React component state changes in wizards/multi-step forms do not automatically move focus, leaving screen reader users disoriented. Using `useRef` and `useEffect` to focus the new step's heading (or wrapper) is critical for accessibility.
**Action:** Always implement explicit focus management using `useRef` and `useEffect` when replacing major content areas dynamically, ensuring headings are focusable (`tabIndex={-1}`) but without default outline (`outline-none`).
