# EmailJS Setup Instructions

This project uses EmailJS to send booking inquiry emails directly from the frontend to info@wandersaga.in.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service

1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
3. Follow the setup instructions for your provider
4. Note down your **Service ID**

### 3. Create Email Template

1. Click "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Booking Inquiry - {{tour_name}}

**Content:**

```
Dear WanderSaga Team,

You have received a new booking inquiry:

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Number of Travelers: {{travelers}}
- Tentative Dates: {{tentative_dates}}

Tour Details:
- Tour: {{tour_name}}
- Price: {{tour_price}}

Please contact the customer as soon as possible.

This email was sent automatically from your website booking form.
```

4. Set the "To Email" to: info@wandersaga.in
5. Save the template and note down your **Template ID**

### 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (User ID)

### 5. Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test the Setup

1. Restart your development server: `npm run dev`
2. Navigate to any tour page
3. Click "Book Now" and fill out the form
4. Submit the form
5. Check info@wandersaga.in for the inquiry email

## Fallback Method

If EmailJS is not configured or fails, the system will automatically fall back to opening the user's default email client with a pre-filled email to info@wandersaga.in.

## Free Tier Limits

EmailJS free tier includes:

- 200 emails per month
- Basic email templates
- Standard support

For higher volume, consider upgrading to a paid plan.

## Troubleshooting

### Common Issues:

1. **Email not received**: Check spam folder, verify template configuration
2. **CORS errors**: Ensure your domain is added to EmailJS allowed origins
3. **Template errors**: Verify all template variables match the ones in the code

### Debug Mode:

The console will log success/failure messages. Check browser developer tools for error details.
