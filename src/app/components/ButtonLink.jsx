import Link from "next/link";

const base =
  "inline-flex min-h-[52px] items-center justify-center rounded-sm px-7 text-[13px] font-extrabold uppercase tracking-[0.08em] transition";

const variants = {
  gold: "bg-gold text-[#18211f] hover:brightness-110",
  ghost: "border border-[#c8d0ca] text-white hover:bg-white hover:text-[#18211f]",
  dark: "bg-[#18211f] text-white hover:bg-black",
};

// Internal paths use next/link; tel:, mailto: and absolute URLs use a plain anchor.
export default function ButtonLink({ href, variant = "gold", className = "", children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
