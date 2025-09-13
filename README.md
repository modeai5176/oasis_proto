# Oasis & Mirage - Intergenerational Community Platform

A Next.js application for a nonprofit organization focused on building bridges between generations through shared stories, grassroots leadership, and authentic connection.

## Features

- **5 Main Pages**: Home, About & Vision, Communities, Projects & Events, Contribute/Donate
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Accessibility**: WCAG 2.2 AA compliant with proper focus management and keyboard navigation
- **Payment Integration**: M-Pesa STK Push, PayPal, and GoFundMe support
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Typography**: Fraunces (display) and Inter (body)
- **Language**: TypeScript

## Design System

### Colors (Desert/Oasis Theme)
- **Sand tones**: Light backgrounds and neutral elements
- **Oasis tones**: Primary brand colors (teal/green)
- **Date accent**: Warm desert accent for buttons and highlights
- **High contrast**: WCAG AA compliant color combinations

### Typography
- **Display**: Fraunces variable font for headings
- **Body**: Inter variable font for UI and content
- **Hierarchy**: Clear size and weight progression

## Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open in browser**: Navigate to `http://localhost:3000`

## Payment Integration Setup

### M-Pesa (Daraja API)
To enable M-Pesa payments, add these environment variables:

\`\`\`env
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=your_callback_url
\`\`\`

### PayPal
Replace the placeholder in `/src/app/(site)/contribute/page.tsx` with actual PayPal button code:

\`\`\`html
<!-- Replace the placeholder div with PayPal button script -->
<div id="paypal-button-container"></div>
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
\`\`\`

### GoFundMe
Replace the placeholder with GoFundMe embed code:

\`\`\`html
<!-- Replace the placeholder div with GoFundMe embed -->
<iframe src="https://www.gofundme.com/f/your-campaign/widget/large" width="100%" height="400"></iframe>
\`\`\`

## Content Management

Content is stored in JSON files in the `/content` directory:
- `home.json` - Homepage content
- `about.json` - About page content
- `communities.json` - Communities data
- `projects.json` - Projects and events
- `contribute.json` - Donation page content

## API Routes

- `/api/contact` - Contact form submission
- `/api/newsletter` - Newsletter subscription
- `/api/payments/mpesa` - M-Pesa STK Push integration

## Deployment

The application is optimized for deployment on Vercel:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Add environment variables** for payment integrations
4. **Deploy**

## Accessibility Features

- Skip to content link
- Keyboard navigation support
- ARIA labels and roles
- High contrast color scheme
- Focus indicators
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test accessibility and responsiveness
5. Submit a pull request

## License

This project is licensed under the MIT License.
