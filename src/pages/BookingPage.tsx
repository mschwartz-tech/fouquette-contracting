import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { dataService } from '../services/dataService';
import type { ContactFormData } from '../data/models';
import ContactForm from '../components/ui/ContactForm';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';
import '../styles/pages/BookingPage.scss';

/**
 * BookingPage Component
 * 
 * Consultation booking page with form and project information
 * for clients to request estimates and consultations
 */

const BookingPage = () => {
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
      console.error('Error submitting booking form:', error);
      return Promise.reject(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request a Consultation | Fouquette Contracting</title>
        <meta 
          name="description" 
          content="Book a free consultation with Fouquette Contracting. Get expert advice and an estimate for your masonry or construction project."
        />
        <meta 
          name="keywords" 
          content="masonry consultation, construction estimate, book masonry contractor, free estimate"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.origin + location.pathname} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin + location.pathname} />
        <meta property="og:title" content="Request a Consultation | Fouquette Contracting" />
        <meta property="og:description" content="Book a free consultation with Fouquette Contracting. Get expert advice and an estimate for your masonry or construction project." />
        <meta property="og:image" content="/assets/images/logo-preview.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.origin + location.pathname} />
        <meta name="twitter:title" content="Request a Consultation | Fouquette Contracting" />
        <meta name="twitter:description" content="Book a free consultation with Fouquette Contracting. Get expert advice and an estimate for your masonry or construction project." />
        <meta name="twitter:image" content="/assets/images/logo-preview.png" />

        {/* JSON-LD for WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Request a Consultation | Fouquette Contracting",
            "description": "Book a free consultation with Fouquette Contracting. Get expert advice and an estimate for your masonry or construction project.",
            "url": window.location.origin + location.pathname,
            "isPartOf": {
              "@type": "WebSite",
              "url": window.location.origin,
              "name": "Fouquette Contracting"
            }
          })}
        </script>
      </Helmet>

      {/* Booking Hero */}
      <Hero
        title="Request a Consultation"
        subtitle="Schedule a free, no-obligation consultation and estimate for your project"
        backgroundImage="/services_hero_1.png"
        overlay={true}
        height="small"
      />

      {/* Booking Process */}
      <Section title="Our Consultation Process" spacing="lg">
        <div className="booking-process">
          <div className="booking-process-item">
            <div className="booking-process-number" aria-hidden="true">1</div>
            <div className="booking-process-content">
              <h3 className="booking-process-title">Submit Your Request</h3>
              <p className="booking-process-text">
                Fill out the form below with details about your project and your preferred contact method.
              </p>
            </div>
          </div>
          
          <div className="booking-process-item">
            <div className="booking-process-number" aria-hidden="true">2</div>
            <div className="booking-process-content">
              <h3 className="booking-process-title">Initial Contact</h3>
              <p className="booking-process-text">
                We'll reach out within 24-48 hours to discuss your project and schedule an on-site consultation.
              </p>
            </div>
          </div>
          
          <div className="booking-process-item">
            <div className="booking-process-number" aria-hidden="true">3</div>
            <div className="booking-process-content">
              <h3 className="booking-process-title">On-Site Consultation</h3>
              <p className="booking-process-text">
                Our expert will visit your property, assess the project, and discuss options and ideas.
              </p>
            </div>
          </div>
          
          <div className="booking-process-item">
            <div className="booking-process-number" aria-hidden="true">4</div>
            <div className="booking-process-content">
              <h3 className="booking-process-title">Detailed Proposal</h3>
              <p className="booking-process-text">
                Within 3-5 days, you'll receive a comprehensive proposal with pricing, timeline, and specifications.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Booking Form */}
      <Section background="light" spacing="xl">
        <div className="booking-container">
          <div className="booking-form-container">
            <h2 className="booking-form-title">Request Your Free Estimate</h2>
            <p className="booking-form-text">
              Please provide details about your project to help us prepare for our consultation.
            </p>
            <ContactForm 
              onSubmit={handleSubmit} 
              isSubmitting={submitting} 
              submitButtonText="Request Consultation" 
              showServiceField={true}
            />
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section title="Client Experiences" background="light" spacing="lg">
        <div className="booking-testimonials">
          <div className="booking-testimonial">
            <div className="booking-testimonial-quote">
              "The consultation process was so thorough and professional. Their team took the time to understand exactly what we wanted and provided excellent suggestions that improved our original plan."
            </div>
            <div className="booking-testimonial-author">
              - Sarah Williams, St. Paul
            </div>
          </div>
          <div className="booking-testimonial">
            <div className="booking-testimonial-quote">
              "Unlike other contractors who gave vague estimates, Fouquette provided a detailed proposal that clearly outlined all costs, materials, and timeline. There were no surprises, and the final result matched exactly what was promised."
            </div>
            <div className="booking-testimonial-author">
              - Michael Johnson, Minneapolis
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="light" spacing="lg">
        <div className="booking-faq">
          <h2 className="booking-faq-title">Frequently Asked Questions</h2>
          <div className="booking-faq-items">
            <div className="booking-faq-item">
              <h3 className="booking-faq-question">Is there a fee for consultations?</h3>
              <p className="booking-faq-answer">
                No, all initial consultations and estimates are completely free with no obligation.
              </p>
            </div>
            <div className="booking-faq-item">
              <h3 className="booking-faq-question">How soon can I schedule a consultation?</h3>
              <p className="booking-faq-answer">
                We typically schedule consultations within 3-7 days of your request, depending on current demand and your location.
              </p>
            </div>
            <div className="booking-faq-item">
              <h3 className="booking-faq-question">Do I need to be present for the consultation?</h3>
              <p className="booking-faq-answer">
                Yes, we recommend that all decision-makers be present during the consultation to ensure all questions are addressed and everyone's input is considered.
              </p>
            </div>
            <div className="booking-faq-item">
              <h3 className="booking-faq-question">How long after the consultation will I receive my estimate?</h3>
              <p className="booking-faq-answer">
                You will receive a detailed proposal within 3-5 business days following your consultation.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BookingPage;
