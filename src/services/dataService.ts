/**
 * Data Service
 * 
 * Service for accessing static data for the website.
 * This service provides read-only access to hardcoded data.
 */

import type { 
  Service, 
  Testimonial, 
  FAQ, 
  GalleryImage, 
  HomePage, 
  AboutPage,
  ContactFormData,
  ServicesPage,
  GalleryPage,
  TestimonialsPage,
  FAQPage,
  BookingPage,
  ContactPage
} from '../data/models';

// Import static data
import services from '../data/mock/services.json';
import testimonials from '../data/mock/testimonials.json';
import faqs from '../data/mock/faqs.json';
import gallery from '../data/mock/gallery.json';

// Import page-specific data
import homePage from '../data/mock/pages/home.json';
import aboutPage from '../data/mock/pages/about.json';
import servicesPage from '../data/mock/pages/services.json';
import galleryPage from '../data/mock/pages/gallery.json';
import testimonialsPage from '../data/mock/pages/testimonials.json';
import faqPage from '../data/mock/pages/faq.json';
import bookingPage from '../data/mock/pages/booking.json';
import contactPage from '../data/mock/pages/contact.json';

/**
 * DataService class that provides access to static website data.
 */
class DataService {
  /**
   * Get all services
   */
  async getServices(): Promise<Service[]> {
    return services as Service[];
  }

  /**
   * Get a service by ID
   */
  async getServiceById(id: string): Promise<Service | undefined> {
    const allServices = await this.getServices();
    return allServices.find(service => service.id === id);
  }

  /**
   * Get all testimonials
   */
  async getTestimonials(): Promise<Testimonial[]> {
    return testimonials as Testimonial[];
  }

  /**
   * Get testimonial by ID
   */
  async getTestimonialById(id: string): Promise<Testimonial | undefined> {
    const allTestimonials = await this.getTestimonials();
    return allTestimonials.find(testimonial => testimonial.id === id);
  }

  /**
   * Get all FAQs
   */
  async getFAQs(): Promise<FAQ[]> {
    return faqs as FAQ[];
  }
  
  /**
   * Get a FAQ by ID
   */
  async getFAQById(id: string): Promise<FAQ | undefined> {
    const allFAQs = await this.getFAQs();
    return allFAQs.find(faq => faq.id === id);
  }

  /**
   * Get all gallery images
   */
  async getGalleryImages(): Promise<GalleryImage[]> {
    return gallery as GalleryImage[];
  }
  
  /**
   * Get a gallery image by ID
   */
  async getGalleryImageById(id: string): Promise<GalleryImage | undefined> {
    const allImages = await this.getGalleryImages();
    return allImages.find(image => image.id === id);
  }

  /**
   * Get featured gallery images
   */
  async getFeaturedGalleryImages(): Promise<GalleryImage[]> {
    const allImages = await this.getGalleryImages();
    return allImages.filter(image => image.featured);
  }

  /**
   * Get gallery images by category
   */
  async getGalleryImagesByCategory(category: string): Promise<GalleryImage[]> {
    const allImages = await this.getGalleryImages();
    return allImages.filter(image => image.category === category);
  }

  /**
   * Get home page data
   */
  async getHomePageData(): Promise<HomePage> {
    return homePage as HomePage;
  }

  /**
   * Get about page data
   */
  async getAboutPageData(): Promise<AboutPage> {
    return aboutPage as AboutPage;
  }

  /**
   * Get services page data
   */
  async getServicesPageData(): Promise<ServicesPage> {
    return servicesPage as unknown as ServicesPage;
  }

  /**
   * Get gallery page data
   */
  async getGalleryPageData(): Promise<GalleryPage> {
    return galleryPage as unknown as GalleryPage;
  }

  /**
   * Get testimonials page data
   */
  async getTestimonialsPageData(): Promise<TestimonialsPage> {
    return testimonialsPage as unknown as TestimonialsPage;
  }

  /**
   * Get FAQ page data
   */
  async getFAQPageData(): Promise<FAQPage> {
    return faqPage as FAQPage;
  }

  /**
   * Get booking page data
   */
  async getBookingPageData(): Promise<BookingPage> {
    return bookingPage as BookingPage;
  }

  /**
   * Get contact page data
   */
  async getContactPageData(): Promise<ContactPage> {
    return contactPage as ContactPage;
  }

  /**
   * Submit contact form
   * Simulates form submission for demonstration purposes
   */
  async submitContactForm(formData: ContactFormData): Promise<boolean> {
    console.log('Contact form submitted:', formData);
    
    // Simulate success for demo purposes
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
}

// Export as singleton
export const dataService = new DataService();
