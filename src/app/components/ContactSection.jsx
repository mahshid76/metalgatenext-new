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
  // idle | sending | sent | opened (email app) | error
  const [status, setStatus] = useState("idle");
  const hasEndpoint = Boolean(site.formEndpoint);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // honeypot: bots fill hidden fields
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!hasEndpoint) {
      // No form service configured: open the visitor's email app with the message pre-filled.
      const subject = encodeURIComponent(`Website enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nContact: ${contact}\n\n${message}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("opened");
      return;
    }

    data.set("_subject", `Website enquiry from ${name}`);
    if (contact.includes("@")) data.set("email", contact);
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
              <label htmlFor={`${id || "form"}-contact`} className="text-[15px] font-semibold">
                Email or phone
              </label>
              <input id={`${id || "form"}-contact`} name="contact" type="text" required autoComplete="email" className={fieldClass} />
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
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <button
              type="submit"
              disabled={status === "sending"}
              className="min-h-[54px] cursor-pointer rounded-sm bg-gold text-[17px] font-semibold text-[#18211f] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>
            <p className="text-sm leading-relaxed text-dim" role="status">
              {status === "sent" && "Thanks, your message has been sent. We'll be in touch soon."}
              {status === "error" && (
                <>
                  Sorry, something went wrong. Please call{" "}
                  <a className="text-kick underline" href={site.phoneHref}>
                    {site.phone}
                  </a>{" "}
                  or email{" "}
                  <a className="text-kick underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  .
                </>
              )}
              {status === "opened" && (
                <>
                  Your email app should now be open with your message ready to send. If nothing happened, email us
                  at{" "}
                  <a className="text-kick underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  .
                </>
              )}
              {(status === "idle" || status === "sending") && (
                <>
                  {hasEndpoint ? "Prefer a quicker reply? " : "This opens your email app with your message ready to send. For a quicker reply, "}
                  <a className="text-kick underline" href={site.whatsappQuote} target="_blank" rel="noopener noreferrer">
                    message us on WhatsApp
                  </a>
                  .
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
