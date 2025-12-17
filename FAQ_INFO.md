# Vestika FAQ Website

## Overview
This is the Hebrew FAQ website for Vestika, a financial asset management system.

## Features
✅ **Collapsible Q&A Sections** - Clean, organized accordion-style FAQ
✅ **Deep Linking** - Share links to specific questions (e.g., `https://vestika.io/#privacy-protection`)
✅ **Hebrew RTL Support** - Full right-to-left layout with Hebrew typography (Heebo font)
✅ **Topic Navigation** - Sticky navigation bar to jump between topics
✅ **Responsive Design** - Mobile-friendly layout
✅ **Modern UI** - Beautiful gradients, shadows, and smooth transitions

## Structure

### Components
- **FAQHeader.jsx** - Hero section with branding and CTA to app
- **FAQNav.jsx** - Sticky navigation bar with topic links
- **FAQSection.jsx** - Collapsible Q&A sections with deep linking
- **FAQFooter.jsx** - Footer with links and contact info

### Topics
1. **כללי** (General) - What is Vestika, who we are
2. **פרטיות ואבטחה** (Privacy & Security) - Data protection, authentication
3. **מחיר ותמיכה** (Pricing & Support) - Free service, how to support
4. **יכולות ותכונות** (Features & Capabilities) - Supported markets, assets, features
5. **פיתוח ותרומה** (Development & Contribution) - Open source, contributions
6. **תקלות ופידבק** (Issues & Feedback) - Bug reports, feature requests, contact
7. **הפעלה עצמית** (Self-Hosting) - Private server, data backup

## Deep Linking
Each question has a unique ID that can be linked to directly:

Examples:
- `https://vestika.io/#what-is-vestika`
- `https://vestika.io/#privacy-protection`
- `https://vestika.io/#source-code`

The page will automatically scroll to and open the linked question.

## Development

### Local Testing
```bash
npm run dev
```
Visit: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment
Deploy the site to vestika.io with:
- The app available at: app.vestika.io
- This FAQ page at: vestika.io

## Important Links
- App: https://app.vestika.io
- GitHub: https://github.com/Vestika/portfolio
- Contact: contact@vestika.io

