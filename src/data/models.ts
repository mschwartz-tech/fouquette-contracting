/**
 * Data Models
 * 
 * Contains TypeScript interfaces for all data models used in the application
 */

// Service Model
export interface GalleryItem {
  src: string;
  alt?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mainImageSrc: string;
  mainImageAlt: string;
  features: string[];
  contentSections?: ServiceContentSection[];
}

// Testimonial Model
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
  date: string;
  imageSrc?: string;
}

// FAQ Model
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Gallery Image Model
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  featured: boolean;
}

// Home Page Models
export interface HeroSection {
  title: string;
  subtitle: string;
  logo?: string;
  logoAlt?: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt?: string; // Alt text for hero image if used as <img>
  backgroundOverlay?: boolean;
}

export interface IntroSection {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
  ctaText: string;
  ctaLink: string;
}

export interface FeaturedService {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  link: string;
}

export interface FeaturedServicesSection {
  title: string;
  subtitle: string;
  services: FeaturedService[];
  ctaText: string;
  ctaLink: string;
}

export interface ProjectPreview {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  category: string;
}

export interface ProjectsSection {
  title: string;
  subtitle: string;
  projects: ProjectPreview[];
  ctaText: string;
  ctaLink: string;
}

export interface TestimonialPreview {
  id: string;
  name: string;
  text: string;
  location: string;
  rating: number;
}

export interface TestimonialsSection {
  title: string;
  subtitle: string;
  testimonials: TestimonialPreview[];
  ctaText: string;
  ctaLink: string;
}

export interface CallToAction {
  text: string;
  link: string;
}

export interface CTASection {
  title: string;
  subtitle: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  backgroundSrc?: string;
  content?: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string; // Optional: URL for Open Graph image
  twitterImage?: string; // Optional: URL for Twitter Card image
}

export interface HomePage {
  heroSection: HeroSection;
  introSection: IntroSection;
  featuredServices: FeaturedServicesSection;
  projectsSection: ProjectsSection;
  testimonialsSection: TestimonialsSection;
  ctaSection: CTASection;
  seo: SEO;
}

// About Page Models
export interface AboutHeroSection {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface CompanySection {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface ValuesSection {
  title: string;
  values: ValueItem[];
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface TeamSection {
  title: string;
  subtitle: string;
  team: TeamMember[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ExperienceSection {
  title: string;
  stats: StatItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessSection {
  title: string;
  steps: ProcessStep[];
}

export interface AboutPage {
  heroSection: AboutHeroSection;
  companySection: CompanySection;
  valuesSection: ValuesSection;
  teamSection: TeamSection;
  experienceSection: ExperienceSection;
  processSection: ProcessSection;
  ctaSection: CTASection;
  seo: SEO;
}

// Services Page Models
export interface ServicesHeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay?: boolean;
}

export interface ServicesIntroduction {
  title: string;
  content: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServicesProcess {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export interface GalleryItem {
  src: string;
  alt?: string;
}

export interface ServiceContentSection {
  type: 'text' | 'image' | 'list';
  title?: string;
  content?: string; // For text type
  imageSrc?: string; // For image type
  imageAlt?: string; // For image type
  items?: string[]; // For list type
}

export interface ServiceDetail {
  id: string;
  title: string;
  heroSection: ServicesHeroSection;
  introduction: ServicesIntroduction;
  mainImage: string;
  mainImageAlt?: string;
  summary: string;
  detailedContent: ServiceContentSection[];
  gallery: GalleryItem[]; 
  benefits: string[];
  relatedServices: Service[];
  faq: FAQ[];
  cta: CTASection;
  seo: SEO;
}

export interface ServicesPage {
  hero: ServicesHeroSection;
  introduction: ServicesIntroduction;
  featuredCategories: ServiceCategory[];
  process: ServicesProcess;
  testimonial: Testimonial;
  cta: CTASection;
  seo: SEO;
}

// Gallery Page Models
export interface GalleryHeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay?: boolean;
}

export interface GalleryIntroduction {
  title: string;
  content: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string; // Added imageAlt field
  category: string;
}

export interface GalleryPage {
  hero: GalleryHeroSection;
  introduction: GalleryIntroduction;
  categories: GalleryCategory[];
  featuredProjects: FeaturedProject[];
  testimonial: Testimonial;
  cta: CTASection;
  seo: SEO;
}

// Testimonials Page Models
export interface TestimonialsHeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay?: boolean;
}

export interface TestimonialsIntroduction {
  title: string;
  content: string;
}

export interface TestimonialCategory {
  id: string;
  name: string;
}

export interface SubmitSection {
  title: string;
  content: string;
  buttonText: string;
}

export interface TestimonialsPage {
  hero: TestimonialsHeroSection;
  introduction: TestimonialsIntroduction;
  featuredTestimonial: Testimonial;
  testimonialCategories: TestimonialCategory[];
  submitSection: SubmitSection;
  cta: CTASection;
  seo: SEO;
}

// FAQ Page Models
export interface FAQHeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay?: boolean;
}

export interface FAQIntroduction {
  title: string;
  content: string;
}

export interface FAQCategory {
  id: string;
  name: string;
}

export interface ContactSection {
  title: string;
  content: string;
  phone: string;
  email: string;
  buttonText: string;
  buttonLink: string;
}

export interface FAQPage {
  hero: FAQHeroSection;
  introduction: FAQIntroduction;
  categories: FAQCategory[];
  contactSection: ContactSection;
  cta: CTASection;
  seo: SEO;
}

// Booking Page Models
export interface BookingHeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay?: boolean;
}

export interface BookingIntroduction {
  title: string;
  content: string;
}

export interface BookingProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface BookingProcess {
  title: string;
  steps: BookingProcessStep[];
}

export interface FormField {
  id: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export interface FormSettings {
  title: string;
  subtitle: string;
  submitButtonText: string;
  successMessage: string;
  fields: FormField[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingFAQ {
  title: string;
  questions: FAQItem[];
}

export interface BookingPage {
  hero: BookingHeroSection;
  introduction: BookingIntroduction;
  bookingProcess: BookingProcess;
  formSettings: FormSettings;
  testimonial: Testimonial;
  faq: BookingFAQ;
  seo: SEO;
}

// Contact Page Models
export interface ContactHeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay?: boolean;
}

export interface ContactIntroduction {
  title: string;
  content: string;
}

export interface ContactInfoItem {
  label: string;
  value: string;
  icon: string;
}

export interface ContactInfo {
  phone: ContactInfoItem;
  email: ContactInfoItem;
  address: ContactInfoItem;
  hours: ContactInfoItem;
}

export interface MapSettings {
  latitude: number;
  longitude: number;
  zoom: number;
  markerTitle: string;
}

export interface SocialMediaPlatform {
  name: string;
  url: string;
  icon: string;
}

export interface SocialMedia {
  title: string;
  platforms: SocialMediaPlatform[];
}

export interface ContactPage {
  hero: ContactHeroSection;
  introduction: ContactIntroduction;
  contactInfo: ContactInfo;
  mapSettings: MapSettings;
  formSettings: FormSettings;
  socialMedia: SocialMedia;
  faq: BookingFAQ;
  cta: CTASection;
  seo: SEO;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}
