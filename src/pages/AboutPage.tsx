import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { dataService } from '../services/dataService';
import type { AboutPage as AboutPageType } from '../data/models';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';
import '../styles/pages/AboutPage.scss';

/**
 * AboutPage Component
 * 
 * Page that describes the company mission, story, values,
 * and team members to build trust with potential clients
 */

const AboutPage = () => {
  const [pageData, setPageData] = useState<AboutPageType | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dataService.getAboutPageData();
        setPageData(data);
      } catch (error) {
        console.error('Error fetching about page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="page-loading">Loading...</div>;
  }

  if (!pageData) {
    return <div className="page-error">Error loading page content</div>;
  }

  const { 
    heroSection,
    companySection,
    processSection,
    ctaSection,
    seo
  } = pageData;



  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* Canonical URL */}
        {pageData && seo && <link rel="canonical" href={window.location.origin + location.pathname} />}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        {pageData && seo && <meta property="og:url" content={window.location.origin + location.pathname} />}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.ogImage || heroSection?.imageAlt || heroSection?.imageSrc || '/assets/images/logo-preview.png'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {pageData && seo && <meta property="twitter:url" content={window.location.origin + location.pathname} />}
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.twitterImage || heroSection?.imageAlt || heroSection?.imageSrc || '/assets/images/logo-preview.png'} />

        {/* WebPage JSON-LD structured data */}
        {pageData && seo && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "url": window.location.origin + location.pathname,
              "name": seo.title,
              "description": seo.description,
              "isPartOf": {
                "@type": "WebSite",
                "url": window.location.origin,
                "name": "Fouquette Contracting"
              },
              "mainEntity": {
                 "@type": "LocalBusiness",
                 "@id": window.location.origin + "/#localbusiness"
              }
            })}
          </script>
        )}
      </Helmet>

      {/* Hero Section */}
      <Hero
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        backgroundImage="/services_hero_1.png"
        overlay={true}
        height="medium"
      />

      {/* Company Story Section */}
      <Section spacing="lg">
        <div className="company-section">
          <div className="company-content">
            <h2 className="company-title">{companySection.title}</h2>
            <div className="company-text">
              {companySection.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="founder-image-container">
            <img 
              src={companySection.imageSrc} 
              alt={companySection.imageAlt || 'Founder of Fouquette Contracting'} 
              className="founder-image"
            />
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section
        title={processSection.title}
        background="light"
        spacing="lg"
      >
        <div className="process-container">
          {processSection.steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number" aria-hidden="true">{step.number}</div>
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <div className="about-cta">
          <h2 className="about-cta-title">{ctaSection.title}</h2>
          <p className="about-cta-content">{ctaSection.content}</p>
          <div className="about-cta-buttons">
            <Button 
              variant="primary" 
              size="lg"
              to={ctaSection.primaryCta.link}
            >
              {ctaSection.primaryCta.text}
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              to={ctaSection.secondaryCta.link}
            >
              {ctaSection.secondaryCta.text}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
