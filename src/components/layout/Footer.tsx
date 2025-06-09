import { Link } from 'react-router-dom';
import './Footer.scss';

/**
 * Footer Component
 * 
 * Purpose: Site footer that appears on all pages with logo, contact information, and copyright
 */
const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src="/logo.webp" alt="Fouquette Contracting" />
            </Link>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="tel:7632040630">
                  <i className="icon-phone"></i>
                  763-204-0630
                </a>
              </li>
              <li>
                <a href="mailto:fouquette.contracting@gmail.com">
                  <i className="icon-email"></i>
                  fouquette.contracting@gmail.com
                </a>
              </li>
              <li>
                <span>
                  <i className="icon-clock"></i>
                  Mon-Fri, 8:00am-5:00pm
                </span>
              </li>
              <li>
                <span>
                  <i className="icon-location"></i>
                  Serving Minneapolis & St. Paul metro
                </span>
              </li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/booking">Get a Quote</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Fouquette Contracting. All rights reserved.
          </p>
          {/* Add privacy policy link if using analytics */}
          {/* <p className="privacy-policy">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
