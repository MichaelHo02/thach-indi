# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs Vite dev server on default port)
- **Build for production**: `npm run build` (TypeScript compilation + Vite build)
- **Lint code**: `npm run lint` (ESLint with TypeScript support)
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React portfolio website built with Vite, showcasing mobile apps with individual landing pages. The project has migrated from static HTML to a modern React + TypeScript stack.

### Key Architecture Components

- **Framework**: Vite + React 19 + TypeScript
- **Routing**: React Router with basename `/thach-indi` for GitHub Pages deployment
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Path Aliases**: `@/` maps to `./src/` directory

### Project Structure

- `src/pages/` - Main application pages (HomePage, TimeJarPage, QuestionsGamePage, PrivacyPage)
- `src/components/` - Reusable components including Navbar and Footer
- `src/components/ui/` - shadcn/ui component library (Button, Card, Badge, etc.)
- `apps/` - Legacy static HTML files (being migrated to React pages)
- `public/` and `src/assets/` - Static assets (app icons, promotional images)

### Router Configuration

The app uses React Router with `/thach-indi` basename to match GitHub Pages deployment. Main routes:
- `/` - Homepage with app showcase
- `/apps/time-jar` - Time Jar app landing page
- `/apps/questions-game` - Questions Game app landing page
- Privacy pages for each app

### shadcn/ui Integration

Components are configured with:
- Default style variant
- Slate base color scheme
- CSS variables for theming
- Component aliases: `@/components` and `@/lib/utils`

Use `npx shadcn@latest add [component-name]` to add new UI components.

### Styling Approach

- Tailwind CSS with custom CSS variables for shadcn/ui theming
- Dark mode support via class-based strategy
- Responsive design with mobile-first approach
- Custom color system using HSL values via CSS custom properties