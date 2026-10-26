export default function SectionHeading({ eyebrow, title, children, className = "" }) {
  return (
    <div className={`rv mb-14 flex flex-wrap items-end justify-between gap-x-16 gap-y-6 ${className}`}>
      <div>
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-kick">{eyebrow}</p>
        <h2 className="font-display text-[clamp(2.25rem,4vw,3.25rem)] font-bold leading-none tracking-tight text-ink">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
