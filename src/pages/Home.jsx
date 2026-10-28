import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Quote, MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { packages } from "../data/packages";
import { testimonials } from "../data/testimonials";
import { destinations } from "../data/destinations";
import { unsplash } from "../utils/images";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import SmartImage from "../components/SmartImage";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const { hero } = siteConfig;
  const featured = packages[0];

  const enter = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-deep pb-20 pt-32"
      >
        <motion.div style={{ y: reduce ? 0 : bgY }} className="absolute inset-0 -z-20">
          <SmartImage
            src={unsplash(hero.image, 1920)}
            alt="Tropical Sri Lankan coastline with palm trees"
            className="h-full w-full"
            imgClassName="scale-110"
            loading="eager"
          />
        </motion.div>
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/85 via-deep/55 to-deep"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_85%_20%,rgba(214,183,121,0.22),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              {...enter(0.1)}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            >
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              {...enter(0.25)}
              className="font-display text-5xl font-semibold leading-[1.02] text-ivory sm:text-6xl lg:text-7xl"
            >
              {hero.headline}
            </motion.h1>
            <motion.p {...enter(0.4)} className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/75">
              {hero.text}
            </motion.p>
            <motion.div {...enter(0.55)} className="mt-10 flex flex-wrap gap-4">
              <Button to="/booking" variant="gold">
                Plan your stay
              </Button>
              <Button to="/gallery" variant="outline">
                View the gallery
              </Button>
            </motion.div>
          </div>

          <motion.div {...enter(0.5)} className="hidden lg:col-span-5 lg:block">
            <Tilt max={9}>
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-[2.5rem] bg-gold/20 blur-3xl"
                  aria-hidden="true"
                />
                <div className="glass relative overflow-hidden rounded-[2rem] p-3">
                  <SmartImage
                    src={featured.image}
                    alt={featured.name}
                    className="aspect-[4/5] w-full rounded-[1.5rem]"
                  />
                  <div
                    className="glass absolute -left-8 bottom-12 max-w-[15rem] rounded-2xl p-4"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Sample package</p>
                    <p className="mt-1 font-display text-xl text-ivory">{featured.name}</p>
                    <p className="mt-1 text-xs text-ivory/60">{featured.duration}</p>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Featured"
            title="Stays, tours and experiences"
            text="Sample packages are shown below as examples. Replace them in src/data/packages.js with your own offers."
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {packages.map((p, i) => (
              <ServiceCard key={p.id} item={p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-emerald-glow py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            tone="light"
            eyebrow="Why choose us"
            title="Travel that feels considered"
            text="Placeholder intro. Summarise what sets your business apart from other options in the area."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.whyUs.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="glass h-full rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-soft to-gold text-deep">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-ivory">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Destinations"
            title="Where we take you"
            text="Sample destinations. Edit them in src/data/destinations.js."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
            {destinations.map((d, i) => (
              <Reveal
                key={d.id}
                delay={i * 0.08}
                className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <article
                  className={`group relative overflow-hidden rounded-3xl ring-1 ring-gold/25 ${
                    i === 0 ? "min-h-[22rem] lg:h-full" : "min-h-[16rem]"
                  }`}
                >
                  <SmartImage
                    src={d.image}
                    alt={`${d.name}: ${d.tag}`}
                    className="absolute inset-0"
                    imgClassName="transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                      <MapPin size={14} aria-hidden="true" />
                      {d.tag}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-ivory md:text-4xl">{d.name}</h3>
                    <p className="mt-2 max-w-sm text-sm text-ivory/70">{d.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white/60 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Guest words"
            title="What guests say"
            text="These are placeholder testimonials, not real reviews. Replace them in src/data/testimonials.js."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.1}>
                <figure className="glass-light flex h-full flex-col rounded-3xl p-8">
                  <Quote className="text-gold" size={30} aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed text-deep">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-gold/30 pt-4 text-sm">
                    <span className="font-semibold text-deep">{t.name}</span>
                    <span className="block text-charcoal/60">{t.origin}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-glow relative overflow-hidden py-24 md:py-32">
        <div className="container-x">
          <Reveal className="glass mx-auto max-w-4xl rounded-[2rem] px-6 py-14 text-center md:px-16">
            <h2 className="font-display text-4xl font-semibold text-ivory md:text-6xl">
              Ready to plan your <span className="gold-text">Sri Lankan escape?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-ivory/70">
              Send us your dates and ideas on WhatsApp. This is an enquiry, and nothing is confirmed
              until we reply and agree the details with you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <WhatsAppButton
                label="Message us on WhatsApp"
                message={`Hello ${siteConfig.businessName}, I would like to plan a trip.`}
              />
              <Button to="/booking" variant="outline">
                Open the booking form
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
