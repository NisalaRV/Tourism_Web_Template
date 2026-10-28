import { motion, useReducedMotion } from "framer-motion";

// Dark emerald page intro used on inner pages (also sits behind the transparent navbar).
export default function PageHeader({ eyebrow, title, text }) {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } };

  return (
    <header className="bg-emerald-glow relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <motion.div {...anim} className="container-x relative">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-ivory md:text-7xl">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-xl leading-relaxed text-ivory/70">{text}</p>}
      </motion.div>
    </header>
  );
}
