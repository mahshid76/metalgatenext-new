export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="on-dark bg-[linear-gradient(120deg,#0e1714_0%,#16241f_50%,#2d4a3c_100%)]">
      <div className="mx-auto max-w-[1320px] px-6 py-24 sm:px-8">
        <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="max-w-[900px] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#f4f2eb]">
          {title}
        </h1>
        {children && <p className="mt-6 max-w-[600px] text-xl leading-relaxed text-[#d4d9d6]">{children}</p>}
      </div>
    </section>
  );
}
