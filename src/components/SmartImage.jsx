import { useState } from "react";

// Image with loading shimmer and a gradient fallback so nothing ever looks broken.
export default function SmartImage({ src, alt, className = "", imgClassName = "", style, ...rest }) {
  const [status, setStatus] = useState("loading");

  return (
    <div
      style={style}
      className={`relative overflow-hidden bg-gradient-to-br from-deep via-deep-soft to-gold/40 ${className}`}
    >
      {status !== "error" && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
          {...rest}
        />
      )}
      {status === "loading" && (
        <div className="absolute inset-0 animate-pulse bg-white/5" aria-hidden="true" />
      )}
      {status === "error" && <span role="img" aria-label={alt} className="absolute inset-0" />}
    </div>
  );
}
