# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (Next.js 15.3.5)
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks using Next.js configuration

## Project Architecture

This is a Next.js 15 application using the App Router architecture with the following structure:

### Core Technologies
- **Next.js 15.3.5** with App Router
- **React 19** 
- **Tailwind CSS 4** with PostCSS integration
- **ESLint** with Next.js core-web-vitals configuration

### Application Structure
- `app/` - Next.js App Router directory
  - `layout.js` - Root layout with basic HTML structure and metadata
  - `page.js` - Home page component featuring Calvin Williams' portfolio
  - `globals.css` - Global styles with Tailwind imports and custom CSS variables

### Key Features
- Portfolio website for Calvin Williams (web developer and illustrator)
- Interactive preview system for project showcase
- Custom blur effects using Tailwind utilities (`.text-blur` class)
- Color scheme using CSS custom properties (--background, --default, --light)
- Responsive design with Tailwind utility classes

### Styling System
- Uses Tailwind CSS 4 with custom utility classes
- CSS custom properties for consistent theming
- Custom components: `.circle`, `.rectangle`, `.text-blur`
- Hover effects with blur transitions

### Navigation Structure
The application references multiple routes that may not exist yet:
- `/home`, `/about`, `/contact`, `/guests`

### State Management
- Uses React's built-in `useState` for simple component state
- Preview toggle functionality for project showcases

## Important Notes
- The project uses ES modules throughout (`.mjs` config files)
- Path aliases configured via `jsconfig.json` (`@/*` maps to root)
- Custom CSS variables defined in `:root` for theming consistency