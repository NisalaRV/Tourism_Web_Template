// Accessible labelled field styled for dark glass panels.
export default function FormField({
  id,
  label,
  error,
  required = false,
  hint,
  as: Tag = "input",
  className = "",
  children,
  ...props
}) {
  const describedBy = [error ? `${id}-error` : null, hint ? `${id}-hint` : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ivory/90">
        {label}
        {required && (
          <span className="text-gold" aria-hidden="true">
            {" "}*
          </span>
        )}
      </label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? "true" : "false"}
        aria-required={required}
        aria-describedby={describedBy || undefined}
        style={{ colorScheme: "dark" }}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/35 transition-colors focus:border-gold focus:bg-white/10 focus:outline-none ${
          error ? "border-red-300/80" : "border-gold/25"
        }`}
        {...props}
      >
        {children}
      </Tag>
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ivory/50">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-200">
          {error}
        </p>
      )}
    </div>
  );
}
