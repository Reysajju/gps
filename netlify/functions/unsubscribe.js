// netlify/functions/unsubscribe.js
const { generateUnsubscribeToken } = require('./email-templates');

exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
      body: '',
    };
  }

  const { email, token, confirm } = event.queryStringParameters || {};

  if (!email || !token) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
      },
      body: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invalid Unsubscribe Link</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; text-align: center; }
        .error { color: #dc2626; background-color: #fef2f2; padding: 20px; border-radius: 8px; border: 1px solid #fecaca; }
    </style>
</head>
<body>
    <div class="error">
        <h2>Invalid Unsubscribe Link</h2>
        <p>This unsubscribe link is invalid or has expired. Please contact support if you continue to receive emails.</p>
    </div>
</body>
</html>`
    };
  }

  // Verify the token
  const expectedToken = generateUnsubscribeToken(email);
  if (token !== expectedToken) {
    return {
      statusCode: 403,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
      },
      body: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invalid Token</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; text-align: center; }
        .error { color: #dc2626; background-color: #fef2f2; padding: 20px; border-radius: 8px; border: 1px solid #fecaca; }
    </style>
</head>
<body>
    <div class="error">
        <h2>Security Error</h2>
        <p>This unsubscribe link appears to be tampered with. Please contact support for assistance.</p>
    </div>
</body>
</html>`
    };
  }

  // If confirm=true, process the unsubscription
  if (confirm === 'true') {
    try {
      // Get ConvertKit credentials
      const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
      const CONVERTKIT_API_SECRET = process.env.CONVERTKIT_API_SECRET;

      if (!CONVERTKIT_API_KEY || !CONVERTKIT_API_SECRET) {
        throw new Error('ConvertKit API credentials not configured');
      }

      // First, find the subscriber by email
      const searchResponse = await fetch(`https://api.convertkit.com/v4/subscribers?api_key=${CONVERTKIT_API_KEY}&api_secret=${CONVERTKIT_API_SECRET}&email_address=${encodeURIComponent(email)}`);
      
      if (!searchResponse.ok) {
        throw new Error('Failed to find subscriber');
      }

      const searchData = await searchResponse.json();
      
      if (!searchData.subscribers || searchData.subscribers.length === 0) {
        // Subscriber not found, but we'll show success to avoid revealing this information
        console.log('Subscriber not found for unsubscribe:', email);
      } else {
        // Unsubscribe the subscriber
        const subscriberId = searchData.subscribers[0].id;
        const unsubscribeResponse = await fetch(`https://api.convertkit.com/v4/subscribers/${subscriberId}/unsubscribe`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            api_secret: CONVERTKIT_API_SECRET
          })
        });

        if (!unsubscribeResponse.ok) {
          throw new Error('Failed to unsubscribe');
        }

        console.log('Successfully unsubscribed:', email);
      }

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*'
        },
        body: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Successfully Unsubscribed</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; text-align: center; background-color: #f8fafc; }
        .container { background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .success { color: #059669; background-color: #ecfdf5; padding: 20px; border-radius: 8px; border: 1px solid #d1fae5; margin-bottom: 30px; }
        .feedback { background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 30px; }
        .feedback textarea { width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; font-family: inherit; }
        .feedback button { background-color: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; margin-top: 10px; }
        .feedback button:hover { background-color: #2563eb; }
    </style>
</head>
<body>
    <div class="container">
        <div class="success">
            <h2>✅ You've been unsubscribed</h2>
            <p>We've successfully removed <strong>${email}</strong> from our mailing list.</p>
            <p>You will no longer receive emails from EmailCraft.</p>
        </div>
        
        <p>We're sorry to see you go! If you change your mind, you can always subscribe again on our website.</p>
        
        <div class="feedback">
            <h3>Help us improve (optional)</h3>
            <p>What could we have done better?</p>
            <textarea placeholder="Your feedback helps us create better content..." rows="3"></textarea>
            <br>
            <button onclick="submitFeedback()">Send Feedback</button>
        </div>
        
        <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            If you continue to receive emails, please contact our support team.
        </p>
    </div>
    
    <script>
        function submitFeedback() {
            const textarea = document.querySelector('textarea');
            const button = document.querySelector('button');
            
            if (textarea.value.trim()) {
                // In a real implementation, you'd send this to your feedback endpoint
                button.textContent = 'Thank you!';
                button.disabled = true;
                textarea.disabled = true;
            }
        }
    </script>
</body>
</html>`
      };

    } catch (error) {
      console.error('Error processing unsubscribe:', error);
      
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*'
        },
        body: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unsubscribe Error</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; text-align: center; }
        .error { color: #dc2626; background-color: #fef2f2; padding: 20px; border-radius: 8px; border: 1px solid #fecaca; }
    </style>
</head>
<body>
    <div class="error">
        <h2>Oops! Something went wrong</h2>
        <p>We encountered an error while processing your unsubscribe request. Please try again later or contact our support team.</p>
    </div>
</body>
</html>`
      };
    }
  }

  // Show confirmation page
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*'
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm Unsubscribe</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; text-align: center; background-color: #f8fafc; }
        .container { background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .warning { color: #d97706; background-color: #fffbeb; padding: 20px; border-radius: 8px; border: 1px solid #fed7aa; margin-bottom: 30px; }
        .buttons { margin-top: 30px; }
        .btn { display: inline-block; padding: 12px 24px; margin: 0 10px; text-decoration: none; border-radius: 6px; font-weight: 600; }
        .btn-danger { background-color: #dc2626; color: white; }
        .btn-secondary { background-color: #6b7280; color: white; }
        .btn:hover { opacity: 0.9; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Confirm Unsubscribe</h2>
        
        <div class="warning">
            <p><strong>Are you sure you want to unsubscribe?</strong></p>
            <p>You'll no longer receive our premium email templates, design tips, and exclusive resources.</p>
        </div>
        
        <p>Email: <strong>${email}</strong></p>
        
        <div class="buttons">
            <a href="?email=${encodeURIComponent(email)}&token=${token}&confirm=true" class="btn btn-danger">
                Yes, Unsubscribe Me
            </a>
            <a href="https://emailcraft.com" class="btn btn-secondary">
                No, Keep Me Subscribed
            </a>
        </div>
        
        <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            You can always resubscribe later if you change your mind.
        </p>
    </div>
</body>
</html>`
  };
};