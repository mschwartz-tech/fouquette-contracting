import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { dataService } from '../services/dataService';
import type { Service, ServicesPage as ServicesPageData } from '../data/models';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';
import '../styles/pages/ServicesPage.scss';

/**
 * ServicesPage Component
 * 
 * Displays a grid layout of all services offered by Fouquette Contracting
 * with detailed information about each service
 */

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [pageData, setPageData] = useState<ServicesPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, servicesPageData] = await Promise.all([
          dataService.getServices(),
          dataService.getServicesPageData()
        ]);
        setServices(servicesData);
        setPageData(servicesPageData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Handle hash navigation to scroll to specific service
    if (location.hash) {
      const serviceId = location.hash.substring(1);
      const element = document.getElementById(serviceId);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } else {
      // Scroll to top when page loads without hash
      window.scrollTo(0, 0);
    }
  }, [location, services]);

  const canonicalUrl = window.location.origin + location.pathname;

  if (loading || !pageData) {
    return <div className="page-loading">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Our Services | Fouquette Contracting</title>
        <meta 
          name="description" 
          content="Explore our comprehensive masonry and construction services, including brick and stone masonry, patios, retaining walls, and concrete work."
        />
        <meta 
          name="keywords" 
          content="masonry services, brick work, stone masonry, patios, retaining walls, concrete work, Minnesota contractor"
        />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Our Services | Fouquette Contracting" />
        <meta property="og:description" content="Explore our comprehensive masonry and construction services, including brick and stone masonry, patios, retaining walls, and concrete work." />
        <meta property="og:image" content="/assets/images/logo-preview.png" /> 
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content="Our Services | Fouquette Contracting" />
        <meta name="twitter:description" content="Explore our comprehensive masonry and construction services, including brick and stone masonry, patios, retaining walls, and concrete work." />
        <meta name="twitter:image" content="/assets/images/logo-preview.png" /> 
        {/* Page-specific JSON-LD for Services. Consider an ItemList of Services. */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage", 
            "name": "Our Services | Fouquette Contracting",
            "description": "Explore our comprehensive masonry and construction services, including brick and stone masonry, patios, retaining walls, and concrete work.",
            "url": canonicalUrl,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": services.map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.fullDescription.substring(0, 200) + '...',
                  "url": canonicalUrl + '#' + service.id, 
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Fouquette Contracting"
                  }
                }
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Hero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        backgroundImage={pageData.hero.backgroundImage}
        overlay={pageData.hero.overlay}
        height="medium"
      />



      {/* Services List */}
      <Section spacing="lg">
        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`service-item ${index % 2 === 1 ? 'service-item--reverse' : ''}`}
            >
              <div className="service-image-container">
                <img
                  src={service.mainImageSrc}
                  alt={service.mainImageAlt || service.title}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.fullDescription}</p>
                
                <h3 className="service-features-title">Our {service.title} Services Include:</h3>
                <ul className="service-features-list">
                  {service.features.map((feature, i) => (
                    <li key={i} className="service-feature-item">{feature}</li>
                  ))}
                </ul>

                {/* Content Sections */}
                {service.contentSections && service.contentSections.length > 0 && (
                  <div className="service-content-sections">
                    {service.contentSections.map((section, index) => {
                      switch (section.type) {
                        case 'text':
                          return (
                            <div key={index} className="service-content-section service-content-section--text">
                              {section.title && <h3 className="service-content-section-title">{section.title}</h3>}
                              {section.content && <p>{section.content}</p>}
                            </div>
                          );
                        case 'image':
                          return (
                            <div key={index} className="service-content-section service-content-section--image">
                              {section.title && <h3 className="service-content-section-title">{section.title}</h3>}
                              {section.imageSrc && (
                                <img 
                                  src={section.imageSrc} 
                                  alt={section.imageAlt || `${service.title} content image ${index + 1}`} 
                                  className="service-content-section-image"
                                />
                              )}
                            </div>
                          );
                        case 'list':
                          return (
                            <div key={index} className="service-content-section service-content-section--list">
                              {section.title && <h3 className="service-content-section-title">{section.title}</h3>}
                              {section.items && section.items.length > 0 && (
                                <ul className="service-content-section-list">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                )}
                
                <Button 
                  variant="primary"
                  to="/booking"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="lg">
        <div className="services-cta">
          <h2 className="services-cta-title">Ready to Start Your Project?</h2>
          <p className="services-cta-text">
            Contact us today to discuss your project needs and receive a free consultation.
          </p>
          <div className="services-cta-buttons">
            <Button 
              variant="secondary" 
              size="lg"
              to="/booking"
            >
              Request an Estimate
            </Button>
            <Button 
              variant="text" 
              size="lg"
              to="/contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;
