# Morgenlicht

<!-- Claude Code Task List ID: groceries -->

## Project Overview
**Morgenlicht Alltagshilfe** - A German elderly care service website providing information and services under § 45a SGB XI (Social Security Book XI) for everyday assistance in intercultural contexts across Berlin.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Testing**: Playwright
- **Language**: German (DE) content

## Project Structure
```
morgenlicht/
├── web/                          # Next.js application
│   ├── src/
│   │   ├── app/                  # App Router pages and layouts
│   │   │   ├── components/       # React components
│   │   │   │   ├── site/         # Shared UI: PageHero, Breadcrumbs, ContactActions, ContactBand, Kicker, SunPortrait, JsonLd
│   │   │   │   ├── sections/     # Page templates: SeoBlogArticle, IntentLandingPage, DistrictPage, FAQSection
│   │   │   │   ├── layout/       # Navbar, Footer, MobileContactBar
│   │   │   │   ├── forms/        # InquiryForm (only rendered when Resend env vars are set)
│   │   │   │   └── analytics/    # Plausible (only when configured)
│   │   │   ├── blog/             # Ratgeber articles
│   │   │   ├── leistungen/       # Services
│   │   │   ├── kosten/           # Costs and Pflegekasse
│   │   │   ├── fragen/           # FAQ
│   │   │   ├── ueber-uns/        # About us
│   │   │   ├── kontakt/          # Contact
│   │   │   ├── pflegegrad-guide/ # Pflegegrad assessment guide
│   │   │   ├── berlin-*/         # District pages (Kreuzberg, Neukölln)
│   │   │   ├── tr/               # Turkish information page
│   │   │   ├── llms.txt/         # Generated plain-text overview
│   │   │   ├── datenschutz/      # Privacy policy
│   │   │   └── impressum/        # Legal notice
│   │   ├── config/               # site.ts (provider data, sources), blogPosts.ts
│   │   ├── content/              # Content/data files
│   │   └── lib/                  # seo.ts (metadata), schema.ts (JSON-LD), security.ts
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
npm run lint         # ESLint (eslint-config-next core-web-vitals + typescript) on src/**/*.{ts,tsx}
npm run test:ui      # Run Playwright tests
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
- **Design system**: Forest green, sun gold and cream tokens in `src/app/globals.css`; the rising-sun motif from the logo (Kicker, `.sunrise`, `.sun-arc`) is the signature element. No glass morphism.

## Important Notes
- This is a Next.js project using the App Router architecture
- The `.next/` directory contains auto-generated build files and should not be manually edited
- All development commands must be run from the `web/` directory
- Shared UI lives in `src/app/components/site/`; new pages should use `PageHero`, `ContactActions` and `ContactBand` instead of custom heroes and buttons
- Provider facts (phone, address, hours, prices, register data) come only from `src/config/site.ts`; do not hard-code them in pages
- Structured data is built with the helpers in `src/lib/schema.ts` and must match visible content
