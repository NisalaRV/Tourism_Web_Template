import { MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function WhatsAppButton({
  variant = "inline", // "inline" | "floating"
  label = "Book on WhatsApp",
  message = `Hello ${siteConfig.businessName}, I would like to make an enquiry.`,
  className = "",
}) {
  const href = buildWhatsAppUrl(message);

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-gold text-deep shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-110"
      >
        <span
          className="absolute inset-0 rounded-full bg-gold/40 motion-safe:animate-ping"
          aria-hidden="true"
        />
        <MessageCircle className="relative" size={26} aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-soft via-gold to-[#b8975a] px-6 py-3 text-sm font-semibold tracking-wide text-deep shadow-[0_12px_30px_-12px_rgba(214,183,121,0.8)] transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </a>
  );
}
