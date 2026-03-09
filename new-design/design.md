# Wedding Website Documentation

## Overview

A modern, elegant wedding website built with Next.js, React, and Tailwind CSS. The site features a responsive design with a sophisticated color palette and smooth animations, perfect for sharing wedding details with guests.

**Website URL:** `[Your domain here]`  
**Event Date:** Saturday, June 6th, 2025  
**Location:** Seattle, Washington

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Design System](#design-system)
4. [Components Overview](#components-overview)
5. [Customization Guide](#customization-guide)
6. [Deployment](#deployment)
7. [Future Enhancements](#future-enhancements)

---

## Features

### Core Functionality
- ✅ **Sticky Navigation** - Easy access to all sections from anywhere on the page
- ✅ **Responsive Design** - Mobile-first approach that works perfectly on all devices
- ✅ **Smooth Scrolling** - Anchor links navigate smoothly between sections
- ✅ **Interactive RSVP Form** - Collect guest responses and preferences
- ✅ **Expandable FAQ** - Accordion-style frequently asked questions
- ✅ **Mobile Menu** - Hamburger menu for seamless mobile navigation
- ✅ **Modern Animations** - Hover states and transitions throughout

### Sections Included
1. **Hero Section** - Eye-catching introduction with wedding date and main CTA
2. **Our Story** - Narrative about how the couple met and got engaged
3. **Wedding Day Schedule** - Timeline of events with descriptions
4. **Venue & Location** - Venue details, parking, and map placeholder
5. **Accommodation** - Hotel recommendations with special rates and promo codes
6. **FAQ** - Common questions with expandable answers
7. **RSVP** - Guest response form with dietary preferences
8. **Footer** - Contact information and quick links

---

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Main page combining all components
│   └── globals.css          # Global styles and color tokens
├── components/
│   ├── header.tsx           # Navigation header with mobile menu
│   ├── hero.tsx             # Hero section
│   ├── story.tsx            # Couple's story section
│   ├── schedule.tsx         # Wedding day schedule
│   ├── location.tsx         # Venue information
│   ├── accommodation.tsx    # Hotel options
│   ├── faq.tsx              # FAQ accordion
│   ├── rsvp.tsx             # RSVP form
│   └── footer.tsx           # Footer with links
└── WEDDING_SITE_DOCUMENTATION.md  # This file
```

---

## Design System

### Color Palette

The wedding site uses a sophisticated, romantic color scheme:

| Color | Purpose | RGB/Hex |
|-------|---------|---------|
| **Blush Pink** (Primary) | Main accent, buttons, links | `#CE9B8F` |
| **Warm Beige** (Secondary) | Subtle backgrounds, accents | `#E8D9CA` |
| **Muted Terracotta** (Accent) | Highlights, dividers | `#B8826D` |
| **Off-White** (Background) | Primary background | `#FDFBF9` |
| **Dark Charcoal** (Foreground) | Text, primary color | `#333333` |

These colors are defined as CSS custom properties in `app/globals.css` using the design token system:
- `--primary` - Blush pink
- `--secondary` - Warm beige
- `--accent` - Muted terracotta
- `--background` - Off-white
- `--foreground` - Dark charcoal

### Typography

- **Headings Font:** Playfair Display (serif) - Elegant and timeless
- **Body Font:** Lato (sans-serif) - Clean and readable

Font sizes follow a hierarchical scale:
- `text-7xl` - Hero title
- `text-5xl` - Section headings
- `text-2xl` - Subsection headings
- `text-lg` - Body text
- `text-sm` - Secondary text

### Spacing & Layout

- **Desktop Maximum Width:** 1024px (max-w-4xl)
- **Mobile Padding:** 16px (px-4)
- **Gap Between Sections:** 64px-96px (py-16 md:py-24)
- **Component Gap:** 24px (gap-6)

### Rounded Corners

- **Buttons:** Fully rounded (rounded-full)
- **Cards:** Large radius (rounded-xl)
- **Inputs:** Medium radius (rounded-lg)

---

## Components Overview

### Header Component (`components/header.tsx`)

**Features:**
- Sticky navigation bar
- Desktop and mobile responsive menu
- Smooth active state transitions
- Primary CTA button for RSVP

**Sections Linked:**
- Home, Our Story, Schedule, Location, Accommodation, FAQ, RSVP

**Customization:**
```tsx
const sections = [
  { label: 'Your Section', href: '#your-section-id' },
]
```

### Hero Component (`components/hero.tsx`)

**Features:**
- Full-screen height introduction
- Elegant typography with serif headings
- Subtle gradient background
- Event date and time details
- Main call-to-action button

**Key Details to Update:**
- Couple names: "Sarah & James"
- Event date: June 6, 2025
- Time: "half past four in the afternoon"

### Story Component (`components/story.tsx`)

**Features:**
- Two-column layout (stacked on mobile)
- Image placeholder areas (64px tall)
- Narrative sections for "How We Met" and "The Proposal"

**Customization:**
Replace placeholder text with your actual story. Add images by replacing the placeholder divs with:
```tsx
<img src="/path/to/image.jpg" alt="Our story" className="rounded-2xl w-full h-64 object-cover" />
```

### Schedule Component (`components/schedule.tsx`)

**Features:**
- Timeline-style event cards
- Time, title, and description for each event
- Hover effects for interactivity

**Event Array Structure:**
```tsx
const events = [
  { 
    time: '4:00 PM', 
    title: 'Event Name', 
    description: 'Event description' 
  },
]
```

### Location Component (`components/location.tsx`)

**Features:**
- Ceremony and reception details
- Address information
- Practical details (parking, weather)
- Map placeholder

**Customization:**
Update addresses, parking info, and weather considerations. To add an actual map, integrate Google Maps or Mapbox.

### Accommodation Component (`components/accommodation.tsx`)

**Features:**
- Three-column hotel grid
- Special rates and promo codes
- Hotel descriptions

**Hotel Array Structure:**
```tsx
const hotels = [
  {
    name: 'Hotel Name',
    rate: '$price/night',
    description: 'Description',
    code: 'PROMO_CODE',
  },
]
```

### FAQ Component (`components/faq.tsx`)

**Features:**
- Expandable accordion sections
- Chevron icon rotation animation
- Smooth open/close transitions

**FAQ Array Structure:**
```tsx
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer here.',
  },
]
```

### RSVP Component (`components/rsvp.tsx`)

**Features:**
- Multi-field form (name, email, attendance, guests, dietary)
- Form validation
- Success message on submission
- Direct contact email links

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Attendance Status (required)
- Number of Guests
- Dietary Restrictions (optional)

**Backend Integration:**
Currently, form data is logged to console. To save responses:
1. Create a database (Supabase, Firebase, MongoDB)
2. Set up an API endpoint (`/api/rsvp`)
3. Replace the console.log with an actual API call

### Footer Component (`components/footer.tsx`)

**Features:**
- Three-column layout with links
- Contact information
- Quick navigation links
- Copyright information

**Customization:**
- Update email addresses
- Update phone number
- Add social media links if desired

---

## Customization Guide

### Updating Couple Information

1. **Names & Date:**
   - Edit `components/hero.tsx` - "Sarah & James"
   - Edit `app/layout.tsx` - Metadata title

2. **Contact Information:**
   - Update email addresses in `components/rsvp.tsx` and `components/footer.tsx`
   - Update phone number in `components/footer.tsx`

3. **Event Details:**
   - Update date/time in `components/hero.tsx`
   - Update schedule in `components/schedule.tsx`
   - Update venue info in `components/location.tsx`

### Adding Images

1. **Place images in `public/` folder**
   ```
   public/
   ├── story-photo-1.jpg
   ├── story-photo-2.jpg
   └── ceremony-photo.jpg
   ```

2. **Update components to use images:**
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/story-photo-1.jpg"
     alt="How we met"
     width={500}
     height={500}
     className="rounded-2xl w-full h-64 object-cover"
   />
   ```

### Changing Colors

Edit `app/globals.css` to modify the color tokens:

```css
:root {
  --primary: oklch(...);        /* Main accent color */
  --secondary: oklch(...);      /* Secondary accent */
  --accent: oklch(...);         /* Additional highlight */
  --background: oklch(...);     /* Page background */
  --foreground: oklch(...);     /* Text color */
}
```

Colors use OKLch color space for better perceptual uniformity. Use [OKLch color picker](https://oklch.com/) to find your desired colors.

### Changing Fonts

Update `app/layout.tsx`:

```tsx
import { YourSerifFont, YourSansFont } from 'next/font/google'

const serif = YourSerifFont({ ... })
const sans = YourSansFont({ ... })
```

Then update `tailwind.config.ts` to reference these fonts.

---

## Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Deploy with one click
4. Custom domain available through Vercel

### Option 2: Other Platforms

- **Netlify:** Connect GitHub repo, configure build command: `npm run build`
- **AWS Amplify:** Similar to Netlify setup
- **Self-hosted:** Build with `npm run build`, deploy static files

### Domain Setup

1. Purchase domain (Vercel, Namecheap, GoDaddy, etc.)
2. Point domain to hosting platform
3. Configure SSL/HTTPS (automatic with Vercel)
4. Test with your domain

---

## Customization Checklist

- [ ] Update couple names throughout
- [ ] Add real wedding date and time
- [ ] Update venue address and details
- [ ] Add your story (how you met, proposal)
- [ ] Update schedule with actual times
- [ ] Add hotel recommendations
- [ ] Customize FAQ with real questions
- [ ] Update contact email addresses
- [ ] Add couple photos to Story section
- [ ] Change color palette if desired
- [ ] Test on mobile and desktop
- [ ] Deploy to your domain

---

## SEO & Meta Tags

Current metadata in `app/layout.tsx`:
- **Title:** "Sarah & James | Wedding Celebration"
- **Description:** "Join us as we celebrate our love and commitment"

Update these for better search visibility and social sharing.

---

## Accessibility Features

- ✅ Semantic HTML elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast meets WCAG standards
- ✅ Mobile-first responsive design
- ✅ Form labels properly associated

---

## Performance Optimizations

- Image lazy loading
- CSS-in-JS minimization
- Font optimization with Next.js
- Responsive images with `next/image`
- Efficient component re-renders

---

## Future Enhancements

### Suggested Features
- [ ] Photo gallery with lightbox
- [ ] Guest list display (optional)
- [ ] Travel recommendations
- [ ] Registry link integration
- [ ] Wedding hashtag display
- [ ] Live guest count
- [ ] Honeymoon wishlist
- [ ] Music/song list
- [ ] Testimonials from guests
- [ ] Video message section
- [ ] Share buttons for social media
- [ ] Email reminder system

### Backend Integration Ideas
- Email notifications when guests RSVP
- Admin dashboard to view responses
- Dietary restrictions summary
- Guest communication system
- Post-wedding photo sharing

---

## Troubleshooting

### Issue: Images not loading
**Solution:** Ensure images are in `public/` folder and use correct paths `/image-name.jpg`

### Issue: Styles not applying
**Solution:** Clear cache, rebuild project with `npm run build`

### Issue: Form not submitting
**Solution:** Add backend API endpoint and update `components/rsvp.tsx` to call it

### Issue: Mobile menu not working
**Solution:** Check if client component is properly imported with `'use client'`

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## Contact & Support

For questions about this wedding website template, please refer to the couple's contact information or the hosting provider's support.

---

**Last Updated:** March 2025  
**Version:** 1.0  
**Built with:** Next.js 16, React 19, Tailwind CSS 4, TypeScript
