# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for BizIT360, a property preservation and field services company. The project uses the App Router architecture with TypeScript and is built with modern React patterns.

## Key Technologies & Architecture

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Font**: Inter (Google Fonts)
- **Build Tool**: Turbopack (enabled for dev and build)

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Inter font
│   ├── page.tsx           # Homepage with all sections
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation component
│   ├── hero.tsx          # Landing hero section
│   ├── services.tsx      # Services section
│   └── ... (other sections)
├── hooks/                # Custom React hooks
├── lib/                  # Utilities
│   └── utils.ts          # Tailwind class merging utilities
└── styles/               # Additional stylesheets
```

## Component Architecture

The homepage (`src/app/page.tsx`) is structured as a single-page application with multiple sections:
- Header (navigation)
- Hero section
- Trust bar
- Services overview
- Process explanation
- Coverage areas
- Vendor network
- Careers section
- Testimonials
- Contact form
- Footer

## Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `./src/*`
- `@/components` → `./src/components`
- `@/lib` → `./src/lib`
- `@/hooks` → `./src/hooks`

## Key Configuration Files

- `components.json`: shadcn/ui configuration (New York style, RSC enabled)
- `eslint.config.mjs`: ESLint with Next.js and TypeScript rules
- `tsconfig.json`: TypeScript config with strict mode and path aliases
- `next.config.ts`: Next.js configuration (minimal setup)

## Styling Approach

- Uses Tailwind CSS v4 with CSS variables for theming
- Base color: neutral
- Components follow shadcn/ui design system patterns
- Responsive design with mobile-first approach

## Development Notes

- All components are React Server Components by default
- Uses TypeScript strict mode for type safety
- ESLint configured for Next.js best practices
- Build process uses Turbopack for faster compilation
- No testing framework currently configured