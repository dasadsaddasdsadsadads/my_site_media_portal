# MediaPortal - Media Content Hub

## Overview

MediaPortal is a full-stack web application that serves as a centralized hub for various types of media content including education, movies, music, and books. The application features a modern, responsive design with Russian language support and provides an intuitive interface for users to browse and discover content across different media categories.

The project is built as a single-page application (SPA) with a React frontend and Express.js backend, following a clean monorepo structure with shared components and utilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **Styling**: Tailwind CSS with a custom design system using CSS variables for theming
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI elements
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire stack for consistency
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot module replacement (HMR) with Vite middleware integration

### Data Layer
- **ORM**: Drizzle ORM chosen for its TypeScript-first approach and excellent performance
- **Schema**: Centralized schema definition in shared directory for consistency between client and server
- **Validation**: Zod integration with Drizzle for runtime type validation
- **Migrations**: Drizzle Kit for database schema migrations and management

### Project Structure
- **Monorepo Design**: Client, server, and shared code organized in separate directories
- **Shared Components**: Common types, schemas, and utilities shared between frontend and backend
- **Asset Management**: Centralized attached assets directory for media files
- **Configuration**: Unified TypeScript configuration with path mapping for clean imports

### UI/UX Design System
- **Theme**: Custom CSS variables-based theming system supporting light/dark modes
- **Typography**: Multiple font families including Inter, Georgia, and Menlo for different content types
- **Color Palette**: Neutral-based color system with primary purple/indigo accent colors
- **Component Variants**: Class variance authority (CVA) for consistent component styling
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### Development Environment
- **Hot Reloading**: Vite dev server with Express middleware integration
- **Error Handling**: Runtime error overlay for development debugging
- **Code Quality**: ESLint and TypeScript strict mode for code consistency
- **Module Resolution**: Modern ESM modules throughout the stack

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching solution
- **wouter**: Lightweight routing library for React applications
- **framer-motion**: Animation library for smooth UI transitions

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of low-level UI primitives for accessibility
- **class-variance-authority**: Utility for creating consistent component variants
- **clsx & tailwind-merge**: Utility libraries for conditional CSS classes

### Database and Backend
- **@neondatabase/serverless**: Neon Database driver for PostgreSQL operations
- **drizzle-orm**: Modern TypeScript ORM for database operations
- **drizzle-kit**: CLI tools for database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development tools and error handling

### Utility Libraries
- **date-fns**: Modern date utility library for JavaScript
- **lucide-react**: Icon library with React components
- **nanoid**: URL-safe unique string ID generator
- **cmdk**: Command palette component for search functionality

The architecture emphasizes type safety, developer experience, and modern web standards while maintaining simplicity and performance. The chosen technologies work together to provide a scalable foundation for a media content platform.