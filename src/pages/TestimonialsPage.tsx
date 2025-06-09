import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { dataService } from '../services/dataService';
import type { Testimonial } from '../data/models';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Hero from '../components/ui/Hero';
import '../styles/pages/TestimonialsPage.scss';

/**
 * TestimonialsPage Component
 * 
 * Displays client testimonials with quotes and ratings
 * to showcase client satisfaction and build trust
 */

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await dataService.getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="page-loading">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Client Testimonials | Fouquette Contracting</title>
        <meta 
          name="description" 
          content="Read testimonials from our satisfied clients about their experience working with Fouquette Contracting on their masonry and construction projects."
        />
        <meta 
          name="keywords" 
          content="masonry testimonials, client reviews, customer feedback, masonry references, satisfied clients"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''} />
        <meta property="og:title" content="Client Testimonials | Fouquette Contracting" />
        <meta property="og:description" content="Read testimonials from our satisfied clients about their experience working with Fouquette Contracting on their masonry and construction projects." />
        <meta property="og:image" content="/assets/images/logo-preview.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''} />
        <meta name="twitter:title" content="Client Testimonials | Fouquette Contracting" />
        <meta name="twitter:description" content="Read testimonials from our satisfied clients about their experience working with Fouquette Contracting on their masonry and construction projects." />
        <meta name="twitter:image" content="/assets/images/logo-preview.png" />

        {/* JSON-LD Structured Data for Testimonials */}
        {testimonials.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(testimonials.map(testimonial => ({
              '@context': 'https://schema.org',
              '@type': 'Review',
              itemReviewed: {
                '@type': 'Organization',
                name: 'Fouquette Contracting',
                // Optionally, add URL of the company if available
                // sameAs: window.location.origin
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: testimonial.rating.toString(),
                bestRating: '5',
                worstRating: '1'
              },
              author: {
                '@type': 'Person',
                name: testimonial.name
              },
              datePublished: new Date(testimonial.date).toISOString().split('T')[0],
              reviewBody: testimonial.text,
              publisher: {
                '@type': 'Organization',
                name: 'Fouquette Contracting'
              }
              // If testimonial.project is a specific service, you could link it here
              // e.g., about: { '@type': 'Service', name: testimonial.project }
            })))}
          </script>
        )}
      </Helmet>

      {/* Testimonials Hero */}
      <Hero
        title="Client Testimonials"
        subtitle="See what our clients have to say about their experience working with us"
        backgroundImage="/services_hero_1.png"
        overlay={true}
        height="small"
      />

      {/* Introduction */}
      <Section spacing="md">
        <div className="testimonials-intro">
          <p>
            At Fouquette Contracting, client satisfaction is our highest priority. We take pride in delivering 
            exceptional results that exceed expectations, and we're grateful for the kind words our clients 
            have shared about their experiences. Below are authentic testimonials from homeowners and 
            businesses who have trusted us with their masonry and construction projects.
          </p>
        </div>
      </Section>

      {/* Testimonials Grid */}
      <Section spacing="xl">
        <div className="grid grid--cols-2 grid--gap-lg">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="testimonial-card" elevation={1}>
              <div className="testimonial-header">
                <div className="testimonial-rating" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`testimonial-star ${i < testimonial.rating ? 'testimonial-star--filled' : ''}`}
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="testimonial-project">{testimonial.project}</div>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              
              <div className="testimonial-footer">
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-location">{testimonial.location}</p>
                  <p className="testimonial-date">{new Date(testimonial.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long'
                  })}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>


    </>
  );
};

export default TestimonialsPage;
