# Revium Labs - Developer Pre-Launch Checklist

> **Important**: Complete ALL items below before deploying to production.

---

## 1. Asset Replacements

### Client Logos (Homepage - "Trusted By" Section)
- **File Location**: `/app/frontend/src/pages/Index.tsx` (lines 294-307)
- **Current State**: Placeholder boxes showing "Client Logo"
- **Action Required**: Replace with actual client logo images
- **Recommended**:
  - Create `/public/clients/` directory
  - Add logo files (e.g., `client-1.svg`, `client-2.svg`, etc.)
  - Update the grid to render `<img>` tags instead of placeholder divs
  - Recommended dimensions: 120x40px (SVG preferred for quality)

### Partner Tool Logos (Partners Page)
- **File Location**: `/app/frontend/src/pages/Partners.tsx`
- **Current State**: Using placeholder emoji icons
- **Action Required**: Replace with actual tool/platform logos
- **Recommended**:
  - Create `/public/partners/` directory
  - Add logo files for each partner tool (Google Analytics, HubSpot, Salesforce, etc.)
  - Update the `tools` array to reference actual image paths
  - Recommended dimensions: 48x48px or 64x64px (SVG preferred)

### Open Graph Image
- **File Location**: Referenced in `/app/frontend/src/components/PageMeta.tsx`
- **Current State**: Placeholder reference to `og-home.png`
- **Action Required**: Create and upload a branded OG image
- **Specifications**:
  - Dimensions: 1200x630px (required for social sharing)
  - Format: PNG or JPG
  - Content: Brand logo, tagline, visual that represents Revium Labs
  - Save to: `/public/og-home.png`

### Favicon
- **File Location**: `/public/favicon.svg`
- **Current State**: May need branding update
- **Action Required**: Ensure favicon matches Revium Labs branding
- **Also consider adding**:
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png` (180x180px)

---

## 2. External Service Integrations

### Calendly Integration
- **Files to Update**: 
  - `/app/frontend/.env` → Add `VITE_CALENDLY_URL`
  - `/app/frontend/src/components/CalendlyButton.tsx` (verify it reads from env)
- **Action Required**:
  1. Create a Calendly account if not already done
  2. Set up a scheduling page (e.g., "30-Minute Strategy Call")
  3. Copy the Calendly URL (format: `https://calendly.com/reviumlabs/30min`)
  4. Add to `.env`: `VITE_CALENDLY_URL=https://calendly.com/your-actual-link`

### EmailJS (Contact Form)
- **File Location**: `/app/frontend/src/pages/Contact.tsx`
- **Current State**: Form UI exists but submission may not be wired
- **Action Required**:
  1. Create EmailJS account at https://www.emailjs.com/
  2. Create an email service (Gmail, Outlook, etc.)
  3. Create an email template for contact form submissions
  4. Add to `.env`:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
  5. Install EmailJS: `yarn add @emailjs/browser`
  6. Implement the `emailjs.send()` call in the form submission handler

---

## 3. Analytics & Tracking

### Google Analytics 4 (GA4)
- **File Location**: `/app/frontend/index.html`
- **Current State**: GA4 script placeholder exists
- **Action Required**:
  1. Create GA4 property at https://analytics.google.com/
  2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
  3. Replace placeholder in `index.html`:
     ```html
     <!-- Google tag (gtag.js) -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     </script>
     ```

### LinkedIn Insight Tag (Optional but Recommended)
- **Purpose**: Track conversions from LinkedIn Ads
- **Action Required**:
  1. Get your LinkedIn Partner ID from Campaign Manager
  2. Add the Insight Tag script to `index.html`

### Google Tag Manager (Alternative)
- **Purpose**: Centralized tag management
- **If using GTM instead of direct GA4**:
  1. Create GTM container
  2. Replace GA4 script with GTM snippet
  3. Configure GA4 within GTM

---

## 4. SEO Verification

### Google Search Console
- **Action Required**:
  1. Go to https://search.google.com/search-console/
  2. Add property for `reviumlabs.co`
  3. Verify ownership (HTML file, DNS, or meta tag)
  4. Submit sitemap: `https://reviumlabs.co/sitemap.xml`

### Sitemap & Robots.txt
- **File Locations**: 
  - `/public/sitemap.xml`
  - `/public/robots.txt`
- **Action Required**:
  1. Update `sitemap.xml` with actual production URLs
  2. Verify all page URLs are included
  3. Ensure `robots.txt` points to correct sitemap URL
  4. Test with Google's robots.txt tester

### Structured Data Validation
- **Action Required**:
  1. Test pages with Google's Rich Results Test: https://search.google.com/test/rich-results
  2. Fix any JSON-LD errors
  3. Verify Organization, WebSite, and Service schemas render correctly

---

## 5. Domain & Hosting

### DNS Configuration
- **Required Records**:
  - A record pointing to hosting provider IP
  - CNAME for `www` subdomain
  - MX records for email (if using @reviumlabs.co email)

### SSL Certificate
- **Action Required**: Ensure HTTPS is properly configured
- Most hosting providers (Vercel, Netlify, etc.) handle this automatically

### Environment Variables for Production
- **Important**: When deploying, set these environment variables in your hosting provider:
  ```
  VITE_CALENDLY_URL=https://calendly.com/your-link
  VITE_EMAILJS_SERVICE_ID=your_service_id
  VITE_EMAILJS_TEMPLATE_ID=your_template_id
  VITE_EMAILJS_PUBLIC_KEY=your_public_key
  ```

---

## 6. Content Review

### Phone Number / Contact Info
- Review all pages for placeholder contact information
- Update with actual business contact details

### Legal Pages (Recommended)
- Consider adding:
  - Privacy Policy (`/privacy`)
  - Terms of Service (`/terms`)
- Required for GDPR compliance if serving EU visitors

### Social Media Links
- **File Location**: Footer component and `index.html` structured data
- **Current State**: LinkedIn link placeholder
- **Action Required**: Update with actual social profile URLs

---

## 7. Performance Optimization (Before Launch)

### Image Optimization
- Compress all images using tools like TinyPNG or Squoosh
- Use WebP format where possible
- Implement lazy loading for below-fold images

### Lighthouse Audit
- Run Lighthouse audit in Chrome DevTools
- Target scores: Performance 90+, Accessibility 95+, SEO 95+

### Core Web Vitals
- Test with PageSpeed Insights: https://pagespeed.web.dev/
- Monitor LCP, FID, and CLS metrics

---

## 8. Testing Checklist

Before going live, test the following:

- [ ] All navigation links work correctly
- [ ] Mobile menu opens/closes properly
- [ ] Contact form submits successfully (after EmailJS setup)
- [ ] Calendly button opens scheduling popup
- [ ] All images load correctly
- [ ] No console errors in browser DevTools
- [ ] All pages render correctly on mobile (320px - 768px)
- [ ] All pages render correctly on desktop (1024px+)
- [ ] Footer links work
- [ ] Social sharing produces correct preview (test with Twitter Card Validator, Facebook Debugger)

---

## Quick Reference: File Locations

| Item | File Path |
|------|-----------|
| Environment Variables | `/app/frontend/.env` |
| GA4 Script | `/app/frontend/index.html` |
| SEO Meta Component | `/app/frontend/src/components/PageMeta.tsx` |
| Homepage | `/app/frontend/src/pages/Index.tsx` |
| Contact Page | `/app/frontend/src/pages/Contact.tsx` |
| Partners Page | `/app/frontend/src/pages/Partners.tsx` |
| Sitemap | `/app/frontend/public/sitemap.xml` |
| Robots.txt | `/app/frontend/public/robots.txt` |
| Calendly Button | `/app/frontend/src/components/CalendlyButton.tsx` |

---

**Last Updated**: December 2025
**Prepared By**: Development Team
