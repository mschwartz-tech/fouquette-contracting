import type { ReactNode } from 'react';
import './Section.scss';

/**
 * Section Component
 * 
 * Purpose: Consistent section layout with optional background color and spacing
 * 
 * Props:
 * - children: Section content
 * - title: Optional section title
 * - subtitle: Optional section subtitle
 * - background: Background color variant
 * - spacing: Padding size
 * - className: Additional CSS classes
 * 
 * Usage:
 * <Section 
 *   title="Our Services" 
 *   subtitle="Quality masonry services for your home or business"
 *   background="light"
 * >
 *   {content}
 * </Section>
 */

export type SectionBackground = 'none' | 'light' | 'dark' | 'primary';
export type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl';
export type SectionContainer = 'default' | 'narrow' | 'wide' | 'fluid';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  background?: SectionBackground;
  spacing?: SectionSpacing;
  container?: SectionContainer;
  className?: string;
  id?: string;
}

const Section = ({
  children,
  title,
  subtitle,
  background = 'none',
  spacing = 'lg',
  container = 'default',
  className = '',
  id
}: SectionProps) => {
  const sectionClasses = [
    'section',
    `section--bg-${background}`,
    `section--spacing-${spacing}`,
    className
  ].filter(Boolean).join(' ');

  const containerClasses = [
    'container',
    container !== 'default' ? `container--${container}` : ''
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} id={id}>
      <div className={containerClasses}>
        {(title || subtitle) && (
          <div className="section__header">
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section__content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
