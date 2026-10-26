import RetryImage from "./RetryImage";
import ButtonLink from "./ButtonLink";

export default function AboutSection({ id }) {
  return (
    <section id={id} className="on-light bg-surface2">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-[88px] gap-y-16 px-6 py-32 sm:px-8">
        <div className="flex min-w-0 flex-[1_1_420px] items-start gap-4">
          <div className="relative aspect-[3/4] flex-1 overflow-clip bg-photo">
            <RetryImage
              src="/images/19.jpg"
              alt="Welder cutting steel sections on a job site"
              width={1350}
              height={1800}
              className="px absolute left-0 -top-[12%] h-[124%] w-full object-cover"
            />
          </div>
          <div className="relative mt-16 aspect-[3/4] flex-1 overflow-clip bg-photo">
            <RetryImage
              src="/images/28.jpg"
              alt="Steel canopy frame under construction"
              width={1350}
              height={1800}
              className="px absolute left-0 -top-[12%] h-[124%] w-full object-cover"
            />
          </div>
        </div>

        <div className="rv flex min-w-0 flex-[1_1_420px] flex-col gap-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-kick">About us</p>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.25rem)] font-bold leading-none tracking-tight text-ink">
            A trusted local metal fabricator
          </h2>
          <p className="text-xl leading-relaxed text-body">
            Metalgate Leeds Ltd is a trusted provider of high-quality metal fabrication and engineering
            solutions, serving clients across Leeds and West Yorkshire. We specialise in custom metalwork,
            gates, railings, fences and structural steel, delivering precision, durability and excellent
            customer service every step of the way.
          </p>
          <ButtonLink href="/contact" variant="dark" className="self-start">
            Talk to our team
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
