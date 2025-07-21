// Email templates with book publishing content
const emailTemplates = [
  {
    id: 'book-publishing-modern',
    name: 'Modern Book Publishing',
    subject: '📚 {{name}}, your book deserves a global audience!',
    template: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Book Publishing Service</title>
    <style>
        body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; }
        .book-icon { font-size: 48px; margin-bottom: 15px; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 18px; color: #374151; line-height: 1.6; margin-bottom: 30px; }
        .highlight-box { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center; }
        .highlight-text { color: #92400e; font-size: 20px; font-weight: 600; margin: 0; }
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
        .service-item { background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; border: 2px solid #e5e7eb; }
        .service-icon { font-size: 24px; margin-bottom: 10px; }
        .service-title { color: #374151; font-weight: 600; margin-bottom: 8px; }
        .service-desc { color: #6b7280; font-size: 14px; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 18px 35px; border-radius: 8px; font-weight: 600; margin: 30px 0; font-size: 16px; }
        .urgency-text { background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 20px; margin: 30px 0; }
        .urgency-text p { color: #dc2626; margin: 0; font-weight: 600; }
        .footer { background-color: #374151; color: #9ca3af; padding: 30px; text-align: center; font-size: 14px; }
        .unsubscribe { color: #6b7280; text-decoration: none; }
        .unsubscribe:hover { color: #374151; }
        @media (max-width: 600px) {
            .services-grid { grid-template-columns: 1fr; }
            .content { padding: 30px 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="book-icon">📚</div>
            <h1>Global Book Publishing</h1>
        </div>
        <div class="content">
            <p class="greeting">Hi {{name}},</p>
            
            <div class="highlight-box">
                <p class="highlight-text">
                    Imagine your book reaching a global audience, available on over 50 publishing platforms 
                    without you having to navigate the complex submission process for each one.
                </p>
            </div>
            
            <h3 style="color: #374151; margin: 30px 0 20px 0;">What's next?</h3>
            <p style="color: #374151; line-height: 1.7; margin-bottom: 30px;">
                Our global email marketing service is designed for authors like you. We handle the entire 
                distribution process, ensuring your book gets published on major platforms and niche sites, 
                reaching readers worldwide.
            </p>
            
            <div class="services-grid">
                <div class="service-item">
                    <div class="service-icon">✍️</div>
                    <div class="service-title">Formatting & Proofreading</div>
                    <div class="service-desc">Professional editing and formatting for all platforms</div>
                </div>
                <div class="service-item">
                    <div class="service-icon">🌍</div>
                    <div class="service-title">Global Publishing</div>
                    <div class="service-desc">Distribution to 50+ major publishing platforms</div>
                </div>
                <div class="service-item">
                    <div class="service-icon">📖</div>
                    <div class="service-title">ISBN Assistance</div>
                    <div class="service-desc">Complete ISBN setup and registration (if needed)</div>
                </div>
                <div class="service-item">
                    <div class="service-icon">🎨</div>
                    <div class="service-title">Book Cover Design</div>
                    <div class="service-desc">Professional cover design assistance (if needed)</div>
                </div>
            </div>
            
            <p style="color: #374151; line-height: 1.7; margin: 30px 0;">
                Let us take the hassle out of publishing so you can focus on what you do best—writing.
            </p>
            
            <div style="text-align: center;">
                <a href="https://your-publishing-service.com/get-started" class="cta-button">
                    Start Your Global Publishing Journey
                </a>
            </div>
            
            <div class="urgency-text">
                <p>Don't waste time, just do it!</p>
            </div>
        </div>
        <div class="footer">
            <p>© 2025 Global Book Publishing Service. Helping authors reach worldwide audiences.</p>
            <p>
                <a href="{{unsubscribe_url}}" class="unsubscribe">Unsubscribe</a> | 
                <a href="https://your-service.com/privacy" class="unsubscribe">Privacy Policy</a>
            </p>
        </div>
    </div>
</body>
</html>`
  },
  
  {
    id: 'book-publishing-creative',
    name: 'Creative Author Focus',
    subject: '🚀 {{name}}, turn your manuscript into a bestseller!',
    template: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Author Success Story</title>
    <style>
        body { margin: 0; padding: 0; font-family: Georgia, serif; background-color: #fef7ed; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 2px solid #f97316; }
        .header { background-color: #f97316; padding: 30px 20px; text-align: center; position: relative; }
        .header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #f59e0b, #ef4444, #8b5cf6, #06b6d4); }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: normal; letter-spacing: 2px; }
        .author-badge { background-color: #fbbf24; color: #92400e; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-top: 15px; display: inline-block; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 20px; color: #92400e; margin-bottom: 25px; font-style: italic; }
        .vision-box { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; }
        .vision-text { color: #92400e; font-size: 18px; font-weight: 600; margin: 0; line-height: 1.6; }
        .next-section { border-left: 4px solid #f97316; padding-left: 20px; margin: 30px 0; }
        .next-section h3 { color: #92400e; margin: 0 0 15px 0; font-size: 20px; }
        .next-section p { color: #451a03; line-height: 1.7; margin: 0; }
        .services-list { background-color: #fef7ed; padding: 25px; border-radius: 8px; margin: 30px 0; }
        .services-list h4 { color: #92400e; margin: 0 0 15px 0; }
        .services-list ul { margin: 0; padding-left: 20px; color: #451a03; }
        .services-list li { margin-bottom: 8px; }
        .cta-section { background-color: #451a03; color: #fbbf24; padding: 30px; border-radius: 8px; text-align: center; margin: 30px 0; }
        .cta-button { display: inline-block; background-color: #f97316; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 25px; font-weight: 600; margin-top: 15px; }
        .urgency { background-color: #fef2f2; border: 2px solid #fecaca; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0; }
        .urgency p { color: #dc2626; font-weight: 700; font-size: 18px; margin: 0; }
        .footer { background-color: #451a03; color: #fbbf24; padding: 25px; text-align: center; font-size: 13px; }
        .footer a { color: #fbbf24; text-decoration: none; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>AUTHOR SUCCESS STORY</h1>
            <div class="author-badge">Your Publishing Journey Starts Here</div>
        </div>
        <div class="content">
            <p class="greeting">Dear {{name}},</p>
            
            <div class="vision-box">
                <p class="vision-text">
                    Imagine your book reaching a global audience, available on over 50 publishing platforms 
                    without you having to navigate the complex submission process for each one.
                </p>
            </div>
            
            <div class="next-section">
                <h3>What's next?</h3>
                <p>
                    Our global email marketing service is designed for authors like you. We handle the entire 
                    distribution process, ensuring your book gets published on major platforms and niche sites, 
                    reaching readers worldwide.
                </p>
            </div>
            
            <div class="services-list">
                <h4>🎯 Complete Publishing Solution:</h4>
                <ul>
                    <li><strong>Formatting & Proofreading</strong> - Professional editing for all platforms</li>
                    <li><strong>Global Publishing</strong> - Distribution to 50+ major platforms</li>
                    <li><strong>ISBN Assistance</strong> - Complete setup and registration (if needed)</li>
                    <li><strong>Book Cover Assistance</strong> - Professional design support (if needed)</li>
                </ul>
            </div>
            
            <p style="color: #451a03; line-height: 1.7; margin: 30px 0; font-style: italic;">
                Let us take the hassle out of publishing so you can focus on what you do best—writing.
            </p>
            
            <div class="cta-section">
                <h3 style="margin: 0 0 15px 0;">Ready to become a published author?</h3>
                <a href="https://your-publishing-service.com/author-signup" class="cta-button">
                    Start My Publishing Journey
                </a>
            </div>
            
            <div class="urgency">
                <p>Don't waste time, just do it!</p>
            </div>
        </div>
        <div class="footer">
            <p>© 2025 Global Book Publishing Service. Empowering authors worldwide.</p>
            <p>
                <a href="{{unsubscribe_url}}">Unsubscribe</a> | 
                <a href="https://your-service.com/privacy">Privacy Policy</a>
            </p>
        </div>
    </div>
</body>
</html>`
  },
  
  {
    id: 'book-publishing-professional',
    name: 'Professional Publisher',
    subject: '📖 {{name}}, your manuscript is ready for the world!',
    template: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Book Publishing</title>
    <style>
        body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f9ff; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 30px 20px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 26px; font-weight: 600; }
        .publisher-badge { background-color: #fbbf24; color: #92400e; padding: 6px 12px; border-radius: 15px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-top: 10px; display: inline-block; }
        .content { padding: 35px 30px; }
        .greeting { color: #0f172a; font-size: 18px; margin-bottom: 25px; }
        .vision-container { background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 25px; margin: 25px 0; border-radius: 0 8px 8px 0; }
        .vision-title { color: #0c4a6e; font-size: 20px; font-weight: 600; margin: 0 0 15px 0; }
        .vision-content { color: #374151; line-height: 1.7; margin-bottom: 20px; }
        .next-steps { background-color: #ecfdf5; border: 1px solid #d1fae5; padding: 20px; border-radius: 8px; margin: 25px 0; }
        .next-title { color: #065f46; font-weight: 600; margin: 0 0 15px 0; font-size: 18px; }
        .next-content { color: #374151; font-size: 15px; line-height: 1.6; }
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 25px 0; }
        .service-card { background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; text-align: center; }
        .service-icon { font-size: 24px; margin-bottom: 10px; }
        .service-title { color: #374151; font-weight: 600; margin-bottom: 8px; font-size: 14px; }
        .service-desc { color: #64748b; font-size: 12px; }
        .focus-message { background-color: #fffbeb; border: 1px solid #fed7aa; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center; }
        .focus-message p { color: #92400e; margin: 0; font-weight: 600; }
        .cta-section { text-align: center; margin: 35px 0; }
        .cta-button { display: inline-block; background-color: #0ea5e9; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 6px; font-weight: 600; font-size: 16px; }
        .urgency-banner { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: #ffffff; padding: 20px; text-align: center; margin: 30px 0; border-radius: 8px; }
        .urgency-banner p { margin: 0; font-weight: 700; font-size: 16px; }
        .footer { background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 25px; text-align: center; color: #64748b; font-size: 14px; }
        .footer a { color: #0ea5e9; text-decoration: none; }
        @media (max-width: 600px) {
            .services-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📖 Professional Book Publishing</h1>
            <div class="publisher-badge">Global Distribution Network</div>
        </div>
        <div class="content">
            <p class="greeting">Hello {{name}},</p>
            
            <div class="vision-container">
                <h2 class="vision-title">Your Global Publishing Vision</h2>
                <div class="vision-content">
                    Imagine your book reaching a global audience, available on over 50 publishing platforms 
                    without you having to navigate the complex submission process for each one.
                </div>
            </div>
            
            <div class="next-steps">
                <div class="next-title">What's next?</div>
                <div class="next-content">
                    Our global email marketing service is designed for authors like you. We handle the entire 
                    distribution process, ensuring your book gets published on major platforms and niche sites, 
                    reaching readers worldwide.
                </div>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">✍️</div>
                    <div class="service-title">Formatting & Proofreading</div>
                    <div class="service-desc">Professional editing and formatting for all platforms</div>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌍</div>
                    <div class="service-title">Global Publishing</div>
                    <div class="service-desc">Distribution to 50+ major publishing platforms</div>
                </div>
                <div class="service-card">
                    <div class="service-icon">📚</div>
                    <div class="service-title">ISBN Assistance</div>
                    <div class="service-desc">Complete ISBN setup and registration (if needed)</div>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎨</div>
                    <div class="service-title">Book Cover Assistance</div>
                    <div class="service-desc">Professional cover design support (if needed)</div>
                </div>
            </div>
            
            <div class="focus-message">
                <p>Let us take the hassle out of publishing so you can focus on what you do best—writing.</p>
            </div>
            
            <div class="cta-section">
                <a href="https://your-publishing-service.com/professional-package" class="cta-button">
                    Get Professional Publishing Package
                </a>
            </div>
            
            <div class="urgency-banner">
                <p>Don't waste time, just do it!</p>
            </div>
        </div>
        <div class="footer">
            <p>© 2025 Global Book Publishing Service. Professional publishing solutions for authors.</p>
            <p>
                <a href="{{unsubscribe_url}}">Unsubscribe</a> | 
                <a href="https://your-service.com/privacy">Privacy Policy</a>
            </p>
        </div>
    </div>
</body>
</html>`
  },
  
  {
    id: 'book-publishing-success',
    name: 'Author Success Story',
    subject: '🏆 {{name}}, join thousands of successful published authors!',
    template: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Author Success Story</title>
    <style>
        body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a; color: #ffffff; }
        .container { max-width: 600px; margin: 0 auto; background-color: #1e293b; }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); padding: 40px 20px; text-align: center; position: relative; overflow: hidden; }
        .header::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); animation: pulse 4s ease-in-out infinite; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 0.8; } }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.3); position: relative; z-index: 1; }
        .success-badge { background-color: #fbbf24; color: #92400e; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-top: 15px; display: inline-block; }
        .content { padding: 40px 30px; }
        .greeting { color: #e2e8f0; font-size: 18px; margin-bottom: 30px; }
        .vision-highlight { background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; }
        .vision-highlight h2 { color: #ffffff; margin: 0 0 15px 0; font-size: 22px; }
        .vision-highlight p { color: #e2e8f0; margin: 0; font-size: 16px; line-height: 1.6; }
        .next-section { background-color: #334155; padding: 25px; border-radius: 8px; margin: 30px 0; }
        .next-section h3 { color: #f1f5f9; margin: 0 0 15px 0; font-size: 18px; }
        .next-section p { color: #cbd5e1; margin: 0; line-height: 1.7; }
        .services-showcase { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
        .service-highlight { background-color: #0f172a; border: 2px solid #3b82f6; padding: 20px; border-radius: 8px; text-align: center; }
        .service-highlight .icon { font-size: 28px; margin-bottom: 10px; }
        .service-highlight .title { color: #f1f5f9; font-weight: 600; margin-bottom: 8px; }
        .service-highlight .desc { color: #94a3b8; font-size: 14px; }
        .focus-banner { background-color: #065f46; border: 2px solid #10b981; padding: 25px; border-radius: 8px; text-align: center; margin: 30px 0; }
        .focus-banner p { color: #d1fae5; margin: 0; font-weight: 600; font-size: 16px; }
        .cta-container { text-align: center; margin: 40px 0; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; padding: 18px 40px; border-radius: 30px; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3); }
        .urgency-alert { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 25px; border-radius: 8px; text-align: center; margin: 30px 0; }
        .urgency-alert p { color: #ffffff; margin: 0; font-weight: 700; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; }
        .footer { background-color: #0f172a; padding: 30px; text-align: center; border-top: 1px solid #334155; }
        .footer p { color: #64748b; margin: 5px 0; font-size: 14px; }
        .footer a { color: #3b82f6; text-decoration: none; }
        @media (max-width: 600px) {
            .services-showcase { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏆 AUTHOR SUCCESS STORY</h1>
            <div class="success-badge">Join Thousands of Published Authors</div>
        </div>
        <div class="content">
            <p class="greeting">Congratulations {{name}},</p>
            
            <div class="vision-highlight">
                <h2>Your Publishing Dream Awaits</h2>
                <p>
                    Imagine your book reaching a global audience, available on over 50 publishing platforms 
                    without you having to navigate the complex submission process for each one.
                </p>
            </div>
            
            <div class="next-section">
                <h3>What's next?</h3>
                <p>
                    Our global email marketing service is designed for authors like you. We handle the entire 
                    distribution process, ensuring your book gets published on major platforms and niche sites, 
                    reaching readers worldwide.
                </p>
            </div>
            
            <div class="services-showcase">
                <div class="service-highlight">
                    <div class="icon">✍️</div>
                    <div class="title">Formatting & Proofreading</div>
                    <div class="desc">Professional editing for all platforms</div>
                </div>
                <div class="service-highlight">
                    <div class="icon">🌍</div>
                    <div class="title">Global Publishing</div>
                    <div class="desc">50+ major publishing platforms</div>
                </div>
                <div class="service-highlight">
                    <div class="icon">📚</div>
                    <div class="title">ISBN Assistance</div>
                    <div class="desc">Complete setup (if needed)</div>
                </div>
                <div class="service-highlight">
                    <div class="icon">🎨</div>
                    <div class="title">Book Cover Assistance</div>
                    <div class="desc">Professional design (if needed)</div>
                </div>
            </div>
            
            <div class="focus-banner">
                <p>Let us take the hassle out of publishing so you can focus on what you do best—writing.</p>
            </div>
            
            <div class="cta-container">
                <a href="https://your-publishing-service.com/success-package" class="cta-button">
                    Join Successful Authors Today
                </a>
            </div>
            
            <div class="urgency-alert">
                <p>Don't waste time, just do it!</p>
            </div>
        </div>
        <div class="footer">
            <p>© 2025 Global Book Publishing Service. Empowering authors to reach global audiences.</p>
            <p>
                <a href="{{unsubscribe_url}}">Unsubscribe</a> | 
                <a href="https://your-service.com/privacy">Privacy Policy</a>
            </p>
        </div>
    </div>
</body>
</html>`
  }
];

// Function to get a random template
function getRandomTemplate() {
  const randomIndex = Math.floor(Math.random() * emailTemplates.length);
  return emailTemplates[randomIndex];
}

// Function to personalize template content
function personalizeTemplate(template, userData) {
  const { name, email } = userData;
  
  // Generate unsubscribe URL
  const unsubscribeUrl = `${process.env.URL || 'https://your-site.netlify.app'}/.netlify/functions/unsubscribe?email=${encodeURIComponent(email)}&token=${generateUnsubscribeToken(email)}`;
  
  // Replace placeholders in subject and template
  const personalizedSubject = template.subject
    .replace(/\{\{name\}\}/g, name)
    .replace(/\{\{email\}\}/g, email);
    
  const personalizedTemplate = template.template
    .replace(/\{\{name\}\}/g, name)
    .replace(/\{\{email\}\}/g, email)
    .replace(/\{\{unsubscribe_url\}\}/g, unsubscribeUrl);
  
  return {
    ...template,
    subject: personalizedSubject,
    template: personalizedTemplate,
    unsubscribeUrl
  };
}

// Simple token generation for unsubscribe
function generateUnsubscribeToken(email) {
  const secret = process.env.UNSUBSCRIBE_SECRET || 'your-secret-key';
  const crypto = require('crypto');
  return crypto.createHmac('sha256', secret).update(email).digest('hex').substring(0, 16);
}

module.exports = {
  emailTemplates,
  getRandomTemplate,
  personalizeTemplate,
  generateUnsubscribeToken
};