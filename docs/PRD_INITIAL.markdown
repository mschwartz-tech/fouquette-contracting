# **Fouquette Contracting Website – Product Requirements Document (PRD)**

## **1. Project Overview**

- **Business Name**: Fouquette Contracting (Masonry & Construction)
- **Location**: Minnesota-based contractor (serving local residential & commercial clients)
- **Primary Contact**: Dalton Fouquette - fouquette.contracting@gmail.com - 763-204-0630
- **Project Goal**: Establish a professional online presence to showcase services, past projects, build credibility, and generate leads. The website must highlight Fouquette’s masonry expertise and drive visitors to contact the business or schedule a consultation.
- **Primary User Actions**: Visitors should easily access services, view project examples, read testimonials, and contact/book via forms. The site must address the current pain point (no website) by delivering a modern, functional platform.
- **Tech Stack**: Built using Bolt.new with Vite dev server; deployed on Netlify via GitHub repository; Supabase as the database for content management.

---

## **2. Design & Branding**

### **2.1 Brand Logo & Colors**
- **Logo**: Use the high-resolution logo provided (black "Fouquette" text on bright orange background). Place in header and footer of all pages, maintaining aspect ratio with 20px clear space around it.
- **Color Scheme**:
  - Primary: Bright Orange (`#FFA500`)
  - Secondary: Black (`#000000`)
  - Neutral: White (`#FFFFFF`), Light Gray (`#F5F5F5`)
- **Usage**:
  - Orange: CTAs, buttons, icons, headers.
  - Black: Text, UI elements.
  - White/Light Gray: Backgrounds for contrast and cleanliness.

### **2.2 Layout & Style**
- **Approach**: Modern, minimalist, professional tone.
- **Elements**:
  - Clean lines, ample white space (min 20px padding between sections).
  - Rounded corners (8px radius) on containers/buttons/images.
  - Avoid busy graphics or heavy textures; use subtle geometric accents (e.g., thin orange lines).

### **2.3 Typography**
- **Font**: `Roboto` (Google Fonts, sans-serif).
- **Weights**: Bold (700) for headings, Regular (400) for body.
- **Sizes**:
  - H1: 36px
  - H2: 28px
  - H3: 22px
  - Body: 16px
- **Colors**: Black (`#000000`) on light backgrounds; ensure 4.5:1 contrast ratio.

### **2.4 Imagery & Media**
- **Type**: High-quality masonry/construction images (e.g., brickwork, patios).
- **Optimization**:
  - Format: WebP.
  - Lazy loading for images below the fold.
  - Responsive: Use `srcset` for mobile/desktop.
- **Hero Media**: Full-width image or muted <10s video (e.g., bricklaying); static image fallback on mobile.

### **2.5 Tone & Messaging**
- **Tone**: Confident, modern, trustworthy.
- **Language**: Professional, approachable, no jargon.
- **Headlines**: Short, impactful (e.g., "Quality Masonry, Built to Last").

### **2.6 Responsive Design**
- **Approach**: Mobile-first, fully responsive.
- **Mobile**:
  - Hamburger menu (toggle slide-out nav).
  - Vertical stacking of sections.
  - Min 16px body text.
- **Testing**: Chrome, Firefox, Safari; iPhone, Android, desktop.

---

## **3. Site Pages & Content Structure**

Eight pages with consistent header/footer. Use placeholder text (e.g., lorem ipsum) where content is unavailable.

### **3.1 Home Page**
- **Hero**:
  - Background: Full-width image/video.
  - Overlay: Logo, Headline ("Expert Masonry & Construction Services in Minnesota"), Tagline ("Quality craftsmanship for your home or business").
  - CTA: "Get a Quote" button (links to Booking).
- **Intro**: "Fouquette Contracting delivers top-tier masonry and construction in Minnesota, focusing on quality and client satisfaction." (Placeholder).
- **Quick Links**:
  - 3 cards (flex/grid layout):
    - "Our Services" (trowel icon, links to Services).
    - "Client Testimonials" (quote icon, links to Testimonials).
    - "Get in Touch" (phone icon, links to Booking).
- **Optional**:
  - Featured Projects: 3-photo carousel (lazy-loaded).
  - Differentiators: 4 points (e.g., "20+ Years Experience") with icons.

### **3.2 About Page**
- **Mission**: "Our Mission: To build quality structures and lasting relationships."
- **Story**: Placeholder: "Founded in 2020, Fouquette Contracting is a trusted Minnesota masonry firm..."
- **Values**: List with icons: Quality, Integrity, Safety, Satisfaction.
- **Photo**: Placeholder image (alt: "Dalton Fouquette, Founder").

### **3.3 Services Page**
- **Intro**: "Comprehensive masonry and construction services for all needs."
- **Services** (grid layout):
  - Brickwork: Icon (bricks), "Expert bricklaying for new builds or repairs."
  - Patios & Walkways: Icon (patio), "Custom brick/stone patios and paths."
  - Retaining Walls: Icon (wall), "Durable masonry retaining walls."
  - Residential Masonry: Icon (house), "Home masonry solutions."
  - Commercial Masonry: Icon (building), "Commercial masonry projects."
  - Concrete Work: Icon (mixer), "Concrete foundations and slabs."
- **CTA**: "Ready to start? Contact us." (links to Booking).

### **3.4 Gallery Page**
- **Intro**: "Explore our craftsmanship in our portfolio."
- **Gallery**: Masonry grid (12+ images, lazy-loaded, WebP).
- **Features**: Lightbox on click (dark backdrop, nav arrows).
- **Alt Text**: Descriptive (e.g., "Brick patio with fire pit").

### **3.5 Testimonials Page**
- **Intro**: "Here’s what our clients say:"
- **Testimonials** (carousel, 3-5 entries):
  - Quote: "Amazing patio work!" - Jane S., 5 stars (orange).
  - Placeholder content until real quotes provided.
- **Style**: Light gray card backgrounds.

### **3.6 Booking Page**
- **Header**: "Schedule a Consultation"
- **Intro**: "Book your project consultation below."
- **Calendly**: `<div id="calendly-embed"></div>` (placeholder for embed code).
- **Form**:
  - Fields: Name*, Email*, Phone*, Service (dropdown), Message*.
  - Button: "Send Request" (orange).
  - Action: Email to fouquette.contracting@gmail.com; success message: "Thank you! We’ll respond soon."

### **3.7 FAQ Page**
- **Intro**: "Answers to common questions."
- **FAQs** (accordion):
  - "What areas do you serve?" - "Twin Cities metro and beyond."
  - "How do I get a quote?" - "Use our form or call us."
  - "What projects do you handle?" - "Patios, walls, and more."

### **3.8 Contact Page**
- **Info**:
  - Phone: 763-204-0630 (tel: link).
  - Email: fouquette.contracting@gmail.com (mailto: link).
  - Hours: Mon-Fri, 8:00am-5:00pm.
  - Area: "Serving Minneapolis & St. Paul metro."
- **Map**: Google Maps iframe (Minneapolis placeholder).
- **Form**: Same as Booking page.

---

## **4. Admin Dashboard**

The admin dashboard will be a secure, intuitive interface integrated into the Fouquette Contracting website, enabling authorized users to manage all content, images, SEO settings, and global elements efficiently. Built within the existing Vite and React application, it will be accessible via a protected `/admin` route and deployed on Netlify.

### **4.1 Key Features**

#### **4.1.1 Authentication**
- **Secure Access**: Utilizes Supabase for user authentication.
- **Login Flow**: Unauthorized users are redirected to a login page; only authenticated users can access the dashboard.

#### **4.1.2 Content Editing**
- **Text Management**: Edit all text content across pages (e.g., headlines, descriptions, blurbs, service details, FAQs, testimonials).
- **List Management**: Add, edit, or remove items in dynamic lists (e.g., services, testimonials, FAQs).
- **Supported Pages**: Home, About, Services, Gallery, Testimonials, FAQ, Contact, Booking.

#### **4.1.3 Image Management**
- **Photo Uploads**: Upload images for each image placeholder on the site, including:
  - Hero section images.
  - Gallery images (multi-upload support).
  - Featured project images.
- **Logo Upload**: Replace the site logo via a dedicated upload field.
- **Previews**: Display image previews before finalizing uploads.

#### **4.1.4 SEO Settings**
- **Per-Page SEO**: Edit meta titles and descriptions for each page.
- **Dynamic Integration**: SEO data stored in Supabase and injected into pages using `react-helmet`.

#### **4.1.5 Sitemap Management**
- **Static Sitemap**: A static `sitemap.xml` will be generated during build time, listing all main pages (Home, About, Services, etc.).
- **Future Flexibility**: If dynamic content (e.g., gallery items) requires sitemap updates, this can be revisited; for now, it remains static given the fixed page structure.

#### **4.1.6 Global Settings**
- **Copyright Material**: Edit the copyright notice displayed in the footer (e.g., "© 2025 Fouquette Contracting").
- **Contact Information**: Update phone, email, and business hours displayed in the footer or Contact page.
- **Logo**: Manage the site logo, ensuring it updates across header and footer.

### **4.2 Dashboard Structure**

#### **4.2.1 Layout**
- **Sidebar Navigation**: A concise sidebar with links to:
  - Home Page Editor
  - About Page Editor
  - Services Page Editor
  - Gallery Editor
  - Testimonials Editor
  - FAQ Editor
  - Contact Page Editor
  - Booking Page Editor
  - Global Settings
- **Page Editors**: Each editor uses tabs or accordions to separate:
  - **Content**: Text and image editing.
  - **SEO**: Meta title and description fields.

#### **4.2.2 User Interface**
- **Text Editing**: 
  - Short text (e.g., headlines) uses single-line inputs.
  - Longer text (e.g., blurbs) uses textareas.
- **Image Uploads**: 
  - File inputs with drag-and-drop support (via `react-dropzone`).
  - Thumbnails displayed post-upload with delete/reorder options (using `react-beautiful-dnd` for reordering).
- **List Editing**: 
  - Editable list items with "Add New" and "Remove" buttons.
  - Example: Testimonials editor shows a list; each item has fields for name, quote, and optional image.
- **Feedback**: Success/error messages after saving (e.g., "Changes saved successfully").

### **4.3 Technical Implementation**

#### **4.3.1 Framework**
- **Integration**: Built as part of the React app using Vite, accessible at `/admin`.
- **Routing**: Managed with `react-router-dom`, with sub-routes for each editor (e.g., `/admin/home`).

#### **4.3.2 Data Management**
- **Content Storage**: Text and SEO data stored in Supabase tables (e.g., `pages`, `testimonials`, `faqs`).
- **Image Storage**: Images uploaded to Supabase Storage or a cloud service (e.g., Cloudinary) for efficiency.

#### **4.3.3 Content Updates**
- **Workflow**: 
  1. Dashboard sends updated content or images to Supabase via API calls.
  2. Supabase updates the database and storage accordingly.
  3. The site fetches the latest content from Supabase on page load or refresh.
- **Security**: Row Level Security (RLS) in Supabase ensures only authorized users can edit content.

#### **4.3.4 Image Uploads**
- **Process**: 
  - Images sent via FormData to Supabase Storage.
  - URLs stored in the database and referenced in the content.
- **Options**: 
  - Use Supabase Storage for simplicity and integration.
  - Consider Cloudinary for advanced image management if needed.

### **4.4 User Experience Considerations**

#### **4.4.1 Conciseness & Ease of Use**
- **Organized Navigation**: Sidebar mirrors site structure, making it intuitive to find content.
- **Simplified Forms**: Clear labels, minimal fields, and logical grouping (e.g., Hero content in one accordion).
- **Visual Clarity**: Image thumbnails and previews reduce errors; list items are collapsible for long lists.

#### **4.4.2 Performance**
- **Update Delay**: Changes are reflected immediately after saving, as content is fetched from Supabase.
- **Optimization**: Efficient queries and caching ensure quick dashboard loading.

### **4.5 Example Workflow**
1. **Edit Copyright**: Navigate to "Global Settings," update the copyright text (e.g., "© 2025 Fouquette Contracting"), save, and see changes live.
2. **Upload Logo**: In "Global Settings," upload a new logo; preview it, confirm, and the site updates immediately.
3. **Update Gallery**: Go to "Gallery Editor," drag-and-drop new images, reorder as needed, save, and see updates live.
4. **SEO Adjustment**: In "Home Page Editor," switch to the "SEO" tab, edit the meta title, save, and verify via site refresh.

---

## **5. Database Integration with Supabase**

Supabase will be used as the database for managing content, user authentication, and image storage.

### **5.1 Setup**
- **Project Creation**: A new Supabase project will be created, and the API keys and database URL will be obtained.
- **Client Integration**: The Supabase JavaScript client will be installed and initialized in the application.

### **5.2 Features**
- **Authentication**: Supabase Auth for user sign-up, login, and dashboard access.
- **Data Management**: CRUD operations for content, testimonials, FAQs, etc.
- **Image Storage**: Supabase Storage for uploading and managing images.
- **Real-Time Updates**: Optionally, use Supabase real-time for live updates if needed.

### **5.3 Considerations**
- **Security**: Implement Row Level Security (RLS) to protect data.
- **Performance**: Optimize queries and use caching where appropriate.
- **Error Handling**: Implement robust error handling for API calls.

---

## **6. Global Components & Functionality**

### **6.1 Header**
- **Layout**: Logo (left), Nav (right: Home, About, Services, Gallery, Testimonials, FAQ, Contact, Booking).
- **Mobile**: Hamburger menu (slide-out).
- **Sticky**: Shrinks on scroll (50px height).

### **6.2 Footer**
- **Content**: Logo, Contact (phone, email), Quick Links, "© 2025 Fouquette Contracting."
- **Style**: Black background, white text.

### **6.3 Performance**
- **Images**: WebP, lazy-loaded, `srcset`.
- **CSS/JS**: Minified, use flexbox/grid.
- **Load Time**: <3s for main content.

### **6.4 Accessibility**
- **Alt Text**: All images (e.g., "Masonry project photo").
- **Contrast**: 4.5:1 minimum.
- **Keyboard**: Navigable (tab order, Enter triggers).

### **6.5 SEO**
- **Titles**: Unique (e.g., "Fouquette Contracting - Masonry Services").
- **Meta**: 150-160 chars per page.
- **URLs**: Clean (e.g., `/services`).

### **6.6 Integrations**
- **Google Analytics**: GA4 in `<head>` (async).
- **Calendly**: Placeholder `<div>` on Booking.
- **Forms**: Email submissions (Netlify Forms compatible).

---

## **7. Development Environment & Deployment**

### **7.1 Setup**
- **Tool**: Vite (React recommended).
- **Install**: `npm create vite@latest`, select React.
- **Dependencies**: `npm install` (e.g., `react-router-dom`, `supabase-js`).
- **Structure**: Reusable components (Header, Footer, Form).

### **7.2 Deployment**
- **Platform**: Netlify.
- **Repo**: GitHub; auto-deploy on `main` push.
- **Config**: 
  - Build command: `npm run build`.
  - Publish dir: `dist`.
  - Env vars: Add Supabase API keys in Netlify dashboard.

### **7.3 Testing**
- **Checks**: Links, forms, responsiveness, accessibility (Lighthouse), speed (<3s).

---

## **8. Implementation Notes**
- **Stack**: Vite + React for modularity.
- **Features**:
  - CSS transitions (e.g., button hovers: `transition: background 0.3s`).
  - Scroll animations (e.g., `opacity: 0` to `1` on scroll).
  - Back-to-top button (bottom-right, orange).
- **Content**: Use Supabase for dynamic content fetching.
- **Compliance**: Add privacy note in footer if GA4 used.

---

## **9. Conclusion**
This PRD equips the AI agent to build a modern, responsive website for Fouquette Contracting using Bolt.new, Vite, Supabase, and Netlify. It ensures a professional design, seamless functionality, and lead generation, establishing Fouquette as a masonry leader online.