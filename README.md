# Global Book Publishing - Direct Email Service

A complete book publishing service with beautiful UI, multiple email templates, and direct ConvertKit email sending.

## 🚀 Features

- **Beautiful Publishing UI**: Modern, responsive signup form for publishing inquiries
- **Multiple Email Templates**: 4 premium HTML email templates with book publishing content
- **Personalization System**: Dynamic content replacement with user data
- **Direct Email Sending**: Sends emails directly without adding to subscriber lists
- **ConvertKit Integration**: Uses ConvertKit V4 API for reliable email delivery
- **Production Ready**: Built with security, accessibility, and performance best practices

## 📋 Setup Instructions

### 1. Deploy to Netlify

1. **Connect Repository**: Link this repository to your Netlify account  
2. **Auto-Deploy**: Netlify will automatically build the React app and deploy functions
3. **Get URLs**: After deployment, your platform will be available at:
   ```
   Main Site: https://your-site-name.netlify.app
   API: https://your-site-name.netlify.app/.netlify/functions/send-convertkit-email
   Unsubscribe: https://your-site-name.netlify.app/.netlify/functions/unsubscribe
   ```

### 2. Configure Environment Variables

In your Netlify site settings, go to **Site settings** → **Build & deploy** → **Environment variables** and add:

| Variable | Description | Where to Find |
|----------|-------------|---------------|
| `CONVERTKIT_API_SECRET` | Your ConvertKit API Secret | ConvertKit Account → Account Info → API |
| `UNSUBSCRIBE_SECRET` | Secret key for unsubscribe tokens | Generate a random string |

**Note**: The ConvertKit API Key is already configured in the code: `kit_751307ce63b967f60e900a5a04e4d292`
### 3. Platform Components

#### Publishing Inquiry UI
- Modern React-based signup form for publishing services
- Real-time validation and user feedback  
- Success animations and error handling
- Mobile-responsive design

#### Email Template System
- **Modern Book Publishing**: Clean gradient design with publishing services overview
- **Creative Author Focus**: Artistic layout emphasizing author success
- **Professional Publisher**: Professional layout with comprehensive service details
- **Author Success Story**: High-energy design with success stories and testimonials

#### Unsubscribe System
- Secure token-based unsubscribe links in all emails
- Confirmation page to prevent accidental unsubscribes
- Feedback collection for improvement insights
- Professional unsubscribe handling

## 🔧 API Reference

### Endpoint
```
POST /.netlify/functions/send-convertkit-email
GET /.netlify/functions/unsubscribe?email=...&token=...
```

### Request Headers
```
Content-Type: application/json
```

### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Response Examples

**Success (200)**
```json
{
  "message": "Email sent successfully to your inbox!",
  "success": true,
  "recipient": {
    "email": "john@example.com",
    "name": "John Doe"
  },
  "template": {
    "name": "Modern Book Publishing",
    "id": "book-publishing-modern", 
    "subject": "📚 John, your book deserves a global audience!"
  },
  "broadcast_id": "broadcast_12345",
  "timestamp": "2025-01-27T10:30:00.000Z"
}
```

**Error (400)**
```json
{
  "message": "Invalid email format.",
  "email": "invalid-email"
}
```

**Server Error (500)**
```json
{
  "message": "Internal server error while sending email.",
  "error": "Network timeout",
  "timestamp": "2025-01-27T10:30:00.000Z"
}
```

## 🎨 Email Templates

### Template Structure
Each template includes:
- Responsive HTML design with book publishing content
- Personalization placeholders (`{{name}}`, `{{email}}`)
- Automatic unsubscribe link generation
- Mobile-optimized layouts
- Professional book publishing messaging

### Template Selection
- Random template selection for each email request
- Template information logged for tracking
- Subject line personalization
- Consistent book publishing branding across all templates

## 🔍 Testing

### Test Publishing Inquiry
1. Visit your deployed site
2. Fill out the publishing inquiry form
3. Check your email inbox for the publishing information
4. Verify email template was delivered

### Test API Directly
```bash
curl -X POST https://your-site-name.netlify.app/.netlify/functions/send-convertkit-email \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User", "email": "test@example.com"}'
```

### Test Unsubscribe
1. Get unsubscribe link from any sent email
2. Click link to access confirmation page
3. Confirm unsubscription

### Monitor Logs
1. Go to your Netlify site dashboard
2. Navigate to **Functions** → **send-convertkit-email**
3. View real-time logs and invocation history

## 🛡️ Security Features

- **Environment Variables**: API secret stored securely
- **Input Validation**: Email format and required field validation  
- **Token-Based Unsubscribe**: Cryptographically secure unsubscribe tokens
- **Error Handling**: Graceful error responses without data exposure
- **CORS Protection**: Proper cross-origin request handling

## 🔄 ConvertKit Integration

The platform uses ConvertKit V4 API to:
- Send direct emails without adding to subscriber lists
- Use professional email templates with book publishing content
- Provide reliable email delivery
- Handle unsubscribe requests professionally
- Track email sending for analytics

## 🎯 Customization

### Adding New Templates
1. Add template object to `netlify/functions/email-templates.js`
2. Include HTML with book publishing content, subject line, and metadata
3. Templates are automatically available for random selection

### Styling the UI
1. Modify `src/App.tsx` for layout changes
2. Update Tailwind classes for styling
3. Add new components as needed


## 📊 Monitoring

Monitor your function performance in Netlify:
- **Site Analytics**: Visitor and conversion tracking
- **Function Metrics**: API call volume and performance
- **Error Monitoring**: Failed requests and error patterns
- **Template Performance**: Which templates perform best

## 🆘 Troubleshooting

### Common Issues

1. **Environment Variables Not Set**
   - Verify API secret is configured in Netlify
   - Check for typos in variable names

2. **ConvertKit API Errors**
   - Verify API credentials are correct
   - Check API secret is valid
   - Ensure broadcast API permissions

3. **UI Not Loading**
   - Check if React build completed successfully
   - Verify `dist` folder is being published
   - Check browser console for JavaScript errors

4. **Unsubscribe Not Working**
   - Verify `UNSUBSCRIBE_SECRET` is set
   - Check token generation and validation

### Debug Steps

1. Check Netlify build and function logs
2. Verify all environment variables are set
3. Test publishing inquiry flow end-to-end
4. Check email delivery in recipient inbox
5. Test unsubscribe flow with generated links
6. Monitor browser console for client-side errors

## 🚀 Deployment

### Automatic Deployment
1. Push changes to your connected Git repository
2. Netlify automatically builds and deploys
3. Functions are deployed alongside the React app
4. Environment variables persist across deployments

### Manual Deployment
```bash
# Build locally
npm run build

# Deploy via Netlify CLI
netlify deploy --prod
```

## 📝 License

MIT License - feel free to use and modify as needed.