import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      aria-label={`${siteConfig.businessName} home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-gradient-to-br from-deep-soft to-deep font-display text-lg font-bold text-gold transition-transform duration-300 group-hover:rotate-6">
        {siteConfig.businessName.charAt(0)}
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold text-ivory">
          {siteConfig.businessName}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold">
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
