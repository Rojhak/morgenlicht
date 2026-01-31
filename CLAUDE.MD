# Morgenlicht

<!-- Claude Code Task List ID: groceries -->

## Project Overview
**Morgenlicht Alltagshilfe** - A German elderly care service website providing information and services under § 45a SGB XI (Social Security Book XI) for everyday assistance in intercultural contexts across Berlin.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Playwright
- **Language**: German (DE) content

## Project Structure
```
morgenlicht/
├── web/                          # Next.js application
│   ├── src/
│   │   ├── app/                  # App Router pages and layouts
│   │   │   ├── components/       # React components
│   │   │   │   ├── glass/        # Glass morphism UI components
│   │   │   │   ├── layout/       # Navbar, Footer, LanguageSwitcher
│   │   │   │   ├── ui/           # Reusable UI components
│   │   │   │   └── wizard/       # CareFinder wizard
│   │   │   ├── blog/             # Blog pages
│   │   │   ├── leistungen/       # Services pages
│   │   │   ├── ueber-uns/        # About us page
│   │   │   ├── kontakt/          # Contact page
│   │   │   ├── pflegegrad-guide/ # Care level guide
│   │   │   ├── datenschutz/      # Privacy policy
│   │   │   └── impressum/        # Legal notice
│   │   ├── config/               # Configuration files
│   │   ├── content/              # Content/data files
│   │   ├── lib/                  # Utility functions
│   │   └── locales/              # i18n translations
│   ├── public/                   # Static assets
│   ├── tests/                    # Playwright tests
│   └── skills/                   # Project-specific skills
│       ├── app-router/           # Next.js App Router Architect
│       ├── dev-runner/           # Morgenlicht Dev Runner
│       ├── ui-ux/                # UI/UX & Accessibility Architect
│       └── typescript/           # TypeScript Type Guardian
├── images/                       # Project images and assets
├── specs/                        # Additional specifications
└── spec.md                       # Main specification document
```

## Development Commands
```bash
cd web
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run Playwright tests
```

## Morgenlicht Skills

| Skill Name | Purpose | Primary Location |
|------------|---------|------------------|
| Next.js App Router Architect | Ensures correct routing and server/client component logic. | `web/skills/app-router/SKILL.md` |
| Morgenlicht Dev Runner | Prevents execution errors by forcing commands inside the /web folder. | `web/skills/dev-runner/SKILL.md` |
| UI/UX & Accessibility Architect | Enforces WCAG standards, responsiveness, and accessibility for elderly users. | `web/skills/ui-ux/SKILL.md` |
| TypeScript Type Guardian | Ensures strict typing and prevents "any" in the Next.js environment. | `web/skills/typescript/SKILL.md` |

## Key Requirements
- **SGB XI Compliance**: Content relates to German care insurance regulations
- **Accessibility**: WCAG 2.1 AA standards for elderly users (larger fonts, high contrast)
- **Language**: German (DE) is the primary content language
- **Mobile-First**: Responsive design with Tailwind CSS
- **Glass Morphism**: Signature UI design pattern used throughout

## Important Notes
- This is a Next.js project using the App Router architecture
- The `.next/` directory contains auto-generated build files and should not be manually edited
- All development commands must be run from the `web/` directory
- Components use glass morphism design pattern (see `src/app/components/glass/`)
- The CareFinder wizard is a key feature for helping users find care services
