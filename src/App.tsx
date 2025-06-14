import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ui/ErrorBoundary';
import AppRouter from './router';
import './styles/global.scss';

/**
 * App Component
 * 
 * Main application component that sets up providers and router
 */
function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div className="loading-app">Loading application...</div>;
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
