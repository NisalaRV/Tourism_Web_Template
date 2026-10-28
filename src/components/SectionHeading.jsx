import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "dark", // "dark" = text on ivory, "light" = text on emerald
  className = "",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = tone === "light" ? "text-ivory" : "text-deep";
  const textColor = tone === "light" ? "text-ivory/70" : "text-charcoal/70";

  return (
    <Reveal className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl font-semibold leading-tight md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      <span
        className={`mt-5 block h-px w-16 bg-gradient-to-r from-gold to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
      {text && <p className={`mt-5 leading-relaxed ${textColor}`}>{text}</p>}
    </Reveal>
  );
}
