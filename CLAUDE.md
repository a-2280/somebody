# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (default port 3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Project Architecture

This is a Next.js 15 application using the App Router pattern with the following structure:

- **App Router**: Routes are defined in `app/` directory with page.js files
- **Components**: Reusable components in `components/` directory  
- **Styling**: TailwindCSS v4 for styling with global styles in `app/globals.css`
- **Path Aliases**: `@/` maps to project root (configured in jsconfig.json)

### Key Architecture Patterns

- **Layout System**: Root layout (`app/layout.js`) includes shared Navbar component and global styling
- **Page Structure**: Each route has its own directory with a `page.js` file (e.g., `app/about/page.js`)
- **Component Import**: Uses `@/components/` alias for component imports
- **Static Site**: Portfolio/personal website showcasing web development work

### Technology Stack

- Next.js 15.3.5 with App Router
- React 19
- TailwindCSS v4 with PostCSS
- ESLint with Next.js core web vitals configuration
- Development accelerated with Turbopack

### Current Pages

- Home (`/`) - Portfolio preview list
- About (`/about`) - About page
- Contact (`/contact`) - Contact information  
- Form (`/form`) - Form page

The site appears to be a personal portfolio for Calvin Williams showcasing web development projects.