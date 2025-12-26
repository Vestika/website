# Vestika FAQ Website

## Overview
This is the Hebrew FAQ website for Vestika, a financial asset management system. The FAQ content is managed in an easy-to-edit **Markdown format** for team collaboration.

## Features
✅ **Markdown-Based Content** - Easy to edit and collaborate in Google Docs
✅ **Collapsible Q&A Sections** - Clean, organized accordion-style FAQ
✅ **Deep Linking** - Share links to specific questions (e.g., `https://vestika.io/#privacy-protection`)
✅ **Hebrew RTL Support** - Full right-to-left layout with Hebrew typography (Heebo font)
✅ **Topic Navigation** - Horizontally scrollable navigation bar on mobile, wrapped on desktop
✅ **Responsive Design** - Optimized mobile experience with larger fonts
✅ **Modern UI** - Turquoise (cyan) theme, beautiful gradients, shadows, and smooth transitions
✅ **Scroll to Top** - Floating button appears when scrolling down
✅ **Custom Logo Font** - "Poiret One" font for the Vestika branding

## Content Management

### FAQ Content Location
All FAQ content is stored in: **`src/content/faq.md`**

### How to Edit FAQ Content

The FAQ is written in Markdown format, which makes it easy to:
1. Copy to Google Docs for team review
2. Edit collaboratively
3. Paste back into the project
4. The website automatically rebuilds with the new content!

See **`src/content/README.md`** for detailed instructions on:
- Markdown formatting guide
- How to add/edit sections and questions
- How to add links
- Team collaboration workflow

### Format Example

```markdown
## Section Name

### Question goes here?

Answer paragraph 1.

Answer paragraph 2.

[Link Text](https://example.com)
```

## Structure

### Components
- **FAQHeader.jsx** - Hero section with branding and CTA to app
- **FAQNav.jsx** - Sticky navigation bar with topic links (horizontally scrollable on mobile)
- **FAQSection.jsx** - Collapsible Q&A sections with deep linking
- **FAQFooter.jsx** - Footer with links and contact info
- **ScrollToTop.jsx** - Floating scroll-to-top button

### Utilities
- **faqParser.js** - Parses markdown FAQ content into structured format
  - Automatically generates IDs from section/question text
  - Extracts links from markdown format
  - Preserves multi-paragraph answers

### Current Topics
1. **המערכת** (The System) - What is Vestika, who we are
2. **פרטיות ואבטחה** (Privacy & Security) - Data protection, authentication
3. **מחיר ותמיכה** (Pricing & Support) - Free service, how to support
4. **יכולות ותכונות** (Features & Capabilities) - Supported markets, assets, features
5. **פיתוח ותרומה** (Development & Contribution) - Open source, contributions
6. **תקלות ופידבק** (Issues & Feedback) - Bug reports, feature requests, contact
7. **הפעלה עצמית** (Self-Hosting) - Private server, data backup

## Design Highlights

### Color Theme
- **Primary Color**: Turquoise/Cyan (`cyan-400`, `cyan-600`)
- **Background**: Dark gradient (gray-950 → gray-900 → black)
- **Accents**: Cyan for interactive elements

### Typography
- **Logo**: "Poiret One" font (text-7xl on mobile, text-8xl on desktop)
- **Body**: Heebo font family for Hebrew text
- **Questions**: text-xl on mobile, text-lg on desktop
- **Answers**: text-lg on mobile, text-base on desktop

### Mobile Optimizations
- Larger font sizes for better readability
- Horizontally scrollable navigation (single line)
- Scroll-to-top button for easy navigation
- Touch-friendly button sizes

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
cd website
npm run dev
```
Visit: http://localhost:4321

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

## File Structure
```
website/
├── src/
│   ├── components/
│   │   ├── FAQHeader.jsx
│   │   ├── FAQNav.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FAQFooter.jsx
│   │   └── ScrollToTop.jsx
│   ├── content/
│   │   ├── faq.md          # ← EDIT FAQ CONTENT HERE
│   │   └── README.md        # Documentation for editing FAQ
│   ├── utils/
│   │   └── faqParser.js     # Markdown parser
│   ├── pages/
│   │   └── index.astro      # Main page
│   └── layouts/
│       └── Layout.astro     # Page layout
└── FAQ_INFO.md              # This file
```
