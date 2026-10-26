"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import RetryImage from "./RetryImage";

const buttonClass =
  "absolute z-[3] inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/35 bg-[#0f1715]/80 text-white transition hover:bg-gold hover:text-[#18211f]";

// Full-screen photo viewer: click the dark backdrop, press Esc or use the X to close;
// arrow buttons, ← / → keys or a swipe move between photos.
export default function Lightbox({ photos, index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const latest = useRef({ index, onClose, onChange });
  const n = photos.length;
  const photo = photos[index];

  useEffect(() => {
    latest.current = { index, onClose, onChange };
  });

  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      const { index: i, onClose: close, onChange: change } = latest.current;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") change((i + n - 1) % n);
      else if (e.key === "ArrowRight") change((i + 1) % n);
      else if (e.key === "Tab") {
        // Keep keyboard focus inside the dialog.
        const buttons = dialogRef.current?.querySelectorAll("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [n]);

  // Warm the cache for the neighbouring photos.
  useEffect(() => {
    [(index + 1) % n, (index + n - 1) % n].forEach((i) => {
      const img = new window.Image();
      img.src = photos[i].src;
    });
  }, [index, n, photos]);

  const prev = () => onChange((index + n - 1) % n);
  const next = () => onChange((index + 1) % n);

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Project photo viewer"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080d0b]/95"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
      }}
    >
      <button
        type="button"
        aria-label="Close viewer"
        onClick={onClose}
        tabIndex={-1}
        className="absolute inset-0 z-[1] cursor-zoom-out"
      />
      <figure className="relative z-[2] flex max-w-[92vw] flex-col items-center gap-4">
        <RetryImage
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          priority
          className="fadein shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
          style={{ width: "auto", height: "auto", maxWidth: "92vw", maxHeight: "76vh" }}
        />
        <figcaption className="text-center text-[15px] text-[#dfe5e1]">
          {photo.alt}
          <span className="mt-1 block text-sm font-semibold tracking-[0.12em] text-[#aeb8b2]">
            {index + 1} / {n}
          </span>
        </figcaption>
      </figure>

      <button ref={closeRef} type="button" aria-label="Close viewer" onClick={onClose} className={`${buttonClass} right-5 top-5`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <button type="button" aria-label="Previous photo" onClick={prev} className={`${buttonClass} left-3 top-1/2 -mt-[26px] sm:left-5`}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button type="button" aria-label="Next photo" onClick={next} className={`${buttonClass} right-3 top-1/2 -mt-[26px] sm:right-5`}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>,
    document.body
  );
}
