import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { site } from "../data/site";

const slides = [
  { src: "/images/19.jpg", alt: "Welder cutting steel sections on site", position: "center 35%" },
  { src: "/images/30.jpg", alt: "Ornate black wrought-iron gate with spear finials", position: "center" },
  { src: "/images/13.jpg", alt: "Grey and black double driveway gate", position: "center" },
  { src: "/images/26.jpg", alt: "Black metal driveway fence and gate", position: "center" },
  { src: "/images/21.jpg", alt: "Welder working on a steel beam", position: "center" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="on-dark relative overflow-clip bg-[linear-gradient(120deg,#0e1714_0%,#16241f_50%,#2d4a3c_100%)]"
    >
      <div className="flex min-h-[680px] flex-wrap items-stretch">
        <div className="hero-photo relative min-h-[380px] min-w-0 flex-[1.15_1_520px] overflow-clip bg-[#0d1512] md:min-h-[680px]">
          {slides.map((slide, i) => (
            <div key={slide.src} className="slide" style={{ animationDelay: `${i * 6}s` }}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
                style={{ objectPosition: slide.position }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-[#08100d]/20" />
          <span className="absolute bottom-5 right-[9%] z-[3] text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Designed and made in Leeds
          </span>
        </div>

        <div className="relative z-[5] flex min-w-0 flex-[1_1_440px] flex-col justify-center gap-6 px-7 py-16 sm:px-12 lg:px-[72px]">
          <p className="hero-in text-xs font-extrabold uppercase tracking-[0.2em] text-gold" style={{ animationDelay: "2s" }}>
            Metalwork · Leeds &amp; West Yorkshire
          </p>
          <h1
            className="hero-in font-display text-[clamp(2.75rem,5.6vw,5rem)] font-bold leading-none tracking-[-0.035em] text-[#f4f2eb]"
            style={{ animationDelay: "2.15s" }}
          >
            Looking for a metal gate?
          </h1>
          <p className="hero-in max-w-[480px] text-[19px] leading-relaxed text-[#d4d9d6]" style={{ animationDelay: "2.3s" }}>
            Made-to-measure gates, railings and metalwork, built for your home and made to last.
          </p>
          <div className="hero-in mt-1.5 flex flex-wrap gap-3.5" style={{ animationDelay: "2.45s" }}>
            <ButtonLink href="/contact">Request a free quote</ButtonLink>
            <ButtonLink href={site.whatsappQuote} variant="ghost" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="gate gate-l" />
      <div className="gate gate-r" />
      <Image className="seal" src="/assets/logo2.svg" alt="" width={112} height={112} />
    </section>
  );
}
