# Component Library

## Overview

The Fouquette Contracting website includes a comprehensive component library built with React, TypeScript, and SCSS. All components follow consistent design patterns, accessibility standards, and responsive design principles.

## Layout Components

### MainLayout
Main layout wrapper with header, footer, and skip links.
```tsx
import { MainLayout } from '../components/layout';
// Used automatically by router
```

### Header
Responsive navigation header with mobile menu.
```tsx
import { Header } from '../components/layout';
<Header isSticky={true} />
```

### Footer
Site footer with contact information and links.
```tsx
import { Footer } from '../components/layout';
<Footer />
```

## UI Components

### Hero
Reusable hero section with background images and CTAs.
```tsx
import { Hero } from '../components/ui';

<Hero
  title="Page Title"
  subtitle="Optional subtitle"
  backgroundImage="/path/to/image.jpg"
  height="large"
  alignment="center"
  overlay={true}
>
  <Button variant="primary" to="/contact">Get Started</Button>
</Hero>
```

**Props:**
- `title` (string): Main heading
- `subtitle` (string, optional): Subtitle text
- `backgroundImage` (string, optional): Background image URL
- `height` ('small' | 'medium' | 'large' | 'full'): Hero height
- `alignment` ('left' | 'center' | 'right'): Text alignment
- `overlay` (boolean): Show dark overlay
- `overlayOpacity` (number): Overlay opacity (0-1)

### Section
Consistent section wrapper with container and spacing.
```tsx
import { Section } from '../components/ui';

<Section
  title="Section Title"
  subtitle="Section subtitle"
  background="light"
  spacing="lg"
  container="default"
>
  {/* Content */}
</Section>
```

**Props:**
- `title` (string, optional): Section heading
- `subtitle` (string, optional): Section subtitle
- `background` ('none' | 'light' | 'dark' | 'primary'): Background color
- `spacing` ('sm' | 'md' | 'lg' | 'xl'): Vertical padding
- `container` ('default' | 'narrow' | 'wide' | 'fluid'): Container width

### Button
Versatile button component with multiple variants.
```tsx
import { Button } from '../components/ui';

<Button variant="primary" size="lg" to="/contact">
  Contact Us
</Button>

<Button variant="secondary" onClick={handleClick}>
  Click Me
</Button>
```

**Props:**
- `variant` ('primary' | 'secondary' | 'text'): Button style
- `size` ('sm' | 'md' | 'lg'): Button size
- `fullWidth` (boolean): Full width button
- `to` (string, optional): Router link destination
- `onClick` (function, optional): Click handler

### Card
Container component with elevation and padding.
```tsx
import { Card } from '../components/ui';

<Card className="service-card" elevation={2}>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

**Props:**
- `elevation` (0 | 1 | 2 | 3): Shadow depth
- `padding` ('sm' | 'md' | 'lg'): Internal padding
- `className` (string): Additional CSS classes

### ImageGallery
Advanced image gallery with lightbox and responsive layout.
```tsx
import { ImageGallery } from '../components/ui';

<ImageGallery
  images={[
    { src: '/image1.jpg', alt: 'Image 1', title: 'Project 1' },
    { src: '/image2.jpg', alt: 'Image 2', title: 'Project 2' }
  ]}
  responsive={true}
  aspectRatio="4-3"
  gap={24}
/>
```

**Props:**
- `images` (GalleryImage[]): Array of image objects
- `responsive` (boolean): Auto-responsive grid
- `aspectRatio` ('auto' | 'square' | '16-9' | '4-3'): Image aspect ratio
- `columnCount` (number): Fixed column count (when responsive=false)
- `gap` (number): Gap between images

### LoadingSpinner
Consistent loading indicator with accessibility.
```tsx
import { LoadingSpinner } from '../components/ui';

<LoadingSpinner
  size="medium"
  message="Loading content..."
  center={true}
/>
```

**Props:**
- `size` ('small' | 'medium' | 'large'): Spinner size
- `message` (string): Loading message
- `center` (boolean): Center in container

### ErrorFallback
Error state component with retry functionality.
```tsx
import { ErrorFallback } from '../components/ui';

<ErrorFallback
  title="Something went wrong"
  message="Please try again"
  onRetry={handleRetry}
  showRetry={true}
/>
```

**Props:**
- `title` (string): Error title
- `message` (string): Error message
- `onRetry` (function, optional): Retry handler
- `showRetry` (boolean): Show retry button
- `center` (boolean): Center in container

### ContactForm
Form component with validation and submission.
```tsx
import { ContactForm } from '../components/ui';

<ContactForm
  onSubmit={handleSubmit}
  showServiceField={true}
  submitButtonText="Send Message"
  isSubmitting={false}
/>
```

**Props:**
- `onSubmit` (function): Form submission handler
- `showServiceField` (boolean): Include service dropdown
- `submitButtonText` (string): Submit button text
- `isSubmitting` (boolean): Loading state

### Accordion
Collapsible content sections.
```tsx
import { Accordion } from '../components/ui';

<Accordion
  items={[
    { title: 'Question 1', content: 'Answer 1' },
    { title: 'Question 2', content: 'Answer 2' }
  ]}
  allowMultiple={false}
/>
```

**Props:**
- `items` (AccordionItem[]): Array of accordion items
- `allowMultiple` (boolean): Allow multiple open sections

### SkipLink
Accessibility skip navigation link.
```tsx
import { SkipLink } from '../components/ui';

<SkipLink href="#main-content">
  Skip to main content
</SkipLink>
```

**Props:**
- `href` (string): Target element ID
- `children` (ReactNode): Link text

### ErrorBoundary
React error boundary for catching component errors.
```tsx
import { ErrorBoundary } from '../components/ui';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

## Layout Utilities

### Grid System
```tsx
// Responsive CSS Grid
<div className="grid grid--cols-3 grid--gap-lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Flexbox Grid
<div className="flex-grid flex-grid--center">
  <div className="flex-item">Item 1</div>
  <div className="flex-item flex-item--2">Item 2 (2x width)</div>
</div>
```

### Container System
```tsx
<div className="container">Default container</div>
<div className="container container--narrow">Narrow container</div>
<div className="container container--wide">Wide container</div>
<div className="container container--fluid">Fluid container</div>
```

### Utility Classes
```tsx
// Display
<div className="d-flex justify-center align-center">
  Centered content
</div>

// Spacing
<div className="mt-4 mb-2 p-3">
  Spaced content
</div>

// Responsive visibility
<div className="hide-mobile show-desktop">
  Desktop only
</div>
```

## Design Tokens

### Colors
- `--color-primary`: #FFA500 (Orange)
- `--color-secondary`: #000000 (Black)
- `--color-white`: #FFFFFF
- `--color-light-gray`: #F5F5F5
- `--color-dark-gray`: #666666

### Typography
- `--font-family`: 'Roboto', Arial, sans-serif
- `--font-size-h1`: 36px
- `--font-size-h2`: 28px
- `--font-size-body`: 16px

### Spacing
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-xxl`: 48px

### Breakpoints
- `--breakpoint-mobile`: 576px
- `--breakpoint-tablet`: 768px
- `--breakpoint-desktop-small`: 992px
- `--breakpoint-desktop-large`: 1200px

## Best Practices

### Component Usage
1. **Import from index**: Use `import { Component } from '../components/ui'`
2. **Consistent props**: Follow established prop patterns
3. **Accessibility**: Include proper ARIA labels and roles
4. **Responsive**: Test on multiple screen sizes
5. **Performance**: Use lazy loading for images

### Layout Guidelines
1. **Mobile-first**: Design for mobile, enhance for desktop
2. **Consistent spacing**: Use spacing scale variables
3. **Grid system**: Prefer grid utilities over custom CSS
4. **Container usage**: Always wrap content in containers
5. **Semantic HTML**: Use appropriate HTML elements

### Styling
1. **CSS Variables**: Use design tokens for consistency
2. **BEM methodology**: Follow block__element--modifier naming
3. **Responsive design**: Use mobile-first media queries
4. **Accessibility**: Ensure proper contrast and focus states
5. **Performance**: Optimize CSS for critical rendering path

## Contributing

When adding new components:
1. Create component in appropriate directory
2. Include TypeScript interfaces
3. Add SCSS with BEM naming
4. Export from index.ts
5. Add documentation and examples
6. Test accessibility and responsiveness 