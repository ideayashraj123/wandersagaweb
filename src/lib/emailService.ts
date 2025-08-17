import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  travelers: number;
  tentativeDates: string;
  tourName?: string;
  tourPrice?: string;
}

export const sendBookingEmail = async (formData: BookingFormData): Promise<boolean> => {
  try {
    // Check if EmailJS is configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || 
        SERVICE_ID === 'your_service_id_here' || 
        TEMPLATE_ID === 'your_template_id_here' || 
        PUBLIC_KEY === 'your_public_key_here') {
      console.log('EmailJS not configured, using fallback method');
      return false;
    }

    // Initialize EmailJS with your public key
    emailjs.init(PUBLIC_KEY);

    // Template parameters that will be sent to the email template
    const templateParams = {
      to_email: 'info@wandersaga.in',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      travelers: formData.travelers,
      tentative_dates: formData.tentativeDates,
      tour_name: formData.tourName || 'General Inquiry',
      tour_price: formData.tourPrice || 'N/A',
      message: `
        New booking inquiry received:
        
        Customer Details:
        - Name: ${formData.name}
        - Email: ${formData.email}
        - Phone: ${formData.phone}
        - Number of Travelers: ${formData.travelers}
        - Tentative Dates: ${formData.tentativeDates}
        
        Tour Details:
        - Tour: ${formData.tourName || 'General Inquiry'}
        - Price: ${formData.tourPrice || 'N/A'}
        
        Please contact the customer as soon as possible.
      `,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Alternative fallback method using mailto (opens user's default email client)
export const sendEmailFallback = (formData: BookingFormData): void => {
  const subject = `New Booking Inquiry - ${formData.tourName || 'General Inquiry'}`;
  const body = `
Dear WanderSaga Team,

I would like to inquire about booking a tour. Here are my details:

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Number of Travelers: ${formData.travelers}
- Tentative Dates: ${formData.tentativeDates}

Tour Details:
- Tour: ${formData.tourName || 'General Inquiry'}
- Price: ${formData.tourPrice || 'N/A'}

Please contact me with more information and availability.

Best regards,
${formData.name}
  `;

  const mailtoLink = `mailto:info@wandersaga.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink, '_blank');
};
