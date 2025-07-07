# Replit.md - Technical Project Manager Portfolio

## Overview

This is a full-stack web application showcasing a Technical Project Manager's professional portfolio. The application is built using a modern tech stack with React/TypeScript on the frontend and Node.js/Express on the backend, featuring a PostgreSQL database for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Driver**: Neon Database serverless driver
- **API Design**: RESTful API with JSON responses
- **File Serving**: Static file serving for assets (CV downloads)

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Personal background and skills showcase
- **Projects Section**: Interactive project portfolio with filtering
- **Contact Section**: Contact form with validation and submission
- **Footer**: Professional contact information

### Backend Components
- **Route Handler**: Centralized route registration in `server/routes.ts`
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Contact Management**: API endpoints for contact form submissions
- **Asset Management**: CV download functionality
- **Error Handling**: Global error handling middleware

## Data Flow

### Contact Form Submission
1. User fills out contact form in the frontend
2. Form data is validated using Zod schema
3. Data is sent to `/api/contact` endpoint
4. Backend validates data and stores in database
5. Success/error response is returned to frontend
6. User receives toast notification

### Project Data Display
1. Project data is loaded from static JSON file
2. Frontend displays projects with filtering capabilities
3. Users can filter by customer type (Government, Media, Museum, Retail)
4. Real-time filtering updates the displayed projects

### CV Download
1. User clicks download CV button
2. Request is sent to `/api/download-cv` endpoint
3. Server serves PDF file from attached_assets directory
4. File is downloaded with appropriate headers

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date formatting
- **Animations**: Framer Motion via Radix UI animations

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution in development

### Build Dependencies
- **Bundling**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript support across the stack
- **Linting**: ESLint configuration for code quality

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with auto-restart on file changes
- **Database**: Development database with Drizzle migrations
- **Asset Serving**: Static file serving through Express

### Production Build
- **Frontend**: Vite production build to `dist/public`
- **Backend**: esbuild bundle to `dist/index.js`
- **Database**: PostgreSQL with connection pooling
- **Asset Optimization**: Compressed assets and static file caching

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable required
- **Build Mode**: `NODE_ENV` for environment-specific behavior
- **Development Tools**: Replit-specific plugins for development

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 07, 2025. Initial setup