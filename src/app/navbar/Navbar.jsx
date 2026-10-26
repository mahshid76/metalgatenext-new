"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "../data/site";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="on-light sticky top-0 z-50 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-14 lg:py-4">
        <Link href="/" className="flex items-center gap-3.5" aria-label="Metalgate Leeds home">
          <Image src="/assets/logo2.svg" alt="" width={80} height={80} priority className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />
          <span className="text-lg font-extrabold tracking-[0.14em] text-ink sm:text-2xl lg:text-[32px]">
            METAL <span className="text-gold">GATE</span>{" "}
            <span className="text-xs font-semibold tracking-[0.22em] text-dim lg:text-base">LEEDS</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden gap-8 text-[17px] font-medium lg:flex xl:gap-12 xl:text-[19px]">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-1.5 transition-colors ${
                  active
                    ? "border-gold font-bold text-ink"
                    : "border-transparent text-body hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden min-h-12 items-center rounded-sm bg-gold px-6 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#18211f] transition hover:brightness-110 sm:inline-flex lg:min-h-14 lg:px-8 lg:text-[15px]"
          >
            Get a free quote ↗
          </Link>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-line3 text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="mx-auto flex max-w-[1920px] flex-col px-6 pb-3 sm:px-8 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-t border-line text-lg font-medium text-body hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 mb-2 inline-flex min-h-12 items-center justify-center rounded-sm bg-gold text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#18211f]"
          >
            Get a free quote ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
