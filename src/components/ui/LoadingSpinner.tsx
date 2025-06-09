import './LoadingSpinner.scss';

/**
 * LoadingSpinner Component
 * 
 * Purpose: Reusable loading spinner with consistent styling
 * 
 * Props:
 * - size: 'small' | 'medium' | 'large'
 * - message: Optional loading message
 * - center: Whether to center the spinner in its container
 * - className: Additional CSS classes
 */

export type LoadingSize = 'small' | 'medium' | 'large';

interface LoadingSpinnerProps {
  size?: LoadingSize;
  message?: string;
  center?: boolean;
  className?: string;
}

const LoadingSpinner = ({ 
  size = 'medium', 
  message = 'Loading...', 
  center = true,
  className = '' 
}: LoadingSpinnerProps) => {
  const spinnerClasses = [
    'loading-spinner',
    `loading-spinner--${size}`,
    center ? 'loading-spinner--center' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={spinnerClasses}>
      <div className="loading-spinner__spinner" aria-hidden="true">
        <div className="loading-spinner__circle"></div>
      </div>
      {message && (
        <p className="loading-spinner__message" aria-live="polite">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner; 