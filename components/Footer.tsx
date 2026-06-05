import Link from "next/link";
import { Mail, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { site, contact, company, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-container px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-mute">
              One connected platform to run your entire school or college — from
              admission to marksheet, fees to communication — designed around
              the Nepali Bikram Sambat calendar.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
                80+ Modules
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
                11 Portals
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
                BS + AD
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-mute transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/demo"
                  className="text-sm text-ink-mute transition-colors hover:text-brand"
                >
                  Request a Demo
                </Link>
              </li>
              <li>
                <a
                  href={contact.loginUrl}
                  className="inline-flex items-center gap-1 text-sm text-ink-mute transition-colors hover:text-brand"
                >
                  Login Portal <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-mute">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
                <a href={`mailto:${contact.email}`} className="hover:text-brand">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                {contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-mute">
            © {site.name} {site.edition.split("·")[0].trim()} · Made for Nepal
          </p>
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft transition-colors hover:text-brand"
          >
            A project by {company.name}
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
