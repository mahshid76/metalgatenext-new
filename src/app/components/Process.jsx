import SectionHeading from "./SectionHeading";

const steps = [
  { title: "Tell us what you need", text: "Call, WhatsApp or use the form. No job is too small." },
  { title: "Free quote", text: "A clear, no-obligation price before any work starts." },
  { title: "Made to measure", text: "Fabricated in our Bradford workshop to fit your property." },
  { title: "Installed", text: "Fitted on site, finished properly and left tidy." },
];

export default function Process() {
  return (
    <section className="on-dark bg-surface2">
      <div className="mx-auto max-w-[1320px] px-6 py-28 sm:px-8">
        <SectionHeading eyebrow="How it works" title="From enquiry to install" />
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rv">
              <div className="draw mb-6 h-[3px] bg-gold" />
              <span className="font-display text-6xl font-bold leading-none text-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 mb-2.5 font-display text-[26px] font-semibold leading-tight text-ink">{step.title}</h3>
              <p className="text-lg leading-relaxed text-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
