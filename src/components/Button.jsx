import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  gold: "bg-gradient-to-br from-gold-soft via-gold to-[#b8975a] text-deep shadow-[0_12px_30px_-12px_rgba(214,183,121,0.8)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(214,183,121,0.95)]",
  outline: "border border-gold/60 text-gold-soft hover:border-gold hover:bg-gold/10",
  dark: "bg-deep text-ivory shadow-lg hover:-translate-y-0.5 hover:bg-deep-soft",
  "outline-dark": "border border-deep/30 text-deep hover:bg-deep hover:text-ivory",
};

export default function Button({
  variant = "gold",
  to,
  href,
  icon: Icon,
  children,
  className = "",
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {Icon && <Icon size={18} aria-hidden="true" />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
