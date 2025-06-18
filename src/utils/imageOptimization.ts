/**
 * Image Optimization Utilities
 * Provides functions for optimizing image loading and display
 */

export interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
}

/**
 * Generate srcset for responsive images
 * @param src Original image source
 * @param widths Array of widths to generate
 * @returns srcset string
 */
export const generateSrcSet = (src: string, widths: number[] = [400, 800, 1200, 1600]): string => {
  // For now, return the original src since we don't have image resizing service
  // In production, this would generate different sized versions
  return widths.map(width => `${src} ${width}w`).join(', ');
};

/**
 * Get optimal sizes attribute for responsive images
 * @param breakpoints Custom breakpoints object
 * @returns sizes string
 */
export const getOptimalSizes = (breakpoints?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string => {
  const defaults = {
    mobile: '100vw',
    tablet: '50vw', 
    desktop: '33vw'
  };
  
  const sizes = { ...defaults, ...breakpoints };
  
  return `(max-width: 768px) ${sizes.mobile}, (max-width: 1200px) ${sizes.tablet}, ${sizes.desktop}`;
};

/**
 * Check if WebP is supported
 * @returns Promise<boolean>
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Preload critical images
 * @param images Array of image sources to preload
 */
export const preloadImages = (images: string[]): void => {
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

/**
 * Lazy load images with Intersection Observer
 * @param imageElements Array of img elements to lazy load
 * @param options Intersection Observer options
 */
export const lazyLoadImages = (
  imageElements: HTMLImageElement[],
  options: IntersectionObserverInit = { rootMargin: '50px' }
): void => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const dataSrc = img.getAttribute('data-src');
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    }, options);

    imageElements.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without Intersection Observer
    imageElements.forEach(img => {
      const dataSrc = img.getAttribute('data-src');
      if (dataSrc) {
        img.src = dataSrc;
        img.removeAttribute('data-src');
        img.classList.remove('lazy');
      }
    });
  }
};

/**
 * Optimize image quality based on device capabilities
 * @param src Original image source
 * @param devicePixelRatio Device pixel ratio
 * @returns Optimized image source
 */
export const getOptimizedImageSrc = (src: string, devicePixelRatio: number = window.devicePixelRatio || 1): string => {
  // For high DPI displays, we want higher quality images
  if (devicePixelRatio > 1.5) {
    // Return high quality version for retina displays
    return src;
  }
  
  // For standard displays, original is fine
  return src;
};

/**
 * Calculate optimal image dimensions for gallery display
 * @param containerWidth Container width in pixels
 * @param columns Number of columns
 * @param gap Gap between images in pixels
 * @returns Optimal image dimensions
 */
export const calculateOptimalDimensions = (
  containerWidth: number,
  columns: number,
  gap: number
): { width: number; height: number } => {
  const totalGap = gap * (columns - 1);
  const availableWidth = containerWidth - totalGap;
  const width = Math.floor(availableWidth / columns);
  const height = Math.floor(width * 0.75); // 4:3 aspect ratio
  
  return { width, height };
}; 