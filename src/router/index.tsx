import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Layout components
import MainLayout from '../components/layout/MainLayout';
import LoadingSpinner from '../components/ui/LoadingSpinner';
// Lazy-loaded page components for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const TestimonialsPage = lazy(() => import('../pages/TestimonialsPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const BookingPage = lazy(() => import('../pages/BookingPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));


// Loading component for suspense fallback
const RouterLoadingSpinner = () => (
  <LoadingSpinner size="medium" message="Loading page..." center={true} />
);

// Create router with all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Suspense fallback={<RouterLoadingSpinner />}><HomePage /></Suspense> },
      { path: 'about', element: <Suspense fallback={<RouterLoadingSpinner />}><AboutPage /></Suspense> },
      { path: 'services', element: <Suspense fallback={<RouterLoadingSpinner />}><ServicesPage /></Suspense> },
      { path: 'gallery', element: <Suspense fallback={<RouterLoadingSpinner />}><GalleryPage /></Suspense> },
      { path: 'testimonials', element: <Suspense fallback={<RouterLoadingSpinner />}><TestimonialsPage /></Suspense> },
      { path: 'faq', element: <Suspense fallback={<RouterLoadingSpinner />}><FAQPage /></Suspense> },
      { path: 'booking', element: <Suspense fallback={<RouterLoadingSpinner />}><BookingPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<RouterLoadingSpinner />}><ContactPage /></Suspense> },
    ],
  },
]);

// Router provider component
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
