import { siteConfig } from "../config/siteConfig";
import { unsplash } from "../utils/images";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import SmartImage from "../components/SmartImage";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function About() {
  const { about, stats } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A small team with a big love for the island"
        text="Placeholder introduction. Tell visitors who you are in a sentence or two."
      />

      {/* STORY */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-6">
            <SmartImage
              src={unsplash(about.image, 1200)}
              alt="Sunlit Sri Lankan shoreline"
              className="aspect-[4/5] w-full rounded-[2rem] shadow-[0_50px_80px_-40px_rgba(16,43,38,0.7)]"
            />
            <SmartImage
              src={unsplash(about.secondaryImage, 800)}
              alt="Boutique pool and garden"
              className="absolute -bottom-8 right-4 hidden aspect-square w-2/5 rounded-3xl border-4 border-ivory shadow-2xl sm:block md:-right-8"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:pl-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our story</p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-deep md:text-5xl">
              Rooted in place, built on welcome
            </h2>
            <span className="mt-5 block h-px w-16 bg-gradient-to-r from-gold to-transparent" aria-hidden="true" />
            <p className="mt-6 leading-relaxed text-charcoal/75">{about.story}</p>
            <p className="mt-4 leading-relaxed text-charcoal/75">
              Placeholder paragraph. Add details about your team, your property or your tour style
              here.
            </p>
            <div className="mt-8">
              <Button to="/booking" variant="dark">
                Start an enquiry
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-emerald-glow py-24 md:py-32">
        <div className="container-x">
          <SectionHeading tone="light" eyebrow="Our values" title="What we stand for" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {about.values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="glass h-full rounded-3xl p-8">
                  <Icon className="text-gold" size={28} aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl text-ivory">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Service highlights" title="How we look after you" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {about.highlights.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="glass-light h-full rounded-3xl p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-gold">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-deep">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-deep py-20">
        <div className="container-x">
          <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-gold">
            Placeholder statistics. Replace with real figures or remove this section.
          </p>
          <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-t border-gold/30 pt-6">
                  <dd className="gold-text font-display text-5xl font-semibold md:text-6xl">{s.value}</dd>
                  <dt className="mt-2 text-sm text-ivory/65">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
