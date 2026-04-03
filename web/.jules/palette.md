## 2026-04-03 - Avoid aria-live on Character Counters
**Learning:** Using `aria-live="polite"` on a character counter causes screen readers to announce every single keystroke, resulting in severe spam and a frustrating user experience for assistive technology users.
**Action:** Instead, link the character counter element directly to the text input using `aria-describedby`. This ensures the current character limit is announced once when the input receives focus, without spamming keystrokes.
