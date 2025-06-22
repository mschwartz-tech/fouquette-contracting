import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHelmetProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  twitterImage?: string;
  structuredData?: object;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  keywords,
  ogImage,
  twitterImage,
  structuredData
}) => {
  const location = useLocation();
  
  // Ensure canonical URL never has trailing slash (except for homepage)
  const baseUrl = 'https://www.fouquettecontracting.com';
  const path = location.pathname === '/' ? '' : location.pathname.replace(/\/$/, '');
  const canonicalUrl = `${baseUrl}${path}`;
  
  // Default images if not provided
  const defaultOgImage = `${baseUrl}/logo.webp`;
  const finalOgImage = ogImage || defaultOgImage;
  const finalTwitterImage = twitterImage || finalOgImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL - critical for preventing duplicate content */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalOgImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalTwitterImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet; 