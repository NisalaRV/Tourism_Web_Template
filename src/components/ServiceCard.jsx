import { Link } from "react-router-dom";
import { Clock, Check, ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";
import Tilt from "./Tilt";
import Reveal from "./Reveal";

// Image card for a package/tour/stay. Links to the booking form with the package preselected.
export default function ServiceCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Tilt className="h-full" max={6}>
        <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-deep shadow-[0_40px_70px_-35px_rgba(16,43,38,0.7)] ring-1 ring-gold/20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <SmartImage
              src={item.image}
              alt={`${item.name}: ${item.summary}`}
              className="h-full w-full"
              imgClassName="transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-deep via-deep/20 to-transparent"
              aria-hidden="true"
            />
            <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-deep/70 px-3 py-1 text-xs font-medium text-gold-soft backdrop-blur">
              {item.type}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(30px)" }}>
            <h3 className="font-display text-2xl font-semibold text-ivory">{item.name}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-gold">
              <Clock size={15} aria-hidden="true" />
              {item.duration}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ivory/65">{item.summary}</p>
            <ul className="mt-4 space-y-1.5">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-ivory/80">
                  <Check size={14} className="shrink-0 text-gold" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between border-t border-gold/15 pt-4">
              <span className="text-sm font-medium text-gold-soft">{item.price}</span>
              <Link
                to={`/booking?package=${item.id}`}
                aria-label={`Enquire about ${item.name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold transition-all duration-300 hover:bg-gold hover:text-deep"
              >
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      </Tilt>
    </Reveal>
  );
}
