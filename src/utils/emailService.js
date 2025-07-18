import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_33zy6gb', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_r1y5zsi', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'gAHh7MMrMXbc1gVa6', // Replace with your EmailJS public key
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    const now = new Date();
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        to_name: 'S-P Exhibition Team',
        // Support for simple template (your HTML template)
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        current_date: now.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        current_time: now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }),
        // Support for modern templates
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        date: now.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }),
        reply_to: formData.email,
        // Additional fields to make sender info more prominent
        sender_name: formData.name,
        sender_email: formData.email,
        sender_phone: formData.phone,
        contact_email: formData.email,
        contact_name: formData.name,
        contact_phone: formData.phone,
        // Subject line to include sender info
        subject: `New Contact Form Submission from ${formData.name} (${formData.email})`,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Email sent successfully!',
      response
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error
    };
  }
};

// Send email with custom template
export const sendCustomEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Email sent successfully!',
      response
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error
    };
  }
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate form data
export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.phone || formData.phone.trim().length < 10) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Test function to verify template variables
export const testEmailTemplate = async () => {
  const testData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    message: 'This is a test message to verify that all template variables are working correctly.\n\nThis includes:\n- Name field\n- Email field\n- Phone field\n- Message field\n- Date and time stamps'
  };

  try {
    const result = await sendContactEmail(testData);
    console.log('Test email result:', result);
    return result;
  } catch (error) {
    console.error('Test email failed:', error);
    return { success: false, error };
  }
}; 