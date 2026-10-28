import { siteConfig } from "../config/siteConfig";

export const buildWhatsAppUrl = (message, number = siteConfig.whatsappNumber) =>
  `https://wa.me/+94789589477?text=${encodeURIComponent(message)}`;

// Must be called directly from a user click/submit handler.
// Returns the URL and whether the popup appears to have been blocked.
export const openWhatsApp = (message) => {
  const url = buildWhatsAppUrl(message);
  const popup = window.open(url, "_blank");
  if (popup) {
    try {
      popup.opener = null;
    } catch {
      /* ignore cross-origin errors */
    }
  }
  return { url, blocked: !popup };
};
