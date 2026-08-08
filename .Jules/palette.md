## 2024-05-24 - Added visible focus indicators to Navbar
**Learning:** Interactive elements like logos, navigation links, and mobile menu toggles need clear, visible focus states for keyboard users (Tab navigation). Relying on default browser focus rings can lead to poor contrast or inconsistent experiences.
**Action:** Always apply explicit focus indicators using `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E4A] focus-visible:ring-offset-2 rounded-lg` on all interactive `<button>` and `<Link>` elements.
