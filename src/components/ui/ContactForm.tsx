import { useState, type FormEvent } from 'react';
import Button from './Button';
import './ContactForm.scss';

/**
 * ContactForm Component
 * 
 * Purpose: Reusable contact form with validation
 * 
 * Props:
 * - onSubmit: Form submission handler
 * - showServiceField: When true, includes service dropdown
 * - submitButtonText: Text for the submit button
 * 
 * Usage:
 * <ContactForm 
 *   onSubmit={handleSubmit} 
 *   showServiceField={true} 
 *   submitButtonText="Send Message"
 * />
 */

interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => Promise<void>;
  showServiceField?: boolean;
  submitButtonText?: string;
  isSubmitting?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

const SERVICES = [
  'Brickwork',
  'Patios & Walkways',
  'Retaining Walls',
  'Residential Masonry',
  'Commercial Masonry',
  'Concrete Work',
  'Other'
];

const ContactForm = ({
  onSubmit,
  showServiceField = false,
  submitButtonText = 'Send Request',
  isSubmitting: parentIsSubmitting // Rename to avoid conflict with internal state if we keep it, or remove internal if parent controls fully
}: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: showServiceField ? SERVICES[0] : undefined,
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  // const [isSubmitting, setIsSubmitting] = useState(false); // Controlled by parent prop now
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // setIsSubmitting(true); // Parent will set its state, which is passed as prop
    setSubmitError('');
    
    try {
      await onSubmit(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: showServiceField ? SERVICES[0] : undefined,
        message: ''
      });
    } catch (error) {
      setSubmitError('There was an error submitting your request. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      // setIsSubmitting(false); // Parent will set its state
    }
  };
  
  return (
    <div className="contact-form">
      {submitSuccess ? (
        <div className="contact-form__success">
          <h3>Thank you!</h3>
          <p>We've received your message and will respond soon.</p>
          <Button 
            variant="secondary" 
            onClick={() => setSubmitSuccess(false)}
            className="contact-form__reset-button"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form__form">
          <div className="contact-form__field">
            <label htmlFor="name" className="contact-form__label">
              Name <span className="contact-form__required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
              placeholder="Your name"
            />
            {errors.name && <p className="contact-form__error">{errors.name}</p>}
          </div>
          
          <div className="contact-form__field">
            <label htmlFor="email" className="contact-form__label">
              Email <span className="contact-form__required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="contact-form__error">{errors.email}</p>}
          </div>
          
          <div className="contact-form__field">
            <label htmlFor="phone" className="contact-form__label">
              Phone <span className="contact-form__required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`contact-form__input ${errors.phone ? 'contact-form__input--error' : ''}`}
              placeholder="(123) 456-7890"
            />
            {errors.phone && <p className="contact-form__error">{errors.phone}</p>}
          </div>
          
          {showServiceField && (
            <div className="contact-form__field">
              <label htmlFor="service" className="contact-form__label">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="contact-form__select"
              >
                {SERVICES.map(service => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__label">
              Message <span className="contact-form__required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`contact-form__textarea ${errors.message ? 'contact-form__textarea--error' : ''}`}
              placeholder="Tell us about your project..."
              rows={5}
            />
            {errors.message && <p className="contact-form__error">{errors.message}</p>}
          </div>
          
          {submitError && (
            <div className="contact-form__submit-error">
              {submitError}
            </div>
          )}
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={parentIsSubmitting}
            className="contact-form__submit"
          >
            {parentIsSubmitting ? 'Sending...' : submitButtonText}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
