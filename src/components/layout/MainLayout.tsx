import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipLink from '../ui/SkipLink';
import LoadingSpinner from '../ui/LoadingSpinner';

/**
 * MainLayout Component
 * 
 * Purpose: Main layout for public-facing pages with header and footer
 * 
 * Usage: Used in router configuration as parent for all public routes
 */
const MainLayout = () => {
  return (
    <div className="site-wrapper">
      <SkipLink />
      <Header />
      <main id="main-content" className="main-content">
        <Suspense fallback={
          <LoadingSpinner 
            size="large" 
            message="Loading page..." 
            center={true}
          />
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
