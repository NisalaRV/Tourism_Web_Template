import { useCallback, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { galleryImages, galleryCategories } from "../data/gallery";
import PageHeader from "../components/PageHeader";
import SmartImage from "../components/SmartImage";
import Lightbox from "../components/Lightbox";

export default function Gallery() {
  const reduce = useReducedMotion();
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null);

  const items = useMemo(
    () => (category === "All" ? galleryImages : galleryImages.filter((i) => i.category === category)),
    [category]
  );

  const close = useCallback(() => setActive(null), []);
  const navigate = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from the island"
        text="Sample photography. Replace the images in src/data/gallery.js with your own."
      />

      <section className="bg-ivory py-16 md:py-24">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filter gallery">
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  category === c
                    ? "border-deep bg-deep text-gold-soft"
                    : "border-deep/20 text-deep hover:border-gold hover:text-charcoal"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((img, i) => (
              <motion.div
                key={img.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.4) }}
                className="mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Open image: ${img.alt}`}
                  className="group relative block w-full overflow-hidden rounded-3xl shadow-[0_30px_50px_-30px_rgba(16,43,38,0.6)] ring-1 ring-gold/20"
                >
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    className="w-full"
                    style={{ aspectRatio: img.ratio }}
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-deep/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  >
                    <span className="text-sm text-ivory">{img.category}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-deep">
                      <ZoomIn size={18} />
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox items={items} index={active} onClose={close} onNavigate={navigate} />
    </>
  );
}
