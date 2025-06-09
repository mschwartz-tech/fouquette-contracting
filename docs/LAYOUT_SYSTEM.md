# Layout System Documentation

## Overview

The Fouquette Contracting website uses a comprehensive layout system built with modern CSS Grid, Flexbox, and responsive design principles. This system provides consistent spacing, typography, and component behavior across all pages.

## Container System

### Basic Container
```tsx
<div className="container">
  {/* Content with max-width and centered */}
</div>
```

### Container Variants
- `container--narrow`: Max-width 800px for content-focused pages
- `container--wide`: Max-width 1400px for wider layouts
- `container--fluid`: No max-width, full viewport width
- `container--full-height`: Minimum height 100vh

## Grid System

### CSS Grid Layout
```tsx
// Basic 3-column grid
<div className="grid grid--cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Responsive grid with custom gap
<div className="grid grid--cols-4 grid--gap-lg">
  {/* Items automatically stack on mobile */}
</div>
```

### Grid Variants
- `grid--cols-1` to `grid--cols-6`: Column count
- `grid--gap-sm`: 0.5rem gap
- `grid--gap-lg`: 2rem gap
- Default gap: 1rem

### Flexbox Grid Alternative
```tsx
<div className="flex-grid flex-grid--center">
  <div className="flex-item">Equal width</div>
  <div className="flex-item flex-item--2">2x width</div>
  <div className="flex-item flex-item--auto">Auto width</div>
</div>
```

## Section Component

### Basic Usage
```tsx
import Section from '../components/ui/Section';

<Section 
  title="Section Title"
  subtitle="Optional subtitle"
  background="light"
  spacing="lg"
  container="default"
>
  {/* Content */}
</Section>
```

### Props
- `background`: 'none' | 'light' | 'dark' | 'primary'
- `spacing`: 'sm' | 'md' | 'lg' | 'xl'
- `container`: 'default' | 'narrow' | 'wide' | 'fluid'

## Hero Component

### Basic Usage
```tsx
import Hero from '../components/ui/Hero';

<Hero
  title="Page Title"
  subtitle="Optional subtitle"
  backgroundImage="/path/to/image.jpg"
  overlay={true}
  height="large"
  alignment="center"
>
  <Button variant="primary" to="/contact">
    Call to Action
  </Button>
</Hero>
```

### Props
- `height`: 'small' | 'medium' | 'large' | 'full'
- `alignment`: 'left' | 'center' | 'right'
- `overlay`: boolean (default: true)
- `overlayOpacity`: number (default: 0.5)

## Enhanced ImageGallery

### Basic Usage
```tsx
import ImageGallery from '../components/ui/ImageGallery';

<ImageGallery
  images={galleryImages}
  responsive={true}
  aspectRatio="4-3"
  gap={24}
/>
```

### Props
- `responsive`: boolean - Uses CSS Grid auto-fill
- `aspectRatio`: 'auto' | 'square' | '16-9' | '4-3'
- `columnCount`: number (when responsive=false)

## Layout Utilities

### Display
- `.d-flex`, `.d-grid`, `.d-block`, `.d-none`

### Flexbox
- `.flex-column`, `.flex-row`, `.flex-wrap`
- `.justify-center`, `.justify-between`, `.justify-around`
- `.align-center`, `.align-start`, `.align-end`

### Sizing
- `.w-100`, `.h-100`, `.min-h-screen`

### Position
- `.position-relative`, `.position-absolute`, `.position-fixed`

### Responsive Visibility
- `.show-mobile`, `.hide-mobile`
- `.show-tablet`, `.hide-tablet`
- `.show-desktop`, `.hide-desktop`

## Spacing System

### Margin Utilities
- `.mt-0` to `.mt-6`: Margin top
- `.mb-0` to `.mb-6`: Margin bottom

### Padding Utilities
- `.p-0` to `.p-6`: All sides padding

### Spacing Scale
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `xxl`: 48px

## Accessibility Features

### Skip Links
Automatically included in MainLayout for keyboard navigation:
```tsx
<SkipLink href="#main-content" />
```

### Focus Management
- Proper focus indicators on interactive elements
- ARIA labels and roles where appropriate
- Keyboard navigation support

## Responsive Breakpoints

```scss
--breakpoint-mobile: 576px
--breakpoint-tablet: 768px
--breakpoint-desktop-small: 992px
--breakpoint-desktop-large: 1200px
```

### Grid Responsive Behavior
- Desktop: Shows specified column count
- Tablet: 4+ columns become 2 columns
- Mobile: All grids become single column

## Performance Optimizations

### Image Loading
- Lazy loading enabled by default
- Width/height attributes prevent layout shift
- Loading placeholders with skeleton animation

### CSS Performance
- CSS Grid for efficient layouts
- Minimal JavaScript for layout
- Optimized for Core Web Vitals

## Migration Guide

### From Old Hero Sections
```tsx
// Old
<section className="hero-section" style={{backgroundImage: `url(${image})`}}>
  <div className="hero-overlay">
    <div className="hero-content">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
</section>

// New
<Hero
  title={title}
  subtitle={subtitle}
  backgroundImage={image}
  height="large"
/>
```

### From Custom Grids
```tsx
// Old
<div className="services-grid">
  {items.map(item => <div key={item.id}>{item}</div>)}
</div>

// New
<div className="grid grid--cols-3 grid--gap-lg">
  {items.map(item => <div key={item.id}>{item}</div>)}
</div>
```

## Best Practices

1. **Use semantic HTML**: Always use appropriate HTML elements
2. **Mobile-first**: Design for mobile, enhance for desktop
3. **Consistent spacing**: Use the spacing scale variables
4. **Accessibility**: Include proper ARIA labels and focus management
5. **Performance**: Use lazy loading for images and optimize layouts
6. **Maintainability**: Prefer utility classes over custom CSS when possible

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- Graceful degradation for older browsers 