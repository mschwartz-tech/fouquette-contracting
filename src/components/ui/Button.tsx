import type { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import './Button.scss';

/**
 * Button Component
 * 
 * Purpose: Reusable button component with consistent styling
 * 
 * Props:
 * - children: Button text or content
 * - variant: 'primary' (orange) or 'secondary' (black)
 * - size: 'sm', 'md', or 'lg'
 * - fullWidth: When true, button takes full width of container
 * - className: Additional CSS classes
 * - ...props: All other button attributes
 * 
 * Usage:
 * <Button variant="primary" onClick={handleClick}>Click Me</Button>
 */

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Common props shared by both button and link variants
interface CommonButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

// Props for when the component is a native HTML button
type NativeButtonProps = CommonButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className' | 'children'> & {
  to?: undefined; // Ensures 'to' is not passed for a native button
  type?: 'button' | 'submit' | 'reset';
};

// Props for when the component is a React Router Link styled as a button
type LinkButtonProps = CommonButtonProps &
  Omit<LinkProps, 'className' | 'children' | 'to'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'> & {
  to: LinkProps['to']; // 'to' is required for a link
  type?: undefined; // 'type' attribute is not for <a> tags
};

export type ButtonProps = NativeButtonProps | LinkButtonProps;

const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', size = 'md', fullWidth = false, className = '', ...rest } = props;
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? 'button--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  if (props.to) {
    // It's a Link
    const { to, ...linkSpecificProps } = rest as Omit<LinkButtonProps, keyof CommonButtonProps>;
    return (
      <Link to={props.to} className={buttonClasses} {...linkSpecificProps}>
        {children}
      </Link>
    );
  }

  // It's a native button
  const { type = 'button', ...buttonSpecificProps } = rest as Omit<NativeButtonProps, keyof CommonButtonProps>;
  return (
    <button type={type} className={buttonClasses} {...buttonSpecificProps}>
      {children}
    </button>
  );
};

export default Button;
