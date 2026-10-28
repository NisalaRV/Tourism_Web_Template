import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CalendarCheck, Info, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { packages } from "../data/packages";
import { openWhatsApp } from "../utils/whatsapp";
import { todayStr, emailPattern, phonePattern } from "../utils/dates";
import PageHeader from "../components/PageHeader";
import FormField from "../components/FormField";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const NOT_SURE = "Not sure yet, please advise";

const steps = [
  "Fill in the enquiry form with your dates and preferences.",
  "WhatsApp opens with your details written out for you.",
  "Press send in WhatsApp. We reply to confirm availability and price.",
];

export default function Booking() {
  const [params] = useSearchParams();
  const preselected = packages.find((p) => p.id === params.get("package"));

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    arrival: "",
    departure: "",
    guests: "2",
    package: preselected ? preselected.name : "",
    requests: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const today = todayStr();
  const selected = useMemo(() => packages.find((p) => p.name === values.package), [values.package]);
  // Single-day experiences don't need a departure date.
  const showDeparture = !selected || selected.type !== "Experience";
  const departureRequired = selected?.type === "Stay";

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => {
      const next = { ...v, [name]: value };
      if (name === "arrival" && next.departure && next.departure < value) next.departure = "";
      return next;
    });
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!phonePattern.test(values.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!values.email.trim()) e.email = "Please enter your email address.";
    else if (!emailPattern.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (!values.arrival) e.arrival = "Please choose a date.";
    else if (values.arrival < today) e.arrival = "The date cannot be in the past.";
    if (showDeparture) {
      if (departureRequired && !values.departure) e.departure = "Please choose a departure date.";
      else if (values.departure && values.departure < (values.arrival || today))
        e.departure = "Departure must be on or after arrival.";
    }
    const g = Number(values.guests);
    if (!values.guests || !Number.isInteger(g) || g < 1 || g > 50)
      e.guests = "Enter a number of guests from 1 to 50.";
    if (!values.package) e.package = "Please choose a package.";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const lines = [
      `Hello ${siteConfig.businessName}, I would like to make a booking enquiry.`,
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Package: ${values.package}`,
      `${selected?.type === "Experience" ? "Tour date" : "Arrival date"}: ${values.arrival}`,
    ];
    if (showDeparture && values.departure) lines.push(`Departure date: ${values.departure}`);
    lines.push(`Guests: ${values.guests}`);
    if (values.requests.trim()) lines.push("", "Additional requests:", values.requests.trim());
    lines.push("", "Please confirm availability and pricing. Thank you.");

    setResult(openWhatsApp(lines.join("\n")));
  };

  return (
    <>
      <PageHeader
        eyebrow="Booking enquiry"
        title="Plan your stay with us"
        text="Tell us when you would like to travel. This is an enquiry form, not an instant reservation."
      />

      <section className="bg-emerald-glow pb-24 pt-4 md:pb-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="glass rounded-3xl p-8 lg:sticky lg:top-28">
              <CalendarCheck className="text-gold" size={30} aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl text-ivory">How it works</h2>
              <ol className="mt-6 space-y-5">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-4 text-sm leading-relaxed text-ivory/75">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/50 text-xs font-semibold text-gold">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="glass rounded-3xl p-6 md:p-10">
              {result ? (
                <div role="status" aria-live="polite">
                  <CheckCircle2 className="text-gold" size={40} aria-hidden="true" />
                  <h2 className="mt-4 font-display text-4xl text-ivory">One last step</h2>
                  <p className="mt-4 leading-relaxed text-ivory/80">
                    WhatsApp should now be open with your enquiry ready to send. You must press send
                    in WhatsApp for us to receive it. This is an enquiry only, not a confirmed
                    reservation. Your booking is confirmed only after we reply and agree the details
                    with you.
                  </p>
                  {result.blocked && (
                    <p className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm text-ivory/90">
                      Your browser blocked the new window.{" "}
                      <a
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gold underline underline-offset-4"
                      >
                        Open WhatsApp with your enquiry
                      </a>
                    </p>
                  )}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button href={result.url} icon={MessageCircle}>
                      Open WhatsApp again
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setResult(null)}>
                      Edit my details
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl text-ivory">Your details</h2>
                  <p className="mt-4 flex gap-3 rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm text-ivory/85">
                    <Info className="mt-0.5 shrink-0 text-gold" size={18} aria-hidden="true" />
                    <span>
                      Submitting opens WhatsApp with your enquiry pre-filled. Nothing is sent
                      automatically and no reservation is made until we confirm with you.
                    </span>
                  </p>

                  <form onSubmit={onSubmit} noValidate className="mt-7 grid gap-5 sm:grid-cols-2">
                    <FormField id="name" label="Full name" required autoComplete="name"
                      value={values.name} onChange={onChange} error={errors.name} placeholder="Your name" />
                    <FormField id="phone" label="Phone" required type="tel" autoComplete="tel"
                      value={values.phone} onChange={onChange} error={errors.phone} placeholder="+94 77 000 0000" />
                    <FormField id="email" label="Email" required type="email" autoComplete="email"
                      value={values.email} onChange={onChange} error={errors.email} placeholder="you@example.com"
                      className="sm:col-span-2" />

                    <FormField id="package" as="select" label="Package" required
                      value={values.package} onChange={onChange} error={errors.package}
                      className="sm:col-span-2">
                      <option value="" className="bg-deep">Choose a package</option>
                      {packages.map((p) => (
                        <option key={p.id} value={p.name} className="bg-deep">
                          {p.name} ({p.duration}, sample)
                        </option>
                      ))}
                      <option value={NOT_SURE} className="bg-deep">{NOT_SURE}</option>
                    </FormField>

                    <FormField id="arrival" label={selected?.type === "Experience" ? "Tour date" : "Arrival date"}
                      required type="date" min={today}
                      value={values.arrival} onChange={onChange} error={errors.arrival} />
                    {showDeparture && (
                      <FormField id="departure" label="Departure date" required={departureRequired}
                        type="date" min={values.arrival || today}
                        value={values.departure} onChange={onChange} error={errors.departure}
                        hint={departureRequired ? undefined : "Optional for tours"} />
                    )}

                    <FormField id="guests" label="Number of guests" required type="number"
                      min="1" max="50" inputMode="numeric"
                      value={values.guests} onChange={onChange} error={errors.guests} />

                    <FormField id="requests" as="textarea" rows={4} label="Additional requests"
                      value={values.requests} onChange={onChange}
                      placeholder="Dietary needs, celebrations, pickup location..."
                      className="sm:col-span-2" />

                    <div className="sm:col-span-2">
                      <Button type="submit" icon={MessageCircle}>
                        Send enquiry via WhatsApp
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
