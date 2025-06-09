import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { dataService } from '../services/dataService';
import type { ContactFormData } from '../data/models';
import ContactForm from '../components/ui/ContactForm';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';
import '../styles/pages/ContactPage.scss';

/**
 * ContactPage Component
 * 
 * Displays contact information, Google Maps integration, and contact form
 * for clients to reach out to Fouquette Contracting
 */

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const location = useLocation();

  const handleSubmit = async (formData: ContactFormData): Promise<void> => {
    setSubmitting(true);
    try {
      // In production, this would send the data to an API
      const success = await dataService.submitContactForm(formData);
      
      if (!success) {
        throw new Error('Failed to submit form');
      }
      
      return Promise.resolve();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return Promise.reject(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Fouquette Contracting</title>
        <meta
          name="description"
          content="Get in touch with Fouquette Contracting for all your masonry and construction needs. Contact us for inquiries, quotes, or to discuss your project."
        />
        <meta
          name="keywords"
          content="contact masonry contractor, masonry quote, construction contact, Minnesota masonry contact"
        />
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.origin + location.pathname} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin + location.pathname} />
        <meta property="og:title" content="Contact Us | Fouquette Contracting" />
        <meta property="og:description" content="Get in touch with Fouquette Contracting for all your masonry and construction needs. Contact us for inquiries, quotes, or to discuss your project." />
        <meta property="og:image" content="/assets/images/logo-preview.png" /> {/* TODO: Replace with a specific contact page image or ensure the general one is appropriate */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.origin + location.pathname} />
        <meta name="twitter:title" content="Contact Us | Fouquette Contracting" />
        <meta name="twitter:description" content="Get in touch with Fouquette Contracting for all your masonry and construction needs. Contact us for inquiries, quotes, or to discuss your project." />
        <meta name="twitter:image" content="/assets/images/logo-preview.png" /> {/* TODO: Replace with a specific contact page image or ensure the general one is appropriate */}

        {/* WebPage (ContactPage) JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": window.location.origin + location.pathname,
            "name": "Contact Us | Fouquette Contracting",
            "description": "Get in touch with Fouquette Contracting for all your masonry and construction needs. Contact us for inquiries, quotes, or to discuss your project.",
            "isPartOf": {
              "@type": "WebSite",
              "url": window.location.origin,
              "name": "Fouquette Contracting"
            },
            "mainEntity": { // Link to the LocalBusiness
              "@type": "LocalBusiness",
              "@id": window.location.origin + "/#localbusiness" // Assumes your LocalBusiness in index.html has this @id
            }
          })}
        </script>
      </Helmet>

      {/* Contact Hero */}
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project or request information"
        backgroundImage="/services_hero_1.png"
        overlay={true}
        height="small"
      />

      {/* Contact Form Section */}
      <Section title="Send Us a Message" spacing="xl">
        <div className="contact-form-container">
          <ContactForm onSubmit={handleSubmit} submitButtonText="Send Message" isSubmitting={submitting} />
        </div>
      </Section>

      {/* Service Areas */}
      <Section background="light" spacing="lg">
        <div className="service-areas">
          <h2 className="service-areas-title">Our Service Areas</h2>
          <p className="service-areas-text">
            Fouquette Contracting proudly serves the following areas in Minnesota:
          </p>
          <div className="service-areas-grid">
            <div className="service-area-column">
              <ul className="service-area-list">
                <li>Minneapolis</li>
                <li>St. Paul</li>
                <li>Eden Prairie</li>
                <li>Bloomington</li>
                <li>Minnetonka</li>
              </ul>
            </div>
            <div className="service-area-column">
              <ul className="service-area-list">
                <li>Plymouth</li>
                <li>Maple Grove</li>
                <li>Edina</li>
                <li>Wayzata</li>
                <li>Golden Valley</li>
              </ul>
            </div>
            <div className="service-area-column">
              <ul className="service-area-list">
                <li>Woodbury</li>
                <li>Eagan</li>
                <li>Apple Valley</li>
                <li>Burnsville</li>
                <li>Lakeville</li>
              </ul>
            </div>
          </div>
          <p className="service-areas-note">
            Don't see your area listed? Contact us to inquire about service in your location.
          </p>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
