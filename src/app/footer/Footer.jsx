import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { nav, site } from "../data/site";

const social = [
  { label: "Facebook", href: site.facebook, Icon: FaFacebookF },
  { label: "Instagram", href: site.instagram, Icon: FaInstagram },
  { label: "WhatsApp", href: site.whatsapp, Icon: FaWhatsapp },
];

export default function Footer() {
  return (
    <footer className="on-dark border-t border-line bg-deep">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image src="/assets/logo2.svg" alt="" width={40} height={40} />
            <span className="text-lg font-extrabold tracking-[0.14em] text-ink">
              METAL <span className="text-gold">GATE</span>{" "}
              <span className="text-xs font-semibold tracking-[0.22em] text-dim">LEEDS</span>
            </span>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-dim">
            Metalgate Leeds Ltd provides expert metal fabrication across Leeds and West Yorkshire,
            specialising in custom metalwork, gates, railings and structural steel, with a focus on
            quality, precision and reliable service.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-kick">Contact</h2>
          <ul className="space-y-2.5 text-[15px] text-body">
            <li>
              <a href={site.phoneHref} className="hover:text-ink">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              {site.address[0]}, {site.address[1]}
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-kick">Explore</h2>
          <ul className="space-y-2.5 text-[15px] text-body">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line3 text-ink transition hover:bg-gold hover:text-[#18211f]"
              >
                <Icon className="text-lg" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-[1320px] px-6 py-6 text-sm text-dim sm:px-8">
          © {new Date().getFullYear()} Metalgate Leeds Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
