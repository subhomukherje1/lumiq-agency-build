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

### January 2026 - Service Category Simplification

**Services Simplified to 3:**
- Paid Advertising (was "Performance Marketing")
- Conversion Rate Optimization (was "CRO & Experimentation")
- Analytics & Attribution (unchanged)

**Navigation Updates:**
- Services dropdown shows exactly 3 items (no Case Studies)
- "Module" references removed from homepage → "services"
- "See how it works" CTA now links to /pricing (Our Model)

**Route Changes:**
- `/paid-advertising` - new primary route
- `/paid-media` - kept for backward compatibility

**Updated Files:**
- Navbar.tsx, Footer.tsx, Index.tsx, PaidMedia.tsx, CRO.tsx
- App.tsx - Added /paid-advertising route
- CaseStudyDetail.tsx, casestudies.ts - Service names

### January 2026 - CTAs, Calendly & Partners Page

**Hero CTA Updates:**
- /cro: "Start with a CRO audit"
- /paid-advertising: "Start with a paid advertising audit"
- /analytics: "Start with an analytics audit" (unchanged reference)
- All three pages have consistent reassurance items

**Navigation CTA:**
- "Get Free Audit" → "Request a Revenue Teardown"

**Floating Button:**
- WhatsApp button removed
- Calendly button added (purple #7B2FBE, calendar icon, pulse animation)
- Tooltip: "Book a 30-min strategy call"

**New Partners Page (/partners):**
- Hero: "The tools we use to build your revenue engine"
- 27 partner tools across 5 categories
- Filter bar with smooth transitions
- Categories: Analytics, Experimentation & CRO, Paid Media, CRM & Automation, AI Tools
- Each card: category pill, logo placeholder, name, description, Visit Website link
- CTA section with "Request a Revenue Teardown"
- Added to navbar and footer

### January 2026 - Mobile Optimization Pass

**Global CSS Updates:**
- `overflow-x: hidden` on html/body
- 16px minimum font for inputs (prevents iOS zoom)
- 44px minimum tap targets
- Mobile section padding adjustments

**Navigation:**
- Hamburger menu (Menu icon) at 768px breakpoint
- Slide-down animation (300ms)
- Dark background (#0D0D1A)
- Services sub-menu with expand/collapse
- Full-width CTA button inside menu
- Body scroll lock when menu open

**Typography:**
- Hero headlines: 32px on mobile (was 64-72px)
- Section headlines: 26px on mobile (was 40-48px)
- Body text: 16px minimum
- Consistent leading/line-height

**Layouts:**
- 3-col grids → 1-col on mobile
- 4-col stats → 2x2 grid on mobile
- Phase cards: vertical stack
- Partner cards: single column (2-col on tablet)
- Footer: center-aligned, vertical stack

**Buttons:**
- Full-width primary CTAs on mobile
- 52px minimum height
- Proper tap target spacing

**Partners Filter Bar:**
- Horizontally scrollable with touch support
- Smaller padding on mobile
- overflow:hidden on parent section

**Calendly Button:**
- 48px diameter on mobile (was 56px)
- Positioned higher (bottom-20) to avoid iOS Safari bar

### December 2025 - Final Copy Updates

**Homepage CTA Update:**
- Hero button: "Get a free audit" → "Request a Revenue Teardown"
- Consistent with navbar CTA terminology

**CRO Page Copy Update:**
- Step 03: "Using VWO, we generate and test hypotheses every month" → "Using tools like VWO, Optimizely and others, we generate and test hypotheses every month"
- Removed platform-specific lock-in, more inclusive of tool stack

**Developer Documentation Created:**
- `/app/frontend/DEVELOPER_NOTES.md` - Comprehensive pre-launch checklist
- Covers: Asset replacements, Calendly/EmailJS setup, GA4, SEO, and testing

**Contact Page Updates:**
- Removed WhatsApp tile - now only 2 contact options
- Updated subtitle: "Book a call or request a free Revenue Teardown"
- Changed grid from 3-col to 2-col centered layout
- Renamed "Request a free audit" → "Request a Revenue Teardown"

**Case Studies Rebranding:**
- Workably (HR Tech SaaS, SF) → **Aragorn AI** (HRTech SaaS, Austin TX)
- Payvance (B2B Fintech, NY) → **April** (B2B Fintech, New York NY)
- Segmently (MarTech SaaS, Austin) → **BirdseyePost** (MarTech SaaS, Toronto Canada)
- CounselFlow (Legal Tech, Chicago) → **FirmPilot** (Legal Tech SaaS, Miami FL)
- Removed quote/testimonial section from all case study detail pages
- Updated data model: replaced `quote`, `quoteName`, `quoteTitle` with `description`
- Added company descriptions for each case study

**About Revium Labs Section (Our Model Page):**
- Repositioned from bottom to right after Hero section (trust-building bridge)
- Two-column layout: heading left, content right
- Subtle light gray background (#FAFAFA) for visual separation
- Heading: "Built for one thing: revenue."
- Updated copy: "improving your revenue" (personalized)
- Three subtle bullet highlights: Lean senior-led execution, No bloated teams, Revenue-focused
- Added LinkedIn trust signal: "Connect with us on LinkedIn" link
- Footer already contains LinkedIn link with icon

### January 2026 - SEO Optimization Pass

**Meta Tags (all pages):**
- Unique title tags containing "Revium Labs"
- Meta descriptions (max 160 chars)
- Keywords for each page
- Canonical URLs pointing to reviumlabs.co

**Open Graph & Twitter Cards:**
- og:type, og:site_name, og:url, og:title, og:description, og:image
- twitter:card, twitter:site (@reviumlabs), twitter:title, twitter:description

**Structured Data (JSON-LD):**
- Homepage: Organization + WebSite schemas
- Service pages: Service schema
- Case studies: Article schema
- Contact: FAQPage schema

**Technical SEO:**
- sitemap.xml with all 13 URLs
- robots.txt with sitemap reference
- HelmetProvider wrapped around App
- Preconnect links for fonts, clearbit, gtag

**Internal Linking:**
- RelatedServices component on CRO, Analytics, PaidMedia pages
- "Explore our other services" section with 2 related service links
- Homepage service cards link to correct pages

**Page Titles Updated:**
- Homepage: "Revium Labs — B2B Analytics, CRO & AI-Powered Revenue Growth"
- CRO: "Conversion Rate Optimization for B2B SaaS — Revium Labs"
- Analytics: "B2B Analytics & Attribution Agency — Revium Labs"
- Paid Advertising: "B2B Paid Advertising Agency — LinkedIn ABM & Google Ads | Revium Labs"
- Our Model: "How We Build Your Revenue Engine — Revium Labs"
- Partners: "Tools & Technology Partners — Revium Labs"
- Case Studies: "B2B Marketing Case Studies & Results — Revium Labs"
- Contact: "Request a Revenue Teardown — Revium Labs"

## Backlog / Next Steps

> **See `/app/frontend/DEVELOPER_NOTES.md` for detailed implementation instructions**

### P0 (Critical Before Launch)
- [ ] Replace placeholder OG image with actual 1200x630 branded image
- [ ] Update GA4 Measurement ID in `/app/frontend/index.html`
- [ ] Update Calendly URL in `.env` with real scheduling link
- [ ] Replace placeholder client logos on homepage
- [ ] Replace placeholder partner tool logos on Partners page

### P1 (High Priority)
- [ ] Create EmailJS account and configure contact form
- [ ] Submit sitemap to Google Search Console
- [ ] Verify structured data with Google Rich Results Test
- [ ] Performance optimization audit (Lighthouse)
- [ ] Accessibility audit (WCAG 2.1)

### P2 (Nice to Have)
- [ ] Add blog/resources section
- [ ] Implement case study filtering
- [ ] Add testimonials carousel
- [ ] Privacy Policy & Terms of Service pages

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
