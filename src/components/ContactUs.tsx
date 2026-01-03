import React, { useEffect, useState } from 'react';
import '../styles/contactus.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    userType: 'Student',
    subject: 'Course Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  useEffect(() => {
  if (submitStatus === 'success') {
    const timer = setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        userType: 'Student',
        subject: 'Course Enquiry',
        message: '',
      });
      setErrors({});
    }, 5000); // 5 seconds
    return () => clearTimeout(timer); // cleanup
  }
}, [submitStatus]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate submission (replace with actual API call if needed)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setIsSubmitting(false);
    // Optionally reset form
    // setFormData({ fullName: '', email: '', mobile: '', userType: 'Student', subject: 'Course Enquiry', message: '' });
  };

  return (
    <div className="contactus-container">
      <div className="hero-section">
        <h1>Contact Us</h1>
        <div className="hero-decoration"></div>
        <p className="subtitle">We’re here to help you with your learning journey</p>
        <p className="description">
          Have questions about our courses, need technical support, or just want to share feedback? Reach out to us—we’re always happy to assist students, parents, and educators!
        </p>
      </div>

      <div className="contact-content">
        <div className="form-section">
          {submitStatus === 'success' && (
            <div className="success-message">
                Thank you for contacting BiologyLover. We’ll get back to you soon.
            </div>
            )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Full Name <span className="required">*</span></label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Email Address <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Mobile Number (optional)</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 ___________"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label>User Type</label>
              <select name="userType" value={formData.userType} onChange={handleChange} disabled={isSubmitting}>
                <option value="Student">Student</option>
                <option value="Parent">Parent</option>
                <option value="Teacher">Teacher</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select name="subject" value={formData.subject} onChange={handleChange} disabled={isSubmitting}>
                <option value="Course Enquiry">Course Enquiry</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Payment / Subscription">Payment / Subscription</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message <span className="required">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us how we can help you... (min. 20 characters)"
                disabled={isSubmitting}
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <p className="privacy-note">
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>

        <div className="info-section">
          <h3>Get in Touch</h3>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <div>
              <strong>Email:</strong>
              <a href="mailto:support@biologylover.com">support@biologylover.com</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">📱</span>
            <div>
              <strong>Phone / WhatsApp:</strong>
              <a href="tel:+919999999999">+91 99999 99999</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">🕒</span>
            <div>
              <strong>Support Hours:</strong>
              <p>Mon–Sat, 10 AM – 7 PM IST</p>
            </div>
          </div>

          <div className="social-links-contact">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/biology_lover_02/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              Instagram
            </a>
            <a href="https://www.youtube.com/@biology_lover_02" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;