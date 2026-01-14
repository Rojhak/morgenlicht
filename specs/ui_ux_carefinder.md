# Specification: CareFinder UI Overhaul

## 1. Context
- **Problem**: The "Pflegegrad" selection buttons have poor contrast (ghost/glass style on glass background) and do not look clickable. Users report "hell text on white background" (low contrast) and identifying actionable elements is difficult.
- **Goal**: Make the input elements clearly defined, clickable ("high affordance"), and strictly WCAG 2.2 compliant for contrast.

## 2. Requirements

### Visual Design
- **Pflegegrad Buttons**:
    - **Default State**: Must have a visible *border* and *solid* background to distinguish from the glass card.
        - *Proposal*: `bg-white`, `border-teal-100`, `text-teal-900`, `shadow-sm`.
    - **Hover State**: Distinct color change to indicate interactivity.
        - *Proposal*: `bg-teal-50`, `border-teal-200`.
    - **Active/Selected State**: High contrast, authoritative.
        - *Proposal*: `bg-teal-800`, `text-white`, `ring-2 ring-teal-300`.
- **Primary Action (Berechnen)**:
    - Ensure the button stands out. The current Coral is good, but let's verify semantic class integrity.

### Accessibility
- **Contrast**: All text must be 4.5:1 against its immediate background.
- **Focus**: Visible focus rings for keyboard navigation.

## 3. Implementation Plan
- **File**: `src/app/components/wizard/CareFinder.tsx`
- **Action**: Refactor the button classes to strictly follow the new "Solid on Glass" pattern instead of "Glass on Glass".

## 4. Verification
- **Visual**: Verify clearly visible borders in the default state.
- **Functional**: Verify state changes (hover/active) are distinct.
