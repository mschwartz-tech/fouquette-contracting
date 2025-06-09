import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

/**
 * Header Component
 * 
 * Purpose: Main navigation header that appears on all pages with logo and navigation links
 * 
 * Props:
 * - isSticky (boolean): When true, header shrinks on scroll
 */
const Header = ({ isSticky = true }: { isSticky?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event for sticky header
  useEffect(() => {
    if (!isSticky) return;

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src="/logo.webp" alt="Fouquette Contracting" />
          </Link>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-icon"></span>
          </button>

          <nav className={`main-navigation ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" onClick={closeMobileMenu}>Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/testimonials" onClick={closeMobileMenu}>Testimonials</NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={closeMobileMenu}>FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
              </li>
              <li className="cta-button">
                <NavLink to="/booking" onClick={closeMobileMenu} className="btn btn-primary">Get a Quote</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
