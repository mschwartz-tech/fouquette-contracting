import Button from './Button';
import './ErrorFallback.scss';

/**
 * ErrorFallback Component
 * 
 * Purpose: Reusable error fallback component with consistent styling
 * 
 * Props:
 * - title: Error title (default: "Something went wrong")
 * - message: Error message
 * - onRetry: Optional retry handler
 * - showRetry: Whether to show retry button
 * - center: Whether to center the error in its container
 * - className: Additional CSS classes
 */

interface ErrorFallbackProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showRetry?: boolean;
  center?: boolean;
  className?: string;
}

const ErrorFallback = ({
  title = "Something went wrong",
  message = "We're sorry, but something unexpected happened. Please try again.",
  onRetry,
  showRetry = true,
  center = true,
  className = ''
}: ErrorFallbackProps) => {
  const errorClasses = [
    'error-fallback',
    center ? 'error-fallback--center' : '',
    className
  ].filter(Boolean).join(' ');

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      // Default retry behavior: reload the page
      window.location.reload();
    }
  };

  return (
    <div className={errorClasses} role="alert">
      <div className="error-fallback__content">
        <div className="error-fallback__icon" aria-hidden="true">
          ⚠️
        </div>
        <h2 className="error-fallback__title">{title}</h2>
        <p className="error-fallback__message">{message}</p>
        {showRetry && (
          <div className="error-fallback__actions">
            <Button 
              variant="primary" 
              onClick={handleRetry}
              className="error-fallback__retry-button"
            >
              Try Again
            </Button>
            <Button 
              variant="secondary" 
              to="/"
              className="error-fallback__home-button"
            >
              Go Home
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorFallback; 