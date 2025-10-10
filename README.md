# BizIT360 Landing Page

A production-ready, responsive landing page for BizIT360 — a U.S.-based property preservation operations partner with a Bangladesh operations hub.

## 🚀 Features

- ✅ **Next.js 15** with App Router and Turbopack
- ✅ **TypeScript** with strict mode for type safety
- ✅ **Tailwind CSS v4** for modern styling
- ✅ **Framer Motion** for smooth animations
- ✅ **React Hook Form + Zod** for form validation
- ✅ **Accessible** - WCAG AA compliant, keyboard navigable, ARIA attributes
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter cards, JSON-LD schema
- ✅ **Contact Form** with server-side validation, honeypot spam protection, and webhook integration
- ✅ **Analytics Ready** - Google Tag Manager and GA4 placeholders
- ✅ **Mobile-First** responsive design
- ✅ **Lighthouse-Friendly** - Optimized for performance and accessibility

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contact Form Setup](#contact-form-setup)
- [Analytics Setup](#analytics-setup)
- [Image Assets](#image-assets)
- [SEO Checklist](#seo-checklist)
- [Accessibility](#accessibility)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/bizit360-landing.git
cd bizit360-landing
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables (see [Environment Variables](#environment-variables))

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Required

```env
# Webhook URL for contact form submissions
WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID
```

### Optional

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Site URL (for canonical URLs)
NEXT_PUBLIC_SITE_URL=https://bizit360.org
```

See `.env.example` for a complete list of available environment variables.

## 📁 Project Structure

```
bizit360-landing/
├── public/
│   ├── images/              # Image assets (see Image Assets section)
│   ├── icon.svg             # App icon/favicon
│   └── manifest.json        # PWA manifest
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/     # Contact form API endpoint
│   │   │       └── route.ts
│   │   ├── layout.tsx       # Root layout with SEO metadata
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── header.tsx       # Navigation header
│   │   ├── hero.tsx         # Hero section with animations
│   │   ├── services.tsx     # Phase 1 services grid
│   │   ├── operations.tsx   # Operations model section
│   │   ├── roadmap.tsx      # Product roadmap
│   │   ├── contact-form.tsx # Contact form with validation
│   │   └── ...              # Other sections
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── hooks/               # Custom React hooks
├── .env.example             # Environment variables template
├── components.json          # shadcn/ui configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 💻 Development

### Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Component Development

All components use:
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations (where appropriate)
- **Accessibility best practices** (ARIA attributes, keyboard navigation, semantic HTML)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will auto-detect Next.js

2. **Configure Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`
   - Set `WEBHOOK_URL`, `NEXT_PUBLIC_GTM_ID`, etc.

3. **Deploy:**
   ```bash
   # Or deploy from CLI
   npx vercel
   ```

4. **Custom Domain:**
   - Go to Project Settings → Domains
   - Add `bizit360.org`
   - Update DNS settings as instructed

### Deploy to Other Platforms

The project works on any platform that supports Next.js:
- **Netlify**: Use Next.js Runtime
- **AWS Amplify**: Connect Git repo
- **Railway**: Deploy from GitHub
- **Self-hosted**: Use `npm run build && npm start`

## 📧 Contact Form Setup

The contact form at `/api/contact` supports:
- ✅ Server-side validation with Zod
- ✅ Honeypot spam protection
- ✅ Webhook integration
- ✅ Email notifications (configurable)

### Webhook Integration

1. **Set up a webhook endpoint:**
   - **Zapier**: Create a "Catch Hook" trigger → https://zapier.com
   - **Make.com**: Create a webhook scenario → https://make.com
   - **n8n**: Self-hosted webhook → https://n8n.io
   - **Webhook.site**: For testing → https://webhook.site

2. **Configure the webhook URL:**
   ```env
   WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_KEY
   ```

3. **Test the integration:**
   - Submit the contact form
   - Check webhook endpoint for received data

### Email Service (Optional)

To send email notifications to `info@bizit360.com`:

1. Install an email service SDK:
   ```bash
   # Option 1: Resend (recommended)
   npm install resend

   # Option 2: SendGrid
   npm install @sendgrid/mail
   ```

2. Add API key to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

3. Uncomment email code in `src/app/api/contact/route.ts`

## 📊 Analytics Setup

### Google Tag Manager

1. Create a GTM account at [tagmanager.google.com](https://tagmanager.google.com)
2. Get your Container ID (GTM-XXXXXXX)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
4. The script will load automatically in `layout.tsx`

### Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```
4. The script will load automatically in `layout.tsx`

## 🖼️ Image Assets

Replace placeholder images in `/public/images/`:

| File | Dimensions | Purpose |
|------|------------|---------|
| `og-image.jpg` | 1200×630px | Open Graph social sharing |
| `twitter-image.jpg` | 1200×600px | Twitter card image |
| `logo.png` | 500×500px | Logo for schema markup |
| Hero image | 1200×900px | Main hero section image |

See `/public/images/README.md` for detailed instructions and recommended tools.

## ✅ SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter card tags
- [x] JSON-LD structured data (Organization schema)
- [x] Canonical URL
- [x] robots.txt (auto-generated by Next.js)
- [x] sitemap.xml (can be added with `next-sitemap`)
- [ ] Replace `og-image.jpg` and `twitter-image.jpg` with branded images
- [ ] Update Google Search Console verification code in `layout.tsx`
- [ ] Submit sitemap to Google Search Console
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

## ♿ Accessibility

This site follows WCAG 2.1 AA standards:

- ✅ Semantic HTML throughout
- ✅ Keyboard navigation support
- ✅ ARIA labels and attributes
- ✅ Focus visible states
- ✅ Color contrast ratios (4.5:1 for text)
- ✅ Alt text for all images
- ✅ Form labels and error messages
- ✅ Skip to main content (can be added)

### Testing

```bash
# Run Lighthouse audit
npm run build
npm start
# Open DevTools → Lighthouse → Run audit
```

Target scores:
- Performance: ≥85
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

## 🧪 Testing the Contact Form

1. Start dev server: `npm run dev`
2. Navigate to `http://localhost:3000#contact`
3. Fill out the form with test data
4. Submit and check:
   - Network tab for API response
   - Server logs for webhook POST
   - Your webhook endpoint for received data

### Honeypot Testing

The form includes a hidden `website` field. Bots that fill it out will be rejected:
- Normal users: Field stays empty → Form submits
- Bots: Fill all fields including hidden → 400 error

## 📝 License

Proprietary - BizIT360

## 🤝 Support

For issues or questions:
- Email: info@bizit360.com
- Website: https://bizit360.org

---

**Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion**
