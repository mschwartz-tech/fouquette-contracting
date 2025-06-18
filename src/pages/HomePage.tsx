import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { dataService } from '../services/dataService';
import type { HomePage as HomePageType } from '../data/models';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorFallback from '../components/ui/ErrorFallback';
import '../styles/pages/HomePage.scss';

/**
 * HomePage Component
 * 
 * Main landing page that showcases Fouquette Contracting's services
 * with hero section, services overview, featured projects, and testimonials
 */

const HomePage = () => {
  const [pageData, setPageData] = useState<HomePageType | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dataService.getHomePageData();
        setPageData(data);
      } catch (error) {
        console.error('Error fetching home page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner size="large" message="Loading homepage..." center={true} />;
  }

  if (!pageData) {
    return (
      <ErrorFallback 
        title="Failed to Load Page"
        message="We couldn't load the homepage content. Please try again."
        onRetry={() => window.location.reload()}
      />
    );
  }

  const { 
    heroSection,
    introSection, 
    featuredServices, 
    testimonialsSection, 
    ctaSection,
    seo
  } = pageData;

  const canonicalUrl = pageData && seo ? window.location.origin + location.pathname : '';

  return (
    <>
      <Helmet>
        {seo && (
          <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.ogImage || heroSection?.imageSrc || 'YOUR_GENERAL_PREVIEW_IMAGE_URL_HERE'} /> {/* TODO: Ensure this resolves to an absolute URL. Consider a global fallback. */}
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.twitterImage || heroSection?.imageSrc || 'YOUR_GENERAL_PREVIEW_IMAGE_URL_HERE'} /> {/* TODO: Ensure this resolves to an absolute URL. Consider a global fallback. */}
            {/* WebPage JSON-LD structured data */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "url": canonicalUrl,
                "name": seo.title,
                "description": seo.description,
                "isPartOf": {
                  "@type": "WebSite",
                  "url": window.location.origin,
                  "name": "Fouquette Contracting" // Consider making this dynamic if site name can change
                },
                "mainEntity": {
                  "@type": "LocalBusiness",
                  "@id": window.location.origin + "/#localbusiness" // Link to the LocalBusiness schema in index.html if it has an @id
                }
              })}
            </script>
          </>
        )}
      </Helmet>

      {/* Hero Section */}
      <Hero
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        logo={heroSection.logo}
        logoAlt={heroSection.logoAlt}
        backgroundImage={heroSection.imageSrc}
        overlay={heroSection.backgroundOverlay}
        height="full"
      >
        <Button 
          variant="primary" 
          size="lg" 
          to={heroSection.ctaLink}
        >
          {heroSection.ctaText}
        </Button>
      </Hero>

      {/* Intro Section */}
      <Section spacing="lg">
        <div className="intro-section">
          <div className="intro-content">
            <h2 className="intro-title">{introSection.title}</h2>
            <p className="intro-text">{introSection.content}</p>
            <Button 
              variant="secondary"
              to={introSection.ctaLink}
            >
              {introSection.ctaText}
            </Button>
          </div>
          <div className="intro-image-container">
            <img 
              src={introSection.imageSrc} 
              alt={introSection.title} 
              className="intro-image"
            />
          </div>
        </div>
      </Section>

      {/* Featured Services Section */}
      <Section 
        title={featuredServices.title}
        subtitle={featuredServices.subtitle}
        background="light"
        spacing="xl"
      >
        <div className="grid grid--cols-2 grid--gap-lg">
          {featuredServices.services.map(service => (
            <Card key={service.id} className="service-card">
              <img
                src={service.imageSrc}
                alt={service.imageAlt || service.title}
                className="service-image"
                loading="lazy"
                width="400"
                height="250"
              />
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Button 
                  variant="text"
                  to={service.link}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="section-cta">
          <Button 
            variant="primary"
            to={featuredServices.ctaLink}
          >
            {featuredServices.ctaText}
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        title={testimonialsSection.title}
        subtitle={testimonialsSection.subtitle}
        background="primary"
        spacing="sm"
      >
        <div className="grid grid--cols-2 grid--gap-lg">
          {testimonialsSection.testimonials.map(testimonial => (
            <Card key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`star ${i < testimonial.rating ? 'star--filled' : ''}`}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-location">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="section-cta">
          <Button 
            variant="secondary"
            to={testimonialsSection.ctaLink}
          >
            {testimonialsSection.ctaText}
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <section 
        className="cta-section"
        style={{ 
          backgroundImage: ctaSection.backgroundSrc ? `url(${ctaSection.backgroundSrc})` : 'none' 
        }}
      >
        <div className="cta-overlay">
          <div className="cta-content">
            <h2 className="cta-title">{ctaSection.title}</h2>
            <p className="cta-subtitle">{ctaSection.subtitle}</p>
            <div className="cta-buttons">
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
        </div>
      </section>
    </>
  );
};

export default HomePage;
