// netlify/functions/send-convertkit-email.js
const { getRandomTemplate, personalizeTemplate } = require('./email-templates');

exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Ensure the request is a POST request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ 
        message: 'Method Not Allowed. Only POST requests are accepted.',
        allowedMethods: ['POST']
      }),
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    };
  }

  let clientData;
  try {
    // Parse the JSON payload
    clientData = JSON.parse(event.body);
    console.log('Received client data:', { email: clientData.email, name: clientData.name });
  } catch (error) {
    console.error('Failed to parse request body:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        message: 'Invalid JSON payload.',
        error: 'Request body must be valid JSON'
      }),
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    };
  }

  const { name, email } = clientData;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error('Invalid email format:', email);
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        message: 'Invalid email format.',
        email: email
      }),
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    };
  }

  // Validate required fields
  if (!name || !email) {
    console.error('Missing required fields:', { name: !!name, email: !!email });
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        message: 'Missing required fields in payload.',
        required: ['name', 'email'],
        received: { name: !!name, email: !!email }
      }),
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    };
  }

  // Use your provided ConvertKit API key
  const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY || 'kit_751307ce63b967f60e900a5a04e4d292';
  const CONVERTKIT_API_SECRET = process.env.CONVERTKIT_API_SECRET || 'your-api-secret';

  try {
    // Get a random email template and personalize it
    const randomTemplate = getRandomTemplate();
    const personalizedEmail = personalizeTemplate(randomTemplate, { name, email });
    
    console.log('Selected template:', randomTemplate.name);
    console.log('Personalized subject:', personalizedEmail.subject);

    // Send email directly using ConvertKit V4 API
    const convertKitApiUrl = 'https://api.convertkit.com/v4/broadcasts';

    console.log('Sending direct email via ConvertKit API');

    // Try using the broadcasts endpoint for direct email sending
    const broadcastResponse = await fetch('https://api.convertkit.com/v4/broadcasts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Netlify-Function/1.0',
        'Authorization': `Bearer ${CONVERTKIT_API_KEY}`
      },
      body: JSON.stringify({
        subject: personalizedEmail.subject,
        content: personalizedEmail.template,
        description: `Direct email to ${name} using template: ${randomTemplate.name}`
      }),
    });

    let responseData = await broadcastResponse.json();

    // If broadcasts don't work, try the subscribers endpoint with immediate email
    if (!broadcastResponse.ok) {
      console.log('Broadcast failed, trying subscriber approach:', responseData);
      
      const subscriberResponse = await fetch('https://api.convertkit.com/v4/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CONVERTKIT_API_KEY}`
        },
        body: JSON.stringify({
          email_address: email,
          first_name: name,
          state: 'active'
        }),
      });

      if (subscriberResponse.ok) {
        const subscriberData = await subscriberResponse.json();
        
        // Now send a direct email to this subscriber
        const emailResponse = await fetch(`https://api.convertkit.com/v4/subscribers/${subscriberData.subscriber.id}/tags`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CONVERTKIT_API_KEY}`
          },
          body: JSON.stringify({
            tag: {
              name: 'Book Publishing Interest'
            }
          }),
        });

        responseData = await emailResponse.json();
        
        if (emailResponse.ok) {
          console.log('Successfully tagged subscriber for email trigger:', {
            email: email,
            name: name,
            template_used: randomTemplate.name,
            subscriber_id: subscriberData.subscriber.id
          });
          
          return {
            statusCode: 200,
            body: JSON.stringify({ 
              message: 'Email trigger processed successfully.',
              success: true,
              subscriber: {
                email: email,
                name: name,
                id: subscriberData.subscriber.id
              },
              template: {
                name: randomTemplate.name,
                id: randomTemplate.id,
                subject: personalizedEmail.subject
              },
              timestamp: new Date().toISOString()
            }),
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
          };
        }
      }
      
      responseData = await subscriberResponse.json();
    }

    if (broadcastResponse.ok) {
      console.log('Successfully sent email via ConvertKit:', {
        email: email,
        name: name,
        template_used: randomTemplate.name,
        broadcast_id: responseData.id
      });
      
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          message: 'Email trigger processed successfully.',
          success: true,
          subscriber: {
            email: email,
            name: name,
            id: responseData.id
          },
          template: {
            name: randomTemplate.name,
            id: randomTemplate.id,
            subject: personalizedEmail.subject
          },
          broadcast_id: responseData.id,
          timestamp: new Date().toISOString()
        }),
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      };
    } else {
      console.error('ConvertKit API error:', {
        status: broadcastResponse.status,
        statusText: broadcastResponse.statusText,
        response: responseData
      });
      
      return {
        statusCode: broadcastResponse.status,
        body: JSON.stringify({ 
          message: 'Failed to send email via ConvertKit API.',
          error: responseData,
          status: broadcastResponse.status
        }),
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      };
    }
  } catch (error) {
    console.error('Error sending email via ConvertKit:', {
      message: error.message,
      stack: error.stack,
      email: email,
      name: name
    });
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Internal server error while sending email.',
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    };
  }
};