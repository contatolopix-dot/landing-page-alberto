/**
 * Handles WhatsApp redirection with standard tracking for Meta Pixel and Gtag.
 * Ensure base tracking scripts are available in index.html, else mock.
 */
export const openWhatsApp = (url) => {
  try {
    if (typeof window !== 'undefined') {
      // Trigger Meta Pixel Contact event
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact');
      }

      // Trigger Google Analytics generate_lead event
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead');
      }
      
      // Open WhatsApp in new tab
      window.open(url, '_blank');
    }
  } catch (err) {
    console.error('Tracking Error:', err);
    // Fallback to ensuring link opens safely
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }
};
