const items = [
  "Free, no-obligation quotes",
  "No job too small",
  "Leeds & West Yorkshire",
  "Made to measure",
  "Repairs",
];

function Group({ hidden }) {
  return (
    <div className="flex gap-14 pr-14" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="flex gap-14">
          <span>{item}</span>
          <span>·</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="on-light bg-surface pt-10">
      <section aria-label="Highlights" className="overflow-hidden bg-gold py-[22px] text-[#18211f]">
        <div className="marq flex w-max whitespace-nowrap text-sm font-extrabold uppercase tracking-[0.18em]">
          <Group />
          <Group hidden />
        </div>
      </section>
    </div>
  );
}
