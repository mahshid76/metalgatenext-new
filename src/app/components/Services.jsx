"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { services } from "../data/site";

const INTERVAL_MS = 4500;

export default function Services() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  // Auto-advance, unless the visitor prefers reduced motion or is interacting.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % services.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const pick = (i) => {
    paused.current = true;
    setActive(i);
  };

  return (
    <section id="services" className="on-dark bg-surface">
      <div className="mx-auto max-w-[1320px] px-6 py-28 sm:px-8">
        <SectionHeading eyebrow="What we make" title="Services" />

        <div
          className="flex flex-wrap items-stretch gap-x-[72px] gap-y-12"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <ul className="min-w-0 flex-[1_1_440px] border-t border-line">
            {services.map((service, i) => {
              const on = i === active;
              return (
                <li key={service.name}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => pick(i)}
                    onMouseEnter={() => pick(i)}
                    onFocus={() => pick(i)}
                    className="flex min-h-11 w-full items-baseline gap-5 border-b border-line py-5 text-left"
                  >
                    <span className={`min-w-7 text-[15px] font-semibold ${on ? "text-kick" : "text-dim"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.1] transition-colors ${
                        on ? "font-bold text-ink" : "font-semibold text-dim"
                      }`}
                    >
                      {service.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <div className="relative aspect-[5/4] overflow-clip bg-photo">
              {services.map((service, i) => (
                <Image
                  key={service.img}
                  src={service.img}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                  aria-hidden={i === active ? undefined : true}
                />
              ))}
            </div>
            <p key={active} className="fadein min-h-[84px] text-[21px] leading-normal text-body" aria-live="polite">
              {services[active].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
