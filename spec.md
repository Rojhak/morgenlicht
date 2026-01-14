# Product Specification: Morgenlicht Alltagshilfe Digital Platform
**Version:** 2.0 | **Date:** January 13, 2026
**Status:** Final Specification (Post-Interview)

---

## 1. Executive Summary

Develop a high-performance, accessible, and emotionally resonant web platform for "Morgenlicht Alltagshilfe." The platform bridges "warm human care" with "digital precision," serving two distinct user groups: **Seniors** (seeking dignity/independence) and **Relatives** (seeking safety/bureaucratic relief).

### Key Differentiators
- Real-time care budget calculator (Care-Finder Wizard)
- Full Pflegegrad education flow for users without insurance coverage
- Unique "Accessible Glassmorphism" visual identity (WCAG 2.2 AA compliant)
- AI-generated illustrated avatars for authentic yet privacy-respecting imagery

### Scope Boundaries
- **In Scope:** Informational site, calculator, inquiry forms, blog
- **Out of Scope:** User accounts, e-commerce, booking system, CRM integration

---

## 2. Technical Architecture

### 2.1 Core Stack
| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 14+ (App Router) | SEO, performance, accessibility controls |
| Styling | Tailwind CSS | Glassmorphism layers, responsive states |
| Content | Static MDX files | Quick launch, version controlled |
| Email | Resend | Modern API, EU data centers, good free tier |
| Analytics | Plausible or Fathom | Privacy-first, no cookie consent needed |
| Hosting | Vercel | Seamless Next.js deployment, global CDN |
| Images | Next.js Image (AVIF preferred) | Best compression, automatic optimization |

### 2.2 State Management
- React Context or Zustand for Care-Finder Wizard state
- localStorage for language preference persistence

### 2.3 No CMS (MVP)
- All content hardcoded in MDX/JSON for quick launch
- Blog posts as MDX files in `/content/blog/`
- CMS (Sanity.io) deferred to post-launch phase if needed

### 2.4 Configuration
```typescript
// /config/rates.ts
export const CARE_RATES = {
  hourlyRate: 38.50,        // Morgenlicht hourly rate (€)
  entlastungsbetrag: 131,   // Monthly §45b allowance (€)
  currency: 'EUR'
}
```
Rate changes require code deployment but no complex CMS setup.

---

## 3. Localization Strategy

### 3.1 Language Support
| Language | Status | Implementation |
|----------|--------|----------------|
| German | Primary | Full content at launch |
| Turkish | Deferred | Placeholder, add post-launch |
| Arabic | Removed | Not in scope |

### 3.2 Technical Implementation
- Local JSON files: `/locales/de.json`
- Lightweight hook via `next-intl` or custom context
- **No RTL support required** (Arabic removed from scope)

### 3.3 Language Switcher
- Text-based toggle (no flags) in sticky navigation
- Preference stored in localStorage
- Returns visitors see their previously selected language

### 3.4 Legal Term Handling (Turkish)
When Turkish is added: Full translation of all terms including legal terminology (Entlastungsbetrag, Pflegegrad) into Turkish equivalents.

---

## 4. Core Features & Functional Requirements

### 4.1 Dual-Pathway Landing Page

**Concept:** "Emotionale Abholung" vs. "Schnelle Zielführung"

**Hero Section:** Split screen with clearly demarcated choices:
- **Path A (Seniors):** "Ich suche Hilfe für mich"
  - Large, high-contrast buttons
  - Warm, reassuring imagery
- **Path B (Relatives):** "Ich suche Hilfe für meine Eltern"
  - Focus on "Entlastung" and "Sicherheit"
  - Efficiency-oriented messaging

**Path Switching:** Fluid - both paths accessible anytime via navigation. Initial choice sets view but doesn't lock user in.

**Trust Signals:**
- "Pflegekasse anerkannt" badge
- Partner/certification logos (prominent placement)
- AI-generated team illustrations

### 4.2 The Care-Finder Wizard (Budget Calculator)

**Function:** Dynamically calculates service coverage based on §45a SGB XI entitlement.

**Calculation Logic (Client-Side):**
```typescript
const calculateCoveredHours = (pflegegrad: number): number => {
  if (pflegegrad < 1 || pflegegrad > 5) return 0
  const monthlyBudget = CARE_RATES.entlastungsbetrag // 131€
  return Math.floor((monthlyBudget / CARE_RATES.hourlyRate) * 10) / 10
}
// Result: ~3.4 hours for all Pflegegrad levels (1-5)
```

**User Flow:**
1. User selects Pflegegrad (1-5) or "I don't have one yet"
2. **If Pflegegrad selected:** Show calculation result
   - Output: "Sie erhalten ca. **3,4 Stunden** vollständig abgedeckte Hilfe pro Monat."
   - CTA: "Jetzt anfragen" → Inquiry form
3. **If "No Pflegegrad":** Redirect to education flow
4. **If result is 0 hours:** Show direct contact CTA with phone number

**No Upsell:** Do not show private-pay options or package comparisons. Keep trust-focused.

### 4.3 Pflegegrad Education Flow

**Trigger:** User indicates they don't have a Pflegegrad yet.

**Structure:** Full guided multi-step flow (MDX-based)
- What is a Pflegegrad?
- How the MDK assessment works
- What to expect (timeline, process)
- Checklist for preparation
- How Morgenlicht can help

**Technical:**
- Single-session experience (no save/resume)
- Designed to complete in 5-10 minutes
- Hardcoded MDX content in `/content/education/`
- Step progress indicator

**Exit CTA:** "Jetzt kostenlose Beratung anfragen" → Inquiry form

### 4.4 Services Page

**Format:** FAQ-style with expandable accordions per service

**Content per service (e.g., Einkaufshilfe):**
- Brief emotional description
- What's included
- What's not included
- Typical duration
- Common questions

**Services to include:**
- Einkaufshilfe (Shopping assistance)
- Begleitdienste (Accompaniment services)
- Haushaltshilfe (Household help)
- Alltagsbegleitung (Everyday companionship)
- Entlastung für Angehörige (Relief for relatives)

### 4.5 Blog (MVP)

**Purpose:** SEO value, Pflegetipps content marketing

**Structure:**
- Flat chronological list with tag filtering
- Tags only (no rigid categories)
- Example tags: `pflege-tipps`, `rechtliches`, `alltagshilfe`

**Technical:**
- MDX files in `/content/blog/`
- Frontmatter: title, date, tags, excerpt
- Full Schema.org Article markup

### 4.6 Inquiry Form & Lead Capture

**Data Collection (Minimal - GDPR compliant):**
- Name (required)
- Phone number (required)
- Optional: Pre-filled Pflegegrad from wizard

**Submission Flow:**
1. Client-side validation on blur (immediate feedback)
2. Submit to API route
3. Send email via Resend
4. **On success:** Modal confirmation overlay
5. **On failure:** Immediate error with alternative contact (phone number)

**Email Flow:**
- User receives confirmation email ("Wir haben Ihre Anfrage erhalten")
- Staff checks designated inbox (no separate staff notification)

**Email Template:**
```
Subject: Neue Anfrage von [Name]
Body:
- Name: [Name]
- Telefon: [Phone]
- Pflegegrad: [If provided]
- Zeitstempel: [DateTime]
```

---

## 5. Design System: "Accessible Glassmorphism"

### 5.1 Color Palette (Strict Adherence)

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Background Gradient Start | Subtle Teal | `#E0F2F1` | Top of page gradient |
| Background Gradient End | Creme-White | `#FAFAFA` | Bottom of page gradient |
| Primary CTA | Vital-Orange | `#FF8A65` | Buttons, key actions |
| Primary CTA Hover | Deep Orange | `#FF7043` | Button hover state |
| Headers/Trust | Teal | `#26A69A` | Section headers, trust elements |
| Accent/Warmth | Morgen-Gelb | `#FFD54F` | Icons, focus rings, optimism |
| Body Text | Dark Grey | `#37474F` | All readable text |
| Glass Card | White 70% | `rgba(255,255,255,0.7)` | Card backgrounds |
| Glass Border | White 40% | `rgba(255,255,255,0.4)` | Card borders for definition |

### 5.2 Typography

- **Font Family:** Inter or DM Sans (Humanist Sans-Serif)
- **Base Size:** 18px for body text
- **Scale:** 1.25 ratio (Minor Third)
- **Line Height:** 1.6 for body, 1.2 for headings

### 5.3 Glassmorphism Implementation

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
}
```

**Browser Support:** Modern browsers only. No fallback for older browsers (IE11, older Safari). Accept that glass effect may not render on unsupported browsers.

### 5.4 Component Patterns

**Accessible Button:**
```jsx
<button
  className="h-12 px-6 min-w-[48px] bg-[#FF8A65] hover:bg-[#FF7043]
             focus:outline-none focus:ring-4 focus:ring-[#FFD54F]
             focus:ring-offset-2 text-white font-semibold rounded-lg
             transition-colors"
>
  {label}
</button>
```

**Glass Input:**
```jsx
<input
  className="h-12 px-4 w-full bg-white/70 backdrop-blur-sm
             border border-white/40 rounded-lg text-[#37474F]
             focus:outline-none focus:ring-4 focus:ring-[#FFD54F]
             focus:ring-offset-2 placeholder:text-gray-400"
  type="text"
/>
```

### 5.5 Accessibility (WCAG 2.2 AA)

| Requirement | Implementation |
|-------------|----------------|
| Contrast | All text `#37474F` on glass backgrounds (4.5:1+ ratio) |
| Focus States | Custom focus rings (`ring-[#FFD54F]`) on all interactive elements |
| Hit Areas | Minimum 48px height for all buttons/inputs |
| Screen Readers | Decorative icons: `aria-hidden="true"` |
| Card Boundaries | Delicate border (`border-white/40`) for low-vision users |
| Keyboard Nav | Full keyboard accessibility, visible focus indicators |

### 5.6 Illustrations

**Style:** AI-generated (Midjourney/DALL-E) with consistent style prompts

**Requirements:**
- Warm, friendly illustrated avatars
- Represent diverse personas (seniors, relatives, caregivers)
- Consistent art style across all illustrations
- No photographs of real people

**Prompt Direction:** Warm watercolor or soft vector style, elderly care context, German setting, inclusive representation.

---

## 6. Navigation & Layout

### 6.1 Sticky Navigation

**Behavior:** Always visible (no hide on scroll)

**Desktop Contents:**
- Logo (left)
- Primary nav links (center): Startseite, Leistungen, Über uns, Blog, Kontakt
- Language switcher (right): "DE | TR" text toggle
- CTA button (right): "Jetzt anfragen"

**Mobile Contents:**
- Logo (left)
- Hamburger menu (right)
- Expanded menu: All nav items + language switcher + CTA

### 6.2 Footer

**Contents:**
- Logo + tagline
- Navigation links
- Contact info (local phone format: `069 12345678`)
- Service area: "Wir betreuen Familien im Raum [City/Region]"
- Legal links: Impressum, Datenschutz
- Partner/certification logos

**Not Included:**
- Social media links
- Exact physical address

### 6.3 404 Handling

All unknown routes redirect to homepage (no custom 404 page).

---

## 7. Loading & Error States

### 7.1 Loading States

**Style:** Skeleton placeholders

```jsx
// Skeleton example
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```

### 7.2 Form Validation

**Timing:** On blur (immediate feedback per field)

**Error Display:**
- Red border on invalid field
- Error message below field
- Focus moves to first error on submit attempt

### 7.3 Email Send Failure

**Handling:** Immediate error display

```jsx
// Error state
<div className="text-red-600 p-4 bg-red-50 rounded-lg">
  <p>Ihre Anfrage konnte nicht gesendet werden.</p>
  <p>Bitte rufen Sie uns direkt an: <a href="tel:06912345678">069 12345678</a></p>
</div>
```

---

## 8. SEO & Structured Data

### 8.1 Schema.org Markup

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Morgenlicht Alltagshilfe",
  "description": "Alltagsbegleitung und Entlastung für Senioren und Angehörige",
  "areaServed": "[City/Region]",
  "priceRange": "€€"
}
```

**Service Schema:** Per service page
**Article Schema:** Per blog post
**FAQ Schema:** On services page (accordion content)

### 8.2 Meta Tags

- Unique title/description per page
- Open Graph tags for social sharing
- Canonical URLs

---

## 9. Legal & Compliance

### 9.1 Required Pages

| Page | Content |
|------|---------|
| Impressum | Legal company information (TMG §5) |
| Datenschutz | Privacy policy (GDPR compliant) |

### 9.2 GDPR Compliance

- **No cookie banner needed** (Plausible/Fathom are cookieless)
- Minimal data collection (name + phone only)
- Clear privacy policy explaining data handling
- Email confirmation includes data deletion contact

### 9.3 Email Compliance

- User confirmation email includes:
  - What data was collected
  - How to request deletion
  - Contact information

---

## 10. File Structure

```
/src
  /app
    /page.tsx                    # Landing page with dual pathway
    /leistungen/page.tsx         # Services (FAQ-style)
    /ueber-uns/page.tsx          # About page
    /blog/page.tsx               # Blog listing
    /blog/[slug]/page.tsx        # Blog post
    /kontakt/page.tsx            # Contact form
    /pflegegrad-guide/page.tsx   # Education flow
    /impressum/page.tsx          # Legal
    /datenschutz/page.tsx        # Privacy
    /api
      /inquiry/route.ts          # Form submission API
    /components
      /glass/                    # GlassCard, GlassButton, GlassInput
      /wizard/                   # BudgetCalculator, StepIndicator
      /layout/                   # Navbar, Footer, LanguageSwitcher
      /ui/                       # Skeleton, Modal, Accordion
  /content
    /blog/                       # MDX blog posts
    /education/                  # MDX education flow steps
  /config
    /rates.ts                    # Care rates configuration
  /lib
    /email.ts                    # Resend client setup
    /dictionary.ts               # Locale loading logic
  /locales
    /de.json                     # German translations
  /public
    /illustrations/              # AI-generated images
    /logos/                      # Partner logos, certifications
```

---

## 11. Environment Variables

```env
# Email
RESEND_API_KEY=re_xxxxx
EMAIL_TO=anfragen@morgenlicht.de

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=morgenlicht-alltagshilfe.de

# Optional
NEXT_PUBLIC_PHONE=069 12345678
NEXT_PUBLIC_SERVICE_AREA=Frankfurt
```

---

## 12. Launch Checklist

### Pre-Launch
- [ ] All German content finalized
- [ ] AI illustrations generated and optimized
- [ ] Partner logos collected (with permission)
- [ ] Legal pages reviewed (Impressum, Datenschutz)
- [ ] Email templates configured in Resend
- [ ] Plausible/Fathom analytics configured
- [ ] Domain DNS configured for Vercel

### Launch
- [ ] Deploy to Vercel production
- [ ] Verify email sending works
- [ ] Test all forms and calculator
- [ ] Verify analytics tracking
- [ ] Submit sitemap to Google Search Console

### Post-Launch
- [ ] Monitor inquiry emails
- [ ] Gather user feedback
- [ ] Plan Turkish localization
- [ ] Consider CMS migration if content updates frequent

---

## 13. Out of Scope (Explicitly Deferred)

| Feature | Reason |
|---------|--------|
| User accounts | Fully stateless approach chosen |
| Arabic localization | Removed from requirements |
| CRM integration | Email notification sufficient for MVP |
| Online booking | Inquiry-based workflow preferred |
| Sanity CMS | Deferred for quick launch |
| Cookie consent banner | Not needed with privacy-first analytics |
| Social media integration | Clean footer preferred |

---

## 14. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Page load time | < 2s | Vercel Analytics |
| Lighthouse Performance | > 90 | Lighthouse CI |
| Lighthouse Accessibility | 100 | Lighthouse CI |
| Form submission rate | Track | Plausible Goals |
| Calculator completion | Track | Plausible Events |

---

**Document Version History:**
- v1.0 (Jan 13, 2026): Initial specification
- v2.0 (Jan 13, 2026): Post-interview comprehensive specification
