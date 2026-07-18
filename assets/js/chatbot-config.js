/**
 * ChatBot Configuration File
 * Customize settings for different websites
 */

window.ChatbotConfig = {
  // ============== API Configuration ==============
  apiEndpoint: 'https://akshamrit.com/webaiinterface/ed5556df103dc522d7e129e1/root',
  apiKey: '02003f4ed5a9f356fa3bd6da805a83b6a3cd93d266508738556e27c801dacf13',
  
  // ============== Request Format Configuration ==============
  requestFormat: {
    object: 'ArtGlobal LLM Request',
    entry: {
      id: null, // Auto-generated if not provided
      value: {
        messaging_product: 'FromWebsite',
        metadata: {
          unique_chat_id: null, // Auto-generated if not provided
          chat_description: 'Initiated from Art Global Website'
        },
        messages: {
          type: 'text'
          // timestamp and body are added by chatbot.js
        }
      }
    }
  },
  
  // ============== UI Configuration ==============
  theme: {
    primaryColor: '#2c6804',      // Green (ART Global brand color)
    secondaryColor: '#f3f3f3',    // Light gray
    userBgColor: '#2c6804',       // User message background
    aiBgColor: '#ffffff',         // AI message background
    botName: 'ART Assistant',
    icon: '💬'
  },
  
  // ============== Behavior Configuration ==============
  maxRetries: 3,
  timeout: 20000,                 // 20 seconds
  checkHealthInterval: 30000,     // 30 seconds
  rateLimit: {
    maxMessages: 10,
    windowMs: 60000               // 1 minute window
  },
  
  // ============== Feature Flags ==============
  features: {
    saveHistory: true,
    showTypingIndicator: true,
    enableAutoRetry: true,
    enableHealthCheck: true,
    showTimestamps: false
  },
  
  // ============== Customizable Messages ==============
  messages: {
    // UI Messages
    placeholder: 'Type your message...',
    send: 'Send',
    close: '✕',
    title: 'ART Global Support',
    
    // Error/Status Messages
    offline: '⚠️ Our support team is temporarily unavailable. Please try again in a moment.',
    error: '😞 Something went wrong. Please try again.',
    timeout: '⏱️ Response took too long. Please try again.',
    rateLimitExceeded: '⏱️ Too many messages. Please wait a moment.',
    typing: 'AI is typing...',
    
    // Context-specific Fallbacks
    fallbacks: {
      product: 'For product information, please visit our Services page or contact us directly.',
      support: 'We apologize for the disruption. Please email us at info@artglobalexports.com',
      greeting: 'Hello! I\'m temporarily unavailable. Our team is here to help.',
      general: 'Thank you for reaching out. Our team is working on serving you better.'
    }
  },
  
  // ============== Contact Information ==============
  contactInfo: {
    email: 'info@artglobalexports.com',
    phone: '+91 6362992358 / +91 7763807490',
    address: '20 Ujjwainee Gorakshabasi Road, Kolkata West Bengal - 700028'
  },
  
  // ============== CORS & Security ==============
  allowedOrigins: [
    'artglobalexports.github.io',
    'www.artglobalexports.com',
    'localhost:3000'
  ],
  
  // ============== Position & Size ==============
  position: {
    bottom: '20px',
    right: '20px',
    width: '350px',
    height: '500px',
    iconSize: '60px'
  },
  
  // ============== Animation ==============
  animation: {
    duration: '300ms',
    easing: 'ease-in-out'
  }
};
