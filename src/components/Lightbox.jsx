import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage";

// index === null means closed. onNavigate(+1 | -1) moves between images.
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const open = index !== null && items[index];

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNavigate(1);
      else if (e.key === "ArrowLeft") onNavigate(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll("button");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose, onNavigate]);

  const current = open ? items[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#07130f]/95 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-deep/80 text-gold-soft transition-colors hover:bg-gold hover:text-deep"
          >
            <X size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-deep/80 text-gold-soft transition-colors hover:bg-gold hover:text-deep md:left-6"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-deep/80 text-gold-soft transition-colors hover:bg-gold hover:text-deep md:right-6"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>

          <figure
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              key={current.id}
              src={current.src}
              alt={current.alt}
              className="h-[70vh] w-full rounded-2xl ring-1 ring-gold/30"
              imgClassName="!object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-ivory/75">
              {current.alt}{" "}
              <span className="text-gold">
                ({index + 1} / {items.length})
              </span>
            </figcaption>
          </figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
