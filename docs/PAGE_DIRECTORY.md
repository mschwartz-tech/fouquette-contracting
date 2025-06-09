# Page Directory

This document catalogs all pages in the Fouquette Contracting website. Each entry includes the page path, route, purpose, component dependencies, creation date, and last updated date.

## Public Pages

### Home Page
- **Page Path**: `src/pages/HomePage.jsx`
- **Route**: `/`
- **Purpose**: Main landing page showcasing Fouquette Contracting's services with hero section, quick links, and optional featured projects
- **Component Dependencies**: 
  - `Header`
  - `Footer`
  - `PageContainer`
  - `Button`
  - `Card`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### About Page
- **Page Path**: `src/pages/AboutPage.jsx`
- **Route**: `/about`
- **Purpose**: Describes the company mission, story, values, and includes founder photo
- **Component Dependencies**: 
  - `Header`
  - `Footer`
  - `PageContainer`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Services Page
- **Page Path**: `src/pages/ServicesPage.jsx`
- **Route**: `/services`
- **Purpose**: Grid layout displaying all services offered by Fouquette Contracting
- **Component Dependencies**: 
  - `Header`
  - `Footer`
  - `PageContainer`
  - `Card`
  - `Button`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Gallery Page
- **Page Path**: `src/pages/GalleryPage.jsx`
- **Route**: `/gallery`
- **Purpose**: Masonry grid displaying project photos with lightbox functionality
- **Component Dependencies**: 
  - `Header`
  - `Footer`
  - `PageContainer`
  - `ImageGallery`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Testimonials Page
- **Page Path**: `src/pages/TestimonialsPage.jsx`
- **Route**: `/testimonials`
- **Purpose**: Carousel displaying client testimonials with quotes and ratings
- **Component Dependencies**: 
  - `Header`
  - `Footer`
  - `PageContainer`
  - `Testimonial`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### FAQ Page
- **Page Path**: `src/pages/FAQPage.jsx`
- **Route**: `/faq`
- **Purpose**: Accordion-style frequently asked questions and answers
- **Component Dependencies**: 
  - `Header`
  - `Footer`
  - `PageContainer`
  - `Accordion`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Booking Page
- **Page Path**: `src/pages/BookingPage.jsx`
- **Route**: `/booking`
- **Purpose**: Consultation booking page with form and optional Calendly integration
- **Component Dependencies**: 
  - `Header`
  - `Footer`
  - `PageContainer`
  - `ContactForm`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Contact Page
- **Page Path**: `src/pages/ContactPage.jsx`
- **Route**: `/contact`
- **Purpose**: Contact information, Google Maps integration, and contact form
- **Component Dependencies**: 
  - `Header`
  - `Footer`
  - `PageContainer`
  - `ContactForm`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

## Admin Pages

### Admin Login Page
- **Page Path**: `src/pages/admin/AdminLoginPage.tsx`
- **Route**: `/admin/login`
- **Purpose**: Authentication page for admin users
- **Component Dependencies**: 
  - `Button`
  - `Helmet`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin Dashboard Page
- **Page Path**: `src/pages/admin/AdminDashboardPage.tsx`
- **Route**: `/admin`
- **Purpose**: Main admin dashboard landing page with website analytics, quick actions, and recent content updates
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Helmet`
  - `Link`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin Home Editor
- **Page Path**: `src/pages/admin/AdminHomeEditor.tsx`
- **Route**: `/admin/home`
- **Purpose**: Editor for home page content and SEO with sections for hero, intro, featured services, and more
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
  - `dataService`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin About Editor
- **Page Path**: `src/pages/admin/AdminAboutEditor.tsx`
- **Route**: `/admin/about`
- **Purpose**: Editor for about page content and SEO with sections for company story, values, team members, and more
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
  - `dataService`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin Services Editor
- **Page Path**: `src/pages/admin/AdminServicesEditor.tsx`
- **Route**: `/admin/services`
- **Purpose**: Editor for managing service items with title, descriptions, features and images
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
  - `dataService`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin Gallery Editor
- **Page Path**: `src/pages/admin/AdminGalleryEditor.tsx`
- **Route**: `/admin/gallery`
- **Purpose**: Editor for managing gallery images with filtering by category, toggling featured status, and category management
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
  - `dataService`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin Testimonials Editor
- **Page Path**: `src/pages/admin/AdminTestimonialsEditor.tsx`
- **Route**: `/admin/testimonials`
- **Purpose**: Editor for managing client testimonials with rating systems, client photos, and project information
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
  - `dataService`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin FAQ Editor
- **Page Path**: `src/pages/admin/AdminFAQEditor.tsx`
- **Route**: `/admin/faq`
- **Purpose**: Editor for FAQ items with reordering capabilities, rich text editing, and SEO settings
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
  - `dataService`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin Booking Editor
- **Page Path**: `src/pages/admin/AdminBookingEditor.tsx`
- **Route**: `/admin/booking`
- **Purpose**: Editor for booking page content, form fields, calendar integration, and SEO settings
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin Contact Editor
- **Page Path**: `src/pages/admin/AdminContactEditor.tsx`
- **Route**: `/admin/contact`
- **Purpose**: Editor for contact information, Google Maps integration, contact form fields, social media links, and SEO settings
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Admin Global Settings
- **Page Path**: `src/pages/admin/AdminGlobalSettings.tsx`
- **Route**: `/admin/settings`
- **Purpose**: Editor for global site settings including company information, contact details, social media, navigation, footer content, and default SEO settings
- **Component Dependencies**: 
  - `AdminSidebar` (via AdminLayout)
  - `Card`
  - `Button`
  - `Helmet`
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13
