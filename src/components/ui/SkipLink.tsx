import './SkipLink.scss';

/**
 * SkipLink Component
 * 
 * Purpose: Provides keyboard navigation users with a way to skip to main content
 * 
 * Props:
 * - href: Target element ID (default: '#main-content')
 * - children: Link text content (default: 'Skip to main content')
 */

interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
}

const SkipLink = ({ 
  href = '#main-content', 
  children = 'Skip to main content' 
}: SkipLinkProps) => {
  return (
    <a href={href} className="skip-link">
      {children}
    </a>
  );
};

export default SkipLink; 