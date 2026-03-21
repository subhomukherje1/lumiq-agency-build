# Revium Labs Website - PRD

## Original Problem Statement
Lovable-exported React/Vite/Tailwind frontend for MarTech agency Lumiq. User requested:
1. Full rebrand from Lumiq → Revium Labs
2. Complete rebuild of Pricing page into "Our Model" page
3. Navigation label updates
4. Asset creation (favicon, logo, OG images)

## Architecture
- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS with custom CSS variables
- **UI Components:** shadcn/ui (new-york style)
- **Animations:** Framer Motion
- **Routing:** React Router DOM v6
- **State:** React Query (@tanstack/react-query)
- **Forms:** React Hook Form + EmailJS

## User Personas
- **Primary:** B2B SaaS companies (US/Canada) looking for CRO, Analytics, Performance Marketing services
- **Decision Makers:** CMOs, VPs of Marketing, Growth leads

## Core Requirements (Static)
- Responsive design across all breakpoints
- Dark theme for hero sections
- Light theme for content sections
- Framer Motion animations
- SEO-optimized with React Helmet

## What's Been Implemented

### January 2026 - Rebrand & Our Model Page

**Rebrand Completed:**
- All instances of "Lumiq" → "Revium Labs" (14 files updated)
- Email: hello@reviumlabs.co
- LinkedIn: linkedin.com/company/reviumlabs
- Base URL updated to reviumlabs.co
- Copyright footer updated
- Tagline preserved: "Smarter data. Sharper growth."

**Assets Created:**
- `/public/favicon.svg` - Brand favicon with "R" and pink accent dot
- `/public/logo.svg` - Text-based logo
- GA4 placeholder updated with clear ACTION REQUIRED comment

**Navigation Updates:**
- "Pricing" → "Our Model" in navbar (desktop)
- "Pricing" → "Our Model" in mobile menu
- "Pricing" → "Our Model" in footer
- URL preserved as /pricing for backward compatibility

**New "Our Model" Page (6 sections):**
1. **Hero** - Dark background (#0D0D1A), "HOW WE WORK" label, main headline
2. **Phase Cards** - 3 cards with gradient pills, deliverables lists, Phase 2 featured
3. **Timeline** - Visual vertical timeline with 3 nodes, explanatory paragraphs
4. **Steps** - 3 horizontal steps with numbered circles and icons
5. **Differentiators** - 2x2 grid with large pink numbers
6. **Bottom CTA** - Dual buttons, reassurance text

**No Pricing/Dollar Amounts** - Entire page focuses on methodology, not costs

## Backlog / Next Steps

### P0 (Critical Before Launch)
- [ ] Replace placeholder OG image with actual 1200x630 branded image
- [ ] Update GA4_MEASUREMENT_ID with real tracking ID
- [ ] Update Calendly URL environment variable
- [ ] Update WhatsApp number environment variable
- [ ] Replace placeholder client logos on homepage

### P1 (High Priority)
- [ ] Create EmailJS template for contact form
- [ ] Add production robots.txt
- [ ] Performance optimization audit
- [ ] Accessibility audit (WCAG 2.1)

### P2 (Nice to Have)
- [ ] Add blog/resources section
- [ ] Implement case study filtering
- [ ] Add testimonials carousel
- [ ] Dark mode toggle

## Files Modified This Session
- `/app/frontend/index.html`
- `/app/frontend/src/pages/Pricing.tsx` (completely rewritten)
- `/app/frontend/src/components/Navbar.tsx`
- `/app/frontend/src/components/Footer.tsx`
- `/app/frontend/src/components/PageMeta.tsx`
- `/app/frontend/src/pages/Index.tsx`
- `/app/frontend/src/pages/CRO.tsx`
- `/app/frontend/src/pages/Analytics.tsx`
- `/app/frontend/src/pages/PaidMedia.tsx`
- `/app/frontend/src/pages/Contact.tsx`
- `/app/frontend/src/pages/CaseStudies.tsx`
- `/app/frontend/src/pages/CaseStudyDetail.tsx`
- `/app/frontend/src/data/casestudies.ts`
- `/app/frontend/src/index.css`
- `/app/frontend/tailwind.config.js`
- `/app/frontend/vite.config.ts`
- `/app/frontend/public/favicon.svg` (new)
- `/app/frontend/public/logo.svg` (new)
