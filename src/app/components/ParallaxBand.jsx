import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function ParallaxBand() {
  return (
    <section className="on-dark relative h-[620px] overflow-clip bg-[#0b0c0e]">
      <Image
        src="/images/21.jpg"
        alt="Welder working on a steel beam"
        width={1440}
        height={1440}
        className="px absolute left-0 -top-[14%] h-[128%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0a0b0c]/65" />
      <div className="relative z-[2] mx-auto flex h-full max-w-[1320px] flex-col items-start justify-center gap-7 px-6 sm:px-8">
        <h2 className="rv max-w-[900px] font-display text-[clamp(2.5rem,5.6vw,5rem)] font-bold leading-none tracking-tight text-white">
          No job is too small.
        </h2>
        <ButtonLink href="/contact" className="rv">
          Ask for a free quote
        </ButtonLink>
      </div>
    </section>
  );
}
