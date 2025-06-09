import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { dataService } from '../services/dataService';
import type { GalleryImage as GalleryImageType, GalleryPage as GalleryPageType } from '../data/models';
import ImageGallery from '../components/ui/ImageGallery';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';
import '../styles/pages/GalleryPage.scss';

/**
 * GalleryPage Component
 * 
 * Displays a grid of project photos in a gallery layout with lightbox functionality for viewing images in full size
 */

const GalleryPage = () => {
  const [images, setImages] = useState<GalleryImageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [galleryPageData, setGalleryPageData] = useState<GalleryPageType | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await dataService.getGalleryImages();
        setImages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    const fetchPageData = async () => {
      try {
        const pageData = await dataService.getGalleryPageData();
        setGalleryPageData(pageData);
      } catch (error) {
        console.error('Error fetching gallery page data:', error);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return <div className="page-loading">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Project Gallery | Fouquette Contracting</title>
        <meta 
          name="description" 
          content="Browse our gallery of completed masonry and construction projects, showcasing our craftsmanship, attention to detail, and quality."
        />
        <meta 
          name="keywords" 
          content="masonry gallery, project photos, construction portfolio, brick work examples, stone masonry projects"
        />
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.origin + location.pathname} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin + location.pathname} />
        <meta property="og:title" content="Project Gallery | Fouquette Contracting" />
        <meta property="og:description" content="Browse our gallery of completed masonry and construction projects, showcasing our craftsmanship, attention to detail, and quality." />
        <meta property="og:image" content={images.length > 0 ? images[0].src : '/assets/images/logo-preview.png'} /> {/* Use first gallery image or fallback */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.origin + location.pathname} />
        <meta name="twitter:title" content="Project Gallery | Fouquette Contracting" />
        <meta name="twitter:description" content="Browse our gallery of completed masonry and construction projects, showcasing our craftsmanship, attention to detail, and quality." />
        <meta name="twitter:image" content={images.length > 0 ? images[0].src : '/assets/images/logo-preview.png'} /> {/* Use first gallery image or fallback */}

        {/* JSON-LD for CollectionPage (ImageGallery) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage", // Could also be ImageGallery directly if preferred
            "name": "Project Gallery | Fouquette Contracting",
            "description": "Browse our gallery of completed masonry and construction projects, showcasing our craftsmanship, attention to detail, and quality.",
            "url": window.location.origin + location.pathname,
            "isPartOf": {
              "@type": "WebSite",
              "url": window.location.origin,
              "name": "Fouquette Contracting"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": images.map((image, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "ImageObject",
                  "contentUrl": image.src,
                  "name": image.title || image.alt,
                  "description": image.alt, // Or a more detailed description if available
                  "thumbnailUrl": image.src // Ideally a smaller thumbnail if available
                }
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Gallery Hero */}
      <Hero
        title="Project Gallery"
        subtitle="Browse our portfolio of completed projects showcasing our craftsmanship and attention to detail"
        backgroundImage="/services_hero_1.png"
        overlay={true}
        height="small"
      />

      {/* Gallery Grid */}
      <Section spacing="lg">
        {images.length === 0 ? (
          <div className="gallery-empty">
            <p>No images available.</p>
          </div>
        ) : (
          <ImageGallery 
            images={images.map(image => ({
              src: image.src,
              alt: image.alt,
              title: image.title
            }))}
            responsive={true}
            aspectRatio="4-3"
            gap={24}
            className="gallery-grid"
          />
        )}
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="lg">
        <div className="gallery-cta">
          <h2 className="gallery-cta-title">Ready to Transform Your Property?</h2>
          <p className="gallery-cta-text">
            Contact us today to discuss your project and receive a free consultation.
          </p>
          <div className="gallery-cta-buttons">
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

export default GalleryPage;
