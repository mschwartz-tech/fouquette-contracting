import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { dataService } from '../services/dataService';
import type { FAQ } from '../data/models';
import Accordion from '../components/ui/Accordion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Hero from '../components/ui/Hero';
import '../styles/pages/FAQPage.scss';

/**
 * FAQPage Component
 * 
 * Displays accordion-style frequently asked questions and answers
 * to address common client inquiries and concerns
 */

const FAQPage = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const data = await dataService.getFAQs();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) {
    return <div className="page-loading">Loading...</div>;
  }

  // Transform FAQs data to format expected by Accordion component
  const accordionItems = faqs.map(faq => ({
    title: faq.question,
    content: faq.answer
  }));

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Fouquette Contracting</title>
        <meta 
          name="description" 
          content="Find answers to common questions about our masonry and construction services, process, timeline, and more."
        />
        <meta 
          name="keywords" 
          content="masonry FAQ, construction questions, masonry process, masonry timeline, masonry cost"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''} />
        <meta property="og:title" content="Frequently Asked Questions | Fouquette Contracting" />
        <meta property="og:description" content="Find answers to common questions about our masonry and construction services, process, timeline, and more." />
        <meta property="og:image" content="/assets/images/logo-preview.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''} />
        <meta name="twitter:title" content="Frequently Asked Questions | Fouquette Contracting" />
        <meta name="twitter:description" content="Find answers to common questions about our masonry and construction services, process, timeline, and more." />
        <meta name="twitter:image" content="/assets/images/logo-preview.png" />
        {/* JSON-LD for FAQPage */}
        {faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      {/* FAQ Hero */}
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, process, and more"
        backgroundImage="/services_hero_1.png"
        overlay={true}
        height="small"
      />

      {/* FAQ Introduction */}
      <Section spacing="md">
        <div className="faq-intro">
          <p>
            We've compiled answers to the most common questions our clients ask about masonry 
            and construction services. If you don't see the information you're looking for, 
            please don't hesitate to contact us directly.
          </p>
        </div>
      </Section>

      {/* FAQ Accordion */}
      <Section spacing="xl">
        <div className="faq-container">
          <Accordion 
            items={accordionItems}
            allowMultiple={false}
            className="faq-accordion"
          />
        </div>
      </Section>

      {/* Question CTA */}
      <Section background="light" spacing="lg">
        <div className="faq-cta">
          <h2 className="faq-cta-title">Still Have Questions?</h2>
          <p className="faq-cta-text">
            We're here to help! Contact us directly for answers to your specific questions.
          </p>
          <div className="faq-cta-buttons">
            <Button 
              variant="primary"
              to="/contact"
            >
              Contact Us
            </Button>
            <Button 
              variant="secondary"
              to="/booking"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FAQPage;
