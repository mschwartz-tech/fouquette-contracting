import type { ReactNode } from 'react';
import './Hero.scss';

/**
 * Hero Component
 * 
 * Purpose: Reusable hero section component with consistent styling
 * 
 * Props:
 * - title: Main hero title (required)
 * - subtitle: Optional subtitle text
 * - backgroundImage: Optional background image URL
 * - overlay: Whether to show dark overlay (default: true)
 * - overlayOpacity: Overlay opacity (default: 0.5)
 * - height: Hero height variant (default: 'medium')
 * - alignment: Text alignment (default: 'center')
 * - className: Additional CSS classes
 * - children: Optional additional content (e.g., CTA buttons)
 */

export type HeroHeight = 'small' | 'medium' | 'large' | 'full';
export type HeroAlignment = 'left' | 'center' | 'right';

interface HeroProps {
  title: string;
  subtitle?: string;
  logo?: string;
  logoAlt?: string;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  height?: HeroHeight;
  alignment?: HeroAlignment;
  className?: string;
  children?: ReactNode;
}

const Hero = ({
  title,
  subtitle,
  logo,
  logoAlt = 'Company Logo',
  backgroundImage,
  overlay = true,
  overlayOpacity = 0.5,
  height = 'medium',
  alignment = 'center',
  className = '',
  children
}: HeroProps) => {
  const heroClasses = [
    'hero',
    `hero--height-${height}`,
    `hero--align-${alignment}`,
    backgroundImage ? 'hero--has-bg-image' : '',
    className
  ].filter(Boolean).join(' ');

  const overlayStyles = overlay ? {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`
  } : {};

  const backgroundStyles = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`
  } : {};

  return (
    <section 
      className={heroClasses}
      style={backgroundStyles}
      role={backgroundImage ? 'img' : undefined}
      aria-label={backgroundImage ? `Background image for ${title}` : undefined}
    >
      {overlay && backgroundImage && (
        <div className="hero__overlay" style={overlayStyles} />
      )}
      
      <div className="hero__container">
        <div className="hero__content">
          {logo && (
            <div className="hero__logo">
              <img src={logo} alt={logoAlt} className="hero__logo-image" />
            </div>
          )}
          <h1 className="hero__title">{title}</h1>
          {subtitle && (
            <p className="hero__subtitle">{subtitle}</p>
          )}
          {children && (
            <div className="hero__actions">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero; 