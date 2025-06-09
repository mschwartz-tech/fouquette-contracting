# Fouquette Contracting Website

A professional static website for Fouquette Contracting, a Minnesota-based masonry and construction business. This website showcases services, past projects, and provides contact information for potential clients.

## Technology Stack

- **Frontend**: React with TypeScript and Vite
- **Styling**: SCSS with CSS modules
- **Deployment**: Netlify via GitHub repository
- **Data**: Hardcoded JSON files for content

## Project Structure

```
src/
├── assets/        # Static assets like images and icons
├── components/    # Reusable UI components
│   ├── layout/    # Layout components (Header, Footer, etc.)
│   └── ui/        # UI components (Button, Card, etc.)
├── data/          # Static JSON data files
│   └── mock/      # Content data for all pages
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── router/        # Routing configuration
├── services/      # Service layer for data access
├── styles/        # Global styles and variables
└── utils/         # Utility functions
```

## Features

- **Public Website**: 8 pages (Home, About, Services, Gallery, Testimonials, FAQ, Booking, Contact)
- **Responsive Design**: Mobile-first approach
- **SEO Optimization**: Meta tags with React Helmet
- **Contact Form**: Functional contact form with validation
- **Image Gallery**: Responsive gallery with filtering
- **Performance**: Optimized with lazy loading and code splitting

## Pages

1. **Home** - Hero section, featured services, testimonials
2. **About** - Company history, team, values
3. **Services** - Detailed service offerings
4. **Gallery** - Project photos organized by category
5. **Testimonials** - Customer reviews and feedback
6. **FAQ** - Frequently asked questions
7. **Booking** - Service booking form
8. **Contact** - Contact information and form

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Content Management

All content is stored in JSON files located in `src/data/mock/`:

- `services.json` - Service listings
- `testimonials.json` - Customer testimonials
- `faqs.json` - Frequently asked questions
- `gallery.json` - Gallery images and metadata
- `pages/` - Page-specific content

To update content, simply edit the relevant JSON files and rebuild the application.

## Deployment

The website is deployed to Netlify. The deployment is triggered automatically when changes are pushed to the `main` branch.

## Customization

### Adding New Content

1. Edit the relevant JSON files in `src/data/mock/`
2. Rebuild the application
3. Deploy the changes

### Styling

- Global styles are in `src/styles/`
- Component-specific styles use SCSS modules
- Responsive breakpoints are defined in `src/styles/variables.scss`

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route to `src/router/index.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

## License

All rights reserved. This codebase is the property of Fouquette Contracting.
