import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Info, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { openWhatsApp } from "../utils/whatsapp";
import { emailPattern, phonePattern } from "../utils/dates";
import PageHeader from "../components/PageHeader";
import FormField from "../components/FormField";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const socials = [
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "facebook", label: "Facebook", icon: Facebook },
  { key: "youtube", label: "YouTube", icon: Youtube },
];

const initial = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email address.";
    else if (!emailPattern.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (!values.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!phonePattern.test(values.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!values.message.trim()) e.message = "Please write a short message.";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const message = [
      `Hello ${siteConfig.businessName},`,
      "",
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      "",
      "Message:",
      values.message.trim(),
    ].join("\n");

    setResult(openWhatsApp(message));
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's talk about your trip"
        text="Reach us directly, or write your message below and send it on WhatsApp."
      />

      <section className="bg-emerald-glow pb-24 pt-4 md:pb-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:col-span-5">
            <div className="glass rounded-3xl p-8">
              <h2 className="font-display text-3xl text-ivory">Contact details</h2>
              <ul className="mt-6 space-y-5 text-ivory/80">
                <li className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-gold" size={20} aria-hidden="true" />
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold-soft">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 shrink-0 text-gold" size={20} aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-gold-soft">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-gold" size={20} aria-hidden="true" />
                  <span>{siteConfig.address}</span>
                </li>
              </ul>
              <div className="mt-7 flex gap-3 border-t border-gold/20 pt-6">
                {socials.map(({ key, label, icon: Icon }) => (
                  <a
                    key={key}
                    href={siteConfig.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:bg-gold hover:text-deep"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder: swap for a Google Maps iframe embed when you have the client's location. */}
            <div
              role="img"
              aria-label="Map placeholder"
              className="relative flex h-56 items-center justify-center overflow-hidden rounded-3xl border border-gold/25 bg-[linear-gradient(135deg,#1b403a,#102b26)]"
            >
              <div
                className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(214,183,121,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(214,183,121,0.25)_1px,transparent_1px)] [background-size:36px_36px]"
                aria-hidden="true"
              />
              <div className="relative text-center">
                <MapPin className="mx-auto text-gold" size={34} aria-hidden="true" />
                <p className="mt-2 text-sm text-ivory/75">Map placeholder</p>
                <p className="text-xs text-ivory/50">Embed your map here</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 md:p-10">
              <h2 className="font-display text-3xl text-ivory">Send a message</h2>

              <p className="mt-4 flex gap-3 rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm text-ivory/85">
                <Info className="mt-0.5 shrink-0 text-gold" size={18} aria-hidden="true" />
                <span>
                  Submitting this form opens WhatsApp with your message pre-filled. It does not send
                  anything automatically. You need to press send in WhatsApp.
                </span>
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-7 grid gap-5 sm:grid-cols-2">
                <FormField
                  id="name"
                  label="Full name"
                  required
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  error={errors.name}
                  placeholder="Your name"
                />
                <FormField
                  id="phone"
                  label="Phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={onChange}
                  error={errors.phone}
                  placeholder="+94 77 000 0000"
                />
                <FormField
                  id="email"
                  label="Email"
                  required
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={onChange}
                  error={errors.email}
                  placeholder="you@example.com"
                  className="sm:col-span-2"
                />
                <FormField
                  id="message"
                  as="textarea"
                  rows={5}
                  label="Message"
                  required
                  value={values.message}
                  onChange={onChange}
                  error={errors.message}
                  placeholder="Tell us about your plans"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <Button type="submit" icon={MessageCircle}>
                    Continue to WhatsApp
                  </Button>
                </div>
              </form>

              {result && (
                <div role="status" className="mt-6 rounded-2xl border border-gold/30 bg-white/5 p-5 text-sm text-ivory/85">
                  <p>
                    WhatsApp should now be open with your message ready. Please press send there to
                    deliver it to us.
                  </p>
                  {result.blocked && (
                    <p className="mt-3">
                      Your browser blocked the new window.{" "}
                      <a
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gold underline underline-offset-4"
                      >
                        Open WhatsApp with your message
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
