import { Link } from "react-router-dom";
import { ArrowUp, Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import Logo from "./Logo";

const socials = [
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "facebook", label: "Facebook", icon: Facebook },
  { key: "youtube", label: "YouTube", icon: Youtube },
];

export default function Footer() {
  const waHref = buildWhatsAppUrl(`Hello ${siteConfig.businessName}, I would like to make an enquiry.`);
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-emerald-glow relative border-t border-gold/20 text-ivory">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">
              {siteConfig.description}
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-soft via-gold to-[#b8975a] px-6 py-3 text-sm font-semibold text-deep transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-display text-xl text-gold">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-ivory/70 transition-colors hover:text-gold-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className="font-display text-xl text-gold">Experiences</h3>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              {siteConfig.footerServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xl text-gold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-ivory/70">
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold-soft">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-gold-soft">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map(({ key, label, icon: Icon }) => (
                <a
                  key={key}
                  href={siteConfig.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-gold transition-all duration-300 hover:bg-gold hover:text-deep"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-6 text-xs text-ivory/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-4 py-2 text-gold transition-all duration-300 hover:bg-gold hover:text-deep"
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
