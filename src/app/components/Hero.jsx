import RetryImage from "./RetryImage";
import ButtonLink from "./ButtonLink";
import { site } from "../data/site";
import { blur } from "../data/blur";

const slides = [
  { id: 19, src: "/images/hero/19.jpg", alt: "Welder cutting steel sections on site", position: "center 35%" },
  { id: 30, src: "/images/hero/30.jpg", alt: "Ornate black wrought-iron gate with spear finials", position: "center" },
  { id: 13, src: "/images/hero/13.jpg", alt: "Grey and black double driveway gate", position: "center" },
  { id: 26, src: "/images/hero/26.jpg", alt: "Black metal driveway fence and gate", position: "center" },
  { id: 21, src: "/images/hero/21.jpg", alt: "Welder working on a steel beam", position: "center" },
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
              <RetryImage
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "low"}
                placeholder="blur"
                blurDataURL={blur[slide.id]}
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
          <p className="hero-in text-xs font-extrabold uppercase tracking-[0.2em] text-gold" style={{ animationDelay: "0.35s" }}>
            Metalwork · Leeds &amp; West Yorkshire
          </p>
          <h1
            className="hero-in font-display text-[clamp(2.75rem,5.6vw,5rem)] font-bold leading-none tracking-[-0.035em] text-[#f4f2eb]"
            style={{ animationDelay: "0.45s" }}
          >
            Looking for a metal gate?
          </h1>
          <p className="hero-in max-w-[480px] text-[19px] leading-relaxed text-[#d4d9d6]" style={{ animationDelay: "0.55s" }}>
            Made-to-measure gates, railings and metalwork, built for your home and made to last.
          </p>
          <div className="hero-in mt-1.5 flex flex-wrap gap-3.5" style={{ animationDelay: "0.65s" }}>
            <ButtonLink href="/contact">Request a free quote</ButtonLink>
            <ButtonLink href={site.whatsappQuote} variant="ghost" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="gate gate-l" />
      <div className="gate gate-r" />
      <RetryImage className="seal" src="/assets/logo2.svg" alt="" width={112} height={112} />
    </section>
  );
}
