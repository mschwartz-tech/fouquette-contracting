import { useState, useRef } from 'react';
import './ImageGallery.scss';

/**
 * ImageGallery Component
 * 
 * Purpose: Grid layout for gallery images with lightbox functionality
 * 
 * Props:
 * - images: Array of image objects with src, alt, and title properties
 * - columnCount: Number of columns in the grid
 * - gap: Gap between images in pixels
 * 
 * Usage:
 * <ImageGallery 
 *   images={[
 *     { src: '/images/gallery/image1.webp', alt: 'Project 1', title: 'Custom Brick Patio' },
 *     { src: '/images/gallery/image2.webp', alt: 'Project 2', title: 'Stone Retaining Wall' }
 *   ]} 
 *   columnCount={3}
 * />
 */

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  sizes?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columnCount?: number;
  gap?: number;
  className?: string;
  responsive?: boolean;
  aspectRatio?: 'auto' | 'square' | '16-9' | '4-3';
}

const ImageGallery = ({
  images,
  columnCount = 3,
  gap = 16,
  className = '',
  responsive = true,
  aspectRatio = 'auto'
}: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const galleryRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = ''; // Restore scrolling
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setActiveImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!lightboxOpen) return;

    switch (e.key) {
      case 'ArrowLeft':
        navigateLightbox('prev');
        break;
      case 'ArrowRight':
        navigateLightbox('next');
        break;
      case 'Escape':
        closeLightbox();
        break;
      default:
        break;
    }
  };

  const gridClasses = [
    'image-gallery',
    responsive ? 'image-gallery--responsive' : '',
    aspectRatio !== 'auto' ? `image-gallery--aspect-${aspectRatio}` : '',
    className
  ].filter(Boolean).join(' ');

  const gridStyles = responsive ? {
    gap: `${gap}px`
  } : {
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    gap: `${gap}px`
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <div 
      ref={galleryRef}
      className={gridClasses} 
      style={gridStyles}
      onKeyDown={handleKeyDown}
      tabIndex={lightboxOpen ? 0 : -1}
    >
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`image-gallery__item ${loadedImages.has(index) ? 'loaded' : 'loading'}`}
          onClick={() => openLightbox(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openLightbox(index);
            }
          }}
          aria-label={`View ${image.title || image.alt} in lightbox`}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="image-gallery__img"
            loading={index < 6 ? "eager" : "lazy"}
            onLoad={() => handleImageLoad(index)}
            sizes={image.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            style={{
              aspectRatio: aspectRatio === 'auto' ? 'auto' : 
                          aspectRatio === 'square' ? '1 / 1' :
                          aspectRatio === '16-9' ? '16 / 9' :
                          aspectRatio === '4-3' ? '4 / 3' : 'auto',
              objectFit: 'cover',
              width: '100%',
              height: 'auto'
            }}
            decoding="async"
          />
          {!loadedImages.has(index) && (
            <div className="image-gallery__placeholder" />
          )}
          {image.title && (
            <div className="image-gallery__overlay">
              <span className="image-gallery__title">{image.title}</span>
            </div>
          )}
        </div>
      ))}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="image-gallery__lightbox" onClick={closeLightbox}>
          <button 
            className="image-gallery__close-btn" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          
          <div 
            className="image-gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on content
          >
            <img 
              src={images[activeImageIndex].src} 
              alt={images[activeImageIndex].alt} 
              className="image-gallery__lightbox-img"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
              decoding="async"
            />
            
            {images[activeImageIndex].title && (
              <div className="image-gallery__lightbox-title">
                {images[activeImageIndex].title}
              </div>
            )}
            
            <button 
              className="image-gallery__nav-btn image-gallery__nav-btn--prev" 
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              aria-label="Previous image"
            >
              &#10094;
            </button>
            
            <button 
              className="image-gallery__nav-btn image-gallery__nav-btn--next" 
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              aria-label="Next image"
            >
              &#10095;
            </button>
            
            <div className="image-gallery__counter">
              {activeImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
