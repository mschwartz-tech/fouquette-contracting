import type { ReactNode } from 'react';
import './Card.scss';

/**
 * Card Component
 * 
 * Purpose: Card container with consistent styling for grid/list items
 * 
 * Props:
 * - children: Card content
 * - className: Additional CSS classes
 * - elevation: Shadow level (1, 2, or 3)
 * - noPadding: When true, removes default padding
 * 
 * Usage:
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 */

export type CardElevation = 1 | 2 | 3;

interface CardProps {
  children: ReactNode;
  className?: string;
  elevation?: 0 | 1 | 2 | 3;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card = ({
  children,
  className = '',
  elevation = 1,
  padding = 'md',
  onClick
}: CardProps) => {
  const cardClasses = [
    'card',
    `card--elevation-${elevation}`,
    `card--padding-${padding}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
