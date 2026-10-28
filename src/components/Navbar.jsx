import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const waHref = buildWhatsAppUrl(`Hello ${siteConfig.businessName}, I would like to book.`);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
      isActive
        ? "text-gold after:w-full"
        : "text-ivory/80 hover:text-gold-soft after:w-0 hover:after:w-full"
    }`;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-gold/15 bg-deep/90 py-3 shadow-[0_20px_40px_-25px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-gold-soft via-gold to-[#b8975a] px-5 py-2.5 text-sm font-semibold text-deep shadow-[0_10px_25px_-12px_rgba(214,183,121,0.9)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Book on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-soft lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-6 pt-4">
              {siteConfig.navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-display text-2xl ${
                        isActive ? "bg-gold/10 text-gold" : "text-ivory/85 hover:bg-white/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-soft via-gold to-[#b8975a] px-6 py-3.5 text-sm font-semibold text-deep"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
