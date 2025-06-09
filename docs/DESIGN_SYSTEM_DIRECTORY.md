# Design System Directory

This document defines the universal styling and theme guidelines for the Fouquette Contracting website. It serves as the source of truth for all component styling and ensures consistency across the entire application.

## Color Palette

### Primary Colors
- **Primary Orange**: `#FFA500`
  - Usage: CTAs, buttons, icons, headers
  - Accessible text color on orange: White (`#FFFFFF`)

### Secondary Colors
- **Secondary Black**: `#000000`
  - Usage: Text, UI elements
  - Accessible text color on black: White (`#FFFFFF`)

### Neutral Colors
- **White**: `#FFFFFF`
  - Usage: Backgrounds, text on dark colors
- **Light Gray**: `#F5F5F5`
  - Usage: Backgrounds for contrast and cleanliness

### Semantic Colors
- **Success**: `#4CAF50`
  - Usage: Success messages, confirmations
- **Error**: `#F44336`
  - Usage: Error messages, alerts
- **Warning**: `#FF9800`
  - Usage: Warning messages, notifications
- **Info**: `#2196F3`
  - Usage: Information messages, help text

## Typography

### Font Family
- **Primary Font**: `Roboto` (Google Fonts, sans-serif)
- **Fallback Fonts**: `Arial`, `Helvetica`, `sans-serif`

### Font Weights
- **Bold**: 700
  - Usage: Headings
- **Regular**: 400
  - Usage: Body text

### Font Sizes
- **H1**: 36px
  - Usage: Page titles
- **H2**: 28px
  - Usage: Section headings
- **H3**: 22px
  - Usage: Subsection headings
- **Body**: 16px
  - Usage: Regular text
- **Small**: 14px
  - Usage: Captions, footnotes

### Line Heights
- **Headings**: 1.2
- **Body**: 1.6

## Spacing

### Base Unit
- 4px

### Spacing Scale
- **xs**: 4px (1 unit)
- **sm**: 8px (2 units)
- **md**: 16px (4 units)
- **lg**: 24px (6 units)
- **xl**: 32px (8 units)
- **xxl**: 48px (12 units)

### Container Padding
- Minimum 20px padding between sections

## Layout

### Container Widths
- **Max Width**: 1200px
- **Content Width**: 800px (for text-heavy sections)

### Grid System
- 12-column grid
- Gutters: 16px (md spacing)

## Borders & Corners

### Border Radius
- **Default**: 8px
  - Usage: Containers, buttons, images

### Border Widths
- **Thin**: 1px
- **Medium**: 2px
- **Thick**: 4px

## Shadows

### Elevation Levels
- **Level 1**: `0 2px 4px rgba(0, 0, 0, 0.1)`
  - Usage: Cards, dropdowns
- **Level 2**: `0 4px 6px rgba(0, 0, 0, 0.1)`
  - Usage: Modals, popovers
- **Level 3**: `0 8px 16px rgba(0, 0, 0, 0.1)`
  - Usage: Sidebars, drawers

## Transitions

### Duration
- **Fast**: 0.2s
- **Default**: 0.3s
- **Slow**: 0.5s

### Easing
- **Default**: ease
- **Entrance**: ease-out
- **Exit**: ease-in
- **Movement**: ease-in-out

## Responsive Breakpoints

### Screen Sizes
- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop Small**: 768px - 992px
- **Desktop Large**: > 992px

### Mobile Adaptations
- Hamburger menu (toggle slide-out nav)
- Vertical stacking of sections
- Minimum 16px body text

## Component-Specific Styles

### Buttons
- **Height**: 40px
- **Padding**: 10px 20px
- **Border Radius**: 8px
- **Primary Button**:
  - Background: Primary Orange (`#FFA500`)
  - Text: White (`#FFFFFF`)
  - Hover: Darken by 10%
- **Secondary Button**:
  - Background: Secondary Black (`#000000`)
  - Text: White (`#FFFFFF`)
  - Hover: Lighten by 10%
- **Text Button**:
  - Background: Transparent
  - Text: Primary Orange (`#FFA500`)
  - Hover: Underline

### Cards
- **Padding**: 16px (md spacing)
- **Border Radius**: 8px
- **Background**: White (`#FFFFFF`)
- **Shadow**: Level 1 (`0 2px 4px rgba(0, 0, 0, 0.1)`)

### Forms
- **Input Height**: 40px
- **Input Padding**: 8px 12px
- **Input Border**: 1px solid Light Gray (`#F5F5F5`)
- **Input Border Radius**: 8px
- **Input Focus**: 2px solid Primary Orange (`#FFA500`)
- **Label**: 14px, Bold (700)
- **Error Text**: 14px, Error color (`#F44336`)

### Navigation
- **Header Height**: 80px
- **Header Scrolled Height**: 60px
- **Mobile Menu Breakpoint**: 768px

## Icons & Images

### Icons
- **Size System**:
  - **Small**: 16px
  - **Medium**: 24px
  - **Large**: 32px
- **Color**: Primary Orange (`#FFA500`) or Secondary Black (`#000000`)

### Images
- **Format**: WebP
- **Loading**: Lazy loading for images below the fold
- **Responsive**: Use `srcset` for mobile/desktop

## Accessibility

### Contrast Ratios
- Minimum 4.5:1 contrast ratio for all text
- Minimum 3:1 contrast ratio for large text (18pt+)

### Focus States
- Visible focus indicator for all interactive elements
- Focus color: Primary Orange (`#FFA500`)
- Focus width: 2px

## Implementation Guidelines

### CSS Variables
All design tokens should be implemented as CSS variables in the `:root` selector for easy theming and consistency.

### SCSS Structure
- Use SCSS modules for component-specific styles
- Use global SCSS for site-wide styles and variables
- Follow BEM (Block Element Modifier) naming convention

### Responsive Design
- Use mobile-first approach
- Use media queries for breakpoints
- Test on multiple devices and browsers

## Usage Examples

### Button Component
```scss
.button {
  height: 40px;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 700;
  transition: background-color 0.3s;
  
  &--primary {
    background-color: var(--color-primary);
    color: var(--color-white);
    
    &:hover {
      background-color: darken(var(--color-primary), 10%);
    }
  }
  
  &--secondary {
    background-color: var(--color-secondary);
    color: var(--color-white);
    
    &:hover {
      background-color: lighten(var(--color-secondary), 10%);
    }
  }
}
```

### Card Component
```scss
.card {
  padding: 16px;
  border-radius: 8px;
  background-color: var(--color-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

## Creation Date
2025-05-13

## Last Updated Date
2025-05-13
