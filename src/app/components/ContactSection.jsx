"use client";

import { useState } from "react";
import { site } from "../data/site";

const fieldClass =
  "min-h-[52px] w-full rounded-sm border border-line3 bg-surface px-4 text-[17px] text-ink placeholder:text-dim";

const details = [
  { label: "Phone", value: <a href={site.phoneHref}>{site.phone}</a> },
  { label: "Email", value: <a href={`mailto:${site.email}`}>{site.email}</a> },
  {
    label: "Workshop",
    value: (
      <>
        {site.address[0]},<br />
        {site.address[1]}
      </>
    ),
  },
  { label: "Hours", value: site.hours },
];

export default function ContactSection({ id, showMap = false, heading = "Get a free quote" }) {
  const [opened, setOpened] = useState(false);

  // The site is a static export with no backend, so the enquiry is sent through WhatsApp:
  // the visitor's message is pre-filled and they just press send.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = `Hi Metalgate Leeds, my name is ${name}.\n\n${message}`;
    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url; // popup blocked: open in this tab
    setOpened(true);
  };

  return (
    <section id={id} className="on-dark bg-surface">
      <div className="mx-auto max-w-[1320px] px-6 pt-32 pb-32 sm:px-8">
        <h2 className="rv mb-16 font-display text-[clamp(2.75rem,6.4vw,5.75rem)] font-bold leading-[0.95] tracking-tight text-ink">
          {heading === "Get a free quote" ? (
            <>
              Let&apos;s build <span className="text-gold">yours.</span>
            </>
          ) : (
            heading
          )}
        </h2>

        <div className="flex flex-wrap gap-x-20 gap-y-14">
          <div className="rv flex min-w-0 flex-[1_1_380px] flex-col gap-7">
            <p className="text-xl leading-relaxed text-body">
              We welcome all enquiries, and no job is too small. Contact us today for a free, no-obligation
              quote.
            </p>
            <dl className="flex flex-col gap-[22px]">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.16em] text-dim">{item.label}</dt>
                  <dd className="mt-1 text-2xl leading-snug text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
            {showMap && (
              <iframe
                title="Map showing Bradford"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.8231!2d-1.7401!3d53.7841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be5c123456789%3A0xabcdef123456789!2sBradford!5e0!3m2!1sen!2suk!4v1699999999999!5m2!1sen!2suk"
                width="100%"
                height="250"
                loading="lazy"
                allowFullScreen
                className="rounded-sm border-0"
              />
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rv flex min-w-0 flex-[1_1_420px] flex-col gap-5 border border-line bg-card p-8 sm:p-10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor={`${id || "form"}-name`} className="text-[15px] font-semibold">
                Your name
              </label>
              <input id={`${id || "form"}-name`} name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor={`${id || "form"}-message`} className="text-[15px] font-semibold">
                What do you need?
              </label>
              <textarea
                id={`${id || "form"}-message`}
                name="message"
                rows={5}
                required
                className={`${fieldClass} py-3.5`}
              />
            </div>
            <button
              type="submit"
              className="min-h-[54px] cursor-pointer rounded-sm bg-gold text-[17px] font-semibold text-[#18211f] transition hover:brightness-110"
            >
              Send on WhatsApp
            </button>
            <p className="text-sm leading-relaxed text-dim" role="status">
              {opened ? (
                <>
                  WhatsApp should now be open with your message ready to send. If nothing happened, message us on{" "}
                  <a className="text-kick underline" href={site.whatsappQuote} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>{" "}
                  or call{" "}
                  <a className="text-kick underline" href={site.phoneHref}>
                    {site.phone}
                  </a>
                  .
                </>
              ) : (
                "This opens WhatsApp with your message ready to send to us."
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
