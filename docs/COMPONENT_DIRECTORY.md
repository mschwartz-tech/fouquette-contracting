# Component Directory

This document catalogs all UI components used in the Fouquette Contracting website. Components are organized by category and include details about their purpose, props/API, creation date, and last updated date.

## Layout Components

### Header
- **Component Path**: `src/components/layout/Header.jsx`
- **Purpose**: Main navigation header that appears on all pages with logo and navigation links
- **Props/API**:
  - `isSticky` (boolean): When true, header shrinks on scroll
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Footer
- **Component Path**: `src/components/layout/Footer.jsx`
- **Purpose**: Site footer that appears on all pages with logo, contact information, and copyright
- **Props/API**: None
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### PageContainer
- **Component Path**: `src/components/layout/PageContainer.jsx`
- **Purpose**: Container component that wraps all page content with consistent padding and max-width
- **Props/API**:
  - `children` (React.ReactNode): Content to be wrapped
  - `fullWidth` (boolean): When true, container takes full width
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

## UI Components

### Button
- **Component Path**: `src/components/ui/Button.jsx`
- **Purpose**: Reusable button component with consistent styling
- **Props/API**:
  - `children` (React.ReactNode): Button text or content
  - `variant` (string): 'primary' (orange) or 'secondary' (black)
  - `size` (string): 'sm', 'md', or 'lg'
  - `onClick` (function): Click handler
  - `className` (string): Additional CSS classes
  - `type` (string): HTML button type (button, submit, reset)
  - `disabled` (boolean): Disables the button when true
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Card
- **Component Path**: `src/components/ui/Card.jsx`
- **Purpose**: Card container with consistent styling for grid/list items
- **Props/API**:
  - `children` (React.ReactNode): Card content
  - `className` (string): Additional CSS classes
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### ImageGallery
- **Component Path**: `src/components/ui/ImageGallery.jsx`
- **Purpose**: Grid layout for gallery images with lightbox functionality
- **Props/API**:
  - `images` (array): Array of image objects with src, alt, and title properties
  - `columnCount` (number): Number of columns in the grid
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Testimonial
- **Component Path**: `src/components/ui/Testimonial.jsx`
- **Purpose**: Component to display a single testimonial
- **Props/API**:
  - `quote` (string): Testimonial quote text
  - `author` (string): Name of the person giving the testimonial
  - `rating` (number): 1-5 rating
  - `image` (string): Optional image URL
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### Accordion
- **Component Path**: `src/components/ui/Accordion.jsx`
- **Purpose**: Expandable accordion component for FAQs
- **Props/API**:
  - `items` (array): Array of items with title and content properties
  - `defaultOpen` (number): Index of item to be open by default
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### ContactForm
- **Component Path**: `src/components/ui/ContactForm.jsx`
- **Purpose**: Reusable contact form with validation
- **Props/API**:
  - `onSubmit` (function): Form submission handler
  - `showServiceField` (boolean): When true, includes service dropdown
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

## Admin Components

### AdminSidebar
- **Component Path**: `src/components/admin/AdminSidebar.jsx`
- **Purpose**: Navigation sidebar for the admin dashboard
- **Props/API**:
  - `activePage` (string): Current active page to highlight
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### ContentEditor
- **Component Path**: `src/components/admin/ContentEditor.jsx`
- **Purpose**: General purpose content editing component for text content
- **Props/API**:
  - `content` (string): Initial content
  - `onSave` (function): Save handler
  - `fieldType` (string): 'input' or 'textarea'
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### ImageUploader
- **Component Path**: `src/components/admin/ImageUploader.jsx`
- **Purpose**: Component for uploading and managing images
- **Props/API**:
  - `initialImages` (array): Array of existing images
  - `onSave` (function): Save handler
  - `maxFiles` (number): Maximum number of files allowed
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### DynamicListEditor
- **Component Path**: `src/components/admin/DynamicListEditor.jsx`
- **Purpose**: Component for editing dynamic lists (services, testimonials, FAQs)
- **Props/API**:
  - `items` (array): Array of list items
  - `onSave` (function): Save handler
  - `template` (object): Template object for new items
  - `renderItem` (function): Function to render each item
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13

### SEOEditor
- **Component Path**: `src/components/admin/SEOEditor.jsx`
- **Purpose**: Component for editing SEO metadata
- **Props/API**:
  - `title` (string): Initial title
  - `description` (string): Initial description
  - `onSave` (function): Save handler
- **Creation Date**: 2025-05-13
- **Last Updated Date**: 2025-05-13
